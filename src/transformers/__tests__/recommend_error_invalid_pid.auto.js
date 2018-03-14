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
    moreinfo: 'https://moreinfo.addi.dk/2.10/',
    openagency: 'http://openagency.addi.dk/2.24/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/2.2/',
    PRODopenorder: 'https://openorder.addi.dk/2.8/',
    openorder: 'https://openorder.addi.dk/test_2.8/',
    opensearch: 'https://opensearch.addi.dk/b3.5_4.5/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    rank: 'https://xptest.dbc.dk/ms/rank/v1',
    suggest: 'XXXXX',
    suggestpopular: 'http://xptest.dbc.dk/ms/entity-pop/v1',
    suggestcreator: 'http://xptest.dbc.dk/ms/entity-suggest/v1/creator',
    suggestlibrary: 'http://xptest.dbc.dk/ms/entity-suggest/v1/library',
    suggestsubject: 'http://xptest.dbc.dk/ms/entity-suggest/v1/subject',
    recommend: 'http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim',
    recommendurls: 'XXXXX',
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
  '["http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim",{"method":"post","json":{"like":["WAT!?"]}}]': {
    traceback: [
      '  File "/root/miniconda3/lib/python3.5/site-packages/tornado/web.py", line 1541, in _execute\n    result = method(*self.path_args, **self.path_kwargs)\n',
      '  File "/root/miniconda3/lib/python3.5/site-packages/recomole/service.py", line 158, in post\n    self.__post()\n',
      '  File "/root/miniconda3/lib/python3.5/site-packages/recomole/service.py", line 165, in __post\n    recommendations, extra = self.recommender(**request)\n',
      '  File "/root/miniconda3/lib/python3.5/site-packages/recomole/loans_recommender.py", line 124, in __call__\n    return self.recommend(**kwargs)\n',
      '  File "/root/miniconda3/lib/python3.5/site-packages/recomole/loans_recommender.py", line 136, in recommend\n    die("Could not find any works for pids %s" % kwargs[\'like\'], exception=RecommenderError)\n',
      '  File "/root/miniconda3/lib/python3.5/site-packages/recomole/loans_recommender.py", line 39, in die\n    raise exception(mesg)\n'
    ],
    statusCode: 500,
    type: "<class 'recomole.loans_recommender.RecommenderError'>",
    value: "Could not find any works for pids ['WAT!?']"
  }
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: recommend_error_invalid_pid.auto', () => {
  it('has same result as recorded (in recommend_error_invalid_pid.auto)', () => {
    assert(
      Date.now() < +new Date('2018-06-12'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
