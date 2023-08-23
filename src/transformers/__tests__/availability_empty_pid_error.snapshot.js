// AUTOTEST GENERATOR: {"endpoint":"availability","params":{"pids":[""]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'availability';
const params = { pids: [''] };

const expected = { statusCode: 400, error: 'pids is not of type array' };

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.10/',
    openagency: 'http://openagency.addi.dk/2.24/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/2.2/',
    PRODopenorder: 'https://openorder.addi.dk/3.0',
    openorder: 'https://openorder.addi.dk/3.0',
    opensearch: 'https://opensearch.addi.dk/b3.5_5.2/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    suggest: 'http://ortograf.mcp1-proxy.dbc.dk/ortograf/',
    recommend: 'http://booklens-190101-1-0.mi-prod.svc.cloud.dbc.dk/',
    performance: 'http://elk/elasticsearch',
    cicero: 'https://cicero-fbs.com/rest/external/v1/',
    openformat:
      'http://openformat-php-develop.frontend-features.svc.cloud.dbc.dk/server.php',
    holdingsitems:
      'http://holdings-items-content-service.cisterne.svc.cloud.dbc.dk/holdings-items-content-service/api',
    holdingsservice:
      'http://holdings-service.cisterne.svc.cloud.dbc.dk/api/v1/holdings-status/holdings',
    infomediaservice: 'http://infomedia.mcp1-proxy.dbc.dk/server.php',
    workpresentation: 'XXXXX'
  },
  access: { '0': 'moreinfo' },
  cicero: { 'DK-710100': 'XXXXX' },
  performance: { username: 'XXXXX', password: 'XXXXX' },
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
    clientId: 'XclientIdX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk',
    ips: { '0': 'XXXXX' },
    access_token: 'XXXXX'
  }
};
const mockData = {};

import Provider from '../../provider/Provider.js';
import { assert, fail } from 'chai';
const provider = Provider();

describe('Automated test: availability_empty_pid_error.snapshot', () => {
  it('has same result as recorded (in availability_empty_pid_error.snapshot)', () => {
    assert(
      Date.now() < +new Date('2024-01-01'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
