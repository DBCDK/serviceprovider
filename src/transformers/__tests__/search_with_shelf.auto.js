// AUTOTEST GENERATOR: {"endpoint":"search","params":{"q":"870970-basis:50877523","fields":["shelfmark","shelfmarkPrefix","title"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'search';
const params = {
  q: '870970-basis:50877523',
  fields: ['shelfmark', 'shelfmarkPrefix', 'title']
};

const expected = {
  statusCode: 200,
  data: [
    {
      collection: ['870970-basis:50877523', '870970-basis:53562450'],
      collectionDetails: [
        {
          accessType: ['physical'],
          creator: ['Katie Dicker'],
          pid: ['870970-basis:50877523'],
          language: ['Dansk'],
          title: ['Gris'],
          titleFull: ['Gris'],
          type: ['Bog'],
          workType: ['book']
        },
        {
          accessType: ['online'],
          creator: ['Katie Dicker'],
          pid: ['870970-basis:53562450'],
          language: ['Dansk'],
          title: ['Gris'],
          titleFull: ['Gris'],
          type: ['Ebog'],
          workType: ['book']
        }
      ],
      acIdentifier: ['50877523|870970'],
      identifierISBN: ['9788762721098'],
      acSource: ['Bibliotekskatalog'],
      source: ['Pig'],
      dcTitle: ['Gris'],
      dcTitleFull: ['Gris'],
      titleSeries: ['Husdyr'],
      creatorAut: ['Katie Dicker'],
      creatorSort: ['Dicker, Katie'],
      subjectDK5: ['63.64'],
      subjectDK5Text: ['Svin'],
      subjectDBCN: [
        'for 5 år',
        'for 6 år',
        'for 7 år',
        'for 8 år',
        'let at læse'
      ],
      subjectDBCF: ['svin'],
      description: [
        'Indhold: Min verden ; Køle ned ; Fra hoved til hale ; Tænder og ører ; Pasning ; Spisetid ; Unger ; Mad fra grise ; Grise verden rundt ; Vidste du det?'
      ],
      audience: ['folkeskoleniveau', 'førskoleniveau', 'børnematerialer'],
      audienceAge: ['fra 5 år'],
      version: ['1. oplag (2014)'],
      publisher: ['Flachs'],
      contributorTrl: ['Anette Hellemann'],
      date: ['2014'],
      typeBibDKType: ['Bog'],
      format: ['illustreret i farver'],
      extent: ['24 sider'],
      languageISO6392: ['dan'],
      dcLanguage: ['Dansk'],
      accessType: ['physical'],
      creator: ['Katie Dicker'],
      pid: ['870970-basis:50877523'],
      language: ['Dansk'],
      title: ['Gris'],
      titleFull: ['Gris'],
      type: ['Bog'],
      workType: ['book'],
      shelfmark: ['Dicker'],
      shelfmarkPrefix: ['63.64']
    }
  ]
};

const context = {
  services: {
    cicero: 'https://cicero-fbs.com/rest/external/v1/',
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.11/',
    openagency: 'https://openagency.addi.dk/2.34/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/3.0/',
    openformat: 'XXXXX',
    openorder: 'https://openorder.addi.dk/3.0',
    opensearch: 'https://opensearch.addi.dk/b3.5_5.0/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.9/',
    rank: 'https://xptest.dbc.dk/ms/rank/v1',
    suggestpopular: 'XXXXX',
    suggestcreator: 'XXXXX',
    suggestlibrary: 'XXXXX',
    suggestsubject: 'XXXXX',
    suggest: 'http://ortograf-service-1-0.mi-prod.svc.cloud.dbc.dk/ortograf/',
    recommend:
      'http://recomole-1-0.mi-prod.svc.cloud.dbc.dk/recomole/loan-cosim',
    performance: 'https://elk-p01.dbc.dk:9100/prod_ux-*/',
    recommendurls: 'XXXXX'
  },
  cicero: { 'DK-710100': 'XXXXX' },
  performance: { username: 'XXXXX', password: 'XXXXX' },
  communityservice: { id: 1 },
  search: { agency: '775100', profile: 'opac', collectionidentifiers: '' },
  storage: { user: 'XXXXX' },
  netpunkt: { user: 'XXXXX', group: 'XXXXX', password: 'XXXXX' },
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
  '["XXXXX",{"qs":{"pid":"870970-basis:50877523","action":"formatObject","outputFormat":"{\\"fields\\":{\\"shelfmark\\":\\"{ddb_shelfmark}\\",\\"shelfmarkPrefix\\":\\"{ddb_shelfmark_prefix}\\"}}"}}]':
    '<?xml version="1.0" encoding="UTF-8"?><SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:of="http://oss.dbc.dk/ns/openformat"><SOAP-ENV:Body><of:formatResponse><customDisplay><fields><shelfmark>Dicker</shelfmark><shelfmarkPrefix>63.64</shelfmarkPrefix></fields></customDisplay></of:formatResponse></SOAP-ENV:Body></SOAP-ENV:Envelope>\n',
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:ns1=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>870970-basis:50877523</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>10</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>0</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"1"},"collectionCount":{"$":"1"},"more":{"$":"false"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"50877523|870970","@":"ac"},{"$":"9788762721098","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"},{"$":"Pig","@":"dc"}],"title":[{"$":"Gris","@":"dc"},{"$":"Gris","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Husdyr","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"creator":[{"$":"Katie Dicker","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Dicker, Katie","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"63.64","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Svin","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"for 5 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 6 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 7 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 8 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"let at l\\u00e6se","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"svin","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"description":[{"$":"Indhold: Min verden ; K\\u00f8le ned ; Fra hoved til hale ; T\\u00e6nder og \\u00f8rer ; Pasning ; Spisetid ; Unger ; Mad fra grise ; Grise verden rundt ; Vidste du det?","@":"dc"}],"audience":[{"$":"folkeskoleniveau","@":"dcterms"},{"$":"f\\u00f8rskoleniveau","@":"dcterms"},{"$":"fra 5 \\u00e5r","@type":{"$":"dkdcplus:age","@":"xsi"},"@":"dcterms"},{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"version":[{"$":"1. oplag (2014)","@":"dkdcplus"}],"publisher":[{"$":"Flachs","@":"dc"}],"contributor":[{"$":"Anette Hellemann","@type":{"$":"dkdcplus:trl","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"24 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:50877523"},"primaryObjectIdentifier":{"$":"870970-basis:50877523"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:50877523"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Katie Dicker"},"fedoraPid":{"$":"870970-basis:50877523"},"identifier":{"$":"870970-basis:50877523"},"language":{"$":"Dansk"},"title":{"$":"Gris"},"titleFull":{"$":"Gris"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}}],"facetResult":{"$":""},"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"1"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}',
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:ns1=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>870970-basis:50877523</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>10</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>1</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"1"},"collectionCount":{"$":"1"},"more":{"$":"false"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"2"},"object":[{"record":{"identifier":[{"$":"50877523|870970","@":"ac"},{"$":"9788762721098","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"},{"$":"Pig","@":"dc"}],"title":[{"$":"Gris","@":"dc"},{"$":"Gris","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Husdyr","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"creator":[{"$":"Katie Dicker","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Dicker, Katie","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"63.64","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Svin","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"for 5 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 6 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 7 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 8 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"let at l\\u00e6se","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"svin","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"description":[{"$":"Indhold: Min verden ; K\\u00f8le ned ; Fra hoved til hale ; T\\u00e6nder og \\u00f8rer ; Pasning ; Spisetid ; Unger ; Mad fra grise ; Grise verden rundt ; Vidste du det?","@":"dc"}],"audience":[{"$":"folkeskoleniveau","@":"dcterms"},{"$":"f\\u00f8rskoleniveau","@":"dcterms"},{"$":"fra 5 \\u00e5r","@type":{"$":"dkdcplus:age","@":"xsi"},"@":"dcterms"},{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"version":[{"$":"1. oplag (2014)","@":"dkdcplus"}],"publisher":[{"$":"Flachs","@":"dc"}],"contributor":[{"$":"Anette Hellemann","@type":{"$":"dkdcplus:trl","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"24 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:50877523"},"primaryObjectIdentifier":{"$":"870970-basis:50877523"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:50877523"}]}},{"identifier":{"$":"870970-basis:53562450"},"creationDate":{"$":"2017-10-11"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Katie Dicker"},"fedoraPid":{"$":"870970-basis:50877523"},"identifier":{"$":"870970-basis:50877523"},"language":{"$":"Dansk"},"title":{"$":"Gris"},"titleFull":{"$":"Gris"},"type":{"$":"Bog"},"workType":{"$":"book"}},{"accessType":{"$":"online"},"creator":{"$":"Katie Dicker"},"fedoraPid":{"$":"870970-basis:53562450"},"identifier":{"$":"870970-basis:53562450"},"language":{"$":"Dansk"},"title":{"$":"Gris"},"titleFull":{"$":"Gris"},"type":{"$":"Ebog"},"workType":{"$":"book"}}]}}}],"facetResult":{"$":""},"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"2"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

import Provider from '../../provider/Provider.js';
import { assert, fail } from 'chai';
const provider = Provider();

describe('Automated test: search_with_shelf.auto', () => {
  it('has same result as recorded (in search_with_shelf.auto)', () => {
    assert(
      Date.now() < +new Date('2022-01-01'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
