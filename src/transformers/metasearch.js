import {log} from '../utils.js';
import _ from 'lodash';
import xml2js from 'xml2js';
import request from 'request';

let xmlParser = xml2js.Parser();
function promiseXmlParse(xml) {
  return new Promise((resolve, reject) => {
    xml2js.parseString(xml, (err, body) => err ? reject(err) : resolve(body));
  });
}

function promiseRequest(req) {
  return new Promise((resolve, reject) => {
    request(req, (err, res, data) => err ? reject(err) : resolve(data));
  });
}

function resolveXMLParseError(err) {
  log.error(err);
  return Promise.resolve({statusCode: 500, error: 'Invalid XML From Provider'});
}

function resolveInternalError(err) {
  log.error(err);
  return Promise.resolve({statusCode: 500, error: 'Internal Server Error'});
}

function auth(context) {
  let baseUrl = context.get('services.mk');
  let user = context.get('mk.user');
  let password = context.get('mk.password');

  let qs = {
    command: 'auth',
    action: 'login',
    username: user,
    password: password
  };

  return promiseRequest({url: baseUrl, qs: qs}).then(promiseXmlParse, resolveInternalError).then(function (body) {
    let status = _.get(body, 'response.status[0]');
    let err;
    if (status === 'FAIL') {
      err = _.get(body, 'response.message[0]');
      return Promise.resolve({statusCode: 500, error: err});
    }

    let session = _.get(body, 'response.$.jsessionId');
    return session;
  }, resolveXMLParseError);
}

function cacheSearch(context, params, session) {
  let baseUrl = context.get('services.mk');
  let query = params.q;

  let qs = _.extend({
    sort: 'relevance',
    filter: '',
    torusquery: 'udb=="youtube_api:videoHD"'
  }, params, {
    command: 'search',
    query: query.replace(/[^\w ]/g, ' '),
    windowid: 'AUTO'
  });

  let url = baseUrl + ';jsessionid=' + session;
  return promiseRequest({url: url, qs: qs}).then(promiseXmlParse, resolveXMLParseError).then(function (body) {
    let err = _.get(body, 'error.$.msg');

    if (err) {
      return Promise.resolve({statusCode: 500, error: err});
    }
  }, resolveXMLParseError);
}

function fetchSearch(context, params, session) {
  let baseUrl = context.get('services.mk');

  let qs = _.extend({
    start: 0 || params.offset,
    num: 20 || params.limit,
    sort: 'relevance'
  }, params, {
    command: 'show',
    block: '1',
    type: 'xml',
    windowid: 'AUTO'
  });

  let url = baseUrl + ';jsessionid=' + session;
  return promiseRequest({url: url, qs: qs}).then(promiseXmlParse, resolveInternalError).then(function (body) {
    let err = _.get(body, 'erro.$.msg');

    if (err) {
      return Promise.resolve({statusCode: 500, error: err});
    }

    let rawItems = _.get(body, 'show.hit');

    return {statusCode: 200, data: rawItems};
  }, resolveXMLParseError);
}

export default (params, context) => {
  if (!params.q) {
    return Promise.resolve({statusCode: 400, error: 'missing q parameter'});
  }

  return auth(context).then((session) => {
    return cacheSearch(context, params, session).then(() => {
      return fetchSearch(context, params, session);
    });
  });
};
