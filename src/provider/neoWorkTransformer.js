'use strict';

import genericTransformer from '../genericTransformer';
import coverImageTransformer from './neoCoverImageTransform';
import openSearchWorkTransformer from './neoOpenSearchWorkTransformer';
import searchTransformer from './search';
import {requestType, makeTypeID} from '../requestTypeIdentifier';
import _ from 'lodash';


let filePath = __dirname + '/../../doc/work-context.jsonld';
let typeId = makeTypeID(filePath);

let requestMethod = {
  MOREINFO: 'moreinfo',
  SEARCH: 'search',
  GETOBJECT: 'getobject'
};

function isGetObject(field) {
  return (typeId.isType(field, requestType.DKABM)
  || typeId.isType(field, requestType.BRIEFDISPLAY)
  || typeId.isType(field, requestType.RELATIONS));
}

export function workRequest(request, context) { // eslint-disable-line no-unused-vars

  let state = {};
  if (_.has(request, 'pids') && request.pids.length === 1) {
    state.pid = request.pids[0]; // saves pid for use in responder.
  }
  let transformedRequests = {};
  if (_.has(request, 'fields')) {
    // Only call clients which can contribute the given fields.
    let fields = request.fields;
    // Determine which OpenSearch-method to use:
    // If the collection-field is given, then the OpenSearch request should
    // be given to the search method. Else it should be given to the getObject method.
    if (fields.some(field => typeId.isType(field, requestType.COLLECTION))) {
      // A collection is found.
      // Restructure this request as a Search request for retrieving collection only!
      transformedRequests[requestMethod.SEARCH] = {
        q: 'rec.id=' + request.pids[0],
        fields: ['collection'],
        offset: 0,
        limit: 1
      };
    }
    if (fields.some(field => isGetObject(field))) {
      // send this as a getObjectRequest
      transformedRequests[requestMethod.GETOBJECT] = request;
    }

    if (fields.some(field => typeId.isType(field, requestType.MOREINFO))) {
      // send this to the coverurl transformer.
      transformedRequests[requestMethod.MOREINFO] = {pids: request.pids};
    }
  } else { // eslint-disable-line brace-style
    // Default:
    // Return dkabm, briefdisplay and relations from getObject
    // This should be default behaviour for getObject with no fields!
    transformedRequests.getobject = request;
  }
  return {transformedRequest: transformedRequests, state: state};
}

export function workResponse(response, context, state) { // eslint-disable-line no-unused-vars
  let envelope = {
    statusCode: 200,
    data: [{}]
  };

  for (let i = 0; i < response.length; i++) {
    let resp = response[i];
    if (resp.statusCode !== 200) {
      // Setting error envelope if found!
      envelope = resp;
      break;
    }
    switch (state.services[i]) {
      case requestMethod.MOREINFO:
        _.extend(envelope.data[0], resp.data[0][state.pid]);
        break;
      case requestMethod.GETOBJECT:
        _.extend(envelope.data[0], resp.data[0]);
        break;
      case requestMethod.SEARCH:
        let X = {
          collection: resp.data[0].collection
        };
        _.extend(envelope.data[0], X);
        break;
      default:
      // We should never get here.
    }
  }

  return envelope;
}

export function workFunc(context) {
  return function (request, local_contex, state) {
    let services = []; // state-data for knowing which servies is called and in which order.
    let promises = [];
    if (_.has(request, requestMethod.MOREINFO)) {
      // query moreinfo through its transformer.
      let moreInfoPromise = coverImageTransformer()(request.moreinfo, context);
      promises.push(moreInfoPromise);
      services.push(requestMethod.MOREINFO);
    }
    if (_.has(request, requestMethod.GETOBJECT)) {
      // query opensearch through getObject method
      let getObjectPromise = openSearchWorkTransformer()(request.getobject, context);
      promises.push(getObjectPromise);
      services.push(requestMethod.GETOBJECT);
    }
    if (_.has(request, requestMethod.SEARCH)) {
      // query opensearch through search method
      let searchPromise = searchTransformer(request.search, context);
      promises.push(searchPromise);
      services.push(requestMethod.SEARCH);
    }

    state.services = services;
    return {response: Promise.all(promises), state: state};
  };
}

export default function workTransformer() {
  return genericTransformer(workRequest, workResponse, workFunc);
}
