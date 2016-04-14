'use strict';

const UpdatePickupAgency = {

  /**
   * @return {string}
   */
  event() {
    return 'savePickupAgencyToMobilSoegProfile';
  },

  /**
   * @param {String} event
   * @param {Object} query
   * @param {Object} connection
   */
  requestTransform(event, query, connection) {
    const passport = connection.request.session.passport || {user: {profile: {mobilSoegProfileId: null}}};

    return this.callServiceClient('mobilSoegProfile', 'updatePickupAgency', {
      mobilSoegProfileId: passport.user.profile.mobilSoegProfileId,
      pickupAgency: query
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

export default UpdatePickupAgency;
