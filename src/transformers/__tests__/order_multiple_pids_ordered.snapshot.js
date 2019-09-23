// AUTOTEST GENERATOR: {"endpoint":"order","params":{"pids":["870970-basis:28126727","870970-basis:27597726"],"expires":"2019-12-01","pickUpBranch":"DK-100450","phone":"123454","address":"ADDRESS","email":"EMAIL"}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'order';
const params = {
  pids: ['870970-basis:28126727', '870970-basis:27597726'],
  expires: '2019-12-01',
  pickUpBranch: 'DK-100450',
  phone: '123454',
  address: 'ADDRESS',
  email: 'EMAIL'
};

const expected = {statusCode: 200, data: {status: 'ok', orsId: '1033955652'}};

const context = {
  services: {
    ddbcmsapi: 'http://rest.filmstriben.dbc.inlead.dk/web/',
    moreinfo: 'http://moreinfo.addi.dk/2.11/',
    openagency: 'http://openagency.addi.dk/2.34/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/3.0/',
    PRODopenorder: 'https://openorder.addi.dk/3.0',
    openorder: 'https://openorder.addi.dk/3.0',
    opensearch: 'http://opensearch.addi.dk/b3.5_5.0/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    rank: 'https://xptest.dbc.dk/ms/rank/v1',
    suggestpopular: 'XXXXX',
    suggestcreator: 'XXXXX',
    suggestlibrary: 'XXXXX',
    suggestsubject: 'XXXXX',
    recommendurls: 'XXXXX'
  },
  search: {agency: '775100', profile: 'opac'},
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
  user: {
    agency: '100450',
    libraryId: '100450',
    isil: 'DK-100450',
    id: 'XXXXX',
    pin: 'XXXXX',
    salt: 'XXXXX'
  },
  app: {
    clientid: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  }
};
const mockData = {
  '["openorder","<SOAP-ENV:Envelope xmlns=\\"http://oss.dbc.dk/ns/openorder\\" xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\">\\n     <SOAP-ENV:Body>\\n        <placeOrderRequest>\\n           <authentication>\\n              <groupIdAut>XXXXX</groupIdAut>\\n              <passwordAut>XXXXX</passwordAut>\\n              <userIdAut>XXXXX</userIdAut>\\n           </authentication>\\n           <copy>false</copy>\\n           <exactEdition>false</exactEdition>\\n           <needBeforeDate>2019-12-01T00:00:00</needBeforeDate>\\n           <orderSystem>bibliotekdk</orderSystem>\\n           <pickUpAgencyId>DK-100450</pickUpAgencyId>\\n           <pid>870970-basis:28126727</pid>\\n           <pid>870970-basis:27597726</pid>\\n           <serviceRequester>190101</serviceRequester>\\n           <userAddress>ADDRESS</userAddress>\\n           <userId>XXXXX</userId>\\n           <userIdAuthenticated>true</userIdAuthenticated>\\n           <userMail>EMAIL</userMail>\\n           \\n           <userTelephone>123454</userTelephone>\\n           <verificationReferenceSource>dbcdatawell</verificationReferenceSource>\\n         </placeOrderRequest>\\n      </SOAP-ENV:Body>\\n    </SOAP-ENV:Envelope>"]':
    '<?xml version=\'1.0\' encoding=\'UTF-8\'?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/"><S:Body><ns1:placeOrderResponse xmlns:ns1="http://oss.dbc.dk/ns/openorder"><ns1:orderPlaced><ns1:orderId>1033955652</ns1:orderId><ns1:orderPlacedMessage>owned_accepted</ns1:orderPlacedMessage></ns1:orderPlaced></ns1:placeOrderResponse></S:Body></S:Envelope>'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: order_multiple_pids_ordered.snapshot', () => {
  it('has same result as recorded (in order_multiple_pids_ordered.snapshot)', () => {
    assert(
      Date.now() < +new Date('2020-01-17'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
