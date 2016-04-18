'use strict';

import request from 'request';
import {curry, isPlainObject, isUndefined, isArray} from 'lodash';

/**
 * Method for getting recommendations
 *
 * @param {String} url
 * @param {Array} filters
 * @param {Object} params
 * @returns {Promise}
 */
function getRecommendations(url, params) {
  if (!isPlainObject(params) || isUndefined(params.likes) || isUndefined(params.dislikes)) {
    return Promise.reject({statusMessage: 'Parameters should be an objet that contains both a like and a dislike parameter. I.e. { like: [], dislike: [] }'});
  }

  if (!isArray(params.likes) || !isArray(params.dislikes)) {
    return Promise.reject({statusMessage: 'Parameters \'like\' and \'dislike\' should be arrays. I.e. { like: [], dislike: [] }'});
  }

  let parameters = JSON.stringify({like: params.likes, dislike: params.dislikes, filter: params.filter || [], maxresults: 20});

  return new Promise((resolve, reject) => {
    request.post({
      url: url,
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
  if (!config.url) {
    throw new Error('An url needs to be provided with config');
  }

  return {
    getRecommendations: curry(getRecommendations)(config.url)
  };
}
