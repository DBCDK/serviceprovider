'use strict';

import OpenSearchClient from '../services/OpenSearch/client.js';
import genericTransformer from '../genericTransformer.js';

export default function () {

  function requestTransform(request, context) { // eslint-disable-line no-unused-vars
    let params = {};
    let state = {};
    return {transformedRequest: params, state: state};
  }

  function responseTransform(response, context, state) { // eslint-disable-line no-unused-vars
    return new Promise((request, resolve) => {
      resolve({});
    });
  }

  function OSWorkFunc(context) {
    let neoContext = context.libdata.config.provider.services.opensearch;
    let client = OpenSearchClient(neoContext);

    return function (request, local_context, state) { // eslint-disable-line no-unused-vars
      return {response: client.getResultNeo(request), state: state};
    };
  }

  return genericTransformer(requestTransform, responseTransform, OSWorkFunc);

}

