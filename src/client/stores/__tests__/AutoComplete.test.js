'use strict';

/**
 * @file
 * Testing the AutoComplete.store
 */
import {assert, expect} from 'chai';
import AutoCompleteStore from '../AutoComplete.store';

describe('Testing the AutoComplete Store', () => {

  it('AutoCompleteStore.addLinks should return array containing an object with an key named imageComp', () => {
    const data = [{
      pid: null
    }];
    const result = AutoCompleteStore.addLinks(data, 'display.creator');
    assert.isArray(result, 'Got array');
    assert.lengthOf(result, 1, 'Got array of length 1');
    assert.property(result[0], 'imageComp', 'Found key imageComp');
  });

  it('Should return array one containing an object with an key named imageComp', () => {
    const data = [{
      pid: 'hest'
    }];
    const result = AutoCompleteStore.addLinks(data, 'display.creator');
    assert.isArray(result, 'Got array');
    assert.lengthOf(result, 1, 'Got array of length 1');
    assert.property(result[0], 'imageComp', 'Found key imageComp');
  });

  it('AutoComplete.parseResponse should return empty object', () => {
    const response = {
      index: '',
      query: ''
    };

    const result = AutoCompleteStore.parseResponse(response, {});
    assert.isObject(result, 'Got object');
    expect(result).to.be.empty; // eslint-disable-line
  });

  it('AutoComplete.parseResponse should return object', () => {
    const response = {
      index: 'a',
      query: 'hest'
    };

    const expected = {hest: {a: {}}};

    const result = AutoCompleteStore.parseResponse(response, {});
    assert.isObject(result, 'Got object');
    assert.equal(JSON.stringify(result), JSON.stringify(expected), 'Result matches expectations');
  });

  it('AutoComplete.parseResponse should return object given an index equal display.creator', () => {
    const response = {
      index: 'display.creator',
      docs: ['a'],
      query: 'hest'
    };

    const result = AutoCompleteStore.parseResponse(response, {});
    assert.isObject(result, 'Got object');
    assert.property(result, response.query, 'response.query was found');
    assert.property(result[response.query], response.index, 'response.index was found');
    assert.property(result[response.query][response.index], 'label', 'label property was found');
    assert.property(result[response.query][response.index], 'data', 'data property was found');
    assert.equal(result[response.query][response.index].weight, 1, 'Found weight to equal 1');
  });

  it('AutoComplete.parseResponse should return object given an index equal display.title', () => {
    const response = {
      index: 'display.title',
      docs: ['a'],
      query: 'hest'
    };

    const result = AutoCompleteStore.parseResponse(response, {});
    assert.isObject(result, 'Got object');
    assert.property(result, response.query, 'response.query was found');
    assert.property(result[response.query], response.index, 'response.index was found');
    assert.property(result[response.query][response.index], 'label', 'label property was found');
    assert.property(result[response.query][response.index], 'data', 'data property was found');
    assert.equal(result[response.query][response.index].weight, 0, 'Found weight to equal 0');
  });

  it('AutoComplete.parseResponse should return object given an index equal term.subject', () => {
    const response = {
      index: 'term.subject',
      docs: ['a'],
      query: 'hest'
    };

    const result = AutoCompleteStore.parseResponse(response, {});
    assert.isObject(result, 'Got object');
    assert.property(result, response.query, 'response.query was found');
    assert.property(result[response.query], response.index, 'response.index was found');
    assert.property(result[response.query][response.index], 'label', 'label property was found');
    assert.property(result[response.query][response.index], 'data', 'data property was found');
    assert.equal(result[response.query][response.index].weight, 2, 'Found weight to equal 2');
  });
});
