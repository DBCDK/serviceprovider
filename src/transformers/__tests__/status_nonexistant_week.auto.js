// AUTOTEST GENERATOR: {"endpoint":"status","params":{"week":"2010-W03","fields":["performance"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'status';
const params = {week: '2010-W03', fields: ['performance']};

const expected = {
  statusCode: 404,
  error: 'No statistics available for week 2010-W03'
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
  '["https://elk-p01.dbc.dk:9100/prod_ux-2010.03//_search",{"method":"POST","auth":{"pass":"XXXXX","user":"XXXXX"},"json":{"size":0,"query":{"match":{"msg":"transformer-done"}},"aggs":{"version":{"terms":{"field":"version.keyword"},"aggs":{"endpoints":{"terms":{"field":"name.keyword"},"aggs":{"external":{"percentiles":{"field":"timings.external"}},"total":{"percentiles":{"field":"timings.total"}}}}}}}}}]': {
    error: {
      root_cause: [
        {
          type: 'index_not_found_exception',
          reason: 'no such index',
          'resource.type': 'index_or_alias',
          'resource.id': 'prod_ux-2010.03',
          index_uuid: '_na_',
          index: 'prod_ux-2010.03'
        }
      ],
      type: 'index_not_found_exception',
      reason: 'no such index',
      'resource.type': 'index_or_alias',
      'resource.id': 'prod_ux-2010.03',
      index_uuid: '_na_',
      index: 'prod_ux-2010.03'
    },
    status: 404
  }
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: status_nonexistant_week.auto', () => {
  it('has same result as recorded (in status_nonexistant_week.auto)', () => {
    assert(
      Date.now() < +new Date('2018-09-18'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
