'use strict';

import {assert} from 'chai';
import * as mocks from './entitysuggest.mock.js';
import EntitySuggestTransform from '../entitysuggest.transform.js';

describe('Test EntitySuggest transform', () => {

  it('respond correctly on errors', () => {
    const obj = {error: {statusCode: '500', statusMessage: 'statusMessage'}};
    const expected = '{"error":true,"statusCode":"500","statusMessage":"statusMessage"}';

    const response = JSON.stringify(EntitySuggestTransform.responseTransform(obj, 'query'));
    assert.equal(response, expected, 'got object as expected');
  });

  it('should respond correctly on results from entity-suggest service (library)', () => {
    const obj = mocks.balEntity;
    const expected = '{"index":"library","docs":[{"library":{"væsensnavn":"Ballerup Bibliotekerne","adresse":"Hovedbiblioteket Banegårdspladsen 1","id":"715100","postnr":"2750","geolokation":{"lat":55.7297418,"lng":12.3595981},"navn":"Ballerup Bibliotek","bibliotekstype":"Folkebibliotek","by":"Ballerup"}},{"library":{"væsensnavn":"Faaborg-Midtfyn Bibliotekerne","adresse":"Egeballe 4 A","id":"743003","postnr":"5672","geolokation":{"lat":55.256033,"lng":10.235524},"navn":"Broby Bibliotek","bibliotekstype":"Folkebibliotek","by":"Broby"}},{"library":{"væsensnavn":"Ballerup Bibliotekerne","adresse":"Måløv Hovedgade 60","id":"715102","postnr":"2760","geolokation":{"lat":55.749694,"lng":12.319237},"navn":"Kulturhus Måløv","bibliotekstype":"Folkebibliotek","by":"Måløv"}},{"library":{"væsensnavn":"Ballerup Bibliotekerne","adresse":"Bybjergvej 8-10","id":"715101","postnr":"2740","geolokation":{"lat":55.718655,"lng":12.400783},"navn":"Skovlunde Kulturhus","bibliotekstype":"Folkebibliotek","by":"Skovlunde"}}],"query":"bal"}';  // eslint-disable-line max-len

    const response = JSON.stringify(EntitySuggestTransform.responseTransform(obj));
    assert.equal(response, expected, 'got object as expected');
  });
});
