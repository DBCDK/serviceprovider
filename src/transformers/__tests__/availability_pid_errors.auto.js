// AUTOTEST GENERATOR: {"endpoint":"availability","params":{"pids":["hjjhjh","125030-katalog:000098071","870970-basis:52045797"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'availability';
const params = {
  pids: ['hjjhjh', '125030-katalog:000098071', '870970-basis:52045797']
};

const expected = {
  statusCode: 200,
  data: [
    {unavailable: 'openHoldingStatus error: error_searching_library'},
    {unavailable: 'openHoldingStatus error: item_not_found'},
    {
      willLend: true,
      orderPossible: true,
      expectedDelivery: '2018-03-28T00:00:00+02:00'
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
    opensearch: 'https://opensearch.addi.dk/b3.5_4.5/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    suggest: 'http://ortograf.mcp1-proxy.dbc.dk/ortograf/',
    recommend: 'http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim',
    performance: 'XXXXX',
    communityservice: 'http://localhost:4010/v1'
  },
  communityservice: {id: 1},
  search: {agency: '775100', profile: 'opac', collectionidentifiers: ''},
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
  user: {
    id: 'XXXXX',
    salt: 'XXXXX',
    pin: 'XXXXX',
    libraryId: '726501',
    agency: '726500',
    isil: 'DK-726500'
  },
  app: {
    clientId: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  }
};
const mockData = {
  '["openholdingstatus","\\n <soapenv:Envelope xmlns:soapenv=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:open=\\"http://oss.dbc.dk/ns/openholdingstatus\\">\\n   <soapenv:Header/>\\n   <soapenv:Body>\\n      <open:holdingsRequest>\\n         <open:authentication>\\n            <open:groupIdAut>XXXXX</open:groupIdAut>\\n            <open:passwordAut>XXXXX</open:passwordAut>\\n            <open:userIdAut>XXXXX</open:userIdAut>\\n         </open:authentication>\\n         <open:lookupRecord>\\n            <open:responderId>726500</open:responderId>\\n            <open:pid>125030-katalog:000098071</open:pid>\\n         </open:lookupRecord>\\n         <open:outputType>json</open:outputType>\\n      </open:holdingsRequest>\\n   </soapenv:Body>\\n</soapenv:Envelope>"]':
    '{"holdingsResponse":{"error":[{"pid":{"$":"125030-katalog:000098071"},"responderId":{"$":"726500"},"errorMessage":{"$":"item_not_found"}}]},"@namespaces":null}',
  '["openholdingstatus","\\n <soapenv:Envelope xmlns:soapenv=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:open=\\"http://oss.dbc.dk/ns/openholdingstatus\\">\\n   <soapenv:Header/>\\n   <soapenv:Body>\\n      <open:holdingsRequest>\\n         <open:authentication>\\n            <open:groupIdAut>XXXXX</open:groupIdAut>\\n            <open:passwordAut>XXXXX</open:passwordAut>\\n            <open:userIdAut>XXXXX</open:userIdAut>\\n         </open:authentication>\\n         <open:lookupRecord>\\n            <open:responderId>726500</open:responderId>\\n            <open:pid>870970-basis:52045797</open:pid>\\n         </open:lookupRecord>\\n         <open:outputType>json</open:outputType>\\n      </open:holdingsRequest>\\n   </soapenv:Body>\\n</soapenv:Envelope>"]':
    '{"holdingsResponse":{"responder":[{"localHoldingsId":{"$":"52045797"},"willLend":{"$":"true"},"expectedDelivery":{"$":"2018-03-28"},"pid":{"$":"870970-basis:52045797"},"responderId":{"$":"726500"}}]},"@namespaces":null}',
  '["openholdingstatus","\\n <soapenv:Envelope xmlns:soapenv=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:open=\\"http://oss.dbc.dk/ns/openholdingstatus\\">\\n   <soapenv:Header/>\\n   <soapenv:Body>\\n      <open:holdingsRequest>\\n         <open:authentication>\\n            <open:groupIdAut>XXXXX</open:groupIdAut>\\n            <open:passwordAut>XXXXX</open:passwordAut>\\n            <open:userIdAut>XXXXX</open:userIdAut>\\n         </open:authentication>\\n         <open:lookupRecord>\\n            <open:responderId>726500</open:responderId>\\n            <open:pid>hjjhjh</open:pid>\\n         </open:lookupRecord>\\n         <open:outputType>json</open:outputType>\\n      </open:holdingsRequest>\\n   </soapenv:Body>\\n</soapenv:Envelope>"]':
    '{"holdingsResponse":{"error":[{"pid":{"$":"hjjhjh"},"responderId":{"$":"726500"},"errorMessage":{"$":"error_searching_library"}}]},"@namespaces":null}',
  '["openorder","<SOAP-ENV:Envelope xmlns=\\"http://oss.dbc.dk/ns/openorder\\" xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\">\\n     <SOAP-ENV:Body>\\n\\n        <checkOrderPolicyRequest>\\n           <authentication>\\n              <groupIdAut>XXXXX</groupIdAut>\\n              <passwordAut>XXXXX</passwordAut>\\n              <userIdAut>XXXXX</userIdAut>\\n           </authentication>\\n           <pickUpAgencyId>726500</pickUpAgencyId>\\n           <pid>125030-katalog:000098071</pid>\\n           <serviceRequester>190101</serviceRequester>\\n           <outputType>json</outputType>\\n        </checkOrderPolicyRequest>\\n     </SOAP-ENV:Body>\\n  </SOAP-ENV:Envelope>"]':
    '{"checkOrderPolicyResponse":{"checkOrderPolicyError":{"$":"service_unavailable"}},"@namespaces":{"oo":"http:\\/\\/oss.dbc.dk\\/ns\\/openorder"}}',
  '["openorder","<SOAP-ENV:Envelope xmlns=\\"http://oss.dbc.dk/ns/openorder\\" xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\">\\n     <SOAP-ENV:Body>\\n\\n        <checkOrderPolicyRequest>\\n           <authentication>\\n              <groupIdAut>XXXXX</groupIdAut>\\n              <passwordAut>XXXXX</passwordAut>\\n              <userIdAut>XXXXX</userIdAut>\\n           </authentication>\\n           <pickUpAgencyId>726500</pickUpAgencyId>\\n           <pid>870970-basis:52045797</pid>\\n           <serviceRequester>190101</serviceRequester>\\n           <outputType>json</outputType>\\n        </checkOrderPolicyRequest>\\n     </SOAP-ENV:Body>\\n  </SOAP-ENV:Envelope>"]':
    '{"checkOrderPolicyResponse":{"checkOrderPolicyError":{"$":"service_unavailable"}},"@namespaces":{"oo":"http:\\/\\/oss.dbc.dk\\/ns\\/openorder"}}',
  '["openorder","<SOAP-ENV:Envelope xmlns=\\"http://oss.dbc.dk/ns/openorder\\" xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\">\\n     <SOAP-ENV:Body>\\n\\n        <checkOrderPolicyRequest>\\n           <authentication>\\n              <groupIdAut>XXXXX</groupIdAut>\\n              <passwordAut>XXXXX</passwordAut>\\n              <userIdAut>XXXXX</userIdAut>\\n           </authentication>\\n           <pickUpAgencyId>726500</pickUpAgencyId>\\n           <pid>hjjhjh</pid>\\n           <serviceRequester>190101</serviceRequester>\\n           <outputType>json</outputType>\\n        </checkOrderPolicyRequest>\\n     </SOAP-ENV:Body>\\n  </SOAP-ENV:Envelope>"]':
    '{"checkOrderPolicyResponse":{"checkOrderPolicyError":{"$":"service_unavailable"}},"@namespaces":{"oo":"http:\\/\\/oss.dbc.dk\\/ns\\/openorder"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: availability_pid_errors.auto', () => {
  it('has same result as recorded (in availability_pid_errors.auto)', () => {
    assert(
      Date.now() < +new Date('2018-06-26'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
