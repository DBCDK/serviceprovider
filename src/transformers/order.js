/**
 * @file
 * order transformer.
 *
 * Wraps openorder backend.
 */
import cancelOrder from './cancelOrder';
import placeOrder from './placeOrder';
import {log} from '../utils';

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
  } catch (err) {
    return new Promise(resolve => {
      return resolve({
        statusCode: 400,
        error: err
      });
    });
  }

  if (request.delete && request.delete !== 'false') {
    return cancelOrder(request, context);
  }
  return placeOrder(request, context);
};
