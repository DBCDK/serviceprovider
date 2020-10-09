// AUTOTEST GENERATOR: {"endpoint":"recommend","params":{"like":["870970-basis:45488713","870970-basis:28643713","870970-basis:29494940","870970-basis:29386404","870970-basis:28429576"],"limit":10}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'recommend';
const params = {
  like: [
    '870970-basis:45488713',
    '870970-basis:28643713',
    '870970-basis:29494940',
    '870970-basis:29386404',
    '870970-basis:28429576'
  ],
  limit: 10
};

const expected = {
  statusCode: 200,
  data: [
    {
      pid: '870970-basis:28769172',
      val: 0.5461945734602851,
      from: ['work:997958']
    },
    {pid: '870970-basis:48135676', val: 8, from: ['work:1587468']},
    {pid: '870970-basis:52284120', val: 323, from: ['work:1400234']},
    {pid: '870970-basis:29743681', val: 244, from: ['work:1400234']},
    {
      pid: '870970-basis:29344396',
      val: 0.5398547380852825,
      from: ['work:997958']
    },
    {
      pid: '870970-basis:50593363',
      val: 0.4914079043209908,
      from: ['work:946681']
    },
    {pid: '870970-basis:50946746', val: 7, from: ['work:1587468']},
    {pid: '870970-basis:48127312', val: 221, from: ['work:1587468']},
    {pid: '870970-basis:48241905', val: 6, from: ['work:1587468']},
    {
      pid: '870970-basis:50690962',
      val: 0.4388958372430535,
      from: ['work:946681']
    }
  ]
};

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.11/',
    openagency: 'https://openagency.addi.dk/2.34/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/3.0/',
    PRODopenorder: 'https://openorder.addi.dk/3.0',
    openorder: 'https://openorder.addi.dk/3.0',
    opensearch: 'https://opensearch.addi.dk/b3.5_5.2/',
    openuserstatus: 'https://openuserstatus.addi.dk/2.0/',
    suggest: 'http://ortograf-service-1-0.mi-prod.svc.cloud.dbc.dk/ortograf/',
    recommend: 'http://booklens-190101-1-0.mi-prod.svc.cloud.dbc.dk/',
    performance: 'https://elk.dbc.dk:9100/k8s-frontend-prod-*/',
    communityservice: 'http://localhost:4010/v1',
    cicero: 'https://cicero-fbs.com/rest/external/v1/',
    openformat:
      'http://openformat-php-master.frontend-prod.svc.cloud.dbc.dk/server.php',
    holdingsitems:
      'http://holdings-items-content-service.cisterne.svc.cloud.dbc.dk/holdings-items-content-service/api',
    infomediaservice: 'http://infomedia.mcp1-proxy.dbc.dk/server.php'
  },
  infomedia: {userId: 'XXXXX', libraryCode: 'XXXXX'},
  cicero: {'DK-710100': 'XXXXX'},
  performance: {username: 'XXXXX', password: 'XXXXX'},
  communityservice: {id: 1},
  search: {agency: '775100', profile: 'opac', collectionidentifiers: ''},
  storage: {user: 'XXXXX'},
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
  user: {
    id: 'XXXXX',
    salt: 'XXXXX',
    pin: 'XXXXX',
    libraryId: '790900',
    agency: '790900',
    isil: 'DK-790900'
  },
  app: {
    clientId: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  }
};
const mockData = {
  '["http://booklens-190101-1-0.mi-prod.svc.cloud.dbc.dk/",{"method":"post","json":{"like":["870970-basis:45488713","870970-basis:28643713","870970-basis:29494940","870970-basis:29386404","870970-basis:28429576"],"limit":10}}]': {
    responseHeader: {
      build: 'HEAD',
      git: 'HEAD',
      version: '1.0.0',
      'ab-id': 1,
      recommender: '190101',
      timings: {
        'read-from-db': 118.517,
        'filter-candidates': 5.133,
        recommend: 124.673
      },
      time: 125.2
    },
    response: [
      {
        pid: '870970-basis:28769172',
        work: 'work:973589',
        value: 0.5461945734602851,
        seed: 'work:997958',
        reader: '_190101_loans_norm'
      },
      {
        pid: '870970-basis:48135676',
        work: 'work:26989629',
        value: 8,
        seed: 'work:1587468',
        reader: '_190101_metacompass'
      },
      {
        pid: '870970-basis:52284120',
        work: 'work:1408396',
        value: 323,
        seed: 'work:1400234',
        reader: '_190101_search_clicks'
      },
      {
        pid: '870970-basis:29743681',
        work: 'work:987105',
        value: 244,
        seed: 'work:1400234',
        reader: '_190101_search_clicks'
      },
      {
        pid: '870970-basis:29344396',
        work: 'work:997928',
        value: 0.5398547380852825,
        seed: 'work:997958',
        reader: '_190101_loans_norm'
      },
      {
        pid: '870970-basis:50593363',
        work: 'work:969734',
        value: 0.4914079043209908,
        seed: 'work:946681',
        reader: '_190101_loans_norm'
      },
      {
        pid: '870970-basis:50946746',
        work: 'work:1441152',
        value: 7,
        seed: 'work:1587468',
        reader: '_190101_metacompass'
      },
      {
        pid: '870970-basis:48127312',
        work: 'work:2898240',
        value: 221,
        seed: 'work:1587468',
        reader: '_190101_search_clicks'
      },
      {
        pid: '870970-basis:48241905',
        work: 'work:31991321',
        value: 6,
        seed: 'work:1587468',
        reader: '_190101_metacompass'
      },
      {
        pid: '870970-basis:50690962',
        work: 'work:923309',
        value: 0.4388958372430535,
        seed: 'work:946681',
        reader: '_190101_loans_norm'
      }
    ]
  }
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: recommend_multiple_likes.auto', () => {
  it('has same result as recorded (in recommend_multiple_likes.auto)', () => {
    assert(
      Date.now() < +new Date('2021-01-07'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
