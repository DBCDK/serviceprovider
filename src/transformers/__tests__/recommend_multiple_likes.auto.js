// AUTOTEST GENERATOR: {"endpoint":"recommend","params":{"like":["870970-basis:45488713","870970-basis:28643713","870970-basis:29494940","870970-basis:29386404","870970-basis:28429576"],"agencies":[190101],"limit":10}}
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
  agencies: [190101],
  limit: 10
};

const expected = {
  statusCode: 200,
  data: [
    {
      pid: '870970-basis:29391696',
      val: 131.73488092398728,
      from: ['work:997958']
    },
    {pid: '870970-basis:46528026', val: 6, from: ['work:40763170']},
    {pid: '870970-basis:53134920', val: 5, from: ['work:40763170']},
    {pid: '870970-basis:51320352', val: 256, from: ['work:1400234']},
    {pid: '870970-basis:29201528', val: 424, from: ['work:1400234']},
    {pid: '870970-basis:53530907', val: 5, from: ['work:40763170']},
    {pid: '870970-basis:51894375', val: 191, from: ['work:40763170']},
    {pid: '870970-basis:53889786', val: 372, from: ['work:40763170']},
    {pid: '870970-basis:51211324', val: 5, from: ['work:40763170']},
    {pid: '870970-basis:29344353', val: 268, from: ['work:997958']}
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
  search: {agency: '775100', profile: 'opac', collectionidentifiers: ''},
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
  '["http://booklens-1-1.mi-prod.svc.cloud.dbc.dk/",{"method":"post","json":{"like":["870970-basis:45488713","870970-basis:28643713","870970-basis:29494940","870970-basis:29386404","870970-basis:28429576"],"limit":10,"agencies":[190101]}}]': {
    responseHeader: {
      build: '52',
      git: '86919a1cf4430379bf19484451f5c920bf60d4c8',
      version: '1.1.0',
      'ab-id': 1,
      recommender: 'booklens',
      timings: {
        'read-from-db': 15.202,
        'fetch-metadata': 87.462,
        'filter-candidates': 1.055,
        recommend: 107.917
      },
      'active-connections': 0,
      time: 108.171
    },
    response: [
      {
        pid: '870970-basis:29391696',
        work: 'work:973589',
        value: 131.73488092398728,
        'based-on': 'work:997958',
        reader: '_booklens_loans_norm'
      },
      {
        pid: '870970-basis:46528026',
        work: 'work:24634185',
        value: 6,
        'based-on': 'work:40763170',
        reader: '_booklens_metacompass'
      },
      {
        pid: '870970-basis:53134920',
        work: 'work:14820678',
        value: 5,
        'based-on': 'work:40763170',
        reader: '_booklens_metacompass'
      },
      {
        pid: '870970-basis:51320352',
        work: 'work:1408396',
        value: 256,
        'based-on': 'work:1400234',
        reader: '_booklens_search_clicks'
      },
      {
        pid: '870970-basis:29201528',
        work: 'work:987105',
        value: 424,
        'based-on': 'work:1400234',
        reader: '_booklens_webtrekk'
      },
      {
        pid: '870970-basis:53530907',
        work: 'work:24702915',
        value: 5,
        'based-on': 'work:40763170',
        reader: '_booklens_metacompass'
      },
      {
        pid: '870970-basis:51894375',
        work: 'work:2898240',
        value: 191,
        'based-on': 'work:40763170',
        reader: '_booklens_search_clicks'
      },
      {
        pid: '870970-basis:53889786',
        work: 'work:26989629',
        value: 372,
        'based-on': 'work:40763170',
        reader: '_booklens_webtrekk'
      },
      {
        pid: '870970-basis:51211324',
        work: 'work:42438721',
        value: 5,
        'based-on': 'work:40763170',
        reader: '_booklens_metacompass'
      },
      {
        pid: '870970-basis:29344353',
        work: 'work:997928',
        value: 268,
        'based-on': 'work:997958',
        reader: '_booklens_webtrekk'
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
      Date.now() < +new Date('2022-01-05'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
