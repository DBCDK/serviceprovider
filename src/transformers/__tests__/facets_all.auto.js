// AUTOTEST GENERATOR: {"endpoint":"facets","params":{"q":"ost","fields":["access","acSource","audience","audienceCategory","branch","category","creator","creatorFunction","date","department","dk5","extraTitles","fictionSubject","form","gamePlatform","genre","genreCategory","geographic","language","level","let","literaryForm","lix","musicSubject","nationality","nonFictionSubject","partOf","period","primaryCreator","sheetMusic","subject","titleSeries","type"],"limit":2}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'facets';
const params = {
  q: 'ost',
  fields: [
    'access',
    'acSource',
    'audience',
    'audienceCategory',
    'branch',
    'category',
    'creator',
    'creatorFunction',
    'date',
    'department',
    'dk5',
    'extraTitles',
    'fictionSubject',
    'form',
    'gamePlatform',
    'genre',
    'genreCategory',
    'geographic',
    'language',
    'level',
    'let',
    'literaryForm',
    'lix',
    'musicSubject',
    'nationality',
    'nonFictionSubject',
    'partOf',
    'period',
    'primaryCreator',
    'sheetMusic',
    'subject',
    'titleSeries',
    'type'
  ],
  limit: 2
};

const expected = {
  statusCode: 200,
  data: {
    access: [
      {term: 'begrænset adgang', frequency: 92},
      {term: 'ubegrænset adgang', frequency: 20}
    ],
    acSource: [
      {term: 'bibliotekskatalog', frequency: 669},
      {term: 'tidsskriftsartikler', frequency: 452}
    ],
    audience: [
      {term: 'fra 7 år', frequency: 20},
      {term: 'fra 3 år', frequency: 16}
    ],
    audienceCategory: [
      {term: 'for 7 år', frequency: 37},
      {term: 'for 6 år', frequency: 32}
    ],
    category: [
      {term: 'voksenmaterialer', frequency: 1100},
      {term: 'børnematerialer', frequency: 175}
    ],
    creator: [
      {term: 'robert hansen', frequency: 76},
      {term: 'hanne hastrup', frequency: 35}
    ],
    creatorFunction: [
      {term: 'robert hansen', frequency: 76},
      {term: 'jannik hastrup', frequency: 34}
    ],
    date: [{term: '2000', frequency: 45}, {term: '1985', frequency: 44}],
    dk5: [
      {term: '63.7', frequency: 512},
      {term: 'skønlitteratur', frequency: 126}
    ],
    extraTitles: [{term: 'ekstra titler', frequency: 2}],
    fictionSubject: [
      {term: 'mus', frequency: 36},
      {term: 'sjove bøger', frequency: 15}
    ],
    form: [
      {term: 'opskrifter', frequency: 66},
      {term: 'kogebøger', frequency: 57}
    ],
    gamePlatform: [
      {term: 'gameboy advance', frequency: 1},
      {term: 'pc-spil', frequency: 1}
    ],
    genre: [
      {term: 'rock', frequency: 15},
      {term: 'sjove bøger', frequency: 14}
    ],
    genreCategory: [
      {term: 'nonfiktion', frequency: 974},
      {term: 'fiktion', frequency: 162}
    ],
    geographic: [
      {term: 'danmark', frequency: 67},
      {term: 'tyskland', frequency: 24}
    ],
    language: [{term: 'dansk', frequency: 841}, {term: 'tysk', frequency: 170}],
    level: [
      {term: 'alment niveau', frequency: 69},
      {term: 'fagligt niveau', frequency: 10}
    ],
    let: [{term: '16', frequency: 5}, {term: '14', frequency: 2}],
    literaryForm: [
      {term: 'faglitteratur', frequency: 974},
      {term: 'skønlitteratur', frequency: 162}
    ],
    lix: [{term: '07', frequency: 7}, {term: '05', frequency: 2}],
    musicSubject: [
      {term: 'vokal', frequency: 46},
      {term: 'børnemusik', frequency: 19}
    ],
    nationality: [
      {term: 'amerikanske film', frequency: 4},
      {term: 'danske film', frequency: 3}
    ],
    nonFictionSubject: [
      {term: 'ost', frequency: 270},
      {term: 'mejeribrug', frequency: 70}
    ],
    partOf: [
      {term: 'mælkeritidende', frequency: 186},
      {term: 'nordeuropæisk mejeri-tidsskrift', frequency: 55}
    ],
    period: [
      {term: '1990-1999', frequency: 32},
      {term: '2000-2009', frequency: 31}
    ],
    primaryCreator: [
      {term: 'robert hansen', frequency: 76},
      {term: 'j. m. buch kristensen', frequency: 27}
    ],
    sheetMusic: [{term: 'alle partiturer', frequency: 6}],
    subject: [{term: 'ost', frequency: 529}, {term: 'danmark', frequency: 83}],
    titleSeries: [
      {term: 'grieben-reiseführer', frequency: 8},
      {term: 'small world', frequency: 5}
    ],
    type: [
      {term: 'tidsskriftsartikel', frequency: 448},
      {term: 'bog', frequency: 401}
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
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\"\\n    xmlns:open=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <open:searchRequest>\\n      <open:query>ost</open:query>\\n      <open:agency>775100</open:agency>\\n      <open:profile>opac</open:profile>\\n      <open:facets>\\n        <open:numberOfTerms>2</open:numberOfTerms>\\n        <open:facetSort>count</open:facetSort>\\n        <open:facetMinCount>1</open:facetMinCount>\\n        <open:facetName>facet.access</open:facetName>\\n        <open:facetName>facet.acSource</open:facetName>\\n        <open:facetName>facet.audience</open:facetName>\\n        <open:facetName>facet.audienceCategory</open:facetName>\\n        <open:facetName>facet.branch</open:facetName>\\n        <open:facetName>facet.category</open:facetName>\\n        <open:facetName>facet.creator</open:facetName>\\n        <open:facetName>facet.creatorFunction</open:facetName>\\n        <open:facetName>facet.date</open:facetName>\\n        <open:facetName>facet.department</open:facetName>\\n        <open:facetName>facet.dk5</open:facetName>\\n        <open:facetName>facet.extraTitles</open:facetName>\\n        <open:facetName>facet.fictionSubject</open:facetName>\\n        <open:facetName>facet.form</open:facetName>\\n        <open:facetName>facet.gamePlatform</open:facetName>\\n        <open:facetName>facet.genre</open:facetName>\\n        <open:facetName>facet.genreCategory</open:facetName>\\n        <open:facetName>facet.geographic</open:facetName>\\n        <open:facetName>facet.language</open:facetName>\\n        <open:facetName>facet.level</open:facetName>\\n        <open:facetName>facet.let</open:facetName>\\n        <open:facetName>facet.literaryForm</open:facetName>\\n        <open:facetName>facet.lix</open:facetName>\\n        <open:facetName>facet.musicSubject</open:facetName>\\n        <open:facetName>facet.nationality</open:facetName>\\n        <open:facetName>facet.nonFictionSubject</open:facetName>\\n        <open:facetName>facet.partOf</open:facetName>\\n        <open:facetName>facet.period</open:facetName>\\n        <open:facetName>facet.primaryCreator</open:facetName>\\n        <open:facetName>facet.sheetMusic</open:facetName>\\n        <open:facetName>facet.subject</open:facetName>\\n        <open:facetName>facet.titleSeries</open:facetName>\\n        <open:facetName>facet.type</open:facetName>\\n      </open:facets>\\n      <open:start>1</open:start>\\n      <open:stepValue>0</open:stepValue>\\n      <open:outputType>json</open:outputType>\\n    </open:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"1273"},"collectionCount":{"$":"0"},"more":{"$":"true"},"facetResult":{"facet":[{"facetName":{"$":"facet.access"},"facetTerm":[{"frequence":{"$":"92"},"term":{"$":"begr\\u00e6nset adgang"}},{"frequence":{"$":"20"},"term":{"$":"ubegr\\u00e6nset adgang"}}]},{"facetName":{"$":"facet.acSource"},"facetTerm":[{"frequence":{"$":"669"},"term":{"$":"bibliotekskatalog"}},{"frequence":{"$":"452"},"term":{"$":"tidsskriftsartikler"}}]},{"facetName":{"$":"facet.audience"},"facetTerm":[{"frequence":{"$":"20"},"term":{"$":"fra 7 \\u00e5r"}},{"frequence":{"$":"16"},"term":{"$":"fra 3 \\u00e5r"}}]},{"facetName":{"$":"facet.audienceCategory"},"facetTerm":[{"frequence":{"$":"37"},"term":{"$":"for 7 \\u00e5r"}},{"frequence":{"$":"32"},"term":{"$":"for 6 \\u00e5r"}}]},{"facetName":{"$":"facet.branch"}},{"facetName":{"$":"facet.category"},"facetTerm":[{"frequence":{"$":"1100"},"term":{"$":"voksenmaterialer"}},{"frequence":{"$":"175"},"term":{"$":"b\\u00f8rnematerialer"}}]},{"facetName":{"$":"facet.creator"},"facetTerm":[{"frequence":{"$":"76"},"term":{"$":"robert hansen"}},{"frequence":{"$":"35"},"term":{"$":"hanne hastrup"}}]},{"facetName":{"$":"facet.creatorFunction"},"facetTerm":[{"frequence":{"$":"76"},"term":{"$":"robert hansen"}},{"frequence":{"$":"34"},"term":{"$":"jannik hastrup"}}]},{"facetName":{"$":"facet.date"},"facetTerm":[{"frequence":{"$":"45"},"term":{"$":"2000"}},{"frequence":{"$":"44"},"term":{"$":"1985"}}]},{"facetName":{"$":"facet.department"}},{"facetName":{"$":"facet.dk5"},"facetTerm":[{"frequence":{"$":"512"},"term":{"$":"63.7"}},{"frequence":{"$":"126"},"term":{"$":"sk\\u00f8nlitteratur"}}]},{"facetName":{"$":"facet.extraTitles"},"facetTerm":[{"frequence":{"$":"2"},"term":{"$":"ekstra titler"}}]},{"facetName":{"$":"facet.fictionSubject"},"facetTerm":[{"frequence":{"$":"36"},"term":{"$":"mus"}},{"frequence":{"$":"15"},"term":{"$":"sjove b\\u00f8ger"}}]},{"facetName":{"$":"facet.form"},"facetTerm":[{"frequence":{"$":"66"},"term":{"$":"opskrifter"}},{"frequence":{"$":"57"},"term":{"$":"kogeb\\u00f8ger"}}]},{"facetName":{"$":"facet.gamePlatform"},"facetTerm":[{"frequence":{"$":"1"},"term":{"$":"gameboy advance"}},{"frequence":{"$":"1"},"term":{"$":"pc-spil"}}]},{"facetName":{"$":"facet.genre"},"facetTerm":[{"frequence":{"$":"15"},"term":{"$":"rock"}},{"frequence":{"$":"14"},"term":{"$":"sjove b\\u00f8ger"}}]},{"facetName":{"$":"facet.genreCategory"},"facetTerm":[{"frequence":{"$":"974"},"term":{"$":"nonfiktion"}},{"frequence":{"$":"162"},"term":{"$":"fiktion"}}]},{"facetName":{"$":"facet.geographic"},"facetTerm":[{"frequence":{"$":"67"},"term":{"$":"danmark"}},{"frequence":{"$":"24"},"term":{"$":"tyskland"}}]},{"facetName":{"$":"facet.language"},"facetTerm":[{"frequence":{"$":"841"},"term":{"$":"dansk"}},{"frequence":{"$":"170"},"term":{"$":"tysk"}}]},{"facetName":{"$":"facet.level"},"facetTerm":[{"frequence":{"$":"69"},"term":{"$":"alment niveau"}},{"frequence":{"$":"10"},"term":{"$":"fagligt niveau"}}]},{"facetName":{"$":"facet.let"},"facetTerm":[{"frequence":{"$":"5"},"term":{"$":"16"}},{"frequence":{"$":"2"},"term":{"$":"14"}}]},{"facetName":{"$":"facet.literaryForm"},"facetTerm":[{"frequence":{"$":"974"},"term":{"$":"faglitteratur"}},{"frequence":{"$":"162"},"term":{"$":"sk\\u00f8nlitteratur"}}]},{"facetName":{"$":"facet.lix"},"facetTerm":[{"frequence":{"$":"7"},"term":{"$":"07"}},{"frequence":{"$":"2"},"term":{"$":"05"}}]},{"facetName":{"$":"facet.musicSubject"},"facetTerm":[{"frequence":{"$":"46"},"term":{"$":"vokal"}},{"frequence":{"$":"19"},"term":{"$":"b\\u00f8rnemusik"}}]},{"facetName":{"$":"facet.nationality"},"facetTerm":[{"frequence":{"$":"4"},"term":{"$":"amerikanske film"}},{"frequence":{"$":"3"},"term":{"$":"danske film"}}]},{"facetName":{"$":"facet.nonFictionSubject"},"facetTerm":[{"frequence":{"$":"270"},"term":{"$":"ost"}},{"frequence":{"$":"70"},"term":{"$":"mejeribrug"}}]},{"facetName":{"$":"facet.partOf"},"facetTerm":[{"frequence":{"$":"186"},"term":{"$":"m\\u00e6lkeritidende"}},{"frequence":{"$":"55"},"term":{"$":"nordeurop\\u00e6isk mejeri-tidsskrift"}}]},{"facetName":{"$":"facet.period"},"facetTerm":[{"frequence":{"$":"32"},"term":{"$":"1990-1999"}},{"frequence":{"$":"31"},"term":{"$":"2000-2009"}}]},{"facetName":{"$":"facet.primaryCreator"},"facetTerm":[{"frequence":{"$":"76"},"term":{"$":"robert hansen"}},{"frequence":{"$":"27"},"term":{"$":"j. m. buch kristensen"}}]},{"facetName":{"$":"facet.sheetMusic"},"facetTerm":[{"frequence":{"$":"6"},"term":{"$":"alle partiturer"}}]},{"facetName":{"$":"facet.subject"},"facetTerm":[{"frequence":{"$":"529"},"term":{"$":"ost"}},{"frequence":{"$":"83"},"term":{"$":"danmark"}}]},{"facetName":{"$":"facet.titleSeries"},"facetTerm":[{"frequence":{"$":"8"},"term":{"$":"grieben-reisef\\u00fchrer"}},{"frequence":{"$":"5"},"term":{"$":"small world"}}]},{"facetName":{"$":"facet.type"},"facetTerm":[{"frequence":{"$":"448"},"term":{"$":"tidsskriftsartikel"}},{"frequence":{"$":"401"},"term":{"$":"bog"}}]}]},"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"0"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: facets_all.auto', () => {
  it('has same result as recorded (in facets_all.auto)', () => {
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
