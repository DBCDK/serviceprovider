'use strict';

import genericTransformer from '../genericTransformer';
import coverImageTransformer from './neoCoverImageTransform';
import openSearchWorkTransformer from './neoOpenSearchWorkTransformer';
import _ from 'lodash';

export function workRequest(request, context) {
  // TODO: detect whether coverImages are requested.
  // TODO: detect whether Collection is requested.
  // TODO: detect whether dkabm/briefDisplay/relations are requested.

  if(_.has(request, 'fields')) {
    // Only call clients which can contribute the give fields.
    console.log('Fields: ' + JSON.stringify(request.fields, null, 4));
    let fields = request.fields;
    let coverUrls = fields.some(y => y.startsWith('coverUrl'));
    // How do we know if a relation is included in fields?
    // The list from RJE seems to not include fields which starts
    // with 'rel' although the example contains a field starting with 'rel'.
    let relations = fields.some(y => y.startsWith('relation'));
    console.log("X: " + x);
  } else {
    // Return everything from everywhere.
  }
  return {};
}

export function workResponse(response, context, state) {
  // TODO: If any of the clients return an errorEnvelope, drop everything else and just return that errorEnvelope.
  // TODO: Merge envelopes.
  return {
    statusCode: 200,
    data: [{}]
  };
}

export function workFunc(context) {
  return function(request, local_contex, state) {
    // TODO: call transformers according to incoming fields.
    let promise = new Promise(function(resolve, reject) {
      resolve({});
    });
    return {response: promise, state: state};
  };
}

export default function workTransformer() {
  return genericTransformer(workRequest, workResponse, workFunc);
}
