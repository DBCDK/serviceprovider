'use strict';

import OpenSearchClient from '../services/OpenSearch/client.js';
import genericTransformer from '../genericTransformer.js';

export default function () {

  function requestTransform(request, context) { // eslint-disable-line no-unused-vars
    let pid = request.pids[0];
    console.log("PID: " + pid);
    /*
    <ns1:getObjectRequest>
      <ns1:agency>100200</ns1:agency>
      <ns1:profile>test</ns1:profile>
      <ns1:identifier>870970-basis:51989252</ns1:identifier>
      <ns1:objectFormat>dkabm</ns1:objectFormat>
      <ns1:relationData>full</ns1:relationData>
    </ns1:getObjectRequest>
    */

    let params = {};
    params.identifier = pid;
    params.agency = 100200;
    params.profile = 'test';
    params.objectFormat = 'dkabm';
    let state = {};
    let req = {};
    req.params = params;
    return {transformedRequest: req, state: state};
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

