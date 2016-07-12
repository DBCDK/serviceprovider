'use strict';

/**
 * Return array of functions to search for tokens in requests
 *
 * @param {object} req
 * @return {*[]}
 */
export function getTokenSearchers(req) {
  return [
    () => {
      const authHeader = req.get('authorization');
      if (typeof authHeader !== 'undefined') {
        const authType = authHeader.split(' ', 2)[0];
        const bearerToken = authHeader.split(' ', 2)[1];

        if (authType === 'Bearer') {
          return bearerToken;
        }
      }
    },
    () => {
      const bearerToken = req.query.access_token;
      if (typeof bearerToken !== 'undefined') {
        return bearerToken;
      }
    },
    () => {
      const bearerToken = req.body.access_token;
      if (typeof bearerToken !== 'undefined') {
        return bearerToken;
      }
    }
  ];
}
