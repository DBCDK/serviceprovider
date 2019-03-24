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
      {term: 'joanne k. rowling', frequency: 655},
      {term: 'daniel radcliffe', frequency: 103},
      {term: 'emma watson', frequency: 102},
      {term: 'rupert grint', frequency: 102},
      {term: 'robbie coltrane', frequency: 101},
      {term: 'steve kloves', frequency: 89},
      {term: 'michael gambon', frequency: 65},
      {term: 'stephen fry', frequency: 61},
      {term: 'don groves', frequency: 58},
      {term: 'dave mcnary', frequency: 54},
      {term: 'david yates', frequency: 52},
      {term: 'ralph fiennes', frequency: 48},
      {term: 'richard griffiths', frequency: 43},
      {term: 'ed meza', frequency: 42},
      {term: 'pamela mcclintock', frequency: 40},
      {term: 'hy hollinger', frequency: 37},
      {term: 'klaus fritz', frequency: 36},
      {term: 'adam dawtrey', frequency: 34},
      {term: 'helena bonham carter', frequency: 34},
      {term: 'shannon maughan', frequency: 33}
    ]
  }
};

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.11/',
    openagency: 'https://openagency.addi.dk/2.34/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/3.0/',
    openorder: 'https://openorder.addi.dk/2.8/',
    opensearch: 'https://opensearch.addi.dk/b3.5_5.0/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    rank: 'https://xptest.dbc.dk/ms/rank/v1',
    suggest: 'http://ortograf.mcp1-proxy.dbc.dk/ortograf/',
    recommend: 'http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim',
    suggestpopular: 'XXXXX',
    suggestcreator: 'XXXXX',
    suggestlibrary: 'XXXXX',
    suggestsubject: 'XXXXX',
    performance: 'https://elk-p01.dbc.dk:9100/',
    recommendurls: 'XXXXX'
  },
  communityservice: {id: 1},
  performance: {password: 'XXXXX', username: 'XXXXX'},
  search: {agency: '710100', profile: 'opac'},
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
  user: {
    id: 'XXXXX',
    salt: 'XXXXX',
    pin: 'XXXXX',
    libraryId: '710100',
    agency: '710100',
    isil: 'DK-710100'
  },
  app: {
    clientId: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  }
};
const mockData = {
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\"\\n    xmlns:open=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <open:searchRequest>\\n      <open:query>harry AND potter</open:query>\\n      <open:agency>710100</open:agency>\\n      <open:profile>opac</open:profile>\\n      <open:facets>\\n        <open:numberOfTerms>20</open:numberOfTerms>\\n        <open:facetSort>count</open:facetSort>\\n        <open:facetMinCount>1</open:facetMinCount>\\n        <open:facetName>facet.creator</open:facetName>\\n      </open:facets>\\n      <open:start>1</open:start>\\n      <open:stepValue>0</open:stepValue>\\n      <open:outputType>json</open:outputType>\\n    </open:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"3925"},"collectionCount":{"$":"0"},"more":{"$":"true"},"facetResult":{"facet":[{"facetName":{"$":"facet.creator"},"facetTerm":[{"frequence":{"$":"655"},"term":{"$":"joanne k. rowling"}},{"frequence":{"$":"103"},"term":{"$":"daniel radcliffe"}},{"frequence":{"$":"102"},"term":{"$":"emma watson"}},{"frequence":{"$":"102"},"term":{"$":"rupert grint"}},{"frequence":{"$":"101"},"term":{"$":"robbie coltrane"}},{"frequence":{"$":"89"},"term":{"$":"steve kloves"}},{"frequence":{"$":"65"},"term":{"$":"michael gambon"}},{"frequence":{"$":"61"},"term":{"$":"stephen fry"}},{"frequence":{"$":"58"},"term":{"$":"don groves"}},{"frequence":{"$":"54"},"term":{"$":"dave mcnary"}},{"frequence":{"$":"52"},"term":{"$":"david yates"}},{"frequence":{"$":"48"},"term":{"$":"ralph fiennes"}},{"frequence":{"$":"43"},"term":{"$":"richard griffiths"}},{"frequence":{"$":"42"},"term":{"$":"ed meza"}},{"frequence":{"$":"40"},"term":{"$":"pamela mcclintock"}},{"frequence":{"$":"37"},"term":{"$":"hy hollinger"}},{"frequence":{"$":"36"},"term":{"$":"klaus fritz"}},{"frequence":{"$":"34"},"term":{"$":"adam dawtrey"}},{"frequence":{"$":"34"},"term":{"$":"helena bonham carter"}},{"frequence":{"$":"33"},"term":{"$":"shannon maughan"}}]}]},"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"0"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: facets_high_limit.auto', () => {
  it('has same result as recorded (in facets_high_limit.auto)', () => {
    assert(
      Date.now() < +new Date('2019-05-01'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
