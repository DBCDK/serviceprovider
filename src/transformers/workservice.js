/**
 * @file
 * Workservice transformer.
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

import { log } from '../utils';
import { appId } from '../utils/config';

/**
 * Default transformer.
 * Wraps work-service backend and returns work info
 *
 * @param {Object} request parameters from the /workservice
 * @param {Object} context The context object fetched from smaug
 * @returns {Object|Promise} promise with result
 * @api public
 */
export default (request, context) => {
  let { workId, agencyId } = request;
  const { profile, trackingId } = request;
  const service = context.get('services.workservice');

  // Check for empty required inputs
  if (!workId || !agencyId || !profile) {
    return Promise.resolve({
      statusCode: 400,
      error: 'Missing one or more required parameters'
    });
  }

  // if workId dosn't contain a leading 'work-of:' it will be auto-added
  if (!(request.workId.substring(0, 8) === 'work-of:')) {
    workId = `work-of:${workId}`;
  }

  // If agency contains leading 'DK-' it will be removed
  if (agencyId.toLowerCase().substring(0, 3) === 'dk-') {
    console.log('........................', agencyId.substring(3));

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
    appId
  };

  // Include trackingId if given in request
  if (trackingId) {
    params.trackingId = trackingId;
  }

  return context.call(service, params).then(body => {
    if (!body.data) {
      log.error(`/workservice - No response was returned from ${service}`, {
        params,
        body
      });
      return Promise.resolve({
        statusCode: 500,
        error: 'Some error occurred'
      });
    }

    // Return response
    return Promise.resolve({
      statusCode: 200,
      data: body.data
    });
  });
};
