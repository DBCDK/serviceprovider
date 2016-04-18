'use strict';

import request from 'request';
import {log} from '../utils';
/**
 * Retrieves data from the webservice based on the given parameters
 *
 * @param {Object} params Parameters for the request
 * @param {string} service
 * @return {Promise}
 */
export function sendRequest(uri, params) {
  return new Promise((resolve, reject) => {
    log.debug('calling url: ' + uri + ' with params ' + JSON.stringify(params));
    request.get({uri, params}, (err, response, body) => {
      let result = {};
      if (err) {
        log.error(`call failed with error`, {path: uri, params: params, error: err});
        reject(err);
      }
      else if (response.statusCode !== 200) {
        log.error('call responded with unsuccesful statuscode',
                  {path: uri, params: params, statusCode: response.statusCode});
        reject(response);
      }
      else {
        result.data = JSON.parse(body);
        result.metadata = {path: uri,
                           params: params};
      }

      resolve(result);
      log.info('endpoint responded', {path: uri, params: params, data: result.data});
    });
  });
}

export function buildUri(context, method) {
  const url = context.endpoint;
  return `${url}/${method}`;
}
