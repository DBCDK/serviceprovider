'use strict';

import {assert} from 'chai';

import {fieldsFilter} from '../app.utils';

import {fieldsFilterMock} from './mocks/mocks';

describe('Unittesting the methods in app.middlewares.utils.js', () => {
  it('Should return as expected', () => {
    const request = fieldsFilterMock.request;
    const expected = fieldsFilterMock.expected;

    const result = fieldsFilter(request, {fields: ['titleFull']});
    assert.equal(JSON.stringify(result), JSON.stringify(expected));
  });

  it('Should return original obj', () => {
    const obj = 'hest';
    const result = fieldsFilter(obj, {query: []});
    assert.equal(obj, result);
  });

  it('Should return original obj', () => {
    const obj = {};
    const result = fieldsFilter(obj, {fields: {}});
    assert.equal(obj, result);
  });
});
