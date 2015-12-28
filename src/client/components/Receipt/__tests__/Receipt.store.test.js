'use strict';

/**
 * Testing the Receipt.store
 */

import {assert} from 'chai';
import {isEmpty} from 'lodash';

import ReceiptStore from '../Receipt.store';

describe('Testing the Receipt.store', () => {

  beforeEach(() => {
    ReceiptStore.store = {};
  });

  it('Should return an empty objecy', () => {
    const obj = ReceiptStore.getState();
    assert.isObject(obj, 'Got object as expected');
    assert.isTrue(isEmpty(obj), 'Object is empty as expected');
  });
});
