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
    if(field in ["accessType", "creator", "fedoraPid", "pid", "language", "multiVolumeType", "partOf", "titleFull", "title", "workType"]) {
      return true;
    } else {
      return false;
    }
  }

  function isDkabm(field) {
    if(isRelation(field) || isMoreInfo(field) || isCollection(field) || isBriefDisplay(field)) {
      return false;
    } else {
      return true;
    }
  }

  return {
    isRelation,
    isMoreInfo,
    isCollection,
    isBriefDisplay,
    isDkabm
  }
}

function isGetObject(field) {
  let fieldLookup= fieldNameLookup();
  return (fieldLookup.isDkabm(field) || fieldLookup.isBriefDisplay(field) || fieldLookup.isRelation(field));
}

export function workRequest(request, context) {
  let fieldLookup = fieldNameLookup();

  let transformedRequests = {};
  if(_.has(request, 'fields')) {
    // Only call clients which can contribute the given fields.
    let fields = request.fields;
    // Determine which OpenSearch-method to use:
    // If the collection-field is given, then the OpenSearch request should
    // be given to the search method. Else it should be given to the getObject method.
    if (fields.some(x => fieldLookup.isCollection(x))) {
      // A collection is found.
      // Restructure this request as a Search request for retrieving collection only!
      transformedRequests.search = {
        q: 'rec.id='+request.pids[0],
        fields: ['collection'],
        offset: 0,
        limit: 1
      };
    }
    if (fields.some(field => isGetObject(field))) {
      // send this as a getObjectRequest
      transformedRequests.getobject = request;
    }

    if(fields.some(field => fieldLookup.isMoreInfo(field))) {
      // send this to the coverurl transformer.
      transformedRequests.moreinfo = { pids: request.pids };
    }
  } else {
    // Default:
    // Return dkabm, briefdisplay and relations from getObject
    // This should be default behaviour for getObject with no fields!
    transformedRequests.getobject = request;
  }
  return {transformedRequest: transformedRequests, state: {}};
}

export function workResponse(response, context, state) {
  // TODO: If any of the clients return an errorEnvelope, drop everything else and just return that errorEnvelope.
  // TODO: Merge envelopes.
  console.log("RESP: " + JSON.stringify(response.length, null, 4));
  return {
    statusCode: 200,
    data: {}
  };
}

export function workFunc(context) {
  return function(request, local_contex, state) {
    let promises = [];
    if(_.has(request, 'moreinfo')) {
      // query moreinfo through its transformer.
      let moreInfoPromise = coverImageTransformer()(request.moreinfo, context);
      promises.push(moreInfoPromise);
    }
    if(_.has(request, 'getobject')) {
      // query opensearch through getObject method
      let getObjectPromise = openSearchWorkTransformer()(request.getobject, context);
      promises.push(getObjectPromise);
    }
    // TODO: call search-transformer if applicable!

    return {response: Promise.all(promises), state: state};
  };
}

export default function workTransformer() {
  return genericTransformer(workRequest, workResponse, workFunc);
}
