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
import {validateDeleteOrder, validateOrder} from './utils/order.utils';

/**
 * Validate parameters
 *
 * @param {object} params parameters to validate
 * @throws if validation fails
 */
function validateParams(params) {
  if (params.delete && params.delete === true) {
    // Delete is set
    validateDeleteOrder(params);
  }

  if (!params.delete || params.delete === 'false') {
    // Order is set
    validateOrder(params);
  }
}

/**
 * Default transformer.
 * Wraps openorder backend and returns result of call
 *
 * @param {Object} request
 * @param {Object} context The context object fetched from smaug
 * @returns {Promise} with result
 * @api public
 */
export default (request, context) => {
  try {
    log.debug('Validating request');
    validateParams(request);
  } catch (err) {
    return new Promise(resolve => {
      return resolve({
        statusCode: 400,
        error: err
      });
    });
  }

  if (request.delete) {
    return cancelOrder(request, context);
  }
  return placeOrder(request, context);
};
