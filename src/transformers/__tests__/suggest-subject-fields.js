/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: suggest {"q":"herlev","type":"subject","limit":3,"fields":["term","id"]}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.10/',
    openagency: 'http://openagency.addi.dk/2.24/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/2.2/',
    PRODopenorder: 'https://openorder.addi.dk/2.8/',
    openorder: 'https://openorder.addi.dk/test_2.8/',
    opensearch: 'https://opensearch.addi.dk/b3.0_4.5/',
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
    id: 'XXXXX',
    salt: 'XXXXX',
    pin: 'XXXXX',
    libraryId: '710100',
    agency: '710100',
    isil: 'DK-710100'
  },
  app: {
    clientid: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  }
};
const provider = Provider();
const mockData = {
  '["suggestsubject",{"qs":{"query":"herlev","rs":3,"n":3}}]':
    '{"responseHeader": {"svn-revision": "106527", "ab-id": "1", "rt_searches": ["herlev", "herlev ruterne", "herlev statsskole"], "args": {"hr": "None", "hl": "None", "rs": "3"}, "q": "herlev", "version": "0.2.0", "build": "549", "time": 0}, "response": {"suggestions": [{"frequency": 105, "suggestion": "herlev"}, {"frequency": 19, "suggestion": "amtssygehuset i herlev"}, {"frequency": 8, "suggestion": "nørre herlev"}], "numFound": 5}}'
};

describe('Automated test: suggest-subject-fields', () => {
  it('expected response. ID:x0ymq6, for {"q":"herlev","type":"subject","limit":3,"fields":["term","id"]}', done => {
    context.mockData = mockData;
    provider
      .execute(
        'suggest',
        {q: 'herlev', type: 'subject', limit: 3, fields: ['term', 'id']},
        context
      )
      .then(result => {
        assert.deepEqual(result, {
          statusCode: 200,
          data: [
            {
              term: 'herlev'
            },
            {
              term: 'amtssygehuset i herlev'
            },
            {
              term: 'nørre herlev'
            }
          ]
        });
        done();
      })
      .catch(result => {
        fail(
          {throw: result},
          {
            statusCode: 200,
            data: [
              {
                term: 'herlev'
              },
              {
                term: 'amtssygehuset i herlev'
              },
              {
                term: 'nørre herlev'
              }
            ]
          }
        );
        done();
      });
  });
});
