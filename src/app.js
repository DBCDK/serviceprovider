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
import Logger from 'dbc-node-logger';
import moment from 'moment';
import lodash from 'lodash';
import request from 'request';
import Provider from './provider/Provider';

// Middleware
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import {log} from './utils';

// Generation of swagger specification
import swaggerFromSpec from './swaggerFromSpec.js';
import validateRequest from './validate.js';

// validate context
import validateContext from './validateContext';


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
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');
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
    // list of functions that can extract a token from a request
    var tokenSearchers = [
      () => {
        var authHeader = req.get('authorization');
        if (typeof authHeader !== 'undefined') {
          var authType = authHeader.split(' ', 2)[0];
          var bearerToken = authHeader.split(' ', 2)[1];

          if (authType === 'Bearer') {
            return bearerToken;
          }
        }
      },
      () => {
        var bearerToken = req.query.access_token;
        if (typeof bearerToken !== 'undefined') {
          return bearerToken;
        }
      },
      () => {
        var bearerToken = req.body.access_token;
        if (typeof bearerToken !== 'undefined') {
          return bearerToken;
        }
      }
    ];

    var bearerTokens = tokenSearchers
      // execute all token searchers, and remove failures
      .map((f) => f())
      // remove failures
      .filter((e) => typeof e !== 'undefined');

    if (bearerTokens.length > 1) {
      // todo: return a meaningful error, like 'too many tokens'
      return next();
    }

    var bearerToken = bearerTokens[0];

    if (typeof bearerToken === 'undefined') {
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

  // Health check
  app.get('/health', (req, res) => {
    var result = {ok: {}};
    var tests = {};

    tests.smaug = new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
      var tStart = moment();
      request.get({
        uri: SMAUG_LOCATION + '/health'
      }, (err, response, body) => { // eslint-disable-line no-unused-vars
        if (err) {
          return resolve({responseTime: moment().diff(tStart), result: err});
        }

        if (response.statusCode !== 200) {
          return resolve({responseTime: moment().diff(tStart), result: new Error('Smaug returned http status code ' + response.statusCode)});
        }

        resolve({responseTime: moment().diff(tStart), result: 'ok'});
      });
    });

    var testsPromises = Object.keys(tests).map((testId) => tests[testId]);

    Promise.all(testsPromises).then((results) => {
      lodash.zip(Object.keys(tests), results).forEach((zipElem) => {
        let [testId, status] = zipElem;

        if (status.result instanceof Error) {
          if (typeof result.errors === 'undefined') {
            result.errors = {};
          }
          result.errors[testId] = {name: status.result.name, msg: status.result.message, stacktrace: status.result.stack, responseTime: status.responseTime};
        }
        else {
          result.ok[testId] = {responseTime: status.responseTime};
        }
      });
      if (Object.keys(result.errors || {}).length > 0) {
        res.status(500);
      }
      app.set('json spaces', 2);
      res.json(result);
    });
  });

  // Execute transform
  let callApi = (event, query, context) =>
    Promise.resolve((() => {
      // validateContext(context);
      if (!serviceProvider.hasTransformer(event)) {
        return {statusCode: 400,
                error: 'Missing transformer: ' + event};
      }
      let validateErrors = validateRequest(event, query);
      if (validateErrors.length) {
        return Promise.resolve({
          statusCode: 400,
          error: validateErrors.map(o => String(o.stack).replace(/^instance\.?/, '')).join('\n')});
      }
      return serviceProvider.execute(event, query, context);
    })())
    .then(response => {
      if ((typeof response !== 'object') ||
          (typeof response.statusCode !== 'number') ||
          (response.statusCode === 200 && !response.data) ||
          (response.statusCode !== 200 && !response.error)) {
        log.error('response is not wrapped in an envelope', {response: response});
        response = {
          statusCode: 500,
          data: response,
          error: 'missing envelope'
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

      return response;
    }).catch(err => {
      log.error(String(err), {stacktrace: err.stack});
      return {statusCode: 500, error: String(err)};
    });

  // WebSocket/SocketCluster transport
  worker.on('connection', (connection) => {
    serviceProvider.availableTransforms().forEach(key => {
      connection.on(key, (data, callback) => { // eslint-disable-line no-loop-func
        getContext(data.access_token)
          .catch(err => {
            log.error(String(err), {stacktrace: err.stack});
            return null;
          }).then(context => {
            if (context === null) {
              return {statusCode: 403, error: 'Forbidden'};
            }
            return callApi(key, data, context);
          }).catch(err => {
            log.error(String(err), {stacktrace: err.stack});
            return {statusCode: 500, error: String(err)};
          }).then(result => callback(null, result));
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
        let val = req.query[key];
        try {
          query[key] = JSON.parse(val);
        }
        catch (_) {
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
    res.jsonp({statusCode: 500, error: String(err)});
    res.end();
  });

  // Handle 404's
  app.use((req, res) => {
    res.status(404);
    res.jsonp({statusCode: 404, error: '404 Not Found'});
    res.end();
  });

  // Setting logger -- should be placed after routes
  app.use(expressLoggers.errorLogger);

  log.info('started', {event: 'started', port: app.get('port'), versions: process.versions, smaug: (SMAUG_LOCATION || false)});
};
