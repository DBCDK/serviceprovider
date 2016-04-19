'use strict';

import genericTransformer from '../genericTransformer';
import {sendRequest} from '../services/HTTPClient';
import _ from 'lodash';

export default function () {

  function requestTransform(request, context) { // eslint-disable-line no-unused-vars
    let pid = request.pids[0];
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

    let neoContext = context.opensearch;

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
      action: 'getObject',
      identifier: pid,
      agency: neoContext.agency,
      profile: neoContext.profile,
      objectFormat: ['dkabm', 'briefDisplay'],
      outputType: 'json'
    };
    let state = {}; // no state needed in this transformer.
    return {transformedRequest: requestParams, state: state};
  }

  // function Z(value, key) {
  //  let y = {};
  //  console.log('Y: ' + key);
  //  _.forEach(value, function (z, k) {
  //    let x = {};
  //    if (_.has(z, '$') && _.has(z, '@')) {
  //      x.ns = z['@'];
  //      x.value = z.$;
  //      if (_.has(z, '@type')) {
  //        x.type = z['@type'].$;
  //      }
  //    }
  //    console.log(JSON.stringify(x, null, 0));
  //  });
  //  return y;
  // }

  function T(lookup, result) {

    return function (value, key) {
      let a = [];
      _.forEach(value, function (z, k) { // eslint-disable-line
        let x = {key: key};
        if (_.has(z, '$') && _.has(z, '@')) {
          x.ns = z['@'];
          x.value = z.$;
          if (_.has(z, '@type')) {
            x.type = z['@type'].$;
          }
        }
        // console.log(JSON.stringify(x, null, 0));
        if (x.value) {
          a.push(x);
        }
      });

      a.map(X => {
        let k = X.ns + ':' + key;
        if (X.type) {
          k += '/' + X.type;
        }
        if (result[k]) {
          result[k].push(X.value);
        } else { // eslint-disable-line brace-style
          result[k] = [X.value];
        }
      });
    };
  }

  function responseTransform(response, context, state) { // eslint-disable-line no-unused-vars
    // TODO: check that all the below properties are valid.
    let namespaces = response.data['@namespaces'];
    let searchResult = response.data.searchResponse.result.searchResult;
    let record = searchResult[0].collection.object[0].record;

    let lookup = {namespaces: namespaces};
    let result = {};
    _.forOwn(record, T(lookup, result));

    let data = {};
    data.warning = 'DO NOT USE THIS RESULT. It is invalid';
    _.extend(data, result);

    // console.log("RES: " + JSON.stringify(data, null, 4));

    data.title = 'HELLO';
    return {statusCode: 200, data: [data]};
  }

  function OSWorkFunc(context) {
    // console.log("Context: " + JSON.stringify(neoContext, null, 4));

    return function (request, local_context, state) { // eslint-disable-line no-unused-vars
      return {response: sendRequest(context.opensearch.url, request), state: state};
    };
  }

  return genericTransformer(requestTransform, responseTransform, OSWorkFunc);

}

