/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
// Request: rank {"pids":["870970-basis:28511663","870970-basis:28902239"],"like":["870970-basis:45488713","870970-basis:28643713"]}

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
  '["https://xptest.dbc.dk/ms/rank/v1",{"uri":"https://xptest.dbc.dk/ms/rank/v1","method":"POST","json":{"like":["870970-basis:45488713","870970-basis:28643713"],"set":["870970-basis:28511663","870970-basis:28902239"]}}]': {
    result: [
      [
        '870970-basis:28511663',
        {
          title: 'Journal 64 : krimithriller',
          creator: 'Jussi Adler-Olsen',
          val: 62.798478002209706,
          ctkey: 'Journal_64_:_krimithriller::Jussi_Adler-Olsen',
          pid: '870970-basis:28511663'
        }
      ],
      [
        '870970-basis:28902239',
        {
          title: 'Det syvende barn',
          creator: 'Erik Valeur',
          val: 42.07434137795138,
          ctkey: 'Det_syvende_barn::Erik_Valeur',
          pid: '870970-basis:28902239'
        }
      ]
    ],
    msecs: 'not set'
  }
};

describe('Automated test: rank-happy', () => {
  it('expected response. ID:zg7e5u, for {"pids":["870970-basis:28511663","870970-basis:28902239"],"like":["870970-basis:45488713","870970-basis:28643713"]}', done => {
    context.mockData = mockData;
    provider
      .execute(
        'rank',
        {
          pids: ['870970-basis:28511663', '870970-basis:28902239'],
          like: ['870970-basis:45488713', '870970-basis:28643713']
        },
        context
      )
      .then(result => {
        assert.deepEqual(result, {
          statusCode: 200,
          data: [
            {
              title: 'Journal 64 : krimithriller',
              creator: 'Jussi Adler-Olsen',
              val: 62.798478002209706,
              ctkey: 'Journal_64_:_krimithriller::Jussi_Adler-Olsen',
              pid: '870970-basis:28511663'
            },
            {
              title: 'Det syvende barn',
              creator: 'Erik Valeur',
              val: 42.07434137795138,
              ctkey: 'Det_syvende_barn::Erik_Valeur',
              pid: '870970-basis:28902239'
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
                title: 'Journal 64 : krimithriller',
                creator: 'Jussi Adler-Olsen',
                val: 62.798478002209706,
                ctkey: 'Journal_64_:_krimithriller::Jussi_Adler-Olsen',
                pid: '870970-basis:28511663'
              },
              {
                title: 'Det syvende barn',
                creator: 'Erik Valeur',
                val: 42.07434137795138,
                ctkey: 'Det_syvende_barn::Erik_Valeur',
                pid: '870970-basis:28902239'
              }
            ]
          }
        );
        done();
      });
  });
});
