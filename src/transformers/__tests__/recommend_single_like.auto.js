// AUTOTEST GENERATOR: {"endpoint":"recommend","params":{"like":["870970-basis:45488713"],"agencies":[190101],"limit":10}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'recommend';
const params = {
  like: ['870970-basis:45488713'],
  agencies: [190101],
  limit: 10
};

const expected = {
  statusCode: 200,
  data: [
    {
      pid: '870970-basis:51880579',
      val: 93.754550290101,
      from: ['work:1400234']
    },
    {pid: '870970-basis:54801009', val: 4, from: ['work:1400234']},
    {pid: '870970-basis:29201528', val: 169, from: ['work:1400234']},
    {
      pid: '870970-basis:45479439',
      val: 78.87468131511409,
      from: ['work:1400234']
    },
    {pid: '870970-basis:45941671', val: 4, from: ['work:1400234']},
    {pid: '870970-basis:51418298', val: 78, from: ['work:1400234']},
    {pid: '870970-basis:29824878', val: 4, from: ['work:1400234']},
    {
      pid: '870970-basis:29344353',
      val: 78.17701890364663,
      from: ['work:1400234']
    },
    {
      pid: '870970-basis:50550036',
      val: 74.40497418939717,
      from: ['work:1400234']
    },
    {
      pid: '870970-basis:51232453',
      val: 73.77349475420645,
      from: ['work:1400234']
    }
  ]
};

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.11/',
    openagency: 'http://vipcore.iscrum-vip-prod.svc.cloud.dbc.dk:8080/1.0/api',
    openholdingstatus: 'https://openholdingstatus.addi.dk/3.1/',
    PRODopenorder: 'https://openorder.addi.dk/3.0',
    openorder: 'https://openorder.addi.dk/test_3.0',
    opensearch: 'https://opensearch.addi.dk/b3.5_5.2/',
    openuserstatus: 'https://openuserstatus.addi.dk/2.0/',
    suggest: 'http://ortograf-service-1-0.mi-prod.svc.cloud.dbc.dk/ortograf/',
    recommend: 'http://booklens-1-1.mi-prod.svc.cloud.dbc.dk/',
    performance: 'https://elk.dbc.dk:9100/k8s-frontend-prod-*/',
    cicero: 'https://cicero-fbs.com/rest/external/v1/',
    openformat:
      'http://openformat-php-master.frontend-prod.svc.cloud.dbc.dk/server.php',
    holdingsitems:
      'http://holdings-items-content-service.cisterne.svc.cloud.dbc.dk/holdings-items-content-service/api',
    infomediaservice: 'http://infomedia.mcp1-proxy.dbc.dk/server.php',
    workpresentation:
      'http://work-presentation-service.cisterne.svc.cloud.dbc.dk/api/work-presentation'
  },
  access: {'0': 'moreinfo'},
  cicero: {'DK-710100': 'XXXXX'},
  performance: {username: 'XXXXX', password: 'XXXXX'},
  search: {
    agency: '775100',
    profile: 'opac',
    collectionidentifiers: ''
  },
  storage: {user: 'XXXXX'},
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
    clientId: 'XclientIdX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk',
    ips: {'0': 'XXXXX'},
    access_token: 'XXXXX'
  }
};
const mockData = {
  '["http://booklens-1-1.mi-prod.svc.cloud.dbc.dk/",{"method":"post","json":{"like":["870970-basis:45488713"],"limit":10,"agencies":[190101]}}]': {
    responseHeader: {
      build: '52',
      git: '86919a1cf4430379bf19484451f5c920bf60d4c8',
      version: '1.1.0',
      'ab-id': 1,
      recommender: 'booklens',
      timings: {
        'read-from-db': 7.907000000000001,
        'fetch-metadata': 93.521,
        'filter-candidates': 2.3609999999999998,
        recommend: 107.072
      },
      'active-connections': 0,
      time: 107.693
    },
    response: [
      {
        pid: '870970-basis:51880579',
        work: 'work:1408396',
        value: 93.754550290101,
        'based-on': 'work:1400234',
        reader: '_booklens_loans_norm'
      },
      {
        pid: '870970-basis:54801009',
        work: 'work:42440000',
        value: 4,
        'based-on': 'work:1400234',
        reader: '_booklens_metacompass'
      },
      {
        pid: '870970-basis:29201528',
        work: 'work:987105',
        value: 169,
        'based-on': 'work:1400234',
        reader: '_booklens_search_clicks'
      },
      {
        pid: '870970-basis:45479439',
        work: 'work:1399529',
        value: 78.87468131511409,
        'based-on': 'work:1400234',
        reader: '_booklens_loans_norm'
      },
      {
        pid: '870970-basis:45941671',
        work: 'work:42437976',
        value: 4,
        'based-on': 'work:1400234',
        reader: '_booklens_metacompass'
      },
      {
        pid: '870970-basis:51418298',
        work: 'work:1412991',
        value: 78,
        'based-on': 'work:1400234',
        reader: '_booklens_search_clicks'
      },
      {
        pid: '870970-basis:29824878',
        work: 'work:1008216',
        value: 4,
        'based-on': 'work:1400234',
        reader: '_booklens_metacompass'
      },
      {
        pid: '870970-basis:29344353',
        work: 'work:997928',
        value: 78.17701890364663,
        'based-on': 'work:1400234',
        reader: '_booklens_loans_norm'
      },
      {
        pid: '870970-basis:50550036',
        work: 'work:1020878',
        value: 74.40497418939717,
        'based-on': 'work:1400234',
        reader: '_booklens_loans_norm'
      },
      {
        pid: '870970-basis:51232453',
        work: 'work:1455728',
        value: 73.77349475420645,
        'based-on': 'work:1400234',
        reader: '_booklens_loans_norm'
      }
    ]
  }
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

const provider = Provider();

describe('Automated test: recommend_single_like.auto', () => {
  it('has same result as recorded (in recommend_single_like.auto)', () => {
    assert(
      Date.now() < +new Date('2022-01-05'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
