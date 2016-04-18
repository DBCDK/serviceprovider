'use strict';

import request from 'request';
import {curry, extend} from 'lodash';
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
        let response = {};
        response.data = JSON.parse(body);
        response.metadata = { path: uri,
                              params: params};
      }
      
      resolve(response);
      log.info('endpoint responded', {path: uri, params: params, data: response.data});
    });
  });
}

export function buildUri(context, method) {
  const url = context.endpoint;
  return `${url}/${method}`;
}
