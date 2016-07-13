'use strict';

/**
 * @file
 * Configure and start our server
 */

// Config
import {version} from '../package.json';
// path for the API-endpoint, ie /v0/, /v1/, or ..
const apiPath = '/v' + parseInt(version, 10) + '/';

// Libraries
import express from 'express';
import path from 'path';
import request from 'request';
import Provider from './provider/Provider';
import {TokenError} from './smaug/errors';

// Middleware
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import {log} from './utils';
import {accessLogMiddleware, getContextMiddleware, requireAuthorized} from './app.middlewares';
import {healthCheck, getContext, fieldsFilter} from './app.utils';

// Generation of swagger specification
import swaggerFromSpec from './swaggerFromSpec.js';
import validateRequest from './validate.js';

// Setup
const app = express();
const SMAUG_LOCATION = process.env.SMAUG; // eslint-disable-line no-process-env
const serviceProvider = Provider();

/**
 * Validates and executes transform.
 * Resolves with an error(!) if transform is not found or request is invalid.
 *
 * @param {string} event
 * @param {object} query
 * @param {object} context
 * @return {Promise}
 */
function validateAndExecuteTransforms(event, query, context) {
  if (!serviceProvider.hasTransformer(event)) {
    return Promise.resolve({
      statusCode: 400,
      error: 'Missing transformer: ' + event
    });
  }

  const validateErrors = validateRequest(event, query);

  if (validateErrors.length) {
    return Promise.resolve({
      statusCode: 400,
      error: validateErrors.map(o => String(o.stack).replace(/^instance\.?/, '')).join('\n')
    });
  }

  return serviceProvider.execute(event, query, context);
}

function validateResponseAndStatusCode(response){
  return (typeof response !== 'object') ||
    typeof response.statusCode !== 'number' ||
    (response.statusCode === 200 && !response.data) ||
    (response.statusCode !== 200 && !response.error);
}

/**
 * Execute a transform
 *
 * @param {string} event
 * @param {object} query
 * @param {object} context
 * @return {Promise}
 */
function callApi(event, query, context) {
  return validateAndExecuteTransforms(event, query, context).then(response => {
    if (validateResponseAndStatusCode(response)) {
      log.error('response is not wrapped in an envelope', {response: response});
      response = {
        statusCode: 500,
        data: response,
        error: 'missing envelope'
      };
    }

    if (typeof response.data === 'object') {
      response.data = fieldsFilter(response.data, query);
    }

    return response;
  }).catch(err => {
    log.error(String(err), {stacktrace: err.stack});

    return {
      statusCode: 500,
      error: String(err)
    };
  });
}

/**
 * Enables WS transport
 *
 * @param {object} connection
 * @return {Array|Object|void|*}
 */
function enableWSTransport(connection) {
  return serviceProvider.availableTransforms().forEach(key => {
    connection.on(key, (data, callback) => { // eslint-disable-line no-loop-func
      getContext(data.access_token)
        .then(context => {
          return callApi(key, data, context);
        })
        .catch(err => {
          log.error(String(err), {stacktrace: err.stack});
          if (err instanceof TokenError) {
            return err.toJson();
          }

          return {
            statusCode: 500,
            error: String(err)
          };
        })
        .then(result => callback(null, result));
    });
  });
}

/**
 * Enables the HTTP transport
 *
 * @param {string} event
 */
function enableHTTPTransport(event) {
  app.all(apiPath + event, getContextMiddleware, requireAuthorized, (req, res) => { // eslint-disable-line no-loop-func
    // TODO: should just be req.body, when all endpoints accept object-only as parameter, until then, this hack supports legacy transforms
    let query = Array.isArray(req.body) ? req.body[0] : req.body;

    // We support both POST-body, GET-requests, and a combination of both.
    // This code joins all parameters into a single object.
    query = query || {};
    for (const key in req.query) { // eslint-disable-line guard-for-in
      const val = req.query[key];
      try {
        query[key] = JSON.parse(val);
      }
      catch (e) {
        query[key] = (val.indexOf(',') !== -1) ? val.split(',').filter(s => s) : val;
      }
    }

    if (typeof query.fields === 'string') {
      query.fields = [query.fields];
    }

    callApi(event, query, req.context)
      .then(response => {
        app.set('json spaces', query.pretty ? 2 : null);
        res.jsonp(response);
      });
  });
}

/**
 * Enables CORS
 *
 * @param {object} req
 * @param {object} res
 * @param {Function} next
 */
function enableCors(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');
  next();
}

/**
 * Handles token errors
 *
 * @param {object} req
 * @param {object} res
 * @param {Function} next
 */
function tokenErrorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  if (err instanceof TokenError) {
    res.set('WWW-Authenticate', `Bearer error="${err.httpError}", error_description="${err.message}"`);
    res.status(err.httpStatusCode);
    res.jsonp(err.toJson());
  }
  else {
    next(err);
  }
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
  log.error('An error occurred! Got following: ' + err, {stacktrace: err.stack});
  if (res.headersSent) {
    return next(err);
  }

  res.status(500);
  res.jsonp({
    statusCode: 500,
    error: String(err)
  });
  res.end();
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

module.exports.run = function(worker) {
  // Direct requests to app
  worker.httpServer.on('request', app);

  // Setting bodyparser
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  // Enable CORS
  app.use(enableCors);

  // don't set the X-Powered-By header
  app.disable('x-powered-by');

  // trust ip-addresses from X-Forwarded-By header, and log requests
  app.enable('trust proxy');
  app.use(accessLogMiddleware);

  // Helmet configuration
  app.use(helmet.frameguard());
  app.use(helmet.ieNoOpen());
  app.use(helmet.noSniff());

  // Port config
  app.set('port', process.env.PORT || 8080); // eslint-disable-line no-process-env

  // Configure app variables
  app.set('serviceProvider', serviceProvider);

  // Adding gzip'ing
  app.use(compression());

  // Setting paths
  app.all('/', (req, res) => res.redirect(apiPath));

  // Health check
  app.get('/health', healthCheck);

  // WebSocket/SocketCluster transport
  worker.on('connection', enableWSTransport);

  // HTTP Transport
  serviceProvider.availableTransforms().forEach(event => enableHTTPTransport(event));

  app.use(apiPath, express.static(path.join(__dirname, '../static')));

  // The swagger specification is generated from `spec.yml`
  // and returned as this separate endpoint.
  app.all(apiPath + 'swagger.json', (req, res) => {
    return swaggerFromSpec().then((response) => {
      res.jsonp(response);
    }, (error) => {
      res.jsonp(error);
    });
  });

  // handle token-related errors
  app.use(tokenErrorHandler);

  // Graceful handling of errors
  app.use(gracefulErrorHandler);

  // Handle 404's
  app.use(notFoundHandler);

  log.info('started', {
    event: 'started',
    port: app.get('port'),
    versions: process.versions,
    smaug: (SMAUG_LOCATION || false)
  });

  return app;
};
