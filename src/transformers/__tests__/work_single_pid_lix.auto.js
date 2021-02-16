// AUTOTEST GENERATOR: {"endpoint":"work","params":{"fields":["lix","dcTitle"],"pids":["870970-basis:50877523"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'work';
const params = { fields: ['lix', 'dcTitle'], pids: ['870970-basis:50877523'] };

const expected = {
  statusCode: 200,
  data: [
    {
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
      lix: ['12']
    }
  ]
};

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.10/',
    openagency: 'http://openagency.addi.dk/2.24/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/2.2/',
    PRODopenorder: 'https://openorder.addi.dk/2.8/',
    openorder: 'https://openorder.addi.dk/test_2.8/',
    opensearch: 'https://opensearch.addi.dk/b3.5_5.0/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    suggest: 'http://ortograf.mcp1-proxy.dbc.dk/ortograf/',
    recommend: 'http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim',
    performance: 'http://elk/elasticsearch',
    communityservice: 'http://localhost:4010/v1',
    cicero: 'https://cicero-fbs.com/rest/external/v1/',
    openformat: 'XXXXX'
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
  '["XXXXX",{"qs":{"pid":"870970-basis:50877523","action":"formatObject","outputFormat":"{\\"fields\\":{\\"lix\\":\\"{lix}\\"}}"}}]':
    '<?xml version="1.0" encoding="UTF-8"?><SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:of="http://oss.dbc.dk/ns/openformat"><SOAP-ENV:Body><of:formatResponse><customDisplay><fields><lix>12</lix></fields></customDisplay></of:formatResponse></SOAP-ENV:Body></SOAP-ENV:Envelope>\n',
  '["opensearch",{"qs":{"action":"getObject","identifier":["870970-basis:50877523"],"agency":"775100","profile":"opac","outputType":"json","objectFormat":["dkabm"]}}]':
    '{"searchResponse":{"result":{"hitCount":{"$":"1"},"collectionCount":{"$":"1"},"more":{"$":"false"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"50877523|870970","@":"ac"},{"$":"9788762721098","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"},{"$":"Pig","@":"dc"}],"title":[{"$":"Gris","@":"dc"},{"$":"Gris","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Husdyr","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"creator":[{"$":"Katie Dicker","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Dicker, Katie","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"63.64","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Svin","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"for 5 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 6 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 7 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 8 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"let at l\\u00e6se","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"svin","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"description":[{"$":"Indhold: Min verden ; K\\u00f8le ned ; Fra hoved til hale ; T\\u00e6nder og \\u00f8rer ; Pasning ; Spisetid ; Unger ; Mad fra grise ; Grise verden rundt ; Vidste du det?","@":"dc"}],"audience":[{"$":"folkeskoleniveau","@":"dcterms"},{"$":"f\\u00f8rskoleniveau","@":"dcterms"},{"$":"fra 5 \\u00e5r","@type":{"$":"dkdcplus:age","@":"xsi"},"@":"dcterms"},{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"version":[{"$":"1. oplag (2014)","@":"dkdcplus"}],"publisher":[{"$":"Flachs","@":"dc"}],"contributor":[{"$":"Anette Hellemann","@type":{"$":"dkdcplus:trl","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"24 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:50877523"},"primaryObjectIdentifier":{"$":"870970-basis:50877523"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]}}],"facetResult":{"$":""},"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"1"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

import Provider from '../../provider/Provider.js';
import { assert, fail } from 'chai';
const provider = Provider();

describe('Automated test: work_single_pid_lix.auto', () => {
  it('has same result as recorded (in work_single_pid_lix.auto)', () => {
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
