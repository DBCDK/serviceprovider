// AUTOTEST GENERATOR: {"endpoint":"recommend","params":{"like":["WAT!?"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'recommend';
const params = {like: ['WAT!?']};

const expected = {
  statusCode: 500,
  error: "Could not find any works for pids ['WAT!?']"
};

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.11/',
    openagency: 'https://openagency.addi.dk/2.34/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/3.0/',
    openorder: 'https://openorder.addi.dk/2.8/',
    opensearch: 'https://opensearch.addi.dk/b3.5_5.2/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    rank: 'https://xptest.dbc.dk/ms/rank/v1',
    suggest: 'http://ortograf.mcp1-proxy.dbc.dk/ortograf/',
    recommend: 'http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim',
    suggestpopular: 'XXXXX',
    suggestcreator: 'XXXXX',
    suggestlibrary: 'XXXXX',
    suggestsubject: 'XXXXX',
    performance: 'https://elk-p01.dbc.dk:9100/',
    recommendurls: 'XXXXX'
  },
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
  '["http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim",{"method":"post","json":{"like":["WAT!?"]}}]': {
    statusCode: 500,
    type: "<class 'recomole.recommender.RecommenderError'>",
    value: "Could not find any works for pids ['WAT!?']",
    traceback: [
      '  File "/root/miniconda3/lib/python3.6/site-packages/tornado/web.py", line 1541, in _execute\n    result = method(*self.path_args, **self.path_kwargs)\n',
      '  File "/root/miniconda3/lib/python3.6/site-packages/recomole/service.py", line 158, in post\n    self.__post()\n',
      '  File "/root/miniconda3/lib/python3.6/site-packages/recomole/service.py", line 165, in __post\n    recommendations, extra = self.recommender(**request)\n',
      '  File "/root/miniconda3/lib/python3.6/site-packages/recomole/recommender.py", line 301, in __call__\n    return self.recommend(**kwargs)\n',
      '  File "/root/miniconda3/lib/python3.6/site-packages/recomole/recommender.py", line 313, in recommend\n    die("Could not find any works for pids %s" % kwargs[\'like\'], exception=RecommenderError)\n',
      '  File "/root/miniconda3/lib/python3.6/site-packages/recomole/recommender.py", line 39, in die\n    raise exception(mesg)\n'
    ]
  }
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: recommend_error_invalid_pid.auto', () => {
  it('has same result as recorded (in recommend_error_invalid_pid.auto)', () => {
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
