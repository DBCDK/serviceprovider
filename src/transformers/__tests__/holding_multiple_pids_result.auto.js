// AUTOTEST GENERATOR: {"endpoint":"holdingsitems","params":{"agency":"761500","pids":["someRandomStuff:01242180","hanekam:01242091"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'holdingsitems';
const params = {
  agency: '761500',
  pids: ['someRandomStuff:01242180', 'hanekam:01242091']
};

const expected = {
  statusCode: 200,
  data: [
    {
      pid: 'someRandomStuff:01242180',
      holdingsitems: [
        {
          bibliographicRecordId: '01242180',
          branch: 'Brædstrup Bibliotek',
          branchId: '',
          circulationRule: 'alm',
          department: 'Voksen',
          issueId: '',
          issueText: '',
          itemId: '4140294565',
          location: '',
          note: '',
          readyForLoan: 3,
          status: 'OnShelf',
          subLocation: 'Fag'
        },
        {
          bibliographicRecordId: '01242180',
          branch: 'Horsens Bibliotek',
          branchId: '',
          circulationRule: '0',
          department: 'Voksen',
          issueId: '',
          issueText: '',
          itemId: '746452144',
          location: '',
          note: '',
          readyForLoan: 3,
          status: 'NotForLoan',
          subLocation: 'Fag'
        },
        {
          bibliographicRecordId: '01242180',
          branch: 'Horsens Bibliotek',
          branchId: '',
          circulationRule: 'alm',
          department: 'Voksen',
          issueId: '',
          issueText: '',
          itemId: '3452301496',
          location: 'Magasin',
          note: '',
          readyForLoan: 3,
          status: 'OnShelf',
          subLocation: ''
        }
      ]
    },
    {
      pid: 'hanekam:01242091',
      holdingsitems: [
        {
          bibliographicRecordId: '01242091',
          branch: 'Horsens Bibliotek',
          branchId: '',
          circulationRule: '0',
          department: 'Voksen',
          issueId: '',
          issueText: '',
          itemId: '746452063',
          location: '',
          note: '',
          readyForLoan: 3,
          status: 'NotForLoan',
          subLocation: 'Fag'
        },
        {
          bibliographicRecordId: '01242091',
          branch: 'Horsens Bibliotek',
          branchId: '',
          circulationRule: 'alm',
          department: 'Voksen',
          issueId: '',
          issueText: '',
          itemId: '3452299146',
          location: 'Magasin',
          note: '',
          readyForLoan: 3,
          status: 'OnShelf',
          subLocation: ''
        },
        {
          bibliographicRecordId: '01242091',
          branch: 'Brædstrup Bibliotek',
          branchId: '',
          circulationRule: 'alm',
          department: 'Voksen',
          issueId: '',
          issueText: '',
          itemId: '4140294484',
          location: '',
          note: '',
          readyForLoan: 3,
          status: 'OnShelf',
          subLocation: 'Fag'
        }
      ]
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
    openorder: 'https://openorder.addi.dk/test_3.0',
    opensearch: 'https://opensearch.addi.dk/b3.5_5.2/',
    openuserstatus: 'https://openuserstatus.addi.dk/2.0/',
    suggest: 'http://ortograf.mcp1-proxy.dbc.dk/ortograf/',
    recommend: 'http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim',
    performance: 'http://elk/elasticsearch',
    cicero: 'https://cicero-fbs.com/rest/external/v1/',
    openformat: 'XXXXX',
    holdingsitems: 'XXXXX',
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
    orderSystem: 'bibliotekdk'
  }
};
const mockData = {
  '["XXXXX/holdings-by-pid",{"qs":{"agency":"761500","pid":["someRandomStuff:01242180","hanekam:01242091"],"itemId":null,"appId":"openplatform/v3/"},"useQuerystring":true}]':
    '{"holdings":{"someRandomStuff:01242180":[{"bibliographicRecordId":"01242180","branch":"Brædstrup Bibliotek","branchId":"","circulationRule":"alm","department":"Voksen","issueId":"","issueText":"","itemId":"4140294565","location":"","note":"","readyForLoan":3,"status":"OnShelf","subLocation":"Fag"},{"bibliographicRecordId":"01242180","branch":"Horsens Bibliotek","branchId":"","circulationRule":"0","department":"Voksen","issueId":"","issueText":"","itemId":"746452144","location":"","note":"","readyForLoan":3,"status":"NotForLoan","subLocation":"Fag"},{"bibliographicRecordId":"01242180","branch":"Horsens Bibliotek","branchId":"","circulationRule":"alm","department":"Voksen","issueId":"","issueText":"","itemId":"3452301496","location":"Magasin","note":"","readyForLoan":3,"status":"OnShelf","subLocation":""}],"hanekam:01242091":[{"bibliographicRecordId":"01242091","branch":"Horsens Bibliotek","branchId":"","circulationRule":"0","department":"Voksen","issueId":"","issueText":"","itemId":"746452063","location":"","note":"","readyForLoan":3,"status":"NotForLoan","subLocation":"Fag"},{"bibliographicRecordId":"01242091","branch":"Horsens Bibliotek","branchId":"","circulationRule":"alm","department":"Voksen","issueId":"","issueText":"","itemId":"3452299146","location":"Magasin","note":"","readyForLoan":3,"status":"OnShelf","subLocation":""},{"bibliographicRecordId":"01242091","branch":"Brædstrup Bibliotek","branchId":"","circulationRule":"alm","department":"Voksen","issueId":"","issueText":"","itemId":"4140294484","location":"","note":"","readyForLoan":3,"status":"OnShelf","subLocation":"Fag"}]},"trackingId":"bfaeefdb-51b8-4fef-a642-3a5453ea60b9"}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: holding_multiple_pids_result.auto', () => {
  it('has same result as recorded (in holding_multiple_pids_result.auto)', () => {
    assert(
      Date.now() < +new Date('2025-01-01'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
