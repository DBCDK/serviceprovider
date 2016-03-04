'use strict';

import request from 'request';
import {curry} from 'lodash';

/**
 * Retrieves data from the webservice based on the parameters given
 *
 * @param {Object} params Parameters for the request
 * @param {string} service
 * @return {Promise}
 */
function sendRequest(uri, qs) {
  return new Promise((resolve, reject) => {
    request.get({uri, qs}, (err, response, body) => {
      if (err) {
        reject(err);
      }
      else if (response.statusCode !== 200) {
        reject(response);
      }
      else {
        const data = JSON.parse(body);
        resolve(data);
      }
    });
  });
}

/**
 * Constructs the objects of parameters for this type of request.
 * As the query is expected to be an array it is possible to make multiple
 * requests at once, each returned as a Promise.
 *
 * @param {Object} config
 * @param {Object} params
 *
 * @return {Promise} A promise is returned
 */
function getPopSuggestions(config, params) {
  const index = params.index && `${params.index}:` || '';
  const filter = params.filter || config.filter;
  const qs = {
    query: `${index}${params.query}*`,
    rows: params.rows || 100,
    fields: params.fields && params.fields.toString() || null,
    filter: filter.toString() || null,
    start: params.start || 0
  };
  return sendRequest(config.uri, qs);
}

/**
 * Initializes client and return api functions
 *
 * @param {Object} config Requires endpoint and port
 * @returns {{getPopSuggestions}}
 */
export default function PopSuggest(config) {
  if (!config) {
    throw new Error('no config object provided');
  }

  ['endpoint'].forEach((key) => {
    if (!config[key]) {
      throw new Error(`no ${key} provided in config`);
    }
  });

  const uri = config.endpoint;
  const filter = config.profile && [`rec.collectionIdentifier:${config.profile}`] || [];

  return {
    getPopSuggestions: curry(getPopSuggestions)({uri, filter})
  };
}
