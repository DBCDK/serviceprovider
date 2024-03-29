// AUTOTEST GENERATOR: {"endpoint":"recommend","params":{"like":["870970-basis:45488713"],"limit":10,"debug":true}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'recommend';
const params = {like: ['870970-basis:45488713'], limit: 10, debug: true};

const expected = {
  statusCode: 200,
  data: [
    {
      pid: '870970-basis:52284120',
      val: 0.48284091834412546,
      from: ['work:1400234'],
      debug: {
        'debug-work': 'work:1408396',
        'debug-creator': 'Sara Blædel',
        'debug-title': 'Kvinden de meldte savnet',
        'debug-reader': '_190101_loans_norm'
      }
    },
    {
      pid: '870970-basis:28718020',
      val: 3,
      from: ['work:1400234'],
      debug: {
        'debug-work': 'work:898699',
        'debug-creator': 'Mons Kallentoft',
        'debug-title': 'Midvinterblod',
        'debug-reader': '_190101_metacompass'
      }
    },
    {
      pid: '870970-basis:29743681',
      val: 244,
      from: ['work:1400234'],
      debug: {
        'debug-work': 'work:987105',
        'debug-creator': 'Sara Blædel',
        'debug-title': 'De glemte piger',
        'debug-reader': '_190101_search_clicks'
      }
    },
    {
      pid: '870970-basis:50946800',
      val: 0.3891770940906558,
      from: ['work:1400234'],
      debug: {
        'debug-work': 'work:1399529',
        'debug-creator': 'Liza Marklund',
        'debug-title': 'Noras bog',
        'debug-reader': '_190101_loans_norm'
      }
    },
    {
      pid: '870970-basis:28878443',
      val: 2,
      from: ['work:1400234'],
      debug: {
        'debug-work': 'work:954307',
        'debug-creator': 'Inger Gammelgaard Madsen',
        'debug-title': 'Fremmed indtrængen',
        'debug-reader': '_190101_metacompass'
      }
    },
    {
      pid: '870970-basis:51418328',
      val: 71,
      from: ['work:1400234'],
      debug: {
        'debug-work': 'work:1412991',
        'debug-creator': 'Jussi Adler-Olsen',
        'debug-title': 'Den grænseløse',
        'debug-reader': '_190101_search_clicks'
      }
    },
    {
      pid: '870970-basis:29344612',
      val: 62,
      from: ['work:1400234'],
      debug: {
        'debug-work': 'work:997944',
        'debug-creator': null,
        'debug-title': 'Dødelig alvor',
        'debug-reader': '_190101_search_clicks'
      }
    },
    {
      pid: '870970-basis:29344396',
      val: 0.3859171932392937,
      from: ['work:1400234'],
      debug: {
        'debug-work': 'work:997928',
        'debug-creator': 'Mari Jungstedt',
        'debug-title': 'Den farlige leg',
        'debug-reader': '_190101_loans_norm'
      }
    },
    {
      pid: '870970-basis:52677556',
      val: 2,
      from: ['work:1400234'],
      debug: {
        'debug-work': 'work:8730088',
        'debug-creator': 'Viktorija Platova',
        'debug-title': 'Dva bileta v nikogda',
        'debug-reader': '_190101_metacompass'
      }
    },
    {
      pid: '870970-basis:29840997',
      val: 2,
      from: ['work:1400234'],
      debug: {
        'debug-work': 'work:1016665',
        'debug-creator': 'Birgitte Bartholdy',
        'debug-title': 'Frostgrader',
        'debug-reader': '_190101_metacompass'
      }
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
  '["http://booklens-190101-1-0.mi-prod.svc.cloud.dbc.dk/",{"method":"post","json":{"like":["870970-basis:45488713"],"limit":10,"debug":true}}]': {
    responseHeader: {
      build: 'HEAD',
      git: 'HEAD',
      version: '1.0.0',
      'ab-id': 1,
      recommender: '190101',
      timings: {
        'read-from-db': 75.747,
        'filter-candidates': 2.678,
        recommend: 79.539
      },
      arguments: {
        like: ['870970-basis:45488713'],
        ignore: null,
        offset: 0,
        limit: 10,
        filters: null,
        debug: true
      },
      details: [
        {
          pid: '870970-basis:45488713',
          creator: 'Sara Blædel',
          title: 'Dødesporet'
        }
      ],
      time: 80.18
    },
    response: [
      {
        pid: '870970-basis:52284120',
        work: 'work:1408396',
        value: 0.48284091834412546,
        seed: 'work:1400234',
        reader: '_190101_loans_norm',
        creator: 'Sara Blædel',
        title: 'Kvinden de meldte savnet'
      },
      {
        pid: '870970-basis:28718020',
        work: 'work:898699',
        value: 3,
        seed: 'work:1400234',
        reader: '_190101_metacompass',
        creator: 'Mons Kallentoft',
        title: 'Midvinterblod'
      },
      {
        pid: '870970-basis:29743681',
        work: 'work:987105',
        value: 244,
        seed: 'work:1400234',
        reader: '_190101_search_clicks',
        creator: 'Sara Blædel',
        title: 'De glemte piger'
      },
      {
        pid: '870970-basis:50946800',
        work: 'work:1399529',
        value: 0.3891770940906558,
        seed: 'work:1400234',
        reader: '_190101_loans_norm',
        creator: 'Liza Marklund',
        title: 'Noras bog'
      },
      {
        pid: '870970-basis:28878443',
        work: 'work:954307',
        value: 2,
        seed: 'work:1400234',
        reader: '_190101_metacompass',
        creator: 'Inger Gammelgaard Madsen',
        title: 'Fremmed indtrængen'
      },
      {
        pid: '870970-basis:51418328',
        work: 'work:1412991',
        value: 71,
        seed: 'work:1400234',
        reader: '_190101_search_clicks',
        creator: 'Jussi Adler-Olsen',
        title: 'Den grænseløse'
      },
      {
        pid: '870970-basis:29344612',
        work: 'work:997944',
        value: 62,
        seed: 'work:1400234',
        reader: '_190101_search_clicks',
        creator: null,
        title: 'Dødelig alvor'
      },
      {
        pid: '870970-basis:29344396',
        work: 'work:997928',
        value: 0.3859171932392937,
        seed: 'work:1400234',
        reader: '_190101_loans_norm',
        creator: 'Mari Jungstedt',
        title: 'Den farlige leg'
      },
      {
        pid: '870970-basis:52677556',
        work: 'work:8730088',
        value: 2,
        seed: 'work:1400234',
        reader: '_190101_metacompass',
        creator: 'Viktorija Platova',
        title: 'Dva bileta v nikogda'
      },
      {
        pid: '870970-basis:29840997',
        work: 'work:1016665',
        value: 2,
        seed: 'work:1400234',
        reader: '_190101_metacompass',
        creator: 'Birgitte Bartholdy',
        title: 'Frostgrader'
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
      Date.now() < +new Date('2025-01-01'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
