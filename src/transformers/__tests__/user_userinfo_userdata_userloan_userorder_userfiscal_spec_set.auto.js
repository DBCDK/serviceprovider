// AUTOTEST GENERATOR: {"endpoint":"user","params":{"userinfo":["userData","userLoan","userOrder","userFiscal"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'user';
const params = {
  userinfo: ['userData', 'userLoan', 'userOrder', 'userFiscal']
};

const expected = {
  statusCode: 200,
  data: {
    id: '0EvLbHAPkNavGf68am7XTMxMZqg0mOKb',
    name: 'Anders Villadsen',
    address: 'Palle Juul-Jensens Boulevard 115',
    postalCode: '8200',
    loans: [
      {
        loanId: '120200553',
        dueDate: '2020-01-24T00:00:00+01:00',
        title: 'One Direction: den officielle årbog 2014',
        creator: 'Delmege, Sarah',
        materialId: '9788771312492',
        titleId: '51098838'
      }
    ],
    orders: [],
    debt: [
      {
        amount: '224',
        currency: 'DKK',
        date: '1970-01-01T00:00:00+01:00',
        title: ''
      },
      {
        amount: '50',
        currency: 'DKK',
        date: '1970-01-01T00:00:00+01:00',
        title: ''
      }
    ],
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
    opensearch: 'https://opensearch.addi.dk/b3.5_5.2/',
    openuserstatus: 'https://openuserstatus.addi.dk/2.0/',
    suggest: 'http://ortograf.mcp1-proxy.dbc.dk/ortograf/',
    recommend: 'http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim',
    performance: 'http://elk/elasticsearch',
    cicero: 'https://cicero-fbs.com/rest/external/v1/',
    openformat: 'XXXXX',
    holdings: 'XXXXX',
    infomediaservice: 'XXXXX'
  },
  infomedia: {userId: 'XXXXX', libraryCode: 'XXXXX'},
  cicero: {'DK-710100': 'XXXXX'},
  performance: {username: 'XXXXX', password: 'XXXXX'},
  search: {agency: '775100', profile: 'opac', collectionidentifiers: ''},
  storage: {user: 'XXXXX'},
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
  user: {
    id: '0102033692',
    salt: 'XXXXX',
    pin: 'XXXXX',
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
  '["openuserstatus",{"qs":{"agencyId":"790900","userId":"0102033692","authentication.groupIdAut":"XXXXX","authentication.passwordAut":"XXXXX","authentication.userIdAut":"XXXXX","action":"getUserStatus","selectUserInfo":["userData","userLoan","userOrder","userFiscal"],"outputType":"json"}}]':
    '{"getUserStatusResponse":{"userId":{"$":"0102033692","@":"ous"},"userName":{"$":"Anders Villadsen","@":"ous"},"userAddress":{"$":"Palle Juul-Jensens Boulevard 115","@":"ous"},"userPostalCode":{"$":"8200","@":"ous"},"userCountry":{"$":"DK","@":"ous"},"userStatus":{"loanedItems":{"loan":[{"author":{"$":"Delmege, Sarah","@":"ous"},"bibliographicItemId":{"$":"9788771312492","@":"ous"},"bibliographicRecordId":{"$":"51098838","@":"ous"},"pagination":{"$":"61 sider","@":"ous"},"publisher":{"$":"Karrusel 2014","@":"ous"},"language":{"$":"dan","@":"ous"},"mediumType":{"$":"Bog","@":"ous"},"title":{"$":"One Direction: den officielle \\u00e5rbog 2014","@":"ous"},"dateDue":{"$":"2020-01-24T00:00:00+01:00","@":"ous"},"loanId":{"$":"120200553","@":"ous"},"reminderLevel":{"$":"0","@":"ous"},"@":"ous"}],"loansCount":{"$":"1","@":"ous"},"@":"ous"},"orderedItems":{"ordersCount":{"$":"0","@":"ous"},"@":"ous"},"fiscalAccount":{"fiscalTransaction":[{"fiscalTransactionAmount":{"$":"224","@":"ous"},"fiscalTransactionCurrency":{"$":"DKK","@":"ous"},"fiscalTransactionDate":{"$":"1970-01-01T00:00:00+01:00","@":"ous"},"title":{"$":"","@":"ous"},"@":"ous"},{"fiscalTransactionAmount":{"$":"50","@":"ous"},"fiscalTransactionCurrency":{"$":"DKK","@":"ous"},"fiscalTransactionDate":{"$":"1970-01-01T00:00:00+01:00","@":"ous"},"title":{"$":"","@":"ous"},"@":"ous"}],"totalAmount":{"$":"274","@":"ous"},"totalAmountCurrency":{"$":"DKK","@":"ous"},"@":"ous"},"@":"ous"},"@":"ous"},"@namespaces":{"ous":"http:\\/\\/oss.dbc.dk\\/ns\\/openuserstatus"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: user_userinfo_userdata_userloan_userorder_userfiscal_spec_set.auto', () => {
  it('has same result as recorded (in user_userinfo_userdata_userloan_userorder_userfiscal_spec_set.auto)', () => {
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
