// AUTOTEST GENERATOR: {"endpoint":"holdingsitems","params":{"agency":"761500","item_id":"3439785456"}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'holdingsitems';
const params = {agency: '761500', item_id: '3439785456'};

const expected = {
  statusCode: 200,
  data: {
    holdingsitems: [
      {
        bibliographicRecordId: '01201182',
        branch: 'Brædstrup Bibliotek',
        branchId: '',
        circulationRule: 'alm',
        department: 'Voksen',
        issueId: '',
        issueText: '',
        itemId: '3439785456',
        location: '',
        note: '',
        readyForLoan: 1,
        status: 'OnShelf',
        subLocation: 'Udenlandsk skønlitteratur'
      }
    ]
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
    holdingsitems: 'XXXXX',
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
  '["XXXXX/holdings-by-item-id",{"qs":{"agency":"761500","pid":null,"itemId":"3439785456","appId":"openplatform/v3/"},"useQuerystring":true}]':
    '{"holdings":[{"bibliographicRecordId":"01201182","branch":"Brædstrup Bibliotek","branchId":"","circulationRule":"alm","department":"Voksen","issueId":"","issueText":"","itemId":"3439785456","location":"","note":"","readyForLoan":1,"status":"OnShelf","subLocation":"Udenlandsk skønlitteratur"}],"trackingId":"506db625-3d6b-4201-98e0-7a7ac2acb299"}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: holding_item_id_result.auto', () => {
  it('has same result as recorded (in holding_item_id_result.auto)', () => {
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
