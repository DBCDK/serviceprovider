/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
// Request: recommend {"like":["870970-basis:45488713","870970-basis:28643713","870970-basis:29494940","870970-basis:29386404","870970-basis:28429576"],"recommender":"default","limit":10,"pretty":true}

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
  '["https://xptest.dbc.dk/ms/recommend-cosim/v1",{"method":"POST","json":{"like":["870970-basis:45488713","870970-basis:28643713","870970-basis:29494940","870970-basis:29386404","870970-basis:28429576"],"dislike":[],"known":[],"discard":[],"maxresults":10,"filter":["rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog"]}}]': {
    result: [
      [
        '870970-basis:28824130',
        {
          creator: 'Mari Jungstedt',
          val: 0.5212014338107577,
          title: 'Den mørke engel : kriminalroman',
          pid: '870970-basis:28824130'
        }
      ],
      [
        '870970-basis:50625532',
        {
          creator: 'Mari Jungstedt',
          val: 0.49969786213953876,
          title: 'Den farlige leg : kriminalroman',
          pid: '870970-basis:50625532'
        }
      ],
      [
        '870970-basis:28709994',
        {
          creator: 'Camilla Läckberg',
          val: 0.4797369002061243,
          title: 'Fyrmesteren : kriminalroman',
          pid: '870970-basis:28709994'
        }
      ],
      [
        '870970-basis:28277350',
        {
          creator: 'Mari Jungstedt',
          val: 0.45033463212057645,
          title: 'I denne søde sommertid : kriminalroman',
          pid: '870970-basis:28277350'
        }
      ],
      [
        '870970-basis:27670806',
        {
          creator: 'Camilla Läckberg',
          val: 0.4138118073099609,
          title: 'Tyskerungen : kriminalroman',
          pid: '870970-basis:27670806'
        }
      ],
      [
        '870970-basis:29953554',
        {
          creator: 'Elsebeth Egholm',
          val: 0.3873503806990347,
          title: 'Eget ansvar',
          pid: '870970-basis:29953554'
        }
      ],
      [
        '870970-basis:29477744',
        {
          creator: 'Anna Grue',
          val: 0.3673895724014438,
          title: 'Et spørgsmål om penge',
          pid: '870970-basis:29477744'
        }
      ],
      [
        '870970-basis:45188981',
        {
          creator: 'Camilla Läckberg',
          val: 0.3626510422203491,
          title: 'Englemagersken : kriminalroman',
          pid: '870970-basis:45188981'
        }
      ],
      [
        '870970-basis:27805779',
        {
          creator: 'Mari Jungstedt',
          val: 0.3566828199512204,
          title: 'Den døende dandy : kriminalroman',
          pid: '870970-basis:27805779'
        }
      ],
      [
        '870970-basis:29955530',
        {
          creator: 'Julie Hastrup',
          val: 0.3517748973244521,
          title: 'Portræt af døden : krimi',
          pid: '870970-basis:29955530'
        }
      ]
    ],
    msecs: 93
  }
};

describe('Automated test: recommend-default', () => {
  it('expected response. ID:twl4pd, for {"like":["870970-basis:45488713","870970-basis:28643713","870970-basis:29494940","870970-basis:29386404","870970-basis:28429576"],"recommender":"default","limit":10,"pretty":true}', done => {
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
          limit: 10,
          pretty: true
        },
        context
      )
      .then(result => {
        assert.deepEqual(result, {
          statusCode: 200,
          data: [
            {
              creator: 'Mari Jungstedt',
              val: 0.5212014338107577,
              title: 'Den mørke engel : kriminalroman',
              pid: '870970-basis:28824130'
            },
            {
              creator: 'Mari Jungstedt',
              val: 0.49969786213953876,
              title: 'Den farlige leg : kriminalroman',
              pid: '870970-basis:50625532'
            },
            {
              creator: 'Camilla Läckberg',
              val: 0.4797369002061243,
              title: 'Fyrmesteren : kriminalroman',
              pid: '870970-basis:28709994'
            },
            {
              creator: 'Mari Jungstedt',
              val: 0.45033463212057645,
              title: 'I denne søde sommertid : kriminalroman',
              pid: '870970-basis:28277350'
            },
            {
              creator: 'Camilla Läckberg',
              val: 0.4138118073099609,
              title: 'Tyskerungen : kriminalroman',
              pid: '870970-basis:27670806'
            },
            {
              creator: 'Elsebeth Egholm',
              val: 0.3873503806990347,
              title: 'Eget ansvar',
              pid: '870970-basis:29953554'
            },
            {
              creator: 'Anna Grue',
              val: 0.3673895724014438,
              title: 'Et spørgsmål om penge',
              pid: '870970-basis:29477744'
            },
            {
              creator: 'Camilla Läckberg',
              val: 0.3626510422203491,
              title: 'Englemagersken : kriminalroman',
              pid: '870970-basis:45188981'
            },
            {
              creator: 'Mari Jungstedt',
              val: 0.3566828199512204,
              title: 'Den døende dandy : kriminalroman',
              pid: '870970-basis:27805779'
            },
            {
              creator: 'Julie Hastrup',
              val: 0.3517748973244521,
              title: 'Portræt af døden : krimi',
              pid: '870970-basis:29955530'
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
                creator: 'Mari Jungstedt',
                val: 0.5212014338107577,
                title: 'Den mørke engel : kriminalroman',
                pid: '870970-basis:28824130'
              },
              {
                creator: 'Mari Jungstedt',
                val: 0.49969786213953876,
                title: 'Den farlige leg : kriminalroman',
                pid: '870970-basis:50625532'
              },
              {
                creator: 'Camilla Läckberg',
                val: 0.4797369002061243,
                title: 'Fyrmesteren : kriminalroman',
                pid: '870970-basis:28709994'
              },
              {
                creator: 'Mari Jungstedt',
                val: 0.45033463212057645,
                title: 'I denne søde sommertid : kriminalroman',
                pid: '870970-basis:28277350'
              },
              {
                creator: 'Camilla Läckberg',
                val: 0.4138118073099609,
                title: 'Tyskerungen : kriminalroman',
                pid: '870970-basis:27670806'
              },
              {
                creator: 'Elsebeth Egholm',
                val: 0.3873503806990347,
                title: 'Eget ansvar',
                pid: '870970-basis:29953554'
              },
              {
                creator: 'Anna Grue',
                val: 0.3673895724014438,
                title: 'Et spørgsmål om penge',
                pid: '870970-basis:29477744'
              },
              {
                creator: 'Camilla Läckberg',
                val: 0.3626510422203491,
                title: 'Englemagersken : kriminalroman',
                pid: '870970-basis:45188981'
              },
              {
                creator: 'Mari Jungstedt',
                val: 0.3566828199512204,
                title: 'Den døende dandy : kriminalroman',
                pid: '870970-basis:27805779'
              },
              {
                creator: 'Julie Hastrup',
                val: 0.3517748973244521,
                title: 'Portræt af døden : krimi',
                pid: '870970-basis:29955530'
              }
            ]
          }
        );
        done();
      });
  });
});
