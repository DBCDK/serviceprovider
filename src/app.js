'use strict';

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

// Loading components
import SearchServer from './components/Search/Search.server.js';

// settings up our provider
const serviceProvider = require('dbc-node-serviceprovider');
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
app.locals.production = (process.env.NODE_ENV === 'production'); // eslint-disable-line no-process-env


app.get(['/', '/search', '/search/*'], function(req, res) {
  const query = req.query || [];
  res.render('search', SearchServer({query}));
});

app.get('/autocomplete', function(req, res) {
  res.render('autocomplete');
});

app.get(['/work', '/work/*'], function(req, res) {
  let pid = req.query.pid;
  pid = '"' + pid + '"';
  res.render('work', {pid});
});

// starting server
server.listen(app.get('port'), function() {
  logger.info('Server listening on ' + app.get('port'));
  logger.info({message: 'Versions: ', data: process.versions});
  logger.info(version + ' is up and running');
});
