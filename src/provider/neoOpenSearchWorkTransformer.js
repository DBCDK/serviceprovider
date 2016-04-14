'use strict';

import OpenSearchClient from '../services/OpenSearch/client.js';
import genericTransformer from '../genericTransformer.js';
import _ from 'lodash';

const entitySuggestHttpClient = require('../services/EntitySuggest/neoClient');

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

    /*
     <?xml version="1.0" encoding="UTF-8"?>
     <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://oss.dbc.dk/ns/opensearch">
     <SOAP-ENV:Body>
     <ns1:getObjectRequest>
     <ns1:agency>100200</ns1:agency>
     <ns1:profile>test</ns1:profile>
     <ns1:identifier>870970-basis:27953433</ns1:identifier>
     <ns1:objectFormat>dkabm</ns1:objectFormat>
     <ns1:objectFormat>briefDisplay</ns1:objectFormat>
     <ns1:relationData>uri</ns1:relationData>
     <ns1:collectionType>work-1</ns1:collectionType>
     </ns1:getObjectRequest>
     </SOAP-ENV:Body>
     </SOAP-ENV:Envelope>
     */

    let neoContext = context.libdata.config.provider.services.opensearch;
    console.log("CONTEXT: " + JSON.stringify(neoContext, null, 4));

    // TODO: set parameters according to the given fields.
    //       I.e. only fetch relations if a relation is asked for in fields
    //            only fetch briefDisplay if a briefDisplay is asked for in fields.
    //            Collection is a special case, since it cannot be fetched through
    //            the getObject-method. In this case a search-method must be used.
    //            If the fields are empty, get all info (collection, relations,
    //            dkabm, briefDisplay).
    // subnote: when querying a pid using the search-method us a cql like this:
    //          rec.id='pid'
    //
    let requestParams = {
      'action': 'getObject',
      'identifier': pid,
      'agency': neoContext.agency,
      'profile': neoContext.profile,
      'objectFormat': ['dkabm', 'briefDisplay'],
      'outputType': 'json'
    };
    let state = {}; // no state needed in this transformer.
    return {transformedRequest: requestParams, state: state};
  }

  function Z(value, key) {
    _.forEach(value, function (z, k) {
      let x = {};
      if (_.has(z, '$') && _.has(z, '@')) {
        x.ns = z['@'];
        x.value = z.$;
        if (_.has(z, '@type')) {
          x.type = z['@type'].$;
        }
      }
      console.log(JSON.stringify(x, null, 0));
    });
  }

  function responseTransform(response, context, state) { // eslint-disable-line no-unused-vars
    // TODO: check that all the below properties are valid.
    let namespaces = response['@namespaces'];
    let searchResult = response.searchResponse.result.searchResult;
    let record = searchResult[0].collection.object[0].record;

    _.forOwn(record, Z);
    return {statusCode: 200, data: {}};
  }

  function OSWorkFunc(context) {
    let neoContext = context.libdata.config.provider.services.opensearch;
    console.log("Context: " + JSON.stringify(neoContext, null, 4));
    let method = ''; // method is empty in this request. It is given as 'action' in the parameter-object.
    let config = {
      'endpoint': neoContext.wsdl.slice(0,-5), // hack! the context gives us an url with '?wsdl'. This i part is removed.
      'libraryType': undefined // another hack! This is some legacy in the Entity-suggest client.
    };
    console.log("Config: " + JSON.stringify(config, null, 4));

    return function (request, local_context, state) { // eslint-disable-line no-unused-vars
      return {response: entitySuggestHttpClient.sendRequest(config, method, request), state: state};
    };
  }

  return genericTransformer(requestTransform, responseTransform, OSWorkFunc);

}

