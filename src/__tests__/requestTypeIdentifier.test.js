/**
 * @file
 * Unit testing the methods in requestTypeIdentifier.js
 */

import {assert} from 'chai';
import {makeReverseContext} from '../requestTypeIdentifier';
import {requestTypeIdentifierMock} from './mocks/mocks';

describe('Unit testing the methods in requestTypeIdentifier.js', () => {
  it('It should return expected value', () => {
    const expected = JSON.stringify(requestTypeIdentifierMock);
    const result = makeReverseContext();
    assert.equal(expected, JSON.stringify(result));
  });
});
