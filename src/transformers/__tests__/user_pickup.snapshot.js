// AUTOTEST GENERATOR: {"endpoint":"user","params":{"pretty":true}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = "user";
const params = {"pretty":true};

const expected = {"statusCode":500,"error":"User authentication failed"};

const context = {"services":{"ddbcmsapi":"https://cmscontent.dbc.dk/","moreinfo":"https://moreinfo.addi.dk/2.10/","openagency":"http://openagency.addi.dk/2.24/","openholdingstatus":"https://openholdingstatus.addi.dk/2.2/","PRODopenorder":"https://openorder.addi.dk/3.0","openorder":"https://openorder.addi.dk/test_3.0","opensearch":"https://opensearch.addi.dk/b3.5_5.0/","openuserstatus":"https://openuserstatus.addi.dk/2.0/","suggest":"http://ortograf.mcp1-proxy.dbc.dk/ortograf/","recommend":"http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim","performance":"http://elk/elasticsearch","communityservice":"http://localhost:4010/v1","cicero":"https://cicero-fbs.com/rest/external/v1/","openformat":"XXXXX","holdings":"XXXXX","infomediaservice":"XXXXX"},"infomedia":{"userId":"XXXXX","libraryCode":"XXXXX"},"cicero":{"DK-710100":"XXXXX"},"performance":{"username":"XXXXX","password":"XXXXX"},"communityservice":{"id":1},"search":{"agency":"775100","profile":"opac","collectionidentifiers":""},"storage":{"user":"XXXXX"},"netpunkt":{"user":"XXXXX","group":"XXXXX","password":"XXXXX"},"user":{"id":"foervg55pADXBKzi3h8jYjnYqYNfI9a3","salt":"XXXXX","pin":"XXXXX","libraryId":"710100","agency":"710100","isil":"DK-710100"},"app":{"clientId":"XXXXX","ddbcmsapipassword":"XXXXX","orderpolicyrequester":"190101","orderSystem":"bibliotekdk"}};
const mockData = {"[\"openuserstatus\",{\"qs\":{\"agencyId\":\"710100\",\"userId\":\"foervg55pADXBKzi3h8jYjnYqYNfI9a3\",\"authentication.groupIdAut\":\"XXXXX\",\"authentication.passwordAut\":\"XXXXX\",\"authentication.userIdAut\":\"XXXXX\",\"action\":\"getUserStatus\",\"selectUserInfo\":[\"userData\",\"userLoan\",\"userOrder\",\"userFiscal\"],\"outputType\":\"json\"}}]":"{\"getUserStatusResponse\":{\"getUserStatusError\":{\"$\":\"User authentication failed\",\"@\":\"ous\"},\"@\":\"ous\"},\"@namespaces\":{\"ous\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openuserstatus\"}}"};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: user_pickup.snapshot', () => {
  it('has same result as recorded (in user_pickup.snapshot)', () => {
    assert(Date.now() < +new Date('2020-07-26'), 'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.');
    context.mockData = mockData;
    return provider.execute(endpoint, params, context)
      .then(result => {
        assert.deepEqual(result, expected);
      })
  });
});
