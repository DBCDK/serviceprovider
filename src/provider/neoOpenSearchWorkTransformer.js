'use strict';

import genericTransformer from '../genericTransformer';
import {sendRequest} from '../services/HTTPClient';
import _ from 'lodash';

export function requestTransform(request, context) { // eslint-disable-line no-unused-vars
  let pid = request.pids[0];
  let osContext = context.opensearch;

  // TODO: set parameters according to the given fields.
  //       I.e. only fetch relations if a relation is asked for in fields
  //            only fetch briefDisplay if a briefDisplay is asked for in fields.
  //            Collection is a special case, since it cannot be fetched through
  //            the getObject-method. In this case a search-method must be used.
  //            If the fields are empty, get all info (collection, relations,
  //            dkabm, briefDisplay).
  let requestParams = {
    action: 'getObject',
    identifier: pid,
    agency: osContext.agency,
    profile: osContext.profile,
    objectFormat: ['dkabm', 'briefDisplay'],
    relationData: 'uri',
    outputType: 'json'
  };
  let state = {}; // no state needed in this transformer.
  return {transformedRequest: requestParams, state: state};
}

function T(lookup, result) {

  return function (value, key) {
    let a = [];
    _.forEach(value, function (z, k) { // eslint-disable-line
      let x = {key: key};
      if (_.has(z, '$') && _.has(z, '@')) {
        x.ns = z['@'];
        x.value = z.$;
        if (_.has(z, '@type')) {
          x.type = z['@type'].$;
        }
      }
      // console.log(JSON.stringify(x, null, 0));
      if (x.value) {
        a.push(x);
      }
    });

    a.map(X => {
      let k = X.ns + ':' + key;
      if (X.type) {
        k += '/' + X.type;
      }
      if (result[k]) {
        result[k].push(X.value);
      } else { // eslint-disable-line brace-style
        result[k] = [X.value];
      }
    });
  };
}

export function responseTransform(response, context, state) { // eslint-disable-line no-unused-vars
  // TODO: check that all the below properties are valid.
  let namespaces = response.data['@namespaces'];
  let searchResult = response.data.searchResponse.result.searchResult;
  let record = searchResult[0].collection.object[0].record;

  let lookup = {namespaces: namespaces};
  let result = {};
  _.forOwn(record, T(lookup, result));

  // TODO: use requestTypeIdentifier.js for getting correct fieldnames of returned data.
  let data = {};
  data.warning = 'DO NOT USE THIS RESULT. It is invalid';
  _.extend(data, result);
  data.title = 'HELLO';
  return {statusCode: 200, data: [data]};
}

export function OSWorkFunc(context) {
  if (!_.has(context, 'opensearch.url')) {
    throw new Error('no openseach url provided in context.');
  }

  return function (request, local_context, state) { // eslint-disable-line no-unused-vars
    return {response: sendRequest(context.opensearch.url, request), state: state};
  };
}

export default function getObjectTransformer() {
  return genericTransformer(requestTransform, responseTransform, OSWorkFunc);
}


