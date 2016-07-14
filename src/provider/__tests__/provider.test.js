

/**
 * @file Testing the provider
 */
import Provider from '../Provider.js';
import {expect, assert} from 'chai';

describe('Testing methods on the Provider', () => {
  it('assert methods are accessible', () => {
    assert.isNotNull(Provider);
    assert.isFunction(Provider);
  });

  it('Test the constructor method', () => {
    expect(() => Provider({})).to.not.throw(Error);
  });
});
