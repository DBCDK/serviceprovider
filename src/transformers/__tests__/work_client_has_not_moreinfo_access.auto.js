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
  statusCode: 403,
  error: 'Moreinfo access is not allowed for this client'
};

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.11/',
    openagency: 'https://openagency.addi.dk/2.34/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/3.1/',
    PRODopenorder: 'https://openorder.addi.dk/3.0',
    openorder: 'https://openorder.addi.dk/test_3.0',
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
    infomediaservice: 'http://infomedia.mcp1-proxy.dbc.dk/server.php',
    workpresentation:
      'http://work-presentation-service.cisterne.svc.cloud.dbc.dk/api/work-presentation'
  },
  infomedia: { userId: 'XXXXX', libraryCode: 'XXXXX' },
  cicero: { 'DK-710100': 'XXXXX' },
  performance: { username: 'XXXXX', password: 'XXXXX' },
  search: { agency: '775100', profile: 'opac', collectionidentifiers: '' },
  storage: { user: 'XXXXX' },
  netpunkt: { user: 'XXXXX', group: 'XXXXX', password: 'XXXXX' },
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
    orderSystem: 'bibliotekdk',
    ips: { '0': 'XXXXX' },
    access_token: 'XXXXX'
  }
};
const mockData = {};

import Provider from '../../provider/Provider.js';
import { assert, fail } from 'chai';
const provider = Provider();

describe('Automated test: work_client_has_not_moreinfo_access.auto', () => {
  it('has same result as recorded (in work_client_has_not_moreinfo_access.auto)', () => {
    assert(
      Date.now() < +new Date('2023-01-01'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
