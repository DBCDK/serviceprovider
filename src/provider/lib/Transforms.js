'use strict';

/**
 * @file
 * Module for registering all transforms
 */

import {isArray} from 'lodash';
import {now} from './Utils.js';

/**
 * Validate the transform object.
 *
 * @param {Object} transform
 * @return {Object}
 * @throws {Error}
 * @api public
 */
function validateTransform(transform) {
  if (!transform.event) {
    throw new Error('No event method not found on transform');
  }

  if (!transform.requestTransform) {
    throw new Error('No requestTransform method not found on transform');
  }

  if (!transform.responseTransform) {
    throw new Error('No responseTransform method not found on transform');
  }
  return transform;
}

/**
 *
 * @param transform
 * @param clients
 * @param logger
 * @returns {trigger}
 */
export default function Transform(transform, clients, logger = console) {
  validateTransform(transform);
  transform.clients = clients;
  transform.logger = logger;

  /**
   *
   * @deprecated
   * Call the clients directly through the clients object. this.clients.clientName.method(params);
   *
   * @param client
   * @param method
   * @param params
   * @returns {*}
   */
  transform.callServiceClient = function callServiceClient(client, method, params) {
    return clients[client][method](params);
  };

  /**
   * Trigger request on a transform
   *
   * @param params
   * @param context
   * @param callback
   */
  transform.trigger = function trigger(params, context) {
    const requestStart = now();
    const event = transform.event();
    const request = transform.requestTransform(event, params, context);
    const requests = isArray(request) && request || [request];
    return requests.map((requestPromise) => {
      return requestPromise
        .then((response) => {
          const transformedResponse = transform.responseTransform(response, params, context);
          const requestStop = now();
          logger.log('info', 'Transform has been triggered', {
            event: event,
            timing: requestStop - requestStart,
            request: params,
            /* Do not log `response` objects
             * as these sometimes include large data,
             * - especially with mobilsoeg-profile transforms -
             * which has a bad performance impact
             * when the logger tries to serialise it.
            //serviceReponse: response,
             */
            finalResponse: transformedResponse
          });
          return transformedResponse;
        });
    });
  };

  return transform;
}
