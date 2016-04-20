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
import fs from 'fs';
import express from 'express';
import path from 'path';
import Logger from 'dbc-node-logger';
import request from 'request';
import Provider from './provider/Provider';

// Middleware
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import {log} from './utils';

// Generation of swagger specification
import swaggerFromSpec from './swaggerFromSpec.js';

module.exports.run = function (worker) {
  // Setup
  const app = express();
  const server = worker.httpServer;
  const APP_NAME = process.env.APP_NAME || 'app_name'; // eslint-disable-line no-process-env
  const SMAUG_LOCATION = process.env.SMAUG; // eslint-disable-line no-process-env
  const logger = new Logger({app_name: APP_NAME});
  const expressLoggers = logger.getExpressLoggers();

  // Direct requests to app
  server.on('request', app);

  // Setting bodyparser
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  // Enable CORS
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  // don't set the X-Powered-By header
  app.disable('x-powered-by');

  // Helmet configuration
  // TODO: Setup rest of Helmet, in a way that works with the server setup.
  app.use(helmet.frameguard());
  app.use(helmet.ieNoOpen());
  app.use(helmet.noSniff());

  // Port config
  app.set('port', process.env.PORT || 8080); // eslint-disable-line no-process-env

  // Configure app variables
  let serviceProvider = Provider();
  app.set('serviceProvider', serviceProvider);
  app.set('logger', logger);

  const getContext = function(token) {
    return new Promise((resolve, reject) => {
      request.get({
        uri: SMAUG_LOCATION + '/configuration',
        qs: {token: token}
      }, (err, response, body) => {
        if (err) {
          return reject(err);
        }

        if (response.statusCode !== 200) {
          return reject(new Error('Smaug status code=' + response.statusCode));
        }

        resolve(JSON.parse(body));
      });
    });
  };

  const getContextMiddleware = function(req, res, next) {
    var authHeader = req.get('authorization');
    if (typeof authHeader === 'undefined') {
      return next();
    }

    var authType = authHeader.split(' ', 2)[0];
    var bearerToken = authHeader.split(' ', 2)[1];

    if (authType !== 'Bearer') {
      return next();
    }

    getContext(bearerToken)
      .then((context) => {
        req.authorized = true;
        req.context = context;
      })
      .catch((err) => {
        log.error(String(err), {stacktrace: err.stack});
      })
      .then(() => {
        return next();
      });
  };

  const requireAuthorized = function(req, res, next) {
    if (req.authorized) {
      return next();
    }

    res.sendStatus(403);
  };

  // Adding gzip'ing
  app.use(compression());

  // Setting paths
  app.all('/', (req, res) => res.redirect(apiPath));

  // Setting logger
  app.use(expressLoggers.logger);

  // Execute transform
  function callApi(event, query, context, callback) {
    let prom;

    if (serviceProvider.hasTransformer(event)) {
      prom = serviceProvider.execute(event, query, context);
    } else { // eslint-disable-line brace-style
      log.error('Missing transformer: ' + event);
    }

    if (typeof query.fields === 'string') {
      query.fields = query.fields.split(',');
    }

    prom.then((response) => {
      if ((typeof response !== 'object') ||
          (typeof response.statusCode !== 'number') ||
          (response.statusCode === 200 && !response.data) ||
          (response.statusCode !== 200 && !response.error)) {
        log.warn('response is not wrapped in an envelope', {response: response});
        response = {
          statusCode: 200,
          data: response,
          errors: [{warning: 'missing envelope'}]
        };
      }

      // Fields filter, - filter the result based on the `fields` parameter.
      function fieldsFilter(obj) {
        if (!Array.isArray(query.fields) || (typeof obj !== 'object')) {
          return obj;
        }

        if (Array.isArray(obj)) {
          return obj.map(fieldsFilter);
        }


        let result = {};
        query.fields.forEach(key => {
          if (typeof obj[key] !== 'undefined') {
            result[key] = obj[key];
          }
        });
        return result;
      }
      if (typeof response.data === 'object') {
        response.data = fieldsFilter(response.data);
      }

      callback(response);
    }, (error) => {
      callback(error);
    }).catch((err) => {
      log.error(String(err), {stacktrace: err.stack});
    });
  }

  // WebSocket/SocketCluster transport
  worker.on('connection', (connection) => {
    serviceProvider.availableTransforms().forEach(key => {
      connection.on(key, (data, callback) => { // eslint-disable-line no-loop-func
        getContext(data.token)
          .then((context) => {
            callApi(key, data, context, callback);
          })
          .catch((err) => {
            log.error(err);
            callback({statusCode: 403, error: 'Forbidden'});
          });
      });
    });
  });

  // HTTP Transport
  serviceProvider.availableTransforms().forEach(event => {
    app.all(apiPath + event, getContextMiddleware, requireAuthorized, (req, res) => { // eslint-disable-line no-loop-func
      // TODO: should just be req.body, when all endpoints accept object-only as parameter, until then, this hack supports legacy transforms
      let query = Array.isArray(req.body) ? req.body[0] : req.body;

      // We support both POST-body, GET-requests, and a combination of both.
      // This code joins all parameters into a single object.
      query = query || {};
      for (let key in req.query) { // eslint-disable-line guard-for-in
        try {
          query[key] = JSON.parse(req.query[key]);
        }
        catch (_) {
          query[key] = req.query[key];
        }
      }

      callApi(event, query, req.context, response => {
        app.set('json spaces', query.pretty ? 2 : null);
        res.jsonp(response);
      });
    });
  });

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

  // Graceful handling of errors
  app.use((err, req, res, next) => {
    log.error('An error occurred! Got following: ' + err, {stacktrace: err.stack});
    if (res.headersSent) {
      return next(err);
    }

    res.status(500);
    res.jsonp({error: String(err)});
    res.end();
  });

  // Handle 404's
  app.use((req, res) => {
    res.status(404);
    res.jsonp({error: '404 Not Found'});
    res.end();
  });

  // Setting logger -- should be placed after routes
  app.use(expressLoggers.errorLogger);

  log.info('started', {event: 'started', port: app.get('port'), versions: process.versions, smaug: (SMAUG_LOCATION || false)});
};
