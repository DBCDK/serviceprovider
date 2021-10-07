// AUTOTEST GENERATOR: {"endpoint":"work","params":{"fields":["pid","dcTitle","coverUrlFull"],"pids":["870970-basis:47051649"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'work';
const params = {
  fields: ['pid', 'dcTitle', 'coverUrlFull'],
  pids: ['870970-basis:47051649']
};

const expected = {
  statusCode: 500,
  error:
    'CoverUrls could not be fetched. Server probably unavailable. Try request again without coverUrls.',
  data: [
    {
      acIdentifier: ['47051649|870970'],
      identifierISBN: ['9788740053692'],
      acSource: ['Bibliotekskatalog'],
      dcTitle: ['Pigen under træet'],
      dcTitleFull: ['Pigen under træet : krimi'],
      titleSeries: ['En Louise Rick-krimi', 'Krimiserien med Louise Rick ; 10'],
      creatorAut: ['Sara Blædel'],
      creatorSort: ['Blædel, Sara'],
      subjectDK5Text: ['Skønlitteratur'],
      subjectDBCS: [
        'efterforskning',
        'fortiden',
        'lejrskoler',
        'piger',
        'selvmord',
        'ungdom',
        'venskab'
      ],
      subjectDBCO: ['krimi'],
      subjectGenre: ['krimi'],
      subjectDK5: ['sk'],
      abstract: [
        'Krimi. Louise Rick efterforsker en mordsag, hvor liget af en ung pige er blevet fundet i en klippesprække på Bornholm. Pigen forsvandt sporløst fra en lejrskoletur i 1995'
      ],
      audience: ['voksenmaterialer'],
      version: ['1. udgave, 1. oplag (2019)'],
      publisher: ['Politiken'],
      date: ['2019'],
      typeBibDKType: ['Bog'],
      extent: ['318 sider'],
      languageISO6392: ['dan'],
      dcLanguage: ['Dansk'],
      spatialDBCS: ['Danmark', 'København', 'Bornholm'],
      temporalDBCP: ['1990-1999', '2010-2019'],
      accessType: ['physical'],
      creator: ['Sara Blædel'],
      fedoraPid: ['870970-basis:47051649'],
      pid: ['870970-basis:47051649'],
      language: ['Dansk'],
      title: ['Pigen under træet'],
      titleFull: ['Pigen under træet : krimi'],
      type: ['Bog'],
      workType: ['book']
    }
  ]
};

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.10/',
    openagency: 'http://openagency.addi.dk/2.24/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/2.2/',
    PRODopenorder: 'https://openorder.addi.dk/3.0',
    openorder: 'https://openorder.addi.dk/test_3.0',
    opensearch: 'https://opensearch.addi.dk/b3.5_5.2/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    suggest: 'http://ortograf.mcp1-proxy.dbc.dk/ortograf/',
    recommend: 'http://booklens-1-1.mi-prod.svc.cloud.dbc.dk/',
    performance: 'http://elk/elasticsearch',
    cicero: 'https://cicero-fbs.com/rest/external/v1/',
    openformat:
      'http://openformat-php-develop.frontend-features.svc.cloud.dbc.dk/server.php',
    holdingsitems:
      'http://holdings-items-content-service.cisterne.svc.cloud.dbc.dk/holdings-items-content-service/api',
    infomediaservice: 'http://infomedia.mcp1-proxy.dbc.dk/server.php',
    workpresentation:
      'http://work-presentation-service.cisterne.svc.cloud.dbc.dk/api/work-presentation'
  },
  access: {'0': 'moreinfo'},
  cicero: {'DK-710100': 'XXXXX'},
  performance: {username: 'XXXXX', password: 'XXXXX'},
  search: {agency: '775100', profile: 'opac', collectionidentifiers: ''},
  storage: {user: 'XXXXX'},
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
    clientId: 'XclientIdX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk',
    ips: {'0': 'XXXXX'},
    access_token: 'XXXXX'
  }
};
const mockData = {
  '["moreinfo",{"qs":{"action":"moreInfo","authenticationUser":"XXXXX","authenticationGroup":"XXXXX","authenticationPassword":"XXXXX","pidList":"870970-basis:47051649","outputType":"json"}}]':
    '<html><body><h1>404 Not Found</h1>\nThe requested resource could not be found\n</body></html>\n\n',
  '["opensearch",{"qs":{"action":"getObject","identifier":["870970-basis:47051649"],"agency":"775100","profile":"opac","outputType":"json","trackingId":"OP:XclientIdX","objectFormat":["briefDisplay","dkabm"]}}]':
    '{"searchResponse":{"result":{"hitCount":{"$":"1"},"collectionCount":{"$":"1"},"more":{"$":"false"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"47051649|870970","@":"ac"},{"$":"9788740053692","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Pigen under tr\\u00e6et","@":"dc"},{"$":"Pigen under tr\\u00e6et : krimi","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"En Louise Rick-krimi","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"},{"$":"Krimiserien med Louise Rick ; 10","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"creator":[{"$":"Sara Bl\\u00e6del","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Bl\\u00e6del, Sara","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"Sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"efterforskning","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"fortiden","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"krimi","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"krimi","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"lejrskoler","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"piger","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"selvmord","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"sk","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"ungdom","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"venskab","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Krimi. Louise Rick efterforsker en mordsag, hvor liget af en ung pige er blevet fundet i en klippespr\\u00e6kke p\\u00e5 Bornholm. Pigen forsvandt sporl\\u00f8st fra en lejrskoletur i 1995","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"1. udgave, 1. oplag (2019)","@":"dkdcplus"}],"publisher":[{"$":"Politiken","@":"dc"}],"date":[{"$":"2019","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"318 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"spatial":[{"$":"Danmark","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"},{"$":"K\\u00f8benhavn","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"},{"$":"Bornholm","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"temporal":[{"$":"1990-1999","@type":{"$":"dkdcplus:DBCP","@":"xsi"},"@":"dcterms"},{"$":"2010-2019","@type":{"$":"dkdcplus:DBCP","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:47051649"},"primaryObjectIdentifier":{"$":"870970-basis:47051649"},"recordStatus":{"$":"active"},"creationDate":{"$":"2019-09-03"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Sara Bl\\u00e6del"},"fedoraPid":{"$":"870970-basis:47051649"},"identifier":{"$":"870970-basis:47051649"},"language":{"$":"Dansk"},"title":{"$":"Pigen under tr\\u00e6et"},"titleFull":{"$":"Pigen under tr\\u00e6et : krimi"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}}],"facetResult":{"$":""},"statInfo":{"fedoraRecordsCached":{"$":"1"},"fedoraRecordsRead":{"$":"0"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","bibdk":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput\\/bibliotekdkdisplay","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: work_client_has_not_moreinfo_access.auto', () => {
  it('has same result as recorded (in work_client_has_not_moreinfo_access.auto)', () => {
    assert(
      Date.now() < +new Date('2022-01-05'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
