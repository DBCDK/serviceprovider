// AUTOTEST GENERATOR: {"endpoint":"suggest","params":{"q":"hest","type":"title","limit":3,"fields":["term"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'suggest';
const params = {q: 'hest', type: 'title', limit: 3, fields: ['term']};

const expected = {
  statusCode: 200,
  data: [
    {term: 'heste', val: 7427, type: ['title']},
    {term: 'ud og stjæle heste', val: 6702, type: ['title']},
    {term: 'hestenes dal', val: 5653, type: ['title']}
  ]
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
  '["http://ortograf.mcp1-proxy.dbc.dk/ortograf/suggest",{"qs":{"type":"title","q":"hest","count":3}}]':
    '{"responseHeader": {"status": 0, "timings": {"QTime": 10, "service-time": 17.283}}, "response": {"docs": [{"term": "heste", "weight": 7427, "payload": "heste|title", "all": ["heste"], "type": "title"}, {"term": "ud og stj\\u00e6le heste", "weight": 6702, "payload": "ud og stj\\u00e6le heste|title", "all": ["ud og stj\\u00e6le heste"], "type": "title"}, {"term": "hestenes dal", "weight": 5653, "payload": "hestenes dal|title", "all": ["hestenes dal"], "type": "title"}]}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: suggest_title.auto', () => {
  it('has same result as recorded (in suggest_title.auto)', () => {
    assert(
      Date.now() < +new Date('2020-01-17'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
