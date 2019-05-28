/**
 * @file
 * Configure and start our server
 */

import app from './app';
import {enableWSTransport} from './provider';

module.exports.run = function(worker) {
  // Direct requests to app
  worker.httpServer.on('request', app);

  worker.on('connection', enableWSTransport);

  return app;
};
