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
      {term: 'joanne k. rowling', frequency: 602},
      {term: 'daniel radcliffe', frequency: 116},
      {term: 'emma watson', frequency: 115},
      {term: 'rupert grint', frequency: 115},
      {term: 'robbie coltrane', frequency: 114},
      {term: 'steve kloves', frequency: 101},
      {term: 'michael gambon', frequency: 73},
      {term: 'david yates', frequency: 64},
      {term: 'ralph fiennes', frequency: 54},
      {term: 'richard griffiths', frequency: 48},
      {term: 'stephen fry', frequency: 48},
      {term: 'hanna lützen', frequency: 46},
      {term: 'helena bonham carter', frequency: 40},
      {term: 'john cleese', frequency: 35},
      {term: 'jesper christensen (f. 1948)', frequency: 32},
      {term: 'john williams (f. 1932)', frequency: 30},
      {term: 'chris columbus (f. 1958)', frequency: 29},
      {term: 'roger pratt', frequency: 29},
      {term: 'bill galliford', frequency: 28},
      {term: 'eduardo serra', frequency: 28}
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
    opensearch: 'https://opensearch.addi.dk/b3.0_4.5/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    rank: 'https://xptest.dbc.dk/ms/rank/v1',
    suggestpopular: 'http://xptest.dbc.dk/ms/entity-pop/v1',
    suggestcreator: 'http://xptest.dbc.dk/ms/entity-suggest/v1/creator',
    suggestlibrary: 'http://xptest.dbc.dk/ms/entity-suggest/v1/library',
    suggestsubject: 'http://xptest.dbc.dk/ms/entity-suggest/v1/subject',
    recommendurls: {
      default: 'https://xptest.dbc.dk/ms/recommend-cosim/v1',
      popular: 'https://xptest.dbc.dk/ms/recommend-pop/v1'
    },
    communityservice: 'http://localhost:4010/v1'
  },
  communityservice: {id: 1},
  search: {agency: '775100', profile: 'opac', collectionidentifiers: ''},
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
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\"\\n    xmlns:open=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <open:searchRequest>\\n      <open:query>harry AND potter</open:query>\\n      <open:agency>775100</open:agency>\\n      <open:profile>opac</open:profile>\\n      <open:facets>\\n        <open:numberOfTerms>20</open:numberOfTerms>\\n        <open:facetSort>count</open:facetSort>\\n        <open:facetMinCount>1</open:facetMinCount>\\n        <open:facetName>facet.creator</open:facetName>\\n      </open:facets>\\n      <open:start>1</open:start>\\n      <open:stepValue>0</open:stepValue>\\n      <open:outputType>json</open:outputType>\\n    </open:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"1306"},"collectionCount":{"$":"0"},"more":{"$":"true"},"facetResult":{"facet":[{"facetName":{"$":"facet.creator"},"facetTerm":[{"frequence":{"$":"602"},"term":{"$":"joanne k. rowling"}},{"frequence":{"$":"116"},"term":{"$":"daniel radcliffe"}},{"frequence":{"$":"115"},"term":{"$":"emma watson"}},{"frequence":{"$":"115"},"term":{"$":"rupert grint"}},{"frequence":{"$":"114"},"term":{"$":"robbie coltrane"}},{"frequence":{"$":"101"},"term":{"$":"steve kloves"}},{"frequence":{"$":"73"},"term":{"$":"michael gambon"}},{"frequence":{"$":"64"},"term":{"$":"david yates"}},{"frequence":{"$":"54"},"term":{"$":"ralph fiennes"}},{"frequence":{"$":"48"},"term":{"$":"richard griffiths"}},{"frequence":{"$":"48"},"term":{"$":"stephen fry"}},{"frequence":{"$":"46"},"term":{"$":"hanna l\\u00fctzen"}},{"frequence":{"$":"40"},"term":{"$":"helena bonham carter"}},{"frequence":{"$":"35"},"term":{"$":"john cleese"}},{"frequence":{"$":"32"},"term":{"$":"jesper christensen (f. 1948)"}},{"frequence":{"$":"30"},"term":{"$":"john williams (f. 1932)"}},{"frequence":{"$":"29"},"term":{"$":"chris columbus (f. 1958)"}},{"frequence":{"$":"29"},"term":{"$":"roger pratt"}},{"frequence":{"$":"28"},"term":{"$":"bill galliford"}},{"frequence":{"$":"28"},"term":{"$":"eduardo serra"}}]}]},"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"0"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: facets_high_limit.auto', () => {
  it('has same result as recorded (in facets_high_limit.auto)', done => {
    assert(
      Date.now() < +new Date('2018-03-13'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    provider
      .execute(endpoint, params, context)
      .then(result => {
        assert.deepEqual(result, expected);
        done();
      })
      .catch(result => {
        fail({throw: result}, expected);
        done();
      });
  });
});
