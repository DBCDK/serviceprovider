/**
 * @file
 * Storage list observer.
 *
 * This is responsible for observing content-first storage objects
 * with regards to lists
 *
 */
const {log} = require('../../utils.js');
const _ = require('lodash');
const client = require('./list.pgclient');
const createCtx = ctx => {
  return {
    get: path => {
      return _.get(ctx, path);
    }
  };
};
const anonCtx = createCtx({});
const adminCtx = createCtx({storage: {admin: true}});

function isType(obj) {
  return obj._type === 'bf130fb7-8bd4-44fd-ad1d-43b6020ad102';
}
function isValidType(obj) {
  const requiredIndexes = [
    {value: '_id', keys: ['cf_type', 'cf_key', 'cf_created']},
    {
      value: '_id',
      keys: ['_owner', 'cf_type', 'cf_created']
    },
    {
      value: '_id',
      keys: ['cf_type', 'cf_key', 'cf_created'],
      admin: true
    }
  ];
  return (
    isType(obj) &&
    _.intersectionWith(obj.indexes, requiredIndexes, _.isEqual).length ===
      requiredIndexes.length
  );
}

async function onUpdate(prev, obj, type, storage) {
  if (isType(obj)) {
    // type is updated - init
    await client.deleteType(obj._id);

    if (isValidType(obj)) {
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
    }
    return;
  }

  if (!isValidType(type)) {
    return;
  }

  if (prev.cf_type && !obj.cf_type) {
    return await onDelete(prev, type, storage);
  }

  switch (obj.cf_type) {
    case 'list':
      return await refreshList(obj._id, type, storage);
    case 'USER_PROFILE':
      return await client.updateOwner(obj, type._id);
    default:
      break;
  }
}
async function onDelete(prev, type, storage) {
  if (isValidType(prev)) {
    await client.deleteType(prev._id);
    return;
  }
  if (!isValidType(type)) {
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
      return await client.deleteOwner(prev._owner, type._id);
    default:
      break;
  }
}
async function onCreate(obj, type, storage) {
  if (!isValidType(type)) {
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
  try {
    const list = (await storage.get({_id: listId}, anonCtx)).data;
    if (!list) {
      await client.deleteList(listId);
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

    await client.upsertList(listAggr);
  } catch (e) {
    // swallow
  }
}

module.exports = {
  onUpdate,
  onDelete,
  onCreate
};
