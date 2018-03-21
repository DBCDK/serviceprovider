// AUTOTEST GENERATOR: {"endpoint":"status","params":{}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'status';
const params = {};

const expected = {
  statusCode: 200,
  data: {
    version: '3.0.0',
    endOfServiceDate: '0000-00-00T00:00:00Z',
    openagency: {url: 'http://openagency.addi.dk/2.24/', ok: true},
    openholdingstatus: {
      url: 'https://openholdingstatus.addi.dk/2.2/',
      ok: false,
      error: 'ERROR checking for holdings DK-100450 on Kaninbjerget'
    },
    openorder: {url: 'https://openorder.addi.dk/test_2.8/', ok: true},
    opensearch: {url: 'https://opensearch.addi.dk/b3.5_4.5/', ok: true},
    openuserstatus: {url: 'https://openuserstatus.addi.dk/1.6.1/', ok: true},
    moreinfo: {url: 'https://moreinfo.addi.dk/2.10/', ok: true},
    ddbcmsapi: {url: 'https://cmscontent.dbc.dk/'},
    recommend: {
      url: 'http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim',
      ok: true
    },
    communityservice: {url: 'http://localhost:4010/v1'},
    suggest: {url: 'http://ortograf.mcp1-proxy.dbc.dk/ortograf/', ok: true}
  }
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
  '["http://openagency.addi.dk/2.24/?HowRU",{}]': 'Gr8',
  '["http://ortograf.mcp1-proxy.dbc.dk/ortograf/status",{}]':
    '{"solr": [{"url": "http://0.ortograf-solr.search.prod.mcp1.dbc.dk/solr/ortograf-all", "solr-ok": true}, {"url": "http://0.ortograf-solr.search.prod.mcp1.dbc.dk/solr/ortograf-creator", "solr-ok": true}, {"url": "http://0.ortograf-solr.search.prod.mcp1.dbc.dk/solr/ortograf-subject", "solr-ok": true}, {"url": "http://0.ortograf-solr.search.prod.mcp1.dbc.dk/solr/ortograf-title", "solr-ok": true}], "build": "HEAD", "mem-usage": 73560, "ok": true, "git": "HEAD", "version": "0.2", "ab-id": 1, "statistics": [{"total-failure": 68, "name": "ortograf", "startup": "2018-02-12 09:28:59", "window": {"success": {"75%": 21.307, "count": 4997, "mean": 18.482, "min": 7.217, "max": 102.692, "std": 7.857, "25%": 13.127, "50%": 16.116}, "failure": {"75%": 0.492, "count": 3, "mean": 0.43, "min": 0.305, "max": 0.517, "std": 0.11, "25%": 0.386, "50%": 0.468}}, "uptime": "891:46:20", "total-success": 598582, "windowstart": "10:22:35", "active": 0}]}',
  '["http://staging.recomole.mcp1-proxy.dbc.dk/recomole/status",{}]':
    '{"mem-usage": 104044, "statistics": [{"uptime": "356:22:14", "total-success": 21, "total-failure": 17, "window": {"failure": {"min": 0.526, "std": 12.211, "count": 17, "25%": 1.07, "50%": 2.681, "75%": 23.268, "max": 31.744, "mean": 11.242}, "success": {"min": 133.213, "std": 109.961, "count": 21, "25%": 153.216, "50%": 178.39, "75%": 215.044, "max": 535.136, "mean": 222.763}}, "active": 0, "name": "loan-cosim-recommender", "windowstart": "11:16:07", "startup": "2018-03-06 16:53:06"}], "build": "not available", "version": "devel", "ab-id": 1, "ok": true, "git": "not available"}',
  '["https://moreinfo.addi.dk/2.10/?HowRU",{}]': 'Gr8',
  '["https://openholdingstatus.addi.dk/2.2/?HowRU",{}]':
    'ERROR checking for holdings DK-100450 on Kaninbjerget',
  '["https://openorder.addi.dk/test_2.8/?HowRU",{}]': 'Gr8',
  '["https://opensearch.addi.dk/b3.5_4.5/?HowRU",{}]': 'Gr8',
  '["https://openuserstatus.addi.dk/1.6.1/?HowRU",{}]': 'Gr8'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: status.auto', () => {
  it('has same result as recorded (in status.auto)', () => {
    assert(
      Date.now() < +new Date('2018-06-19'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
