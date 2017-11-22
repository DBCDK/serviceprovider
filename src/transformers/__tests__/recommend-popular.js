/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: recommend {"recommender":"popular","limit":3}

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
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
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
    collectionidentifiers: ''
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
  '["https://xptest.dbc.dk/ms/recommend-pop/v1",{"method":"POST","json":{"like":[],"dislike":[],"known":[],"discard":[],"maxresults":3}}]': {
    result: [
      [
        '870970-basis:28511663',
        {
          creator: ['Jussi Adler-Olsen'],
          val: 30889,
          title: ['Journal 64 : krimithriller'],
          pid: ['870970-basis:28511663']
        }
      ],
      [
        '870970-basis:29754519',
        {
          creator: ['Jussi Adler-Olsen'],
          val: 28783,
          title: ['Marco effekten : krimithriller'],
          pid: ['870970-basis:29754519']
        }
      ],
      [
        '870970-basis:29060835',
        {
          creator: ['Sara Blædel'],
          val: 26278,
          title: ['De glemte piger : krimi'],
          pid: ['870970-basis:29060835']
        }
      ]
    ],
    msecs: 40
  }
};

describe('Automated test: recommend-popular', () => {
  it('expected response. ID:qyl91b, for {"recommender":"popular","limit":3}', done => {
    context.mockData = mockData;
    provider
      .execute('recommend', {recommender: 'popular', limit: 3}, context)
      .then(result => {
        assert.deepEqual(result, {
          statusCode: 200,
          data: [
            {
              creator: ['Jussi Adler-Olsen'],
              val: 30889,
              title: ['Journal 64 : krimithriller'],
              pid: ['870970-basis:28511663']
            },
            {
              creator: ['Jussi Adler-Olsen'],
              val: 28783,
              title: ['Marco effekten : krimithriller'],
              pid: ['870970-basis:29754519']
            },
            {
              creator: ['Sara Blædel'],
              val: 26278,
              title: ['De glemte piger : krimi'],
              pid: ['870970-basis:29060835']
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
                creator: ['Jussi Adler-Olsen'],
                val: 30889,
                title: ['Journal 64 : krimithriller'],
                pid: ['870970-basis:28511663']
              },
              {
                creator: ['Jussi Adler-Olsen'],
                val: 28783,
                title: ['Marco effekten : krimithriller'],
                pid: ['870970-basis:29754519']
              },
              {
                creator: ['Sara Blædel'],
                val: 26278,
                title: ['De glemte piger : krimi'],
                pid: ['870970-basis:29060835']
              }
            ]
          }
        );
        done();
      });
  });
});
