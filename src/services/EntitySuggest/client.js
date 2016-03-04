'use strict';

import request from 'request';
import {curry, extend} from 'lodash';

/**
 * Retrieves data from the webservice based on the parameters given
 *
 * @param {Object} params Parameters for the request
 * @param {string} service
 * @return {Promise}
 */
function sendRequest(defaults, method, query) {
  const {url, logger, lt} = defaults;
  return new Promise((resolve, reject) => {
    const uri = `${url}/${method}`;
    const qs = extend({lt}, query);
    logger.log('entity-suggest client request with params', qs);
    request.get({uri, qs}, (err, response, body) => {
      if (err) {
        logger.error('suggest client responded with an error', {err});
        reject(err);
      }
      else if (response.statusCode !== 200) {
        logger.error('uri responds with fail statusCode', {path: uri, statusCode: response.statusCode});
        reject(response);
      }
      else {
        const data = JSON.parse(body);
        const params = {
          service: 'entity-suggest',
          method: method,
          qs: qs,
          url: url
        };
        const responseData = extend(data, {params});
        resolve(responseData);
        logger.info('suggest client responded with data', {path: uri, params: qs, data: data});
      }
    });
  });
}


/**
 * Initializes client and return api functions
 *
 * @param {Object} config Requires endpoint and port
 * @returns {{getSubjectSuggestions, getCreatorSuggestions, getLibrarySuggestions}}
 */
export default function EntitySuggestClient(config) {
  if (!config) {
    throw new Error('no config object provided');
  }

  if (!config.endpoint) {
    throw new Error('no endpoint provided in config');
  }

  const defaults = {
    lt: config.libraryType || 'folkebibliotek',
    url: config.endpoint,
    logger: config.logger || console
  };

  return {
    getSubjectSuggestions: curry(sendRequest)(defaults)('subject'),
    getCreatorSuggestions: curry(sendRequest)(defaults)('creator'),
    getLibrarySuggestions: curry(sendRequest)(defaults)('library')
  };
}
