'use strict';

/**
 * @file
 * Cache wrapper for Provider Client Methods
 */

import {mapValues, isArray} from 'lodash';
import cacheManager from 'cache-manager';
import {log} from '../../utils';

/**
 * Converts a promise to a callback. Is needed to use cachemanager.wrap that expects a callback
 *
 * @param promise
 * @param callback
 */
function promiseAsCallback(promise, callback) {
  const promises = isArray(promise) && promise || [promise];
  promises.forEach((singlePromise) => {
    singlePromise
      .then((result) => callback(null, JSON.stringify(result)))
      .catch((err) => callback(err, null));
  });
}


/**
 * Constructor for a CacheManager.
 *
 * Sets up a cache store using the applied configurations.
 *
 * @example
 * const manager = CacheManager({
 *    store: 'memory',
 *    ttl: 3600 //minutes
 * });
 *
 * const wrappedMethods = manager.wrap(Client.METHODS);
 *
 * @param config
 * @returns {{wrap: wrap, store: *}}
 * @constructor
 */
export default function ClientCache(config) {
  const manager = cacheManager.caching(config);

  /**
   * Simple Wrapper for the indiviual client method
   *
   * Encapsulates the settings used for the cachePromiseWrapper
   *
   * @param fn function that is called
   * @param ttl time to live
   * @param params params for function call
   * @returns {Promise}
   * @api private
   */
  function wrapMethodInCache(fn, fnName, ttl, params) {
    const key = fnName + JSON.stringify(params);
    return new Promise((resolve, reject) => {
      manager.wrap(key, (cb) => {
        promiseAsCallback(fn(params), cb);
      }, {ttl}, (err, result) => {
        if (err) {
          log.error('Promise was rejected in cachePromiseCallback', {error: err, params: params});
          reject(err);
        }
        else {
          resolve(JSON.parse(result));
        }
      });
    });
  }

  /**
   * Wraps the client methods with a promise cache layer
   *
   * @param {Object} methods the methods of a client
   * @param {Number} ttl optional cache time in seconds
   * @returns {Object} returns the methods wrapped in a cache layer
   * @api public
   */
  return (methods, ttl) => mapValues(methods, (fn, fnName) => wrapMethodInCache.bind(this, fn, fnName, ttl));
}
