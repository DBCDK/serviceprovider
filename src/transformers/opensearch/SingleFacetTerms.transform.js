'use strict';

import * as prep from './response-preparation.js';

const FacetsTransform = {

  event() {
    return 'getOpenSearchFacetTerms';
  },

  requestTransform(event, request) {
    return this.callServiceClient('opensearch', 'getFacetResult', {
      query: request.q,
      facets: {
        facetName: [request.facet],
        numberOfTerms: request.number
      }
    });
  },

  responseTransform(response) {
    let data = {
      result: {},
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
      data.result = {
        facetName: facetResult.facet.facetName,
        terms: (Array.isArray(facetResult.facet.facetTerm) && facetResult.facet.facetTerm || [facetResult.facet.facetTerm]).map((t) => {
          return {
            term: t.term,
            count: t.frequence
          };
        })
      };
    }
    return data;
  }
};

export default FacetsTransform;

