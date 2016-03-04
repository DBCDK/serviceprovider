'use strict';

import {assert} from 'chai';
import Borchk from '../client.js';

describe('Test Borrow check request', () => {
  it('The init method should throw when no config obhect is provided', () => {
    assert.throw(Borchk, Error, 'A config object should be provided');
  });

  it('The init method should throw when no wsdl key is provided ', () => {
    assert.throw(() => {
      Borchk({});
    }, Error, 'A wsdl key should be provided with the given config object');
  });

  it('The init method should throw when no serviceRequester key is provided ', () => {
    assert.throw(() => {
      Borchk({wsdl: 'test'});
    }, Error, 'A serviceRequester key should be provided with the given config object');
  });

  it('Init method should return object with methods when config object is properly formatted', () => {
    const obj = Borchk({wsdl: 'test', serviceRequester: 'test'});
    assert.isObject(obj, 'Got object as expected');
    assert.isFunction(obj.getBorrowerCheckResult, 'Found function named getBorrowerCheckResult');
  });

  it('getBorrowerCheckResult should return a Promise', () => {
    const borchk = Borchk({wsdl: 'test', serviceRequester: 'test'});
    const request = borchk.getBorrowerCheckResult({userId: 'userid', userPincode: 'userPincode', libraryCode: 'libraryCode'});

    // Assert Promise structure in object
    assert.isNumber(request._id, 'Found number');
    assert.property(request, '_state', 'Found _state');
    assert.property(request, '_result', 'Found _state');
    assert.property(request, '_subscribers', 'Found _state');
  });
});
