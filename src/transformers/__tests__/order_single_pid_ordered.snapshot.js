// AUTOTEST GENERATOR: {"endpoint":"order","params":{"pids":["870970-basis:28126727"],"expires":"2019-08-01","pickUpBranch":"DK-100450","phone":"123454","address":"ADDRESS","email":"EMAIL"}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'order';
const params = {
  pids: ['870970-basis:28126727'],
  expires: '2019-08-01',
  pickUpBranch: 'DK-100450',
  phone: '123454',
  address: 'ADDRESS',
  email: 'EMAIL'
};

const expected = {statusCode: 200, data: {status: 'ok', orsId: '1033953897'}};

const context = {
  services: {
    ddbcmsapi: 'http://rest.filmstriben.dbc.inlead.dk/web/',
    moreinfo: 'http://moreinfo.addi.dk/2.11/',
    openagency: 'http://openagency.addi.dk/2.34/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/3.0/',
    PRODopenorder: 'https://openorder.addi.dk/2.8/',
    openorder: 'https://openorder.addi.dk/2.8/',
    opensearch: 'http://opensearch.addi.dk/b3.5_5.0/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    rank: 'https://xptest.dbc.dk/ms/rank/v1',
    suggestpopular: 'XXXXX',
    suggestcreator: 'XXXXX',
    suggestlibrary: 'XXXXX',
    suggestsubject: 'XXXXX',
    recommendurls: 'XXXXX'
  },
  search: {
    agency: '775100',
    profile: 'opac',
    collectionidentifiers:
      'rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog'
  },
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
  '["openorder","<SOAP-ENV:Envelope xmlns=\\"http://oss.dbc.dk/ns/openorder\\" xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\">\\n     <SOAP-ENV:Body>\\n        <placeOrderRequest>\\n           <authentication>\\n              <groupIdAut>XXXXX</groupIdAut>\\n              <passwordAut>XXXXX</passwordAut>\\n              <userIdAut>XXXXX</userIdAut>\\n           </authentication>\\n           <copy>false</copy>\\n           <exactEdition>false</exactEdition>\\n           <needBeforeDate>2019-08-01T00:00:00</needBeforeDate>\\n           <orderSystem>bibliotekdk</orderSystem>\\n           <pickUpAgencyId>DK-100450</pickUpAgencyId>\\n           <pid>870970-basis:28126727</pid>\\n           <serviceRequester>190101</serviceRequester>\\n           <userAddress>ADDRESS</userAddress>\\n           <userId>XXXXX</userId>\\n           <userIdAuthenticated>true</userIdAuthenticated>\\n           <userMail>EMAIL</userMail>\\n           \\n           <userTelephone>123454</userTelephone>\\n           <verificationReferenceSource>dbcdatawell</verificationReferenceSource>\\n         </placeOrderRequest>\\n      </SOAP-ENV:Body>\\n    </SOAP-ENV:Envelope>"]':
    '<?xml version="1.0" encoding="UTF-8"?><SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns="http://oss.dbc.dk/ns/openorder"><SOAP-ENV:Body><placeOrderResponse><orderPlaced><orderId>1033953897</orderId><orderPlacedMessage>not_owned_ILL_loc</orderPlacedMessage></orderPlaced></placeOrderResponse></SOAP-ENV:Body></SOAP-ENV:Envelope>'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: order_single_pid_ordered.snapshot', () => {
  it('has same result as recorded (in order_single_pid_ordered.snapshot)', () => {
    assert(
      Date.now() < +new Date('2019-09-04'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
