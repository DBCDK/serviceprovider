// AUTOTEST GENERATOR: {"endpoint":"rank","params":{"pids":["870970-basis:28511663","870970-basis:28902239"],"like":["870970-basis:45488713","870970-basis:28643713"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'rank';
const params = {
  pids: ['870970-basis:28511663', '870970-basis:28902239'],
  like: ['870970-basis:45488713', '870970-basis:28643713']
};

const expected = {
  statusCode: 200,
  data: [
    {
      title: ['Journal 64 : krimithriller'],
      creator: ['Jussi Adler-Olsen'],
      val: [62.798478002209706],
      ctkey: ['Journal_64_:_krimithriller::Jussi_Adler-Olsen'],
      pid: ['870970-basis:28511663']
    },
    {
      title: ['Det syvende barn'],
      creator: ['Erik Valeur'],
      val: [42.07434137795138],
      ctkey: ['Det_syvende_barn::Erik_Valeur'],
      pid: ['870970-basis:28902239']
    }
  ]
};

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
  communityservice: {id: 1},
  search: {agency: '775100', profile: 'opac', collectionidentifiers: ''},
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
  user: {
    id: 'XXXXX',
    salt: 'XXXXX',
    pin: 'XXXXX',
    libraryId: '710100',
    agency: '710100',
    isil: 'DK-710100'
  },
  app: {
    clientId: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  }
};
const mockData = {
  '["https://xptest.dbc.dk/ms/rank/v1",{"uri":"https://xptest.dbc.dk/ms/rank/v1","method":"POST","json":{"like":["870970-basis:45488713","870970-basis:28643713"],"set":["870970-basis:28511663","870970-basis:28902239"]}}]': {
    result: [
      [
        '870970-basis:28511663',
        {
          title: ['Journal 64 : krimithriller'],
          creator: ['Jussi Adler-Olsen'],
          val: [62.798478002209706],
          ctkey: ['Journal_64_:_krimithriller::Jussi_Adler-Olsen'],
          pid: ['870970-basis:28511663']
        }
      ],
      [
        '870970-basis:28902239',
        {
          title: ['Det syvende barn'],
          creator: ['Erik Valeur'],
          val: [42.07434137795138],
          ctkey: ['Det_syvende_barn::Erik_Valeur'],
          pid: ['870970-basis:28902239']
        }
      ]
    ],
    msecs: 'not set'
  }
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: rank_happy.auto', () => {
  it('has same result as recorded (in rank_happy.auto)', done => {
    assert(
      Date.now() < +new Date('2018-03-18'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    provider
      .execute(endpoint, params, context)
      .then(result => {
        assert.deepEqual(result, expected);
        done();
      })
      .catch(result => {
        fail({throw: result}, expected);
        done();
      });
  });
});
