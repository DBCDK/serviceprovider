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
    openagency: {url: 'https://openagency.addi.dk/2.34/', ok: true},
    openholdingstatus: {
      url: 'https://openholdingstatus.addi.dk/3.0/',
      ok: false,
      error: 'ERROR checking for holdings DK-100450 on Kaninbjerget'
    },
    openorder: {url: 'https://openorder.addi.dk/2.8/', ok: true},
    opensearch: {url: 'https://opensearch.addi.dk/b3.5_5.0/', ok: true},
    openuserstatus: {url: 'https://openuserstatus.addi.dk/1.6.1/', ok: true},
    moreinfo: {url: 'https://moreinfo.addi.dk/2.11/', ok: true},
    ddbcmsapi: {url: 'https://cmscontent.dbc.dk/'},
    recommend: {
      url: 'http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim',
      ok: true
    },
    communityservice: {url: ''},
    suggest: {url: 'http://ortograf.mcp1-proxy.dbc.dk/ortograf/', ok: true}
  }
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
  '["http://ortograf.mcp1-proxy.dbc.dk/ortograf/status",{}]':
    '{"ok": true, "build": "1053", "git": "07dfa1446deaf502a87f905c20ea4c248ec97de3", "version": "0.2", "ab-id": 1, "mem-usage": 71968, "solr": [{"url": "http://0.ortograf-solr.microsearch.prod.mcp1.dbc.dk/solr/ortograf-all", "solr-ok": true}, {"url": "http://0.ortograf-solr.microsearch.prod.mcp1.dbc.dk/solr/ortograf-creator", "solr-ok": true}, {"url": "http://0.ortograf-solr.microsearch.prod.mcp1.dbc.dk/solr/ortograf-subject", "solr-ok": true}, {"url": "http://0.ortograf-solr.microsearch.prod.mcp1.dbc.dk/solr/ortograf-title", "solr-ok": true}], "statistics": [{"startup": "2018-06-07 15:39:06", "uptime": "308:23:19", "active": 0, "windowstart": "20:35:02", "total-success": 110760, "total-failure": 3, "window": {"success": {"count": 5000, "mean": 12.616, "std": 4.068, "min": 6.068, "25%": 9.951, "50%": 11.048, "75%": 14.179, "max": 44.912}, "failure": {"count": 0, "mean": null, "std": null, "min": null, "25%": null, "50%": null, "75%": null, "max": null}}, "name": "ortograf"}]}',
  '["http://staging.recomole.mcp1-proxy.dbc.dk/recomole/status",{}]':
    '{"ok": true, "build": "353", "git": "943b5b3d76fcfc70ac441d44f76990acdddebf05", "version": "0.1.0", "ab-id": 1, "mem-usage": 316784, "statistics": [{"startup": "2018-04-16 09:59:14", "uptime": "1562:03:11", "active": 0, "windowstart": "11:42:59", "total-success": 3807, "total-failure": 13, "window": {"success": {"count": 3807, "mean": 162.467, "std": 141.344, "min": 26.746, "25%": 99.981, "50%": 114.101, "75%": 176.231, "max": 1508.347}, "failure": {"count": 13, "mean": 43.4, "std": 40.966, "min": 13.593, "25%": 16.2, "50%": 26.587, "75%": 52.047, "max": 149.669}}, "name": "loan-cosim-recommender"}]}',
  '["https://moreinfo.addi.dk/2.11/?HowRU",{}]': 'Gr8',
  '["https://openagency.addi.dk/2.34/?HowRU",{}]': 'Gr8',
  '["https://openholdingstatus.addi.dk/3.0/?HowRU",{}]':
    'ERROR checking for holdings DK-100450 on Kaninbjerget',
  '["https://openorder.addi.dk/2.8/?HowRU",{}]': 'Gr8',
  '["https://opensearch.addi.dk/b3.5_5.0/?HowRU",{}]': 'Gr8',
  '["https://openuserstatus.addi.dk/1.6.1/?HowRU",{}]': 'Gr8'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: status.auto', () => {
  it('has same result as recorded (in status.auto)', () => {
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
