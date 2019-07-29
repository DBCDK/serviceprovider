/* eslint-disable no-use-before-define */

const assert = require('assert');

const dbcOpenPlatform = makeApiWrapper({
  context: {storage: {user: 'STORAGE_USER'}}
});
const dbcOpenPlatformAuthenticatedUser = makeApiWrapper({
  context: {user: {uniqueId: 'AUTHENTICATED_USER'}}
});
const dbcOpenPlatformAnonymousUser = makeApiWrapper({
  context: {user: {uniqueId: null}}
});
const typeUuid = 'bf130fb7-8bd4-44fd-ad1d-43b6020ad102';

describe('List observer', () => {
  let type, user;
  beforeEach(async () => {
    if (type) {
      await dbcOpenPlatform.storage({
        delete: {_id: type._id}
      });
      await pendingPromises();
    }
    type = await dbcOpenPlatform.storage({
      put: {
        _type: typeUuid,
        name: 'content-first-objects',
        description: 'Type used during integration test',
        type: 'json',
        permissions: {read: 'if object.public'},
        indexes: [
          {value: '_id', keys: ['cf_type', 'cf_key', 'cf_created']},
          {value: '_id', keys: ['cf_type', 'cf_created']},
          {
            value: '_id',
            keys: ['_owner', 'cf_type', 'cf_key', 'cf_created'],
            private: true
          },
          {
            value: '_id',
            keys: ['_owner', 'cf_type', 'cf_key', 'cf_created']
          },
          {
            value: '_id',
            keys: ['_owner', 'cf_type', 'cf_created'],
            private: true
          },
          {
            value: '_id',
            keys: ['_owner', 'cf_type', 'cf_created']
          },
          {
            value: '_id',
            keys: ['cf_type', 'cf_key', 'cf_created'],
            admin: true
          }
        ]
      }
    });

    user = await dbcOpenPlatformAuthenticatedUser.storage({
      put: {
        name: 'user-name',
        image: 'user-image',
        cf_type: 'USER_PROFILE',
        public: true,
        cf_key: '',
        _type: type._id
      }
    });
  });

  after(async () => {
    if (type) {
      await dbcOpenPlatform.storage({
        delete: {_id: type._id}
      });
      await pendingPromises();
    }
  });

  it('should not aggregate data for private lists', async () => {
    await createTestList({
      public: false,
      title: 'list1',
      _type: type._id,
      numItems: 0,
      numFollows: 0,
      numComments: 0
    });

    // wait for list.observer
    await pendingPromises();

    const res = await dbcOpenPlatformAnonymousUser.aggregation({
      aggregationType: 'list',
      type: type._id
    });
    assert.equal(res.length, 0);
  });

  it('show show aggregation for public list', async () => {
    await createTestList({
      public: true,
      title: 'list1',
      _type: type._id,
      numItems: 3,
      numFollows: 1,
      numComments: 2
    });

    // wait for list.observer
    await pendingPromises();

    const res = (await dbcOpenPlatformAnonymousUser.aggregation({
      aggregationType: 'list',
      type: type._id
    })).map(entry => ({
      owner_name: entry.owner_name,
      owner_image: entry.owner_image,
      list_title: entry.list_title,
      list_description: entry.list_description,
      list_image: entry.list_image,
      num_items: entry.num_items,
      num_comments: entry.num_comments,
      num_follows: entry.num_follows
    }));

    assert.deepEqual(res, [
      {
        owner_name: 'user-name',
        owner_image: 'user-image',
        list_title: 'list1',
        list_description: 'list1-description',
        list_image: 'list1-image',
        num_items: 3,
        num_comments: 2,
        num_follows: 1
      }
    ]);
  });

  it('should sort, limit and offset', async () => {
    await createTestList({
      public: true,
      title: 'list1',
      _type: type._id,
      numItems: 0,
      numFollows: 0,
      numComments: 3
    });

    await createTestList({
      public: true,
      title: 'list2',
      _type: type._id,
      numItems: 0,
      numFollows: 0,
      numComments: 1
    });

    await createTestList({
      public: true,
      title: 'list3',
      _type: type._id,
      numItems: 0,
      numFollows: 0,
      numComments: 2
    });

    // wait for list.observer
    await pendingPromises();

    let res = (await dbcOpenPlatformAnonymousUser.aggregation({
      aggregationType: 'list',
      type: type._id,
      sort: 'num_comments'
    })).map(entry => ({
      list_title: entry.list_title
    }));

    assert.deepEqual(res, [
      {
        list_title: 'list1'
      },
      {
        list_title: 'list3'
      },
      {
        list_title: 'list2'
      }
    ]);

    res = (await dbcOpenPlatformAnonymousUser.aggregation({
      aggregationType: 'list',
      type: type._id,
      sort: 'num_comments',
      limit: 1,
      offset: 2
    })).map(entry => ({
      list_title: entry.list_title
    }));

    assert.deepEqual(res, [
      {
        list_title: 'list2'
      }
    ]);
  });
});

const createTestList = async l => {
  const list = await dbcOpenPlatformAuthenticatedUser.storage({
    put: {
      type: 'CUSTOM_LIST',
      public: l.public,
      title: l.title,
      description: l.title + '-description',
      list: [],
      cf_created: 1564123991,
      cf_type: 'list',
      cf_modified: 1564124002,
      cf_key: '',
      deleted: {},
      image: l.title + '-image',
      _type: l._type
    }
  });

  for (let i = 0; i < l.numItems; i++) {
    await dbcOpenPlatformAuthenticatedUser.storage({
      put: {
        book: null,
        pid: 'pid' + i,
        cf_created: 1564129011,
        cf_type: 'list-entry',
        cf_key: list._id,
        public: l.public,
        cf_modified: 1564129011,
        _type: l._type
      }
    });
  }

  for (let i = 0; i < l.numFollows; i++) {
    await dbcOpenPlatformAuthenticatedUser.storage({
      put: {
        id: list._id,
        cf_key: list._id,
        cf_type: 'follows',
        cat: 'list',
        cf_created: 1564129289,
        cf_modified: 1564129289,
        _type: l._type
      }
    });
  }
  for (let i = 0; i < l.numComments; i++) {
    await dbcOpenPlatformAuthenticatedUser.storage({
      put: {
        cf_key: list._id,
        cf_type: 'comment',
        public: l.public,
        comment: 'some-comment',
        cf_created: 1564129368,
        cf_modified: 1564129368,
        _type: l._type
      }
    });
  }
};

let promises = [];
const pendingPromises = () => {
  const p = [...promises];
  promises = [];

  return Promise.all(p);
};

function makeApiWrapper({context}) {
  const caller = require('../../../provider/caller.js');
  const storage = require('../../storage.js');
  const listObserver = require('../list.observer.js');
  const aggregationTransformer = require('../transformer.js');

  storage.onUpdate((prev, obj, type, storage) => {
    promises.push(listObserver.onUpdate(prev, obj, type, storage));
  });
  storage.onDelete((prev, type, storage) => {
    promises.push(listObserver.onDelete(prev, type, storage));
  });
  storage.onCreate((obj, type, storage) => {
    promises.push(listObserver.onCreate(obj, type, storage));
  });

  const status = require('../../status.js');
  const executor = caller(
    {
      storage: storage.storageTransformer,
      status,
      aggregation: aggregationTransformer
    },
    Object.assign({}, context, {
      app: {clientId: 'CLIENT_ID'},
      services: {}
    })
  );
  const api = {};
  function addFn(fn) {
    api[fn] = async o => {
      const result = await executor.call(fn, o);
      if (result.statusCode === 200) {
        return result.data;
      }
      throw new Error(JSON.stringify(result));
    };
  }
  addFn('status');
  addFn('storage');
  addFn('aggregation');
  return api;
}
