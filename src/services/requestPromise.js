'use strict';

import request from 'request';
import {log} from '../utils';

/**
 * Wraps the general "request" in a promise (+ some error handling)
 *
 * @param {Object} params Parameters for the request
 * @return {Promise}
 */
export function requestPromise(params) {
  return new Promise((resolve, reject) => {
    log.info('calling client', params);
    request(params, (err, response, body) => {
      if (err) {
        log.error('call failed with error', {params: params, error: err});
        reject(err);
      }
      else if (response.statusCode !== 200) {
        log.error('call responded with unsuccesful statuscode',
                  {statusCode: response.statusCode});
        reject(response);
      }
      else {
        log.debug('endpoint responded on request', {params: params, body: body});
        resolve(body);
      }
    });
  });
}

// examples:

// var paramsPost = {
//   uri: 'https://xptest.dbc.dk/ms/recommend-pop/v1',
//   method: 'POST',
//   json: {
//     "profile": "default",
//     "like": [],
//     "maxresults":100
//   }
// };

// var paramsGet = {
//   uri: 'http://xptest.dbc.dk/entity-suggest/subject',
//   method: 'GET',
//   qs: {
//     query: 'dan',
//     rs: '5'
//   }
// };
