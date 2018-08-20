/* eslint-disable no-use-before-define */
const assert = require('assert');
const _ = require('lodash');
const {promisify} = require('util');
const request = promisify(require('request'));
const dbcOpenPlatform = makeApiWrapper();
//
// <small>(note: dbcOpenPlatform is usually loaded into the browser using a `<script>`-tag)</small>
//
// # Storage API test / examples
//
// These are the unit tests of the storage api, which also serves as examples of how the API can be called.
//
describe('Storage endpoint', () => {
  //
  // These are variable that we need across the tests:
  // `user` is the storage user / owner of new documents,
  // `typeUuid` is the uuid of type of data-types,
  // `type1` is a new type we create, and
  // `doc1` is a new document we create.
  //
  let user, typeUuid, type1, doc1, imageType, doc2;

  before(async () => {
    const status = await dbcOpenPlatform.status({
      fields: ['storage']
    });
    user = status.storage.user;
    await cleanupOldTestData();
  });

  describe('data-type type', () => {
    //
    it('can be looked up, and is a uuid', async () => {
      typeUuid = (await dbcOpenPlatform.storage({
        find: {_owner: 'openplatform', name: 'type'}
      }))[0];

      assert.equal(typeUuid, 'bf130fb7-8bd4-44fd-ad1d-43b6020ad102');
    });

    it('has a corresponding document with meta-data for data-types', async () => {
      const typeDocument = await dbcOpenPlatform.storage({get: typeUuid});
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
      const result = await dbcOpenPlatform.storage({get: doc1._id});
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
            get: '89c17dad-0296-4684-98d1-aa5e379cbbdd'
          }),
        'Error: {"statusCode":404,"error":"id not found"}'
      );
    });
  });

  /*
  describe('scanning index', () => {
    scan: {
      _type: type1._id,
      index: ['tags', '_id'],
      after: [''],
      limit: 2
    }
  });
  */

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

      const result = await dbcOpenPlatform.storage({get: doc1._id});
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

      const result = await dbcOpenPlatform.storage({get: doc1._id});
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

    it('has to have a type with an image content-type', async () => {
      imageType = await dbcOpenPlatform.storage({
        put: {
          _type: typeUuid,
          name: 'testImage',
          description: 'Type used during unit test',
          type: 'jpeg',
          permissions: {read: 'any'},
          indexes: []
        }
      });
    });

    it('can be stored', async () => {
      doc2 = await dbcOpenPlatform.storage({
        put: {
          _type: imageType._id,
          _data: jpegData
        }
      });
    });

    it('can be retrieved', async () => {
      const result = await dbcOpenPlatform.storage({
        get: doc2._id
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

    it('can be retrieved using the http-endpoint', async () => {
      const result = await request({
        url: 'http://localhost:8080/v3/storage/' + doc2._id,
        encoding: 'latin1'
      });
      assert.equal(result.headers['content-type'], 'image/jpeg');
      assert.equal(result.body, jpegData);
    });
  });

  async function cleanupOldTestData() {
    for (const typeName of ['testType1', 'testImage']) {
      const types = await dbcOpenPlatform.storage({
        find: {
          _owner: user,
          name: typeName
        }
      });
      for (const uuid of types) {
        await dbcOpenPlatform.storage({delete: uuid});
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

function makeApiWrapper() {
  const caller = require('../../provider/caller.js');
  const {storageTransformer} = require('../storage.js');
  const status = require('../status.js');
  const executor = caller(
    {storage: storageTransformer, status},
    {
      storage: {user: 'STORAGE_USER'},
      app: {clientId: 'CLIENT_ID'},
      services: {}
    }
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