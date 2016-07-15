import {assert, fail} from 'chai';
import {fieldsFilter, getContext, SMAUG_LOCATION, healthCheck} from '../app.utils';
import {fieldsFilterMock} from './mocks/mocks';

import nock from 'nock';

describe('Unittesting the methods in app.middlewares.utils.js', () => {
  describe('fieldsFilter function', () => {
    it('Should return as expected', () => {
      const request = fieldsFilterMock.request;
      const expected = fieldsFilterMock.expected;

      const result = fieldsFilter(request, {fields: ['titleFull']});
      assert.equal(JSON.stringify(result), JSON.stringify(expected));
    });

    it('Should return original obj', () => {
      const obj = 'hest';
      const result = fieldsFilter(obj, {query: []});
      assert.equal(obj, result);
    });

    it('Should return original obj', () => {
      const obj = {};
      const result = fieldsFilter(obj, {fields: {}});
      assert.equal(obj, result);
    });
  });

  describe('getContext function', () => {
    it('should return a config on a valid request', cb => {
      nock(SMAUG_LOCATION)
        .get('/configuration?token=hep')
        .reply(200, {
          empty: 'config'
        });

      getContext('hep').then(ctx => {
        assert.deepEqual(Object.keys(ctx), ['empty']);
        cb();
      });
    });

    it('should throw an error on invalid token', cb => {
      nock(SMAUG_LOCATION)
        .get('/configuration?token=hep')
        .reply(404, {});

      getContext('hep').catch(err => {
        assert.equal(err.name, 'TokenExpiredError');
        cb();
      });
    });

    it('should throw an error on invalid request', (cb) => {
      nock(SMAUG_LOCATION)
        .get('/configuration?token=hep')
        .reply(403, {});

      getContext('hep')
        .catch(() => {
          cb();
        });
    });
  });

  describe('healthCheck function', () => {
    it('should be able to call health check', cb => {
      nock(SMAUG_LOCATION)
        .get('/health')
        .reply(200, {});

      const mockReq = {
        app: {
          set: a => a
        }
      };

      const mockRes = {
        status: s => s,
        json: res => {
          assert.deepEqual(Object.keys(res), ['ok']);
          cb();
        }
      };

      healthCheck(mockReq, mockRes);
    });

    it('should handle an error in healthCheck', cb => {
      nock(SMAUG_LOCATION)
        .get('/health')
        .reply(404, {});

      const mockReq = {
        app: {
          set: a => a
        }
      };

      const mockRes = {
        status: s => s,
        json: res => {
          assert.deepEqual(Object.keys(res), ['ok', 'errors']);
          cb();
        }
      };

      healthCheck(mockReq, mockRes);
    });

    it('should handle all errors', (cb) => {
      const mockReq = {
        app: {
          set: a => a
        }
      };

      const mockRes = {
        status: s => s,
        json: res => {
          assert.deepEqual(Object.keys(res), ['ok', 'errors']);
          cb();
        }
      };

      healthCheck(mockReq, mockRes);
    });
  });
});
