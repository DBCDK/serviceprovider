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
  '["http://ortograf.mcp1-proxy.dbc.dk/ortograf/suggest",{"qs":{"type":"subject","q":"herlev","count":3}}]':
    '{"responseHeader": {"status": 0, "timings": {"QTime": 1, "service-time": 7.752}}, "response": {"docs": [{"term": "k\\u00f8benhavns amts sygehus i herlev", "weight": 32, "payload": "k\\u00f8benhavns amts sygehus i herlev|subject", "all": ["k\\u00f8benhavns amts sygehus i herlev"], "type": "subject"}, {"term": "herlev", "weight": 1, "payload": "herlev|subject", "all": ["herlev"], "type": "subject"}, {"term": "herlev hospital", "weight": 0, "payload": "herlev hospital|subject", "all": ["herlev hospital"], "type": "subject"}]}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: suggest_subject_fields.auto', () => {
  it('has same result as recorded (in suggest_subject_fields.auto)', () => {
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
