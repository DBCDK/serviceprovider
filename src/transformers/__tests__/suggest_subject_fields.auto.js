// AUTOTEST GENERATOR: {"endpoint":"suggest","params":{"q":"herlev","type":"subject","limit":3,"fields":["term","val","type"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'suggest';
const params = {
  q: 'herlev',
  type: 'subject',
  limit: 3,
  fields: ['term', 'val', 'type']
};

const expected = {
  statusCode: 200,
  data: [
    {term: 'københavns amts sygehus i herlev', val: 32, type: ['subject']},
    {term: 'herlev', val: 1, type: ['subject']},
    {term: 'herlev hospital', val: 0, type: ['subject']}
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
  '["http://ortograf.mcp1-proxy.dbc.dk/ortograf/suggest",{"qs":{"type":"subject","q":"herlev","count":3}}]':
    '{"responseHeader": {"timings": {"QTime": 2, "service-time": 12.211}, "status": 0}, "response": {"docs": [{"term": "k\\u00f8benhavns amts sygehus i herlev", "all": ["k\\u00f8benhavns amts sygehus i herlev"], "weight": 32, "payload": "k\\u00f8benhavns amts sygehus i herlev|subject", "type": "subject"}, {"term": "herlev", "all": ["herlev"], "weight": 1, "payload": "herlev|subject", "type": "subject"}, {"term": "herlev hospital", "all": ["herlev hospital"], "weight": 0, "payload": "herlev hospital|subject", "type": "subject"}]}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: suggest_subject_fields.auto', () => {
  it('has same result as recorded (in suggest_subject_fields.auto)', () => {
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
