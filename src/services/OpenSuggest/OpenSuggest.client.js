'use strict';

import {Promise} from 'es6-promise';
import {Client} from 'node-rest-client';
let client = new Client();

/**
 * Method for getting suggestions
 *
 * @param params
 * @returns {Promise}
 */
function getSuggestions(parameters) {
  return new Promise((resolve, reject) => {
    client.methods.getSuggestions({parameters}, (data, response) => {
      if (response.statusCode === 200) {
        resolve(data);
      } else {
        reject(response);
      }
    });
  });
}

/**
 * Wrapper function for all the client methods
 *
 * @param endpoint
 * @returns {{getSuggestions: getSuggestions}}
 */
function registerMethods(endpoint) {
  client.registerMethod('getSuggestions', `${endpoint}/rest/terms`, 'get');
  return {
    getSuggestions: getSuggestions
  };
}

/**
 * Initialises the client and returns the request methods
 *
 * @param endpoint
 * @param config
 * @returns {{getSuggestions}}
 * @constructor
 */
export default function OpenSuggestion(endpoint) {

  return registerMethods(endpoint);
}
