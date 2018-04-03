// AUTOTEST GENERATOR: {"endpoint":"recommend","params":{"like":["870970-basis:45488713"],"filters":{"authorFlood":1},"limit":10}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'recommend';
const params = {
  like: ['870970-basis:45488713'],
  filters: {authorFlood: 1},
  limit: 10
};

const expected = {
  statusCode: 200,
  data: [
    {
      pid: '870970-basis:51320352',
      val: 0.47995610553780527,
      from: ['870970-basis:45488713']
    },
    {
      pid: '870970-basis:50740447',
      val: 0.38657749708432265,
      from: ['870970-basis:45488713']
    },
    {
      pid: '870970-basis:50625532',
      val: 0.3838794097118505,
      from: ['870970-basis:45488713']
    },
    {
      pid: '870970-basis:29953554',
      val: 0.3810642568250437,
      from: ['870970-basis:45488713']
    },
    {
      pid: '870970-basis:29955530',
      val: 0.35715098864324596,
      from: ['870970-basis:45488713']
    },
    {
      pid: '870970-basis:50776239',
      val: 0.35257991294693813,
      from: ['870970-basis:45488713']
    },
    {
      pid: '870970-basis:51613406',
      val: 0.32840355383124226,
      from: ['870970-basis:45488713']
    },
    {
      pid: '870970-basis:50694240',
      val: 0.3021489180188196,
      from: ['870970-basis:45488713']
    },
    {
      pid: '870970-basis:51268172',
      val: 0.2956221190281046,
      from: ['870970-basis:45488713']
    },
    {
      pid: '870970-basis:50587282',
      val: 0.295579678446434,
      from: ['870970-basis:45488713']
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
    opensearch: 'https://opensearch.addi.dk/b3.5_4.5/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    suggest: 'XXXXX',
    recommend: 'http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim',
    communityservice: 'http://localhost:4010/v1'
  },
  communityservice: {id: 1},
  search: {agency: '775100', profile: 'opac', collectionidentifiers: ''},
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
  user: {
    id: 'XXXXX',
    salt: 'XXXXX',
    pin: 'XXXXX',
    libraryId: '726501',
    agency: '726500',
    isil: 'DK-726500'
  },
  app: {
    clientId: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  }
};
const mockData = {
  '["http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim",{"method":"post","json":{"like":["870970-basis:45488713"],"limit":10,"filters":{"authorFlood":1}}}]': {
    responseHeader: {
      numReturned: 10,
      time: 153,
      recommender: 'loan-cosim',
      timings: {
        booster: 0.01,
        fetch: 0.018000000000000002,
        workids: 20.89,
        total: 148.73600000000002,
        work2meta: 21.823999999999998,
        ignore: 0.043000000000000003,
        'from-analysis': 26.479,
        filter: 77.61,
        augment: 0.041999999999999996
      },
      build: 'not available',
      version: 'devel',
      'ab-id': '1',
      git: 'not available'
    },
    response: [
      {
        pid: '870970-basis:51320352',
        val: 0.47995610553780527,
        loancount: 27108,
        'debug-creator': 'Sara Blædel',
        from: ['870970-basis:45488713'],
        'debug-title': 'Kvinden de meldte savnet',
        'debug-work': 'work:1408396'
      },
      {
        pid: '870970-basis:50740447',
        val: 0.38657749708432265,
        loancount: 21671,
        'debug-creator': 'Liza Marklund',
        from: ['870970-basis:45488713'],
        'debug-title': 'Noras bog',
        'debug-work': 'work:1399529'
      },
      {
        pid: '870970-basis:50625532',
        val: 0.3838794097118505,
        loancount: 20219,
        'debug-creator': 'Mari Jungstedt',
        from: ['870970-basis:45488713'],
        'debug-title': 'Den farlige leg',
        'debug-work': 'work:997928'
      },
      {
        pid: '870970-basis:29953554',
        val: 0.3810642568250437,
        loancount: 19440,
        'debug-creator': 'Elsebeth Egholm',
        from: ['870970-basis:45488713'],
        'debug-title': 'Eget ansvar',
        'debug-work': 'work:1020878'
      },
      {
        pid: '870970-basis:29955530',
        val: 0.35715098864324596,
        loancount: 17632,
        'debug-creator': 'Julie Hastrup',
        from: ['870970-basis:45488713'],
        'debug-title': 'Portræt af døden',
        'debug-work': 'work:1021046'
      },
      {
        pid: '870970-basis:50776239',
        val: 0.35257991294693813,
        loancount: 16526,
        'debug-creator': 'Anna Grue',
        from: ['870970-basis:45488713'],
        'debug-title': 'Sidste forestilling',
        'debug-work': 'work:1016021'
      },
      {
        pid: '870970-basis:51613406',
        val: 0.32840355383124226,
        loancount: 21289,
        'debug-creator': 'Camilla Läckberg',
        from: ['870970-basis:45488713'],
        'debug-title': 'Løvetæmmeren',
        'debug-work': 'work:1475386'
      },
      {
        pid: '870970-basis:50694240',
        val: 0.3021489180188196,
        loancount: 21212,
        'debug-creator': 'Lars Kepler',
        from: ['870970-basis:45488713'],
        'debug-title': 'Sandmanden',
        'debug-work': 'work:1436291'
      },
      {
        pid: '870970-basis:51268172',
        val: 0.2956221190281046,
        loancount: 28313,
        'debug-creator': 'Jussi Adler-Olsen',
        from: ['870970-basis:45488713'],
        'debug-title': 'Den grænseløse',
        'debug-work': 'work:1412991'
      },
      {
        pid: '870970-basis:50587282',
        val: 0.295579678446434,
        loancount: 16669,
        'debug-creator': 'Michael Katz Krefeld',
        from: ['870970-basis:45488713'],
        'debug-title': 'Afsporet',
        'debug-work': 'work:1436036'
      }
    ]
  }
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: recommend_default_explicit.auto', () => {
  it('has same result as recorded (in recommend_default_explicit.auto)', () => {
    assert(
      Date.now() < +new Date('2018-06-19'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
