
/**
 * @file
 * Unittesting the methods in app.middlewares.utils.js
 */

import {assert} from 'chai';
import {getTokenSearchers} from '../app.middlewares.utils';

describe('Unittesting the methods in app.middlewares.utils.js', () => {
  it('getTokenSearchers Shuould return array containing three functions', () => {
    const result = getTokenSearchers({});

    assert.isArray(result);
    assert.lengthOf(result, 3);

    result.forEach(item => assert.isFunction(item));
  });

  it('Should return testtoken', () => {
    const result = getTokenSearchers({
      get: () => 'Bearer testtoken'
    });

    assert.equal(result[0](), 'testtoken');
  });

  it('Should return testtoken', () => {
    const result = getTokenSearchers({
      query: {
        access_token: 'testtoken'
      }
    });

    assert.equal(result[1](), 'testtoken');
  });

  it('Should return testtoken', () => {
    const result = getTokenSearchers({
      body: {
        access_token: 'testtoken'
      }
    });

    assert.equal(result[2](), 'testtoken');
  });
});
