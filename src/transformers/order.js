'use strict';
/**
 * @file
 * order transformer.
 *
 * Wraps openorder backend.
 */
import cancelOrder from './cancelOrder';
import placeOrder from './placeOrder';
import {log} from '../utils';
import {indexOf} from 'lodash';

/**
* Validate parameters
*
* @param {object} params parameters to validate
* @throws if validation fails
*/
function validateParams(params) {

  if (params.delete && params.delete === true) {
    // Delete is set
    if (!params.orderId) {
      throw ('Needs orderId to delete order');
    }

    if (typeof params.orderId !== 'string') {
      throw ('orderId must be a string');
    }
  }

  if (!params.delete || params.delete === 'false') {
    // Order is set
    if (!params.pids || params.pids.length < 1) {
      throw ('At least one pid must be provided to place order');
    }
    if (!params.library) {
      throw ('library must be provided (used for pickup)');
    }
  }
}

/**
 * Default transformer.
 * Wraps openorder backend and returns result of call
 *
 * @param {Object} params parameters from the user (no entries from this object is used)
 * @param {Object} context The context object fetched from smaug
 * @returns promise with result
 * @api public
 */
export default (request, context) => {
  try {
    log.debug('Validating request');
    validateParams(request);
  } catch (err) { // eslint-disable-line brace-style
    return new Promise(resolve => {
      return resolve({statusCode: 400,
                      error: err});
    });
  }

  if (request.delete) {
    return cancelOrder(request, context);
  }
  return placeOrder(request, context);
};
