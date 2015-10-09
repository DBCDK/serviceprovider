'use strict';

/**
 * @file
 * Configure and start our server
 */

// loading config etc.
// import config from '../config.js';
import dbcConfig from '@dbcdk/dbc-config';
// newrelic needs to be required the es5 way because we only wants to load new relic if specified in config.js
const newrelic = dbcConfig.palle.newrelic && require('newrelic') || null;
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
// import helmet from 'helmet';

// loading routes
import MainRoutes from './server/routes/main.routes.js';
import LibraryRoutes from './server/routes/library.routes.js';
import PassportRoutes from './server/routes/passport.routes.js';
import WorkRoutes from './server/routes/work.routes.js';
import GroupRoutes from './server/routes/group.routes.js';

// loading configurations
import passportConfig from './passport.config.js';

const app = express();
const server = http.Server(app);
const socket = socketio.listen(server);
const ENV = app.get('env');
const PRODUCTION = ENV === 'production';
const APP_NAME = process.env.NEW_RELIC_APP_NAME || 'app_name'; // eslint-disable-line no-process-env
const logger = new Logger({app_name: APP_NAME});
const expressLoggers = logger.getExpressLoggers();

// Setting bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Helmet configuration
// app.use(helmet());

// Port config
app.set('port', process.env.PORT || 8080); // eslint-disable-line no-process-env

// EMAIL Redirect requires port to be defined therefore it must come after
const EMAIL_REDIRECT = process.env.EMAIL_REDIRECT || 'localhost:' + app.get('port'); // eslint-disable-line no-process-env

// Configure app variables
app.set('serviceProvider', ServiceProvider(dbcConfig.palle.provider, logger).setupSockets(socket));
app.set('logger', logger);
app.set('EMAIL_REDIRECT', EMAIL_REDIRECT);

// Configure templating
app.set('views', path.join(__dirname, 'server/templates'));
app.set('view engine', 'jade');

// setting proxy
app.enable('trust proxy');

// disabling 'X-Powered-By:Express' in response header
app.disable('x-powered-by');

// settings production specific options
if (!PRODUCTION && newrelic) {
  newrelic.agent_enabled = false;
}

// setting local vars that should be available to our template engine
app.locals.newrelic = newrelic;
app.locals.env = ENV;
app.locals.version = version;
app.locals.production = PRODUCTION;

// setup environments
let redisConfig;
let fileHeaders = {};

switch (ENV) {
  case 'development':
    redisConfig = dbcConfig.palle.services.redis.development;
    break;
  case 'production':
    fileHeaders = {index: false, dotfiles: 'ignore', maxAge: '1d'};
    redisConfig = dbcConfig.palle.services.redis.production;
    break;
  default:
    redisConfig = dbcConfig.palle.services.redis.local;
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
app.use(expressLoggers.errorLogger);

// Setting Input Validation
const validatorOptions = {};
app.use(expressValidator([validatorOptions]));

// Setting sessions
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
app.use('/groups', GroupRoutes);

// starting server
server.listen(app.get('port'), () => {
  logger.log('debug', 'Server listening on port ' + app.get('port'));
  logger.log('debug', 'NEW_RELIC_APP_NAME: ' + APP_NAME);
  logger.log('debug', 'EMAIL_REDIRECT: ' + EMAIL_REDIRECT);
  logger.log('info', 'Versions: ', process.versions);
  logger.log('info', version + ' is up and running');
});
