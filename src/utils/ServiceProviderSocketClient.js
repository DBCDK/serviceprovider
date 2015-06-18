'use strict';

import Socket from 'socket.io-client';
const socket = Socket.connect();

/**
 * Reqistrer an event for the ServiceProvider
 *
 * Returns a class with a method for request and response which are wrappers
 * around the socket.emit and socket.on methods
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
    request,
    response
  };
}
