'use strict';
require('babel/register');

// loading config etc.
const newrelic = require('newrelic');
const config = require('../config');
const version = require('../package.json').version;

// loading libraries
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io');
const socket = io(server);
const path = require('path');
const logger = require('./logger');

// settings up our provider
var serviceProvider = require('dbc-node-serviceprovider');
serviceProvider.init(config.services, socket);

// Port config
app.set('port', process.env.PORT || 8080); // eslint-disable-line no-process-env

// Configure templating
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// setting paths
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../static')));

// setting local vars that should be availbe to our template engine
app.locals.newrelic = newrelic;
app.locals.version = version;
app.locals.env = process.env; // eslint-disable-line no-process-env

// setting basic routes -- should be moved elsewhere in the future
app.get('/', function(req, res) {
  res.render('logo');
});

app.get('/autocomplete', function(req, res) {
  res.render('autocomplete');
});

app.get('/querysearch', function(req, res) {
  res.render('querysearch');
});

// starting server
server.listen(app.get('port'), function() {
  logger.info('Server listening on ' + app.get('port'));
  logger.info({message: 'Versions: ', data: process.versions});
  logger.info(version + ' is up and running');
});
