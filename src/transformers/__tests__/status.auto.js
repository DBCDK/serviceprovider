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
  '["http://openagency.addi.dk/2.24/?HowRU",{}]': 'Gr8',
  '["http://ortograf.mcp1-proxy.dbc.dk/ortograf/status",{}]':
    '{"ok": true, "ab-id": 1, "build": "HEAD", "git": "HEAD", "statistics": [{"uptime": "1034:40:44", "active": 0, "total-failure": 107, "startup": "2018-02-12 09:27:41", "total-success": 711224, "window": {"failure": {"std": null, "75%": null, "25%": null, "50%": null, "max": null, "min": null, "mean": null, "count": 0}, "success": {"std": 7.221, "75%": 21.808, "25%": 13.526, "50%": 16.462, "max": 68.898, "min": 5.857, "mean": 18.56, "count": 5000}}, "windowstart": "21:12:57", "name": "ortograf"}], "solr": [{"solr-ok": true, "url": "http://0.ortograf-solr.search.prod.mcp1.dbc.dk/solr/ortograf-all"}, {"solr-ok": true, "url": "http://0.ortograf-solr.search.prod.mcp1.dbc.dk/solr/ortograf-creator"}, {"solr-ok": true, "url": "http://0.ortograf-solr.search.prod.mcp1.dbc.dk/solr/ortograf-subject"}, {"solr-ok": true, "url": "http://0.ortograf-solr.search.prod.mcp1.dbc.dk/solr/ortograf-title"}], "version": "0.2", "mem-usage": 73188}',
  '["http://staging.recomole.mcp1-proxy.dbc.dk/recomole/status",{}]':
    '{"mem-usage": 104044, "statistics": [{"uptime": "499:15:19", "total-success": 23, "total-failure": 18, "window": {"failure": {"min": 0.526, "std": 12.38, "count": 18, "25%": 1.096, "50%": 3.653, "75%": 23.546, "max": 31.744, "mean": 12.089}, "success": {"min": 133.213, "std": 106.174, "count": 23, "25%": 153.461, "50%": 178.39, "75%": 237.939, "max": 535.136, "mean": 221.416}}, "active": 0, "name": "loan-cosim-recommender", "windowstart": "11:16:07", "startup": "2018-03-06 16:53:06"}], "build": "not available", "version": "devel", "ab-id": 1, "ok": true, "git": "not available"}',
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
      Date.now() < +new Date('2018-06-25'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
