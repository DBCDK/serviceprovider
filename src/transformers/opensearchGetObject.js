

import {requestType, makeTypeID} from '../requestTypeIdentifier';
import _ from 'lodash';
import {log} from '../utils';

const filePath = __dirname + '/../../doc/work-context.jsonld';
const typeId = makeTypeID(filePath);

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
  const searchAgency = context.get('search.agency');
  if (!searchAgency) {
    throw new Error('No search agency property present in context');
  }
  const searchProfile = context.get('search.profile');
  if (!searchProfile) {
    throw new Error('No search profile property present in context');
  }
  return {agency: searchAgency, profile: searchProfile};
}

const dataObjectRequestTypes = {
  DKABM: 'dkabm',
  BRIEFDISPLAY: 'briefDisplay',
  RELATIONS: 'relations'
};

function getObjectFormats(defaultBehaviour, fields) {
  const objectFormat = [];

  if (defaultBehaviour
    || fields.some(field => {
      return typeId.isType(field, requestType.BRIEFDISPLAY);
    })) { // eslint-disable-line brace-style
    objectFormat.push('briefDisplay');
  }

  if (defaultBehaviour
    || fields.some(field => {
      return typeId.isType(field, requestType.DKABM);
    })) { // eslint-disable-line brace-style
    objectFormat.push('dkabm');
  }

  return objectFormat;
}

function getRequestRelationData(defaultBehaviour, fields) {
  if (defaultBehaviour
    || fields.some(field => {
      return typeId.isType(field, requestType.RELATIONS);
    })) { // eslint-disable-line brace-style
    return 'uri';
  }

  return null;
}

export function requestTransform(request, context) { // eslint-disable-line no-unused-vars

  const pids = getPids(request);
  const osContext = getAndValidateOpensearchContext(context);

  // If no fields were given, default behaviour is to get
  // everything from briefDisplay, dkabm and relations.
  const defaultBehaviour = _.has(request, 'fields') ? false : true;
  const fields = request.fields;

  // Create request params.
  // Only add dkabm, briefDisplay and relations if requested.
  const requestParams = {
    action: 'getObject',
    identifier: pids,
    agency: osContext.agency,
    profile: osContext.profile,
    outputType: 'json',
    objectFormat: getObjectFormats(defaultBehaviour, fields)
  };

  const rels = getRequestRelationData(defaultBehaviour, fields);
  if (rels) {
    requestParams.relationData = rels;
  }

  return requestParams;
}

function retrieveDkabmFields(result) {

  return function (value, key) {
    const a = [];
    _.forEach(value, function (z) { // eslint-disable-line
      const x = {key: key};
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
      const identifier = X.ns + ':' + key;
      const field = X.type ? typeId.getField(identifier, X.type) : typeId.getField(identifier);
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
  const obj = searchResult.collection.object;
  if (obj.length < 1) {
    return {};
  }
  if (!_.has(obj[0], 'record')) {
    return {};
  }
  const record = obj[0].record; // DKABM-data
  return record;
}

function getDkabmData(searchResult) {
  const record = validateAndGetDkabmRecord(searchResult);

  const result = {};
  _.forOwn(record, retrieveDkabmFields(result));
  return result;
}

function validateAndGetBriefDisplay(searchResult) {
  if (!_.has(searchResult, 'formattedCollection.briefDisplay.manifestation')) {
    return {};
  }
  const manifestations = searchResult.formattedCollection.briefDisplay.manifestation;
  return (manifestations.length && manifestations.length > 0) ? manifestations[0] : {};
}

function getBriefDisplayData(searchResult) {
  const briefDisplay = validateAndGetBriefDisplay(searchResult);

  const res = {};
  _.forOwn(briefDisplay, (value, key) => {
    const ns = 'bd';
    const identifier = ns + ':' + key;
    const field = typeId.getField(identifier);
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
  const searchResult = response.data.searchResponse.result.searchResult;
  return (searchResult.length && searchResult.length > 0) ? searchResult : [];
}

// Returns an empty array if no relations or if some property is missing.
function validateAndGetRelations(searchResult) {
  if (!_.has(searchResult, 'collection.object')) {
    // no object return empty list:
    return [];
  }
  const obj = searchResult.collection.object;
  if (!obj.length || obj.length === 0) {
    return [];
  }
  const obj0 = obj[0];
  if (!_.has(obj0, 'relations.relation')) {
    return [];
  }
  return obj0.relations.relation;
}

function getRelationData(searchResult) {
  const relations = validateAndGetRelations(searchResult);

  const res = {};
  _.forEach(relations, relation => {
    if (!_.has(relation, 'relationType.$')) {
      return;
    }
    const field = typeId.getField(relation.relationType.$);
    if (!res[field]) {
      res[field] = [];
    }
    res[field].push(relation.relationUri.$);
  });
  return res;
}


export function responseTransform(response, context, params) { // eslint-disable-line no-unused-vars
  if (_.has(response, 'data.searchResponse.error.$')) {
    const errMsg = 'Error in opensearchGetObject response.';
    log.error(errMsg);
    return {statusCode: 500, error: errMsg};
  }

  const searchResults = validateAndGetSearchResult(response);
  if (searchResults.length === 0) {
    return {};
  }

  const dataObjectsRequested = params.objectFormat;
  if (params.relationData) {
    dataObjectsRequested.push(dataObjectRequestTypes.RELATIONS);
  }

  const data = searchResults.map(searchResult => {
    const dkabmData = dataObjectsRequested.includes(dataObjectRequestTypes.DKABM) ? getDkabmData(searchResult) : {};
    const briefDisplayData = dataObjectsRequested.includes(dataObjectRequestTypes.BRIEFDISPLAY) ? getBriefDisplayData(searchResult) : {};
    const relationData = dataObjectsRequested.includes(dataObjectRequestTypes.RELATIONS) ? getRelationData(searchResult) : {};
    const result = {};
    _.extend(result, dkabmData, briefDisplayData, relationData);
    return result;
  });

  return {statusCode: 200, data: data};
}

export default (request, context) => {
  const params = requestTransform(request, context);
  return context.call('opensearch', params).then(body => responseTransform(body, context, params));
};
