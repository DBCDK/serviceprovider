'use strict';

import request from 'request';
import {curry} from 'lodash';

/**
 * Method for getting recommendations
 *
 * @param {Object} params
 * @returns {Promise}
 */
function getPersonalRecommendations(config, params) {
  var parameters = JSON.stringify({profile: config.profile, like: params.like, filter: params.filter || [], maxresults: 100});

  return new Promise((resolve, reject) => {
    request.post({
      url: config.endpoint,
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
 * @param endpoint
 * @param config
 * @returns {{getSuggestions}}
 * @constructor
 */
export default function Recommendations(config) {
  if (!config) {
    throw new Error('config is undefined');
  }
  if (!config.endpoint) {
    throw new Error('An endpoint needs to be provided with config');
  }

  return {
    getPersonalRecommendations: curry(getPersonalRecommendations)(config)
  };
}
