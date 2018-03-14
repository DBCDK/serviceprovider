// AUTOTEST GENERATOR: {"endpoint":"facets","params":{"q":"harry AND potter","fields":["creator"],"limit":20}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'facets';
const params = {q: 'harry AND potter', fields: ['creator'], limit: 20};

const expected = {
  statusCode: 200,
  data: {
    creator: [
      {term: 'joanne k. rowling', frequency: 556},
      {term: 'daniel radcliffe', frequency: 103},
      {term: 'emma watson', frequency: 102},
      {term: 'rupert grint', frequency: 102},
      {term: 'robbie coltrane', frequency: 101},
      {term: 'steve kloves', frequency: 89},
      {term: 'michael gambon', frequency: 65},
      {term: 'david yates', frequency: 52},
      {term: 'stephen fry', frequency: 50},
      {term: 'ralph fiennes', frequency: 48},
      {term: 'richard griffiths', frequency: 43},
      {term: 'helena bonham carter', frequency: 34},
      {term: 'john cleese', frequency: 31},
      {term: 'hanna lützen', frequency: 27},
      {term: 'roger pratt', frequency: 26},
      {term: 'gary oldman', frequency: 25},
      {term: 'brendan gleeson', frequency: 24},
      {term: 'eduardo serra', frequency: 24},
      {term: 'alan rickman', frequency: 23},
      {term: 'rufus beck', frequency: 23}
    ]
  }
};

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.10/',
    openagency: 'http://openagency.addi.dk/2.24/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/2.2/',
    PRODopenorder: 'https://openorder.addi.dk/2.8/',
    openorder: 'https://openorder.addi.dk/test_2.8/',
    opensearch: 'https://opensearch.addi.dk/b3.5_4.5/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    rank: 'https://xptest.dbc.dk/ms/rank/v1',
    suggest: 'XXXXX',
    suggestpopular: 'http://xptest.dbc.dk/ms/entity-pop/v1',
    suggestcreator: 'http://xptest.dbc.dk/ms/entity-suggest/v1/creator',
    suggestlibrary: 'http://xptest.dbc.dk/ms/entity-suggest/v1/library',
    suggestsubject: 'http://xptest.dbc.dk/ms/entity-suggest/v1/subject',
    recommend: 'http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim',
    recommendurls: 'XXXXX',
    communityservice: 'http://localhost:4010/v1'
  },
  communityservice: {id: 1},
  search: {agency: '775100', profile: 'opac', collectionidentifiers: ''},
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
  user: {
    id: 'XXXXX',
    salt: 'XXXXX',
    pin: 'XXXXX',
    libraryId: '726501',
    agency: '726500',
    isil: 'DK-726500'
  },
  app: {
    clientId: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  }
};
const mockData = {
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\"\\n    xmlns:open=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <open:searchRequest>\\n      <open:query>harry AND potter</open:query>\\n      <open:agency>775100</open:agency>\\n      <open:profile>opac</open:profile>\\n      <open:facets>\\n        <open:numberOfTerms>20</open:numberOfTerms>\\n        <open:facetSort>count</open:facetSort>\\n        <open:facetMinCount>1</open:facetMinCount>\\n        <open:facetName>facet.creator</open:facetName>\\n      </open:facets>\\n      <open:start>1</open:start>\\n      <open:stepValue>0</open:stepValue>\\n      <open:outputType>json</open:outputType>\\n    </open:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"1171"},"collectionCount":{"$":"0"},"more":{"$":"true"},"facetResult":{"facet":[{"facetName":{"$":"facet.creator"},"facetTerm":[{"frequence":{"$":"556"},"term":{"$":"joanne k. rowling"}},{"frequence":{"$":"103"},"term":{"$":"daniel radcliffe"}},{"frequence":{"$":"102"},"term":{"$":"emma watson"}},{"frequence":{"$":"102"},"term":{"$":"rupert grint"}},{"frequence":{"$":"101"},"term":{"$":"robbie coltrane"}},{"frequence":{"$":"89"},"term":{"$":"steve kloves"}},{"frequence":{"$":"65"},"term":{"$":"michael gambon"}},{"frequence":{"$":"52"},"term":{"$":"david yates"}},{"frequence":{"$":"50"},"term":{"$":"stephen fry"}},{"frequence":{"$":"48"},"term":{"$":"ralph fiennes"}},{"frequence":{"$":"43"},"term":{"$":"richard griffiths"}},{"frequence":{"$":"34"},"term":{"$":"helena bonham carter"}},{"frequence":{"$":"31"},"term":{"$":"john cleese"}},{"frequence":{"$":"27"},"term":{"$":"hanna l\\u00fctzen"}},{"frequence":{"$":"26"},"term":{"$":"roger pratt"}},{"frequence":{"$":"25"},"term":{"$":"gary oldman"}},{"frequence":{"$":"24"},"term":{"$":"brendan gleeson"}},{"frequence":{"$":"24"},"term":{"$":"eduardo serra"}},{"frequence":{"$":"23"},"term":{"$":"alan rickman"}},{"frequence":{"$":"23"},"term":{"$":"rufus beck"}}]}]},"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"0"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: facets_high_limit.auto', () => {
  it('has same result as recorded (in facets_high_limit.auto)', () => {
    assert(
      Date.now() < +new Date('2018-06-12'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
