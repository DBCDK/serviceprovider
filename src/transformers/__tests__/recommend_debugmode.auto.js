// AUTOTEST GENERATOR: {"endpoint":"recommend","params":{"like":["870970-basis:45488713"],"agencies":[190101],"limit":10,"debug":true}}
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
  limit: 10,
  debug: true
};

const expected = {
  statusCode: 200,
  data: [
    {
      pid: '870970-basis:51880579',
      val: 93.754550290101,
      from: ['work:1400234'],
      debug: {
        'debug-work': 'work:1408396',
        'debug-creator': 'Sara Blædel',
        'debug-title': 'Kvinden de meldte savnet',
        'debug-reader': '_booklens_loans_norm'
      }
    },
    {
      pid: '870970-basis:54801009',
      val: 4,
      from: ['work:1400234'],
      debug: {
        'debug-work': 'work:42440000',
        'debug-creator': 'Walter Lucius (f. 1954)',
        'debug-title': 'Sommerfuglen og stormen',
        'debug-reader': '_booklens_metacompass'
      }
    },
    {
      pid: '870970-basis:29201528',
      val: 169,
      from: ['work:1400234'],
      debug: {
        'debug-work': 'work:987105',
        'debug-creator': 'Sara Blædel',
        'debug-title': 'De glemte piger',
        'debug-reader': '_booklens_search_clicks'
      }
    },
    {
      pid: '870970-basis:45479439',
      val: 78.87468131511409,
      from: ['work:1400234'],
      debug: {
        'debug-work': 'work:1399529',
        'debug-creator': 'Liza Marklund',
        'debug-title': 'Noras bog',
        'debug-reader': '_booklens_loans_norm'
      }
    },
    {
      pid: '870970-basis:45941671',
      val: 4,
      from: ['work:1400234'],
      debug: {
        'debug-work': 'work:42437976',
        'debug-creator': 'Elly Griffiths',
        'debug-title': 'Huset på klippen',
        'debug-reader': '_booklens_metacompass'
      }
    },
    {
      pid: '870970-basis:51418298',
      val: 78,
      from: ['work:1400234'],
      debug: {
        'debug-work': 'work:1412991',
        'debug-creator': 'Jussi Adler-Olsen',
        'debug-title': 'Den grænseløse',
        'debug-reader': '_booklens_search_clicks'
      }
    },
    {
      pid: '870970-basis:29824878',
      val: 4,
      from: ['work:1400234'],
      debug: {
        'debug-work': 'work:1008216',
        'debug-creator': 'Walter Mosley',
        'debug-title': 'New York blues',
        'debug-reader': '_booklens_metacompass'
      }
    },
    {
      pid: '870970-basis:29344353',
      val: 78.17701890364663,
      from: ['work:1400234'],
      debug: {
        'debug-work': 'work:997928',
        'debug-creator': 'Mari Jungstedt',
        'debug-title': 'Den farlige leg',
        'debug-reader': '_booklens_loans_norm'
      }
    },
    {
      pid: '870970-basis:50550036',
      val: 74.40497418939717,
      from: ['work:1400234'],
      debug: {
        'debug-work': 'work:1020878',
        'debug-creator': 'Elsebeth Egholm',
        'debug-title': 'Eget ansvar',
        'debug-reader': '_booklens_loans_norm'
      }
    },
    {
      pid: '870970-basis:51232453',
      val: 73.77349475420645,
      from: ['work:1400234'],
      debug: {
        'debug-work': 'work:1455728',
        'debug-creator': 'Elsebeth Egholm',
        'debug-title': 'Kød og blod',
        'debug-reader': '_booklens_loans_norm'
      }
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
  '["http://booklens-1-1.mi-prod.svc.cloud.dbc.dk/",{"method":"post","json":{"like":["870970-basis:45488713"],"limit":10,"debug":true,"agencies":[190101]}}]': {
    responseHeader: {
      build: '52',
      git: '86919a1cf4430379bf19484451f5c920bf60d4c8',
      version: '1.1.0',
      'ab-id': 1,
      recommender: 'booklens',
      timings: {
        'read-from-db': 6.633,
        'fetch-metadata': 84.647,
        'filter-candidates': 2.691,
        recommend: 96.833
      },
      arguments: {
        like: ['870970-basis:45488713'],
        ignore: null,
        offset: 0,
        limit: 10,
        filters: null,
        debug: true,
        author_max: 2,
        persistent_work: false
      },
      details: [
        {
          pid: '870970-basis:45488713',
          creator: 'Sara Blædel',
          title: 'Dødesporet',
          type: 'Lydbog (cd-mp3)',
          audience: 'voksenmaterialer',
          language: 'dan',
          dk5: 'sk'
        }
      ],
      'active-connections': 0,
      time: 97.417
    },
    response: [
      {
        pid: '870970-basis:51880579',
        work: 'work:1408396',
        value: 93.754550290101,
        'based-on': 'work:1400234',
        reader: '_booklens_loans_norm',
        creator: 'Sara Blædel',
        title: 'Kvinden de meldte savnet',
        type: 'Lydbog (cd-mp3)',
        audience: 'voksenmaterialer',
        language: 'dan',
        dk5: 'sk'
      },
      {
        pid: '870970-basis:54801009',
        work: 'work:42440000',
        value: 4,
        'based-on': 'work:1400234',
        reader: '_booklens_metacompass',
        creator: 'Walter Lucius (f. 1954)',
        title: 'Sommerfuglen og stormen',
        type: 'Lydbog (cd-mp3)',
        audience: 'voksenmaterialer',
        language: 'dan',
        dk5: 'sk'
      },
      {
        pid: '870970-basis:29201528',
        work: 'work:987105',
        value: 169,
        'based-on': 'work:1400234',
        reader: '_booklens_search_clicks',
        creator: 'Sara Blædel',
        title: 'De glemte piger',
        type: 'Lydbog (cd-mp3)',
        audience: 'voksenmaterialer',
        language: 'dan',
        dk5: 'sk'
      },
      {
        pid: '870970-basis:45479439',
        work: 'work:1399529',
        value: 78.87468131511409,
        'based-on': 'work:1400234',
        reader: '_booklens_loans_norm',
        creator: 'Liza Marklund',
        title: 'Noras bog',
        type: 'Lydbog (cd-mp3)',
        audience: 'voksenmaterialer',
        language: 'dan',
        dk5: 'sk'
      },
      {
        pid: '870970-basis:45941671',
        work: 'work:42437976',
        value: 4,
        'based-on': 'work:1400234',
        reader: '_booklens_metacompass',
        creator: 'Elly Griffiths',
        title: 'Huset på klippen',
        type: 'Lydbog (cd-mp3)',
        audience: 'voksenmaterialer',
        language: 'dan',
        dk5: 'sk'
      },
      {
        pid: '870970-basis:51418298',
        work: 'work:1412991',
        value: 78,
        'based-on': 'work:1400234',
        reader: '_booklens_search_clicks',
        creator: 'Jussi Adler-Olsen',
        title: 'Den grænseløse',
        type: 'Lydbog (cd-mp3)',
        audience: 'voksenmaterialer',
        language: 'dan',
        dk5: 'sk'
      },
      {
        pid: '870970-basis:29824878',
        work: 'work:1008216',
        value: 4,
        'based-on': 'work:1400234',
        reader: '_booklens_metacompass',
        creator: 'Walter Mosley',
        title: 'New York blues',
        type: 'Lydbog (cd-mp3)',
        audience: 'voksenmaterialer',
        language: 'dan',
        dk5: 'sk'
      },
      {
        pid: '870970-basis:29344353',
        work: 'work:997928',
        value: 78.17701890364663,
        'based-on': 'work:1400234',
        reader: '_booklens_loans_norm',
        creator: 'Mari Jungstedt',
        title: 'Den farlige leg',
        type: 'Lydbog (cd-mp3)',
        audience: 'voksenmaterialer',
        language: 'dan',
        dk5: 'sk'
      },
      {
        pid: '870970-basis:50550036',
        work: 'work:1020878',
        value: 74.40497418939717,
        'based-on': 'work:1400234',
        reader: '_booklens_loans_norm',
        creator: 'Elsebeth Egholm',
        title: 'Eget ansvar',
        type: 'Lydbog (cd-mp3)',
        audience: 'voksenmaterialer',
        language: 'dan',
        dk5: 'sk'
      },
      {
        pid: '870970-basis:51232453',
        work: 'work:1455728',
        value: 73.77349475420645,
        'based-on': 'work:1400234',
        reader: '_booklens_loans_norm',
        creator: 'Elsebeth Egholm',
        title: 'Kød og blod',
        type: 'Lydbog (cd-mp3)',
        audience: 'voksenmaterialer',
        language: 'dan',
        dk5: 'sk'
      }
    ]
  }
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: recommend_debugmode.auto', () => {
  it('has same result as recorded (in recommend_debugmode.auto)', () => {
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
