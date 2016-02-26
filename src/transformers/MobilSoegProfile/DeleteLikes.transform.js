'use strict';

/**
 * @file
 * Transform that requests deletion of all likes associated with a given users profile.
 */

const DeleteLikes = {

  /**
   * @return {string}
   */
  event() {
    return 'deleteLikesFromMobilSoegProfile';
  },

  /**
   * @param {String} event
   * @param {Object} query
   * @param {Object} connection
   */
  requestTransform(event, query, connection) {
    const passport = connection.request.session.passport || {user: {profile: {mobilSoegProfileId: null}}};
    const mobilSoegProfileId = passport.user.profile.mobilSoegProfileId;
    return this.callServiceClient('mobilSoegProfile', 'removeAllLikes', {mobilSoegProfileId: mobilSoegProfileId});
  },

  /**
   * @param {Object} response
   * @return {Object}
   */
  responseTransform(response) {
    return {statusCode: response.statusCode, statusMessage: response.statusMessage};
  }
};

export default DeleteLikes;
