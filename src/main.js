/**
 * @file
 * Bootstraps the server and initialized babel, so all JSX and ES6 is transpiled
 *
 */
'use strict';

var config = require('@dbcdk/dbc-config')[process.env.CONFIG_NAME || 'palle']; // eslint-disable-line no-process-env

if (config.newrelic) {
  require('newrelic');
}

require('babel/register');
require('./app');
