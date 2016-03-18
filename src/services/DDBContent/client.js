'use strict';

import request from 'request';
import {extend} from 'lodash';
import {log} from '../../utils';

/**
 * Retrieves data from the webservice based on the parameters given
 *
 * @param {Object} params Parameters for the request
 * @param {string} service
 * @return {Promise}
 */
function sendRequest(endpoint, method, qs) {
  return new Promise((resolve, reject) => {
    const uri = `${endpoint}/${method}`;
    log.info('ddbContent client request', {params: qs});
    request.get({uri, qs}, (err, response, body) => {
      if (err) {
        log.error('ddbContent client responded with an error', {err: err});
        reject({error: err});
      }
      else if (response.statusCode !== 200) {
        log.error('ddbContent client responds with fail statusCode', {path: uri, statusCode: response.statusCode});
        reject({error: response});
      }
      else {
        const data = JSON.parse(body);
        log.info('ddbContent client responded with data', {path: uri, params: qs, data: data});
        resolve(data);
      }
    });
  });
}

/**
 * Get a single content object by node id
 *
 * @param config
 * @param query
 * @returns {Promise}
 */
function getContentById(config, query) {
  if (!query.node) {
    return Promise.reject({error: 'node value not defined'});
  }

  const credentials = {key: config.key, agency: config.agency};
  return sendRequest(config.endpoint, 'content/fetch', extend(query, credentials));
}

/**
 * Get a list of content objects
 *
 * @param config
 * @param query
 * @returns {Promise}
 */
function getContentList(config, query) {
  const defaults = {amount: 10, sort: 'nid'};
  const credentials = {
    key: config.key,
    agency: config.agency
  };

  return sendRequest(config.endpoint, 'content/fetch', extend(credentials, defaults, query));
}

/**
 * Method for validating the content of the config object
 * @todo move to a base client or utility library
 *
 * @param config the provided config object
 * @param requiredKeys array of required element keys
 */
function isConfigValid(config, requiredKeys) {
  if (!config) {
    throw new Error('no config object provided');
  }

  requiredKeys.forEach((key) => {
    if (!config[key]) {
      throw new Error(`no ${key} provided in config`);
    }
  });
}

/**
 * Initializes client and return api functions
 *
 * @param {Object} config Requires endpoint and port
 * @returns {{getSubjectSuggestions, getCreatorSuggestions, getLibrarySuggestions}}
 */
export default function DdbContentClient(config) {
  isConfigValid(config, ['endpoint', 'agency', 'key']);

  return {
    getContentById: getContentById.bind(null, config),
    getContentList: getContentList.bind(null, config)
  };
}
