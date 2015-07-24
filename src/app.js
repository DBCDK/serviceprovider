'use strict';

/**
 * @file
 * Configure and start our server
 */

// loading config etc.
import config from '../config.js';
// newrelic needs to be required the es5 way because we only wants to load new relic if specified in config.js
const newrelic = (config.newrelic) && require('newrelic') || null;
import {version} from '../package.json';

// loading libraries
import express from 'express';
import http from 'http';
import socketio from 'socket.io';
import path from 'path';
import logger from './logger.js';
import ServiceProvider from 'dbc-node-serviceprovider';

// loading components
import SearchServer from './components/Search/Search.server.js';

const app = express();
const server = http.Server(app);
const socket = socketio.listen(server);
const PRODUCTION = (process.env.NODE_ENV === 'production'); // eslint-disable-line no-process-env

// settings up our provider
ServiceProvider(config.provider).setupSockets(socket);

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
else if (newrelic) {
  newrelic.agent_enabled = false;
}

// setting paths
app.use(express.static(path.join(__dirname, '../public'), fileHeaders));
app.use(express.static(path.join(__dirname, '../static'), fileHeaders));

// setting local vars that should be availbe to our template engine
app.locals.newrelic = newrelic;
app.locals.version = version;
app.locals.production = PRODUCTION;

app.get(['/', '/search', '/search/*'], (req, res) => {
  const query = req.query || [];
  res.render('search', SearchServer({query}));
});

app.get('/autocomplete', (req, res) => {
  res.render('autocomplete');
});

app.get('/profile', (req, res) => {
  res.render('profile');
});

app.get(['/work', '/work/*'], (req, res) => {
  let id = req.query.id;
  id = '"' + id + '"';
  res.render('work', {id});
});

app.get(['/order', '/order/*'], (req, res) => {
  let query = req.query;
  query = JSON.stringify(query);
  res.render('order', {query});
});

// starting server
server.listen(app.get('port'), () => {
  logger.info('Server listening on ' + app.get('port'));
  logger.info({message: 'Versions: ', data: process.versions});
  logger.info(version + ' is up and running');
});
