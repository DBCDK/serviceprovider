/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: updateEntity {"id":"1","username":"larsen","modified_by":1,"_meta":{"type":null,"elvisType":"profile","schemaMap":{"username":"name","displayName":"attributes.displayName","description":"attributes.description","email":"attributes.email","phone":"attributes.phone","created_epoch":"created_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","deleted_epoch":"deleted_epoch","birthday":"attributes.birthday","fullName":"attributes.fullName","id":"id"},"schema":{"type":"object","properties":{"username":{"type":"string"},"displayName":{"type":"string"},"description":{"type":"string"},"email":{"type":"string"},"phone":{"type":"string"},"created_epoch":{"type":"number","format":"integer","readOnly":true},"modified_epoch":{"type":"number","format":"integer","readOnly":true},"modified_by":{"type":"integer"},"deleted_epoch":{"type":"number","format":"integer","readOnly":true},"birthday":{"type":"string","format":"date"},"fullName":{"type":"string"},"id":{"type":"number","format":"integer","readOnly":true}},"required":["username"],"additionalProperties":false}}}

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
    communityservice: 'http://communitybe-s01:8000/v1'
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
  '["http://communitybe-s01:8000/v1/community/1/profile/1",{"method":"put","json":{"name":"larsen","attributes":{},"modified_by":1}}]': {
    links: {
      self: '/v1/community/1/profile/1'
    },
    data: {
      id: 1,
      created_epoch: 1491984806,
      deleted_epoch: null,
      modified_epoch: 1493117139,
      modified_by: 1,
      deleted_by: null,
      community_id: 1,
      name: 'larsen',
      attributes: {},
      log: [
        {
          name: 'hans',
          modified_by: 1,
          modified_epoch: 1492065383
        },
        {
          modified_by: 1,
          modified_epoch: 1492065599
        },
        {
          modified_by: 1,
          modified_epoch: 1492065691
        },
        {
          modified_by: 1,
          modified_epoch: 1492065830
        },
        {
          name: 'hansen',
          modified_by: 1,
          modified_epoch: 1492065905
        },
        {
          modified_by: 1,
          modified_epoch: 1492501954
        },
        {
          modified_by: 1,
          modified_epoch: 1493117000
        },
        {
          modified_by: 1,
          modified_epoch: 1493117018
        },
        {
          modified_by: 1,
          modified_epoch: 1493117043
        },
        {
          modified_by: 1,
          modified_epoch: 1493117139
        }
      ]
    }
  }
};

describe('Automated test: update_profile', () => {
  it('expected response. ID:2aga8m, for {"id":"1","username":"larsen","modified_by":1,"_meta":{"type":null,"elvisType":"profile","schemaMap":{"username":"name","displayName":"attributes.displayName","description":"attributes.description","email":"attributes.email","phone":"attributes.phone","created_epoch":"created_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","deleted_epoch":"deleted_epoch","birthday":"attributes.birthday","fullName":"attributes.fullName","id":"id"},"schema":{"type":"object","properties":{"username":{"type":"string"},"displayName":{"type":"string"},"description":{"type":"string"},"email":{"type":"string"},"phone":{"type":"string"},"created_epoch":{"type":"number","format":"integer","readOnly":true},"modified_epoch":{"type":"number","format":"integer","readOnly":true},"modified_by":{"type":"integer"},"deleted_epoch":{"type":"number","format":"integer","readOnly":true},"birthday":{"type":"string","format":"date"},"fullName":{"type":"string"},"id":{"type":"number","format":"integer","readOnly":true}},"required":["username"],"additionalProperties":false}}}', done => {
    context.mockData = mockData;
    provider
      .execute(
        'updateEntity',
        {
          id: '1',
          username: 'larsen',
          modified_by: 1,
          _meta: {
            type: null,
            elvisType: 'profile',
            schemaMap: {
              username: 'name',
              displayName: 'attributes.displayName',
              description: 'attributes.description',
              email: 'attributes.email',
              phone: 'attributes.phone',
              created_epoch: 'created_epoch',
              modified_epoch: 'modified_epoch',
              modified_by: 'modified_by',
              deleted_epoch: 'deleted_epoch',
              birthday: 'attributes.birthday',
              fullName: 'attributes.fullName',
              id: 'id'
            },
            schema: {
              type: 'object',
              properties: {
                username: {type: 'string'},
                displayName: {type: 'string'},
                description: {type: 'string'},
                email: {type: 'string'},
                phone: {type: 'string'},
                created_epoch: {
                  type: 'number',
                  format: 'integer',
                  readOnly: true
                },
                modified_epoch: {
                  type: 'number',
                  format: 'integer',
                  readOnly: true
                },
                modified_by: {type: 'integer'},
                deleted_epoch: {
                  type: 'number',
                  format: 'integer',
                  readOnly: true
                },
                birthday: {type: 'string', format: 'date'},
                fullName: {type: 'string'},
                id: {type: 'number', format: 'integer', readOnly: true}
              },
              required: ['username'],
              additionalProperties: false
            }
          }
        },
        context
      )
      .then(result => {
        assert.deepEqual(result, {
          status: 200,
          data: {
            username: 'larsen',
            created_epoch: 1491984806,
            modified_epoch: 1493117139,
            modified_by: 1,
            id: 1
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
              username: 'larsen',
              created_epoch: 1491984806,
              modified_epoch: 1493117139,
              modified_by: 1,
              id: 1
            },
            errors: []
          }
        );
        done();
      });
  });
});
