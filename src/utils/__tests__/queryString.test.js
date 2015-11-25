'use strict';
import {expect} from 'chai';
import {updateQueryFromString} from '../QueryString.util.js';

describe('Test the Querystring Utility class', () => {
  it('only matches exact words, and removed unmatched elements', ()=> {
    const query = [
      {value: 'æble'},
      {value: 'hest'}
    ];
    const string = 'æbler er gode';
    const result = updateQueryFromString(string, query);
    const exptectedResult = [
      {value: 'æbler', type: 'text'},
      {value: 'er', type: 'text'},
      {value: 'gode', type: 'text'}
    ];
    expect(result).to.deep.equal(exptectedResult);
  });

  it('adds words that is inserted in the middle and beginning of the string', ()=> {
    const query = [
      {value: 'æble', type: 'test'},
      {value: 'hest', type: 'animal'},
      {value: 'tå', type: 'foot'}
    ];
    const string = 'et æble er hest tå';
    const result = updateQueryFromString(string, query);
    const exptectedResult = [
      {value: 'et', type: 'text'},
      {value: 'æble', type: 'test'},
      {value: 'er', type: 'text'},
      {value: 'hest', type: 'animal'},
      {value: 'tå', type: 'foot'}
    ];
    expect(result).to.deep.equal(exptectedResult);
  });
});
