/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
// Request: search {"q":"invalid cql"}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

let context = {"services":{"ddbcmsapi":"http://rest.filmstriben.dbc.inlead.dk/web/","moreinfo":"http://moreinfo.addi.dk/2.6/","openagency":"http://openagency.addi.dk/2.24/","openholdingstatus":"https://openholdingstatus.addi.dk/2.2/","openorder":"https://openorder.addi.dk/2.7.1/","TESTopenorder":"https://openorder.addi.dk/test_2.7.1/","opensearch":"http://opensearch.addi.dk/b3.0_4.2/","openuserstatus":"https://openuserstatus.addi.dk/1.4.1/","rank":"https://xptest.dbc.dk/ms/rank/v1","suggestpopular":"http://xptest.dbc.dk/ms/entity-pop/v1","suggestcreator":"http://xptest.dbc.dk/ms/entity-suggest/v1/creator","suggestlibrary":"http://xptest.dbc.dk/ms/entity-suggest/v1/library","suggestsubject":"http://xptest.dbc.dk/ms/entity-suggest/v1/subject","recommendurls":{"default":"https://xptest.dbc.dk/ms/recommend-cosim/v1","popular":"https://xptest.dbc.dk/ms/recommend-pop/v1"}},"search":{"agency":"775100","profile":"opac","collectionidentifiers":"rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog"},"netpunkt":{"user":"XXXXX","group":"XXXXX","password":"XXXXX"},"user":{"agency":"775100","librarytype":"folkebibliotek","id":"XXXXX","pin":"XXXXX","salt":"XXXXX"},"app":{"clientid":"XXXXX","ddbcmsapipassword":"XXXXX","orderpolicyrequester":"190101"}};
let provider = Provider();
let mockData = {"[\"opensearch\",\"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\" xmlns:ns1=\\\"http://oss.dbc.dk/ns/opensearch\\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>invalid cql</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>10</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>1</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n\"]":"{\"searchResponse\":{\"error\":{\"$\":\"10: Query syntax error at pos 11\"}},\"@namespaces\":{\"ac\":\"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/\",\"dbcaddi\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#\",\"dbcbib\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#\",\"dc\":\"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/\",\"dcmitype\":\"http:\\/\\/purl.org\\/dc\\/dcmitype\\/\",\"dcterms\":\"http:\\/\\/purl.org\\/dc\\/terms\\/\",\"dkabm\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/\",\"dkdcplus\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/\",\"docbook\":\"http:\\/\\/docbook.org\\/ns\\/docbook\",\"kml\":\"http:\\/\\/www.opengis.net\\/kml\\/2.2\",\"marcx\":\"info:lc\\/xmlns\\/marcxchange-v1\",\"mx\":\"http:\\/\\/www.loc.gov\\/MARC21\\/slim\",\"of\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformat\",\"ofo\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput\",\"os\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch\",\"oso\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects\",\"oss\":\"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes\",\"xs\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema\",\"xsi\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance\"}}"};

describe('Automated test: facets_invalid_cql', () => {
  it('expected response. ID:z8dvel, for {"q":"invalid cql"}', (done) => {
    context.mockData = mockData;
    provider.execute('search', {"q":"invalid cql"}, context)
      .then(result => {
        assert.deepEqual(result,
            {"statusCode":500,"error":"10: Query syntax error at pos 11"});
        done();
      })
      .catch(result => {
        fail({throw: result}, {"statusCode":500,"error":"10: Query syntax error at pos 11"});
        done();
      });
  });
});
