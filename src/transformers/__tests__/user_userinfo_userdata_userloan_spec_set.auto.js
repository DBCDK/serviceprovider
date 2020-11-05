// AUTOTEST GENERATOR: {"endpoint":"user","params":{"userinfo":["userData","userLoan"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'user';
const params = {userinfo: ['userData', 'userLoan']};

const expected = {
  statusCode: 200,
  data: {
    id: '4TXozSGMOycrE1BhPudNFslbOI3OJO6x',
    name: 'Michelle Hoffmann',
    address: 'Kornbakke Allé 13',
    postalCode: '8200',
    loans: [],
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    agency: '790900'
  }
};

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.10/',
    openagency: 'http://openagency.addi.dk/2.24/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/2.2/',
    PRODopenorder: 'https://openorder.addi.dk/3.0',
    openorder: 'https://openorder.addi.dk/test_3.0',
    opensearch: 'https://opensearch.addi.dk/b3.5_5.0/',
    openuserstatus: 'https://openuserstatus.addi.dk/2.0/',
    suggest: 'http://ortograf.mcp1-proxy.dbc.dk/ortograf/',
    recommend: 'http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim',
    performance: 'http://elk/elasticsearch',
    communityservice: 'http://localhost:4010/v1',
    cicero: 'https://cicero-fbs.com/rest/external/v1/',
    openformat: 'XXXXX',
    holdings: 'XXXXX',
    infomediaservice: 'XXXXX'
  },
  infomedia: {userId: 'XXXXX', libraryCode: 'XXXXX'},
  cicero: {'DK-710100': 'XXXXX'},
  performance: {username: 'XXXXX', password: 'XXXXX'},
  communityservice: {id: 1},
  search: {agency: '775100', profile: 'opac', collectionidentifiers: ''},
  storage: {user: 'XXXXX'},
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
  user: {
    id: '0102033690',
    salt: 'XXXXX',
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
    access_token: 'qwerty'
  }
};

const mockData = {
  '["openuserstatus",{"qs":{"agencyId":"790900","userId":"0102033690","authentication.groupIdAut":"XXXXX","authentication.passwordAut":"XXXXX","authentication.userIdAut":"XXXXX","action":"getUserStatus","selectUserInfo":["userData","userLoan"],"outputType":"json"}}]':
    '{"getUserStatusResponse":{"userId":{"$":"0102033690","@":"ous"},"userName":{"$":"Michelle Hoffmann","@":"ous"},"userAddress":{"$":"Kornbakke All\\u00e9 13","@":"ous"},"userPostalCode":{"$":"8200","@":"ous"},"userCountry":{"$":"DK","@":"ous"},"userStatus":{"loanedItems":{"loansCount":{"$":"0","@":"ous"},"@":"ous"},"@":"ous"},"@":"ous"},"@namespaces":{"ous":"http:\\/\\/oss.dbc.dk\\/ns\\/openuserstatus"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: user_userinfo_userdata_userLoan_spec_set.auto', () => {
  it('has same result as recorded (in user_userinfo_userdata_userLoan_spec_set.auto)', () => {
    assert(
      Date.now() < +new Date('2021-01-01'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
