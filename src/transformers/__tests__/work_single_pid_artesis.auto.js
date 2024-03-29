// AUTOTEST GENERATOR: {"endpoint":"work","params":{"fields":["dcTitle","artesisShelfmark","artesisShelfmarkPrefix","artesisShelfmarkExtra"],"pids":["870970-basis:06442315"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'work';
const params = {
  fields: [
    'dcTitle',
    'artesisShelfmark',
    'artesisShelfmarkPrefix',
    'artesisShelfmarkExtra'
  ],
  pids: ['870970-basis:06442315']
};

const expected = {
  statusCode: 200,
  data: [
    {
      acIdentifier: ['06442315|870970'],
      identifierISBN: ['87-88999-00-9'],
      acSource: ['Bibliotekskatalog'],
      dcTitle: ['Folk i bevægelse'],
      dcTitleFull: [
        'Folk i bevægelse : folkelig vækkelse, politik og andelsfællesskab i Nordvestjylland'
      ],
      creatorAut: ['Henning Ringgaard Lauridsen'],
      creatorSort: ['Ringgaard Lauridsen, Henning'],
      subjectDK5: ['46.4 Ringkøbing Amt'],
      subjectDK5Text: ['Enkelte lokaliteter uden for København'],
      subjectDBCF: [
        'andelsbevægelsen',
        'folkelige bevægelser',
        'folkeoplysning',
        'historie'
      ],
      subject: ['grundtvigianisme'],
      abstract: [
        'Skildring af den jævne, vestjyske befolknings mangeartede initiativer i sidste del af 1800-tallet, bl. a. i Andelsbevægelsen, de religiøse samfund, det politiske og kulturelle liv'
      ],
      audience: ['voksenmaterialer'],
      version: ['1. udgave, 2. oplag'],
      publisher: ['Dalhus'],
      date: ['1986'],
      typeBibDKType: ['Bog'],
      format: ['illustreret'],
      extent: ['217 sider'],
      languageISO6392: ['dan'],
      dcLanguage: ['dansk'],
      spatialDBCF: ['Ringkøbing Amt', 'Vestjylland'],
      temporalDBCP: [
        '1870-1879',
        '1880-1889',
        '1890-1899',
        '1900-1909',
        '1910-1919'
      ],
      artesisShelfmark: ['Rin'],
      artesisShelfmarkPrefix: ['46.4'],
      artesisShelfmarkExtra: ['Ringkøbing Amt']
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
    recommend:
      'http://recomole-1-0.mi-prod.svc.cloud.dbc.dk/recomole/loan-cosim',
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
  '["http://openformat-php-master.frontend-prod.svc.cloud.dbc.dk/server.php",{"qs":{"pid":"870970-basis:06442315","action":"formatObject","outputFormat":"{\\"fields\\":{\\"artesisShelfmark\\":\\"{artesis_shelfmark}\\",\\"artesisShelfmarkPrefix\\":\\"{artesis_shelfmark_prefix}\\",\\"artesisShelfmarkExtra\\":\\"{artesis_shelfmark_extra}\\"}}"}}]':
    '<?xml version="1.0" encoding="UTF-8"?><SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:of="http://oss.dbc.dk/ns/openformat" xmlns="http://oss.dbc.dk/ns/openformat"><SOAP-ENV:Body><of:formatResponse><customDisplay><fields><artesisShelfmark>Rin</artesisShelfmark><artesisShelfmarkPrefix>46.4</artesisShelfmarkPrefix><artesisShelfmarkExtra>Ringkøbing Amt</artesisShelfmarkExtra></fields></customDisplay></of:formatResponse></SOAP-ENV:Body></SOAP-ENV:Envelope>\n',
  '["opensearch",{"qs":{"action":"getObject","identifier":["870970-basis:06442315"],"agency":"775100","profile":"opac","outputType":"json","objectFormat":["dkabm"]}}]':
    '{"searchResponse":{"result":{"hitCount":{"$":"1"},"collectionCount":{"$":"1"},"more":{"$":"false"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"06442315|870970","@":"ac"},{"$":"87-88999-00-9","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Folk i bev\\u00e6gelse","@":"dc"},{"$":"Folk i bev\\u00e6gelse : folkelig v\\u00e6kkelse, politik og andelsf\\u00e6llesskab i Nordvestjylland","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Henning Ringgaard Lauridsen","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Ringgaard Lauridsen, Henning","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"46.4 Ringk\\u00f8bing Amt","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Enkelte lokaliteter uden for K\\u00f8benhavn","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"andelsbev\\u00e6gelsen","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"folkelige bev\\u00e6gelser","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"folkeoplysning","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"grundtvigianisme","@":"dc"},{"$":"historie","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Skildring af den j\\u00e6vne, vestjyske befolknings mangeartede initiativer i sidste del af 1800-tallet, bl. a. i Andelsbev\\u00e6gelsen, de religi\\u00f8se samfund, det politiske og kulturelle liv","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"1. udgave, 2. oplag","@":"dkdcplus"}],"publisher":[{"$":"Dalhus","@":"dc"}],"date":[{"$":"1986","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"217 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"dansk","@":"dc"}],"spatial":[{"$":"Ringk\\u00f8bing Amt","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dcterms"},{"$":"Vestjylland","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dcterms"}],"temporal":[{"$":"1870-1879","@type":{"$":"dkdcplus:DBCP","@":"xsi"},"@":"dcterms"},{"$":"1880-1889","@type":{"$":"dkdcplus:DBCP","@":"xsi"},"@":"dcterms"},{"$":"1890-1899","@type":{"$":"dkdcplus:DBCP","@":"xsi"},"@":"dcterms"},{"$":"1900-1909","@type":{"$":"dkdcplus:DBCP","@":"xsi"},"@":"dcterms"},{"$":"1910-1919","@type":{"$":"dkdcplus:DBCP","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:06442315"},"primaryObjectIdentifier":{"$":"870970-basis:06442315"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]}}],"facetResult":{"$":""},"statInfo":{"fedoraRecordsCached":{"$":"1"},"fedoraRecordsRead":{"$":"0"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","bibdk":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput\\/bibliotekdkdisplay","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: work_single_pid_artesis.auto', () => {
  it('has same result as recorded (in work_single_pid_artesis.auto)', () => {
    assert(
      Date.now() < +new Date('2025-01-01'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
