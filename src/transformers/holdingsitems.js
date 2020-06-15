/**
 * @file
 * Holding transformer.
 *
 */

/**
  * Maps holdings-items-content-service from backend response to serviceprovider api

  * @param {Object} agency (Required)
  * @param {array} pids
  * @param {string} item_id
  * @returns {Array}
  */

import {log} from '../utils';
import {appId} from '../utils/config';

/**
 * Function to restructure and return pids api repsonse
 * @param {array} data
 * @returns {array}
 */

function returnPidsResponse(data) {
  return Object.keys(data.holdings).map(pid => {
    return {pid: pid, holdingsitems: data.holdings[pid]};
  });
}

/**
 * Function to restructure and return item_id api repsonse
 * @param {object} data
 * @returns {object}
 */
function returnItemIdResponse(data) {
  return {holdingsitems: data.holdings};
}

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
  let agency = request.agency;
  const pids = request.pids;
  const itemId = request.item_id;

  // Ensure request contain an angency id
  if (!agency) {
    return Promise.resolve({
      statusCode: 400,
      error: 'Request must contain a valid agency prop'
    });
  }

  // Ensure request contain either pids or item_id
  if (!pids && !itemId) {
    return Promise.resolve({
      statusCode: 400,
      error: 'Request must either contain the `pids` or `item_id` prop'
    });
  }

  // Ensure request does not contain both pids and item_id
  if (pids && itemId) {
    return Promise.resolve({
      statusCode: 400,
      error: 'Request is not allowed to contain both `pids` and `item_id` prop'
    });
  }

  // If agency contains leading 'DK-' it will be removed
  if (agency.includes('DK-')) {
    agency = agency.replace('DK-', '');
  }

  // Ensure agency is a int
  var agencyIsInt = /^\d+$/.test(agency);
  if (!agencyIsInt) {
    return Promise.resolve({
      statusCode: 400,
      error: 'Agency is not a number'
    });
  }

  const params = {
    agency: agency,
    pid: pids || null,
    itemId: itemId || null,
    // include AppId for api-service log
    appId: appId
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
    console.log('#############', body);
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

    // Default data return
    let data = [];

    // Structure data as ItemId response
    if (itemId) {
      data = returnItemIdResponse(body.data);
    }

    // Structure data as pids response
    if (pids) {
      data = returnPidsResponse(body.data);
    }

    // Return response
    return Promise.resolve({
      statusCode: 200,
      data
    });
  });
};
