'use strict';

/**
 * @file
 * Description
 */
const IsMobilSoegUserLoggedIn = {

  /**
   * @return {string}
   */
  event() {
    return 'isMobilSoegUserLoggedIn';
  },

  /**
   * @param {String} event
   * @param {Object} query
   * @param {Object} connection
   */
  requestTransform(event, query, connection) {
    return new Promise((resolve, reject) => {
      try {
        const isLoggedIn = (connection.request.session && connection.request.session.passport) ? true : false;
        resolve(isLoggedIn);
      }
      catch (e) {
        reject(Error('Something went wrong while checking a users status in IsMobilSoegUserLoggedIn.transform.js'));
      }

    });
  },

  /**
   * @param {Object} response
   * @return {Object}
   */
  responseTransform(response) {
    return response;
  }
};

export default IsMobilSoegUserLoggedIn;
