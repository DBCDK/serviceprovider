'use strict';

/**
 * @file
 * Uses the custom method 'findMobilSoegProfile' to retrieve a user.
 * The method ensures that if no user is found a new will be created.
 *
 * @see http://profile-i01.dbc.dk:3001/explorer/#!/MobilSoegProfiles/findMobilSoegProfile
 */
const CheckBorrower = {

  /**
   * @return {string}
   */
  event() {
    return 'findMobilSoegProfile';
  },

  /**
   * @param {String} event
   * @param {Object} query
   */
  requestTransform(event, query, connection) {

    if (!query) {
      if (connection.request.session && connection.request.session.passport) {
        const passport = connection.request.session.passport;
        query = {
          agencyid: passport.user.agencyid,
          loanerid: passport.user.loanerid
        };
      }
      else {
        query = {};
      }
    }

    const agencyid = query.agencyid || '';
    const loanerid = query.loanerid || '';

    return this.callServiceClient('mobilSoegProfile', 'findMobilSoegProfile', {
      agencyid: agencyid,
      loanerid: loanerid
    });
  },

  /**
   * @param {Object} response
   * @return {Object}
   */
  responseTransform(response) {
    if (response.statusCode === 200 && response.body.response.id) {
      const _id = response.body.response.id;
      delete response.body.response.id;
      response.body.response.mobilSoegProfileId = _id;
    }

    return {body: response.body.response, statusCode: response.statusCode, statusMessage: response.statusMessage};
  }
};

export default CheckBorrower;
