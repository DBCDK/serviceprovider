// AUTOTEST GENERATOR: {"endpoint":"suggest","params":{"q":"herlev","type":"unsupported","limit":3,"fields":["term"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'suggest';
const params = {q: 'herlev', type: 'unsupported', limit: 3, fields: ['term']};

const expected = {
  statusCode: 500,
  error:
    "unknown type 'unsupported'. supported types: ['all', 'title', 'subject', 'creator']"
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
  '["http://ortograf.mcp1-proxy.dbc.dk/ortograf/suggest",{"qs":{"type":"unsupported","q":"herlev","count":3}}]':
    '{"traceback": ["  File \\"/root/miniconda3/lib/python3.5/site-packages/tornado/web.py\\", line 1510, in _execute\\n    result = method(*self.path_args, **self.path_kwargs)\\n", "  File \\"/root/miniconda3/lib/python3.5/site-packages/ortograf/ortograf.py\\", line 71, in get\\n    validate(params)\\n", "  File \\"/root/miniconda3/lib/python3.5/site-packages/ortograf/ortograf.py\\", line 55, in validate\\n    raise OrtografError(\\"unknown type \'%s\'. supported types: %s\\" % (params[\'type\'], str(list(TYPE_MAP.keys()))))\\n"], "value": "unknown type \'unsupported\'. supported types: [\'all\', \'title\', \'subject\', \'creator\']", "statusCode": 500, "type": "<class \'ortograf.ortograf.OrtografError\'>"}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: suggest_unsupported_type.auto', () => {
  it('has same result as recorded (in suggest_unsupported_type.auto)', () => {
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
