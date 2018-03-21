// AUTOTEST GENERATOR: {"endpoint":"suggest","params":{"q":"fisk","type":"subject","limit":3,"fields":["term"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'suggest';
const params = {q: 'fisk', type: 'subject', limit: 3, fields: ['term']};

const expected = {
  statusCode: 200,
  data: [
    {term: 'fisketure', val: 45600, type: ['subject']},
    {term: 'fiskeri', val: 45439, type: ['subject']},
    {term: 'fisk', val: 43374, type: ['subject']}
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
  '["http://ortograf.mcp1-proxy.dbc.dk/ortograf/suggest",{"qs":{"type":"subject","q":"fisk","count":3}}]':
    '{"responseHeader": {"status": 0, "timings": {"QTime": 5, "service-time": 15.885}}, "response": {"docs": [{"weight": 45600, "payload": "fisketure|subject", "term": "fisketure", "type": "subject", "all": ["fisketure"]}, {"weight": 45439, "payload": "fiskeri|subject", "term": "fiskeri", "type": "subject", "all": ["fiskeri"]}, {"weight": 43374, "payload": "fisk|subject", "term": "fisk", "type": "subject", "all": ["fisk"]}]}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: suggest_subject.auto', () => {
  it('has same result as recorded (in suggest_subject.auto)', () => {
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
