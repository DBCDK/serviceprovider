// AUTOTEST GENERATOR: {"endpoint":"order","params":{"pids":["870970-basis:28126727","870970-basis:27597726"],"pickUpBranch":"DK-790900","expires":"2022-01-01"}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'order';
const params = {
  pids: ['870970-basis:28126727', '870970-basis:27597726'],
  pickUpBranch: 'DK-790900',
  expires: '2022-01-01'
};

const expected = {
  statusCode: 200,
  data: { status: 'ok', orsId: '1039377316' }
};

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.10/',
    openagency: 'http://vipcore.iscrum-vip-prod.svc.cloud.dbc.dk/1.0/api',
    openholdingstatus: 'https://openholdingstatus.addi.dk/2.2/',
    PRODopenorder: 'https://openorder.addi.dk/3.0',
    openorder: 'https://openorder-tst.addi.dk/3.0',
    opensearch: 'https://opensearch.addi.dk/b3.5_5.0/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    suggest: 'http://ortograf.mcp1-proxy.dbc.dk/ortograf/',
    recommend: 'http://booklens-190101-1-0.mi-prod.svc.cloud.dbc.dk/',
    performance: 'http://elk/elasticsearch',
    communityservice: 'http://localhost:4010/v1',
    cicero: 'https://cicero-fbs.com/rest/external/v1/',
    openformat:
      'http://openformat-php-develop.frontend-features.svc.cloud.dbc.dk/server.php',
    holdingsitems:
      'http://holdings-items-content-service.cisterne.svc.cloud.dbc.dk/holdings-items-content-service/api',
    infomediaservice: 'http://infomedia.mcp1-proxy.dbc.dk/server.php'
  },
  cicero: { 'DK-710100': 'XXXXX' },
  performance: { username: 'XXXXX', password: 'XXXXX' },
  communityservice: { id: 1 },
  search: {
    agency: '775100',
    profile: 'opac',
    collectionidentifiers: ''
  },
  storage: { user: 'XXXXX' },
  netpunkt: { user: 'XXXXX', group: 'XXXXX', password: 'XXXXX' },
  user: {
    id: 'C04122017433',
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
    ips: ['10.10.10.0'],
    access_token: 'XXXXX'
  }
};
const mockData = {
  '["openorder","<SOAP-ENV:Envelope xmlns=\\"http://oss.dbc.dk/ns/openorder\\" xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\">\\n     <SOAP-ENV:Body>\\n        <placeOrderRequest>\\n           <authentication>\\n              <groupIdAut>XXXXX</groupIdAut>\\n              <passwordAut>XXXXX</passwordAut>\\n              <userIdAut>XXXXX</userIdAut>\\n           </authentication>\\n           <copy>false</copy>\\n           <exactEdition>false</exactEdition>\\n           <needBeforeDate>2022-01-01T00:00:00</needBeforeDate>\\n           <orderSystem>bibliotekdk</orderSystem>\\n           <pickUpAgencyId>DK-790900</pickUpAgencyId>\\n           <pid>870970-basis:28126727</pid>\\n           <pid>870970-basis:27597726</pid>\\n           <serviceRequester>190101</serviceRequester>\\n           \\n           <userId>C04122017433</userId>\\n           <userIdAuthenticated>true</userIdAuthenticated>\\n           \\n           \\n           \\n           <verificationReferenceSource>dbcdatawell</verificationReferenceSource>\\n         </placeOrderRequest>\\n      </SOAP-ENV:Body>\\n    </SOAP-ENV:Envelope>"]':
    '<?xml version=\'1.0\' encoding=\'UTF-8\'?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/"><S:Body><ns1:placeOrderResponse xmlns:ns1="http://oss.dbc.dk/ns/openorder"><ns1:orderPlaced><ns1:orderId>1039377316</ns1:orderId><ns1:orderPlacedMessage>not_owned_ILL_loc</ns1:orderPlacedMessage></ns1:orderPlaced></ns1:placeOrderResponse></S:Body></S:Envelope>'
};

import Provider from '../../provider/Provider.js';
import { assert, fail } from 'chai';

const provider = Provider();

describe('Automated test: order_multiple_pids_ordered.snapshot', () => {
  it('has same result as recorded (in order_multiple_pids_ordered.snapshot)', () => {
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
