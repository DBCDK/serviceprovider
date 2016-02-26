'use strict';

import * as prep from './response-preparation.js';

const FacetsTransform = {

  event() {
    return 'getOpenSearchFacets';
  },

  getFacets(request) {
    return this.callServiceClient('opensearch', 'getFacetResult', request);
  },

  /**
   * Transforms the request from the application to Open Search request parameters
   *
   * @param {string} event
   * @param {Object} request
   * @return {Object} request parameters using Open Search terminology
   */

  requestTransform(event, request) {

    return this.getFacets({
      query: request.query,
      facets: {
        facetName: ['facet.type', 'facet.creator', 'facet.subject', 'facet.language', 'facet.category', 'facet.date', 'facet.acSource'],
        numberOfTerms: request.number
      }
    });
  },

  /**
   * Transforms the response from Open Search webservice to a representation
   * that can be used by the application
   *
   * @param {Object} response the response from the webservice
   * @return {Object} the transformed result
   */
  responseTransform(response) {
    let data = {
      result: [],
      info: {},
      error: []
    };
    let result = prep.checkResponse(response);

    if (result.hasOwnProperty('errorcode')) {
      data.error.push(result);
      return data;
    }

    const facetResult = response.result.facetResult || {};

    if (facetResult.hasOwnProperty('facet')) {
      facetResult.facet.forEach((f) => {
        f.facetTerm = Array.isArray(f.facetTerm) && f.facetTerm || [f.facetTerm];
        let terms = [];
        f.facetTerm.forEach((t) => {
          let term = {};
          term.term = t.term;
          term.count = t.frequence;
          terms.push(term);
        });
        data.result.push({facetName: f.facetName, terms: terms});
      });
    }
    return data;
  }
};

export default FacetsTransform;

