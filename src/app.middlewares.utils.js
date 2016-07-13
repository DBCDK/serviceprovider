'use strict';

function testHest(req) {
  const authHeader = req.get('authorization');
  if (typeof authHeader !== 'undefined') {
    const authType = authHeader.split(' ', 2)[0];
    const bearerToken = authHeader.split(' ', 2)[1];

    if (authType === 'Bearer') {
      return bearerToken;
    }
  }
}

function testHest2(req) {
  const bearerToken = req.query.access_token;
  if (typeof bearerToken !== 'undefined') {
    return bearerToken;
  }
}

function testHest3(req) {
  const bearerToken = req.body.access_token;
  if (typeof bearerToken !== 'undefined') {
    return bearerToken;
  }
}

/**
 * Return array of functions to search for tokens in requests
 *
 * @param {object} req
 * @return {*[]}
 */
export function getTokenSearchers(req) {
  return [
    () => testHest(req),
    () => testHest2(req),
    () => testHest3(req)
  ];
}
