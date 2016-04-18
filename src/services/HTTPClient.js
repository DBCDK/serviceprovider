'use strict';

import request from 'request';
import {clone} from 'lodash';
import {log} from '../utils';
/**
 * Retrieves data from the webservice based on the parameters given
 *
 * @param {string} uri endpoint to send request to
 * @param {Object} params Parameters for the request
 * @return {Promise}
 */
export default function sendRequest(uri, query) {

  return new Promise((resolve, reject) => {
    let qs = clone(query);
    log.info('calling client', {path: uri, params: qs});

    request.get({uri, qs}, (err, response, body) => {
      if (err) {
        log.error(`call failed with error`, {path: uri, params: qs, error: err});
        reject(err);
      }
      else if (response.statusCode !== 200) {
        log.error('call responded with unsuccesful statuscode',
                  {path: uri, params: qs, statusCode: response.statusCode});
        reject(response);
      }
      else {
        let response = {};
        response.data = JSON.parse(body);
        response.metadata = { path: uri,
                              params: qs};
      resolve(response);
      log.info('endpoint responded', {path: uri, params: qs, data: response.data});
      }
    });
  });
}
