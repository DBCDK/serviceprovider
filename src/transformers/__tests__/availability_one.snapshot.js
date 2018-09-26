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
      expectedDelivery: '2018-06-26T00:00:00+02:00',
      orderPossible: true,
      orderPossibleReason: 'owned_accepted',
      holdings: [
        {
          branch: {branchId: 'DK-725304', title: 'Tune Bibliotek'},
          department: {departmentId: 'børn', title: 'Børn'},
          location: {locationId: 'krimigys', title: 'Krimigys'},
          sublocation: null,
          materials: [
            {
              itemNumber: '5175981413',
              available: false,
              periodical: null,
              materialGroupName: 'Bog'
            }
          ]
        },
        {
          branch: {branchId: 'DK-725300', title: 'Greve Bibliotek'},
          department: {departmentId: 'børn', title: 'Børn'},
          location: {locationId: 'krimigys', title: 'Krimigys'},
          sublocation: null,
          materials: [
            {
              itemNumber: '5175968271',
              available: false,
              periodical: null,
              materialGroupName: 'Bog'
            }
          ]
        },
        {
          branch: {branchId: 'DK-725302', title: 'Karlslunde Bibliotek'},
          department: {departmentId: 'børn', title: 'Børn'},
          location: {locationId: 'krimigys', title: 'Krimigys'},
          sublocation: null,
          materials: [
            {
              itemNumber: '5175981405',
              available: true,
              periodical: null,
              materialGroupName: 'Bog'
            }
          ]
        }
      ]
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
    recommendurls: 'XXXXX',
    cicero: 'https://cicero-fbs.com/rest/external/v1/'
  },
  cicero: {'DK-725300': {username: 'XXXXX', password: 'XXXXX'}},
  communityservice: {id: 1},
  performance: {password: 'XXXXX', username: 'XXXXX'},
  search: {agency: '725300', profile: 'opac'},
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
  user: {
    id: 'XXXXX',
    salt: 'XXXXX',
    pin: 'XXXXX',
    libraryId: '725300',
    agency: '725300',
    isil: 'DK-725300'
  },
  app: {
    clientId: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  }
};
const mockData = {
  '["https://cicero-fbs.com/rest/external/v1/DK-725300/authentication/login",{"method":"POST","body":{"password":"XXXXX","username":"XXXXX"},"json":true}]': {
    sessionKey: '12ed49d6-80fa-4ce8-87ac-341bff741731'
  },
  '["https://cicero-fbs.com/rest/external/v1/DK-725300/catalog/holdings?recordid=28448716",{"headers":{"X-session":"12ed49d6-80fa-4ce8-87ac-341bff741731"}}]':
    '[{"recordId":"28448716","reservable":true,"holdings":[{"branch":{"branchId":"DK-725304","title":"Tune Bibliotek"},"department":{"departmentId":"børn","title":"Børn"},"location":{"locationId":"krimigys","title":"Krimigys"},"sublocation":null,"materials":[{"itemNumber":"5175981413","available":false,"periodical":null,"materialGroupName":"Bog"}]},{"branch":{"branchId":"DK-725300","title":"Greve Bibliotek"},"department":{"departmentId":"børn","title":"Børn"},"location":{"locationId":"krimigys","title":"Krimigys"},"sublocation":null,"materials":[{"itemNumber":"5175968271","available":false,"periodical":null,"materialGroupName":"Bog"}]},{"branch":{"branchId":"DK-725302","title":"Karlslunde Bibliotek"},"department":{"departmentId":"børn","title":"Børn"},"location":{"locationId":"krimigys","title":"Krimigys"},"sublocation":null,"materials":[{"itemNumber":"5175981405","available":true,"periodical":null,"materialGroupName":"Bog"}]}]}]',
  '["openholdingstatus","\\n <soapenv:Envelope xmlns:soapenv=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:open=\\"http://oss.dbc.dk/ns/openholdingstatus\\">\\n   <soapenv:Header/>\\n   <soapenv:Body>\\n      <open:holdingsRequest>\\n         <open:authentication>\\n            <open:groupIdAut>XXXXX</open:groupIdAut>\\n            <open:passwordAut>XXXXX</open:passwordAut>\\n            <open:userIdAut>XXXXX</open:userIdAut>\\n         </open:authentication>\\n         <open:lookupRecord>\\n            <open:responderId>725300</open:responderId>\\n            <open:pid>870970-basis:28448716</open:pid>\\n         </open:lookupRecord>\\n         <open:outputType>json</open:outputType>\\n      </open:holdingsRequest>\\n   </soapenv:Body>\\n</soapenv:Envelope>"]':
    '{"holdingsResponse":{"responder":[{"localHoldingsId":{"$":"28448716"},"willLend":{"$":"true"},"expectedDelivery":{"$":"2018-06-26"},"pid":{"$":"870970-basis:28448716"},"responderId":{"$":"725300"}}]},"@namespaces":{"ohs":"http:\\/\\/oss.dbc.dk\\/ns\\/openholdingstatus"}}',
  '["openorder","<SOAP-ENV:Envelope xmlns=\\"http://oss.dbc.dk/ns/openorder\\" xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\">\\n     <SOAP-ENV:Body>\\n\\n        <checkOrderPolicyRequest>\\n           <authentication>\\n              <groupIdAut>XXXXX</groupIdAut>\\n              <passwordAut>XXXXX</passwordAut>\\n              <userIdAut>XXXXX</userIdAut>\\n           </authentication>\\n           <pickUpAgencyId>725300</pickUpAgencyId>\\n           <pid>870970-basis:28448716</pid>\\n           <serviceRequester>190101</serviceRequester>\\n           <outputType>json</outputType>\\n        </checkOrderPolicyRequest>\\n     </SOAP-ENV:Body>\\n  </SOAP-ENV:Envelope>"]':
    '{"checkOrderPolicyResponse":{"lookUpUrl":[{"$":"http:\\/\\/grevebib.dk\\/search\\/ting\\/28448716"}],"orderPossible":{"$":"true"},"orderPossibleReason":{"$":"owned_accepted"}},"@namespaces":{"oo":"http:\\/\\/oss.dbc.dk\\/ns\\/openorder"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: availability_one.snapshot', () => {
  it('has same result as recorded (in availability_one.snapshot)', () => {
    assert(
      Date.now() < +new Date('2018-11-24'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
