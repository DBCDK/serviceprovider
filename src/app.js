'use strict';

// loading config etc.
const newrelic = require('newrelic');
const config = require('../config');
const version = require('../package.json').version;

// loading libraries
const express = require('express');
const app = express();
const server = require('http').Server(app);
const socket = require('socket.io').listen(server);
const path = require('path');
const logger = require('./logger');
const PRODUCTION = (process.env.NODE_ENV === 'production'); // eslint-disable-line no-process-env

// Loading components
import SearchServer from './components/Search/Search.server.js';

// settings up our provider
const serviceProvider = require('dbc-node-serviceprovider');
serviceProvider.init(config.provider).sockets(socket);

// Port config
app.set('port', process.env.PORT || 8080); // eslint-disable-line no-process-env

// Configure templating
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// setting proxy
app.enable('trust proxy');

let fileHeaders = {};

// settings production specific options
if (PRODUCTION) {
  fileHeaders = {index: false, dotfiles: 'ignore', maxAge: '1d'};
}
else {
  newrelic.agent_enabled = false;
}

// setting paths
app.use(express.static(path.join(__dirname, '../public'), fileHeaders));
app.use(express.static(path.join(__dirname, '../static'), fileHeaders));

// setting local vars that should be availbe to our template engine
app.locals.newrelic = newrelic;
app.locals.version = version;
app.locals.production = PRODUCTION;

app.get(['/', '/search', '/search/*'], function(req, res) {
  const query = req.query || [];
  res.render('search', SearchServer({query}));
});

app.get('/autocomplete', function(req, res) {
  res.render('autocomplete');
});

app.get(['/work', '/work/*'], function(req, res) {
  let id = req.query.id;
  id = '"' + id + '"';
  res.render('work', {id});
});

app.get(['/order', '/order/*'], function(req, res) {
  let query = req.query;
  query = JSON.stringify(query);
  res.render('order', {query});
});

// starting server
server.listen(app.get('port'), function() {
  logger.info('Server listening on ' + app.get('port'));
  logger.info({message: 'Versions: ', data: process.versions});
  logger.info(version + ' is up and running');
});
