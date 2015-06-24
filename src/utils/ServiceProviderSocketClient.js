'use strict';

/**
 * A dummy socket client used for server side rendering.
 * @type {{on: Function, emit: Function}}
 */
const serverSideSocketDummy = {
  on: function () {
  },
  emit: function () {
  }
};

/**
 * socket.io-client cannot be loaded on the server, so if window object
 * @type {boolean|{on: Function, emit: Function}}
 */
const socket = (typeof window !== 'undefined') && require('socket.io-client').connect() || serverSideSocketDummy;

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

  function addListener(listener) {
    listener(data => socket.emit(event + 'Request', data));
  }

  function response(cb) {
    socket.on(event + 'Response', (data) => cb(data));
  }

  return {
    addListener,
    request,
    response
  };
}
