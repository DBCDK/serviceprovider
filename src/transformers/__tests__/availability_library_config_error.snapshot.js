// AUTOTEST GENERATOR: {"endpoint":"availability","params":{"pids":["870970-basis:47210577"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'availability';
const params = {pids: ['870970-basis:47210577']};

const expected = {
  statusCode: 200,
  data: [{unavailable: 'openHoldingService error: LIBRARY_CONFIGURATION_ERROR'}]
};

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
    libraryId: '100000',
    agency: '100000',
    isil: 'DK-100000'
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
  '["holdingsservice",{"qs":{"lookup":"870970-basis:47210577@100000"}}]':
    '{"responder":[],"error":[{"pid":"870970-basis:47210577","responderId":"100000","errorMessage":"LIBRARY_CONFIGURATION_ERROR"}],"trackingId":"848e8d6a-6779-4daf-a167-547f94fd1f06"}',
  '["openorder","<SOAP-ENV:Envelope xmlns=\\"http://oss.dbc.dk/ns/openorder\\" xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\">\\n     <SOAP-ENV:Body>\\n        <checkOrderPolicyRequest>\\n           <authentication>\\n              <groupIdAut>XXXXX</groupIdAut>\\n              <passwordAut>XXXXX</passwordAut>\\n              <userIdAut>XXXXX</userIdAut>\\n           </authentication>\\n           <pickUpAgencyId>100000</pickUpAgencyId>\\n           <pid>870970-basis:47210577</pid>\\n           <serviceRequester>190101</serviceRequester>\\n        </checkOrderPolicyRequest>\\n     </SOAP-ENV:Body>\\n  </SOAP-ENV:Envelope>"]':
    '<?xml version=\'1.0\' encoding=\'UTF-8\'?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/"><S:Body><ns1:checkOrderPolicyResponse xmlns:ns1="http://oss.dbc.dk/ns/openorder"><ns1:orderPossible>false</ns1:orderPossible><ns1:orderPossibleReason>not_owned_wrong_ILL_mediumType</ns1:orderPossibleReason></ns1:checkOrderPolicyResponse></S:Body></S:Envelope>'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: availability_library_config_error.snapshot', () => {
  it('has same result as recorded (in availability_library_config_error.snapshot)', () => {
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
