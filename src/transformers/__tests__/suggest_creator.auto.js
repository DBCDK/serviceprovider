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
  '["http://ortograf.mcp1-proxy.dbc.dk/ortograf/suggest",{"qs":{"type":"creator","q":"rowling","count":3}}]':
    '{"responseHeader": {"status": 0, "timings": {"service-time": 14.5, "QTime": 3}}, "response": {"docs": [{"weight": 154062, "payload": "joanne k. rowling|creator", "term": "rowling joanne k.", "all": ["joanne k. rowling"], "type": "creator"}, {"weight": 58, "payload": "j.k. rowling|creator", "term": "rowling j.k.", "all": ["j.k. rowling"], "type": "creator"}, {"weight": 44, "payload": "joanne k rowling|creator", "term": "joanne k rowling", "all": ["joanne k rowling"], "type": "creator"}]}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: suggest_creator.auto', () => {
  it('has same result as recorded (in suggest_creator.auto)', () => {
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
