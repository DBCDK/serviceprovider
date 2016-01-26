'use strict';

import * as prep from './response-preparation.js';
import {isArray} from 'lodash';

const ResultListTransform = {

  event() {
    return 'getOpenSearchResultList';
  },

  getSearchResultList(request) {
    return this.callServiceClient('opensearch', 'getSearchResult', request);
  },

  /**
   * Transforms the request from the application to Open Search request parameters
   *
   * @param {string} event
   * @param {Object} request
   * @return {Object} request parameters using Open Search terminology
   */

  requestTransform(event, request) {
    let sort = request.sort;

    if (request.sort === 'default') {
      sort = 'rank_frequency';
    }

    return this.getSearchResultList({
      query: request.query,
      start: request.offset,
      stepValue: request.worksPerPage,
      sort: sort,
      facets: {
        facetName: 'term.workType',
        numberOfTerms: 15
      }
    });
  },

  /**
   * Extract facets from the response.
   *
   * @param {Object} response The response from which the facets should be extracted.
   * @return {Array} result Array of facets. Empty array if none is found.
   */
  getFacets(response) {
    const facets = response.result.facetResult.facet || {};
    let result = [];

    if (facets.hasOwnProperty('facetTerm')) {
      const facetTerms = isArray(facets.facetTerm) ? facets.facetTerm : [facets.facetTerm];
      facetTerms.forEach((value) => {
        result.push({
          type: facets.facetName,
          value: value.term,
          displayValue: value.term,
          cssClass: 'worktype'
        });
      });
    }
    return result;
  },

  /**
   * Extract facets from the response.
   *
   * @param {Object} response The response from which the facets should be extracted.
   * @return {Array} result Array of facets. Empty array if none is found.
   */
  prefetchWork(pid) {
    pid = 'rec.id=' + pid;
    const request = {
      query: pid,
      start: 1,
      stepValue: 1,
      allObjects: true
    };
    this.callServiceClient('opensearch', 'getWorkResult', request);
  },

  extractWorkInformation(work) {
    let newWork = {};
    let no = work.collection.numberOfObjects;
    let identifiers = [];
    let title, creator, workType;

    if (no === '1') {
      identifiers.push(work.collection.object.primaryObjectIdentifier || work.collection.object.identifier);
      title = work.formattedCollection.briefDisplay.manifestation.titleFull;
      creator = work.formattedCollection.briefDisplay.manifestation.creator;
      workType = work.formattedCollection.briefDisplay.manifestation.workType;
    }
    else {
      work.collection.object.forEach((identifier) => {
        if (identifier.primaryObjectIdentifier.length || identifier.identifier.length) {
          identifiers.push(identifier.primaryObjectIdentifier || identifier.identifier);
          title = work.formattedCollection.briefDisplay.manifestation[0].titleFull;
          creator = work.formattedCollection.briefDisplay.manifestation[0].creator;
          workType = work.formattedCollection.briefDisplay.manifestation[0].workType;
        }
      });
    }

    if (identifiers.length) {
      newWork.identifiers = identifiers;
      newWork.title = title;
      newWork.creator = creator;
      newWork.workType = workType;
      return newWork;
    }
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
      info: {
        facets: []
      },
      error: []
    };

    let result = prep.checkResponse(response);

    if (result.hasOwnProperty('errorcode')) {
      data.error.push(result);
      return data;
    }
    else if (result.collections === '0') {
      data.info.hits = result.hits;
      data.info.collections = result.collections;
      data.info.more = result.more;
      return data;
    }

    data.info.hits = result.hits;
    data.info.collections = result.collections;
    data.info.more = result.more;

    if (result.collections === '1') {
      let searchResult = response.result.searchResult;
      response.result.searchResult = [searchResult];
    }

    data.info.facets = this.getFacets(response);

    response.result.searchResult.forEach((work) => {

      const newWork = this.extractWorkInformation(work);

      if (newWork) {
        data.result.push(newWork);
        // send asynchronous prefetch request for works
        newWork.identifiers.forEach((pid) => {
          this.prefetchWork(pid);
        });
      }

    });

    return data;
  }
};

export default ResultListTransform;
