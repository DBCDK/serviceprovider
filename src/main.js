'use strict';
/**
 * @file
 * Create/start socketcluster.
 *
 */


// initialize babel, so all JSX and ES6 is transpiled
require('babel-register');

var SocketCluster = require('socketcluster').SocketCluster;
var path = require('path');
var majorVersion = parseInt(require('../package.json').version, 10);
var log = require('./utils').log;

var requiredEnvVars = ['SMAUG'];

var missingEnvVars = requiredEnvVars.filter(function(envVar) {
  return typeof process.env[envVar] === 'undefined'; // eslint-disable-line no-process-env
});

if (missingEnvVars.length > 0) {
  log.error('Missing ENV VARS: ' + missingEnvVars);
  process.exit(1);
}

module.exports = new SocketCluster({ // eslint-disable-line no-new
  workers: Number(process.env.NODE_WEB_WORKERS) || 1, // eslint-disable-line no-process-env
  brokers: Number(process.env.NODE_WEB_BROKERS) || 1, // eslint-disable-line no-process-env
  port: Number(process.env.PORT) || 8080, // eslint-disable-line no-process-env
  path: '/v' + majorVersion + '/socketcluster/',
  initController: path.join(__dirname, 'init.js'),
  workerController: path.join(__dirname, 'app.js'),
  wsEngine: 'uws',
  rebootWorkerOnCrash: process.env.AUTO_REBOOT || true // eslint-disable-line no-process-env
});
