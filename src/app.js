'use strict';

/**
 * @file
 * Configure and start our server
 */

import config from '@dbcdk/dbc-config';
// newrelic needs to be required the es5 way because we only wants to load new relic if specified in config.js
const newrelic = config.palle.newrelic && require('newrelic') || null;
import {version} from '../package.json';

// loading libraries
import express from 'express';
import http from 'http';
import socketio from 'socket.io';
import path from 'path';
import Logger from 'dbc-node-logger';
import ServiceProvider from 'dbc-node-serviceprovider';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import compression from 'compression';
import expressSession from 'express-session';
import RedisStore from 'connect-redis';
import helmet from 'helmet';
import reload from 'reload';

// loading routes
import MainRoutes from './server/routes/main.routes.js';
import LibraryRoutes from './server/routes/library.routes.js';
import PassportRoutesPG from './server/routes/passport.routes.pg.js';
import PassportRoutesMobilsoeg from './server/routes/passport.routes.mobilsoeg.js';
import WorkRoutes from './server/routes/work.routes.js';
import GroupRoutes from './server/routes/group.routes.js';

// loading configurations
import passportConfig from './passport.config.js';

const app = express();
const server = http.createServer(app);
const socket = socketio.listen(server);
const ENV = app.get('env');
const PRODUCTION = ENV === 'production';
const APP_NAME = process.env.NEW_RELIC_APP_NAME || 'app_name'; // eslint-disable-line no-process-env
const APPLICATION = process.env.NODE_APPLICATION === 'ddbmobil' ? 'mobilsoeg' : 'pg'; // eslint-disable-line no-process-env
const logger = new Logger({app_name: APP_NAME});
const expressLoggers = logger.getExpressLoggers();

// Setting bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Helmet configuration
// TODO: Setup rest of Helmet, in a way that works with the server setup.
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy({setTo: 'Funkys Venner!'}));
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());

// Port config
app.set('port', process.env.PORT || 8080); // eslint-disable-line no-process-env

// EMAIL Redirect requires port to be defined therefore it must come after
const EMAIL_REDIRECT = process.env.EMAIL_REDIRECT || 'localhost:' + app.get('port'); // eslint-disable-line no-process-env

// Configure app variables
app.set('serviceProvider', ServiceProvider(config[process.env.CONFIG_NAME || 'palle'].provider, logger).setupSockets(socket)); // eslint-disable-line no-process-env
app.set('logger', logger);
app.set('EMAIL_REDIRECT', EMAIL_REDIRECT);
app.set('APPLICATION', APPLICATION);

// Configure templating
app.set('views', path.join(__dirname, 'server/templates'));
app.set('view engine', 'jade');

// setting proxy
app.enable('trust proxy');

// settings production specific options
if (!PRODUCTION && newrelic) {
  newrelic.agent_enabled = false;
}

// setting local vars that should be available to our template engine
app.locals.newrelic = newrelic;
app.locals.env = ENV;
app.locals.version = version;
app.locals.production = PRODUCTION;
app.locals.title = config[process.env.CONFIG_NAME || 'palle'].applicationTitle || ''; // eslint-disable-line no-process-env
app.locals.application = APPLICATION;
app.locals.faviconUrl = APPLICATION === 'mobilsoeg' ? 'https://www.aakb.dk/sites/www.aakb.dk/files/favicon.ico' : '/favicon.ico';

// setup environments
let redisConfig;
let fileHeaders = {};

switch (ENV) {
  case 'development':
    redisConfig = config[process.env.CONFIG_NAME || 'palle'].sessionStores.redis.development; // eslint-disable-line no-process-env
    break;
  case 'production':
    redisConfig = config[process.env.CONFIG_NAME || 'palle'].sessionStores.redis.production; // eslint-disable-line no-process-env
    fileHeaders = {index: false, dotfiles: 'ignore', maxAge: '5 days'};
    break;
  default:
    redisConfig = config[process.env.CONFIG_NAME || 'palle'].sessionStores.redis.local; // eslint-disable-line no-process-env
    break;
}

let redisStore = RedisStore(expressSession);

let sessionMiddleware = expressSession({
  store: new redisStore({
    host: redisConfig.host,
    port: redisConfig.port,
    prefix: APP_NAME + '_session_'
  }),
  secret: redisConfig.secret + APP_NAME,
  name: APP_NAME,
  rolling: true,
  resave: false,
  saveUninitialized: false,
  cookie: {
    path: '/',
    httpOnly: true,
    secure: PRODUCTION
  }
});

// adding gzip'ing
app.use(compression());

// setting paths
app.use(express.static(path.join(__dirname, '../public'), fileHeaders));
app.use(express.static(path.join(__dirname, '../static'), fileHeaders));

// Setting logger
app.use(expressLoggers.logger);

// Setting Input Validation
const validatorOptions = {
  customValidators: {
    isEqual: (a, b) => {
      return a === b;
    }
  }
};
app.use(expressValidator(validatorOptions));

// Setting sessions
socket.use((_socket, next) => {
  sessionMiddleware(_socket.request, _socket.request.res, next);
});

app.use(sessionMiddleware);

// Setup passport
passportConfig(app);

// Setup Routes
if (APPLICATION === 'pg') {
  app.use('/', MainRoutes);
  app.use('/library', LibraryRoutes);
  app.use('/profile', PassportRoutesPG);
  app.use('/work', WorkRoutes);
  app.use('/groups', GroupRoutes);
}

if (APPLICATION === 'mobilsoeg') {
  app.use('/', MainRoutes);
  app.use('/library', LibraryRoutes);
  app.use('/profile', PassportRoutesMobilsoeg);
  app.use('/work', WorkRoutes);
}

// If running in dev-mode enable auto reload in browser when the server restarts
if (ENV === 'development') {
  reload(server, app, 1000, true);
}

// Graceful handling of errors
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  res.status(500);
  res.render('error', {errorImage: 'https://http.cat/500'});
});

// Handle 404's
app.use((req, res) => {
  res.status(404);
  res.render('error', {errorImage: 'https://http.cat/404'});
});

// Setting logger -- should be placed after routes
app.use(expressLoggers.errorLogger);

// starting server
server.listen(app.get('port'), () => {
  logger.log('debug', 'Server listening on port ' + app.get('port'));
  logger.log('debug', 'NEW_RELIC_APP_NAME: ' + APP_NAME);
  logger.log('debug', 'APPLICATION: ' + APPLICATION);
  logger.log('debug', 'EMAIL_REDIRECT: ' + EMAIL_REDIRECT);
  logger.log('info', 'Versions: ', process.versions);
  logger.log('info', version + ' is up and running');
});
