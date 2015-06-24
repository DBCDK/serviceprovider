/**
 * @file
 * Bootstraps the server and initialized babel, so all JSX and ES6 is transpiled
 *
 */

'use strict';

require('newrelic');
require('babel/register');
require('./app');
