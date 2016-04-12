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
import ServiceProviderSetup from './ServiceProviderSetup.js';

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
  const USE_SMAUG = typeof SMAUG_LOCATION !== 'undefined';
  const logger = new Logger({app_name: APP_NAME});
  const expressLoggers = logger.getExpressLoggers();

  // Old config, currently stored in config.json, should be delivered from auth-server, etc. later on
  const config = JSON.parse(
        fs.readFileSync(
          process.env.CONFIG_FILE || // eslint-disable-line no-process-env
            __dirname + '/../config.json', 'utf8'));

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
  let serviceProvider = ServiceProviderSetup(config);
  app.set('serviceProvider', serviceProvider);
  app.set('logger', logger);

  // DUMMY context
  let dummyContext = {
    request: {},
    libdata: {
      kommune: 'aarhus',
      config: config,
      libraryId: (config || {}).agency
    }
    // request: {},
    // libdata: res.locals.libdata
  };

  const unprotected = function(req, res, next) {
    req.authorized = true;
    return next();
  };

  const getContext = function(req, res, next) {
    if (req.authorized === true) {
      return next();
    }

    if (!USE_SMAUG) {
      req.context = dummyContext;
      return next();
    }

    var authHeader = req.get('authorization');
    if (typeof authHeader === 'undefined') {
      return next();
    }

    var authType = authHeader.split(' ', 2)[0];
    var bearerToken = authHeader.split(' ', 2)[1];

    if (authType !== 'Bearer') {
      return next();
    }

    request.get({
      uri: SMAUG_LOCATION + '/configuration',
      qs: {token: bearerToken}
    }, (err, response, body) => {
      if (!err && response.statusCode === 200) {
        req.authorized = true;
        req.context = JSON.parse(body);
      }
      return next();
    });
  };

  const isAuthorized = function(req, res, next) {
    if (!USE_SMAUG || req.authorized) {
      return next();
    }

    res.sendStatus(403);
  };

  app.use('/', unprotected);

  app.use(getContext);
  app.use(isAuthorized);

  // Adding gzip'ing
  app.use(compression());

  // Setting paths
  app.all('/', (req, res) => res.redirect(apiPath));
  app.use(apiPath, express.static(path.join(__dirname, '../static')));

  // Setting logger
  app.use(expressLoggers.logger);

  // Execute transform
  function callApi(event, query, context, callback) {
    let prom;
    // Currently it is needed to run the old-school version of getRecommendations,
    // since the apitests uses the property isFrontPage=true, which calls the meta-recommender.
    // But only the regular recommender is implemented in the current neoGetRecommendations.
    // prom = serviceProvider.trigger(event, query, context);
    // When the above mentioned is fixed, the below will make use of neoGetRecommendations!
    // if (event === 'getRecommendations') {
    if (serviceProvider.hasTransformer(event)) {
      log.info('Neo Event called: ', event);
      // The below expects an array. We will give it what it asks for!
      prom = [serviceProvider.execute(event, query, context)];
    } else { // eslint-disable-line brace-style
      log.info('Old-School Event called: ', event);
      prom = serviceProvider.trigger(event, query, context);
    }
    // TODO: result from serviceProvider should just be a single promise.
    // fix this in provider
    if (Array.isArray(prom)) {
      log.warn('result is array, instead of single promise', {event: event});
      if (prom.length !== 1) {
        log.error('result-length is not 1', {length: prom.length});
      }
      prom = Array.isArray(prom) ? prom : [prom];
    }

    if (typeof query.fields === 'string') {
      query.fields = query.fields.split(',');
    }

    prom[0].then((response) => {
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
        callApi(key, data, dummyContext, callback);
      });
    });
  });

  // HTTP Transport
  serviceProvider.availableTransforms().forEach(event => {
    app.all(apiPath + event, (req, res) => { // eslint-disable-line no-loop-func
      // TODO: should just be req.body, when all endpoints accept object-only as parameter, until then, this hack supports legacy transforms
      let query = Array.isArray(req.body) ? req.body[0] : req.body;

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
