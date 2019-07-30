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
      {term: 'harry stoffer', frequency: 757},
      {term: 'joanne k. rowling', frequency: 655},
      {term: 'harry mccracken', frequency: 385},
      {term: 'proquest (firm)', frequency: 384},
      {term: 'harry bruinius', frequency: 342},
      {term: 'michael connelly', frequency: 242},
      {term: 'harry edison', frequency: 233},
      {term: 'harry l. rinker', frequency: 229},
      {term: 'jo nesbø', frequency: 214},
      {term: 'harry lee', frequency: 186}
    ],
    subject: [
      {term: 'usa', frequency: 1681},
      {term: 'vokal', frequency: 1657},
      {term: 'reid, harry, 1939-', frequency: 951},
      {term: 'instrumental', frequency: 784},
      {term: 'england', frequency: 776},
      {term: 'nonfiction', frequency: 688},
      {term: 'rock', frequency: 613},
      {term: 'jazz', frequency: 611},
      {term: 'electronic books', frequency: 592},
      {term: 'troldmænd', frequency: 567}
    ],
    language: [
      {term: 'english', frequency: 15519},
      {term: 'engelsk', frequency: 8779},
      {term: 'dansk', frequency: 3916},
      {term: 'svensk', frequency: 460},
      {term: 'tysk', frequency: 434},
      {term: 'norsk', frequency: 134},
      {term: 'fransk', frequency: 119},
      {term: 'italiensk', frequency: 106},
      {term: 'blandede sprog', frequency: 101},
      {term: 'spansk', frequency: 77}
    ],
    date: [
      {term: '2008', frequency: 1216},
      {term: '2011', frequency: 782},
      {term: '2007', frequency: 665},
      {term: '2003', frequency: 639},
      {term: '2001', frequency: 448},
      {term: '2006', frequency: 447},
      {term: '2002', frequency: 439},
      {term: '2000', frequency: 428},
      {term: '2013', frequency: 427},
      {term: '2009', frequency: 418}
    ],
    form: [
      {term: 'biografier', frequency: 110},
      {term: 'soundtracks', frequency: 100},
      {term: 'amerikanske film', frequency: 98},
      {term: 'spillefilm', frequency: 91},
      {term: 'analyser', frequency: 69},
      {term: 'engelske film', frequency: 65},
      {term: 'litteraturanalyser', frequency: 54},
      {term: 'computerspil', frequency: 52},
      {term: 'erindringer', frequency: 36},
      {term: 'undervisningsmaterialer', frequency: 36}
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
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\"\\n    xmlns:open=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <open:searchRequest>\\n      <open:query>harry</open:query>\\n      <open:agency>710100</open:agency>\\n      <open:profile>opac</open:profile>\\n      <open:facets>\\n        <open:numberOfTerms>10</open:numberOfTerms>\\n        <open:facetSort>count</open:facetSort>\\n        <open:facetMinCount>1</open:facetMinCount>\\n        <open:facetName>facet.creator</open:facetName>\\n        <open:facetName>facet.subject</open:facetName>\\n        <open:facetName>facet.language</open:facetName>\\n        <open:facetName>facet.date</open:facetName>\\n        <open:facetName>facet.form</open:facetName>\\n      </open:facets>\\n      <open:start>1</open:start>\\n      <open:stepValue>0</open:stepValue>\\n      <open:outputType>json</open:outputType>\\n    </open:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"31904"},"collectionCount":{"$":"0"},"more":{"$":"true"},"facetResult":{"facet":[{"facetName":{"$":"facet.creator"},"facetTerm":[{"frequence":{"$":"757"},"term":{"$":"harry stoffer"}},{"frequence":{"$":"655"},"term":{"$":"joanne k. rowling"}},{"frequence":{"$":"385"},"term":{"$":"harry mccracken"}},{"frequence":{"$":"384"},"term":{"$":"proquest (firm)"}},{"frequence":{"$":"342"},"term":{"$":"harry bruinius"}},{"frequence":{"$":"242"},"term":{"$":"michael connelly"}},{"frequence":{"$":"233"},"term":{"$":"harry edison"}},{"frequence":{"$":"229"},"term":{"$":"harry l. rinker"}},{"frequence":{"$":"214"},"term":{"$":"jo nesb\\u00f8"}},{"frequence":{"$":"186"},"term":{"$":"harry lee"}}]},{"facetName":{"$":"facet.subject"},"facetTerm":[{"frequence":{"$":"1681"},"term":{"$":"usa"}},{"frequence":{"$":"1657"},"term":{"$":"vokal"}},{"frequence":{"$":"951"},"term":{"$":"reid, harry, 1939-"}},{"frequence":{"$":"784"},"term":{"$":"instrumental"}},{"frequence":{"$":"776"},"term":{"$":"england"}},{"frequence":{"$":"688"},"term":{"$":"nonfiction"}},{"frequence":{"$":"613"},"term":{"$":"rock"}},{"frequence":{"$":"611"},"term":{"$":"jazz"}},{"frequence":{"$":"592"},"term":{"$":"electronic books"}},{"frequence":{"$":"567"},"term":{"$":"troldm\\u00e6nd"}}]},{"facetName":{"$":"facet.language"},"facetTerm":[{"frequence":{"$":"15519"},"term":{"$":"english"}},{"frequence":{"$":"8779"},"term":{"$":"engelsk"}},{"frequence":{"$":"3916"},"term":{"$":"dansk"}},{"frequence":{"$":"460"},"term":{"$":"svensk"}},{"frequence":{"$":"434"},"term":{"$":"tysk"}},{"frequence":{"$":"134"},"term":{"$":"norsk"}},{"frequence":{"$":"119"},"term":{"$":"fransk"}},{"frequence":{"$":"106"},"term":{"$":"italiensk"}},{"frequence":{"$":"101"},"term":{"$":"blandede sprog"}},{"frequence":{"$":"77"},"term":{"$":"spansk"}}]},{"facetName":{"$":"facet.date"},"facetTerm":[{"frequence":{"$":"1216"},"term":{"$":"2008"}},{"frequence":{"$":"782"},"term":{"$":"2011"}},{"frequence":{"$":"665"},"term":{"$":"2007"}},{"frequence":{"$":"639"},"term":{"$":"2003"}},{"frequence":{"$":"448"},"term":{"$":"2001"}},{"frequence":{"$":"447"},"term":{"$":"2006"}},{"frequence":{"$":"439"},"term":{"$":"2002"}},{"frequence":{"$":"428"},"term":{"$":"2000"}},{"frequence":{"$":"427"},"term":{"$":"2013"}},{"frequence":{"$":"418"},"term":{"$":"2009"}}]},{"facetName":{"$":"facet.form"},"facetTerm":[{"frequence":{"$":"110"},"term":{"$":"biografier"}},{"frequence":{"$":"100"},"term":{"$":"soundtracks"}},{"frequence":{"$":"98"},"term":{"$":"amerikanske film"}},{"frequence":{"$":"91"},"term":{"$":"spillefilm"}},{"frequence":{"$":"69"},"term":{"$":"analyser"}},{"frequence":{"$":"65"},"term":{"$":"engelske film"}},{"frequence":{"$":"54"},"term":{"$":"litteraturanalyser"}},{"frequence":{"$":"52"},"term":{"$":"computerspil"}},{"frequence":{"$":"36"},"term":{"$":"erindringer"}},{"frequence":{"$":"36"},"term":{"$":"undervisningsmaterialer"}}]}]},"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"0"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: facets_simple.auto', () => {
  it('has same result as recorded (in facets_simple.auto)', () => {
    assert(
      Date.now() < +new Date('2019-09-17'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
