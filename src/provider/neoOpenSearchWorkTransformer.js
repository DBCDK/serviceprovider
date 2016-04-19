'use strict';

import genericTransformer from '../genericTransformer';
import {sendRequest} from '../services/HTTPClient';
import {requestType, makeTypeID} from '../requestTypeIdentifier';
import _ from 'lodash';

let filePath = __dirname + '/../../doc/work-context.jsonld';
let typeId = makeTypeID(filePath);

export function requestTransform(request, context) { // eslint-disable-line no-unused-vars

  let pid = request.pids[0]; // TODO: ensure that there is a pid
  let osContext = context.opensearch; // TODO: ensure that properties used from opensearch are valid.


  let fields = request.fields; // TODO: ensure request.fields is a valid property.

  // Create request params.
  // Only add dkabm, briefDisplay and relations if requested.
  let requestParams = {
    action: 'getObject',
    identifier: pid,
    agency: osContext.agency,
    profile: osContext.profile,
    outputType: 'json',
    objectFormat: [] // to be filled out below
  };

  if (fields.some(field => { return typeId.isType(field, requestType.BRIEFDISPLAY); })) { // eslint-disable-line brace-style
    requestParams.objectFormat.push('briefDisplay');
  }
  if (fields.some(field => { return typeId.isType(field, requestType.DKABM); })) { // eslint-disable-line brace-style
    requestParams.objectFormat.push('dkabm');
  }
  if (fields.some(field => { return typeId.isType(field, requestType.RELATIONS); })) { // eslint-disable-line brace-style
    requestParams.relationData = 'uri';
  }

  let state = {}; // no state needed in this transformer.
  return {transformedRequest: requestParams, state: state};
}

function retrieveDkabmFields(lookup, result) {

  return function (value, key) {
    let a = [];
    _.forEach(value, function (z, k) { // eslint-disable-line
      // console.log("Key: " + key);
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
      let identifier = X.ns + ':' + key;
      let field = X.type ? typeId.getField(identifier, X.type) : typeId.getField(identifier);
      if (result[field]) {
        result[field].push(X.value);
      } else { // eslint-disable-line brace-style
        result[field] = [X.value];
      }
    });
  };
}

function getDkabmData(response) {
  // TODO: check that all the below properties are valid.
  let namespaces = response.data['@namespaces'];
  let searchResult = response.data.searchResponse.result.searchResult;
  let record = searchResult[0].collection.object[0].record; // DKABM-data

  let lookup = {namespaces: namespaces}; // unused!
  let result = {};
  _.forOwn(record, retrieveDkabmFields(lookup, result));
  return result;
}

function getBriefDisplayData(response) {
  let searchResult = response.data.searchResponse.result.searchResult;
  let briefDisplay = searchResult[0].formattedCollection.briefDisplay.manifestation[0];

  let res = {};
  _.forOwn(briefDisplay, (value, key) => {
    let ns = 'bd';
    let identifier = ns + ':' + key;
    let field = typeId.getField(identifier);
    res[field] = [value.$];
  });
  return res;
}

function getRelationData(response) {
  let searchResult = response.data.searchResponse.result.searchResult;
  let relations = searchResult[0].collection.object[0].relations.relation;

  let res = {};
  _.forEach(relations, relation => {
    let field = typeId.getField(relation.relationType.$);
    if (!res[field]) {
      res[field] = [];
    }
    res[field].push(relation.relationUri.$);
  });
  return res;
}

export function responseTransform(response, context, state) { // eslint-disable-line no-unused-vars
  let data = {};
  let dkabmData = getDkabmData(response);
  let briefDisplayData = getBriefDisplayData(response);
  let relationData = getRelationData(response);

  _.extend(data, dkabmData, briefDisplayData, relationData);
  return {statusCode: 200, data: [data]};
}

export function OSWorkFunc(context) {
  if (!_.has(context, 'opensearch.url')) {
    throw new Error('no opensearch url provided in context.');
  }

  return function (request, local_context, state) { // eslint-disable-line no-unused-vars
    return {response: sendRequest(context.opensearch.url, request), state: state};
  };
}

export default function getObjectTransformer() {
  return genericTransformer(requestTransform, responseTransform, OSWorkFunc);
}


