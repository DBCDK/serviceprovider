
import moment from 'moment';
import {log} from './utils';

import {getContext} from './app.utils';
import {getTokenSearchers} from './app.middlewares.utils';
import {MultipleTokensError, MissingTokenError} from './smaug/errors';

/**
 *
 * @param {object} req
 * @param {object} res
 * @param {Function} next
 */
export function accessLogMiddleware(req, res, next) {
  const timeStart = moment();
  res.logData = {};

  res.on('finish', () => {
    const timeEnd = moment();
    log.info(null, Object.assign(res.logData || {},
      {
        type: 'accessLog',
        request: {
          method: req.method,
          path: req.path,
          query: req.query,
          hostname: req.hostname,
          remoteAddress: req.ip
        },
        response: {status: res.statusCode},
        time: {
          start: timeStart,
          end: timeEnd,
          taken: timeEnd.diff(timeStart)
        }
      }));
  });

  next();
}

/**
 *
 * @param {object} req
 * @param {object} res
 * @param {Function} next
 * @return {*}
 */
export function getContextMiddleware(req, res, next) {
  // list of functions that can extract a token from a request
  const tokenSearchers = getTokenSearchers(req);

  const bearerTokens = tokenSearchers
  // execute all token searchers, and remove failures
    .map((f) => f())
    // remove failures
    .filter((e) => typeof e !== 'undefined');

  if (bearerTokens.length > 1) {
    return next(new MultipleTokensError());
  }

  const bearerToken = bearerTokens[0];
  res.logData.access_token = bearerToken;

  if (typeof bearerToken === 'undefined') {
    return next(new MissingTokenError());
  }

  getContext(bearerToken)
    .then((context) => {
      req.authorized = true;
      req.context = context;
      res.logData.clientId = context.app.clientId;
      return next();
    })
    .catch((err) => {
      log.error(String(err), {stacktrace: err.stack});
      return next(err);
    });
}

/**
 * Middleware that checks if a request is authorized
 *
 * @param {object} req
 * @param {object} res
 * @param {Function} next
 * @return {*}
 */
export function requireAuthorized(req, res, next) {
  if (req.authorized) {
    return next();
  }

  // I'm not sure this code can actually be reached, as long as isAuthorized is used after getContextMiddleware,
  // since an exception is thrown on missing tokens or if getContext(..) fails.
  res.sendStatus(403);
}
