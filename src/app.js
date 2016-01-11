'use strict';

/**
 * @file
 * Configure and start our server
 */

// Config
import config from '@dbcdk/dbc-config';
// newrelic needs to be required the es5 way because we only wants to load new relic if specified in config.js
const newrelic = config.palle.newrelic && require('newrelic') || null;
import {version} from '../package.json';

// Libraries
import express from 'express';
import http from 'http';
import socketio from 'socket.io';
import path from 'path';
import Logger from 'dbc-node-logger';
import RedisStore from 'connect-redis';
import reload from 'reload';
import ServiceProviderSetup from './server/serviceProvider/ServiceProviderSetup.js';
import {curry} from 'lodash';
import sass from 'node-sass';

// Routes
import MainRoutes from './server/routes/main.routes.js';
import PassportRoutes from './server/routes/passport.routes.js';
import WorkRoutes from './server/routes/work.routes.js';
import NewsRoutes from './server/routes/news.routes.js';
import LibraryRoutes from './server/routes/library.routes';
import EventRoutes from './server/routes/event.routes.js';

// Middleware
import mobilsoegmiddleware from './server/middlewares/mobilsoeg.middleware.js';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import compression from 'compression';
import expressSession from 'express-session';
import helmet from 'helmet';
import {GlobalsMiddleware} from './server/middlewares/globals.middleware';
import dbcMiddleware from './server/middlewares/middleware';

// Passport
import * as PassportStrategies from './server/PassportStrategies/strategies.passport';

// Setup
const app = express();
const server = http.createServer(app);
const socket = socketio.listen(server);
const ENV = app.get('env');
const PRODUCTION = ENV === 'production';
const APP_NAME = process.env.NEW_RELIC_APP_NAME || 'app_name'; // eslint-disable-line no-process-env
const APPLICATION = 'mobilsoeg';
const DEFAULT_CONFIG_NAME = 'aarhus'; // used as a fallback config, if none is set by a url.
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
app.set('serviceProvider', ServiceProviderSetup(config[process.env.CONFIG_NAME || DEFAULT_CONFIG_NAME], logger, socket)); // eslint-disable-line no-process-env
app.set('logger', logger);
app.set('EMAIL_REDIRECT', EMAIL_REDIRECT);
app.set('APPLICATION', APPLICATION);
app.set('Configuration', config);

// Configure templating
app.set('views', path.join(__dirname, 'server/templates'));
app.set('view engine', 'jade');

// Setting proxy
app.enable('trust proxy');

// settings production specific options
if (!PRODUCTION && newrelic) {
  newrelic.agent_enabled = false;
}

// Setup dynamic sass compilation
let styles = {};
function generateStyles(filepath) {
  return sass.renderSync({
    outputStyle: 'compressed',
    file: path.join(__dirname, filepath)
  }).css.toString();
}

styles.aarhus = generateStyles('client/styles/ddb.scss');
styles.albertslund = generateStyles('client/styles/albertslund.ddb.scss');
styles.ballerup = generateStyles('client/styles/ballerup.ddb.scss');
styles.frederiksberg = generateStyles('client/styles/frederiksberg.ddb.scss');
styles.guldborgsund = generateStyles('client/styles/guldborgsund.ddb.scss');
styles.herlev = generateStyles('client/styles/herlev.ddb.scss');
styles.kobenhavn = generateStyles('client/styles/kobenhavn.ddb.scss');
styles.q2fjern = generateStyles('client/styles/ddb.scss');
styles.ringe = generateStyles('client/styles/ringe.ddb.scss');

// setting local vars that should be available to our template engine
app.locals.newrelic = newrelic;
app.locals.env = ENV;
app.locals.version = version;
app.locals.production = PRODUCTION;
app.locals.title = config[process.env.CONFIG_NAME || DEFAULT_CONFIG_NAME].applicationTitle || ''; // eslint-disable-line no-process-env
app.locals.application = APPLICATION;
app.locals.faviconUrl = APPLICATION === 'mobilsoeg' ? 'https://www.aakb.dk/sites/www.aakb.dk/files/favicon.ico' : '/favicon.ico';
app.locals.styles = styles;

// Setup environments
let redisConfig;
let fileHeaders = {};

// Redis
switch (ENV) {
  case 'development':
    redisConfig = config[process.env.CONFIG_NAME || DEFAULT_CONFIG_NAME].sessionStores.redis.development; // eslint-disable-line no-process-env
    break;
  case 'production':
    redisConfig = config[process.env.CONFIG_NAME || DEFAULT_CONFIG_NAME].sessionStores.redis.production; // eslint-disable-line no-process-env
    fileHeaders = {index: false, dotfiles: 'ignore', maxAge: '5 days'};
    break;
  default:
    redisConfig = config[process.env.CONFIG_NAME || DEFAULT_CONFIG_NAME].sessionStores.redis.local; // eslint-disable-line no-process-env
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

// Adding gzip'ing
app.use(compression());

// Aetting paths
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

// Detect library and set context
app.use(mobilsoegmiddleware.libraryStyleWare);
socket.use(curry(mobilsoegmiddleware.librarySocketWare)(config));

// Setup passport
PassportStrategies.MobilSoegPassportConfig(app);

// Setting middleware
app.use('*', GlobalsMiddleware); // should be placed after PassportStrategies.MobilSoegPassportConfig

// SSR middleware to add utility methods, and render footer automatically.
app.use('*', dbcMiddleware.ssrMiddleware, dbcMiddleware.ssrFooter, dbcMiddleware.ssrHeader);

// Setup Routes
app.use('/', dbcMiddleware.cacheMiddleware, MainRoutes);
app.use('/profile', PassportRoutes);
app.use('/work', WorkRoutes);
app.use('/news', dbcMiddleware.cacheMiddleware, NewsRoutes);
app.use('/libraries', dbcMiddleware.cacheMiddleware, LibraryRoutes);
app.use('/event', dbcMiddleware.cacheMiddleware, EventRoutes);


// If running in dev-mode enable auto reload in browser when the server restarts
if (ENV === 'development' && !process.env.DISABLE_SOCKET_RELOAD) { // eslint-disable-line no-process-env
  reload(server, app, 1000, true);
}

// Graceful handling of errors
app.use((err, req, res, next) => {
  logger.log('error', 'An error occurred! Got following: ' + err);
  console.error('error', 'An error occurred! Got following: ' + err); // eslint-disable-line no-console
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

// Starting server
server.listen(app.get('port'), () => {
  logger.log('debug', 'Server listening on port ' + app.get('port'));
  logger.log('debug', 'NEW_RELIC_APP_NAME: ' + APP_NAME);
  logger.log('debug', 'APPLICATION: ' + APPLICATION);
  logger.log('debug', 'EMAIL_REDIRECT: ' + EMAIL_REDIRECT);
  logger.log('info', 'Versions: ', process.versions);
  logger.log('info', version + ' is up and running');
});
