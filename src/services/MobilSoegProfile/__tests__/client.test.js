'use strict';

import {assert} from 'chai';
import MobilSoegProfileClient from '../client.js';
import {each} from 'lodash';

describe('Test methods in client.js', () => {

  const methods = MobilSoegProfileClient({
    endpoint: 'test'
  });

  it('Should ensure saveLike is present', () => {
    assert.isFunction(methods.saveLike, 'saveLike was found');
  });

  it('Should ensure updateLike is present', () => {
    assert.isFunction(methods.updateLike, 'updateLike was found');
  });

  it('Should ensure removeLike is present', () => {
    assert.isFunction(methods.removeLike, 'removeLike was found');
  });


  it('Should ensure all methods found in METHODS are present', () => {
    each(methods.METHODS, (method, key) => {
      assert.isFunction(methods[key], 'found method: ' + key);
    });
  });

  it('Should throw when no config object is provided to init', () => {
    assert.throws(MobilSoegProfileClient, Error, 'Expected config object but got null or no endpoint provided');
  });

  it('Should throw when config object is provided but no endpoint to init', () => {
    assert.throws(() => MobilSoegProfileClient({}), Error, 'Expected config object but got null or no endpoint provided');
  });
});
