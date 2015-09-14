'use strict';

/**
 * @file
 * Configure and start our server
 */

// loading config etc.
import config from '../config.js';
// newrelic needs to be required the es5 way because we only wants to load new relic if specified in config.js
const newrelic = config.newrelic && require('newrelic') || null;
import {version} from '../package.json';

// loading libraries
import express from 'express';
import http from 'http';
import socketio from 'socket.io';
import path from 'path';
import Logger from 'dbc-node-logger';
import ServiceProvider from 'dbc-node-serviceprovider';
import bodyParser from 'body-parser';
import compression from 'compression';
import expressSession from 'express-session';
import RedisStore from 'connect-redis';

// loading routes
import MainRoutes from './routes/main.routes.js';
import LibraryRoutes from './routes/library.routes.js';
import PassportRoutes from './routes/passport.routes.js';
import WorkRoutes from './routes/work.routes.js';

import passportConfig from './passport.config.js';

const app = express();
const server = http.Server(app);
const socket = socketio.listen(server);
const PRODUCTION = process.env.NODE_ENV === 'production'; // eslint-disable-line no-process-env
const APP_NAME = process.env.NEW_RELIC_APP_NAME || 'app_name'; // eslint-disable-line no-process-env
const logger = new Logger({app_name: APP_NAME, handleExceptions: true});
const expressLoggers = logger.getExpressLoggers();
const EMAIL_REDIRECT = process.env.EMAIL_REDIRECT || 'localhost:' + app.get('port'); // eslint-disable-line no-process-env

// settings up our provider
const serviceProvider = ServiceProvider(config.provider).setupSockets(socket);

// Configure to use routes
app.set('serviceProvider', serviceProvider);
app.set('logger', logger);
app.set('EMAIL_REDIRECT', EMAIL_REDIRECT);

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

// adding gzip'ing
app.use(compression());

// setting paths
app.use(express.static(path.join(__dirname, '../public'), fileHeaders));
app.use(express.static(path.join(__dirname, '../static'), fileHeaders));

// setting local vars that should be available to our template engine
app.locals.newrelic = newrelic;
app.locals.version = version;
app.locals.production = PRODUCTION;

app.use(expressLoggers.logger);
app.use(expressLoggers.errorLogger);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// setup REDIS
let redisConfig = config.services.redis.local;
switch (process.env.NODE_ENV) { // eslint-disable-line no-process-env
  case 'development':
    redisConfig = config.services.redis.development;
    break;
  case 'production':
    redisConfig = config.services.redis.production;
    break;
  default:
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
  saveUninitialized: false
});

socket.use((_socket, next) => {
  sessionMiddleware(_socket.request, _socket.request.res, next);
});

app.use(sessionMiddleware);

// Setup passport
passportConfig(app);

// Setup Routes
app.use('/', MainRoutes);
app.use('/library', LibraryRoutes);
app.use('/profile', PassportRoutes);
app.use('/work', WorkRoutes);

// starting server
server.listen(app.get('port'), () => {
  logger.log('info', 'Server listening on ' + app.get('port'));
  logger.log('info', 'EMAIL_REDIRECT: ' + EMAIL_REDIRECT);
  logger.log('info', 'Config - provider: ', config.provider);
  logger.log('info', 'Config - redis: ', config.services);
  logger.log('info', 'Versions: ', process.versions);
  logger.log('info', version + ' is up and running');
});
