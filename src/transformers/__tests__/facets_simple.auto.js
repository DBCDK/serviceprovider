// AUTOTEST GENERATOR: {"endpoint":"facets","params":{"q":"harry"}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'facets';
const params = {q: 'harry'};

const expected = {
  statusCode: 200,
  data: {
    creator: [
      {term: 'joanne k. rowling', frequency: 602},
      {term: 'jo nesbø', frequency: 247},
      {term: 'michael connelly', frequency: 220},
      {term: 'harry edison', frequency: 176},
      {term: 'harry christophers', frequency: 146},
      {term: 'the sixteen', frequency: 136},
      {term: 'jack higgins', frequency: 132},
      {term: 'allan hilton andersen', frequency: 125},
      {term: 'harry belafonte', frequency: 123},
      {term: 'knud pheiffer', frequency: 121}
    ],
    subject: [
      {term: 'vokal', frequency: 1855},
      {term: 'usa', frequency: 1727},
      {term: 'instrumental', frequency: 832},
      {term: 'england', frequency: 830},
      {term: 'rock', frequency: 726},
      {term: 'jazz', frequency: 622},
      {term: 'krimi', frequency: 569},
      {term: 'danmark', frequency: 555},
      {term: '2000-2009', frequency: 554},
      {term: 'troldmænd', frequency: 513}
    ],
    language: [
      {term: 'engelsk', frequency: 6727},
      {term: 'dansk', frequency: 3903},
      {term: 'tysk', frequency: 302},
      {term: 'svensk', frequency: 241},
      {term: 'italiensk', frequency: 129},
      {term: 'fransk', frequency: 118},
      {term: 'norsk', frequency: 96},
      {term: 'blandede sprog', frequency: 92},
      {term: 'latin', frequency: 92},
      {term: 'spansk', frequency: 83}
    ],
    date: [
      {term: '2003', frequency: 706},
      {term: '2001', frequency: 562},
      {term: '2007', frequency: 519},
      {term: '2002', frequency: 488},
      {term: '2011', frequency: 463},
      {term: '2006', frequency: 456},
      {term: '2004', frequency: 429},
      {term: '2014', frequency: 426},
      {term: '2012', frequency: 425},
      {term: '2009', frequency: 420}
    ],
    form: [
      {term: 'soundtracks', frequency: 117},
      {term: 'amerikanske film', frequency: 114},
      {term: 'biografier', frequency: 103},
      {term: 'spillefilm', frequency: 87},
      {term: 'computerspil', frequency: 82},
      {term: 'engelske film', frequency: 66},
      {term: 'adventurespil', frequency: 48},
      {term: 'analyser', frequency: 47},
      {term: 'actionspil', frequency: 45},
      {term: 'erindringer', frequency: 42}
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
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\"\\n    xmlns:open=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <open:searchRequest>\\n      <open:query>harry</open:query>\\n      <open:agency>775100</open:agency>\\n      <open:profile>opac</open:profile>\\n      <open:facets>\\n        <open:numberOfTerms>10</open:numberOfTerms>\\n        <open:facetSort>count</open:facetSort>\\n        <open:facetMinCount>1</open:facetMinCount>\\n        <open:facetName>facet.creator</open:facetName>\\n        <open:facetName>facet.subject</open:facetName>\\n        <open:facetName>facet.language</open:facetName>\\n        <open:facetName>facet.date</open:facetName>\\n        <open:facetName>facet.form</open:facetName>\\n      </open:facets>\\n      <open:start>1</open:start>\\n      <open:stepValue>0</open:stepValue>\\n      <open:outputType>json</open:outputType>\\n    </open:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"12690"},"collectionCount":{"$":"0"},"more":{"$":"true"},"facetResult":{"facet":[{"facetName":{"$":"facet.creator"},"facetTerm":[{"frequence":{"$":"602"},"term":{"$":"joanne k. rowling"}},{"frequence":{"$":"247"},"term":{"$":"jo nesb\\u00f8"}},{"frequence":{"$":"220"},"term":{"$":"michael connelly"}},{"frequence":{"$":"176"},"term":{"$":"harry edison"}},{"frequence":{"$":"146"},"term":{"$":"harry christophers"}},{"frequence":{"$":"136"},"term":{"$":"the sixteen"}},{"frequence":{"$":"132"},"term":{"$":"jack higgins"}},{"frequence":{"$":"125"},"term":{"$":"allan hilton andersen"}},{"frequence":{"$":"123"},"term":{"$":"harry belafonte"}},{"frequence":{"$":"121"},"term":{"$":"knud pheiffer"}}]},{"facetName":{"$":"facet.subject"},"facetTerm":[{"frequence":{"$":"1855"},"term":{"$":"vokal"}},{"frequence":{"$":"1727"},"term":{"$":"usa"}},{"frequence":{"$":"832"},"term":{"$":"instrumental"}},{"frequence":{"$":"830"},"term":{"$":"england"}},{"frequence":{"$":"726"},"term":{"$":"rock"}},{"frequence":{"$":"622"},"term":{"$":"jazz"}},{"frequence":{"$":"569"},"term":{"$":"krimi"}},{"frequence":{"$":"555"},"term":{"$":"danmark"}},{"frequence":{"$":"554"},"term":{"$":"2000-2009"}},{"frequence":{"$":"513"},"term":{"$":"troldm\\u00e6nd"}}]},{"facetName":{"$":"facet.language"},"facetTerm":[{"frequence":{"$":"6727"},"term":{"$":"engelsk"}},{"frequence":{"$":"3903"},"term":{"$":"dansk"}},{"frequence":{"$":"302"},"term":{"$":"tysk"}},{"frequence":{"$":"241"},"term":{"$":"svensk"}},{"frequence":{"$":"129"},"term":{"$":"italiensk"}},{"frequence":{"$":"118"},"term":{"$":"fransk"}},{"frequence":{"$":"96"},"term":{"$":"norsk"}},{"frequence":{"$":"92"},"term":{"$":"blandede sprog"}},{"frequence":{"$":"92"},"term":{"$":"latin"}},{"frequence":{"$":"83"},"term":{"$":"spansk"}}]},{"facetName":{"$":"facet.date"},"facetTerm":[{"frequence":{"$":"706"},"term":{"$":"2003"}},{"frequence":{"$":"562"},"term":{"$":"2001"}},{"frequence":{"$":"519"},"term":{"$":"2007"}},{"frequence":{"$":"488"},"term":{"$":"2002"}},{"frequence":{"$":"463"},"term":{"$":"2011"}},{"frequence":{"$":"456"},"term":{"$":"2006"}},{"frequence":{"$":"429"},"term":{"$":"2004"}},{"frequence":{"$":"426"},"term":{"$":"2014"}},{"frequence":{"$":"425"},"term":{"$":"2012"}},{"frequence":{"$":"420"},"term":{"$":"2009"}}]},{"facetName":{"$":"facet.form"},"facetTerm":[{"frequence":{"$":"117"},"term":{"$":"soundtracks"}},{"frequence":{"$":"114"},"term":{"$":"amerikanske film"}},{"frequence":{"$":"103"},"term":{"$":"biografier"}},{"frequence":{"$":"87"},"term":{"$":"spillefilm"}},{"frequence":{"$":"82"},"term":{"$":"computerspil"}},{"frequence":{"$":"66"},"term":{"$":"engelske film"}},{"frequence":{"$":"48"},"term":{"$":"adventurespil"}},{"frequence":{"$":"47"},"term":{"$":"analyser"}},{"frequence":{"$":"45"},"term":{"$":"actionspil"}},{"frequence":{"$":"42"},"term":{"$":"erindringer"}}]}]},"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"0"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: facets_simple.auto', () => {
  it('has same result as recorded (in facets_simple.auto)', done => {
    assert(
      Date.now() < +new Date('2018-03-18'),
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
