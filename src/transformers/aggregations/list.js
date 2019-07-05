/**
 * @file
 * Storage list aggregation.
 *
 * This is responsible for maintaining the storage_list_aggr table
 *
 */
const {log} = require('../../utils.js');
const _ = require('lodash');
const {knex} = require('../../knex.js');
const createCtx = ctx => {
  return {
    get: path => {
      return _.get(ctx, path);
    }
  };
};
const anonCtx = createCtx({});
const adminCtx = createCtx({storage: {admin: true}});

async function onUpdate(prev, obj, type, storage) {
  if (
    obj._type === 'bf130fb7-8bd4-44fd-ad1d-43b6020ad102' &&
    obj.aggregations &&
    obj.aggregations.includes('list')
  ) {
    // type is updated - init
    // console.log('init');
    await knex('storage_list_aggr').del();
    const lists = (await storage.scan(
      {
        _type: obj._id,
        index: ['cf_type', 'cf_key', 'cf_created'],
        startsWith: ['list']
      },
      anonCtx
    )).data.map(l => l.val);

    for (let i = 0; i < lists.length; i++) {
      await refreshList(lists[i], obj, storage);
    }

    return;
  }

  // console.log('list');

  if (!type.aggregations || !type.aggregations.includes('list')) {
    return;
  }

  if (prev.cf_type && !obj.cf_type) {
    return await onDelete(prev, type, storage);
  }

  switch (obj.cf_type) {
    case 'list':
      return await refreshList(obj._id, type, storage);
    case 'USER_PROFILE':
      return await updateOwner(obj, type);
    default:
      break;
  }
}
async function onDelete(prev, type, storage) {
  if (!type.aggregations || !type.aggregations.includes('list')) {
    return;
  }
  switch (prev.cf_type) {
    case 'list':
      return await refreshList(prev._id, type, storage);
    case 'list-entry':
      return await refreshList(prev.cf_key, type, storage);
    case 'comment':
      const listId = await getListIdFromComment(prev, storage);
      return await refreshList(listId, type, storage);
    case 'follows':
      return await refreshList(prev.cf_key, type, storage);
    case 'USER_PROFILE':
      return await deleteOwner(prev, type);
    default:
      break;
  }
}
async function onCreate(obj, type, storage) {
  if (!type.aggregations || !type.aggregations.includes('list')) {
    return;
  }
  switch (obj.cf_type) {
    case 'list':
      return await refreshList(obj._id, type, storage);
    case 'list-entry':
      return await refreshList(obj.cf_key, type, storage);
    case 'comment':
      const listId = await getListIdFromComment(obj, storage);
      return await refreshList(listId, type, storage);
    case 'follows':
      return await refreshList(obj.cf_key, type, storage);
    default:
      break;
  }
}

async function getListIdFromComment(commentObj, storage) {
  const commentTarget = (await storage.get({_id: commentObj.cf_key}, anonCtx))
    .data;
  if (commentTarget.cf_type === 'list') {
    return commentTarget._id;
  }
  if (commentTarget.cf_type === 'list-entry') {
    return commentTarget.cf_key;
  }
}

async function refreshList(listId, type, storage) {
  if (!listId) {
    return;
  }
  // console.log('refresh list', listId);
  try {
    const list = (await storage.get({_id: listId}, anonCtx)).data;
    if (!list) {
      return;
    }
    const owner = (await storage.scan(
      {
        _type: list._type,
        index: ['_owner', 'cf_type', 'cf_created'],
        startsWith: [list._owner, 'USER_PROFILE'],
        expand: true
      },
      anonCtx
    )).data[0];

    const items = (await storage.scan(
      {
        _type: list._type,
        index: ['cf_type', 'cf_key', 'cf_created'],
        startsWith: ['list-entry', list._id],
        expand: true
      },
      anonCtx
    )).data.filter(item => !list.deleted || !list.deleted[item._id]);
    let num_comments = (await storage.scan(
      {
        _type: list._type,
        index: ['cf_type', 'cf_key', 'cf_created'],
        startsWith: ['comment', list._id]
      },
      anonCtx
    )).data.length;
    for (let i = 0; i < items.length; i++) {
      const numItemComments = (await storage.scan(
        {
          _type: list._type,
          index: ['cf_type', 'cf_key', 'cf_created'],
          startsWith: ['comment', items[i]._id]
        },
        anonCtx
      )).data.length;
      num_comments += numItemComments;
    }
    let num_follows = (await storage.scan(
      {
        _type: list._type,
        index: ['cf_type', 'cf_key', 'cf_created'],
        startsWith: ['follows', list._id]
      },
      adminCtx
    )).data.length;

    const listAggr = {
      id: list._id,
      type: list._type,
      owner: list._owner,
      owner_name: owner.name || '',
      owner_image: owner.image || '',
      list_title: list.title || '',
      list_description: list.description || '',
      list_image: list.image || '',
      num_items: items.length,
      num_comments,
      num_follows,
      created: new Date(list.cf_created * 1000),
      modified: new Date(list.cf_modified * 1000),
      pids: JSON.stringify(items.map(item => item.pid))
    };

    await upsertList(listAggr);
  } catch (e) {
    // swallow
  }
}

async function deleteOwner(obj, type) {
  await knex.raw('DELETE FROM storage_list_aggr WHERE owner=:owner', {
    owner: obj._owner
  });
}
async function updateOwner(obj, type) {
  await knex.raw(
    'UPDATE storage_list_aggr SET owner_name = :owner_name, owner_image = :owner_image WHERE owner=:owner',
    {
      owner: obj._owner,
      owner_name: obj.name || '',
      owner_image: obj.image || ''
    }
  );
}
async function upsertList(list) {
  await knex.raw(
    `insert into "storage_list_aggr" (
      "id", "type", "owner", "owner_name", "owner_image", 
      "list_title", "list_description", "list_image", "num_items", 
      "num_comments", "num_follows", "created", "modified", "pids")
    values (
      :id, :type, :owner, :owner_name, :owner_image, :list_title,
      :list_description, :list_image, :num_items, :num_comments,
      :num_follows, :created, :modified, :pids)
    ON CONFLICT (id) DO UPDATE
    SET 
      "owner_name" = EXCLUDED.owner_name,
      "owner_image" = EXCLUDED.owner_image,
      "list_title" = EXCLUDED.list_title,
      "list_description" = EXCLUDED.list_description,
      "list_image" = EXCLUDED.list_image,
      "num_items" = EXCLUDED.num_items,
      "num_comments" = EXCLUDED.num_comments,
      "num_follows" = EXCLUDED.num_follows,
      "modified" = EXCLUDED.modified,
      "created" = EXCLUDED.created,
      "pids" = EXCLUDED.pids`,
    list
  );
}

async function initDB() {
  if (!(await knex.schema.hasTable('storage_list_aggr'))) {
    await knex.schema.createTable('storage_list_aggr', table => {
      table.uuid('id').notNullable();
      table.uuid('type').notNullable();
      table.string('owner').index();
      table.string('owner_name');
      table.string('owner_image');
      table.string('list_title');
      table.string('list_description');
      table.string('list_image');
      table
        .integer('num_items')
        .defaultTo(0)
        .index();
      table
        .integer('num_comments')
        .defaultTo(0)
        .index();
      table
        .integer('num_follows')
        .defaultTo(0)
        .index();
      table.timestamp('created').index();
      table.timestamp('modified').index();
      table.jsonb('pids').index(null, 'gin');
      table.primary(['id']);
    });
  }
}
initDB();

module.exports = {
  onUpdate,
  onDelete,
  onCreate
};
