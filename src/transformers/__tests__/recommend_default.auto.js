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
      pid: '870970-basis:50625532',
      val: 0.26559156568643216,
      from: [
        '870970-basis:29494940',
        '870970-basis:45488713',
        '870970-basis:29386404',
        '870970-basis:28643713',
        '870970-basis:28429576'
      ]
    },
    {
      pid: '870970-basis:28824130',
      val: 0.26262617774343394,
      from: [
        '870970-basis:29494940',
        '870970-basis:45488713',
        '870970-basis:29386404',
        '870970-basis:28643713',
        '870970-basis:28429576'
      ]
    },
    {
      pid: '870970-basis:28277350',
      val: 0.24994906120900962,
      from: [
        '870970-basis:29494940',
        '870970-basis:45488713',
        '870970-basis:29386404',
        '870970-basis:28643713',
        '870970-basis:28429576'
      ]
    },
    {
      pid: '870970-basis:28682417',
      val: 0.24451693515521952,
      from: [
        '870970-basis:29494940',
        '870970-basis:45488713',
        '870970-basis:29386404',
        '870970-basis:28643713',
        '870970-basis:28429576'
      ]
    },
    {
      pid: '870970-basis:29060835',
      val: 0.24279720203323216,
      from: [
        '870970-basis:29494940',
        '870970-basis:45488713',
        '870970-basis:29386404',
        '870970-basis:28643713',
        '870970-basis:28429576'
      ]
    },
    {
      pid: '870970-basis:28538952',
      val: 0.24006497609832297,
      from: [
        '870970-basis:29494940',
        '870970-basis:45488713',
        '870970-basis:29386404',
        '870970-basis:28643713',
        '870970-basis:28429576'
      ]
    },
    {
      pid: '870970-basis:45188981',
      val: 0.23852676426581199,
      from: [
        '870970-basis:29494940',
        '870970-basis:45488713',
        '870970-basis:29386404',
        '870970-basis:28643713',
        '870970-basis:28429576'
      ]
    },
    {
      pid: '870970-basis:51320352',
      val: 0.23096783039846508,
      from: [
        '870970-basis:29494940',
        '870970-basis:45488713',
        '870970-basis:29386404',
        '870970-basis:28643713',
        '870970-basis:28429576'
      ]
    },
    {
      pid: '870970-basis:29953554',
      val: 0.23048290224725712,
      from: [
        '870970-basis:29494940',
        '870970-basis:45488713',
        '870970-basis:29386404',
        '870970-basis:28643713',
        '870970-basis:28429576'
      ]
    },
    {
      pid: '870970-basis:50740447',
      val: 0.23042314825346377,
      from: [
        '870970-basis:29494940',
        '870970-basis:45488713',
        '870970-basis:29386404',
        '870970-basis:28643713',
        '870970-basis:28429576'
      ]
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
  '["http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim",{"method":"post","json":{"like":["870970-basis:45488713","870970-basis:28643713","870970-basis:29494940","870970-basis:29386404","870970-basis:28429576"],"limit":10}}]': {
    responseHeader: {
      build: '353',
      git: '943b5b3d76fcfc70ac441d44f76990acdddebf05',
      version: '0.1.0',
      'ab-id': '1',
      recommender: 'loan-cosim',
      numReturned: 10,
      timings: {
        workids: 16.762,
        fetch: 0.004,
        'from-analysis': 60.638,
        work2meta: 56.369,
        ignore: 0.044,
        booster: 0.001,
        filter: 373.015,
        'post-filter': 0.002,
        augment: 0.024,
        total: 507.386
      },
      time: 507
    },
    response: [
      {
        'debug-work': 'work:997928',
        val: 0.26559156568643216,
        type: 'loans',
        from: [
          '870970-basis:29494940',
          '870970-basis:45488713',
          '870970-basis:29386404',
          '870970-basis:28643713',
          '870970-basis:28429576'
        ],
        pid: '870970-basis:50625532',
        loancount: 20219,
        'debug-title': 'Den farlige leg',
        'debug-creator': 'Mari Jungstedt'
      },
      {
        'debug-work': 'work:973589',
        val: 0.26262617774343394,
        type: 'loans',
        from: [
          '870970-basis:29494940',
          '870970-basis:45488713',
          '870970-basis:29386404',
          '870970-basis:28643713',
          '870970-basis:28429576'
        ],
        pid: '870970-basis:28824130',
        loancount: 20371,
        'debug-title': 'Den mørke engel',
        'debug-creator': 'Mari Jungstedt'
      },
      {
        'debug-work': 'work:950964',
        val: 0.24994906120900962,
        type: 'loans',
        from: [
          '870970-basis:29494940',
          '870970-basis:45488713',
          '870970-basis:29386404',
          '870970-basis:28643713',
          '870970-basis:28429576'
        ],
        pid: '870970-basis:28277350',
        loancount: 19427,
        'debug-title': 'I denne søde sommertid',
        'debug-creator': 'Mari Jungstedt'
      },
      {
        'debug-work': 'work:969734',
        val: 0.24451693515521952,
        type: 'loans',
        from: [
          '870970-basis:29494940',
          '870970-basis:45488713',
          '870970-basis:29386404',
          '870970-basis:28643713',
          '870970-basis:28429576'
        ],
        pid: '870970-basis:28682417',
        loancount: 24820,
        'debug-title': 'Fyrmesteren',
        'debug-creator': 'Camilla Läckberg'
      },
      {
        'debug-work': 'work:987105',
        val: 0.24279720203323216,
        type: 'loans',
        from: [
          '870970-basis:29494940',
          '870970-basis:45488713',
          '870970-basis:29386404',
          '870970-basis:28643713',
          '870970-basis:28429576'
        ],
        pid: '870970-basis:29060835',
        loancount: 29418,
        'debug-title': 'De glemte piger',
        'debug-creator': 'Sara Blædel'
      },
      {
        'debug-work': 'work:963364',
        val: 0.24006497609832297,
        type: 'loans',
        from: [
          '870970-basis:29494940',
          '870970-basis:45488713',
          '870970-basis:29386404',
          '870970-basis:28643713',
          '870970-basis:28429576'
        ],
        pid: '870970-basis:28538952',
        loancount: 27351,
        'debug-title': 'Dødsenglen',
        'debug-creator': 'Sara Blædel'
      },
      {
        'debug-work': 'work:997705',
        val: 0.23852676426581199,
        type: 'loans',
        from: [
          '870970-basis:29494940',
          '870970-basis:45488713',
          '870970-basis:29386404',
          '870970-basis:28643713',
          '870970-basis:28429576'
        ],
        pid: '870970-basis:45188981',
        loancount: 22792,
        'debug-title': 'Englemagersken',
        'debug-creator': 'Camilla Läckberg'
      },
      {
        'debug-work': 'work:1408396',
        val: 0.23096783039846508,
        type: 'loans',
        from: [
          '870970-basis:29494940',
          '870970-basis:45488713',
          '870970-basis:29386404',
          '870970-basis:28643713',
          '870970-basis:28429576'
        ],
        pid: '870970-basis:51320352',
        loancount: 27108,
        'debug-title': 'Kvinden de meldte savnet',
        'debug-creator': 'Sara Blædel'
      },
      {
        'debug-work': 'work:1020878',
        val: 0.23048290224725712,
        type: 'loans',
        from: [
          '870970-basis:29494940',
          '870970-basis:45488713',
          '870970-basis:29386404',
          '870970-basis:28643713',
          '870970-basis:28429576'
        ],
        pid: '870970-basis:29953554',
        loancount: 19440,
        'debug-title': 'Eget ansvar',
        'debug-creator': 'Elsebeth Egholm'
      },
      {
        'debug-work': 'work:1399529',
        val: 0.23042314825346377,
        type: 'loans',
        from: [
          '870970-basis:29494940',
          '870970-basis:45488713',
          '870970-basis:29386404',
          '870970-basis:28643713',
          '870970-basis:28429576'
        ],
        pid: '870970-basis:50740447',
        loancount: 21671,
        'debug-title': 'Noras bog',
        'debug-creator': 'Liza Marklund'
      }
    ]
  }
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: recommend_default.auto', () => {
  it('has same result as recorded (in recommend_default.auto)', () => {
    assert(
      Date.now() < +new Date('2019-09-17'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
