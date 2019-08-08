/**
 * @file
 * Storage list observer.
 *
 * This is responsible for observing content-first storage objects
 * with regards to lists
 *
 */

/* eslint-disable no-use-before-define */

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
const ROOT_TYPE_ID = 'bf130fb7-8bd4-44fd-ad1d-43b6020ad102';
const anonCtx = createCtx({});
const adminCtx = createCtx({storage: {admin: true}});

function isType(obj) {
  return obj._type === ROOT_TYPE_ID;
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
        null,
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
    await onDelete(prev, type, storage);
    return;
  }

  switch (obj.cf_type) {
    case 'list':
      await refreshList(obj._id, type, storage);
      return;
    case 'USER_PROFILE':
      await client.updateOwner(obj, type._id);
      return;
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
      await refreshList(prev._id, type, storage);
      break;
    case 'list-entry':
      await refreshList(prev.cf_key, type, storage);
      break;
    case 'comment':
      const listId = await getListIdFromComment(prev, storage);
      await refreshList(listId, type, storage);
      break;
    case 'follows':
      await refreshList(prev.cf_key, type, storage);
      break;
    case 'USER_PROFILE':
      await client.deleteOwner(prev._owner, type._id);
      break;
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
      await refreshList(obj._id, type, storage);
      break;
    case 'list-entry':
      await refreshList(obj.cf_key, type, storage);
      break;
    case 'comment':
      const listId = await getListIdFromComment(obj, storage);
      await refreshList(listId, type, storage);
      break;
    case 'follows':
      await refreshList(obj.cf_key, type, storage);
      break;
    default:
      break;
  }
}

async function getListIdFromComment(commentObj, storage) {
  const commentTarget = (await storage.get(
    {_id: commentObj.cf_key},
    null,
    anonCtx
  )).data;
  if (commentTarget.cf_type === 'list') {
    return commentTarget._id;
  }
  if (commentTarget.cf_type === 'list-entry') {
    return commentTarget.cf_key;
  }
  return null;
}

async function refreshList(listId, type, storage) {
  if (!listId) {
    return;
  }
  try {
    const list = (await storage.get({_id: listId}, null, anonCtx)).data;
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
      null,
      anonCtx
    )).data[0];

    const items = (await storage.scan(
      {
        _type: list._type,
        index: ['cf_type', 'cf_key', 'cf_created'],
        startsWith: ['list-entry', list._id],
        expand: true
      },
      null,
      anonCtx
    )).data.filter(item => !list.deleted || !list.deleted[item._id]);
    let num_comments = (await storage.scan(
      {
        _type: list._type,
        index: ['cf_type', 'cf_key', 'cf_created'],
        startsWith: ['comment', list._id]
      },
      null,
      anonCtx
    )).data.length;
    for (let i = 0; i < items.length; i++) {
      const numItemComments = (await storage.scan(
        {
          _type: list._type,
          index: ['cf_type', 'cf_key', 'cf_created'],
          startsWith: ['comment', items[i]._id]
        },
        null,
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
      null,
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
    log.error('Failed refreshing list', {
      error: String(e)
    });
  }
}

module.exports = {
  onUpdate,
  onDelete,
  onCreate
};
