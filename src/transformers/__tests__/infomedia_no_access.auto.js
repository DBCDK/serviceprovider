// AUTOTEST GENERATOR: {"endpoint":"infomedia","params":{"pid":"870971-anmeld:34146233"}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'infomedia';
const params = {pid: '870971-anmeld:34146233'};

const expected = {
  statusCode: 403,
  error: 'forbidden'
};

const context = {
  access: [],
  services: {
    infomediaservice: 'http://infomedia.mcp1-proxy.dbc.dk/server.php'
  },
  infomedia: {
    userId: 'XXXXX'
  },
  user: {
    libraryId: 'DK-710100'
  }
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: infomedia.auto', () => {
  it('has same result as recorded (in  infomedia.auto)', () => {
    assert(
      Date.now() < +new Date('2024-01-01'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
