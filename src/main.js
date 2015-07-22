/**
 * @file
 * Bootstraps the server and initialized babel, so all JSX and ES6 is transpiled
 *
 */

'use strict';
var config = require('../config');
if (config.newrelic) {
  require('newrelic');
}
require('babel/register');
require('./app');
