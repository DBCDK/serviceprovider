'use strict';
import request from 'request';
import moment from 'moment';
import _ from 'lodash';

import {TokenExpiredError} from './smaug/errors';

const SMAUG_LOCATION = process.env.SMAUG; // eslint-disable-line no-process-env

/**
 * Retreives context based on given token
 *
 * @param {string} token
 * @return {Promise}
 */
export function getContext(token) {
  return new Promise((resolve, reject) => {
    request.get({
      uri: SMAUG_LOCATION + '/configuration',
      qs: {token: token}
    }, (err, response, body) => {
      switch (response.statusCode) {
        case 200:
          return resolve(JSON.parse(body));
        case 404:
          return reject(new TokenExpiredError());
        default:
          return reject(err);
      }
    });
  });
}

/**
 * Callback for /healthcheck
 *
 * @param {Object} req
 * @param {Object} res
 */
export function healthCheck(req, res) {
  let result = {ok: {}};
  let tests = {};

  tests.smaug = new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
    const tStart = moment();
    request.get({
      uri: SMAUG_LOCATION + '/health'
    }, (err, response) => { // eslint-disable-line no-unused-vars
      if (err) {
        return resolve({
          responseTime: moment().diff(tStart),
          result: err
        });
      }

      if (response.statusCode !== 200) {
        return resolve({
          responseTime: moment().diff(tStart),
          result: new Error('Smaug returned http status code ' + response.statusCode)
        });
      }

      resolve({
        responseTime: moment().diff(tStart),
        result: 'ok'
      });
    });
  });

  const testsPromises = Object.keys(tests).map((testId) => tests[testId]);

  Promise.all(testsPromises).then((results) => {
    _.zip(Object.keys(tests), results).forEach((zipElem) => {
      const [testId, status] = zipElem;

      if (status.result instanceof Error) {
        if (typeof result.errors === 'undefined') {
          result.errors = {};
        }
        result.errors[testId] = {
          name: status.result.name,
          msg: status.result.message,
          stacktrace: status.result.stack,
          responseTime: status.responseTime
        };
      }
      else {
        result.ok[testId] = {responseTime: status.responseTime};
      }
    });
    if (Object.keys(result.errors || {}).length > 0) {
      res.status(500);
    }
    req.app.set('json spaces', 2);
    res.json(result);
  });
}

/**
 * Fields filter, - filter the result based on the `fields` parameter.
 *
 * @param obj
 * @param query
 * @return {*}
 */
export function fieldsFilter(obj, query) {
  if ((typeof obj !== 'object') || !Array.isArray(query.fields)) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => fieldsFilter(item, query));
  }

  let result = {};
  query.fields.forEach(key => {
    if (typeof obj[key] !== 'undefined') {
      result[key] = obj[key];
    }
  });

  return result;
}
