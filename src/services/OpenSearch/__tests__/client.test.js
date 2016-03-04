'use strict';

import {assert} from 'chai';
import OpenSearch from '../client.js';

describe('Test Open Search Facet Display', () => {

  it('Assert facet display', function(done) {

    done(); // remove for testing against webservice

    this.timeout(15000);
    setTimeout(done, 15000);
    const config = {
      wsdl: 'http://ml-p01.dbc.dk/opensearch/tags/4.1.1/?wsdl',
      agency: '150013',
      profile: 'opac'
    };

    const openSearch = OpenSearch(config);
    let result = openSearch.getFacetResult({
      query: '"harry potter"',
      facets: [{numberOfTerms: 5, facetName: ['facet.creator', 'facet.type']}]
    });

    result.then(function (searchResult) {
      assert.equal(searchResult.result.collectionCount, '0', 'collectionCount is 0');
      assert.equal(searchResult.result.more, 'true', 'there is more');
      assert.equal(searchResult.result.facetResult.facet[0].facetName, 'facet.creator', 'facet.creator is in result');
      done();
    }).catch(err => done(err));
  });
});

describe('Test Open Search List Display', () => {

  it('Assert list display', function(done) {

    done(); // remove for testing against webservice

    this.timeout(15000);
    setTimeout(done, 15000);
    const config = {
      wsdl: 'http://ml-p01.dbc.dk/opensearch/tags/4.1.1/?wsdl',
      agency: '150013',
      profile: 'opac'
    };

    const openSearch = OpenSearch(config);
    let result = openSearch.getSearchResult({
      query: '"harry potter"',
      start: '1',
      stepValue: '10',
      sort: 'rank_frequency'
    });

    result.then(function (searchResult) {
      assert.equal(searchResult.result.collectionCount, '10', 'collectionCount is 10');
      assert.equal(searchResult.result.sortUsed, 'rank_main_title', 'sort used is rank_main_title');
      assert.equal(searchResult.result.more, 'true', 'there is more');
      done();
    }).catch(err => done(err));
  });
});

describe('Test Open Search Work Display', () => {
  it('Assert work display', function(done) {

    done(); // remove for testing against webservice

    this.timeout(10000);
    setTimeout(done, 10000);
    const config = {
      wsdl: 'http://ml-p01.dbc.dk/opensearch/tags/4.1.1/?wsdl',
      agency: '150013',
      profile: 'opac'
    };

    const openSearch = OpenSearch(config);
    let result = openSearch.getWorkResult({
      query: 'rec.id=870970-basis:25245784',
      sort: 'date_descending'
    });

    result.then(function (searchResult) {
      assert.equal(searchResult.result.collectionCount, '1', 'collectionCount is 1');
      assert.equal(searchResult.result.more, 'false', 'there is not more');
      assert.isAbove(searchResult.result.searchResult.collection.numberOfObjects, 3, 'work contains more than 3 manifestations');
      done();
    }).catch(err => done(err));
  });
});
