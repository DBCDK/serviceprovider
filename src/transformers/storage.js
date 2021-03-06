/*jshint loopfunc:true */
/* eslint-disable no-use-before-define */
const {log} = require('../utils.js');
const _ = require('lodash');
const uuidv4 = require('uuid/v4');
const {knex} = require('../knex.js');
const metaTypeUuid = 'bf130fb7-8bd4-44fd-ad1d-43b6020ad102';
const sharp = require('sharp');

const ANONYMOUS_USER = 'ANONYMOUS_USER';

const onUpdateListeners = [];
function onUpdate(func) {
  onUpdateListeners.push(func);
}
const onDeleteListeners = [];
function onDelete(func) {
  onDeleteListeners.push(func);
}
const onCreateListeners = [];
function onCreate(func) {
  onCreateListeners.push(func);
}

function getUser(ctx) {
  let user = ctx.get('storage.user');
  if (!user) {
    user = ctx.get('user.uniqueId');
  }
  if (!user) {
    user = ANONYMOUS_USER;
  }

  return user;
}

function parseJsonDoc(result) {
  return Object.assign({}, JSON.parse(result.data.toString('utf-8')), {
    _owner: result.owner,
    _type: result.type,
    _id: result.id,
    _version: result.version,
    _client: result.client,
    _created: result.created
  });
}

async function get({_id}, user, context) {
  let result = await knex('docs')
    .where('id', _id)
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
  if (type.permissions.read === 'if object.public' && type.type === 'json') {
    // tested below after we fetch actual data
  } else if (type.permissions.read !== 'any') {
    return {statusCode: 403, error: 'no read access'};
  }

  result = result[0];
  result.version = new Date(result.version).toISOString();
  result.created = new Date(result.created).toISOString();
  switch (type.type) {
    case 'json':
      const data = parseJsonDoc(result);

      if (type.permissions.read === 'if object.public') {
        if (!data.public) {
          if (result.owner !== user) {
            return {statusCode: 403, error: 'no read access'};
          }
        }
      }

      return {
        statusCode: 200,
        data
      };

    case 'jpeg':
    case 'image':
      return {
        statusCode: 200,
        data: {
          _data: result.data.toString('latin1'),
          _owner: result.owner,
          _type: result.type,
          _id: result.id,
          _version: result.version,
          _client: result.client,
          _created: result.created
        }
      };
    default:
      return {
        statusCode: 500,
        error: `${type} has invalid content-type. User "${
          typeObj[0].owner
        }" needs to fix the type definition.`
      };
  }
}

const uuidRegExp = new RegExp(
  '^xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx$'.replace(/x/g, '[0-9a-fA-F]')
);

async function find(opts, user, ctx) {
  if (opts._type === '*') {
    if (Object.keys(opts).length !== 2 || opts._owner !== user) {
      return {
        statusCode: 400,
        error:
          'find _type wildcard only allowed when finding all objects for current user'
      };
    }
    const result = await knex('docs')
      .where('owner', opts._owner)
      .select('id');
    return {statusCode: 200, data: result.map(o => o.id)};
  }

  // eslint-disable-next-line no-use-before-define
  const _type = await lookupType(opts._type || metaTypeUuid, ctx);
  const type = (await get({_id: _type}, user, ctx)).data;
  const keys = Object.keys(opts).filter(key => key !== '_type');

  if (Array.isArray(type.indexes)) {
    // make sure private and admin indexes overrides public indexes, by traversing in sorted order
    const indexes = _.sortBy(
      type.indexes,
      o => String(o.keys) + !o.admin + !o.private
    );

    for (const index of indexes) {
      const idx = type.indexes.indexOf(index);
      if (
        index.value === '_id' &&
        index.keys.length === keys.length &&
        index.keys.filter(key => opts.hasOwnProperty(key)).length ===
          keys.length
      ) {
        if (index.private && user !== opts._owner) {
          continue;
        }
        if (index.admin && !ctx.get('storage.admin')) {
          continue;
        }
        const result = await knex('idIndex')
          .where('type', _type)
          .where('idx', idx)
          .where(
            'key',
            index.keys.map(key => JSON.stringify(opts[key])).join('\n')
          )
          .select('val');
        return {statusCode: 200, data: result.map(o => o.val)};
      }
    }
  }
  return {statusCode: 400, error: `no index for ${JSON.stringify(keys)}`};
}

async function count(opts, user, ctx) {
  // eslint-disable-next-line no-use-before-define
  const _type = await lookupType(opts._type || metaTypeUuid, ctx);
  const type = (await get({_id: _type}, user, ctx)).data;
  const keys = Object.keys(opts).filter(key => key !== '_type');

  if (Array.isArray(type.indexes)) {
    for (let idx = 0; idx < type.indexes.length; ++idx) {
      const index = type.indexes[idx];
      if (
        index.value === '_count' &&
        index.keys.length === keys.length &&
        index.keys.filter(key => opts.hasOwnProperty(key)).length ===
          keys.length
      ) {
        const [result] = await knex('countIndex')
          .where('type', _type)
          .where('idx', idx)
          .where(
            'key',
            index.keys.map(key => JSON.stringify(opts[key])).join('\n')
          )
          .select('val');
        return {statusCode: 200, data: (result && result.val) || 0};
      }
    }
  }
  return {statusCode: 400, error: `no index for ${JSON.stringify(keys)}`};
}

async function lookupType(type, ctx) {
  if (type.match(uuidRegExp)) {
    return type;
  }

  const splitPos = type.indexOf('.');
  if (splitPos === -1) {
    throw {
      statusCode: 400,
      error: 'invalid type, must be an uuid or have the form: USERID.TYPENAME'
    };
  }

  const result = (await find(
    {_owner: type.slice(0, splitPos), name: type.slice(splitPos + 1)},
    ctx
  )).data;

  if (!result.length) {
    throw {
      statusCode: 400,
      error: `type does not exist: ${type}`
    };
  }
  return result[0];
}

async function indexKeys(obj, type, action) {
  const result = [];
  for (let idx = 0; idx < type.indexes.length; ++idx) {
    const index = type.indexes[idx];
    const arrayKeys = index.keys.filter(k => Array.isArray(obj[k]));
    if (arrayKeys.length === 1) {
      // only support one array-key to avoid possible combinatorial explosion
      for (const key of obj[arrayKeys[0]]) {
        result.push({
          type: obj._type,
          idx,
          key: index.keys
            .map(k => JSON.stringify(k === arrayKeys[0] ? key : obj[k]))
            .join('\n'),
          val: index.value
        });
      }
    } else {
      result.push({
        type: obj._type,
        idx,
        key: index.keys.map(k => JSON.stringify(obj[k])).join('\n'),
        val: index.value
      });
    }
  }

  const promises = [];
  if (action === 'remove') {
    promises.push(
      knex('idIndex')
        .where({val: obj._id})
        .del()
    );
    for (const index of result) {
      const row = Object.assign({}, index);
      delete row.val;
      if (index.val === '_count') {
        promises.push(
          (async () => {
            const [prevRow] = await knex('countIndex')
              .select('val')
              .where(row);
            if (prevRow && prevRow.val <= 1) {
              await knex('countIndex')
                .where(row)
                .del();
            } else {
              await knex('countIndex')
                .where(row)
                .decrement('val', 1);
            }
          })()
        );
      }
    }
  }
  if (action === 'add') {
    for (const index of result) {
      const indexType = type.indexes[index.idx];
      if (
        type.permissions.read === 'any' ||
        (type.permissions.read === 'if object.public' && obj.public) ||
        (indexType.private && indexType.keys[0] === '_owner') ||
        indexType.admin
      ) {
        const row = Object.assign({}, index);
        delete row.val;
        if (index.val === '_count') {
          promises.push(
            (async () => {
              if (
                (await knex('countIndex')
                  .select('val')
                  .where(row)).length
              ) {
                await knex('countIndex')
                  .where(row)
                  .increment('val', 1);
              } else {
                await knex('countIndex').insert(
                  Object.assign({}, row, {val: 1})
                );
              }
            })()
          );
        }
        if (index.val === '_id') {
          promises.push(
            knex('idIndex').insert(Object.assign({}, row, {val: obj._id}))
          );
        }
      }
    }
  }
  await Promise.all(promises);
}

async function verifyModifiable(
  {_id, _version, indexes},
  {prev, user, type},
  action
) {
  if (prev._owner !== user) {
    throw {statusCode: 403, error: 'forbidden, not owner'};
  }
  if (_version && +new Date(_version) !== +new Date(prev._version)) {
    throw {statusCode: 409, error: 'conflict'};
  }
  if (type._id === metaTypeUuid) {
    // check that no prevous indexes has been modified
    // since it is not supported currently
    if (
      action === 'update' &&
      !_.isEqual(
        prev.indexes,
        indexes ? indexes.slice(0, prev.indexes.length) : []
      )
    ) {
      throw {statusCode: 409, error: 'modify existing index not supported'};
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

  if (type.type === 'json') {
    const keys = Object.keys(obj).filter(k => !k.startsWith('_'));
    result.data = Buffer.from(
      JSON.stringify(_.fromPairs(keys.map(k => [k, obj[k]]))),
      'utf-8'
    );
  } else if (type.type === 'jpeg' || type.type === 'image') {
    result.data = Buffer.from(obj._data, 'latin1');
  } else {
    throw {statusCode: 500, error: 'invalid contenttype'};
  }
  return result;
}

async function reindex(type) {
  if (type.type !== 'json') {
    return;
  }
  log.info('Reindexing started', {type});
  let counter = 0;
  let remaining;
  await knex
    .select('*')
    .from('docs')
    .where('type', type._id)
    .stream(stream => {
      stream.on('data', async data => {
        stream.pause();
        const parsed = parseJsonDoc(data);
        const doWork = async () => {
          await indexKeys(parsed, type, 'remove');
          await indexKeys(parsed, type, 'add');
        };
        remaining = doWork();
        await remaining;
        counter++;
        if (counter % 1000 === 0) {
          log.info('Reindexing status', {_id: type._id, counter});
        }
        stream.resume();
      });
    });
  await remaining;
  log.info('Reindexing completed', {_id: type._id, counter});
}
async function hasRole(user, role) {
  if (!role.match(uuidRegExp)) {
    return false;
  }
  const res = await knex('roles')
    .select('*')
    .where({userId: user, roleId: role});
  return res.length > 0;
}

async function put(obj, user, ctx) {
  if (user === ANONYMOUS_USER) {
    return {statusCode: 403, error: 'no write access'};
  }
  if (typeof obj._type !== 'string') {
    return {statusCode: 400, error: 'missing _type'};
  }

  obj._type = await lookupType(obj._type, ctx);

  let type;
  try {
    type = (await get({_id: obj._type}, user, ctx)).data;
    if (!type || type._type !== metaTypeUuid) {
      throw {type: obj._type};
    }
  } catch (e) {
    log.error('invalid type', e);
    return {statusCode: 400, error: 'invalid _type'};
  }

  let result, status;

  if (obj._id) {
    const prev = (await get({_id: obj._id}, user, ctx)).data;
    if (!prev) {
      return {statusCode: 404, error: 'id not found'};
    }
    await verifyModifiable(obj, {prev, user, type}, 'update');

    let version = Date.now();
    while (new Date(version).toISOString() <= prev._version) {
      ++version;
    }
    obj._version = new Date(version).toISOString();
    obj._owner = user;
    obj._client = ctx.get('app.clientId');

    await indexKeys(prev, type, 'remove');
    await indexKeys(obj, type, 'add');
    result = findPutData(obj, type);
    status = await knex('docs')
      .where('id', obj._id)
      .update(result);

    onUpdateListeners.forEach(l => l(prev, obj, type, {scan, get}));

    if (type._id === metaTypeUuid) {
      await reindex(obj);
    }
  } else {
    obj._id = uuidv4();
    obj._owner = user;
    obj._client = ctx.get('app.clientId');
    obj._version = new Date().toISOString();

    await indexKeys(obj, type, 'add');
    result = findPutData(obj, type);
    status = await knex('docs').insert(result);
    onCreateListeners.forEach(l => l(obj, type, {scan, get}));
  }

  return {
    statusCode: 200,
    data: {_id: result.id, _version: result.version}
  };
}

async function del({_id}, user, ctx) {
  const prevResponse = await get({_id}, user, ctx);
  if (prevResponse.statusCode !== 200) {
    if (prevResponse.statusCode === 403) {
      return {statusCode: 403, error: 'no write access'};
    }
    return prevResponse;
  }
  const prev = prevResponse.data;
  const type = (await get({_id: prev._type}, user, ctx)).data;

  await verifyModifiable({_id}, {prev, user, type});
  await indexKeys(prev, type, 'remove');

  await knex('docs')
    .where({id: prev._id, version: prev._version})
    .del();

  if (prev._type === metaTypeUuid) {
    // if we delete at type, then we also delete all documents of that type.
    await Promise.all([
      knex('docs')
        .where({type: prev._id})
        .del(),
      knex('idIndex')
        .where({type: prev._id})
        .del(),
      knex('countIndex')
        .where({type: prev._id})
        .del()
    ]);
  }
  onDeleteListeners.forEach(l => l(prev, type, {scan, get}));
  return {statusCode: 200, data: {}};
}

async function scan(
  {_type, index, after, before, reverse, limit, startsWith, expand = false},
  user,
  ctx
) {
  _type = await lookupType(_type, ctx);

  let type = await get({_id: _type}, user, ctx);
  if (!Array.isArray(type.data && type.data.indexes)) {
    return {statusCode: 400, error: 'invalid _type'};
  }

  let indexes = type.data.indexes.filter(
    o => _.isEqual(index, o.keys) && o.admin && ctx.get('storage.admin')
  );

  if (indexes.length === 0) {
    indexes = type.data.indexes.filter(
      o =>
        _.isEqual(index, o.keys) &&
        o.private &&
        startsWith &&
        startsWith[0] === user
    );
  }

  if (indexes.length === 0) {
    indexes = type.data.indexes.filter(
      o => _.isEqual(index, o.keys) && !o.private && !o.admin
    );
  }

  if (indexes.length !== 1) {
    return {statusCode: 400, error: 'no such public index'};
  }

  const idx = type.data.indexes.indexOf(indexes[0]);
  const idxType = type.data.indexes[idx].value;
  let dbIndex;

  if (idxType === '_id') {
    dbIndex = 'idIndex';
  } else if (idxType === '_count') {
    dbIndex = 'countIndex';
  } else {
    return {
      statusCode: 400,
      error: 'the indexed value has to be _count or _id'
    };
  }

  let query = knex(dbIndex);
  expand = expand && dbIndex === 'idIndex' && type.data.type === 'json';

  if (expand) {
    query = query
      .select(
        'key',
        'val',
        'docs.id',
        'docs.version',
        'docs.client',
        'docs.owner',
        'docs.type',
        'docs.data',
        'docs.created'
      )
      .where({'idIndex.type': _type, idx})
      .innerJoin('docs', 'val', 'docs.id');
  } else {
    query = query.select('key', 'val').where({type: _type, idx});
  }

  if (after) {
    query = query.andWhere(
      'key',
      '>',
      after.map(o => JSON.stringify(o)).join('\n')
    );
  }
  if (before) {
    query = query.andWhere(
      'key',
      '<',
      before.map(o => JSON.stringify(o)).join('\n')
    );
  }

  if (startsWith) {
    query = query.andWhere(
      'key',
      'like',
      startsWith.map(o => JSON.stringify(o)).join('\n') + '%'
    );
  }
  if (before && !after) {
    reverse = !reverse;
  }
  if (reverse) {
    query = query.orderBy('key', 'desc');
  } else {
    query = query.orderBy('key');
  }

  if (typeof limit !== 'undefined') {
    query = query.limit(limit);
  }

  let result = await query;

  if (expand) {
    // the index and docs are not updated in one atomic operation
    // hence we remove object when the scanned index
    // is public but the object is private
    result = result
      .map(r => parseJsonDoc(r))
      .filter(
        data => data && (indexes[0].admin || indexes[0].private || data.public)
      );
  } else {
    result = result.map(({key, val}) => ({
      key: key
        .split('\n')
        .filter(s => !!s)
        .map(s => JSON.parse(s)),
      val
    }));
  }

  return {statusCode: 200, data: result};
}

async function assignRole({userId, roleId}, user, ctx) {
  if (!userId) {
    return {statusCode: 400, error: 'missing userId'};
  }
  if (!roleId) {
    return {statusCode: 400, error: 'missing roleId'};
  }
  const role = (await get({_id: roleId}, user, ctx)).data;
  if (role._owner !== user) {
    return {statusCode: 403, error: 'no write access'};
  }
  await knex('roles').insert({
    userId,
    roleId
  });
  return {statusCode: 200, data: {}};
}

async function unassignRole({userId, roleId}, user, ctx) {
  if (!userId) {
    return {statusCode: 400, error: 'missing userId'};
  }
  if (!roleId) {
    return {statusCode: 400, error: 'missing roleId'};
  }
  const role = (await get({_id: roleId}, user, ctx)).data;
  if (role._owner !== user) {
    return {statusCode: 403, error: 'no write access'};
  }
  await knex('roles')
    .where({userId})
    .del();

  return {statusCode: 200, data: {}};
}

async function getRoles({}, user, ctx) {
  const res = await knex('roles')
    .select('*')
    .where({userId: user});

  const roles = (await Promise.all(
    res.map(async row => {
      try {
        return (await get({_id: row.roleId}, user, ctx)).data;
      } catch (e) {
        return null;
      }
    })
  )).filter(role => !!role);
  return {statusCode: 200, data: roles};
}

async function storageTransformer(request, context) {
  let user = getUser(context);
  if (!user) {
    return {statusCode: 403, error: 'invalid user'};
  }
  if (request.role) {
    if (!(await hasRole(user, request.role))) {
      return {statusCode: 403, error: 'Invalid role for user'};
    }
    user = request.role;
  }
  try {
    let result;
    try {
      if (request.get) {
        result = get(request.get, user, context);
      } else if (request.find) {
        result = find(request.find, user, context);
      } else if (request.put) {
        result = put(request.put, user, context);
      } else if (request.delete) {
        result = del(request.delete, user, context);
      } else if (request.scan) {
        result = scan(request.scan, user, context);
      } else if (request.count) {
        result = count(request.count, user, context);
      } else if (request.assign_role) {
        result = assignRole(request.assign_role, user, context);
      } else if (request.unassign_role) {
        result = unassignRole(request.unassign_role, user, context);
      } else if (request.get_roles) {
        result = getRoles(request.get_roles, user, context);
      } else {
        result = {
          statusCode: 400,
          error:
            'storage need operation: assign_role, get, find, scan, put or delete'
        };
      }
      result = await result;
    } catch (e) {
      if (e.statusCode) {
        return e;
      }
      throw e;
    }
    return result;
  } catch (e) {
    return {statusCode: 500, error: e.message};
  }
}

/**
 * Recognise magic number for PNG
 */
function bufferIsPNG(buffer) {
  const magic = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
  for (let i = 0; i < 8; ++i) {
    if (buffer[i] !== magic[i]) {
      return false;
    }
  }
  return true;
}

/**
 * Recognise magic number for GIF
 */
function bufferIsGIF(buffer) {
  return (
    buffer[0] === 0x47 &&
    buffer[1] === 0x49 &&
    buffer[2] === 0x46 &&
    buffer[3] === 0x38 &&
    (buffer[4] === 0x37 || buffer[4] === 0x39) &&
    buffer[5] === 0x61
  );
}

/**
 * Recognise magic number for JPEG
 */
function bufferIsJPEG(buffer) {
  return (
    buffer[0] === 0xff &&
    buffer[1] === 0xd8 &&
    buffer[buffer.length - 2] === 0xff &&
    buffer[buffer.length - 1] === 0xd9
  );
}

async function storageMiddleware(req, res, next) {
  if (req.method === 'GET' && req.url.slice(1)) {
    const uuid = req.url.slice(1).replace(/[?].*/, '');
    try {
      const [doc] = await knex('docs')
        .where('id', uuid)
        .select();
      const type = JSON.parse(
        (await knex('docs')
          .where('id', doc.type)
          .select())[0].data.toString('utf-8')
      );
      if (type.permissions.read !== 'any') {
        return res.status(403).end('forbidden');
      }
      if (type.type !== 'jpeg' && type.type !== 'image') {
        return res
          .status(400)
          .end(
            'only images can be fetched directly through url (may change later). Use API instead.'
          );
      }
      const {width, height} = req.query;
      let data = doc.data;
      if ((width || height) && !bufferIsGIF(data)) {
        data = await sharp(data)
          .resize(width && parseInt(width), height && parseInt(height))
          .toBuffer();
      }

      if (bufferIsJPEG(data)) {
        res.header('Content-Type', 'image/jpeg');
      } else if (bufferIsPNG(data)) {
        res.header('Content-Type', 'image/png');
      } else if (bufferIsGIF(data)) {
        res.header('Content-Type', 'image/gif');
      } else {
        return res.status(400).end('invalid image format');
      }
      return res.end(data);
    } catch (e) {
      log.error('storage middleware error', {error: String(e)});
      // do nothing
    }
  }
  return next();
}

async function initDB() {
  if (!(await knex.schema.hasTable('countIndex'))) {
    await knex.schema.createTable('countIndex', table => {
      table.uuid('type').notNullable();
      table.integer('idx').notNullable();
      table.string('key').notNullable();
      table.integer('val').notNullable();
      table.primary(['type', 'idx', 'key']);
    });
  }
  if (!(await knex.schema.hasTable('idIndex'))) {
    await knex.schema.createTable('idIndex', table => {
      table.uuid('type').notNullable();
      table.integer('idx').notNullable();
      table.string('key').notNullable();
      table.uuid('val').notNullable();
      table.primary(['type', 'idx', 'key', 'val']);
    });
    await knex('idIndex').insert({
      type: metaTypeUuid,
      idx: 0,
      key: '"openplatform"\n"type"',
      val: metaTypeUuid
    });
  }
  if (!(await knex.schema.hasTable('docs'))) {
    await knex.schema.createTable('docs', table => {
      table.uuid('id').notNullable();
      table.uuid('type').notNullable();
      table.string('owner').notNullable();
      table.string('client').notNullable();
      table.timestamp('version').notNullable();
      table.binary('data').notNullable();
      table.primary(['id']);
    });
    await knex('docs').insert({
      type: metaTypeUuid,
      id: metaTypeUuid,
      owner: 'openplatform',
      client: 'openplatform',
      version: new Date().toISOString(),
      data: JSON.stringify({
        name: 'type',
        type: 'json',
        charset: 'utf-8',
        permissions: {
          read: 'any'
        },
        indexes: [{value: '_id', keys: ['_owner', 'name']}]
      })
    });
  }
  if (!(await knex.schema.hasTable('roles'))) {
    await knex.schema.createTable('roles', table => {
      table.string('userId').notNullable();
      table.uuid('roleId').notNullable();
      table.primary(['userId', 'roleId']);
    });
  }
  if (!(await knex.schema.hasColumn('docs', 'created'))) {
    await knex.schema.table('docs', table => {
      table
        .timestamp('created')
        .notNullable()
        .defaultTo(knex.fn.now());
    });
  }
}
initDB();

module.exports = {
  storageTransformer,
  storageMiddleware,
  onUpdate,
  onDelete,
  onCreate
};
