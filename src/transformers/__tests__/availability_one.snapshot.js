// AUTOTEST GENERATOR: {"endpoint":"availability","params":{"pids":["870970-basis:28448716"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'availability';
const params = {pids: ['870970-basis:28448716']};

const expected = {
  statusCode: 200,
  data: [
    {
      willLend: true,
      expectedDelivery: '2019-06-06T00:00:00+02:00',
      orderPossible: true,
      orderPossibleReason: 'owned_accepted'
    }
  ]
};

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
  search: {agency: '725300', profile: 'opac'},
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
  user: {
    agency: '725300',
    libraryId: '725300',
    isil: 'DK-725300',
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
  '["openholdingstatus","\\n <soapenv:Envelope xmlns:soapenv=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:open=\\"http://oss.dbc.dk/ns/openholdingstatus\\">\\n   <soapenv:Header/>\\n   <soapenv:Body>\\n      <open:holdingsRequest>\\n         <open:authentication>\\n            <open:groupIdAut>XXXXX</open:groupIdAut>\\n            <open:passwordAut>XXXXX</open:passwordAut>\\n            <open:userIdAut>XXXXX</open:userIdAut>\\n         </open:authentication>\\n         <open:lookupRecord>\\n            <open:responderId>725300</open:responderId>\\n            <open:pid>870970-basis:28448716</open:pid>\\n         </open:lookupRecord>\\n         <open:outputType>json</open:outputType>\\n      </open:holdingsRequest>\\n   </soapenv:Body>\\n</soapenv:Envelope>"]':
    '{"holdingsResponse":{"responder":[{"localHoldingsId":{"$":"28448716"},"willLend":{"$":"true"},"expectedDelivery":{"$":"2019-06-06"},"pid":{"$":"870970-basis:28448716"},"responderId":{"$":"725300"}}]},"@namespaces":{"ohs":"http:\\/\\/oss.dbc.dk\\/ns\\/openholdingstatus"}}',
  '["openorder","<SOAP-ENV:Envelope xmlns=\\"http://oss.dbc.dk/ns/openorder\\" xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\">\\n     <SOAP-ENV:Body>\\n        <checkOrderPolicyRequest>\\n           <authentication>\\n              <groupIdAut>XXXXX</groupIdAut>\\n              <passwordAut>XXXXX</passwordAut>\\n              <userIdAut>XXXXX</userIdAut>\\n           </authentication>\\n           <pickUpAgencyId>725300</pickUpAgencyId>\\n           <pid>870970-basis:28448716</pid>\\n           <serviceRequester>190101</serviceRequester>\\n        </checkOrderPolicyRequest>\\n     </SOAP-ENV:Body>\\n  </SOAP-ENV:Envelope>"]':
    '<?xml version="1.0" encoding="UTF-8"?><SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns="http://oss.dbc.dk/ns/openorder"><SOAP-ENV:Body><checkOrderPolicyResponse><lookUpUrl>http://grevebib.dk/search/ting/28448716</lookUpUrl><orderPossible>true</orderPossible><orderPossibleReason>owned_accepted</orderPossibleReason></checkOrderPolicyResponse></SOAP-ENV:Body></SOAP-ENV:Envelope>'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: availability_one.snapshot', () => {
  it('has same result as recorded (in availability_one.snapshot)', () => {
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
