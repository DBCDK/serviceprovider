'use strict';

import {requestType, makeTypeID} from '../requestTypeIdentifier';
import _ from 'lodash';
import {log} from '../utils';

let filePath = __dirname + '/../../doc/work-context.jsonld';
let typeId = makeTypeID(filePath);

function getPids(request) {
  if (!_.has(request, 'pids')) {
    throw new Error('Pid not correctly present in request');
  }
  if (request.pids.length < 1) {
    throw new Error('Illegal number of pids in request - at least one should be present.');
  }
  return request.pids;
}

function getAndValidateOpensearchContext(context) {
  let searchAgency = context.get('agency.search');
  if (!searchAgency) {
    throw new Error('No search agency property present in context');
  }
  let searchProfile = context.get('app.searchprofile');
  if (!searchProfile) {
    throw new Error('No search profile property present in context');
  }
  return {agency: searchAgency, profile: searchProfile};
}

let dataObjectRequestTypes = {
  DKABM: 'dkabm',
  BRIEFDISPLAY: 'briefdisplay',
  RELATIONS: 'relations'
};

export function requestTransform(request, context) { // eslint-disable-line no-unused-vars

  let pids = getPids(request);
  let osContext = getAndValidateOpensearchContext(context);
  let state = {
    dataObjectsRequested: []
  };

  // Create request params.
  // Only add dkabm, briefDisplay and relations if requested.
  let requestParams = {
    action: 'getObject',
    identifier: pids,
    agency: osContext.agency,
    profile: osContext.profile,
    outputType: 'json',
    objectFormat: [] // to be filled out below
  };

  // If no fields were given, default behaviour is to get
  // everything from briefDisplay, dkabm and relations.
  let defaultBehaviour = _.has(request, 'fields') ? false : true;
  let fields = request.fields;
  if (defaultBehaviour
    || fields.some(field => {
      return typeId.isType(field, requestType.BRIEFDISPLAY);
    })) { // eslint-disable-line brace-style
    requestParams.objectFormat.push('briefDisplay');
    state.dataObjectsRequested.push(dataObjectRequestTypes.BRIEFDISPLAY);
  }
  if (defaultBehaviour
    || fields.some(field => {
      return typeId.isType(field, requestType.DKABM);
    })) { // eslint-disable-line brace-style
    requestParams.objectFormat.push('dkabm');
    state.dataObjectsRequested.push(dataObjectRequestTypes.DKABM);
  }
  if (defaultBehaviour
    || fields.some(field => {
      return typeId.isType(field, requestType.RELATIONS);
    })) { // eslint-disable-line brace-style
    requestParams.relationData = 'uri';
    state.dataObjectsRequested.push(dataObjectRequestTypes.RELATIONS);
  }
  return {transformedRequest: requestParams, state: state};
}

function retrieveDkabmFields(result) {

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

// If there is no dkabm-record, and empty object will be returned.
function validateAndGetDkabmRecord(searchResult) {
  if (!_.has(searchResult, 'collection.object')) {
    return {};
  }
  let obj = searchResult.collection.object;
  if (obj.length < 1) {
    return {};
  }
  if (!_.has(obj[0], 'record')) {
    return {};
  }
  let record = obj[0].record; // DKABM-data
  return record;
}

function getDkabmData(searchResult) {
  let record = validateAndGetDkabmRecord(searchResult);

  let result = {};
  _.forOwn(record, retrieveDkabmFields(result));
  return result;
}

function validateAndGetBriefDisplay(searchResult) {
  if (!_.has(searchResult, 'formattedCollection.briefDisplay.manifestation')) {
    return {};
  }
  let manifestations = searchResult.formattedCollection.briefDisplay.manifestation;
  return (manifestations.length && manifestations.length > 0) ? manifestations[0] : {};
}

function getBriefDisplayData(searchResult) {
  let briefDisplay = validateAndGetBriefDisplay(searchResult);

  let res = {};
  _.forOwn(briefDisplay, (value, key) => {
    let ns = 'bd';
    let identifier = ns + ':' + key;
    let field = typeId.getField(identifier);
    if (!res[field]) {
      res[field] = [];
    }
    res[field].push(value.$);
  });
  return res;
}


// If there is no search result or it is empty, an empty array will be returned.
function validateAndGetSearchResult(response) {
  if (!_.has(response, 'data.searchResponse.result.searchResult')) {
    return [];
  }
  let searchResult = response.data.searchResponse.result.searchResult;
  return (searchResult.length && searchResult.length > 0) ? searchResult : [];
}

// Returns an empty array if no relations or if some property is missing.
function validateAndGetRelations(searchResult) {
  if (!_.has(searchResult, 'collection.object')) {
    // no object return empty list:
    return [];
  }
  let obj = searchResult.collection.object;
  if (!obj.length || obj.length === 0) {
    return [];
  }
  let obj0 = obj[0];
  if (!_.has(obj0, 'relations.relation')) {
    return [];
  }
  return obj0.relations.relation;
}

function getRelationData(searchResult) {
  let relations = validateAndGetRelations(searchResult);

  let res = {};
  _.forEach(relations, relation => {
    if (!_.has(relation, 'relationType.$')) {
      return;
    }
    let field = typeId.getField(relation.relationType.$);
    if (!res[field]) {
      res[field] = [];
    }
    res[field].push(relation.relationUri.$);
  });
  return res;
}


export function responseTransform(response, context, state) { // eslint-disable-line no-unused-vars
  if (_.has(response, 'data.searchResponse.error.$')) {
    let errMsg = 'Error in opensearchGetObject response.';
    log.error(errMsg);
    return {statusCode: 500, error: errMsg};
  }
  let searchResults = validateAndGetSearchResult(response);
  if (searchResults.length === 0) {
    return {};
  }

  let dataObjectsRequested = state.dataObjectsRequested;
  let data = searchResults.map(searchResult => {
    let dkabmData = dataObjectsRequested.includes(dataObjectRequestTypes.DKABM) ? getDkabmData(searchResult) : {};
    let briefDisplayData = dataObjectsRequested.includes(dataObjectRequestTypes.BRIEFDISPLAY) ? getBriefDisplayData(searchResult) : {};
    let relationData = dataObjectsRequested.includes(dataObjectRequestTypes.RELATIONS) ? getRelationData(searchResult) : {};
    let result = {};
    _.extend(result, dkabmData, briefDisplayData, relationData);
    return result;
  });

  return {statusCode: 200, data: data};
}

export default (request, context) => {
  let {transformedRequest: params, state: state} = requestTransform(request, context);

  return context.call('opensearch', params).then(body => {
    return responseTransform(body, context, state);
  });
};
