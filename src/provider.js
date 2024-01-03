/**
 * @file
 * Configure and start our server
 */

// Config
import {version} from '../package.json';
// path for the API-endpoint, ie /v0/, /v1/, or ..
const apiPath = '/v' + parseInt(version, 10) + '/';

// Libraries
import Provider from './provider/Provider';
import {TokenError} from './smaug/errors';

// Middleware
import {log} from './utils';
import {getContextMiddleware, requireAuthorized} from './app.middlewares';
import {getContext, fieldsFilter} from './app.utils';

import swaggerFromSpec from './swaggerFromSpec.js';
import {validateRequest, validateResponse} from './validate.js';
const serviceProvider = Provider();

const swaggerSpec = swaggerFromSpec();

/**
 * Validates and executes transform.
 * Resolves with an error(!) if transform is not found or request is invalid.
 *
 * @param {string} event
 * @param {object} query
 * @param {object} context
 * @return {Promise}
 */
function validateAndExecuteTransform(event, query, context) {
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
      error: validateErrors
        .map(o => String(o.stack).replace(/^instance\.?/, ''))
        .join('\n')
    });
  }

  return serviceProvider.execute(event, query, context);
}

function validateResponseAndStatusCode(event, response) {
  return (
    typeof response !== 'object' ||
    typeof response.statusCode !== 'number' ||
    (response.statusCode >= 200 &&
      response.statusCode < 400 &&
      !response.data) ||
    (response.statusCode >= 400 && !response.error)
  );
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
  return validateAndExecuteTransform(event, query, context)
    .then(response => {
      const validateErrors = validateResponse(event, response.data);
      if (validateErrors.length) {
        log.error('response schema error', {
          event,
          queryStr: JSON.stringify(query),
          responseStr: JSON.stringify(response),
          validateErrorsStr: JSON.stringify(validateErrors)
        });
      }
      if (validateResponseAndStatusCode(event, response)) {
        log.error('response is not wrapped in an envelope', {
          response: response
        });
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
    })
    .catch(err => {
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
export function enableWSTransport(connection) {
  return serviceProvider.availableTransforms().forEach(key => {
    connection.on(key, (data, callback) => {
      // eslint-disable-line no-loop-func
      getContext(data.access_token)
        .then(context => {
          context.app.ips = [connection.remoteAddress];
          context.app.access_token = data.access_token;
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
export function enableHTTPTransport(event, app) {
  app.all(
    apiPath + event,
    getContextMiddleware,
    requireAuthorized,
    (req, res) => {
      // eslint-disable-line no-loop-func
      // TODO: should just be req.body, when all endpoints accept object-only as parameter, until then, this hack supports legacy transforms
      let query = Array.isArray(req.body) ? req.body[0] : req.body;

      // We support both POST-body, GET-requests, and a combination of both.
      // This code joins all parameters into a single object.
      query = query || {};
      for (const key in req.query) {
        // eslint-disable-line guard-for-in NOSONAR
        const val = req.query[key];
        try {
          query[key] = JSON.parse(val);
        } catch (e) {
          query[key] =
            val.indexOf(',') !== -1 ? val.split(',').filter(s => s) : val;
        }

        // Convert to arrays according to spec.
        try {
          const parameterSpec = swaggerSpec.paths[
            '/' + event
          ].get.parameters.filter(({name}) => name === key)[0];
          if (parameterSpec.type === 'array' && !Array.isArray(query[key])) {
            query[key] = [query[key]];
          }
        } catch (error) {
          log.warn(
            'Error converting GET-parameters. May be due to parameter not in spec.',
            {
              key,
              event,
              error: String(error)
            }
          );
        }
        //
      }

      if (typeof query.fields === 'string') {
        query.fields = [query.fields];
      }

      callApi(event, query, req.context).then(response => {
        if (response.statusCode) {
          res.status(response.statusCode);
        }

        app.set('json spaces', query.pretty ? 2 : null);
        res.jsonp(response);
      });
    }
  );
}

export {serviceProvider};
