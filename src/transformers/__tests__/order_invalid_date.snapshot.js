/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
// Request: order {"pids":["870970-basis:28126727"],"expires":"2016-018-01","library":"DK-100451","phone":"123454","address":"ADDRESS","email":"EMAIL"}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

let context = {
  services: {
    ddbcmsapi: 'http://rest.filmstriben.dbc.inlead.dk/web/',
    moreinfo: 'http://moreinfo.addi.dk/2.6/',
    openagency: 'http://openagency.addi.dk/2.24/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/2.2/',
    openorder: 'https://openorder.addi.dk/2.7.1/',
    TESTopenorder: 'https://openorder.addi.dk/test_2.7.1/',
    opensearch: 'http://opensearch.addi.dk/b3.0_4.2/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.5/',
    rank: 'https://xptest.dbc.dk/ms/rank/v1',
    suggestpopular: 'http://xptest.dbc.dk/ms/entity-pop/v1',
    suggestcreator: 'http://xptest.dbc.dk/ms/entity-suggest/v1/creator',
    suggestlibrary: 'http://xptest.dbc.dk/ms/entity-suggest/v1/library',
    suggestsubject: 'http://xptest.dbc.dk/ms/entity-suggest/v1/subject',
    recommendurls: {
      default: 'https://xptest.dbc.dk/ms/recommend-cosim/v1',
      popular: 'https://xptest.dbc.dk/ms/recommend-pop/v1'
    }
  },
  search: {
    agency: '775100',
    profile: 'opac',
    collectionidentifiers:
      'rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog'
  },
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
  user: {agency: 'DK-100451', id: 'XXXXX', pin: 'XXXXX', salt: 'XXXXX'},
  app: {
    clientid: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101'
  }
};
let provider = Provider();
let mockData = {};

describe('Automated test: order-invalid-date', () => {
  it('expected response. ID:cj37ju, for {"pids":["870970-basis:28126727"],"expires":"2016-018-01","pickUpBranch":"DK-100451","phone":"123454","address":"ADDRESS","email":"EMAIL"}', done => {
    context.mockData = mockData;
    provider
      .execute(
        'order',
        {
          pids: ['870970-basis:28126727'],
          expires: '2016-018-01',
          pickUpBranch: 'DK-100451',
          phone: '123454',
          address: 'ADDRESS',
          email: 'EMAIL'
        },
        context
      )
      .then(result => {
        assert.deepEqual(result, {
          statusCode: 400,
          error:
            'The expires argument must be of the form YYYY-MM-DD (example: 2016-06-24)'
        });
        done();
      })
      .catch(result => {
        fail(
          {throw: result},
          {
            statusCode: 400,
            error:
              'The expires argument must be of the form YYYY-MM-DD (example: 2016-06-24)'
          }
        );
        done();
      });
  });
});
