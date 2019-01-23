import _ from 'lodash';
import {requestType, makeTypeID} from '../../requestTypeIdentifier';
import {log} from '../../utils';
import searchTransformer from './../opensearchSearch';
import moreinfo26 from './../moreinfo';

const filePath = __dirname + '/../../../doc/work-context.jsonld';
const typeId = makeTypeID(filePath);

const requestMethod = {
  MOREINFO: 'moreinfo',
  SEARCH: 'search',
  GETOBJECT: 'getobject'
};

export function isGetObject(field) {
  return (
    typeId.isType(field, requestType.DKABM) ||
    typeId.isType(field, requestType.BRIEFDISPLAY) ||
    typeId.isType(field, requestType.RELATIONS) ||
    typeId.isType(field, requestType.DOCBOOK)
  );
}

/**
 * Checks the responses for errors. Returns bool appropriately.
 *
 * @param {Array} response
 * @return {boolean}
 */
function evaluateResponseCode(response) {
  let error = false;
  response.forEach(resp => {
    if (resp.statusCode !== 200) {
      error = resp;
    }
  });
  return error;
}

export function checkResponseForErrorCodes(response) {
  let result = null;
  if (Array.isArray(response)) {
    result = evaluateResponseCode(response);
  } else if (response.statusCode && response.statusCode !== 200) {
    result = response;
  }

  return result;
}

/**
 * Handles MoreInfo response
 *
 * @param {object} resp
 * @param {object} envelope
 * @return {object}
 */
function handleMoreinfo(resp, envelope) {
  if (!resp.data) {
    return envelope;
  }

  for (let x = 0; x < resp.data.length; x++) {
    const respData = resp.data[x];
    if (respData.pid) {
      delete respData.pid; // remove the pid.
    }

    _.extend(envelope.data[x], respData);
  }

  return envelope;
}

/**
 * Handles GetObject response
 *
 * @param {object} resp
 * @param {object} envelope
 * @return {object}
 */
function handleGetObject(resp, envelope) {
  for (let x = 0; x < resp.data.length; x++) {
    _.extend(envelope.data[x], resp.data[x]);
  }

  return envelope;
}

/**
 * Handles search response
 *
 * @param {object} resp
 * @param {object} envelope
 * @return {object}
 */
function handleSearch(resp, envelope) {
  for (let x = 0; x < resp.length; x++) {
    const coll = {};
    const item = resp[x].data[0] || null;

    if (item) {
      coll.collection = item.collection;
    }
    if (item && item.collectionDetails) {
      coll.collectionDetails = item.collectionDetails;
    }

    _.extend(envelope.data[x], coll);
  }

  return envelope;
}

/**
 * Handles switching between moreinfo 2.1 and 2.6 just by changing the MoreInfo URL in in the context.
 *
 * @param {object} context
 * @param {object} params
 * @return {Promise}
 */
export function handleMoreInfoVersion(context, params) {
  const moreinfoUrl = context.get('services.moreinfo', true);
  log.info('moreinfoUrl: ' + moreinfoUrl);
  return moreinfo26(params.moreinfo, context);
}

/**
 * Returns an array of promises for search
 *
 * @param {object} context
 * @param {object} params
 * @return {Promise[]}
 */
export function getSearchPromises(context, params) {
  // query opensearch through search method
  const searchPromises = [];
  for (let i = 0; i < params.search.length; i++) {
    const prom = searchTransformer(params.search[i], context);
    searchPromises.push(prom);
  }

  return searchPromises;
}

/**
 * Collect the data from the different services.
 * I have an assumption, that there will be equally many results in each.
 *
 * @param {object} service
 * @param {object} resp
 * @param {object} envelope
 * @return {object}
 */
export function collectDataFromServices(service, resp, envelope) {
  switch (service) {
    case requestMethod.MOREINFO: {
      envelope = handleMoreinfo(resp, envelope);
      break;
    }

    case requestMethod.GETOBJECT: {
      envelope = handleGetObject(resp, envelope);
      break;
    }

    case requestMethod.SEARCH: {
      envelope = handleSearch(resp, envelope);
      break;
    }
    default:
      log.warn('No known requestmethod was in service object', service);
      break;
  }

  return envelope;
}

/**
 *
 * @param {object} request
 * @param {object} transformedRequests
 * @return {object} transformedRequests
 */
export function handleFieldsRequest(request, transformedRequests) {
  // Only call clients which can contribute the given fields.
  const fields = request.fields;
  // Determine which OpenSearch-method to use:
  // If the collection-field is given, then the OpenSearch request should
  // be given to the search method. Else it should be given to the getObject method.
  if (fields.some(field => typeId.isType(field, requestType.COLLECTION))) {
    // A collection is found.
    // Restructure this request as a Search request for retrieving collection only!
    transformedRequests[requestMethod.SEARCH] = [];
    for (let i = 0; i < request.pids.length; i++) {
      const searchRequest = {
        q: 'rec.id=' + request.pids[i],
        fields: ['collection'],
        offset: 0,
        limit: 1
      };
      if (_.includes(fields, 'collectionDetails')) {
        searchRequest.fields.push('collectionDetails');
      }
      transformedRequests[requestMethod.SEARCH].push(searchRequest);
    }
  }
  if (fields.some(field => isGetObject(field))) {
    // send this as a getObjectRequest
    transformedRequests[requestMethod.GETOBJECT] = request;
  }

  if (fields.some(field => typeId.isType(field, requestType.MOREINFO))) {
    // send this to the coverurl transformer.
    transformedRequests[requestMethod.MOREINFO] = {pids: request.pids};
  }

  return transformedRequests;
}

export function populateEnvelopeData(resp, envelope) {
  // Length is dependent on which services were called.
  // If search were the first service, the an array is returned, else an object with arrays in data.
  const length = resp.data ? resp.data.length : resp.length;
  envelope.data = Array(length)
    .fill(1)
    .map(() => {
      return {};
    });

  return envelope;
}
