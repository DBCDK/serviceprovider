'use strict';

/**
 * @file
 * Testing the ResultList.transform
 */

import {assert} from 'chai';
import {OneFacetOnly, MultipleFacets} from './mocks.js';
import ResultListTransform from '../ResultList.transform.js';

describe('Test the ResultList.transform', () => {
  it('Should return empty array when no facets are found on facet object', () => {
    const response = {
      result: {
        facetResult: {
          facet: {}
        }
      }
    };

    const result = ResultListTransform.getFacets(response);
    assert.isArray(result, 'Got array as expected');
    assert.lengthOf(result, 0, 'Array is empty');
  });

  it('Should return empty array when no no facet object is found on facetResult', () => {
    const response = {
      result: {
        facetResult: {}
      }
    };

    const result = ResultListTransform.getFacets(response);
    assert.isArray(result, 'Got array as expected');
    assert.lengthOf(result, 0, 'Array is empty');
  });

  it('Should return array of facets when only one facet is found in searchresult', () => {
    const response = OneFacetOnly;

    const result = ResultListTransform.getFacets(response);
    assert.isArray(result, 'Got array as expected');
    assert.lengthOf(result, 1, 'Array is empty');
  });

  it('Should return array of facets when multiple facets are found in searchresult', () => {
    const response = MultipleFacets;

    const result = ResultListTransform.getFacets(response);
    assert.isArray(result, 'Got array as expected');
    assert.lengthOf(result, 5, 'Array is empty');
  });
});
