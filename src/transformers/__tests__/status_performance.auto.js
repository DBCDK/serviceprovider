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
        version: '1',
        count: 8195,
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
          '95.0': 43,
          '99.0': 61
        }
      },
      {
        week: '2018-W07',
        endpoint: 'work',
        version: '1',
        count: 4516,
        underlyingServices: {
          '1.0': 121,
          '5.0': 184,
          '25.0': 341,
          '50.0': 537,
          '75.0': 912,
          '95.0': 2175,
          '99.0': 7449
        },
        total: {
          '1.0': 124,
          '5.0': 188,
          '25.0': 345,
          '50.0': 541,
          '75.0': 919,
          '95.0': 2199,
          '99.0': 7465
        }
      },
      {
        week: '2018-W07',
        endpoint: 'suggest',
        version: '1',
        count: 4049,
        underlyingServices: {
          '1.0': 152,
          '5.0': 165,
          '25.0': 174,
          '50.0': 182,
          '75.0': 192,
          '95.0': 362,
          '99.0': 853
        },
        total: {
          '1.0': 154,
          '5.0': 166,
          '25.0': 176,
          '50.0': 184,
          '75.0': 193,
          '95.0': 362,
          '99.0': 855
        }
      },
      {
        week: '2018-W07',
        endpoint: 'user',
        version: '1',
        count: 2566,
        underlyingServices: {
          '1.0': 155,
          '5.0': 167,
          '25.0': 18051,
          '50.0': 38465,
          '75.0': 49307,
          '95.0': 72080,
          '99.0': 159829
        },
        total: {
          '1.0': 172,
          '5.0': 221,
          '25.0': 18051,
          '50.0': 38467,
          '75.0': 49310,
          '95.0': 72080,
          '99.0': 159830
        }
      },
      {
        week: '2018-W07',
        endpoint: 'availability',
        version: '1',
        count: 1802,
        underlyingServices: {
          '1.0': 1487,
          '5.0': 11163,
          '25.0': 36199,
          '50.0': 54312,
          '75.0': 68855,
          '95.0': 98212,
          '99.0': 159843
        },
        total: {
          '1.0': 1489,
          '5.0': 11438,
          '25.0': 36216,
          '50.0': 54311,
          '75.0': 68853,
          '95.0': 98194,
          '99.0': 159843
        }
      },
      {
        week: '2018-W07',
        endpoint: 'search',
        version: '1',
        count: 1597,
        underlyingServices: {
          '1.0': 63,
          '5.0': 149,
          '25.0': 557,
          '50.0': 1062,
          '75.0': 1923,
          '95.0': 4001,
          '99.0': 11680
        },
        total: {
          '1.0': 63,
          '5.0': 153,
          '25.0': 571,
          '50.0': 1090,
          '75.0': 1997,
          '95.0': 4177,
          '99.0': 12314
        }
      },
      {
        week: '2018-W07',
        endpoint: 'libraries',
        version: '1',
        count: 362,
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
          '1.0': 26,
          '5.0': 37,
          '25.0': 41,
          '50.0': 55,
          '75.0': 75,
          '95.0': 97,
          '99.0': 119
        }
      },
      {
        week: '2018-W07',
        endpoint: 'events',
        version: '1',
        count: 97,
        underlyingServices: {
          '1.0': 9,
          '5.0': 11,
          '25.0': 14,
          '50.0': 19,
          '75.0': 30,
          '95.0': 113,
          '99.0': 1142
        },
        total: {
          '1.0': 44,
          '5.0': 53,
          '25.0': 61,
          '50.0': 74,
          '75.0': 101,
          '95.0': 180,
          '99.0': 1200
        }
      },
      {
        week: '2018-W07',
        endpoint: 'library',
        version: '1',
        count: 52,
        underlyingServices: {
          '1.0': 12,
          '5.0': 12,
          '25.0': 18,
          '50.0': 26,
          '75.0': 55,
          '95.0': 96,
          '99.0': 102
        },
        total: {
          '1.0': 44,
          '5.0': 142,
          '25.0': 230,
          '50.0': 263,
          '75.0': 315,
          '95.0': 436,
          '99.0': 457
        }
      },
      {
        week: '2018-W07',
        endpoint: 'rank',
        version: '1',
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
      }
    ]
  }
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
    suggest: 'http://ortograf.mcp1-proxy.dbc.dk/ortograf/',
    recommend: 'http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim',
    performance: 'XXXXX',
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
  '["XXXXXprod_ux-2018.07/",{}]':
    '{"prod_ux-2018.07":{"aliases":{},"mappings":{"_default_":{"dynamic_templates":[{"string_fields":{"mapping":{"index":"analyzed","omit_norms":true,"type":"string","fields":{"raw":{"ignore_above":256,"index":"not_analyzed","type":"string"}}},"match":"*","match_mapping_type":"string"}}],"_all":{"enabled":true},"properties":{"@version":{"type":"string","index":"not_analyzed"},"geoip":{"dynamic":"true","properties":{"location":{"type":"geo_point"}}}}},"logs":{"dynamic_templates":[{"string_fields":{"mapping":{"index":"analyzed","omit_norms":true,"type":"string","fields":{"raw":{"ignore_above":256,"index":"not_analyzed","type":"string"}}},"match":"*","match_mapping_type":"string"}}],"_all":{"enabled":true},"properties":{"@timestamp":{"type":"date","format":"dateOptionalTime"},"@version":{"type":"string","index":"not_analyzed"},"action":{"properties":{"origin":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"path":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pid":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"type":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"app":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"attributes":{"properties":{"agencies":{"properties":{"agencyId":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"userId":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"userIdType":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"authenticatedToken":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"cpr":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"userId":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"authBackend":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"authenticated":{"type":"boolean"},"clientId":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"cookie":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"created":{"type":"date","format":"dateOptionalTime"},"env":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"error":{"properties":{"@timestamp":{"type":"date","format":"dateOptionalTime"},"@version":{"type":"long"},"error":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"facility":{"type":"long"},"facility_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"message":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"name":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"severity_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"stacktrace":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_group":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_hostip":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"timestamp":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"url":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"version":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"event":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"facility":{"type":"long"},"facility_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"geoip":{"dynamic":"true","properties":{"location":{"type":"geo_point"}}},"host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"hostname":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"id":{"type":"long"},"level":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"message":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"msg":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"name":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"object":{"properties":{"$":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"params":{"properties":{"@timestamp":{"type":"date","format":"dateOptionalTime"},"@version":{"type":"long"},"access_token":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"agency":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"agencyIds":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"branchIds":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"facility":{"type":"long"},"facility_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"fields":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"filter":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"json":{"properties":{"like":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"maxresults":{"type":"long"},"set":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"library":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"like":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"limit":{"type":"long"},"loanId":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"method":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"name":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"offset":{"type":"long"},"params":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pid":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pids":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pretty":{"type":"boolean"},"q":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"qs":{"properties":{"action":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"agency":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"agencyId":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"amount":{"type":"long"},"authentication.groupIdAut":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"authentication.passwordAut":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"authentication.userIdAut":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"authenticationGroup":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"authenticationPassword":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"authenticationUser":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"fields":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"filter":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"identifier":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"n":{"type":"long"},"objectFormat":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"outputType":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pidList":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"profile":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"query":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"relationData":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"rows":{"type":"long"},"skip":{"type":"long"},"type":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"userId":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"userPincode":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"query":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"recommender":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"rows":{"type":"long"},"severity_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sort":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_group":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_hostip":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"timestamp":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"timings":{"type":"boolean"},"type":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"uri":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"version":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"pid":{"type":"long"},"port":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"priority":{"type":"long"},"query":{"properties":{"access_token":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"like":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pids":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pretty":{"type":"boolean"},"timings":{"type":"boolean"}}},"request":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"response":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"serviceRequester":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"severity":{"type":"long"},"severity_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sid":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"smaug":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"stack":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"stacktrace":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"status":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"statusCode":{"type":"long"},"sys_appid":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_group":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_hostip":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"tag":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"tags":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"timestamp":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"timings":{"properties":{"external":{"type":"long"},"total":{"type":"long"}}},"token":{"properties":{"access_token":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"expires":{"type":"long"},"expires_in":{"type":"long"},"token_type":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"user":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"validateErrors":{"properties":{"argument":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"instance":{"type":"double"},"message":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"name":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"property":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"schema":{"properties":{"type":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"stack":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"version":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"versions":{"properties":{"ares":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"cldr":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"http_parser":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"icu":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"modules":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"nghttp2":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"node":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"openssl":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"tz":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"unicode":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"uv":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"v8":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"zlib":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"wsdl":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"dkdcplus:cng":{"dynamic_templates":[{"string_fields":{"mapping":{"index":"analyzed","omit_norms":true,"type":"string","fields":{"raw":{"ignore_above":256,"index":"not_analyzed","type":"string"}}},"match":"*","match_mapping_type":"string"}}],"_all":{"enabled":true},"properties":{"@timestamp":{"type":"date","format":"dateOptionalTime"},"@version":{"type":"string","index":"not_analyzed"},"app":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"facility":{"type":"long"},"facility_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"geoip":{"dynamic":"true","properties":{"location":{"type":"geo_point"}}},"host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"level":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"message":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"msg":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pid":{"type":"long"},"priority":{"type":"long"},"severity":{"type":"long"},"severity_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_appid":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_group":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_hostip":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"tag":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"timestamp":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"type":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"version":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"dkdcplus:aud":{"dynamic_templates":[{"string_fields":{"mapping":{"index":"analyzed","omit_norms":true,"type":"string","fields":{"raw":{"ignore_above":256,"index":"not_analyzed","type":"string"}}},"match":"*","match_mapping_type":"string"}}],"_all":{"enabled":true},"properties":{"@timestamp":{"type":"date","format":"dateOptionalTime"},"@version":{"type":"string","index":"not_analyzed"},"app":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"facility":{"type":"long"},"facility_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"geoip":{"dynamic":"true","properties":{"location":{"type":"geo_point"}}},"host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"level":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"message":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"msg":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pid":{"type":"long"},"priority":{"type":"long"},"severity":{"type":"long"},"severity_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_appid":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_group":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_hostip":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"tag":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"timestamp":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"type":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"version":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"dkdcplus:vac":{"dynamic_templates":[{"string_fields":{"mapping":{"index":"analyzed","omit_norms":true,"type":"string","fields":{"raw":{"ignore_above":256,"index":"not_analyzed","type":"string"}}},"match":"*","match_mapping_type":"string"}}],"_all":{"enabled":true},"properties":{"@timestamp":{"type":"date","format":"dateOptionalTime"},"@version":{"type":"string","index":"not_analyzed"},"app":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"facility":{"type":"long"},"facility_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"geoip":{"dynamic":"true","properties":{"location":{"type":"geo_point"}}},"host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"level":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"message":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"msg":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pid":{"type":"long"},"priority":{"type":"long"},"severity":{"type":"long"},"severity_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_appid":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_group":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_hostip":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"tag":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"timestamp":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"type":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"version":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"dkdcplus:clr":{"dynamic_templates":[{"string_fields":{"mapping":{"index":"analyzed","omit_norms":true,"type":"string","fields":{"raw":{"ignore_above":256,"index":"not_analyzed","type":"string"}}},"match":"*","match_mapping_type":"string"}}],"_all":{"enabled":true},"properties":{"@timestamp":{"type":"date","format":"dateOptionalTime"},"@version":{"type":"string","index":"not_analyzed"},"app":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"facility":{"type":"long"},"facility_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"geoip":{"dynamic":"true","properties":{"location":{"type":"geo_point"}}},"host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"level":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"message":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"msg":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pid":{"type":"long"},"priority":{"type":"long"},"severity":{"type":"long"},"severity_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_appid":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_group":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_hostip":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"tag":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"timestamp":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"type":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"version":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"dkdcplus:dsr":{"dynamic_templates":[{"string_fields":{"mapping":{"index":"analyzed","omit_norms":true,"type":"string","fields":{"raw":{"ignore_above":256,"index":"not_analyzed","type":"string"}}},"match":"*","match_mapping_type":"string"}}],"_all":{"enabled":true},"properties":{"@timestamp":{"type":"date","format":"dateOptionalTime"},"@version":{"type":"string","index":"not_analyzed"},"app":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"facility":{"type":"long"},"facility_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"geoip":{"dynamic":"true","properties":{"location":{"type":"geo_point"}}},"host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"level":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"message":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"msg":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pid":{"type":"long"},"priority":{"type":"long"},"severity":{"type":"long"},"severity_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_appid":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_group":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_hostip":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"tag":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"timestamp":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"type":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"version":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"accessLog":{"dynamic_templates":[{"string_fields":{"mapping":{"index":"analyzed","omit_norms":true,"type":"string","fields":{"raw":{"ignore_above":256,"index":"not_analyzed","type":"string"}}},"match":"*","match_mapping_type":"string"}}],"_all":{"enabled":true},"properties":{"@timestamp":{"type":"date","format":"dateOptionalTime"},"@version":{"type":"string","index":"not_analyzed"},"access_token":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"app":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"clientId":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"facility":{"type":"long"},"facility_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"geoip":{"dynamic":"true","properties":{"location":{"type":"geo_point"}}},"health":{"properties":{"ok":{"properties":{"agencyStore":{"properties":{"responseTime":{"type":"long"}}},"clientStore":{"properties":{"responseTime":{"type":"long"}}},"configStore":{"properties":{"responseTime":{"type":"long"}}},"tokenStore":{"properties":{"responseTime":{"type":"long"}}}}}}},"host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"level":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"message":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pid":{"type":"long"},"priority":{"type":"long"},"request":{"properties":{"hostname":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"method":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"path":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"query":{"properties":{"?access_token":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"access_token":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"agency":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"agencyIds":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"amp;oslash;der en nisse\\"":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"branchIds":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"fields":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"like":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"limit":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"loanId":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"offset":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pid":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pids":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pretty":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"q":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sort":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"timings":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"token":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"type":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"remoteAddress":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"response":{"properties":{"status":{"type":"long"}}},"severity":{"type":"long"},"severity_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_appid":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_group":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_hostip":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"time":{"properties":{"end":{"type":"date","format":"dateOptionalTime"},"start":{"type":"date","format":"dateOptionalTime"},"taken":{"type":"long"}}},"timestamp":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"token":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"type":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"user":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"version":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}},"dkdcplus:chr":{"dynamic_templates":[{"string_fields":{"mapping":{"index":"analyzed","omit_norms":true,"type":"string","fields":{"raw":{"ignore_above":256,"index":"not_analyzed","type":"string"}}},"match":"*","match_mapping_type":"string"}}],"_all":{"enabled":true},"properties":{"@timestamp":{"type":"date","format":"dateOptionalTime"},"@version":{"type":"string","index":"not_analyzed"},"app":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"facility":{"type":"long"},"facility_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"geoip":{"dynamic":"true","properties":{"location":{"type":"geo_point"}}},"host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"level":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"message":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"msg":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"pid":{"type":"long"},"priority":{"type":"long"},"severity":{"type":"long"},"severity_label":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_appid":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_group":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_host":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"sys_hostip":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"tag":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"timestamp":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"type":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}},"version":{"type":"string","norms":{"enabled":false},"fields":{"raw":{"type":"string","index":"not_analyzed","ignore_above":256}}}}}},"settings":{"index":{"refresh_interval":"5s","creation_date":"1518393606346","number_of_shards":"5","uuid":"UZigevtVQLmYrbjWeGP4Zw","version":{"created":"1070599"},"number_of_replicas":"1"}},"warmers":{}}}',
  '["XXXXXprod_ux-2018.07/_search?size=0",{"method":"POST","json":{"query":{"match":{"msg":{"query":"transformer-done","type":"phrase"}}},"filter":{"term":{"app":"serviceprovider"}},"aggs":{"version":{"terms":{"field":"@version"},"aggs":{"endpoints":{"terms":{"field":"name"},"aggs":{"external":{"percentiles":{"field":"timings.external"}},"total":{"percentiles":{"field":"timings.total"}}}}}}}}}]': {
    took: 72,
    timed_out: false,
    _shards: {total: 5, successful: 5, failed: 0},
    hits: {total: 23286, max_score: 0, hits: []},
    aggregations: {
      version: {
        doc_count_error_upper_bound: 0,
        sum_other_doc_count: 0,
        buckets: [
          {
            key: '1',
            doc_count: 23286,
            endpoints: {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 14,
              buckets: [
                {
                  key: 'recommend',
                  doc_count: 8195,
                  external: {
                    values: {
                      '1.0': 9,
                      '5.0': 9,
                      '25.0': 11,
                      '50.0': 13.000000000000002,
                      '75.0': 22,
                      '95.0': 41.00000000000001,
                      '99.0': 58
                    }
                  },
                  total: {
                    values: {
                      '1.0': 9,
                      '5.0': 10,
                      '25.0': 11,
                      '50.0': 14,
                      '75.0': 23,
                      '95.0': 43,
                      '99.0': 61
                    }
                  }
                },
                {
                  key: 'work',
                  doc_count: 4516,
                  external: {
                    values: {
                      '1.0': 121.14999999999999,
                      '5.0': 184.41666666666666,
                      '25.0': 340.6417582417582,
                      '50.0': 536.8121212121213,
                      '75.0': 911.7504545454544,
                      '95.0': 2175.125,
                      '99.0': 7448.700000000015
                    }
                  },
                  total: {
                    values: {
                      '1.0': 124,
                      '5.0': 187.50000000000003,
                      '25.0': 345.1714285714285,
                      '50.0': 541.3416666666667,
                      '75.0': 918.8905006631301,
                      '95.0': 2198.5666666666666,
                      '99.0': 7465.300000000021
                    }
                  }
                },
                {
                  key: 'suggest',
                  doc_count: 4049,
                  external: {
                    values: {
                      '1.0': 152,
                      '5.0': 165,
                      '25.0': 174,
                      '50.0': 182.44827586206895,
                      '75.0': 192,
                      '95.0': 362.3199999999999,
                      '99.0': 853.3599999999997
                    }
                  },
                  total: {
                    values: {
                      '1.0': 154,
                      '5.0': 166,
                      '25.0': 176,
                      '50.0': 184,
                      '75.0': 193.42857142857142,
                      '95.0': 361.68,
                      '99.0': 855.3199999999997
                    }
                  }
                },
                {
                  key: 'user',
                  doc_count: 2566,
                  external: {
                    values: {
                      '1.0': 155,
                      '5.0': 167,
                      '25.0': 18051.161616161615,
                      '50.0': 38465.339560439555,
                      '75.0': 49307.399999999994,
                      '95.0': 72079.58333333333,
                      '99.0': 159829.15
                    }
                  },
                  total: {
                    values: {
                      '1.0': 172,
                      '5.0': 221.47222222222223,
                      '25.0': 18050.90734265734,
                      '50.0': 38466.59243697479,
                      '75.0': 49309.6,
                      '95.0': 72080,
                      '99.0': 159829.8
                    }
                  }
                },
                {
                  key: 'availability',
                  doc_count: 1802,
                  external: {
                    values: {
                      '1.0': 1487.02,
                      '5.0': 11163.00000000001,
                      '25.0': 36199.4375,
                      '50.0': 54311.7012987013,
                      '75.0': 68855.44230769231,
                      '95.0': 98211.69999999998,
                      '99.0': 159842.97
                    }
                  },
                  total: {
                    values: {
                      '1.0': 1489.02,
                      '5.0': 11437.68333333334,
                      '25.0': 36215.833333333336,
                      '50.0': 54311.12362637363,
                      '75.0': 68853.45932539683,
                      '95.0': 98193.84999999999,
                      '99.0': 159842.98
                    }
                  }
                },
                {
                  key: 'search',
                  doc_count: 1597,
                  external: {
                    values: {
                      '1.0': 62.92,
                      '5.0': 149.20000000000005,
                      '25.0': 557.342857142857,
                      '50.0': 1062.025641025641,
                      '75.0': 1923.3166666666666,
                      '95.0': 4000.999999999999,
                      '99.0': 11680.279999999977
                    }
                  },
                  total: {
                    values: {
                      '1.0': 62.96,
                      '5.0': 153.05000000000004,
                      '25.0': 570.5625,
                      '50.0': 1090.4439946018895,
                      '75.0': 1997.0833333333335,
                      '95.0': 4176.8499999999985,
                      '99.0': 12314.119999999992
                    }
                  }
                },
                {
                  key: 'libraries',
                  doc_count: 362,
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
                      '1.0': 26.029999999999994,
                      '5.0': 37,
                      '25.0': 41.00000000000001,
                      '50.0': 55,
                      '75.0': 74.75,
                      '95.0': 97,
                      '99.0': 118.50999999999988
                    }
                  }
                },
                {
                  key: 'events',
                  doc_count: 97,
                  external: {
                    values: {
                      '1.0': 9,
                      '5.0': 11,
                      '25.0': 14,
                      '50.0': 19,
                      '75.0': 30,
                      '95.0': 112.59999999999985,
                      '99.0': 1141.759999999998
                    }
                  },
                  total: {
                    values: {
                      '1.0': 43.959999999999994,
                      '5.0': 52.8,
                      '25.0': 61,
                      '50.0': 74,
                      '75.0': 101,
                      '95.0': 180.3999999999998,
                      '99.0': 1199.5599999999981
                    }
                  }
                },
                {
                  key: 'library',
                  doc_count: 52,
                  external: {
                    values: {
                      '1.0': 11.51,
                      '5.0': 12,
                      '25.0': 18,
                      '50.0': 26,
                      '75.0': 55,
                      '95.0': 96.35,
                      '99.0': 102.49000000000001
                    }
                  },
                  total: {
                    values: {
                      '1.0': 43.620000000000005,
                      '5.0': 142.25000000000003,
                      '25.0': 229.75,
                      '50.0': 262.5,
                      '75.0': 314.75,
                      '95.0': 435.59999999999997,
                      '99.0': 457.37
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
      Date.now() < +new Date('2018-06-25'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
