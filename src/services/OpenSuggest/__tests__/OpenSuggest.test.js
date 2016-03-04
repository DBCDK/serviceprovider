'use strict';

import OpenSuggest from '../OpenSuggest.client.js';
import {expect} from 'chai';

describe('Test methods getSuggestions', () => {

  it('can get Test working client', (done) => {
    let endpoint = 'http://opensuggestion.addi.dk/1.0/';
    let client = OpenSuggest(endpoint);
    const params = {
      index: 'scanphrase.creator',
      query: 'Karl'
    };
    client.getSuggestions(params)
      .then((response) => {
        expect(response.suggestions).to.be.array; // eslint-disable-line  no-unused-expressions
        expect(response.suggestions[0].suggestion).to.equal('karl marx');
        done();
      });
  });

  it('catches failing client', (done) => {
    let endpoint = 'http://opensuggestion.addi.dk/not.valid/';
    let client = OpenSuggest(endpoint);
    const params = {
      index: 'scanphrase.creator',
      query: 'Karl'
    };
    client.getSuggestions(params)
      .catch((response) => {
        expect(response.statusMessage).to.equal('Not Found');
        done();
      });
  });

  it('has no results', (done) => {
    let endpoint = 'http://opensuggestion.addi.dk/1.0/';
    let client = OpenSuggest(endpoint);
    const params = {
      index: 'scanphrase.not_valid',
      query: 'Karl'
    };
    client.getSuggestions(params)
      .then((response)=> {
        expect(response.suggestions.length).to.be.equal(0);
        done();
      });
  });
});
