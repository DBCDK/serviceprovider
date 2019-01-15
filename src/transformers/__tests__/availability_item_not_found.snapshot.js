// AUTOTEST GENERATOR: {"endpoint":"availability","params":{"pids":["870970-basis:06205836"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'availability';
const params = {pids: ['870970-basis:06205836']};

const expected = {
  statusCode: 200,
  data: [
    {
      willLend: false,
      orderPossible: true,
      orderPossibleReason: 'not_owned_ILL_loc'
    }
  ]
};

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.11/',
    openagency: 'https://openagency.addi.dk/2.34/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/3.0/',
    openorder: 'https://openorder.addi.dk/2.8/',
    opensearch: 'https://opensearch.addi.dk/b3.5_5.0/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    rank: 'https://xptest.dbc.dk/ms/rank/v1',
    suggest: 'http://ortograf.mcp1-proxy.dbc.dk/ortograf/',
    recommend: 'http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim',
    communityservice: '',
    suggestpopular: 'XXXXX',
    suggestcreator: 'XXXXX',
    suggestlibrary: 'XXXXX',
    suggestsubject: 'XXXXX',
    performance: 'https://elk-p01.dbc.dk:9100/',
    recommendurls: 'XXXXX'
  },
  communityservice: {id: 1},
  performance: {password: 'XXXXX', username: 'XXXXX'},
  search: {agency: '710100', profile: 'opac'},
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
  '["openholdingstatus","\\n <soapenv:Envelope xmlns:soapenv=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:open=\\"http://oss.dbc.dk/ns/openholdingstatus\\">\\n   <soapenv:Header/>\\n   <soapenv:Body>\\n      <open:holdingsRequest>\\n         <open:authentication>\\n            <open:groupIdAut>XXXXX</open:groupIdAut>\\n            <open:passwordAut>XXXXX</open:passwordAut>\\n            <open:userIdAut>XXXXX</open:userIdAut>\\n         </open:authentication>\\n         <open:lookupRecord>\\n            <open:responderId>710100</open:responderId>\\n            <open:pid>870970-basis:06205836</open:pid>\\n         </open:lookupRecord>\\n         <open:outputType>json</open:outputType>\\n      </open:holdingsRequest>\\n   </soapenv:Body>\\n</soapenv:Envelope>"]':
    '{"holdingsResponse":{"error":[{"pid":{"$":"870970-basis:06205836"},"responderId":{"$":"710100"},"errorMessage":{"$":"item_not_found"}}]},"@namespaces":{"ohs":"http:\\/\\/oss.dbc.dk\\/ns\\/openholdingstatus"}}',
  '["openorder","<SOAP-ENV:Envelope xmlns=\\"http://oss.dbc.dk/ns/openorder\\" xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\">\\n     <SOAP-ENV:Body>\\n\\n        <checkOrderPolicyRequest>\\n           <authentication>\\n              <groupIdAut>XXXXX</groupIdAut>\\n              <passwordAut>XXXXX</passwordAut>\\n              <userIdAut>XXXXX</userIdAut>\\n           </authentication>\\n           <pickUpAgencyId>710100</pickUpAgencyId>\\n           <pid>870970-basis:06205836</pid>\\n           <serviceRequester>190101</serviceRequester>\\n           <outputType>json</outputType>\\n        </checkOrderPolicyRequest>\\n     </SOAP-ENV:Body>\\n  </SOAP-ENV:Envelope>"]':
    '{"checkOrderPolicyResponse":{"orderPossible":{"$":"true"},"orderPossibleReason":{"$":"not_owned_ILL_loc"}},"@namespaces":{"oo":"http:\\/\\/oss.dbc.dk\\/ns\\/openorder"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: availability_item_not_found.snapshot', () => {
  it('has same result as recorded (in availability_item_not_found.snapshot)', () => {
    assert(
      Date.now() < +new Date('2019-02-28'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
