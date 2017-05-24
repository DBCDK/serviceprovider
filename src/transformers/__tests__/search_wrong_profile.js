/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: search {"q":"'jens martin knudsen'","profile":"hans"}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

const context = {
  "services": {
    "ddbcmsapi": "https://cmscontent.dbc.dk/",
    "moreinfo": "http://moreinfo.addi.dk/2.6/",
    "openagency": "http://openagency.addi.dk/2.24/",
    "openholdingstatus": "https://openholdingstatus.addi.dk/2.2/",
    "PRODopenorder": "https://openorder.addi.dk/2.7.1/",
    "openorder": "https://openorder.addi.dk/test_2.7.1/",
    "opensearch": "http://opensearch.addi.dk/b3.0_4.2/",
    "openuserstatus": "https://openuserstatus.addi.dk/1.4.1/",
    "rank": "https://xptest.dbc.dk/ms/rank/v1",
    "suggestpopular": "http://xptest.dbc.dk/ms/entity-pop/v1",
    "suggestcreator": "http://xptest.dbc.dk/ms/entity-suggest/v1/creator",
    "suggestlibrary": "http://xptest.dbc.dk/ms/entity-suggest/v1/library",
    "suggestsubject": "http://xptest.dbc.dk/ms/entity-suggest/v1/subject",
    "recommendurls": {
      "default": "https://xptest.dbc.dk/ms/recommend-cosim/v1",
      "popular": "https://xptest.dbc.dk/ms/recommend-pop/v1"
    },
    "communityservice": "http://localhost:4010/v1"
  },
  "communityservice": {
    "id": "XXXXX"
  },
  "search": {
    "agency": "775100",
    "profile": "opac",
    "collectionidentifiers": "rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog"
  },
  "netpunkt": {
    "user": "XXXXX",
    "group": "XXXXX",
    "password": "XXXXX"
  },
  "user": {
    "agency": "100451",
    "id": "XXXXX",
    "pin": "XXXXX",
    "salt": "XXXXX"
  },
  "app": {
    "clientid": "XXXXX",
    "ddbcmsapipassword": "XXXXX",
    "orderpolicyrequester": "190101",
    "orderSystem": "bibliotekdk"
  }
};
const provider = Provider();
const mockData = {
  "[\"opensearch\",\"<?xml version=\\\"XXXXX.0\\\" encoding=\\\"UTF-8\\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\" xmlns:nsXXXXX=\\\"http://oss.dbc.dk/ns/opensearch\\\">\\n  <SOAP-ENV:Body>\\n    <nsXXXXX:searchRequest>\\n      <nsXXXXX:query>'jens martin knudsen'</nsXXXXX:query>\\n      <nsXXXXX:agency>775100</nsXXXXX:agency>\\n      <nsXXXXX:profile>hans</nsXXXXX:profile>\\n      <nsXXXXX:start>XXXXX</nsXXXXX:start>\\n      <nsXXXXX:stepValue>XXXXX0</nsXXXXX:stepValue>\\n      \\n      <nsXXXXX:collectionType>work-XXXXX</nsXXXXX:collectionType>\\n      <nsXXXXX:allObjects>XXXXX</nsXXXXX:allObjects>\\n      <nsXXXXX:objectFormat>briefDisplay</nsXXXXX:objectFormat>\\n      <nsXXXXX:objectFormat>dkabm</nsXXXXX:objectFormat>\\n      <nsXXXXX:outputType>json</nsXXXXX:outputType>\\n    </nsXXXXX:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n\"]": "{\"searchResponse\":{\"error\":{\"$\":\"Error: Cannot fetch profile: hans for 775100\"}},\"@namespaces\":{\"ac\":\"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/\",\"dbcaddi\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#\",\"dbcbib\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#\",\"dc\":\"http:\\/\\/purl.org\\/dc\\/elements\\/XXXXX.XXXXX\\/\",\"dcmitype\":\"http:\\/\\/purl.org\\/dc\\/dcmitype\\/\",\"dcterms\":\"http:\\/\\/purl.org\\/dc\\/terms\\/\",\"dkabm\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/\",\"dkdcplus\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/\",\"docbook\":\"http:\\/\\/docbook.org\\/ns\\/docbook\",\"kml\":\"http:\\/\\/www.opengis.net\\/kml\\/2.2\",\"marcx\":\"info:lc\\/xmlns\\/marcxchange-vXXXXX\",\"mx\":\"http:\\/\\/www.loc.gov\\/MARC2XXXXX\\/slim\",\"of\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformat\",\"ofo\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput\",\"os\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch\",\"oso\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects\",\"oss\":\"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes\",\"xs\":\"http:\\/\\/www.w3.org\\/200XXXXX\\/XMLSchema\",\"xsi\":\"http:\\/\\/www.w3.org\\/200XXXXX\\/XMLSchema-instance\"}}",
  "[\"opensearch\",\"<?xml version=\\\"XXXXX.0\\\" encoding=\\\"UTF-8\\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\" xmlns:nsXXXXX=\\\"http://oss.dbc.dk/ns/opensearch\\\">\\n  <SOAP-ENV:Body>\\n    <nsXXXXX:searchRequest>\\n      <nsXXXXX:query>'jens martin knudsen'</nsXXXXX:query>\\n      <nsXXXXX:agency>775100</nsXXXXX:agency>\\n      <nsXXXXX:profile>hans</nsXXXXX:profile>\\n      <nsXXXXX:start>XXXXX</nsXXXXX:start>\\n      <nsXXXXX:stepValue>XXXXX0</nsXXXXX:stepValue>\\n      \\n      <nsXXXXX:collectionType>work-XXXXX</nsXXXXX:collectionType>\\n      <nsXXXXX:allObjects>0</nsXXXXX:allObjects>\\n      <nsXXXXX:objectFormat>briefDisplay</nsXXXXX:objectFormat>\\n      <nsXXXXX:objectFormat>dkabm</nsXXXXX:objectFormat>\\n      <nsXXXXX:outputType>json</nsXXXXX:outputType>\\n    </nsXXXXX:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n\"]": "{\"searchResponse\":{\"error\":{\"$\":\"Error: Cannot fetch profile: hans for 775100\"}},\"@namespaces\":{\"ac\":\"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/\",\"dbcaddi\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#\",\"dbcbib\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#\",\"dc\":\"http:\\/\\/purl.org\\/dc\\/elements\\/XXXXX.XXXXX\\/\",\"dcmitype\":\"http:\\/\\/purl.org\\/dc\\/dcmitype\\/\",\"dcterms\":\"http:\\/\\/purl.org\\/dc\\/terms\\/\",\"dkabm\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/\",\"dkdcplus\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/\",\"docbook\":\"http:\\/\\/docbook.org\\/ns\\/docbook\",\"kml\":\"http:\\/\\/www.opengis.net\\/kml\\/2.2\",\"marcx\":\"info:lc\\/xmlns\\/marcxchange-vXXXXX\",\"mx\":\"http:\\/\\/www.loc.gov\\/MARC2XXXXX\\/slim\",\"of\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformat\",\"ofo\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput\",\"os\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch\",\"oso\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects\",\"oss\":\"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes\",\"xs\":\"http:\\/\\/www.w3.org\\/200XXXXX\\/XMLSchema\",\"xsi\":\"http:\\/\\/www.w3.org\\/200XXXXX\\/XMLSchema-instance\"}}"
};

describe('Automated test: search_wrong_profile', () => {
  it('expected response. ID:wfs84s, for {"q":"\'jens martin knudsen\'","profile":"hans"}', (done) => {
    context.mockData = mockData;
    provider.execute('search', {"q":"'jens martin knudsen'","profile":"hans"}, context)
      .then(result => {
        console.log('wutuwutuwuwtuwutwutuw', result);
        assert.deepEqual(result,
          {
            "statusCode": 500,
            "error": "Error: Cannot fetch profile: hans for 775100"
          });
        done();
      })
      .catch(result => {
        console.log('wutuwutuwuwtuwutwutuw')
        fail({throw: result}, {
          "statusCode": 500,
          "error": "Error: Cannot fetch profile: hans for 775100"
        });
        done();
      });
  });
});
