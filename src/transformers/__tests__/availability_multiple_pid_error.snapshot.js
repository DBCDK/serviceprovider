// AUTOTEST GENERATOR: {"endpoint":"availability","params":{"pids":["hest","870970-basis:47210577","870970-basis:50841316"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'availability';
const params = {
  pids: ['hest', '870970-basis:47210577', '870970-basis:50841316']
};

const expected = {
  statusCode: 200,
  data: [
    { unavailable: 'openHoldingService error: ITEM_NOT_FOUND' },
    {
      willLend: true,
      expectedDelivery: '2023-08-23T00:00:00+02:00',
      orderPossible: true,
      orderPossibleReason: 'owned_accepted'
    },
    {
      willLend: true,
      expectedDelivery: '2023-08-23T00:00:00+02:00',
      orderPossible: true,
      orderPossibleReason: 'owned_accepted'
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
const mockData = {
  '["holdingsservice",{"qs":{"lookup":"870970-basis:47210577@710100"}}]':
    '{"responder":[{"pid":"870970-basis:47210577","responderId":"710100","localHoldingsId":"47210577","willLend":true,"expectedDelivery":"2023-08-23"}],"error":[],"trackingId":"40860738-ab09-4363-91ef-f4ff4f251882"}',
  '["holdingsservice",{"qs":{"lookup":"870970-basis:50841316@710100"}}]':
    '{"responder":[{"pid":"870970-basis:50841316","responderId":"710100","localHoldingsId":"50841316","willLend":true,"expectedDelivery":"2023-08-23"}],"error":[],"trackingId":"4475b6e2-27f1-48bc-8fcb-e5dac39c3940"}',
  '["holdingsservice",{"qs":{"lookup":"hest@710100"}}]':
    '{"responder":[],"error":[{"bibliographicRecordId":"hest","responderId":"710100","errorMessage":"ITEM_NOT_FOUND"}],"trackingId":"20affee1-f63d-4d3c-a65f-d7a787eadab9"}',
  '["openorder","<SOAP-ENV:Envelope xmlns=\\"http://oss.dbc.dk/ns/openorder\\" xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\">\\n     <SOAP-ENV:Body>\\n        <checkOrderPolicyRequest>\\n           <authentication>\\n              <groupIdAut>XXXXX</groupIdAut>\\n              <passwordAut>XXXXX</passwordAut>\\n              <userIdAut>XXXXX</userIdAut>\\n           </authentication>\\n           <pickUpAgencyId>710100</pickUpAgencyId>\\n           <pid>870970-basis:47210577</pid>\\n           <serviceRequester>190101</serviceRequester>\\n        </checkOrderPolicyRequest>\\n     </SOAP-ENV:Body>\\n  </SOAP-ENV:Envelope>"]':
    '<?xml version=\'1.0\' encoding=\'UTF-8\'?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/"><S:Body><ns1:checkOrderPolicyResponse xmlns:ns1="http://oss.dbc.dk/ns/openorder"><ns1:lookUpUrl>http://bibliotek.kk.dk/ting/object/870970-basis%3A47210577</ns1:lookUpUrl><ns1:orderPossible>true</ns1:orderPossible><ns1:orderPossibleReason>owned_accepted</ns1:orderPossibleReason></ns1:checkOrderPolicyResponse></S:Body></S:Envelope>',
  '["openorder","<SOAP-ENV:Envelope xmlns=\\"http://oss.dbc.dk/ns/openorder\\" xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\">\\n     <SOAP-ENV:Body>\\n        <checkOrderPolicyRequest>\\n           <authentication>\\n              <groupIdAut>XXXXX</groupIdAut>\\n              <passwordAut>XXXXX</passwordAut>\\n              <userIdAut>XXXXX</userIdAut>\\n           </authentication>\\n           <pickUpAgencyId>710100</pickUpAgencyId>\\n           <pid>870970-basis:50841316</pid>\\n           <serviceRequester>190101</serviceRequester>\\n        </checkOrderPolicyRequest>\\n     </SOAP-ENV:Body>\\n  </SOAP-ENV:Envelope>"]':
    '<?xml version=\'1.0\' encoding=\'UTF-8\'?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/"><S:Body><ns1:checkOrderPolicyResponse xmlns:ns1="http://oss.dbc.dk/ns/openorder"><ns1:lookUpUrl>http://bibliotek.kk.dk/ting/object/870970-basis%3A50841316</ns1:lookUpUrl><ns1:orderPossible>true</ns1:orderPossible><ns1:orderPossibleReason>owned_accepted</ns1:orderPossibleReason></ns1:checkOrderPolicyResponse></S:Body></S:Envelope>',
  '["openorder","<SOAP-ENV:Envelope xmlns=\\"http://oss.dbc.dk/ns/openorder\\" xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\">\\n     <SOAP-ENV:Body>\\n        <checkOrderPolicyRequest>\\n           <authentication>\\n              <groupIdAut>XXXXX</groupIdAut>\\n              <passwordAut>XXXXX</passwordAut>\\n              <userIdAut>XXXXX</userIdAut>\\n           </authentication>\\n           <pickUpAgencyId>710100</pickUpAgencyId>\\n           <pid>hest</pid>\\n           <serviceRequester>190101</serviceRequester>\\n        </checkOrderPolicyRequest>\\n     </SOAP-ENV:Body>\\n  </SOAP-ENV:Envelope>"]':
    '<?xml version=\'1.0\' encoding=\'UTF-8\'?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/"><S:Body><ns1:checkOrderPolicyResponse xmlns:ns1="http://oss.dbc.dk/ns/openorder"><ns1:orderPossible>false</ns1:orderPossible><ns1:orderPossibleReason>not_owned_no_ILL_loc</ns1:orderPossibleReason></ns1:checkOrderPolicyResponse></S:Body></S:Envelope>'
};

import Provider from '../../provider/Provider.js';
import { assert, fail } from 'chai';
const provider = Provider();

describe('Automated test: availability_multiple_pid_error.snapshot', () => {
  it('has same result as recorded (in availability_multiple_pid_error.snapshot)', () => {
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
