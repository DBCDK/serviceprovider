/**
 * @file
 * Holding transformer.
 *
 */

import {log} from '../utils';

/**
 * Maps holdings-items-content-service from backend response to serviceprovider api

 * @param {Object} agency (Required)
 * @param {array} pids
 * @param {string} item_id
 * @returns {Object} response with mapped keys
 */

/**
 * Default transformer.
 * Wraps holdings-items-content-service backend and returns holdingsitems info
 *
 * @param {Object} request parameters from the /holdingsitems
 * @param {Object} context The context object fetched from smaug
 * @returns {Object|Promise} promise with result
 * @api public
 */
export default (request, context) => {
  // Ensure request contain an angency id
  if (!request.agency) {
    return Promise.resolve({
      statusCode: 400,
      error: 'Request must contain a valid agency prop'
    });
  }

  // Ensure request contain either pids or item_id
  if (!request.pids && !request.item_id) {
    return Promise.resolve({
      statusCode: 400,
      error: 'Request must either contain the `pids` or `item_id` prop'
    });
  }

  // Ensure request does not contain both pids and item_id
  if (request.pids && request.item_id) {
    return Promise.resolve({
      statusCode: 400,
      error: 'Request is not allowed to contain both `pids` and `item_id` prop'
    });
  }

  const params = {
    agency: request.agency,
    pid: request.pids || null,
    itemId: request.item_id || null
  };

  // Request library options (optional)
  const options = {
    // The "useQuerystring" option is used to serialize an array in a query as foo=bar&foo=baz instead of the default.
    useQuerystring: true
  };

  const service = context.get('services.holdingsitems');
  const path = request.pids ? '/holdings-by-pid' : '/holdings-by-item-id';
  const api = service + path;

  return context.call(api, params, options).then(body => {
    if (!body.data) {
      log.error(`/holdingsitems - No response was returned from the ${api}`, {
        api,
        params,
        options,
        body
      });

      return Promise.resolve({
        statusCode: 500,
        error: 'Some error occurred'
      });
    }

    return Promise.resolve({
      statusCode: 200,
      data: body.data
    });
  });
};
