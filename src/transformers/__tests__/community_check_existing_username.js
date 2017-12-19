/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: getSingleProperty {"username":"Janae","selector":{"name":"Janae"},"_meta":{"type":"profile","elvisType":"profile","schemaMap":{"id":"id"},"schema":{"properties":{"id":{"type":"integer"}}}}}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

const context = {
  services: {
    ddbcmsapi: 'http://rest.filmstriben.dbc.inlead.dk/web/',
    moreinfo: 'http://moreinfo.addi.dk/2.6/',
    openagency: 'http://openagency.addi.dk/2.24/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/2.2/',
    PRODopenorder: 'https://openorder.addi.dk/2.7.1/',
    openorder: 'https://openorder.addi.dk/test_2.7.1/',
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
    },
    communityservice: 'http://localhost:4010/v1'
  },
  communityservice: {
    id: 1
  },
  search: {
    agency: '775100',
    profile: 'opac',
    collectionidentifiers:
      'rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog'
  },
  netpunkt: {
    user: 'XXXXX',
    group: 'XXXXX',
    password: 'XXXXX'
  },
  user: {
    agency: '100451',
    id: 'XXXXX',
    pin: 'XXXXX',
    salt: 'XXXXX'
  },
  app: {
    clientid: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  },
  crud: {}
};
const provider = Provider();
const mockData = {
  '["http://localhost:4010/v1/community/1/query",{"method":"post","json":{"Profile":{"name":"Janae"},"Include":{"id":"id"}}}]': {
    data: {
      id: 6
    }
  }
};

describe('Automated test: check_existing_username-positive', () => {
  it('expected response. ID:ga6r5c, for {"username":"Janae","selector":{"name":"Janae"},"_meta":{"type":"profile","elvisType":"profile","schemaMap":{"id":"id"},"schema":{"properties":{"id":{"type":"integer"}}}}}', done => {
    context.mockData = mockData;
    provider
      .execute(
        'getSingleProperty',
        {
          username: 'Janae',
          selector: {name: 'Janae'},
          _meta: {
            type: 'profile',
            elvisType: 'profile',
            schemaMap: {id: 'id'},
            schema: {properties: {id: {type: 'integer'}}}
          }
        },
        context
      )
      .then(result => {
        assert.deepEqual(result, {
          status: 200,
          data: {
            id: 6
          },
          errors: []
        });
        done();
      })
      .catch(result => {
        fail(
          {throw: result},
          {
            status: 200,
            data: {
              id: 6
            },
            errors: []
          }
        );
        done();
      });
  });
});
