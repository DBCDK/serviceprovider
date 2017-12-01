/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: suggest {"q":"hest","type":"title","limit":3,"fields":["term"]}

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
  '["suggestpopular",{"qs":{"query":"{!complexphrase inOrder=true}display.title:hest*","fields":"display.title,fedoraPid,display.creator,display.workType","filter":"rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog","rows":3}}]':
    '{"responseHeader": {"args": {"fq": "work.isPrimaryObject:true AND rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog", "rows": 3, "group": "true", "start": 0, "group.field": "fedoraPid", "group.main": "true", "fl": "display.title fedoraPid display.creator display.workType"}, "svn-revision": "106527", "ab-id": "1", "qtime": 8, "q": "{!complexphrase inOrder=true}display.title:hest*", "version": "0.1.0", "stime": 12, "qf": ["inOrder=true}display.title"], "build": "581", "modified_q": "{!boost b=loan.count}{!complexphrase inOrder=true}display.title:hest*"}, "response": {"start": 0, "numFound": 3313, "docs": [{"fedoraPid": "870970-basis:06598722", "display.creator": ["Jean M. Auel"], "display.title": ["Hestenes Dal"], "display.workType": ["book"]}, {"fedoraPid": "870970-basis:26191076", "display.creator": ["Ole Fr\\u00f8slev"], "display.title": ["Hestetyven"], "display.workType": ["book"]}, {"fedoraPid": "870970-basis:50507173", "display.creator": ["Ola Bauer"], "display.title": ["Hestehovedt\\u00e5gen"], "display.workType": ["book"]}]}}'
};

describe('Automated test: suggest-title', () => {
  it('expected response. ID:yf69mq, for {"q":"hest","type":"title","limit":3,"fields":["term"]}', done => {
    context.mockData = mockData;
    provider
      .execute(
        'suggest',
        {q: 'hest', type: 'title', limit: 3, fields: ['term']},
        context
      )
      .then(result => {
        assert.deepEqual(result, {
          statusCode: 200,
          data: [
            {
              term: 'Hestenes Dal',
              pid: '870970-basis:06598722',
              creator: 'Jean M. Auel',
              type: 'book'
            },
            {
              term: 'Hestetyven',
              pid: '870970-basis:26191076',
              creator: 'Ole Frøslev',
              type: 'book'
            },
            {
              term: 'Hestehovedtågen',
              pid: '870970-basis:50507173',
              creator: 'Ola Bauer',
              type: 'book'
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
                term: 'Hestenes Dal',
                pid: '870970-basis:06598722',
                creator: 'Jean M. Auel',
                type: 'book'
              },
              {
                term: 'Hestetyven',
                pid: '870970-basis:26191076',
                creator: 'Ole Frøslev',
                type: 'book'
              },
              {
                term: 'Hestehovedtågen',
                pid: '870970-basis:50507173',
                creator: 'Ola Bauer',
                type: 'book'
              }
            ]
          }
        );
        done();
      });
  });
});
