/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: recommend {"like":["870970-basis:45488713","870970-basis:28643713","870970-basis:29494940","870970-basis:29386404","870970-basis:28429576"],"recommender":"default","limit":10}

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
  '["https://xptest.dbc.dk/ms/recommend-cosim/v1",{"method":"POST","json":{"like":["870970-basis:45488713","870970-basis:28643713","870970-basis:29494940","870970-basis:29386404","870970-basis:28429576"],"dislike":[],"known":[],"discard":[],"maxresults":10}}]': {
    result: [
      [
        '870970-basis:28824130',
        {
          creator: ['Mari Jungstedt'],
          val: 0.5212014338107577,
          title: ['Den mørke engel : kriminalroman'],
          pid: ['870970-basis:28824130']
        }
      ],
      [
        '870970-basis:50625532',
        {
          creator: ['Mari Jungstedt'],
          val: 0.49969786213953876,
          title: ['Den farlige leg : kriminalroman'],
          pid: ['870970-basis:50625532']
        }
      ],
      [
        '870970-basis:28709994',
        {
          creator: ['Camilla Läckberg'],
          val: 0.4797369002061243,
          title: ['Fyrmesteren : kriminalroman'],
          pid: ['870970-basis:28709994']
        }
      ],
      [
        '870970-basis:28277350',
        {
          creator: ['Mari Jungstedt'],
          val: 0.45033463212057645,
          title: ['I denne søde sommertid : kriminalroman'],
          pid: ['870970-basis:28277350']
        }
      ],
      [
        '870970-basis:27670806',
        {
          creator: ['Camilla Läckberg'],
          val: 0.4138118073099609,
          title: ['Tyskerungen : kriminalroman'],
          pid: ['870970-basis:27670806']
        }
      ],
      [
        '870970-basis:29953554',
        {
          creator: ['Elsebeth Egholm'],
          val: 0.3873503806990347,
          title: ['Eget ansvar'],
          pid: ['870970-basis:29953554']
        }
      ],
      [
        '874310-katalog:DBB0041046',
        {
          creator: ['Grete Tulinius'],
          val: 0.37914277339855307,
          title: ['Noras bog : krimi'],
          pid: ['874310-katalog:DBB0041046']
        }
      ],
      [
        '874310-katalog:DBB0708070',
        {
          creator: ['Camilla Läckberg'],
          val: 0.3678050803762474,
          title: ['Ulykkesfuglen : kriminalroman'],
          pid: ['874310-katalog:DBB0708070']
        }
      ],
      [
        '870970-basis:29477744',
        {
          creator: ['Anna Grue'],
          val: 0.3673895724014438,
          title: ['Et spørgsmål om penge'],
          pid: ['870970-basis:29477744']
        }
      ],
      [
        '870970-basis:45188981',
        {
          creator: ['Camilla Läckberg'],
          val: 0.3626510422203491,
          title: ['Englemagersken : kriminalroman'],
          pid: ['870970-basis:45188981']
        }
      ]
    ],
    msecs: 43
  }
};

describe('Automated test: recommend-default', () => {
  it('expected response. ID:j9wsxy, for {"like":["870970-basis:45488713","870970-basis:28643713","870970-basis:29494940","870970-basis:29386404","870970-basis:28429576"],"recommender":"default","limit":10}', done => {
    context.mockData = mockData;
    provider
      .execute(
        'recommend',
        {
          like: [
            '870970-basis:45488713',
            '870970-basis:28643713',
            '870970-basis:29494940',
            '870970-basis:29386404',
            '870970-basis:28429576'
          ],
          recommender: 'default',
          limit: 10
        },
        context
      )
      .then(result => {
        assert.deepEqual(result, {
          statusCode: 200,
          data: [
            {
              creator: ['Mari Jungstedt'],
              val: 0.5212014338107577,
              title: ['Den mørke engel : kriminalroman'],
              pid: ['870970-basis:28824130']
            },
            {
              creator: ['Mari Jungstedt'],
              val: 0.49969786213953876,
              title: ['Den farlige leg : kriminalroman'],
              pid: ['870970-basis:50625532']
            },
            {
              creator: ['Camilla Läckberg'],
              val: 0.4797369002061243,
              title: ['Fyrmesteren : kriminalroman'],
              pid: ['870970-basis:28709994']
            },
            {
              creator: ['Mari Jungstedt'],
              val: 0.45033463212057645,
              title: ['I denne søde sommertid : kriminalroman'],
              pid: ['870970-basis:28277350']
            },
            {
              creator: ['Camilla Läckberg'],
              val: 0.4138118073099609,
              title: ['Tyskerungen : kriminalroman'],
              pid: ['870970-basis:27670806']
            },
            {
              creator: ['Elsebeth Egholm'],
              val: 0.3873503806990347,
              title: ['Eget ansvar'],
              pid: ['870970-basis:29953554']
            },
            {
              creator: ['Grete Tulinius'],
              val: 0.37914277339855307,
              title: ['Noras bog : krimi'],
              pid: ['874310-katalog:DBB0041046']
            },
            {
              creator: ['Camilla Läckberg'],
              val: 0.3678050803762474,
              title: ['Ulykkesfuglen : kriminalroman'],
              pid: ['874310-katalog:DBB0708070']
            },
            {
              creator: ['Anna Grue'],
              val: 0.3673895724014438,
              title: ['Et spørgsmål om penge'],
              pid: ['870970-basis:29477744']
            },
            {
              creator: ['Camilla Läckberg'],
              val: 0.3626510422203491,
              title: ['Englemagersken : kriminalroman'],
              pid: ['870970-basis:45188981']
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
                creator: ['Mari Jungstedt'],
                val: 0.5212014338107577,
                title: ['Den mørke engel : kriminalroman'],
                pid: ['870970-basis:28824130']
              },
              {
                creator: ['Mari Jungstedt'],
                val: 0.49969786213953876,
                title: ['Den farlige leg : kriminalroman'],
                pid: ['870970-basis:50625532']
              },
              {
                creator: ['Camilla Läckberg'],
                val: 0.4797369002061243,
                title: ['Fyrmesteren : kriminalroman'],
                pid: ['870970-basis:28709994']
              },
              {
                creator: ['Mari Jungstedt'],
                val: 0.45033463212057645,
                title: ['I denne søde sommertid : kriminalroman'],
                pid: ['870970-basis:28277350']
              },
              {
                creator: ['Camilla Läckberg'],
                val: 0.4138118073099609,
                title: ['Tyskerungen : kriminalroman'],
                pid: ['870970-basis:27670806']
              },
              {
                creator: ['Elsebeth Egholm'],
                val: 0.3873503806990347,
                title: ['Eget ansvar'],
                pid: ['870970-basis:29953554']
              },
              {
                creator: ['Grete Tulinius'],
                val: 0.37914277339855307,
                title: ['Noras bog : krimi'],
                pid: ['874310-katalog:DBB0041046']
              },
              {
                creator: ['Camilla Läckberg'],
                val: 0.3678050803762474,
                title: ['Ulykkesfuglen : kriminalroman'],
                pid: ['874310-katalog:DBB0708070']
              },
              {
                creator: ['Anna Grue'],
                val: 0.3673895724014438,
                title: ['Et spørgsmål om penge'],
                pid: ['870970-basis:29477744']
              },
              {
                creator: ['Camilla Läckberg'],
                val: 0.3626510422203491,
                title: ['Englemagersken : kriminalroman'],
                pid: ['870970-basis:45188981']
              }
            ]
          }
        );
        done();
      });
  });
});
