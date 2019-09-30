// AUTOTEST GENERATOR: {"endpoint":"work","params":{"fields":["lix","pid"],"pids":["870970-basis:51642899","870970-basis:50877523"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'work';
const params = {
  fields: ['lix', 'pid'],
  pids: ['870970-basis:51642899', '870970-basis:50877523']
};

const expected = {
  statusCode: 200,
  data: [
    {
      accessType: ['physical'],
      creator: ['Anthony Doerr'],
      fedoraPid: ['870970-basis:51642899'],
      pid: ['870970-basis:51642899'],
      language: ['Dansk'],
      title: ['Alt det lys vi ikke ser'],
      titleFull: ['Alt det lys vi ikke ser : roman'],
      type: ['Bog'],
      workType: ['book'],
      lix: ['12']
    },
    {
      accessType: ['physical'],
      creator: ['Katie Dicker'],
      fedoraPid: ['870970-basis:50877523'],
      pid: ['870970-basis:50877523'],
      language: ['Dansk'],
      title: ['Gris'],
      titleFull: ['Gris'],
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
  cicero: {'DK-710100': 'XXXXX'},
  performance: {username: 'XXXXX', password: 'XXXXX'},
  communityservice: {id: 1},
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
    clientId: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  }
};
const mockData = {
  '["XXXXX",{"qs":{"action":"formatObject","pid":"870970-basis:50877523","outputFormat":"{\\"fields\\":{\\"lix\\":\\"{lix}\\"}}"}}]':
    '<?xml version="1.0" encoding="UTF-8"?><SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:of="http://oss.dbc.dk/ns/openformat"><SOAP-ENV:Body><of:formatResponse><customDisplay><fields><lix>12</lix></fields></customDisplay></of:formatResponse></SOAP-ENV:Body></SOAP-ENV:Envelope>\n',
  '["XXXXX",{"qs":{"action":"formatObject","pid":"870970-basis:51642899","outputFormat":"{\\"fields\\":{\\"lix\\":\\"{lix}\\"}}"}}]':
    '<?xml version="1.0" encoding="UTF-8"?><SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:of="http://oss.dbc.dk/ns/openformat"><SOAP-ENV:Body><of:formatResponse><customDisplay><fields></fields></customDisplay></of:formatResponse></SOAP-ENV:Body></SOAP-ENV:Envelope>\n',
  '["opensearch",{"qs":{"action":"getObject","identifier":["870970-basis:51642899","870970-basis:50877523"],"agency":"775100","profile":"opac","outputType":"json","objectFormat":["briefDisplay"]}}]':
    '{"searchResponse":{"result":{"hitCount":{"$":"2"},"collectionCount":{"$":"2"},"more":{"$":"false"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"1"},"object":[{"identifier":{"$":"870970-basis:51642899"},"primaryObjectIdentifier":{"$":"870970-basis:51642899"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Anthony Doerr"},"fedoraPid":{"$":"870970-basis:51642899"},"identifier":{"$":"870970-basis:51642899"},"language":{"$":"Dansk"},"title":{"$":"Alt det lys vi ikke ser"},"titleFull":{"$":"Alt det lys vi ikke ser : roman"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"2"},"numberOfObjects":{"$":"1"},"object":[{"identifier":{"$":"870970-basis:50877523"},"primaryObjectIdentifier":{"$":"870970-basis:50877523"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Katie Dicker"},"fedoraPid":{"$":"870970-basis:50877523"},"identifier":{"$":"870970-basis:50877523"},"language":{"$":"Dansk"},"title":{"$":"Gris"},"titleFull":{"$":"Gris"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}}],"facetResult":{"$":""},"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"2"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: work_single_pid_lix.auto', () => {
  it('has same result as recorded (in work_single_pid_lix.auto)', () => {
    assert(
      Date.now() < +new Date('2019-12-29'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
