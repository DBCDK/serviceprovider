// AUTOTEST GENERATOR: {"endpoint":"suggest","params":{"q":"rowling","type":"creator","limit":3,"fields":["term"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'suggest';
const params = {q: 'rowling', type: 'creator', limit: 3, fields: ['term']};

const expected = {
  statusCode: 200,
  data: [
    {term: 'rowling joanne k.', val: 154062, type: ['creator']},
    {term: 'rowling j.k.', val: 58, type: ['creator']},
    {term: 'joanne k rowling', val: 44, type: ['creator']}
  ]
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
  '["http://ortograf.mcp1-proxy.dbc.dk/ortograf/suggest",{"qs":{"type":"creator","q":"rowling","count":3}}]':
    '{"responseHeader": {"status": 0, "timings": {"QTime": 2, "service-time": 8.946000000000002}}, "response": {"docs": [{"term": "rowling joanne k.", "weight": 154062, "payload": "joanne k. rowling|creator", "all": ["joanne k. rowling"], "type": "creator"}, {"term": "rowling j.k.", "weight": 58, "payload": "j.k. rowling|creator", "all": ["j.k. rowling"], "type": "creator"}, {"term": "joanne k rowling", "weight": 44, "payload": "joanne k rowling|creator", "all": ["joanne k rowling"], "type": "creator"}]}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: suggest_creator.auto', () => {
  it('has same result as recorded (in suggest_creator.auto)', () => {
    assert(
      Date.now() < +new Date('2022-01-01'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
