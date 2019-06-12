// # Storage endpoint
//
// The storage endpoint is the backend for storing quiz-data. It is a generic document storage, and could be extended to be used as backend for "Tværgående brugerprofil" or similar projects. The design is base on the generic backend in læsekompasset, and inspired by couchdb.
//
// Documents are either JSON-objects or image data, and has the following metadata:
//
// - `_id`, which is an UUID identifier that can be used for retrieval, and is assigned when the document is stored.
// - `_type`, which is a reference to the datatype, which is used to determine access rights, whether it is image or JSON, and indexing rules.
// - `_owner`, which is a reference to the user who created it.
// - `_client`, which is a reference to the application which created it.
// - `_version`, which is a document version, that can be used for atomic updates.
//
//
// ## Data types and indexes
//
// The `_type` of a document is an UUID that refers to a JSON document in the storage endpoint, that has the specification of the type. The type specification has the following properties:
//
// - `name` the name of the type. This can be used to look up the type id. It is also used in a shorthand, so a request with `"_type": "someuser.sometype"` will use the `_id` of the type, where someuser is the `_owner` of the type-document, and sometype is the `name` of the type-document.
// - `type` must either be `"json"` or `"image"`.
// - `indexes` is a list of indexes. Each index is represented as a JSON object with the following properties:
//    - `keys` is a list of property names to index
//    - `value` that should either be `"_id"`, which is used for retrieving the document, or `"_count"`, which is used to count how many occurences of a given keys occur.
// - `permissions` is used for access control. Could be:
//    -`{"read": "any"}`, which means that everyone may read the data, and only document owner may change it.
//    -`{"read": "if object.public"}`, which means that the `public` property on a json-typed object indicates whether everyone may read it. Objects withouth `.public = true` will not be found with scan/find, except in indexes starting with `_owner` and owned by the querying user.
//
// So if we wanted to store users in the storage endpoint, and wanted to be able to look them up by their username and group, we could define the following new type:
//
// ```
// { "name": "user",
//   "type": "json",
//   "indexes": [
//     {"value": "_id", "keys": ["username"]},
//     {"value": "_id", "keys": ["group"]}
//   ],
//   "permissions": {"read": "any"},
//   "_type": "openplatform.type"}
// ```
//
// (Notes: `"_type"` is a special property that indicates that this document is a type-document, - whereas `"type"` is a normal property that just is a part of the document. `openplatform` is the super user which owns the type-type).
//
// ## Literate documentation and unit tests
//
// This documentation contains examples and unit tests for the storage endpoint as [literate code](https://en.wikipedia.org/wiki/Literate_programming). This means that code writte here like this:

const assert = require('assert');
const _ = require('lodash');
const {promisify} = require('util');
const request = promisify(require('request'));
const {version} = require('../../../package.json');
/* eslint-disable no-use-before-define */

const dbcOpenPlatform = makeApiWrapper({
  context: {storage: {user: 'STORAGE_USER'}}
});
const dbcOpenPlatformAuthenticatedUser = makeApiWrapper({
  context: {user: {uniqueId: 'AUTHENTICATED_USER'}}
});
const dbcOpenPlatformAnonymousUser = makeApiWrapper({
  context: {user: {uniqueId: null}}
});

// are executed every time the tests are run, - such as when change are made to the open platform. This also makes sure that the examples in this documentation always runs.
//
// Note: normally `dbcOpenPlatform` is defined when include the open platform API is loaded into the browser using a `<script>`-tag. The makeApiWrapper is just used for testing.
//
// We want all the examples to be in a separate test namespace:
//
describe('Storage endpoint examples', () => {
  //
  // # API usage
  //
  // ## Storing data
  //
  // updating data
  //
  // ## Fetching data
  //
  // url for images
  //
  // ## Finding data
  //
  // # Actual tests
  //
});
describe('Storage endpoint', () => {
  //
  // These are variable that we need across the tests:
  // `user` is the storage user / owner of new documents,
  // `typeUuid` is the uuid of type of data-types,
  // `type1` is a new type we create, and
  // `doc1` is a new document we create.
  //
  let user, typeUuid, type1, doc1, imageType, doc2, doc3, doc4;

  before(async () => {
    user = (await dbcOpenPlatform.status({
      fields: ['storage']
    })).storage.user;

    await cleanupOldTestData();

    const promises = [];

    promises.push(
      (async () => {
        typeUuid = (await dbcOpenPlatform.storage({
          find: {_owner: 'openplatform', name: 'type'}
        }))[0];
      })()
    );

    await Promise.all(promises);
  });

  describe('data-type type', () => {
    //
    it('can be looked up, and is a uuid', async () => {
      assert.equal(typeUuid, 'bf130fb7-8bd4-44fd-ad1d-43b6020ad102');
    });

    it('has a corresponding document with meta-data for data-types', async () => {
      const typeDocument = await dbcOpenPlatform.storage({
        get: {_id: typeUuid}
      });
      assert.deepEqual(typeDocument, {
        name: 'type',
        type: 'json',
        charset: 'utf-8',
        permissions: {read: 'any'},
        indexes: [{value: '_id', keys: ['_owner', 'name']}],
        _owner: 'openplatform',
        _type: 'bf130fb7-8bd4-44fd-ad1d-43b6020ad102',
        _id: 'bf130fb7-8bd4-44fd-ad1d-43b6020ad102',
        _version: String(typeDocument._version),
        _client: 'openplatform'
      });
    });
  });

  describe('storing data.', () => {
    //
    it('can create a new data type by storing a document with the type description to the storage', async () => {
      type1 = await dbcOpenPlatform.storage({
        put: {
          _type: typeUuid,
          name: 'testType1',
          description: 'Type used during unit test',
          type: 'json',
          permissions: {read: 'any'},
          indexes: [
            {value: '_id', keys: ['tags']},
            {value: '_id', keys: ['_owner', 'title']}
          ]
        }
      });
    });

    it('fails if we do not supply a `_type` when storing an object.', async () => {
      await expectThrow(
        () => dbcOpenPlatform.storage({put: {foo: 'bar'}}),
        'Error: {"statusCode":400,"error":"missing _type"}'
      );
    });

    it('stores an object if we passes the newly created type', async () => {
      doc1 = await dbcOpenPlatform.storage({
        put: {
          _type: type1._id,
          title: 'hello world',
          tags: ['foo', 'bar', 'baz']
        }
      });
    });

    it('only works if `_type` is an UUID of a type, and not just any document-UUID', async () => {
      await expectThrow(
        () => dbcOpenPlatform.storage({put: {_type: doc1._id, foo: 'bar'}}),
        'Error: {"statusCode":400,"error":"invalid _type"}'
      );
    });

    it('stores an object if we passes the newly created type', async () => {
      const resultDoc = await dbcOpenPlatform.storage({
        put: {
          _type: user + '.testType1',
          foo: 'bar'
        }
      });
    });
  });

  describe('fetching data', () => {
    //
    it('returns document given an uuid', async () => {
      const result = await dbcOpenPlatform.storage({get: {_id: doc1._id}});
      assert.deepEqual(result, {
        title: 'hello world',
        tags: ['foo', 'bar', 'baz'],
        _owner: user,
        _type: type1._id,
        _id: doc1._id,
        _version: String(result._version),
        _client: 'CLIENT_ID'
      });
    });

    it('throws an error on non-existant uuid', async () => {
      await expectThrow(
        () =>
          dbcOpenPlatform.storage({
            get: {_id: '89c17dad-0296-4684-98d1-aa5e379cbbdd'}
          }),
        'Error: {"statusCode":404,"error":"id not found"}'
      );
    });
  });

  describe('finding data', () => {
    it('finds documents by indexed keys', async () => {
      let result = await dbcOpenPlatform.storage({
        find: {
          _type: type1._id,
          tags: 'baz'
        }
      });
      assert.deepEqual(result, [doc1._id]);
    });

    it('is possible to look up with a named type', async () => {
      let result = await dbcOpenPlatform.storage({
        find: {
          _type: user + '.testType1',
          tags: 'baz'
        }
      });
      assert.deepEqual(result, [doc1._id]);
    });

    it('looks for types if we have omitted `_type`', async () => {
      const result = await dbcOpenPlatform.storage({
        find: {
          _owner: user,
          name: 'testType1'
        }
      });
      assert.deepEqual(result, [type1._id]);
    });

    it('errors if we try to search for some unindexed keys', async () => {
      await expectThrow(
        () => dbcOpenPlatform.storage({find: {description: 'hello'}}),
        'Error: {"statusCode":400,"error":"no index for [\\"description\\"]"}'
      );
    });

    it('returns empty result set if we search for something that is not there', async () => {
      const result = await dbcOpenPlatform.storage({
        find: {
          _type: type1._id,
          tags: 'quux'
        }
      });
      assert.deepEqual(result, []);
    });

    it('is possible to find all data belonging to current user', async () => {
      const result = await dbcOpenPlatform.storage({
        find: {
          _type: '*',
          _owner: user
        }
      });
      assert(result.includes(type1._id));
      assert(result.includes(doc1._id));
    });
    it('it is not possible to find all data belonging to another user', async () => {
      await expectThrow(
        () =>
          dbcOpenPlatformAuthenticatedUser.storage({
            find: {_type: '*', _owner: user}
          }),
        'Error: {"statusCode":400,"error":"find _type wildcard only allowed when finding all objects for current user"}'
      );
    });

    it('only allows wildcard _type when looking up owner', async () => {
      await expectThrow(
        () =>
          dbcOpenPlatformAuthenticatedUser.storage({
            find: {_type: '*', tags: 'baz'}
          }),
        'Error: {"statusCode":400,"error":"find _type wildcard only allowed when finding all objects for current user"}'
      );
    });
  });

  describe('updating data', () => {
    //
    it('is possible to change an object if we know the _id and _version.', async () => {
      await dbcOpenPlatform.storage({
        put: {
          _type: type1._id,
          _id: doc1._id,
          _version: doc1._version,
          hello: 'world',
          tags: ['foo', 'quux']
        }
      });

      const result = await dbcOpenPlatform.storage({get: {_id: doc1._id}});
      assert.deepEqual(result, {
        hello: 'world',
        tags: ['foo', 'quux'],
        _owner: user,
        _type: type1._id,
        _id: doc1._id,
        _version: String(result._version),
        _client: 'CLIENT_ID'
      });
    });

    it('throws a conflict if we try to change a document with the wrong version', async () => {
      await expectThrow(
        () =>
          dbcOpenPlatform.storage({
            put: {
              _type: type1._id,
              _id: doc1._id,
              _version: doc1._version,
              hello: 'world',
              tags: ['foo', 'quux']
            }
          }),
        'Error: {"statusCode":409,"error":"conflict"}'
      );
    });

    it('throws a 404 if we try to change a document which does not exist', async () => {
      const nonExisting = 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa';
      await expectThrow(
        () =>
          dbcOpenPlatform.storage({
            put: {
              _type: type1._id,
              _id: nonExisting,
              _version: doc1._version,
              hello: 'world',
              tags: ['foo', 'quux']
            }
          }),
        'Error: {"statusCode":404,"error":"id not found"}'
      );
    });

    it('has reindexed the changed document', async () => {
      let result = await dbcOpenPlatform.storage({
        find: {
          _type: type1._id,
          tags: 'baz'
        }
      });
      assert.deepEqual(result, []);

      result = await dbcOpenPlatform.storage({
        find: {
          _type: type1._id,
          tags: 'foo'
        }
      });
      assert.deepEqual(result, [doc1._id]);

      result = await dbcOpenPlatform.storage({
        find: {
          _type: type1._id,
          tags: 'quux'
        }
      });
      assert.deepEqual(result, [doc1._id]);
    });

    it('upserts when supplying an _id and no _version', async () => {
      await dbcOpenPlatform.storage({
        put: {
          _type: type1._id,
          _id: doc1._id,
          tags: ['bar', 'baz']
        }
      });

      const result = await dbcOpenPlatform.storage({get: {_id: doc1._id}});
      assert.deepEqual(result, {
        tags: ['bar', 'baz'],
        _owner: user,
        _type: type1._id,
        _id: doc1._id,
        _version: String(result._version),
        _client: 'CLIENT_ID'
      });
    });
  });

  describe('image', () => {
    const jpegData = Buffer.from(
      '/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkz' +
        'ODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2Nj' +
        'Y2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAIAAgDAREA' +
        'AhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAABv/EABsQAAICAwEAAAAAAAAAAAAAAAECAwQAEiFR' +
        '/8QAFQEBAQAAAAAAAAAAAAAAAAAABAX/xAAfEQACAQIHAAAAAAAAAAAAAAABAwISMQAEESFx4fD/' +
        '2gAMAwEAAhEDEQA/ACMIpGssrjqrqw9OFkWVUjF1McmUhkhYaHn1utv/2Q==',
      'base64'
    ).toString('latin1');
    const pngData =
      '\x89PNG\r\n\u001a\n\u0000\u0000\u0000\rIHDR\u0000\u0000\u0000\u0003' +
      "\u0000\u0000\u0000\u0003\u0001\u0003\u0000\u0000\u0000læ'ü\u0000\u0000\u0000" +
      '\u0006PLTEÿÿÿ\u0000\u0000\u0000UÂÓ~\u0000\u0000\u0000\u000eIDAT\b×cXÀàÀ°\u0000' +
      '\u0000\u0004\u0001\u0004w~\u001f\u0000\u0000\u0000\u0000IEND®B`';

    const gifData =
      '\u0047\u0049\u0046\u0038\u0037\u0061\u0002\u0000\u0002\u0000\u0080' +
      '\u0001\u0000\u0000\u0000\u0000\u00ff\u00ff\u00ff\u002c\u0000\u0000\u0000\u0000' +
      '\u0002\u0000\u0002\u0000\u0000\u0002\u0003\u0044\u0002\u0005\u0000\u003b';

    it('has to have a type with an image content-type', async () => {
      imageType = await dbcOpenPlatform.storage({
        put: {
          _type: typeUuid,
          name: 'testImage',
          description: 'Type used during unit test',
          type: 'image',
          permissions: {read: 'any'},
          indexes: []
        }
      });
    });

    it('can store jpeg images', async () => {
      doc2 = await dbcOpenPlatform.storage({
        put: {
          _type: imageType._id,
          _data: jpegData
        }
      });
    });

    it('can store png images', async () => {
      doc3 = await dbcOpenPlatform.storage({
        put: {
          _type: imageType._id,
          _data: pngData
        }
      });
    });

    it('can store gif images', async () => {
      doc4 = await dbcOpenPlatform.storage({
        put: {
          _type: imageType._id,
          _data: gifData
        }
      });
    });

    it('can retrieve an image', async () => {
      const result = await dbcOpenPlatform.storage({
        get: {_id: doc2._id}
      });
      assert.deepEqual(result, {
        _data: jpegData,
        _type: imageType._id,
        _owner: user,
        _version: doc2._version,
        _id: doc2._id,
        _client: 'CLIENT_ID'
      });
    });

    const spUrl = `http://localhost:${process.env.PORT || 8080}/v${
      version.split('.')[0]
    }`;

    async function hasLocalServiceProvider() {
      try {
        const result = await request(spUrl);
        return result.statusCode === 200;
      } catch (e) {
        return false;
      }
    }
    it('can retrieve image using the http-endpoint', async () => {
      if (!(await hasLocalServiceProvider())) {
        console.warn('Skipping test needing running serviceprovider:');
        return;
      }
      const result = await request({
        url: spUrl + '/storage/' + doc2._id,
        encoding: 'latin1'
      });
      assert.equal(result.headers['content-type'], 'image/jpeg');
      assert.equal(result.body, jpegData);
    });
    it('can retrieve scaled jpeg image using the http-endpoint', async () => {
      if (!(await hasLocalServiceProvider())) {
        console.warn('Skipping test needing running serviceprovider:');
        return;
      }
      const result = await request({
        url: spUrl + '/storage/' + doc2._id + '?width=256&height=256',
        encoding: 'latin1'
      });
      assert.equal(result.headers['content-type'], 'image/jpeg');
      //
      // result starts has jpeg-files start
      //
      assert.equal(jpegData.slice(0, 3), result.body.slice(0, 3));
      //
      // check that the scaled image is somewhat larger than the original
      //
      assert(result.body.length > 1000);
    });
    it('can retrieve scaled png image using the http-endpoint', async () => {
      if (!(await hasLocalServiceProvider())) {
        console.warn('Skipping test needing running serviceprovider:');
        return;
      }
      const result = await request({
        url: spUrl + '/storage/' + doc3._id + '?width=256&height=256',
        encoding: 'latin1'
      });
      assert.equal(result.headers['content-type'], 'image/png');
      assert.equal(pngData.slice(0, 8), result.body.slice(0, 8));
      // check that the scaled image is somewhat larger than the original
      assert(result.body.length > pngData.length);
    });
    it('can retrieve gif image using the http-endpoint', async () => {
      if (!(await hasLocalServiceProvider())) {
        console.warn('Skipping test needing running serviceprovider:');
        return;
      }

      let result = await request({
        url: spUrl + '/storage/' + doc4._id,
        encoding: 'latin1'
      });
      assert.equal(result.headers['content-type'], 'image/gif');
      assert.equal(gifData, result.body);

      // it does not scale the image, as gifs are low-color and might be animated

      result = await request({
        url: spUrl + '/storage/' + doc4._id + '?width=256&height=256',
        encoding: 'latin1'
      });
      assert.equal(result.headers['content-type'], 'image/gif');
      assert.equal(gifData, result.body);
    });
  });

  describe('scanning index', () => {
    before(async () => {
      await dbcOpenPlatform.storage({
        put: {
          _type: 'openplatform.type',
          name: 'test',
          description: 'Yet another type used during unit test',
          type: 'json',
          permissions: {read: 'any'},
          indexes: []
        }
      });
    });
    it('scans for a prefix', async () => {
      let result = await dbcOpenPlatform.storage({
        scan: {
          _type: 'openplatform.type',
          index: ['_owner', 'name'],
          startsWith: [user]
        }
      });

      assert.deepEqual(Object.keys(result[0]), ['key', 'val']);
      assert.deepEqual(result.map(o => o.key), [
        [user, 'test'],
        [user, 'testImage'],
        [user, 'testType1']
      ]);
    });
    it('reverse scans', async () => {
      let result = await dbcOpenPlatform.storage({
        scan: {
          _type: 'openplatform.type',
          index: ['_owner', 'name'],
          startsWith: [user],
          reverse: true,
          limit: 2
        }
      });

      assert.deepEqual(result.map(o => o.key), [
        [user, 'testType1'],
        [user, 'testImage']
      ]);
    });
    it('scans before', async () => {
      let result = await dbcOpenPlatform.storage({
        scan: {
          _type: 'openplatform.type',
          index: ['_owner', 'name'],
          startsWith: [user],
          limit: 1,
          before: [user, 'testType1']
        }
      });

      assert.deepEqual(result.map(o => o.key), [[user, 'testImage']]);
    });
    it('scans from a certain point', async () => {
      let result = await dbcOpenPlatform.storage({
        scan: {
          _type: 'openplatform.type',
          index: ['_owner', 'name'],
          after: [user, 'test'],
          limit: 1,
          startsWith: [user]
        }
      });

      assert.deepEqual(result.map(o => o.key), [[user, 'testImage']]);
    });
  });

  describe('count index', () => {
    let countType, objectId;
    before(async () => {
      countType = await dbcOpenPlatform.storage({
        put: {
          _type: 'openplatform.type',
          name: 'testType2',
          description: 'Another type used during unit test',
          type: 'json',
          permissions: {read: 'any'},
          indexes: [{value: '_count', keys: ['name']}]
        }
      });
    });
    it('has value zero when no elements', async () => {
      const result = await dbcOpenPlatform.storage({
        count: {
          _type: `${user}.testType2`,
          name: 'hello'
        }
      });

      assert.equal(result, 0);
    });
    it('has count matching number of objects', async () => {
      await dbcOpenPlatform.storage({
        put: {
          _type: `${user}.testType2`,
          name: 'hello'
        }
      });
      await dbcOpenPlatform.storage({
        put: {
          _type: `${user}.testType2`,
          name: 'world'
        }
      });
      objectId = (await dbcOpenPlatform.storage({
        put: {
          _type: `${user}.testType2`,
          name: 'hello'
        }
      }))._id;
      let result = await dbcOpenPlatform.storage({
        count: {
          _type: `${user}.testType2`,
          name: 'hello'
        }
      });
      assert.equal(result, 2);

      result = await dbcOpenPlatform.storage({
        count: {
          _type: `${user}.testType2`,
          name: 'world'
        }
      });
      assert.equal(result, 1);
    });
    it('scans for a prefix', async () => {
      assert.deepEqual(
        await dbcOpenPlatform.storage({
          scan: {
            _type: `${user}.testType2`,
            index: ['name']
          }
        }),
        [{key: ['hello'], val: 2}, {key: ['world'], val: 1}]
      );
      assert.deepEqual(
        await dbcOpenPlatform.storage({
          scan: {
            _type: `${user}.testType2`,
            index: ['name'],
            before: ['hellox']
          }
        }),
        [{key: ['hello'], val: 2}]
      );
    });
    it('reduces counts when object is deleted', async () => {
      await dbcOpenPlatform.storage({delete: {_id: objectId}});
      let result = await dbcOpenPlatform.storage({
        count: {
          _type: `${user}.testType2`,
          name: 'hello'
        }
      });
      assert.equal(result, 1);
    });
  });

  describe('User permissions', () => {
    let typePrivate, docPrivate, docPublic;
    it('stores an object that is owned by the creator', async () => {
      const doc = await dbcOpenPlatformAuthenticatedUser.storage({
        put: {
          _type: type1._id,
          title: 'hello world',
          tags: ['foo', 'bar', 'baz']
        }
      });
      const result = await dbcOpenPlatformAuthenticatedUser.storage({
        get: {_id: doc._id}
      });
      assert.equal(result._owner, 'AUTHENTICATED_USER');
    });

    it('can create a new data type with read permission "if object.public"', async () => {
      typePrivate = await dbcOpenPlatform.storage({
        put: {
          _type: typeUuid,
          name: 'testTypePrivate',
          description: 'Type used during unit test',
          type: 'json',
          permissions: {read: 'if object.public'},
          indexes: [
            {value: '_id', keys: ['key']},
            {value: '_id', keys: ['_owner'], private: true},
            {value: '_id', keys: ['_owner', 'key'], private: true}
          ]
        }
      });
    });

    it('stores public and private objects', async () => {
      docPublic = await dbcOpenPlatform.storage({
        put: {
          _type: typePrivate._id,
          public: true,
          title: 'hello world - public',
          key: 'a'
        }
      });
      docPrivate = await dbcOpenPlatform.storage({
        put: {
          _type: typePrivate._id,
          public: false,
          title: 'hello world - private',
          key: 'a'
        }
      });
    });

    it('can fetch others public objects', async () => {
      const result = await dbcOpenPlatformAuthenticatedUser.storage({
        get: {_id: docPublic._id}
      });
      assert.deepEqual(
        {
          _type: typePrivate._id,
          _client: 'CLIENT_ID',
          _id: result._id,
          _owner: 'STORAGE_USER',
          _version: result._version,
          key: 'a',
          public: true,
          title: 'hello world - public'
        },
        result
      );
    });

    it('fails when fetching others private objects', async () => {
      await expectThrow(
        () =>
          dbcOpenPlatformAuthenticatedUser.storage({
            get: {_id: docPrivate._id}
          }),
        'Error: {"statusCode":403,"error":"no read access"}'
      );
    });

    it('fails when deleting others private objects', async () => {
      await expectThrow(
        () =>
          dbcOpenPlatformAuthenticatedUser.storage({
            delete: {_id: docPrivate._id}
          }),
        'Error: {"statusCode":403,"error":"no write access"}'
      );
    });

    it('can fetch owners private objects', async () => {
      const result = await dbcOpenPlatform.storage({
        get: {_id: docPrivate._id}
      });
      assert.deepEqual(
        {
          _type: typePrivate._id,
          _client: 'CLIENT_ID',
          _id: result._id,
          _owner: 'STORAGE_USER',
          _version: result._version,
          key: 'a',
          public: false,
          title: 'hello world - private'
        },
        result
      );
    });

    it('fails when anonoymous user tries to store objects', async () => {
      await expectThrow(
        () =>
          dbcOpenPlatformAnonymousUser.storage({
            put: {
              _type: typePrivate._id,
              public: true,
              title: 'hello world - public'
            }
          }),
        'Error: {"statusCode":403,"error":"no write access"}'
      );
    });

    it('it only indexes public objects by default', async () => {
      let result = await dbcOpenPlatform.storage({
        find: {
          _type: typePrivate._id,
          key: 'a'
        }
      });
      assert.deepEqual(result, [docPublic._id]);
    });

    it('only owner can find its private indexes', async () => {
      let result = await dbcOpenPlatform.storage({
        find: {
          _type: typePrivate._id,
          _owner: user
        }
      });
      assert.deepEqual(result, _.sortBy([docPublic._id, docPrivate._id]));
      await expectThrow(
        () =>
          dbcOpenPlatformAuthenticatedUser.storage({
            find: {
              _type: typePrivate._id,
              _owner: user
            }
          }),
        'Error: {"statusCode":400,"error":"no index for [\\"_owner\\"]"}'
      );
    });
  });

  describe('Indexes with both public and private index', () => {
    let typeMixed, docPrivate, docPublic;
    before(async () => {
      typeMixed = await dbcOpenPlatform.storage({
        put: {
          _type: typeUuid,
          name: 'testTypeMixedPermission',
          description: 'Type used during unit test',
          type: 'json',
          permissions: {read: 'if object.public'},
          indexes: [
            {value: '_id', keys: ['_owner', 'key']},
            {value: '_id', keys: ['_owner', 'key'], private: true}
          ]
        }
      });

      docPublic = await dbcOpenPlatform.storage({
        put: {
          _type: typeMixed._id,
          public: true,
          title: 'hello 1',
          key: 'a'
        }
      });
      docPrivate = await dbcOpenPlatform.storage({
        put: {
          _type: typeMixed._id,
          title: 'hello 2',
          key: 'a'
        }
      });
    });
    it('owner can find data via private index', async () => {
      let result = await dbcOpenPlatform.storage({
        find: {
          _type: typeMixed._id,
          _owner: user,
          key: 'a'
        }
      });
      assert.deepEqual(result, _.sortBy([docPublic._id, docPrivate._id]));
    });
    it('non-owner can find data via public index', async () => {
      let result = await dbcOpenPlatformAuthenticatedUser.storage({
        find: {
          _type: typeMixed._id,
          _owner: user,
          key: 'a'
        }
      });
      assert.deepEqual(result, [docPublic._id]);
    });
    it('Owner may scan private index', async () => {
      let result = await dbcOpenPlatform.storage({
        scan: {
          _type: typeMixed._id,
          index: ['_owner', 'key'],
          startsWith: [user]
        }
      });
      assert.deepEqual(Object.keys(result[0]), ['key', 'val']);
      assert.deepEqual(
        result.map(r => r.val),
        _.sortBy([docPublic._id, docPrivate._id])
      );
    });
    it('Non-owner may scan public index', async () => {
      let result = await dbcOpenPlatformAuthenticatedUser.storage({
        scan: {
          _type: typeMixed._id,
          index: ['_owner', 'key'],
          startsWith: [user]
        }
      });
      assert.deepEqual(Object.keys(result[0]), ['key', 'val']);
      assert.deepEqual(result.map(r => r.val), [docPublic._id]);
    });
  });

  async function cleanupOldTestData() {
    for (const typeName of [
      'test',
      'testType2',
      'testType1',
      'testImage',
      'testTypePrivate',
      'testTypeMixedPermission'
    ]) {
      try {
        const types = await dbcOpenPlatform.storage({
          find: {
            _owner: user,
            name: typeName
          }
        });
        for (const uuid of types) {
          await dbcOpenPlatform.storage({delete: {_id: uuid}});
        }
      } catch (e) {
        // some cleanup may fail, if type was not created earlier
      }
    }
  }
});

//
// # Utility functions
//
async function expectThrow(fn, error) {
  try {
    await fn();
  } catch (e) {
    return assert.equal(String(e), error);
  }
  throw new Error('expected to throw, but did not');
}

function makeApiWrapper({context}) {
  const caller = require('../../provider/caller.js');
  const {storageTransformer} = require('../storage.js');
  const status = require('../status.js');
  const executor = caller(
    {storage: storageTransformer, status},
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
  return api;
}
