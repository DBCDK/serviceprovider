'use strict';

import genericTransformer from '../genericTransformer';
import coverImageTransformer from './neoCoverImageTransform';
import openSearchWorkTransformer from './neoOpenSearchWorkTransformer';
import _ from 'lodash';


// The poor-mans lookup function. To be replaced by the true implementation.
function fieldNameLookup() {

  function isRelation(field) {
    // Not a correct implementation!
    return (field.startsWith('has')) ? true : false;
  }

  function isMoreInfo(field) {
    // Should work.
    return (field.startsWith('coverUrl')) ? true : false;
  }

  function isCollection(field) {
    return (field === 'collection') ? true : false;
  }

  function isBriefDisplay(field) {
    let res = false;
    if (field in ['accessType', 'creator', 'fedoraPid', 'pid', 'language', 'multiVolumeType', 'partOf', 'titleFull', 'title', 'workType']) {
      res = true;
    }
    return res;
  }

  function isDkabm(field) {
    let res = true;
    if (isRelation(field) || isMoreInfo(field) || isCollection(field) || isBriefDisplay(field)) {
      res = false;
    }
    return res;
  }

  return {
    isRelation,
    isMoreInfo,
    isCollection,
    isBriefDisplay,
    isDkabm
  };
}

function isGetObject(field) {
  let fieldLookup = fieldNameLookup();
  return (fieldLookup.isDkabm(field) || fieldLookup.isBriefDisplay(field) || fieldLookup.isRelation(field));
}

export function workRequest(request, context) { // eslint-disable-line no-unused-vars
  let fieldLookup = fieldNameLookup();

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
    if (fields.some(x => fieldLookup.isCollection(x))) {
      // A collection is found.
      // Restructure this request as a Search request for retrieving collection only!
      transformedRequests.search = {
        q: 'rec.id=' + request.pids[0],
        fields: ['collection'],
        offset: 0,
        limit: 1
      };
    }
    if (fields.some(field => isGetObject(field))) {
      // send this as a getObjectRequest
      transformedRequests.getobject = request;
    }

    if (fields.some(field => fieldLookup.isMoreInfo(field))) {
      // send this to the coverurl transformer.
      transformedRequests.moreinfo = {pids: request.pids};
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
                                                         // TODO: If any of the clients return an errorEnvelope, drop everything else and just return that errorEnvelope.
                                                         // TODO: Merge envelopes.
                                                         // console.log('RESP: ' + JSON.stringify(response.length, null, 4));

  let envelope = {
    statusCode: 200,
    data: [{}]
  };

  for (let i = 0; i < response.length; i++) {
    let resp = response[i];
    if (resp.statusCode !== 200) {
      envelope = resp;
      break;
    }
    switch (state.services[i]) {
      case 'moreinfo':
        _.extend(envelope.data[0], resp.data[0][state.pid]);
        break;
      case 'getobject':
        _.extend(envelope.data[0], resp.data[0]);
        break;
      case 'search':
        // console.log("Search to be merged!");
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
    if (_.has(request, 'moreinfo')) {
      // query moreinfo through its transformer.
      let moreInfoPromise = coverImageTransformer()(request.moreinfo, context);
      promises.push(moreInfoPromise);
      services.push('moreinfo');
    }
    if (_.has(request, 'getobject')) {
      // query opensearch through getObject method
      let getObjectPromise = openSearchWorkTransformer()(request.getobject, context);
      promises.push(getObjectPromise);
      services.push('getobject');
    }
    if (_.has(request, 'search')) {
      // query opensearch through search method
    // TODO: call search-transformer if applicable!
      services.push('search');
    }

    state.services = services;
    return {response: Promise.all(promises), state: state};
  };
}

export default function workTransformer() {
  return genericTransformer(workRequest, workResponse, workFunc);
}
