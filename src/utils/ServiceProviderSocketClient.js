'use strict';

import * as dbcrelic from 'dbc-node-newrelic-wrapper';

/**
 * A dummy socket client used for server side rendering.
 * @type {{on: Function, emit: Function}}
 */
const serverSideSocketDummy = {
  on: function() {
  },
  emit: function() {
  }
};

/**
 * socket.io-client cannot be loaded on the server, so if window object
 * @type {boolean|{on: Function, emit: Function}}
 */
const socket = typeof window !== 'undefined' && require('socket.io-client').connect() || serverSideSocketDummy;

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
    const requestEvent = event + 'Request';
    socket.emit(requestEvent, data);
    dbcrelic.addPageAction(requestEvent, {request: data});
  }

  function addListener(listener) {
    listener(data => socket.emit(event + 'Request', data));
  }

  function response(cb) {
    const responseEvent = event + 'Response';
    socket.on(responseEvent, (data) => {
      cb(data);
      dbcrelic.addPageAction(responseEvent, {response: data});
    });
  }

  return {
    addListener,
    request,
    response
  };
}
