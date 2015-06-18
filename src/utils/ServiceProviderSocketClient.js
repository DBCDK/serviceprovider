'use strict';

import Socket from 'socket.io-client';
const socket = Socket.connect();

/**
 * Reqistrer an event for the ServiceProvider
 *
 * @param {String} event
 * @returns {{request: request, response: response}}
 * @constructor
 */
export default function ServiceProviderSocketClient(event) {
  function request(data) {
    socket.emit(event + 'Request', data);
  }

  function response(cb) {
    socket.on(event + 'Response', (data) => cb(data));
  }

  return {
    request: request,
    response: response
  };
}
