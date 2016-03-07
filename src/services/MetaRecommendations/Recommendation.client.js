'use strict';

import request from 'request';
import {curry, isPlainObject, isUndefined, isArray} from 'lodash';

/**
 * Method for getting recommendations
 *
 * @param {String} endpoint
 * @param {Array} filters
 * @param {Object} params
 * @returns {Promise}
 */
function getRecommendations(endpoint, params) {
  if (!isPlainObject(params)) {
    return Promise.reject({statusMessage: 'Parameters should be an objet'});
  }

  if (!isArray(params.filter)) {
    return Promise.reject({statusMessage: 'filter should be an array. I.e. {filer: []}'});
  }

  const parameters = JSON.stringify({filter: params.filter, profile: params.profile || [], maxresults: 20});

  return new Promise((resolve, reject) => {
    request.post({
      url: endpoint,
      body: parameters
    }, (err, response) => {
      if (err) {
        return reject(err);
      }
      if (response.statusCode !== 200) {
        return reject(response);
      }

      return resolve(JSON.parse(response.body));
    });
  });
}

/**
 * Initialises the client and returns the request methods
 *
 * @param {String} endpoint
 * @param {Array} filters
 * @returns {{getRecommendations}}
 * @constructor
 */
export default function Recommendations(config) {
  if (isUndefined(config)) {
    throw new Error('config is undefined');
  }
  if (!config.endpoint) {
    throw new Error('An endpoint needs to be provided with config');
  }

  return {
    getRecommendations: curry(getRecommendations)(config.endpoint)
  };
}
