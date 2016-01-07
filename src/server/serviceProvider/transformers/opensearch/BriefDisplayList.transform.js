'use strict';
/**
 * @file
 * Transformation of request to and response from the Opensearch webservice,
 * for presentation of work data.
 */

import * as prep from './response-preparation.js';
import {inHTMLData} from 'xss-filters';
import {isArray} from 'lodash';
import ResultListTransform from './ResultList.transform.js';

/**
 * Transforms a work request data and the resulting work object from Open Search
 *
 * @return {Object}
 */
const WorkTransform = {
  event() {
    return 'getOpenSearchBriefDisplayList';
  },

  requestTransform(event, request, connection) {
    const pid = this.getPidList(request.pid);
    const query = 'rec.id=' + inHTMLData(pid);
    return this.callServiceClient('opensearch', 'getSearchResult', {
      query: query,
      start: request.start || 1,
      stepValue: request.stepValue || 100,
      objectFormats: ['briefDisplay'],
      getRelationData: 'none',
      agency: connection.libdata.config.agency
    });
  },

  getPidList(pids) {
    if (isArray(pids)) {
      const list = pids.join(' OR ');
      return `(${list})`;
    }
    return pids;
  },
  getArray(el) {
    return isArray(el) ? el : [el];
  },
  responseTransform(response) {
    const data = {
      info: {},
      error: {},
      works: []
    };
    let result = prep.checkResponse(response);
    if (result.hasOwnProperty('errorcode')) {
      data.error = result;
      return data;
    }

    data.info = {
      hits: result.hits,
      collections: result.collections
    };

    if (result.collections) {
      data.works = this.getArray(response.result.searchResult).map(ResultListTransform.extractWorkInformation);
    }

    return data;
  }
};

export default WorkTransform;
