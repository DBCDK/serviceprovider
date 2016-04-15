'use strict';

import request from 'request';
import {log} from '../utils.js';
//import {makeTypeID} from '../requestTypeIdentifier.js';

export default (params, context) => new Promise((resolve) => {
  if (!params.q) {
    return resolve({statusCode: 400,
                    error: 'missing q parameter'});
  }

  let fields = (Array.isArray(params.fields) && params.fields)
  context = context.libdata.config.provider.services.opensearch;
  let agency = context.agency;
  let profile = context.profile;
  let url = context.wsdl.replace('?wsdl', '');
  let q = params.q.replace(/</g, '&lt;');
  let offset = 1 + (parseInt(params.offset, 10) || 0);
  let limit = parseInt(params.limit, 10) || 10;
  let getObject = false;
  let moreInfo = false;

  let soap = `<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://oss.dbc.dk/ns/opensearch">
  <SOAP-ENV:Body>
    <ns1:searchRequest>
      <ns1:query>${q}</ns1:query>
      <ns1:agency>100200</ns1:agency>
      <ns1:profile>test</ns1:profile>
      <ns1:start>${offset}</ns1:start>
      <ns1:stepValue>${limit}</ns1:stepValue>
      <ns1:collectionType>work-1</ns1:collectionType>
      <ns1:allObjects>1</ns1:allObjects>
      <ns1:objectFormat>briefDisplay</ns1:objectFormat>
      <ns1:objectFormat>dkabm</ns1:objectFormat>
      <ns1:outputType>json</ns1:outputType>
    </ns1:searchRequest>
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
`;

  request.post(url, {form: {xml: soap}}, function(err, _, body) {
    console.log(JSON.parse(body));
    body = JSON.parse(body).searchResponse.result;
    let more = body.more.$;
    let searchResult = body.searchResult;
    searchResult.forEach(o => {
      let collection = o.collection.object.map(o => o.identifier.$);
      let dkabm = o.collection.object[0].record;
      let briefDisplay = o.formattedCollection.briefDisplay.manifestation[0];
    });

    resolve({statusCode: 200, more: more});
  });
});
