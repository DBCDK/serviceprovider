/**
 * @file
 * Holding transformer.
 *
 */

/**
 * Maps loan item from backend response to serviceprovider api
 * @param {Object} loanItem
 * @returns {Object} response with mapped keys
 */

/**
 * Default transformer.
 * Wraps openuserstatus backend and returns user info
 *
 * @param {Object} request parameters from the user (no entries from this object is used)
 * @param {Object} context The context object fetched from smaug
 * @returns {Object|Promise} promise with result
 * @api public
 */
export default (request, context) => {
  if (!context.get('user.id')) {
    return Promise.resolve({
      statusCode: 403,
      error: 'not logged in'
    });
  }

  return context.call('openuserstatus', params).then(body => {
    if (body.data.getUserStatusResponse.getUserStatusError) {
      return Promise.resolve({
        statusCode: 500,
        error: body.data.getUserStatusResponse.getUserStatusError.$
      });
    }

    const data = {
      hello: 'there'
    };

    return Promise.resolve({
      statusCode: 200,
      data: data
    });
  });
};
