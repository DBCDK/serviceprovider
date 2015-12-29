'use strict';
/**
 * @file
 * Transformation of request to and response from the Opensearch webservice,
 * for presentation of work data.
 */

import * as prep from './response-preparation.js';
import {inHTMLData} from 'xss-filters';
import {isArray} from 'lodash';

/**
 * Transforms a work request data and the resulting work object from Open Search
 *
 * @return {Object}
 */
const WorkTransform = {
  event() {
    return 'getOpenSearchWorkBriefDisplay';
  },

  requestTransform(event, request, connection) {
    let pid = 'rec.id=' + inHTMLData(request.pid);
    return this.callServiceClient('opensearch', 'getWorkResult', {
      query: pid,
      objectFormats: ['briefDisplay'],
      getRelationData: 'none',
      agency: connection.libdata.config.agency
    });
  },

  getArray(el) {
    return isArray(el) ? el : [el];
  },

  responseTransform(response) {
    let data = {};
    data.info = {};
    data.error = [];
    data.work = {
      pid: '',
      title: '',
      fullTitle: '',
      alternativeTitle: '',
      creator: '',
      contributers: [],
      abstract: '',
      isbns: [],
      extent: '',
      actors: [],
      series: '',
      subjects: [],
      dk5s: [],
      audience: {
        age: [],
        pegi: '',
        medieraad: '',
        type: ''
      },
      tracks: [],
      languages: [],
      editions: []
    };

    let result = prep.checkResponse(response);

    if (result.hasOwnProperty('errorcode')) {
      data.error.push(result);
      return data;
    }

    data.info.hits = result.hits;
    data.info.collections = result.collections;

    if (result.collections === '0') {
      return data;
    }

    this.getArray(response.result.searchResult.formattedCollection.briefDisplay.manifestation).forEach((manifestation) => {
      let edition = {
        accessType: '',
        creator: '',
        identifier: '',
        title: '',
        type: '',
        workType: ''
      };

      data.work.fullTitle = manifestation.titleFull || data.work.fullTitle;
      data.work.languages.push(manifestation.language || '');

      data.work.creator = edition.creator = manifestation.creator || data.work.creator;
      data.work.pid = edition.identifier = manifestation.identifier || data.work.pid;
      data.work.title = edition.title = manifestation.title || data.work.title;

      edition.accessType = manifestation.accessType || '';
      edition.type = manifestation.type || '';
      edition.workType = manifestation.type || '';

      data.work.editions[manifestation.identifier] = edition;
    });

    return data;
  }
};

export default WorkTransform;
