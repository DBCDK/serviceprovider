/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
// Request: suggest {"q":"rowling","type":"creator","limit":3,"fields":["term"]}

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
  user: {agency: '100451', id: 'XXXXX', pin: 'XXXXX', salt: 'XXXXX'},
  app: {
    clientid: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101'
  }
};
let provider = Provider();
let mockData = {
  '["suggestcreator",{"qs":{"query":"rowling","n":3}}]':
    '{"responseHeader": {"q": "rowling", "version": "0.1.0", "build": "263", "time": 1, "ab-id": "1", "args": {"hr": "None", "hl": "None"}, "svn-revision": "97895"}, "response": {"suggestions": [{"frequency": 144507, "suggestion": "Joanne K. Rowling"}, {"frequency": 451, "suggestion": "Phelps Sarah aus"}, {"frequency": 62, "suggestion": "Newt Scamander"}], "numFound": 8}}'
};

describe('Automated test: suggest-creator', () => {
  it('expected response. ID:mgd585, for {"q":"rowling","type":"creator","limit":3,"fields":["term"]}', done => {
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
            {term: 'Joanne K. Rowling'},
            {term: 'Phelps Sarah aus'},
            {term: 'Newt Scamander'}
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
              {term: 'Joanne K. Rowling'},
              {term: 'Phelps Sarah aus'},
              {term: 'Newt Scamander'}
            ]
          }
        );
        done();
      });
  });
});
