'use strict';

/**
 * @file
 * Configure and start our server
 */

// loading config etc.
import config from '../config.js';
import uiconfig from '../uiconfig.js';
// newrelic needs to be required the es5 way because we only wants to load new relic if specified in config.js
const newrelic = (config.newrelic) && require('newrelic') || null;
import {version} from '../package.json';

// loading libraries
import express from 'express';
import http from 'http';
import socketio from 'socket.io';
import path from 'path';
import Logger from 'dbc-node-logger';
import ServiceProvider from 'dbc-node-serviceprovider';

// loading components
import SearchServer from './components/Search/Search.server.js';

const app = express();
const server = http.Server(app);
const socket = socketio.listen(server);
const PRODUCTION = (process.env.NODE_ENV === 'production'); // eslint-disable-line no-process-env
const APP_NAME = process.env.NEW_RELIC_APP_NAME || 'app_name'; // eslint-disable-line no-process-env
const logger = new Logger({app_name: APP_NAME, handleExceptions: true});
const expressLoggers = logger.getExpressLoggers();

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

app.use(expressLoggers.logger);
app.use(expressLoggers.errorLogger);

app.get(['/', '/search', '/search/*'], (req, res) => {
  const query = req.query || [];
  let properties = SearchServer({query, config: uiconfig});
  properties.config = JSON.stringify(uiconfig);
  res.render('search', properties);
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
  logger.log('info', 'Server listening on ' + app.get('port'));
  logger.log('info', 'Versions: ', process.versions);
  logger.log('info', version + ' is up and running');
});
