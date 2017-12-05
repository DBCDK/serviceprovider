/**
 * @file
 * Unittesting methods in order.utils.js
 */
import {assert} from 'chai';

const validateDeleteOrder = require('../cancelOrder.js').validateParams;
const validateOrder = require('../placeOrder.js').validateParams;

describe('Unittesting methods in order.utils.js - validateDeleteOrder', () => {
  it('Should throw when orderId is missing', () => {
    const params = {orderType: 'normal'};
    const func = () => validateDeleteOrder(params);
    assert.throws(func);
  });

  it('Should throw when orderId is not a string', () => {
    const params = {orderId: [], orderType: 'normal'};
    const func = () => validateDeleteOrder(params);
    assert.throws(func);
  });

  it('Should not throw when orderId is a string', () => {
    const params = {orderId: 'string', orderType: 'normal'};
    const func = () => validateDeleteOrder(params);
    assert.doesNotThrow(func);
  });
});

describe('Unittesting methods in order.utils.js - validateOrder', () => {
  it('Should throw when pids is missing', () => {
    const params = {};
    const func = () => validateOrder(params);
    assert.throws(func);
  });

  it('Should throw when pids.length < 1', () => {
    const params = {pids: []};
    const func = () => validateOrder(params);
    assert.throws(func);
  });

  it('Should throw when pids is present and pickUpBranch is missing', () => {
    const params = {pids: [1, 2]};
    const func = () => validateOrder(params);
    assert.throw(func);
  });

  it('Should not throw when pids and pickUpBranch is present', () => {
    const params = {pids: [1, 2], pickUpBranch: 'library'};
    const func = () => validateOrder(params);
    assert.doesNotThrow(func);
  });
});
