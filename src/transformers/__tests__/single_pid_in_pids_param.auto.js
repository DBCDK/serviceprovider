// AUTOTEST GENERATOR: {"endpoint":"work","params":{"fields":["dcTitle","creator","pid"],"pids":["870970-basis:25775481"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'work';
const params = {
  fields: ['dcTitle', 'creator', 'pid'],
  pids: ['870970-basis:25775481']
};

const expected = {
  statusCode: 200,
  data: [
    {
      acIdentifier: ['25775481|870970'],
      identifierISBN: ['87-02-03555-3'],
      acSource: ['Bibliotekskatalog'],
      source: ['Doppler'],
      dcTitle: ['Doppler'],
      dcTitleFull: ['Doppler : roman'],
      creatorAut: ['Erlend Loe'],
      creatorSort: ['Loe, Erlend'],
      subjectDK5Text: ['Skønlitteratur'],
      subjectDBCS: [
        'familien',
        'humor',
        'ironi',
        'midtvejskriser',
        'samfundssatire'
      ],
      subjectGenre: ['humor', 'samfundssatire'],
      subjectDK5: ['sk'],
      abstract: [
        'Doppler, som er en velfungerende borger, beslutter pludselig, at han må finde sig selv, opgiver job og ægteskab og flytter ud i skoven omkring Oslo for at finde sig selv, i selskab med en elgkalv og i pagt med naturen, mens han tænker over udviklingen i samfundet og hans eget ægteskab'
      ],
      descriptionSeries: [
        'Samhørende: Doppler ; Volvo lastvagnar ; Enden på verden som vi kender den'
      ],
      audience: ['voksenmaterialer'],
      version: ['3. oplag (2005)'],
      publisher: ['Gyldendal'],
      date: ['2005'],
      typeBibDKType: ['Bog'],
      extent: ['175 sider'],
      languageISO6392: ['dan'],
      dcLanguage: ['Dansk'],
      spatialDBCS: ['Norge', 'Oslo'],
      accessType: ['physical'],
      creator: ['Erlend Loe'],
      fedoraPid: ['870970-basis:25775481'],
      pid: ['870970-basis:25775481'],
      language: ['Dansk'],
      title: ['Doppler'],
      titleFull: ['Doppler : roman'],
      type: ['Bog'],
      workType: ['book']
    }
  ]
};

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.11/',
    openagency: 'https://openagency.addi.dk/2.34/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/3.0/',
    PRODopenorder: 'https://openorder.addi.dk/3.0',
    openorder: 'https://openorder.addi.dk/3.0',
    opensearch: 'https://opensearch.addi.dk/b3.5_5.2/',
    openuserstatus: 'https://openuserstatus.addi.dk/2.0/',
    suggest: 'http://ortograf-service-1-0.mi-prod.svc.cloud.dbc.dk/ortograf/',
    recommend: 'http://booklens-190101-1-0.mi-prod.svc.cloud.dbc.dk/',
    performance: 'https://elk.dbc.dk:9100/k8s-frontend-prod-*/',
    cicero: 'https://cicero-fbs.com/rest/external/v1/',
    openformat:
      'http://openformat-php-master.frontend-prod.svc.cloud.dbc.dk/server.php',
    holdingsitems:
      'http://holdings-items-content-service.cisterne.svc.cloud.dbc.dk/holdings-items-content-service/api',
    infomediaservice: 'http://infomedia.mcp1-proxy.dbc.dk/server.php'
  },
  infomedia: {userId: 'XXXXX', libraryCode: 'XXXXX'},
  cicero: {'DK-710100': 'XXXXX'},
  performance: {username: 'XXXXX', password: 'XXXXX'},
  search: {agency: '775100', profile: 'opac', collectionidentifiers: ''},
  storage: {user: 'XXXXX'},
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
  user: {
    id: 'XXXXX',
    salt: 'XXXXX',
    pin: 'XXXXX',
    libraryId: '790900',
    agency: '790900',
    isil: 'DK-790900'
  },
  app: {
    clientId: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  }
};
const mockData = {
  '["opensearch",{"qs":{"action":"getObject","identifier":["870970-basis:25775481"],"agency":"775100","profile":"opac","outputType":"json","objectFormat":["briefDisplay","dkabm"]}}]':
    '{"searchResponse":{"result":{"hitCount":{"$":"1"},"collectionCount":{"$":"1"},"more":{"$":"false"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"25775481|870970","@":"ac"},{"$":"87-02-03555-3","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"},{"$":"Doppler","@":"dc"}],"title":[{"$":"Doppler","@":"dc"},{"$":"Doppler : roman","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Erlend Loe","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Loe, Erlend","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"Sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"familien","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"humor","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"humor","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"ironi","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"midtvejskriser","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"samfundssatire","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"samfundssatire","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"sk","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Doppler, som er en velfungerende borger, beslutter pludselig, at han m\\u00e5 finde sig selv, opgiver job og \\u00e6gteskab og flytter ud i skoven omkring Oslo for at finde sig selv, i selskab med en elgkalv og i pagt med naturen, mens han t\\u00e6nker over udviklingen i samfundet og hans eget \\u00e6gteskab","@":"dcterms"}],"description":[{"$":"Samh\\u00f8rende: Doppler ; Volvo lastvagnar ; Enden p\\u00e5 verden som vi kender den","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"3. oplag (2005)","@":"dkdcplus"}],"publisher":[{"$":"Gyldendal","@":"dc"}],"date":[{"$":"2005","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"175 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"spatial":[{"$":"Norge","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"},{"$":"Oslo","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:25775481"},"primaryObjectIdentifier":{"$":"870970-basis:25775481"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Erlend Loe"},"fedoraPid":{"$":"870970-basis:25775481"},"identifier":{"$":"870970-basis:25775481"},"language":{"$":"Dansk"},"title":{"$":"Doppler"},"titleFull":{"$":"Doppler : roman"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}}],"facetResult":{"$":""},"statInfo":{"fedoraRecordsCached":{"$":"1"},"fedoraRecordsRead":{"$":"0"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","bibdk":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput\\/bibliotekdkdisplay","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: single_pid_in_pids_param.auto', () => {
  it('has same result as recorded (in single_pid_in_pids_param.auto)', () => {
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
