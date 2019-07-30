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
      {term: 'begrænset adgang', frequency: 98},
      {term: 'ubegrænset adgang', frequency: 27}
    ],
    acSource: [
      {term: 'bibliotekskatalog', frequency: 737},
      {term: 'tidsskriftsartikler', frequency: 448}
    ],
    audience: [
      {term: 'fra 7 år', frequency: 20},
      {term: 'fra 5 år', frequency: 18}
    ],
    audienceCategory: [
      {term: 'for 7 år', frequency: 41},
      {term: 'for 6 år', frequency: 34}
    ],
    category: [
      {term: 'voksenmaterialer', frequency: 1340},
      {term: 'børnematerialer', frequency: 193}
    ],
    creator: [
      {term: 'robert hansen', frequency: 76},
      {term: 'jannik hastrup', frequency: 37}
    ],
    creatorFunction: [
      {term: 'robert hansen', frequency: 76},
      {term: 'jannik hastrup', frequency: 36}
    ],
    date: [{term: '2000', frequency: 52}, {term: '2002', frequency: 48}],
    dk5: [
      {term: '63.7', frequency: 523},
      {term: 'skønlitteratur', frequency: 146}
    ],
    extraTitles: [{term: 'ekstra titler', frequency: 2}],
    fictionSubject: [
      {term: 'mus', frequency: 38},
      {term: 'sjove bøger', frequency: 19}
    ],
    form: [
      {term: 'opskrifter', frequency: 78},
      {term: 'kogebøger', frequency: 68}
    ],
    gamePlatform: [
      {term: 'gameboy advance', frequency: 1},
      {term: 'pc-spil', frequency: 1}
    ],
    genre: [
      {term: 'sjove bøger', frequency: 19},
      {term: 'rock', frequency: 16}
    ],
    genreCategory: [
      {term: 'nonfiktion', frequency: 1039},
      {term: 'fiktion', frequency: 182}
    ],
    geographic: [
      {term: 'danmark', frequency: 69},
      {term: 'tyskland', frequency: 28}
    ],
    language: [{term: 'dansk', frequency: 963}, {term: 'tysk', frequency: 175}],
    level: [
      {term: 'alment niveau', frequency: 91},
      {term: 'gymnasieniveau', frequency: 19}
    ],
    let: [{term: '16', frequency: 6}, {term: '14', frequency: 2}],
    literaryForm: [
      {term: 'faglitteratur', frequency: 1039},
      {term: 'skønlitteratur', frequency: 182}
    ],
    lix: [{term: '07', frequency: 7}, {term: '05', frequency: 2}],
    musicSubject: [
      {term: 'vokal', frequency: 50},
      {term: 'børnemusik', frequency: 21}
    ],
    nationality: [
      {term: 'amerikanske film', frequency: 4},
      {term: 'danske film', frequency: 3}
    ],
    nonFictionSubject: [
      {term: 'ost', frequency: 284},
      {term: 'mejeribrug', frequency: 69}
    ],
    partOf: [
      {term: 'mælkeritidende', frequency: 186},
      {term: 'nordeuropæisk mejeri-tidsskrift', frequency: 55}
    ],
    period: [
      {term: '2000-2009', frequency: 34},
      {term: '1990-1999', frequency: 33}
    ],
    primaryCreator: [
      {term: 'robert hansen', frequency: 76},
      {term: 'j. m. buch kristensen', frequency: 27}
    ],
    sheetMusic: [{term: 'alle partiturer', frequency: 6}],
    subject: [{term: 'ost', frequency: 545}, {term: 'danmark', frequency: 85}],
    titleSeries: [
      {term: 'grieben-reiseführer', frequency: 8},
      {term: 'small world', frequency: 5}
    ],
    type: [
      {term: 'bog', frequency: 453},
      {term: 'tidsskriftsartikel', frequency: 450}
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
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\"\\n    xmlns:open=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <open:searchRequest>\\n      <open:query>ost</open:query>\\n      <open:agency>710100</open:agency>\\n      <open:profile>opac</open:profile>\\n      <open:facets>\\n        <open:numberOfTerms>2</open:numberOfTerms>\\n        <open:facetSort>count</open:facetSort>\\n        <open:facetMinCount>1</open:facetMinCount>\\n        <open:facetName>facet.access</open:facetName>\\n        <open:facetName>facet.acSource</open:facetName>\\n        <open:facetName>facet.audience</open:facetName>\\n        <open:facetName>facet.audienceCategory</open:facetName>\\n        <open:facetName>facet.branch</open:facetName>\\n        <open:facetName>facet.category</open:facetName>\\n        <open:facetName>facet.creator</open:facetName>\\n        <open:facetName>facet.creatorFunction</open:facetName>\\n        <open:facetName>facet.date</open:facetName>\\n        <open:facetName>facet.department</open:facetName>\\n        <open:facetName>facet.dk5</open:facetName>\\n        <open:facetName>facet.extraTitles</open:facetName>\\n        <open:facetName>facet.fictionSubject</open:facetName>\\n        <open:facetName>facet.form</open:facetName>\\n        <open:facetName>facet.gamePlatform</open:facetName>\\n        <open:facetName>facet.genre</open:facetName>\\n        <open:facetName>facet.genreCategory</open:facetName>\\n        <open:facetName>facet.geographic</open:facetName>\\n        <open:facetName>facet.language</open:facetName>\\n        <open:facetName>facet.level</open:facetName>\\n        <open:facetName>facet.let</open:facetName>\\n        <open:facetName>facet.literaryForm</open:facetName>\\n        <open:facetName>facet.lix</open:facetName>\\n        <open:facetName>facet.musicSubject</open:facetName>\\n        <open:facetName>facet.nationality</open:facetName>\\n        <open:facetName>facet.nonFictionSubject</open:facetName>\\n        <open:facetName>facet.partOf</open:facetName>\\n        <open:facetName>facet.period</open:facetName>\\n        <open:facetName>facet.primaryCreator</open:facetName>\\n        <open:facetName>facet.sheetMusic</open:facetName>\\n        <open:facetName>facet.subject</open:facetName>\\n        <open:facetName>facet.titleSeries</open:facetName>\\n        <open:facetName>facet.type</open:facetName>\\n      </open:facets>\\n      <open:start>1</open:start>\\n      <open:stepValue>0</open:stepValue>\\n      <open:outputType>json</open:outputType>\\n    </open:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"1583"},"collectionCount":{"$":"0"},"more":{"$":"true"},"facetResult":{"facet":[{"facetName":{"$":"facet.access"},"facetTerm":[{"frequence":{"$":"98"},"term":{"$":"begr\\u00e6nset adgang"}},{"frequence":{"$":"27"},"term":{"$":"ubegr\\u00e6nset adgang"}}]},{"facetName":{"$":"facet.acSource"},"facetTerm":[{"frequence":{"$":"737"},"term":{"$":"bibliotekskatalog"}},{"frequence":{"$":"448"},"term":{"$":"tidsskriftsartikler"}}]},{"facetName":{"$":"facet.audience"},"facetTerm":[{"frequence":{"$":"20"},"term":{"$":"fra 7 \\u00e5r"}},{"frequence":{"$":"18"},"term":{"$":"fra 5 \\u00e5r"}}]},{"facetName":{"$":"facet.audienceCategory"},"facetTerm":[{"frequence":{"$":"41"},"term":{"$":"for 7 \\u00e5r"}},{"frequence":{"$":"34"},"term":{"$":"for 6 \\u00e5r"}}]},{"facetName":{"$":"facet.branch"}},{"facetName":{"$":"facet.category"},"facetTerm":[{"frequence":{"$":"1340"},"term":{"$":"voksenmaterialer"}},{"frequence":{"$":"193"},"term":{"$":"b\\u00f8rnematerialer"}}]},{"facetName":{"$":"facet.creator"},"facetTerm":[{"frequence":{"$":"76"},"term":{"$":"robert hansen"}},{"frequence":{"$":"37"},"term":{"$":"jannik hastrup"}}]},{"facetName":{"$":"facet.creatorFunction"},"facetTerm":[{"frequence":{"$":"76"},"term":{"$":"robert hansen"}},{"frequence":{"$":"36"},"term":{"$":"jannik hastrup"}}]},{"facetName":{"$":"facet.date"},"facetTerm":[{"frequence":{"$":"52"},"term":{"$":"2000"}},{"frequence":{"$":"48"},"term":{"$":"2002"}}]},{"facetName":{"$":"facet.department"}},{"facetName":{"$":"facet.dk5"},"facetTerm":[{"frequence":{"$":"523"},"term":{"$":"63.7"}},{"frequence":{"$":"146"},"term":{"$":"sk\\u00f8nlitteratur"}}]},{"facetName":{"$":"facet.extraTitles"},"facetTerm":[{"frequence":{"$":"2"},"term":{"$":"ekstra titler"}}]},{"facetName":{"$":"facet.fictionSubject"},"facetTerm":[{"frequence":{"$":"38"},"term":{"$":"mus"}},{"frequence":{"$":"19"},"term":{"$":"sjove b\\u00f8ger"}}]},{"facetName":{"$":"facet.form"},"facetTerm":[{"frequence":{"$":"78"},"term":{"$":"opskrifter"}},{"frequence":{"$":"68"},"term":{"$":"kogeb\\u00f8ger"}}]},{"facetName":{"$":"facet.gamePlatform"},"facetTerm":[{"frequence":{"$":"1"},"term":{"$":"gameboy advance"}},{"frequence":{"$":"1"},"term":{"$":"pc-spil"}}]},{"facetName":{"$":"facet.genre"},"facetTerm":[{"frequence":{"$":"19"},"term":{"$":"sjove b\\u00f8ger"}},{"frequence":{"$":"16"},"term":{"$":"rock"}}]},{"facetName":{"$":"facet.genreCategory"},"facetTerm":[{"frequence":{"$":"1039"},"term":{"$":"nonfiktion"}},{"frequence":{"$":"182"},"term":{"$":"fiktion"}}]},{"facetName":{"$":"facet.geographic"},"facetTerm":[{"frequence":{"$":"69"},"term":{"$":"danmark"}},{"frequence":{"$":"28"},"term":{"$":"tyskland"}}]},{"facetName":{"$":"facet.language"},"facetTerm":[{"frequence":{"$":"963"},"term":{"$":"dansk"}},{"frequence":{"$":"175"},"term":{"$":"tysk"}}]},{"facetName":{"$":"facet.level"},"facetTerm":[{"frequence":{"$":"91"},"term":{"$":"alment niveau"}},{"frequence":{"$":"19"},"term":{"$":"gymnasieniveau"}}]},{"facetName":{"$":"facet.let"},"facetTerm":[{"frequence":{"$":"6"},"term":{"$":"16"}},{"frequence":{"$":"2"},"term":{"$":"14"}}]},{"facetName":{"$":"facet.literaryForm"},"facetTerm":[{"frequence":{"$":"1039"},"term":{"$":"faglitteratur"}},{"frequence":{"$":"182"},"term":{"$":"sk\\u00f8nlitteratur"}}]},{"facetName":{"$":"facet.lix"},"facetTerm":[{"frequence":{"$":"7"},"term":{"$":"07"}},{"frequence":{"$":"2"},"term":{"$":"05"}}]},{"facetName":{"$":"facet.musicSubject"},"facetTerm":[{"frequence":{"$":"50"},"term":{"$":"vokal"}},{"frequence":{"$":"21"},"term":{"$":"b\\u00f8rnemusik"}}]},{"facetName":{"$":"facet.nationality"},"facetTerm":[{"frequence":{"$":"4"},"term":{"$":"amerikanske film"}},{"frequence":{"$":"3"},"term":{"$":"danske film"}}]},{"facetName":{"$":"facet.nonFictionSubject"},"facetTerm":[{"frequence":{"$":"284"},"term":{"$":"ost"}},{"frequence":{"$":"69"},"term":{"$":"mejeribrug"}}]},{"facetName":{"$":"facet.partOf"},"facetTerm":[{"frequence":{"$":"186"},"term":{"$":"m\\u00e6lkeritidende"}},{"frequence":{"$":"55"},"term":{"$":"nordeurop\\u00e6isk mejeri-tidsskrift"}}]},{"facetName":{"$":"facet.period"},"facetTerm":[{"frequence":{"$":"34"},"term":{"$":"2000-2009"}},{"frequence":{"$":"33"},"term":{"$":"1990-1999"}}]},{"facetName":{"$":"facet.primaryCreator"},"facetTerm":[{"frequence":{"$":"76"},"term":{"$":"robert hansen"}},{"frequence":{"$":"27"},"term":{"$":"j. m. buch kristensen"}}]},{"facetName":{"$":"facet.sheetMusic"},"facetTerm":[{"frequence":{"$":"6"},"term":{"$":"alle partiturer"}}]},{"facetName":{"$":"facet.subject"},"facetTerm":[{"frequence":{"$":"545"},"term":{"$":"ost"}},{"frequence":{"$":"85"},"term":{"$":"danmark"}}]},{"facetName":{"$":"facet.titleSeries"},"facetTerm":[{"frequence":{"$":"8"},"term":{"$":"grieben-reisef\\u00fchrer"}},{"frequence":{"$":"5"},"term":{"$":"small world"}}]},{"facetName":{"$":"facet.type"},"facetTerm":[{"frequence":{"$":"453"},"term":{"$":"bog"}},{"frequence":{"$":"450"},"term":{"$":"tidsskriftsartikel"}}]}]},"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"0"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: facets_all.auto', () => {
  it('has same result as recorded (in facets_all.auto)', () => {
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
