'use strict';
import ClientCache from '../lib/ClientCache.js';
import {expect} from 'chai';

describe('CacheManager wrap method', () => {
  const loggerMock = {
    log: () => {},
    error: () => {},
    info: () => {}
  };

  const clientCacheWrapper = ClientCache({store: 'memory', ttl: 100}, loggerMock);
  let returnText;
  const methods = {
    test() {
      return Promise.resolve(returnText);
    }
  };

  const wrapped = clientCacheWrapper(methods);

  it('uses callback when no cache', (done) => {
    returnText = 'no cache';
    wrapped.test({test: 'test'}).then(() => {
      done();
    });
  });

  it('returns cached value', (done) => {
    returnText = 'has it been cached?';
    wrapped.test({test: 'test'}).then((result) => {
      expect(result).to.equal('no cache');
      done();
    });
  });

  it('uses callback when arguments change', (done) => {
    returnText = 'has it been cached?';
    wrapped.test({test: 'test2'}).then((result) => {
      expect(result).to.equal(returnText);
      done();
    });
  });

});
