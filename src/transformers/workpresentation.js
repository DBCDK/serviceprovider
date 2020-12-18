/**
 * @file
 * Workpresentation transformer.
 *
 */

/**
  * Maps work-service from backend response to serviceprovider api

  * @param {String} workId (Required)
  * @param {String} agencyId (Required)
  * @param {String} profile (Required)
  * @param {String} trackingId 
  * @returns {Object}
  */

import {log} from '../utils';
import {appId} from '../utils/config';

/**
 * Default transformer.
 * Wraps work-service backend and returns work info
 *
 * @param {Object} request parameters from the /workpresentation
 * @param {Object} context The context object fetched from smaug
 * @returns {Object|Promise} promise with result
 * @api public
 */
export default (request, context) => {
  let {agencyId} = request;
  const {workId, profile, includeRelations = false, trackingId} = request;
  const service = context.get('services.workpresentation');

  // Ensure agencyId is string
  agencyId = agencyId.toString();

  // Check for empty required inputs
  if (!workId || !agencyId || !profile) {
    return Promise.resolve({
      statusCode: 400,
      error: 'Missing one or more required parameters'
    });
  }

  // If agency contains leading 'DK-' it will be removed
  if (agencyId.toLowerCase().substring(0, 3) === 'dk-') {
    agencyId = agencyId.substring(3);
  }

  // Ensure agency is an int
  var agencyIdIsInt = /^\d+$/.test(agencyId);
  if (!agencyIdIsInt) {
    return Promise.resolve({
      statusCode: 400,
      error: 'agencyId is not a number'
    });
  }

  // Parameters for request
  const params = {
    workId,
    agencyId,
    profile,
    includeRelations,
    appId
  };

  // Include trackingId if given in request
  if (trackingId) {
    params.trackingId = trackingId;
  }

  return context.call(service, params).then(body => {
    if (!body.data) {
      log.error(
        `/workpresentation - No response was returned from ${service}`,
        {
          params,
          body
        }
      );

      return Promise.resolve({
        statusCode: 500,
        error: 'Some error occurred'
      });
    }

    // Not found error returns 404 statuscode
    if (body.data.errorCode === 'NOT_FOUND_ERROR') {
      return Promise.resolve({
        statusCode: 404,
        error: 'Not found error',
        data: body.data
      });
    }

    // Return response
    return Promise.resolve({
      statusCode: 200,
      data: body.data
    });
  });
};
