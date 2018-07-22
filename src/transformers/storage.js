const {log} = require('../utils.js');
const _ = require('lodash');
const uuidv1 = require('uuid/v1');
const {knex} = require('../knex.js');

async function get(id, context) {
  const user = context.get('app.clientId');

  let result = await knex('docs')
    .where('id', id)
    .select();
  if (!result.length) {
    return {statusCode: 404, error: 'id not found'};
  }
  const typeObj = await knex('docs')
    .where('id', result[0].type)
    .select();

  if (!typeObj.length) {
    return {statusCode: 404, error: 'type not found'};
  }
  const type = JSON.parse(typeObj[0].data);
  if (!type.permissions.read === 'any') {
    return {statusCode: 403, error: 'no read access'};
  }

  if (type.contenttype === 'application/json') {
    result = result[0];
    return {
      statusCode: 200,
      data: Object.assign({}, JSON.parse(result.data), {
        _owner: result.owner,
        _type: result.type,
        _id: result.id,
        _version: result.version,
        _client: result.client
      })
    };
  } else {
    return {
      statusCode: 500,
      error: `${type} has invalid content-type. User "${
        typeObj[0].owner
      }" needs to fix the type definition.`
    };
  }
}

async function find(opts, ctx) {
  const _type = opts._type || metaTypeUuid;
  const type = (await get(_type, ctx)).data;
  const keys = Object.keys(opts).filter(key => key !== '_type');

  for (let idx = 0; idx < type.indexes.length; ++idx) {
    const index = type.indexes[idx];
    if (
      index.type === 'id' &&
      index.keys.length === keys.length &&
      index.keys.filter(key => opts.hasOwnProperty(key)).length === keys.length
    ) {
      const result = await knex('indexes')
        .where('type', _type)
        .where('idx', idx)
        .where('key', JSON.stringify(index.keys.map(key => opts[key])))
        .select('val');
      return {statusCode: 200, data: result.map(({val}) => val)};
    }
  }
  return {statusCode: 400, error: `no index for ${JSON.stringify(keys)}`};
}

function indexKeys(obj, type) {
  const result = [];
  for (let idx = 0; idx < type.indexes.length; ++idx) {
    const index = type.indexes[idx];
    if ((index.type = 'id')) {
      const arrayKeys = index.keys.filter(k => Array.isArray(obj[k]));
      if (arrayKeys.length === 1) {
        // only support one array-key to avoid possible combinatorial explosion
        for (const key of obj[arrayKeys[0]]) {
          result.push({
            type: obj._type,
            idx,
            key: JSON.stringify(
              index.keys.map(k => (k === arrayKeys[0] ? key : obj[k]))
            ),
            val: obj._id
          });
        }
      } else {
        result.push({
          type: obj._type,
          idx,
          key: JSON.stringify(index.keys.map(k => obj[k])),
          val: obj._id
        });
      }
    } else {
      // TODO log invalid index type
    }
  }
  return result;
}

async function unindex(obj, type) {
  for (const row of indexKeys(obj, type)) {
    try {
      await knex('indexes')
        .where(row)
        .del();
    } catch (e) {
      // TODO log ...
      // ignore
    }
  }
}
async function index(obj, type) {
  for (const row of indexKeys(obj, type)) {
    try {
      await knex('indexes').insert(row);
    } catch (e) {
      // TODO log ...
      // ignore
    }
  }
}
function findPutData(obj, type) {
  const result = {
    id: obj._id,
    owner: obj._owner,
    client: obj._client,
    type: obj._type,
    version: obj._version
  };

  if (type.contenttype === 'application/json') {
    const keys = Object.keys(obj).filter(k => !k.startsWith('_'));
    result.data = JSON.stringify(_.fromPairs(keys.map(k => [k, obj[k]])));
  } else {
    throw {statusCode: 500, error: 'invalid contenttype'};
  }
  return result;
}

async function put(obj, ctx) {
  const user = ctx.get('storage.user');
  if (!user) {
    return {statusCode: 403, error: 'invalid user'};
  }
  if (typeof obj._type !== 'string') {
    return {statusCode: 400, error: 'missing _type'};
  }
  let type;
  try {
    type = (await get(obj._type, ctx)).data;
    if (!type || type._type !== metaTypeUuid) {
      throw {type: obj._type};
    }
  } catch (e) {
    log.error('invalid type', e);
    return {statusCode: 400, error: 'invalid _type'};
  }

  let result, status;

  if (obj._id) {
    const prev = (await get(obj._id, ctx)).data;
    await verifyModifiable(obj, {prev, user, type});

    let version = Date.now();
    while (new Date(version).toISOString() <= prev._version) {
      ++version;
    }
    obj._version = new Date(version).toISOString();
    obj._owner = user;
    obj._client = ctx.get('app.clientId');

    await unindex(prev, type);
    await index(obj, type);
    result = findPutData(obj, type);
    status = await knex('docs')
      .where('id', obj._id)
      .update(result);
  } else {
    obj._id = uuidv1();
    obj._owner = user;
    obj._client = ctx.get('app.clientId');
    obj._version = new Date().toISOString();

    index(obj, type);
    result = findPutData(obj, type);
    status = await knex('docs').insert(result);
  }

  return {
    statusCode: 200,
    data: {_id: result.id, _version: result.version}
  };
}

async function verifyModifiable({_id, _version}, {prev, user, type}) {
  if (prev._owner !== user) {
    throw {statusCode: 403, error: 'forbidden, not owner'};
  }
  if (_version && _version !== prev._version) {
    throw {statusCode: 409, error: 'conflict'};
  }
}

async function del(_id, ctx) {
  const user = ctx.get('storage.user');
  const prev = (await get(_id, ctx)).data;
  const type = (await get(prev._type, ctx)).data;

  await verifyModifiable({_id}, {prev, user, type});
  await unindex(prev, type);

  await knex('docs')
    .where({id: prev._id, version: prev._version})
    .del();

  if (prev._type === metaTypeUuid) {
    // if we delete at type, then we also delete all documents of that type.
    await Promise.all([
      knex('docs')
        .where({type: prev._id})
        .del(),
      knex('indexes')
        .where({type: prev._id})
        .del()
    ]);
  }
  return {statusCode: 200, data: {}};
}

module.exports = async (request, context) => {
  try {
    let result;
    try {
      if (request.get) {
        result = get(request.get, context);
      } else if (request.find) {
        result = find(request.find, context);
      } else if (request.put) {
        result = put(request.put, context);
      } else if (request.delete) {
        result = del(request.delete, context);
      } else {
        result = {
          statusCode: 400,
          error: 'storage need operation: get, find, put or delete'
        };
      }
      result = await result;
    } catch (e) {
      if (e.statusCode) {
        return e;
      } else {
        throw e;
      }
    }
    return result;
  } catch (e) {
    return {statusCode: 500, error: e.message};
  }
};

const metaTypeUuid = 'bf130fb7-8bd4-44fd-ad1d-43b6020ad102';
async function initDB() {
  if (!await knex.schema.hasTable('docs')) {
    await knex.schema.createTable('docs', table => {
      table.uuid('id').notNullable();
      table.uuid('type').notNullable();
      table.string('owner').notNullable();
      table.string('client').notNullable();
      table.timestamp('version').notNullable();
      table.binary('data').notNullable();
      table.primary(['id']);
    });
    await knex.schema.createTable('indexes', table => {
      table.uuid('type').notNullable();
      table.integer('idx').notNullable();
      table.string('key').notNullable();
      table.string('val').notNullable();
      table.primary(['type', 'idx', 'key', 'val']);
    });
    await knex('docs').insert({
      type: metaTypeUuid,
      id: metaTypeUuid,
      owner: 'openplatform',
      client: 'openplatform',
      version: new Date().toISOString(),
      data: JSON.stringify({
        name: 'type',
        contenttype: 'application/json',
        charset: 'utf-8',
        permissions: {
          read: 'any'
        },
        indexes: [{type: 'id', keys: ['_owner', 'name']}]
      })
    });
    await knex('indexes').insert({
      type: metaTypeUuid,
      idx: 0,
      key: '["openplatform","type"]',
      val: metaTypeUuid
    });
  }
}
initDB();
