'use strict';

import genericTransformer from '../genericTransformer';
import coverImageTransformer from './neoCoverImageTransform';
import openSearchWorkTransformer from './neoOpenSearchWorkTransformer';
import searchTransformer from './opensearchSearch';
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
  if (_.has(request, 'pids') && request.pids.length > 0) {
    state.pid = request.pids[0]; // saves pid for use in responder.
    state.pids = request.pids;
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
      transformedRequests[requestMethod.SEARCH] = [];
      for (let i=0; i<request.pids.length; i++) {
        transformedRequests[requestMethod.SEARCH].push({
          q: 'rec.id=' + request.pids[i],
          fields: ['collection'],
          offset: 0,
          limit: 1
        });
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
    statusCode: 200
    // data: []
  };
  // loop over at most three promises (getObject, search and moreInfo):
  for (let i = 0; i < response.length; i++) {
    let resp = response[i];
    // evaluate the statusCode for getObject and moreInfo
    if (resp.statusCode && resp.statusCode !== 200) {
      // Setting error envelope if found!
      envelope = resp;
      break;
    }
    // evaluate statusCode for list of responses from search
    if (resp.length) {
      let error = false;
      for (let x=0; x<resp.length; x++) {
        if (resp[x].statusCode !== 200) {
          envelope = resp[i];
          error = true;
          break;
        }
      }
      if (error) {
        break;
      }
    }
    // Set number of data elements if not done in previous iteration
    if (!envelope.data) {
      // Damn, this feel hacked.
      // But if you just do 'let x = Array(3).fill({})', you will get an array with the same
      // object three times. So if you add to x[0], you will also add to x[1] and x[2].
      // Not exactly what I expected.
      if (resp.data) {
        envelope.data = Array(resp.data.length).fill(1).map(x => { // eslint-disable-line no-unused-vars
          return {};
        });
      }

    }

    // Where am I?????
    // I need to collect the data from the different services.
    // I have an assumption, that there will be equally many results in each.
    // Search is currently not implemented to return more than one result.
    //   - I'll have to make a loop with X promises.
    switch (state.services[i]) {
      case requestMethod.MOREINFO:
        // TODO: Check that pids corresponds.
        for (let x = 0; x < resp.data.length; x++) {
          let respData = resp.data[x];
          if (respData.pid) {
            delete (respData.pid); // remove the pid.
          }
          _.extend(envelope.data[x], respData);
        }
        break;
      case requestMethod.GETOBJECT:
        for (let x = 0; x<resp.data.length; x++) {
          _.extend(envelope.data[x], resp.data[x]);
        }
        break;
      case requestMethod.SEARCH:
        for (let x = 0; x<resp.length; x++) {
          let coll = {
            collection: resp[x].data[0].collection
          };
          _.extend(envelope.data[x], coll);
        }
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
      let searchPromises = [];
      for (let i = 0; i < request.search.length; i++) {
        let prom = searchTransformer(request.search[i], context);
        searchPromises.push(prom);
      }
      // let searchPromise = searchTransformer(request.search[0], context);
      // promises.push(searchPromise);
      promises.push(Promise.all(searchPromises));
      services.push(requestMethod.SEARCH);
    }

    state.services = services;
    return {response: Promise.all(promises), state: state};
  };
}

export default function workTransformer() {
  return genericTransformer(workRequest, workResponse, workFunc);
}
