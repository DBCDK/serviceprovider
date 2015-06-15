'use strict';

import {expect} from 'chai';

import * as Query from '../query.util.js';

describe('Test Query Util Class', () => {
  it('should convert a query string object to an internal query object', () => {
    let result = Query.stringToObject({});
    expect(result).to.deep.equal([]);

    let query = {text: 'kanin|fisk', 'term.type': 'æble|banan'};
    let expectedResult = [
      {value: 'kanin', type: 'text', index: 'textkanin0'},
      {value: 'fisk', type: 'text', index: 'textfisk1'},
      {value: 'æble', type: 'term.type', index: 'term.typeæble0'},
      {value: 'banan', type: 'term.type', index: 'term.typebanan1'}
    ];
    result = Query.stringToObject(query);
    expect(result).to.deep.equal(expectedResult);
  });

  it('should convert internal query object to a query string', () => {
    let result = Query.objectToString([]);
    expect(result).to.deep.equal('');

    let objects = [
      {value: 'kanin', type: 'text', index: 'textkanin0'},
      {value: 'fisk', type: 'text', index: 'textfisk1'},
      {value: 'æble', type: 'term.type', index: 'term.typeæble0'},
      {value: 'banan', type: 'term.type', index: 'term.typebanan1'}
    ];
    let expectedResult = 'text=kanin|fisk&term.type=æble|banan';
    result = Query.objectToString(objects);
    expect(result).to.deep.equal(expectedResult);
  });

  it('should convert internal query object to a CQL string', () => {
    let result = Query.objectToCql([]);
    expect(result).to.deep.equal('');

    let objects = [
      {value: 'kanin', type: 'text', index: 'textkanin0'},
      {value: 'fisk', type: 'text', index: 'textfisk1'},
      {value: 'æble', type: 'term.type', index: 'term.typeæble0'},
      {value: 'banan', type: 'term.type', index: 'term.typebanan1'}
    ];
    let expectedResult = '(kanin and fisk) and term.type=(æble and banan)';
    result = Query.objectToCql(objects);
    expect(result).to.deep.equal(expectedResult);
  });
});
