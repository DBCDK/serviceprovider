/**
 * @file
 * Configure and start our server
 */

// Config
import {enableHTTPTransport, serviceProvider} from './provider';
import {apiPath} from './utils/config';
// Libraries
import express from 'express';
import path from 'path';
import cors from 'cors';
import {TokenError} from './smaug/errors';

import community from './transformers/community/community';
import {storageMiddleware} from './transformers/storage.js';

// Middleware
import bodyParser from 'body-parser';
import {log} from './utils';
import {accessLogMiddleware} from './app.middlewares';
import {healthCheck} from './app.utils';

// Generation of swagger specification
import swaggerFromSpec from './swaggerFromSpec.js';

// Setup
const app = express();
/**
 * Handles token errors
 *
 * @param {object} err
 * @param {object} req
 * @param {object} res
 * @param {Function} next
 */
function tokenErrorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  if (err instanceof TokenError) {
    res.set(
      'WWW-Authenticate',
      `Bearer error="${err.httpError}", error_description="${err.message}"`
    );
    res.status(err.httpStatusCode);
    return res.jsonp(err.toJson());
  }

  return next(err);
}

/**
 * Graceful handling of errors
 *
 * @param {object} err
 * @param {object} req
 * @param {object} res
 * @param {Function} next
 */
function gracefulErrorHandler(err, req, res, next) {
  log.error('An error occurred! Got following: ' + err, {
    stacktrace: err.stack
  });
  if (res.headersSent) {
    return next(err);
  }

  res.status(500);
  return res.jsonp({
    statusCode: 500,
    error: String(err)
  });
}

/**
 * Handling 404's
 *
 * @param {object} req
 * @param {object} res
 */
function notFoundHandler(req, res) {
  res.status(404);
  res.jsonp({
    statusCode: 404,
    error: '404 Not Found'
  });
  res.end();
}

// Setting bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Enable CORS
const corsOptions = {
  origin: '*',
  methods: 'GET, POST, OPTIONS',
  allowedHeaders:
    'Authorization, Origin, X-Requested-With, Content-Type, Accept'
};
app.use(cors(corsOptions));

// don't set the X-Powered-By header
app.disable('x-powered-by');

// trust ip-addresses from X-Forwarded-By header, and log requests
app.enable('trust proxy');
app.use(accessLogMiddleware);

// Port config
app.set('port', process.env.PORT || 8080); // eslint-disable-line no-process-env

// Configure app variables
app.set('serviceProvider', serviceProvider);

// Setting paths
app.all('/', (req, res) => res.redirect(apiPath));

app.use(apiPath + 'community', community());
app.use(apiPath + 'storage/', storageMiddleware);

// Health check
app.get('/health', healthCheck);

serviceProvider
  .availableTransforms()
  .forEach(event => enableHTTPTransport(event, app));

app.use(apiPath, express.static(path.join(__dirname, '../doc')));
app.use(apiPath, express.static(path.join(__dirname, '../client')));

// The swagger specification is generated from `spec.yml`
// and returned as this separate endpoint.
app.all(apiPath + 'swagger.json', (req, res) => {
  const spec = swaggerFromSpec();
  res.jsonp(spec);
});

// handle token-related errors
app.use(tokenErrorHandler);

// Graceful handling of errors
app.use(gracefulErrorHandler);

// Handle 404's
app.use(notFoundHandler);

export function startServer(server) {
  server.on('request', app);
}
