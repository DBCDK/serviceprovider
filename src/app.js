'use strict';
require('babel/register');

const newrelic = require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);
const logger = require('./logger');
const version = require('../package.json').version;

// Port config
app.set('port', process.env.PORT || 8080); // eslint-disable-line no-process-env

// Configure templating
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../static')));

app.locals.newrelic = newrelic;
app.locals.version = version;
app.locals.env = process.env; // eslint-disable-line no-process-env

app.get('/', function(req, res) {
  res.render('logo');
});

app.get('/autocomplete', function(req, res) {
  res.render('autocomplete');
});

app.get('/querysearch', function(req, res) {
  res.render('querysearch');
});

// startup server
server.listen(app.get('port'), function() {
  logger.info('Server listening on ' + app.get('port'));
  logger.info({message: 'Versions: ', data: process.versions});
  logger.info(version + ' is up and running');
});
