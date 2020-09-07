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
    moreinfo: 'https://moreinfo.addi.dk/2.11/',
    openagency: 'https://openagency.addi.dk/2.34/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/3.0/',
    openorder: 'https://openorder.addi.dk/2.8/',
    opensearch: 'https://opensearch.addi.dk/b3.5_5.0/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    rank: 'https://xptest.dbc.dk/ms/rank/v1',
    suggest: 'http://ortograf.mcp1-proxy.dbc.dk/ortograf/',
    recommend: 'http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim',
    suggestpopular: 'XXXXX',
    suggestcreator: 'XXXXX',
    suggestlibrary: 'XXXXX',
    suggestsubject: 'XXXXX',
    performance: 'https://elk-p01.dbc.dk:9100/',
    recommendurls: 'XXXXX'
  },
  communityservice: {id: 1},
  performance: {password: 'XXXXX', username: 'XXXXX'},
  search: {agency: '710100', profile: 'opac'},
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
  '["http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim",{"method":"post","json":{"like":["870970-basis:45488713"],"limit":10,"filters":{"authorFlood":1}}}]': {
    responseHeader: {
      build: '353',
      git: '943b5b3d76fcfc70ac441d44f76990acdddebf05',
      version: '0.1.0',
      'ab-id': '1',
      recommender: 'loan-cosim',
      numReturned: 10,
      timings: {
        workids: 12.75,
        fetch: 0.004,
        'from-analysis': 18.196,
        work2meta: 26.067,
        ignore: 0.023,
        booster: 0.001,
        filter: 136.714,
        'post-filter': 0.308,
        augment: 0.014,
        total: 194.59099999999998
      },
      time: 195
    },
    response: [
      {
        'debug-work': 'work:1408396',
        val: 0.47995610553780527,
        type: 'loans',
        from: ['870970-basis:45488713'],
        pid: '870970-basis:51320352',
        loancount: 27108,
        'debug-title': 'Kvinden de meldte savnet',
        'debug-creator': 'Sara Blædel'
      },
      {
        'debug-work': 'work:1399529',
        val: 0.38657749708432265,
        type: 'loans',
        from: ['870970-basis:45488713'],
        pid: '870970-basis:50740447',
        loancount: 21671,
        'debug-title': 'Noras bog',
        'debug-creator': 'Liza Marklund'
      },
      {
        'debug-work': 'work:997928',
        val: 0.3838794097118505,
        type: 'loans',
        from: ['870970-basis:45488713'],
        pid: '870970-basis:50625532',
        loancount: 20219,
        'debug-title': 'Den farlige leg',
        'debug-creator': 'Mari Jungstedt'
      },
      {
        'debug-work': 'work:1020878',
        val: 0.3810642568250437,
        type: 'loans',
        from: ['870970-basis:45488713'],
        pid: '870970-basis:29953554',
        loancount: 19440,
        'debug-title': 'Eget ansvar',
        'debug-creator': 'Elsebeth Egholm'
      },
      {
        'debug-work': 'work:1021046',
        val: 0.35715098864324596,
        type: 'loans',
        from: ['870970-basis:45488713'],
        pid: '870970-basis:29955530',
        loancount: 17632,
        'debug-title': 'Portræt af døden',
        'debug-creator': 'Julie Hastrup'
      },
      {
        'debug-work': 'work:1016021',
        val: 0.35257991294693813,
        type: 'loans',
        from: ['870970-basis:45488713'],
        pid: '870970-basis:50776239',
        loancount: 16526,
        'debug-title': 'Sidste forestilling',
        'debug-creator': 'Anna Grue'
      },
      {
        'debug-work': 'work:1475386',
        val: 0.32840355383124226,
        type: 'loans',
        from: ['870970-basis:45488713'],
        pid: '870970-basis:51613406',
        loancount: 21289,
        'debug-title': 'Løvetæmmeren',
        'debug-creator': 'Camilla Läckberg'
      },
      {
        'debug-work': 'work:1436291',
        val: 0.3021489180188196,
        type: 'loans',
        from: ['870970-basis:45488713'],
        pid: '870970-basis:50694240',
        loancount: 21212,
        'debug-title': 'Sandmanden',
        'debug-creator': 'Lars Kepler'
      },
      {
        'debug-work': 'work:1412991',
        val: 0.2956221190281046,
        type: 'loans',
        from: ['870970-basis:45488713'],
        pid: '870970-basis:51268172',
        loancount: 28313,
        'debug-title': 'Den grænseløse',
        'debug-creator': 'Jussi Adler-Olsen'
      },
      {
        'debug-work': 'work:1436036',
        val: 0.295579678446434,
        type: 'loans',
        from: ['870970-basis:45488713'],
        pid: '870970-basis:50587282',
        loancount: 16669,
        'debug-title': 'Afsporet',
        'debug-creator': 'Michael Katz Krefeld'
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
      Date.now() < +new Date('2021-01-01'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
