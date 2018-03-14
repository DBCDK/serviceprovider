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
      {term: 'joanne k. rowling', frequency: 556},
      {term: 'harry edison', frequency: 227},
      {term: 'michael connelly', frequency: 205},
      {term: 'jo nesbø', frequency: 195},
      {term: 'harry belafonte', frequency: 151},
      {term: 'jack higgins', frequency: 150},
      {term: 'duke ellington', frequency: 144},
      {term: 'harry james', frequency: 137},
      {term: 'harry christophers', frequency: 123},
      {term: 'the sixteen', frequency: 113}
    ],
    subject: [
      {term: 'vokal', frequency: 1557},
      {term: 'usa', frequency: 1542},
      {term: 'instrumental', frequency: 741},
      {term: 'england', frequency: 693},
      {term: 'jazz', frequency: 579},
      {term: 'rock', frequency: 577},
      {term: 'krimi', frequency: 477},
      {term: 'troldmænd', frequency: 458},
      {term: '2000-2009', frequency: 440},
      {term: 'magi', frequency: 425}
    ],
    language: [
      {term: 'engelsk', frequency: 6691},
      {term: 'dansk', frequency: 3396},
      {term: 'svensk', frequency: 444},
      {term: 'tysk', frequency: 389},
      {term: 'norsk', frequency: 125},
      {term: 'fransk', frequency: 110},
      {term: 'italiensk', frequency: 94},
      {term: 'blandede sprog', frequency: 88},
      {term: 'spansk', frequency: 68},
      {term: 'latin', frequency: 67}
    ],
    date: [
      {term: '2003', frequency: 647},
      {term: '2001', frequency: 551},
      {term: '2002', frequency: 464},
      {term: '2007', frequency: 425},
      {term: '2006', frequency: 397},
      {term: '2011', frequency: 382},
      {term: '2004', frequency: 366},
      {term: '2000', frequency: 358},
      {term: '2005', frequency: 353},
      {term: '2014', frequency: 349}
    ],
    form: [
      {term: 'amerikanske film', frequency: 103},
      {term: 'soundtracks', frequency: 94},
      {term: 'biografier', frequency: 91},
      {term: 'spillefilm', frequency: 91},
      {term: 'engelske film', frequency: 65},
      {term: 'computerspil', frequency: 52},
      {term: 'analyser', frequency: 48},
      {term: 'litteraturanalyser', frequency: 40},
      {term: 'erindringer', frequency: 34},
      {term: 'adventurespil', frequency: 33}
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
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\"\\n    xmlns:open=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <open:searchRequest>\\n      <open:query>harry</open:query>\\n      <open:agency>775100</open:agency>\\n      <open:profile>opac</open:profile>\\n      <open:facets>\\n        <open:numberOfTerms>10</open:numberOfTerms>\\n        <open:facetSort>count</open:facetSort>\\n        <open:facetMinCount>1</open:facetMinCount>\\n        <open:facetName>facet.creator</open:facetName>\\n        <open:facetName>facet.subject</open:facetName>\\n        <open:facetName>facet.language</open:facetName>\\n        <open:facetName>facet.date</open:facetName>\\n        <open:facetName>facet.form</open:facetName>\\n      </open:facets>\\n      <open:start>1</open:start>\\n      <open:stepValue>0</open:stepValue>\\n      <open:outputType>json</open:outputType>\\n    </open:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"13095"},"collectionCount":{"$":"0"},"more":{"$":"true"},"facetResult":{"facet":[{"facetName":{"$":"facet.creator"},"facetTerm":[{"frequence":{"$":"556"},"term":{"$":"joanne k. rowling"}},{"frequence":{"$":"227"},"term":{"$":"harry edison"}},{"frequence":{"$":"205"},"term":{"$":"michael connelly"}},{"frequence":{"$":"195"},"term":{"$":"jo nesb\\u00f8"}},{"frequence":{"$":"151"},"term":{"$":"harry belafonte"}},{"frequence":{"$":"150"},"term":{"$":"jack higgins"}},{"frequence":{"$":"144"},"term":{"$":"duke ellington"}},{"frequence":{"$":"137"},"term":{"$":"harry james"}},{"frequence":{"$":"123"},"term":{"$":"harry christophers"}},{"frequence":{"$":"113"},"term":{"$":"the sixteen"}}]},{"facetName":{"$":"facet.subject"},"facetTerm":[{"frequence":{"$":"1557"},"term":{"$":"vokal"}},{"frequence":{"$":"1542"},"term":{"$":"usa"}},{"frequence":{"$":"741"},"term":{"$":"instrumental"}},{"frequence":{"$":"693"},"term":{"$":"england"}},{"frequence":{"$":"579"},"term":{"$":"jazz"}},{"frequence":{"$":"577"},"term":{"$":"rock"}},{"frequence":{"$":"477"},"term":{"$":"krimi"}},{"frequence":{"$":"458"},"term":{"$":"troldm\\u00e6nd"}},{"frequence":{"$":"440"},"term":{"$":"2000-2009"}},{"frequence":{"$":"425"},"term":{"$":"magi"}}]},{"facetName":{"$":"facet.language"},"facetTerm":[{"frequence":{"$":"6691"},"term":{"$":"engelsk"}},{"frequence":{"$":"3396"},"term":{"$":"dansk"}},{"frequence":{"$":"444"},"term":{"$":"svensk"}},{"frequence":{"$":"389"},"term":{"$":"tysk"}},{"frequence":{"$":"125"},"term":{"$":"norsk"}},{"frequence":{"$":"110"},"term":{"$":"fransk"}},{"frequence":{"$":"94"},"term":{"$":"italiensk"}},{"frequence":{"$":"88"},"term":{"$":"blandede sprog"}},{"frequence":{"$":"68"},"term":{"$":"spansk"}},{"frequence":{"$":"67"},"term":{"$":"latin"}}]},{"facetName":{"$":"facet.date"},"facetTerm":[{"frequence":{"$":"647"},"term":{"$":"2003"}},{"frequence":{"$":"551"},"term":{"$":"2001"}},{"frequence":{"$":"464"},"term":{"$":"2002"}},{"frequence":{"$":"425"},"term":{"$":"2007"}},{"frequence":{"$":"397"},"term":{"$":"2006"}},{"frequence":{"$":"382"},"term":{"$":"2011"}},{"frequence":{"$":"366"},"term":{"$":"2004"}},{"frequence":{"$":"358"},"term":{"$":"2000"}},{"frequence":{"$":"353"},"term":{"$":"2005"}},{"frequence":{"$":"349"},"term":{"$":"2014"}}]},{"facetName":{"$":"facet.form"},"facetTerm":[{"frequence":{"$":"103"},"term":{"$":"amerikanske film"}},{"frequence":{"$":"94"},"term":{"$":"soundtracks"}},{"frequence":{"$":"91"},"term":{"$":"biografier"}},{"frequence":{"$":"91"},"term":{"$":"spillefilm"}},{"frequence":{"$":"65"},"term":{"$":"engelske film"}},{"frequence":{"$":"52"},"term":{"$":"computerspil"}},{"frequence":{"$":"48"},"term":{"$":"analyser"}},{"frequence":{"$":"40"},"term":{"$":"litteraturanalyser"}},{"frequence":{"$":"34"},"term":{"$":"erindringer"}},{"frequence":{"$":"33"},"term":{"$":"adventurespil"}}]}]},"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"0"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: facets_simple.auto', () => {
  it('has same result as recorded (in facets_simple.auto)', () => {
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
