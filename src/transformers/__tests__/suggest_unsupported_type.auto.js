// AUTOTEST GENERATOR: {"endpoint":"suggest","params":{"q":"herlev","type":"unsupported","limit":3,"fields":["term"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'suggest';
const params = { q: 'herlev', type: 'unsupported', limit: 3, fields: ['term'] };

const expected = {
  statusCode: 500,
  error:
    "unknown type 'unsupported'. supported types: ['all', 'creator', 'subject', 'title']"
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
  performance: { password: 'XXXXX', username: 'XXXXX' },
  search: { agency: '710100', profile: 'opac' },
  netpunkt: { user: 'XXXXX', group: 'XXXXX', password: 'XXXXX' },
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
  '["http://ortograf.mcp1-proxy.dbc.dk/ortograf/suggest",{"qs":{"type":"unsupported","q":"herlev","count":3}}]':
    '{"statusCode": 500, "type": "<class \'ortograf.ortograf.OrtografError\'>", "value": "unknown type \'unsupported\'. supported types: [\'all\', \'creator\', \'subject\', \'title\']", "traceback": ["  File \\"/root/miniconda3/lib/python3.6/site-packages/tornado/web.py\\", line 1541, in _execute\\n    result = method(*self.path_args, **self.path_kwargs)\\n", "  File \\"/root/miniconda3/lib/python3.6/site-packages/ortograf/ortograf.py\\", line 98, in get\\n    validate(params)\\n", "  File \\"/root/miniconda3/lib/python3.6/site-packages/ortograf/ortograf.py\\", line 82, in validate\\n    raise OrtografError(\\"unknown type \'%s\'. supported types: %s\\" % (params[\'type\'], str(list(TYPE_MAP.keys()))))\\n"]}'
};

import Provider from '../../provider/Provider.js';
import { assert, fail } from 'chai';
const provider = Provider();

describe('Automated test: suggest_unsupported_type.auto', () => {
  it('has same result as recorded (in suggest_unsupported_type.auto)', () => {
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
