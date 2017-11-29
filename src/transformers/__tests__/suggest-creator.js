/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: suggest {"q":"rowling","type":"creator","limit":3,"fields":["term"]}

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
  '["suggestcreator",{"qs":{"query":"rowling","n":3}}]':
    '{"responseHeader": {"q": "rowling", "version": "0.2.0", "build": "549", "time": 0, "ab-id": "1", "args": {"hr": "None", "hl": "None"}, "svn-revision": "106527"}, "response": {"suggestions": [{"frequency": 146002, "suggestion": "Joanne K. Rowling"}, {"frequency": 7648, "suggestion": "Joanne K Rowling"}, {"frequency": 2903, "suggestion": "J.K. Rowling"}], "numFound": 8}}'
};

describe('Automated test: suggest-creator', () => {
  it('expected response. ID:544nkp, for {"q":"rowling","type":"creator","limit":3,"fields":["term"]}', done => {
    context.mockData = mockData;
    provider
      .execute(
        'suggest',
        {q: 'rowling', type: 'creator', limit: 3, fields: ['term']},
        context
      )
      .then(result => {
        assert.deepEqual(result, {
          statusCode: 200,
          data: [
            {
              term: 'Joanne K. Rowling'
            },
            {
              term: 'Joanne K Rowling'
            },
            {
              term: 'J.K. Rowling'
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
                term: 'Joanne K. Rowling'
              },
              {
                term: 'Joanne K Rowling'
              },
              {
                term: 'J.K. Rowling'
              }
            ]
          }
        );
        done();
      });
  });
});
