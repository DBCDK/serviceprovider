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

  it('Should update store appropriately', () => {
    const response = {
      info: {
        pids: ['pid']
      },
      result: {
        orderPlaced: 'test'
      }
    };

    ReceiptStore.update(response);
    const expected = {pid: 'test'};
    const result = ReceiptStore.getState();
    assert.deepEqual(result, expected, 'Store was as exepcted');
  });

  it('Should update store appropriately', () => {
    const response = {
      info: {
        pids: ['pid']
      },
      result: {}
    };

    ReceiptStore.update(response);
    const expected = {pid: 'false'};
    const result = ReceiptStore.getState();
    assert.deepEqual(result, expected, 'Store was as exepcted');
  });
});
