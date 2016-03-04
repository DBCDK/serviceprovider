'use strict';
/**
 * @file
 * Tests of the more info client
 */
import {assert} from 'chai';
import MoreInfo from '../client.js';

describe('Test moreinfo service client', () => {
  it('factory should throw error', function () {
    assert.throw(MoreInfo, Error, 'A config object should be provided');
    assert.throw(() => MoreInfo({}), 'A wsdl should be provided with the given config object');
    assert.throw(() => MoreInfo({wsdl: 'test'}), 'Authentication user, group and password should be provided with the given config object');
  });

  it('should expose methods', () => {
    const method = MoreInfo({wsdl: 'test', user: 'test', group: 'test', password: 'test'});
    assert.isFunction(method.getMoreInfoResult);
  });

});
