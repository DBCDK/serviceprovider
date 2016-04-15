'use strict';

import request from 'request';
import {log} from '../utils.js';

// This will also be needed by work, and should be moved to separate file.
const reverseContext = makeReverseContext();

function makeReverseContext() {
  let workContext = JSON.parse(require('fs')
      .readFileSync(__dirname + '/../../doc/work-context.jsonld'));

  let result = {};

  for (let key in workContext) { // eslint-disable-line guard-for-in
    let elem = workContext[key];
    let id = elem['@id'];
    let type = elem['@type'];
    if (id) {
      if (type) {
        id += type.split(':')[1];
      }
      result[id] = key;
    }
  }
  return result;
}

function workToJSON(o, defaultPrefix) {
  var result = {};
  for (let key in o) {  // eslint-disable-line guard-for-in
    let entries = o[key];
    if (!Array.isArray(entries)) {
      entries = [entries];
    }
    entries.forEach(entry => { // eslint-disable-line no-loop-func
      let xmlBaseName = (entry['@'] || defaultPrefix) + ':' + key;
      let xmlName = xmlBaseName;
      if (entry['@type']) {
        xmlName = xmlBaseName + entry['@type'].$.split(':')[1];
      }
      let jsonName = reverseContext[xmlName];
      if (!jsonName) {
        log.warn('invalid id/type, trying type=oth', entry);
        xmlName = xmlBaseName + 'oth';
        jsonName = reverseContext[xmlName];
      }
      if (!jsonName) {
        log.error('invalid id/type', entry);
      }
      else {
        result[jsonName] = result[jsonName] || [];
        result[jsonName].push(entry.$);
      }
    });
  }
  return result;
}

export default (params, context) => new Promise((resolve) => {
  if (!params.q) {
    return resolve({statusCode: 400,
                    error: 'missing q parameter'});
  }

  context = context.libdata.config.provider.services.opensearch;
  let agency = context.agency;
  let profile = context.profile;
  let url = context.wsdl.replace('?wsdl', '');
  let q = params.q.replace(/</g, '&lt;');
  let sort = (params.sort || '').replace(/</g, '&lt;');
  let offset = 1 + (parseInt(params.offset, 10) || 0);
  let limit = parseInt(params.limit, 10) || 10;
  // TODO determine whether we need relations(getObject) or cover images(moreInfo)
  // let fields = (Array.isArray(params.fields) && params.fields);
  // let getObject = false;
  // let moreInfo = false;

  // TODO: current version only get dkabm+briefdisplay+collection, the rest is missing
  let soap = `<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://oss.dbc.dk/ns/opensearch">
  <SOAP-ENV:Body>
    <ns1:searchRequest>
      <ns1:query>${q}</ns1:query>
      <ns1:agency>${agency}</ns1:agency>
      <ns1:profile>${profile}</ns1:profile>
      <ns1:start>${offset}</ns1:start>
      <ns1:stepValue>${limit}</ns1:stepValue>
      ${sort?'<ns1:sort>' + sort + '</ns1:sort>' : ''}
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
    body = JSON.parse(body).searchResponse.result;
    // let more = body.more.$; // this could be used for paging info later
    let searchResult = body.searchResult;
    let result = [];
    searchResult.forEach(o => { // eslint-disable-line no-loop-func
      let collection = o.collection.object.map(obj => obj.identifier.$);
      let dkabm = o.collection.object[0].record;
      dkabm = workToJSON(dkabm);
      let briefDisplay = o.formattedCollection.briefDisplay.manifestation[0];
      delete briefDisplay.fedoraPid;
      briefDisplay = workToJSON(briefDisplay, 'bd');
      // here we would call getObject or moreInfo if needed...
      result.push(Object.assign({collection: collection}, dkabm, briefDisplay));
    });
    resolve({statusCode: 200, data: result});
  });
});
