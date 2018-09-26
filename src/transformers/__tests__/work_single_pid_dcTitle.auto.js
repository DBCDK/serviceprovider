// AUTOTEST GENERATOR: {"endpoint":"work","params":{"pids":["870970-basis:28448716"],"fields":["dcTitle"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'work';
const params = {pids: ['870970-basis:28448716'], fields: ['dcTitle']};

const expected = {
  statusCode: 200,
  data: [
    {
      acIdentifier: ['28448716|870970'],
      identifierISBN: ['9788758808994'],
      acSource: ['Bibliotekskatalog'],
      dcTitle: ['Kadavermarch'],
      dcTitleFull: ['Kadavermarch'],
      creatorAut: ['Dennis Jürgensen'],
      creatorSort: ['Jürgensen, Dennis'],
      subjectDK5Text: ['Skønlitteratur'],
      subjectDBCN: ['for 13 år', 'for 14 år', 'for 15 år', 'for 16 år'],
      subjectDBCS: ['gys', 'splatter', 'zombier'],
      subjectGenre: ['gys'],
      subjectDK5: ['sk'],
      abstract: [
        'Rundt om på jorden genopstår de døde som kødædende zombier pga. gensplejsnings-eksperimenter. Bagmændene - en lille gruppe internationale velhavere - har forskanset sig på "Isslottet" i det nordvestlige Sjælland. Da fattigrøvene opdager det, starter en blodig kamp for overlevelse'
      ],
      audienceAge: ['fra 13 år'],
      audience: ['børnematerialer'],
      version: ['3. udgave, 1. oplag (2010)'],
      publisher: ['Tellerup.dk'],
      date: ['2010'],
      typeBibDKType: ['Bog'],
      extent: ['379 sider'],
      languageISO6392: ['dan'],
      dcLanguage: ['Dansk']
    }
  ]
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
  '["opensearch",{"qs":{"action":"getObject","identifier":["870970-basis:28448716"],"agency":"710100","profile":"opac","outputType":"json","objectFormat":["dkabm"]}}]':
    '{"searchResponse":{"result":{"hitCount":{"$":"1"},"collectionCount":{"$":"1"},"more":{"$":"false"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"28448716|870970","@":"ac"},{"$":"9788758808994","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Kadavermarch","@":"dc"},{"$":"Kadavermarch","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Dennis J\\u00fcrgensen","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"J\\u00fcrgensen, Dennis","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"Sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"for 13 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 14 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 15 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 16 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"gys","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"gys","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"sk","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"splatter","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"zombier","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Rundt om p\\u00e5 jorden genopst\\u00e5r de d\\u00f8de som k\\u00f8d\\u00e6dende zombier pga. gensplejsnings-eksperimenter. Bagm\\u00e6ndene - en lille gruppe internationale velhavere - har forskanset sig p\\u00e5 \\"Isslottet\\" i det nordvestlige Sj\\u00e6lland. Da fattigr\\u00f8vene opdager det, starter en blodig kamp for overlevelse","@":"dcterms"}],"audience":[{"$":"fra 13 \\u00e5r","@type":{"$":"dkdcplus:age","@":"xsi"},"@":"dcterms"},{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"version":[{"$":"3. udgave, 1. oplag (2010)","@":"dkdcplus"}],"publisher":[{"$":"Tellerup.dk","@":"dc"}],"date":[{"$":"2010","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"379 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:28448716"},"primaryObjectIdentifier":{"$":"870970-basis:28448716"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]}}],"facetResult":{"$":""},"statInfo":{"fedoraRecordsCached":{"$":"1"},"fedoraRecordsRead":{"$":"0"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: work_single_pid_dcTitle.auto', () => {
  it('has same result as recorded (in work_single_pid_dcTitle.auto)', () => {
    assert(
      Date.now() < +new Date('2018-11-18'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
