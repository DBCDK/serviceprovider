// AUTOTEST GENERATOR: {"endpoint":"status","params":{"fields":["performance"],"week":"2018-W07"}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'status';
const params = {fields: ['performance'], week: '2018-W07'};

const expected = {
  statusCode: 200,
  data: {
    version: '3.0.0',
    endOfServiceDate: '0000-00-00T00:00:00Z',
    performance: [
      {
        week: '2018-W07',
        endpoint: 'recommend',
        version: '1.0.0',
        count: 8184,
        underlyingServices: {
          '1.0': 9,
          '5.0': 9,
          '25.0': 11,
          '50.0': 13,
          '75.0': 22,
          '95.0': 41,
          '99.0': 58
        },
        total: {
          '1.0': 9,
          '5.0': 10,
          '25.0': 11,
          '50.0': 14,
          '75.0': 23,
          '95.0': 42,
          '99.0': 60
        }
      },
      {
        week: '2018-W07',
        endpoint: 'work',
        version: '1.0.0',
        count: 4267,
        underlyingServices: {
          '1.0': 121,
          '5.0': 175,
          '25.0': 336,
          '50.0': 522,
          '75.0': 833,
          '95.0': 1674,
          '99.0': 3601
        },
        total: {
          '1.0': 122,
          '5.0': 178,
          '25.0': 339,
          '50.0': 526,
          '75.0': 839,
          '95.0': 1687,
          '99.0': 3625
        }
      },
      {
        week: '2018-W07',
        endpoint: 'suggest',
        version: '1.0.0',
        count: 4040,
        underlyingServices: {
          '1.0': 152,
          '5.0': 165,
          '25.0': 174,
          '50.0': 183,
          '75.0': 192,
          '95.0': 361,
          '99.0': 855
        },
        total: {
          '1.0': 154,
          '5.0': 166,
          '25.0': 176,
          '50.0': 184,
          '75.0': 193,
          '95.0': 362,
          '99.0': 857
        }
      },
      {
        week: '2018-W07',
        endpoint: 'search',
        version: '1.0.0',
        count: 1009,
        underlyingServices: {
          '1.0': 114,
          '5.0': 193,
          '25.0': 593,
          '50.0': 939,
          '75.0': 1374,
          '95.0': 2593,
          '99.0': 4212
        },
        total: {
          '1.0': 116,
          '5.0': 194,
          '25.0': 601,
          '50.0': 959,
          '75.0': 1400,
          '95.0': 2621,
          '99.0': 4249
        }
      },
      {
        week: '2018-W07',
        endpoint: 'availability',
        version: '1.0.0',
        count: 56,
        underlyingServices: {
          '1.0': 483,
          '5.0': 680,
          '25.0': 1449,
          '50.0': 1648,
          '75.0': 1985,
          '95.0': 2418,
          '99.0': 2737
        },
        total: {
          '1.0': 484,
          '5.0': 681,
          '25.0': 1451,
          '50.0': 1650,
          '75.0': 1986,
          '95.0': 2419,
          '99.0': 2738
        }
      },
      {
        week: '2018-W07',
        endpoint: 'user',
        version: '1.0.0',
        count: 5,
        underlyingServices: {
          '1.0': 11395,
          '5.0': 11614,
          '25.0': 12709,
          '50.0': 13345,
          '75.0': 14014,
          '95.0': 32024,
          '99.0': 35626
        },
        total: {
          '1.0': 11406,
          '5.0': 11624,
          '25.0': 12716,
          '50.0': 13355,
          '75.0': 14016,
          '95.0': 32027,
          '99.0': 35629
        }
      },
      {
        week: '2018-W07',
        endpoint: 'user',
        version: '2.0.0',
        count: 2551,
        underlyingServices: {
          '1.0': 155,
          '5.0': 167,
          '25.0': 18067,
          '50.0': 38484,
          '75.0': 49473,
          '95.0': 72089,
          '99.0': 159831
        },
        total: {
          '1.0': 172,
          '5.0': 221,
          '25.0': 18067,
          '50.0': 38486,
          '75.0': 49470,
          '95.0': 72089,
          '99.0': 159831
        }
      },
      {
        week: '2018-W07',
        endpoint: 'availability',
        version: '2.0.0',
        count: 1735,
        underlyingServices: {
          '1.0': 10866,
          '5.0': 21250,
          '25.0': 37155,
          '50.0': 55653,
          '75.0': 68988,
          '95.0': 98767,
          '99.0': 159843
        },
        total: {
          '1.0': 10866,
          '5.0': 21251,
          '25.0': 37156,
          '50.0': 55657,
          '75.0': 68989,
          '95.0': 98767,
          '99.0': 159843
        }
      },
      {
        week: '2018-W07',
        endpoint: 'libraries',
        version: '2.0.0',
        count: 357,
        underlyingServices: {
          '1.0': 0,
          '5.0': 0,
          '25.0': 0,
          '50.0': 0,
          '75.0': 0,
          '95.0': 0,
          '99.0': 0
        },
        total: {
          '1.0': 36,
          '5.0': 37,
          '25.0': 42,
          '50.0': 55,
          '75.0': 75,
          '95.0': 97,
          '99.0': 113
        }
      },
      {
        week: '2018-W07',
        endpoint: 'work',
        version: '2.0.0',
        count: 239,
        underlyingServices: {
          '1.0': 229,
          '5.0': 285,
          '25.0': 1265,
          '50.0': 2043,
          '75.0': 3886,
          '95.0': 12301,
          '99.0': 15753
        },
        total: {
          '1.0': 248,
          '5.0': 297,
          '25.0': 1275,
          '50.0': 2066,
          '75.0': 3913,
          '95.0': 12330,
          '99.0': 15797
        }
      },
      {
        week: '2018-W07',
        endpoint: 'search',
        version: '2.0.0',
        count: 238,
        underlyingServices: {
          '1.0': 80,
          '5.0': 108,
          '25.0': 1323,
          '50.0': 2102,
          '75.0': 3981,
          '95.0': 12307,
          '99.0': 15755
        },
        total: {
          '1.0': 82,
          '5.0': 110,
          '25.0': 1452,
          '50.0': 2272,
          '75.0': 4180,
          '95.0': 12522,
          '99.0': 16016
        }
      },
      {
        week: '2018-W07',
        endpoint: 'events',
        version: '2.0.0',
        count: 2,
        underlyingServices: {
          '1.0': 19,
          '5.0': 19,
          '25.0': 20,
          '50.0': 21,
          '75.0': 21,
          '95.0': 22,
          '99.0': 22
        },
        total: {
          '1.0': 108,
          '5.0': 109,
          '25.0': 111,
          '50.0': 113,
          '75.0': 116,
          '95.0': 118,
          '99.0': 118
        }
      },
      {
        week: '2018-W07',
        endpoint: 'library',
        version: '2.0.0',
        count: 1,
        underlyingServices: {
          '1.0': 35,
          '5.0': 35,
          '25.0': 35,
          '50.0': 35,
          '75.0': 35,
          '95.0': 35,
          '99.0': 35
        },
        total: {
          '1.0': 427,
          '5.0': 427,
          '25.0': 427,
          '50.0': 427,
          '75.0': 427,
          '95.0': 427,
          '99.0': 427
        }
      },
      {
        week: '2018-W07',
        endpoint: 'order',
        version: '2.0.0',
        count: 1,
        underlyingServices: {
          '1.0': 3914,
          '5.0': 3914,
          '25.0': 3914,
          '50.0': 3914,
          '75.0': 3914,
          '95.0': 3914,
          '99.0': 3914
        },
        total: {
          '1.0': 3919,
          '5.0': 3919,
          '25.0': 3919,
          '50.0': 3919,
          '75.0': 3919,
          '95.0': 3919,
          '99.0': 3919
        }
      },
      {
        week: '2018-W07',
        endpoint: 'search',
        version: '3.0.0',
        count: 350,
        underlyingServices: {
          '1.0': 0,
          '5.0': 80,
          '25.0': 305,
          '50.0': 1025,
          '75.0': 2804,
          '95.0': 3816,
          '99.0': 4214
        },
        total: {
          '1.0': 0,
          '5.0': 82,
          '25.0': 307,
          '50.0': 1051,
          '75.0': 2876,
          '95.0': 3870,
          '99.0': 4319
        }
      },
      {
        week: '2018-W07',
        endpoint: 'events',
        version: '3.0.0',
        count: 95,
        underlyingServices: {
          '1.0': 9,
          '5.0': 11,
          '25.0': 14,
          '50.0': 18,
          '75.0': 30,
          '95.0': 114,
          '99.0': 1147
        },
        total: {
          '1.0': 44,
          '5.0': 53,
          '25.0': 61,
          '50.0': 74,
          '75.0': 100,
          '95.0': 182,
          '99.0': 1204
        }
      },
      {
        week: '2018-W07',
        endpoint: 'library',
        version: '3.0.0',
        count: 51,
        underlyingServices: {
          '1.0': 12,
          '5.0': 12,
          '25.0': 18,
          '50.0': 26,
          '75.0': 55,
          '95.0': 97,
          '99.0': 103
        },
        total: {
          '1.0': 43,
          '5.0': 137,
          '25.0': 230,
          '50.0': 261,
          '75.0': 310,
          '95.0': 436,
          '99.0': 458
        }
      },
      {
        week: '2018-W07',
        endpoint: 'rank',
        version: '3.0.0',
        count: 36,
        underlyingServices: {
          '1.0': 54,
          '5.0': 55,
          '25.0': 58,
          '50.0': 60,
          '75.0': 65,
          '95.0': 73,
          '99.0': 78
        },
        total: {
          '1.0': 56,
          '5.0': 57,
          '25.0': 60,
          '50.0': 62,
          '75.0': 70,
          '95.0': 76,
          '99.0': 80
        }
      },
      {
        week: '2018-W07',
        endpoint: 'availability',
        version: '3.0.0',
        count: 11,
        underlyingServices: {
          '1.0': 1487,
          '5.0': 1488,
          '25.0': 1636,
          '50.0': 1744,
          '75.0': 1862,
          '95.0': 1902,
          '99.0': 1917
        },
        total: {
          '1.0': 1487,
          '5.0': 1489,
          '25.0': 1640,
          '50.0': 1745,
          '75.0': 1865,
          '95.0': 1904,
          '99.0': 1919
        }
      },
      {
        week: '2018-W07',
        endpoint: 'facets',
        version: '3.0.0',
        count: 11,
        underlyingServices: {
          '1.0': 226,
          '5.0': 230,
          '25.0': 348,
          '50.0': 422,
          '75.0': 526,
          '95.0': 657,
          '99.0': 731
        },
        total: {
          '1.0': 240,
          '5.0': 242,
          '25.0': 362,
          '50.0': 436,
          '75.0': 535,
          '95.0': 669,
          '99.0': 744
        }
      },
      {
        week: '2018-W07',
        endpoint: 'recommend',
        version: '3.0.0',
        count: 11,
        underlyingServices: {
          '1.0': 31,
          '5.0': 33,
          '25.0': 35,
          '50.0': 38,
          '75.0': 40,
          '95.0': 42,
          '99.0': 42
        },
        total: {
          '1.0': 60,
          '5.0': 61,
          '25.0': 64,
          '50.0': 71,
          '75.0': 80,
          '95.0': 90,
          '99.0': 92
        }
      },
      {
        week: '2018-W07',
        endpoint: 'user',
        version: '3.0.0',
        count: 10,
        underlyingServices: {
          '1.0': 1395,
          '5.0': 1418,
          '25.0': 1521,
          '50.0': 1588,
          '75.0': 1770,
          '95.0': 2859,
          '99.0': 3344
        },
        total: {
          '1.0': 1404,
          '5.0': 1426,
          '25.0': 1532,
          '50.0': 1599,
          '75.0': 1776,
          '95.0': 2869,
          '99.0': 3357
        }
      },
      {
        week: '2018-W07',
        endpoint: 'work',
        version: '3.0.0',
        count: 10,
        underlyingServices: {
          '1.0': 929,
          '5.0': 966,
          '25.0': 1085,
          '50.0': 1275,
          '75.0': 1323,
          '95.0': 1340,
          '99.0': 1350
        },
        total: {
          '1.0': 960,
          '5.0': 999,
          '25.0': 1119,
          '50.0': 1335,
          '75.0': 1372,
          '95.0': 1416,
          '99.0': 1426
        }
      },
      {
        week: '2018-W07',
        endpoint: 'suggest',
        version: '3.0.0',
        count: 9,
        underlyingServices: {
          '1.0': 179,
          '5.0': 180,
          '25.0': 181,
          '50.0': 183,
          '75.0': 190,
          '95.0': 195,
          '99.0': 196
        },
        total: {
          '1.0': 185,
          '5.0': 185,
          '25.0': 189,
          '50.0': 195,
          '75.0': 198,
          '95.0': 207,
          '99.0': 207
        }
      }
    ]
  }
};

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.11/',
    openagency: 'http://openagency.addi.dk/2.24/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/2.2/',
    PRODopenorder: 'https://openorder.addi.dk/2.8/',
    openorder: 'https://openorder.addi.dk/test_2.8/',
    Xopensearch: 'XXXXX',
    opensearch: 'https://opensearch.addi.dk/b3.5_5.0/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    suggest: 'http://ortograf.mcp1-proxy.dbc.dk/ortograf/',
    recommend: 'http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim',
    performance: 'http://elk.dbc.dk:5601/elasticsearch/',
    communityservice: 'http://localhost:4010/v1'
  },
  communityservice: {id: 1},
  search: {
    agency: '150013',
    profile: 'opac',
    collectionidentifiers: 'rec.collectionIdentifier:150013-palle'
  },
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
  '["http://elk.dbc.dk:5601/elasticsearch/prod_ux-2018.07/",{}]':
    '{"prod_ux-2018.07":{"aliases":{},"mappings":{"_default_":{"dynamic_templates":[{"string_fields":{"mapping":{"index":"analyzed","omit_norms":true,"type":"string","fields":{"raw":{"ignore_above":256,"index":"not_analyzed","type":"string"}}},"match":"*","match_mapping_type":"string"}}],"_all":{"enabled":true},"properties":{"@version":{"type":"string","index":"not_analyzed"},"geoip":{"dynamic":"true","properties":{"location":{"type":"geo_point"}}}}},"logs":{"dynamic_templates":[{"string_fields":{"mapping":{"index":"analyzed","omit_norms":true,"type":"string","fields":{"raw":{"ignore_above":256,"index":"not_analyzed","type":"string"}}},"match":"*","match_mapping_type":"string"}}],"_all":{"enabled":true},"properties":{"@timestamp":{"type":"date","format":"dateOptionalTime"},"@version":{"type":"string","index":"not_analyzed"},"action":{"properties":{"origin":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"path":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pid":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"type":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"app":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"attributes":{"properties":{"agencies":{"properties":{"agencyId":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"userId":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"userIdType":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"authenticatedToken":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"cpr":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"userId":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"authBackend":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"authenticated":{"type":"boolean"},"clientId":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"cookie":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"created":{"type":"date","format":"dateOptionalTime"},"env":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"error":{"properties":{"@timestamp":{"type":"date","format":"dateOptionalTime"},"@version":{"type":"long"},"error":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"facility":{"type":"long"},"facility_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"message":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"name":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"severity_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"stacktrace":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_group":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_hostip":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"timestamp":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"url":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"version":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"event":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"facility":{"type":"long"},"facility_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"geoip":{"dynamic":"true","properties":{"location":{"type":"geo_point"}}},"host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"hostname":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"id":{"type":"long"},"level":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"message":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"msg":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"name":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"object":{"properties":{"$":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"params":{"properties":{"@timestamp":{"type":"date","format":"dateOptionalTime"},"@version":{"type":"long"},"access_token":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"agency":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"agencyIds":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"branchIds":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"facility":{"type":"long"},"facility_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"fields":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"filter":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"json":{"properties":{"like":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"maxresults":{"type":"long"},"set":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"library":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"like":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"limit":{"type":"long"},"loanId":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"method":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"name":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"offset":{"type":"long"},"params":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pid":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pids":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pretty":{"type":"boolean"},"q":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"qs":{"properties":{"action":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"agency":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"agencyId":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"amount":{"type":"long"},"authentication.groupIdAut":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"authentication.passwordAut":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"authentication.userIdAut":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"authenticationGroup":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"authenticationPassword":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"authenticationUser":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"fields":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"filter":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"identifier":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"n":{"type":"long"},"objectFormat":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"outputType":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pidList":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"profile":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"query":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"relationData":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"rows":{"type":"long"},"skip":{"type":"long"},"type":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"userId":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"userPincode":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"query":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"recommender":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"rows":{"type":"long"},"severity_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sort":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_group":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_hostip":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"timestamp":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"timings":{"type":"boolean"},"type":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"uri":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"version":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"pid":{"type":"long"},"port":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"priority":{"type":"long"},"query":{"properties":{"access_token":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"like":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pids":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pretty":{"type":"boolean"},"timings":{"type":"boolean"}}},"request":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"response":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"serviceRequester":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"severity":{"type":"long"},"severity_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sid":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"smaug":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"stack":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"stacktrace":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"status":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"statusCode":{"type":"long"},"sys_appid":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_group":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_hostip":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"tag":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"tags":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"timestamp":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"timings":{"properties":{"external":{"type":"long"},"total":{"type":"long"}}},"token":{"properties":{"access_token":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"expires":{"type":"long"},"expires_in":{"type":"long"},"token_type":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"user":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"validateErrors":{"properties":{"argument":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"instance":{"type":"double"},"message":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"name":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"property":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"schema":{"properties":{"type":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"stack":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"version":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"versions":{"properties":{"ares":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"cldr":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"http_parser":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"icu":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"modules":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"nghttp2":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"node":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"openssl":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"tz":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"unicode":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"uv":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"v8":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"zlib":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"wsdl":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"dkdcplus:cng":{"dynamic_templates":[{"string_fields":{"mapping":{"index":"analyzed","omit_norms":true,"type":"string","fields":{"raw":{"ignore_above":256,"index":"not_analyzed","type":"string"}}},"match":"*","match_mapping_type":"string"}}],"_all":{"enabled":true},"properties":{"@timestamp":{"type":"date","format":"dateOptionalTime"},"@version":{"type":"string","index":"not_analyzed"},"app":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"facility":{"type":"long"},"facility_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"geoip":{"dynamic":"true","properties":{"location":{"type":"geo_point"}}},"host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"level":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"message":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"msg":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pid":{"type":"long"},"priority":{"type":"long"},"severity":{"type":"long"},"severity_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_appid":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_group":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_hostip":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"tag":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"timestamp":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"type":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"version":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"dkdcplus:aud":{"dynamic_templates":[{"string_fields":{"mapping":{"index":"analyzed","omit_norms":true,"type":"string","fields":{"raw":{"ignore_above":256,"index":"not_analyzed","type":"string"}}},"match":"*","match_mapping_type":"string"}}],"_all":{"enabled":true},"properties":{"@timestamp":{"type":"date","format":"dateOptionalTime"},"@version":{"type":"string","index":"not_analyzed"},"app":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"facility":{"type":"long"},"facility_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"geoip":{"dynamic":"true","properties":{"location":{"type":"geo_point"}}},"host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"level":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"message":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"msg":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pid":{"type":"long"},"priority":{"type":"long"},"severity":{"type":"long"},"severity_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_appid":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_group":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_hostip":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"tag":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"timestamp":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"type":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"version":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"dkdcplus:vac":{"dynamic_templates":[{"string_fields":{"mapping":{"index":"analyzed","omit_norms":true,"type":"string","fields":{"raw":{"ignore_above":256,"index":"not_analyzed","type":"string"}}},"match":"*","match_mapping_type":"string"}}],"_all":{"enabled":true},"properties":{"@timestamp":{"type":"date","format":"dateOptionalTime"},"@version":{"type":"string","index":"not_analyzed"},"app":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"facility":{"type":"long"},"facility_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"geoip":{"dynamic":"true","properties":{"location":{"type":"geo_point"}}},"host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"level":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"message":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"msg":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pid":{"type":"long"},"priority":{"type":"long"},"severity":{"type":"long"},"severity_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_appid":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_group":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_hostip":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"tag":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"timestamp":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"type":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"version":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"dkdcplus:clr":{"dynamic_templates":[{"string_fields":{"mapping":{"index":"analyzed","omit_norms":true,"type":"string","fields":{"raw":{"ignore_above":256,"index":"not_analyzed","type":"string"}}},"match":"*","match_mapping_type":"string"}}],"_all":{"enabled":true},"properties":{"@timestamp":{"type":"date","format":"dateOptionalTime"},"@version":{"type":"string","index":"not_analyzed"},"app":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"facility":{"type":"long"},"facility_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"geoip":{"dynamic":"true","properties":{"location":{"type":"geo_point"}}},"host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"level":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"message":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"msg":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pid":{"type":"long"},"priority":{"type":"long"},"severity":{"type":"long"},"severity_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_appid":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_group":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_hostip":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"tag":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"timestamp":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"type":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"version":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"dkdcplus:dsr":{"dynamic_templates":[{"string_fields":{"mapping":{"index":"analyzed","omit_norms":true,"type":"string","fields":{"raw":{"ignore_above":256,"index":"not_analyzed","type":"string"}}},"match":"*","match_mapping_type":"string"}}],"_all":{"enabled":true},"properties":{"@timestamp":{"type":"date","format":"dateOptionalTime"},"@version":{"type":"string","index":"not_analyzed"},"app":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"facility":{"type":"long"},"facility_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"geoip":{"dynamic":"true","properties":{"location":{"type":"geo_point"}}},"host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"level":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"message":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"msg":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pid":{"type":"long"},"priority":{"type":"long"},"severity":{"type":"long"},"severity_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_appid":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_group":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_hostip":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"tag":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"timestamp":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"type":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"version":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"accessLog":{"dynamic_templates":[{"string_fields":{"mapping":{"index":"analyzed","omit_norms":true,"type":"string","fields":{"raw":{"ignore_above":256,"index":"not_analyzed","type":"string"}}},"match":"*","match_mapping_type":"string"}}],"_all":{"enabled":true},"properties":{"@timestamp":{"type":"date","format":"dateOptionalTime"},"@version":{"type":"string","index":"not_analyzed"},"access_token":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"app":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"clientId":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"facility":{"type":"long"},"facility_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"geoip":{"dynamic":"true","properties":{"location":{"type":"geo_point"}}},"health":{"properties":{"ok":{"properties":{"agencyStore":{"properties":{"responseTime":{"type":"long"}}},"clientStore":{"properties":{"responseTime":{"type":"long"}}},"configStore":{"properties":{"responseTime":{"type":"long"}}},"tokenStore":{"properties":{"responseTime":{"type":"long"}}}}}}},"host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"level":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"message":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pid":{"type":"long"},"priority":{"type":"long"},"request":{"properties":{"hostname":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"method":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"path":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"query":{"properties":{"?access_token":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"access_token":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"agency":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"agencyIds":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"amp;oslash;der en nisse\\"":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"branchIds":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"fields":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"like":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"limit":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"loanId":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"offset":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pid":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pids":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pretty":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"q":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sort":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"timings":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"token":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"type":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"remoteAddress":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"response":{"properties":{"status":{"type":"long"}}},"severity":{"type":"long"},"severity_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_appid":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_group":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_hostip":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"time":{"properties":{"end":{"type":"date","format":"dateOptionalTime"},"start":{"type":"date","format":"dateOptionalTime"},"taken":{"type":"long"}}},"timestamp":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"token":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"type":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"user":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"version":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"dkdcplus:chr":{"dynamic_templates":[{"string_fields":{"mapping":{"index":"analyzed","omit_norms":true,"type":"string","fields":{"raw":{"ignore_above":256,"index":"not_analyzed","type":"string"}}},"match":"*","match_mapping_type":"string"}}],"_all":{"enabled":true},"properties":{"@timestamp":{"type":"date","format":"dateOptionalTime"},"@version":{"type":"string","index":"not_analyzed"},"app":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"facility":{"type":"long"},"facility_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"geoip":{"dynamic":"true","properties":{"location":{"type":"geo_point"}}},"host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"level":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"message":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"msg":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pid":{"type":"long"},"priority":{"type":"long"},"severity":{"type":"long"},"severity_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_appid":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_group":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_hostip":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"tag":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"timestamp":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"type":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"version":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}}},"settings":{"index":{"refresh_interval":"5s","creation_date":"1518393606346","number_of_shards":"5","uuid":"UZigevtVQLmYrbjWeGP4Zw","version":{"created":"1070599"},"number_of_replicas":"1"}},"warmers":{}}}',
  '["http://elk.dbc.dk:5601/elasticsearch/prod_ux-2018.07/_search?size=0",{"method":"POST","json":{"query":{"match":{"msg":{"query":"transformer-done","type":"phrase"}}},"filter":{"term":{"app":"serviceprovider"}},"aggs":{"version":{"terms":{"field":"version"},"aggs":{"endpoints":{"terms":{"field":"name"},"aggs":{"external":{"percentiles":{"field":"timings.external"}},"total":{"percentiles":{"field":"timings.total"}}}}}}}}}]': {
    took: 65,
    timed_out: false,
    _shards: {total: 5, successful: 5, failed: 0},
    hits: {total: 23286, max_score: 0, hits: []},
    aggregations: {
      version: {
        doc_count_error_upper_bound: 0,
        sum_other_doc_count: 0,
        buckets: [
          {
            key: '1.0.0',
            doc_count: 17561,
            endpoints: {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: 'recommend',
                  doc_count: 8184,
                  external: {
                    values: {
                      '1.0': 9,
                      '5.0': 9,
                      '25.0': 11,
                      '50.0': 13,
                      '75.0': 22,
                      '95.0': 41,
                      '99.0': 58
                    }
                  },
                  total: {
                    values: {
                      '1.0': 9,
                      '5.0': 10,
                      '25.0': 11,
                      '50.0': 14,
                      '75.0': 22.999999999999996,
                      '95.0': 42,
                      '99.0': 59.835000000000036
                    }
                  }
                },
                {
                  key: 'work',
                  doc_count: 4267,
                  external: {
                    values: {
                      '1.0': 120.66,
                      '5.0': 175.17499999999998,
                      '25.0': 335.5136752136752,
                      '50.0': 522.072463768116,
                      '75.0': 832.9529220779222,
                      '95.0': 1674.2499999999995,
                      '99.0': 3601.0600000000013
                    }
                  },
                  total: {
                    values: {
                      '1.0': 121.66,
                      '5.0': 178,
                      '25.0': 339.38461538461536,
                      '50.0': 526.2498814604078,
                      '75.0': 839.059899569584,
                      '95.0': 1686.5399999999995,
                      '99.0': 3625.480000000003
                    }
                  }
                },
                {
                  key: 'suggest',
                  doc_count: 4040,
                  external: {
                    values: {
                      '1.0': 152,
                      '5.0': 165,
                      '25.0': 174,
                      '50.0': 182.53333333333333,
                      '75.0': 192,
                      '95.0': 360.9124999999998,
                      '99.0': 854.9800000000023
                    }
                  },
                  total: {
                    values: {
                      '1.0': 154,
                      '5.0': 166,
                      '25.0': 176,
                      '50.0': 183.99999999999997,
                      '75.0': 193.36046511627907,
                      '95.0': 361.9221212121208,
                      '99.0': 856.760000000002
                    }
                  }
                },
                {
                  key: 'search',
                  doc_count: 1009,
                  external: {
                    values: {
                      '1.0': 114.16,
                      '5.0': 193.4,
                      '25.0': 592.59375,
                      '50.0': 938.8095238095239,
                      '75.0': 1373.6666666666665,
                      '95.0': 2592.6,
                      '99.0': 4211.599999999999
                    }
                  },
                  total: {
                    values: {
                      '1.0': 116.16000000000001,
                      '5.0': 194.4,
                      '25.0': 601.4,
                      '50.0': 959.4444444444443,
                      '75.0': 1400.404761904762,
                      '95.0': 2621.3999999999987,
                      '99.0': 4249.36
                    }
                  }
                },
                {
                  key: 'availability',
                  doc_count: 56,
                  external: {
                    values: {
                      '1.0': 483.25,
                      '5.0': 680.25,
                      '25.0': 1449,
                      '50.0': 1648,
                      '75.0': 1984.75,
                      '95.0': 2418,
                      '99.0': 2737.000000000002
                    }
                  },
                  total: {
                    values: {
                      '1.0': 484.35,
                      '5.0': 681,
                      '25.0': 1450.75,
                      '50.0': 1649.5,
                      '75.0': 1985.5,
                      '95.0': 2419.25,
                      '99.0': 2738.4500000000016
                    }
                  }
                },
                {
                  key: 'user',
                  doc_count: 5,
                  external: {
                    values: {
                      '1.0': 11394.76,
                      '5.0': 11613.8,
                      '25.0': 12709,
                      '50.0': 13345,
                      '75.0': 14014,
                      '95.0': 32024.399999999998,
                      '99.0': 35626.479999999996
                    }
                  },
                  total: {
                    values: {
                      '1.0': 11405.599999999999,
                      '5.0': 11624.000000000002,
                      '25.0': 12716,
                      '50.0': 13355,
                      '75.0': 14016,
                      '95.0': 32027.199999999997,
                      '99.0': 35629.439999999995
                    }
                  }
                }
              ]
            }
          },
          {
            key: '2.0.0',
            doc_count: 5124,
            endpoints: {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: 'user',
                  doc_count: 2551,
                  external: {
                    values: {
                      '1.0': 155,
                      '5.0': 166.75,
                      '25.0': 18067.171703296703,
                      '50.0': 38483.75789473684,
                      '75.0': 49473.25,
                      '95.0': 72088.83333333333,
                      '99.0': 159830.5
                    }
                  },
                  total: {
                    values: {
                      '1.0': 172,
                      '5.0': 221.2777777777778,
                      '25.0': 18066.642857142855,
                      '50.0': 38486.07692307692,
                      '75.0': 49469.71111111111,
                      '95.0': 72089,
                      '99.0': 159831
                    }
                  }
                },
                {
                  key: 'availability',
                  doc_count: 1735,
                  external: {
                    values: {
                      '1.0': 10865.54,
                      '5.0': 21250,
                      '25.0': 37154.666666666664,
                      '50.0': 55653.45333333334,
                      '75.0': 68987.80714285714,
                      '95.0': 98766.9,
                      '99.0': 159843
                    }
                  },
                  total: {
                    values: {
                      '1.0': 10865.54,
                      '5.0': 21250.7,
                      '25.0': 37156,
                      '50.0': 55656.57839262187,
                      '75.0': 68989.49285714286,
                      '95.0': 98767.2,
                      '99.0': 159843
                    }
                  }
                },
                {
                  key: 'libraries',
                  doc_count: 357,
                  external: {
                    values: {
                      '1.0': 0,
                      '5.0': 0,
                      '25.0': 0,
                      '50.0': 0,
                      '75.0': 0,
                      '95.0': 0,
                      '99.0': 0
                    }
                  },
                  total: {
                    values: {
                      '1.0': 36,
                      '5.0': 37,
                      '25.0': 41.75,
                      '50.0': 55,
                      '75.0': 75,
                      '95.0': 97,
                      '99.0': 113.32
                    }
                  }
                },
                {
                  key: 'work',
                  doc_count: 239,
                  external: {
                    values: {
                      '1.0': 229,
                      '5.0': 284.8,
                      '25.0': 1264.5,
                      '50.0': 2043,
                      '75.0': 3886,
                      '95.0': 12300.6,
                      '99.0': 15753.119999999999
                    }
                  },
                  total: {
                    values: {
                      '1.0': 247.5,
                      '5.0': 296.6,
                      '25.0': 1275,
                      '50.0': 2066.333333333333,
                      '75.0': 3913,
                      '95.0': 12329.599999999999,
                      '99.0': 15796.800000000001
                    }
                  }
                },
                {
                  key: 'search',
                  doc_count: 238,
                  external: {
                    values: {
                      '1.0': 79.74,
                      '5.0': 108.25,
                      '25.0': 1322.75,
                      '50.0': 2102,
                      '75.0': 3980.5,
                      '95.0': 12307.399999999996,
                      '99.0': 15755.380000000001
                    }
                  },
                  total: {
                    values: {
                      '1.0': 82.37,
                      '5.0': 110.10000000000002,
                      '25.0': 1451.75,
                      '50.0': 2272,
                      '75.0': 4180.25,
                      '95.0': 12521.599999999999,
                      '99.0': 16015.899999999998
                    }
                  }
                },
                {
                  key: 'events',
                  doc_count: 2,
                  external: {
                    values: {
                      '1.0': 19.029999999999998,
                      '5.0': 19.150000000000002,
                      '25.0': 19.75,
                      '50.0': 20.5,
                      '75.0': 21.25,
                      '95.0': 21.849999999999998,
                      '99.0': 21.970000000000002
                    }
                  },
                  total: {
                    values: {
                      '1.0': 108.10000000000001,
                      '5.0': 108.5,
                      '25.0': 110.5,
                      '50.0': 113,
                      '75.0': 115.5,
                      '95.0': 117.5,
                      '99.0': 117.89999999999999
                    }
                  }
                },
                {
                  key: 'library',
                  doc_count: 1,
                  external: {
                    values: {
                      '1.0': 35,
                      '5.0': 35,
                      '25.0': 35,
                      '50.0': 35,
                      '75.0': 35,
                      '95.0': 35,
                      '99.0': 35
                    }
                  },
                  total: {
                    values: {
                      '1.0': 427,
                      '5.0': 427,
                      '25.0': 427,
                      '50.0': 427,
                      '75.0': 427,
                      '95.0': 427,
                      '99.0': 427
                    }
                  }
                },
                {
                  key: 'order',
                  doc_count: 1,
                  external: {
                    values: {
                      '1.0': 3914,
                      '5.0': 3914,
                      '25.0': 3914,
                      '50.0': 3914,
                      '75.0': 3914,
                      '95.0': 3914,
                      '99.0': 3914
                    }
                  },
                  total: {
                    values: {
                      '1.0': 3919,
                      '5.0': 3919,
                      '25.0': 3919,
                      '50.0': 3919,
                      '75.0': 3919,
                      '95.0': 3919,
                      '99.0': 3919
                    }
                  }
                }
              ]
            }
          },
          {
            key: '3.0.0',
            doc_count: 601,
            endpoints: {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 7,
              buckets: [
                {
                  key: 'search',
                  doc_count: 350,
                  external: {
                    values: {
                      '1.0': 0,
                      '5.0': 79.9,
                      '25.0': 304.75,
                      '50.0': 1024.5,
                      '75.0': 2804,
                      '95.0': 3816.4000000000005,
                      '99.0': 4214.429999999999
                    }
                  },
                  total: {
                    values: {
                      '1.0': 0,
                      '5.0': 82,
                      '25.0': 306.5,
                      '50.0': 1050.6666666666665,
                      '75.0': 2875.666666666667,
                      '95.0': 3870.3,
                      '99.0': 4319.23
                    }
                  }
                },
                {
                  key: 'events',
                  doc_count: 95,
                  external: {
                    values: {
                      '1.0': 9,
                      '5.0': 11,
                      '25.0': 14,
                      '50.0': 18,
                      '75.0': 30,
                      '95.0': 113.89999999999996,
                      '99.0': 1146.6400000000006
                    }
                  },
                  total: {
                    values: {
                      '1.0': 43.94,
                      '5.0': 52.7,
                      '25.0': 60.5,
                      '50.0': 74,
                      '75.0': 99.5,
                      '95.0': 182.09999999999997,
                      '99.0': 1204.3400000000004
                    }
                  }
                },
                {
                  key: 'library',
                  doc_count: 51,
                  external: {
                    values: {
                      '1.0': 11.5,
                      '5.0': 12,
                      '25.0': 18,
                      '50.0': 26,
                      '75.0': 55,
                      '95.0': 96.5,
                      '99.0': 102.5
                    }
                  },
                  total: {
                    values: {
                      '1.0': 43,
                      '5.0': 136.5,
                      '25.0': 229.5,
                      '50.0': 261,
                      '75.0': 310,
                      '95.0': 436,
                      '99.0': 457.5
                    }
                  }
                },
                {
                  key: 'rank',
                  doc_count: 36,
                  external: {
                    values: {
                      '1.0': 54.349999999999994,
                      '5.0': 55,
                      '25.0': 58,
                      '50.0': 60,
                      '75.0': 64.75,
                      '95.0': 72.5,
                      '99.0': 77.89999999999999
                    }
                  },
                  total: {
                    values: {
                      '1.0': 56.349999999999994,
                      '5.0': 57,
                      '25.0': 60,
                      '50.0': 62,
                      '75.0': 70.25,
                      '95.0': 75.75,
                      '99.0': 79.94999999999999
                    }
                  }
                },
                {
                  key: 'availability',
                  doc_count: 11,
                  external: {
                    values: {
                      '1.0': 1487.2,
                      '5.0': 1488,
                      '25.0': 1636,
                      '50.0': 1744,
                      '75.0': 1861.5,
                      '95.0': 1902,
                      '99.0': 1917.2
                    }
                  },
                  total: {
                    values: {
                      '1.0': 1487.3999999999999,
                      '5.0': 1489,
                      '25.0': 1640,
                      '50.0': 1745,
                      '75.0': 1864.5,
                      '95.0': 1904,
                      '99.0': 1919.2
                    }
                  }
                },
                {
                  key: 'facets',
                  doc_count: 11,
                  external: {
                    values: {
                      '1.0': 226,
                      '5.0': 230,
                      '25.0': 347.5,
                      '50.0': 422,
                      '75.0': 526,
                      '95.0': 656.5,
                      '99.0': 731.3000000000001
                    }
                  },
                  total: {
                    values: {
                      '1.0': 239.6,
                      '5.0': 242,
                      '25.0': 362,
                      '50.0': 436,
                      '75.0': 534.5,
                      '95.0': 669,
                      '99.0': 744.2
                    }
                  }
                },
                {
                  key: 'recommend',
                  doc_count: 11,
                  external: {
                    values: {
                      '1.0': 31.300000000000004,
                      '5.0': 32.5,
                      '25.0': 35,
                      '50.0': 38,
                      '75.0': 39.5,
                      '95.0': 41.5,
                      '99.0': 41.9
                    }
                  },
                  total: {
                    values: {
                      '1.0': 60.1,
                      '5.0': 60.5,
                      '25.0': 63.5,
                      '50.0': 71,
                      '75.0': 79.5,
                      '95.0': 90,
                      '99.0': 91.60000000000001
                    }
                  }
                },
                {
                  key: 'user',
                  doc_count: 10,
                  external: {
                    values: {
                      '1.0': 1394.85,
                      '5.0': 1418.25,
                      '25.0': 1520.75,
                      '50.0': 1587.5,
                      '75.0': 1770,
                      '95.0': 2858.8499999999985,
                      '99.0': 3343.7700000000004
                    }
                  },
                  total: {
                    values: {
                      '1.0': 1404.4,
                      '5.0': 1426,
                      '25.0': 1531.5,
                      '50.0': 1598.5,
                      '75.0': 1776.25,
                      '95.0': 2869.249999999998,
                      '99.0': 3357.05
                    }
                  }
                },
                {
                  key: 'work',
                  doc_count: 10,
                  external: {
                    values: {
                      '1.0': 929.1800000000001,
                      '5.0': 965.9000000000001,
                      '25.0': 1084.5,
                      '50.0': 1275,
                      '75.0': 1322.75,
                      '95.0': 1340.4,
                      '99.0': 1350.48
                    }
                  },
                  total: {
                    values: {
                      '1.0': 959.81,
                      '5.0': 999.05,
                      '25.0': 1118.75,
                      '50.0': 1335,
                      '75.0': 1371.5,
                      '95.0': 1415.5,
                      '99.0': 1426.3
                    }
                  }
                },
                {
                  key: 'suggest',
                  doc_count: 9,
                  external: {
                    values: {
                      '1.0': 179.16,
                      '5.0': 179.8,
                      '25.0': 181,
                      '50.0': 183,
                      '75.0': 190,
                      '95.0': 194.8,
                      '99.0': 195.76000000000002
                    }
                  },
                  total: {
                    values: {
                      '1.0': 185.08,
                      '5.0': 185.4,
                      '25.0': 189,
                      '50.0': 195,
                      '75.0': 198,
                      '95.0': 206.60000000000002,
                      '99.0': 206.92000000000002
                    }
                  }
                }
              ]
            }
          }
        ]
      }
    }
  }
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: status_performance.auto', () => {
  it('has same result as recorded (in status_performance.auto)', () => {
    assert(
      Date.now() < +new Date('2018-07-09'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
