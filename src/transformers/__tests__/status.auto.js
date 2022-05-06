// AUTOTEST GENERATOR: {"endpoint":"status","params":{"after":"2020/05/01","before":"2020/05/06"}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'status';
const params = {after: '2020/05/01', before: '2020/05/06'};

const expected = {
  statusCode: 200,
  data: {
    version: '3.0.0',
    endOfServiceDate: '0000-00-00T00:00:00Z',
    openagency: {url: 'https://openagency.addi.dk/2.34/', ok: true},
    openholdingstatus: {
      url: 'https://openholdingstatus.addi.dk/3.0/',
      ok: true
    },
    openorder: {url: 'https://openorder.addi.dk/3.0', ok: true},
    openformat: {
      url:
        'http://openformat-php-master.frontend-prod.svc.cloud.dbc.dk/server.php',
      ok: true
    },
    holdingsitems: {
      url:
        'http://holdings-items-content-service.cisterne.svc.cloud.dbc.dk/holdings-items-content-service/api',
      ok: true,
      text: 'Success'
    },
    opensearch: {url: 'https://opensearch.addi.dk/b3.5_5.2/', ok: true},
    openuserstatus: {url: 'https://openuserstatus.addi.dk/2.0/', ok: true},
    moreinfo: {url: 'https://moreinfo.addi.dk/2.11/', ok: true},
    ddbcmsapi: {url: 'https://cmscontent.dbc.dk/'},
    recommend: {
      url: 'http://recomole-1-0.mi-prod.svc.cloud.dbc.dk/recomole/loan-cosim',
      ok: true
    },
    storage: {ok: true, user: 'XXXXX', client: 'XXXXX'},
    suggest: {
      url: 'http://ortograf-service-1-0.mi-prod.svc.cloud.dbc.dk/ortograf/',
      ok: true
    },
    performance: [
      {
        endpoint: 'work',
        version: '3.0.0',
        count: 288477,
        underlyingServices: {
          '1.0': 36,
          '5.0': 44,
          '25.0': 98,
          '50.0': 233,
          '75.0': 694,
          '95.0': 2740,
          '99.0': 5170
        },
        total: {
          '1.0': 37,
          '5.0': 45,
          '25.0': 101,
          '50.0': 236,
          '75.0': 696,
          '95.0': 2742,
          '99.0': 5172
        }
      },
      {
        endpoint: 'recommend',
        version: '3.0.0',
        count: 186861,
        underlyingServices: {
          '1.0': 53,
          '5.0': 56,
          '25.0': 120,
          '50.0': 188,
          '75.0': 233,
          '95.0': 410,
          '99.0': 794
        },
        total: {
          '1.0': 53,
          '5.0': 56,
          '25.0': 121,
          '50.0': 189,
          '75.0': 235,
          '95.0': 412,
          '99.0': 795
        }
      },
      {
        endpoint: 'suggest',
        version: '3.0.0',
        count: 165990,
        underlyingServices: {
          '1.0': 9,
          '5.0': 10,
          '25.0': 11,
          '50.0': 12,
          '75.0': 16,
          '95.0': 20,
          '99.0': 38
        },
        total: {
          '1.0': 10,
          '5.0': 10,
          '25.0': 12,
          '50.0': 13,
          '75.0': 17,
          '95.0': 22,
          '99.0': 40
        }
      },
      {
        endpoint: 'storage',
        version: '3.0.0',
        count: 85085,
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
          '1.0': 5,
          '5.0': 6,
          '25.0': 7,
          '50.0': 8,
          '75.0': 9,
          '95.0': 19,
          '99.0': 35
        }
      },
      {
        endpoint: 'aggregation',
        version: '3.0.0',
        count: 22654,
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
          '1.0': 2,
          '5.0': 2,
          '25.0': 30,
          '50.0': 34,
          '75.0': 39,
          '95.0': 50,
          '99.0': 59
        }
      },
      {
        endpoint: 'search',
        version: '3.0.0',
        count: 4460,
        underlyingServices: {
          '1.0': 37,
          '5.0': 40,
          '25.0': 63,
          '50.0': 91,
          '75.0': 255,
          '95.0': 786,
          '99.0': 2131
        },
        total: {
          '1.0': 38,
          '5.0': 40,
          '25.0': 63,
          '50.0': 92,
          '75.0': 263,
          '95.0': 807,
          '99.0': 2169
        }
      },
      {
        endpoint: 'user',
        version: '3.0.0',
        count: 2713,
        underlyingServices: {
          '1.0': 0,
          '5.0': 0,
          '25.0': 0,
          '50.0': 0,
          '75.0': 0,
          '95.0': 0,
          '99.0': 1458
        },
        total: {
          '1.0': 0,
          '5.0': 0,
          '25.0': 0,
          '50.0': 0,
          '75.0': 1,
          '95.0': 1,
          '99.0': 1460
        }
      },
      {
        endpoint: 'infomedia',
        version: '3.0.0',
        count: 1411,
        underlyingServices: {
          '1.0': 14,
          '5.0': 16,
          '25.0': 19,
          '50.0': 22,
          '75.0': 29,
          '95.0': 467,
          '99.0': 744
        },
        total: {
          '1.0': 15,
          '5.0': 17,
          '25.0': 19,
          '50.0': 22,
          '75.0': 29,
          '95.0': 467,
          '99.0': 745
        }
      },
      {
        endpoint: 'events',
        version: '3.0.0',
        count: 165,
        underlyingServices: {
          '1.0': 14,
          '5.0': 20,
          '25.0': 46,
          '50.0': 164,
          '75.0': 242,
          '95.0': 995,
          '99.0': 1233
        },
        total: {
          '1.0': 15,
          '5.0': 158,
          '25.0': 370,
          '50.0': 608,
          '75.0': 668,
          '95.0': 1512,
          '99.0': 1722
        }
      },
      {
        endpoint: 'libraries',
        version: '3.0.0',
        count: 91,
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
          '1.0': 3,
          '5.0': 3,
          '25.0': 5,
          '50.0': 10,
          '75.0': 15,
          '95.0': 29,
          '99.0': 36
        }
      }
    ]
  }
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
    recommend:
      'http://recomole-1-0.mi-prod.svc.cloud.dbc.dk/recomole/loan-cosim',
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
  '["http://holdings-items-content-service.cisterne.svc.cloud.dbc.dk/holdings-items-content-service/api/status",{"qs":{}}]':
    '{"ok":true,"text":"Success"}',
  '["http://openformat-php-master.frontend-prod.svc.cloud.dbc.dk/server.php",{"qs":{"pid":"870970-basis:25775481","action":"formatObject","outputFormat":"{\\"fields\\":{\\"shelf\\":\\"{undefined}\\"}}"}}]':
    '<?xml version="1.0" encoding="UTF-8"?><SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:of="http://oss.dbc.dk/ns/openformat" xmlns="http://oss.dbc.dk/ns/openformat"><SOAP-ENV:Body><of:formatResponse><customDisplay><error>could not combine input: undefined</error></customDisplay></of:formatResponse></SOAP-ENV:Body></SOAP-ENV:Envelope>\n',
  '["http://ortograf-service-1-0.mi-prod.svc.cloud.dbc.dk/ortograf/status",{}]':
    '{"ok": true, "build": "37", "git": "87419a80be28c894930cc19bde06c3ef68d7d744", "version": "0.2", "instance-id": "95d2-a9d0-d520-4592-9ac0-0d52-4daf-471f", "ab-id": 1, "mem-usage": 81824, "solr": [{"url": "http://ortograf-solr-1-0/solr/ortograf-all", "solr-ok": true}, {"url": "http://ortograf-solr-1-0/solr/ortograf-creator", "solr-ok": true}, {"url": "http://ortograf-solr-1-0/solr/ortograf-subject", "solr-ok": true}, {"url": "http://ortograf-solr-1-0/solr/ortograf-title", "solr-ok": true}], "statistics": [{"startup": "2020-03-31 02:11:07", "uptime": "872:25:27", "active": 0, "windowstart": "01:16:36", "total-success": 636683, "total-failure": 11, "window": {"success": {"count": 5000, "mean": 10.463, "std": 3.191, "min": 5.565, "25%": 8.175, "50%": 9.382, "75%": 12.381, "max": 43.928}, "failure": {"count": 0, "mean": null, "std": null, "min": null, "25%": null, "50%": null, "75%": null, "max": null}}, "name": "ortograf"}]}',
  '["http://recomole-1-0.mi-prod.svc.cloud.dbc.dk/recomole/status",{}]':
    '{"ok": true, "build": "26", "git": "1bf92b70028cd0a76798bc209e65ee3c6b96dc1d", "version": "0.1.0", "instance-id": "66d3-3f2d-1637-4b83-bb80-59a8-d88c-e553", "ab-id": 1, "mem-usage": 346552, "statistics": [{"startup": "2020-03-24 10:23:55", "uptime": "1032:12:39", "active": 0, "windowstart": "23:28:35", "total-success": 438243, "total-failure": 14466, "window": {"success": {"count": 4667, "mean": 209.945, "std": 206.165, "min": 35.066, "25%": 82.158, "50%": 192.743, "75%": 238.042, "max": 4237.958}, "failure": {"count": 333, "mean": 0.296, "std": 0.069, "min": 0.185, "25%": 0.245, "50%": 0.287, "75%": 0.332, "max": 0.555}}, "name": "loan-cosim-recommender"}]}',
  '["https://elk.dbc.dk:9100/k8s-frontend-prod-*/_search",{"method":"POST","auth":{"pass":"XXXXX","user":"XXXXX"},"json":{"size":0,"query":{"bool":{"must":[{"match_all":{}},{"match_phrase":{"msg":{"query":"transformer-done"}}},{"match_phrase":{"app":{"query":"serviceprovider"}}},{"range":{"@timestamp":{"gte":1588284000000,"lte":1588716000000,"format":"epoch_millis"}}}],"filter":[],"should":[],"must_not":[]}},"aggs":{"version":{"terms":{"field":"version.keyword"},"aggs":{"endpoints":{"terms":{"field":"name.keyword"},"aggs":{"external":{"percentiles":{"field":"timings.external"}},"total":{"percentiles":{"field":"timings.total"}}}}}}}}}]': {
    took: 1782,
    timed_out: false,
    _shards: {total: 145, successful: 145, skipped: 115, failed: 0},
    hits: {
      total: {value: 10000, relation: 'gte'},
      max_score: null,
      hits: []
    },
    aggregations: {
      version: {
        doc_count_error_upper_bound: 0,
        sum_other_doc_count: 0,
        buckets: [
          {
            key: '3.0.0',
            doc_count: 757958,
            endpoints: {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 51,
              buckets: [
                {
                  key: 'work',
                  doc_count: 288477,
                  total: {
                    values: {
                      '1.0': 37,
                      '5.0': 45,
                      '25.0': 100.58277354595894,
                      '50.0': 235.91942580527498,
                      '75.0': 695.9749485578631,
                      '95.0': 2742.246499416765,
                      '99.0': 5171.627438520548
                    }
                  },
                  external: {
                    values: {
                      '1.0': 36,
                      '5.0': 44,
                      '25.0': 97.86538157151786,
                      '50.0': 232.77254499912922,
                      '75.0': 694.1108984276881,
                      '95.0': 2740.473488805099,
                      '99.0': 5169.79371441436
                    }
                  }
                },
                {
                  key: 'recommend',
                  doc_count: 186861,
                  total: {
                    values: {
                      '1.0': 53,
                      '5.0': 56,
                      '25.0': 120.72200714924575,
                      '50.0': 189.08902285326684,
                      '75.0': 234.73847410372971,
                      '95.0': 411.58144479287984,
                      '99.0': 795.0721210084006
                    }
                  },
                  external: {
                    values: {
                      '1.0': 53,
                      '5.0': 56,
                      '25.0': 120.21009876239172,
                      '50.0': 187.76015840087757,
                      '75.0': 233.34414991324243,
                      '95.0': 410.3626929856607,
                      '99.0': 793.682580861241
                    }
                  }
                },
                {
                  key: 'suggest',
                  doc_count: 165990,
                  total: {
                    values: {
                      '1.0': 10,
                      '5.0': 10,
                      '25.0': 12,
                      '50.0': 13,
                      '75.0': 17,
                      '95.0': 21.63377192982456,
                      '99.0': 39.67600373482748
                    }
                  },
                  external: {
                    values: {
                      '1.0': 9,
                      '5.0': 10,
                      '25.0': 11,
                      '50.0': 12,
                      '75.0': 16,
                      '95.0': 20,
                      '99.0': 38.32580645161309
                    }
                  }
                },
                {
                  key: 'storage',
                  doc_count: 85085,
                  total: {
                    values: {
                      '1.0': 5,
                      '5.0': 6,
                      '25.0': 7,
                      '50.0': 8,
                      '75.0': 9,
                      '95.0': 19,
                      '99.0': 35
                    }
                  },
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
                  }
                },
                {
                  key: 'aggregation',
                  doc_count: 22654,
                  total: {
                    values: {
                      '1.0': 2,
                      '5.0': 2,
                      '25.0': 30,
                      '50.0': 34,
                      '75.0': 39,
                      '95.0': 50,
                      '99.0': 59
                    }
                  },
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
                  }
                },
                {
                  key: 'search',
                  doc_count: 4460,
                  total: {
                    values: {
                      '1.0': 38,
                      '5.0': 40,
                      '25.0': 63,
                      '50.0': 91.75614366729678,
                      '75.0': 262.79999999999995,
                      '95.0': 806.8095238095237,
                      '99.0': 2168.7999999999993
                    }
                  },
                  external: {
                    values: {
                      '1.0': 37,
                      '5.0': 40,
                      '25.0': 63,
                      '50.0': 91,
                      '75.0': 255.125,
                      '95.0': 785.54,
                      '99.0': 2131.199999999997
                    }
                  }
                },
                {
                  key: 'user',
                  doc_count: 2713,
                  total: {
                    values: {
                      '1.0': 0,
                      '5.0': 0,
                      '25.0': 0,
                      '50.0': 0,
                      '75.0': 1,
                      '95.0': 1,
                      '99.0': 1460.4399999999987
                    }
                  },
                  external: {
                    values: {
                      '1.0': 0,
                      '5.0': 0,
                      '25.0': 0,
                      '50.0': 0,
                      '75.0': 0,
                      '95.0': 0,
                      '99.0': 1458.4399999999987
                    }
                  }
                },
                {
                  key: 'infomedia',
                  doc_count: 1411,
                  total: {
                    values: {
                      '1.0': 14.61,
                      '5.0': 17,
                      '25.0': 19,
                      '50.0': 22,
                      '75.0': 29,
                      '95.0': 466.9000000000001,
                      '99.0': 744.900000000001
                    }
                  },
                  external: {
                    values: {
                      '1.0': 14,
                      '5.0': 16,
                      '25.0': 19,
                      '50.0': 22,
                      '75.0': 28.5,
                      '95.0': 466.9000000000001,
                      '99.0': 744.2900000000011
                    }
                  }
                },
                {
                  key: 'events',
                  doc_count: 165,
                  total: {
                    values: {
                      '1.0': 15.450000000000001,
                      '5.0': 158.25,
                      '25.0': 370,
                      '50.0': 608,
                      '75.0': 668,
                      '95.0': 1512.25,
                      '99.0': 1721.6999999999998
                    }
                  },
                  external: {
                    values: {
                      '1.0': 14.15,
                      '5.0': 19.75,
                      '25.0': 45.5,
                      '50.0': 164,
                      '75.0': 242.25,
                      '95.0': 995.25,
                      '99.0': 1232.6
                    }
                  }
                },
                {
                  key: 'libraries',
                  doc_count: 91,
                  total: {
                    values: {
                      '1.0': 3,
                      '5.0': 3.05,
                      '25.0': 5,
                      '50.0': 10,
                      '75.0': 15,
                      '95.0': 28.950000000000003,
                      '99.0': 35.77000000000001
                    }
                  },
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
                  }
                }
              ]
            }
          }
        ]
      }
    }
  },
  '["https://moreinfo.addi.dk/2.11/?HowRU",{}]': 'Gr8',
  '["https://openagency.addi.dk/2.34/?HowRU",{}]': 'Gr8',
  '["https://openholdingstatus.addi.dk/3.0/?HowRU",{}]': 'Gr8',
  '["https://opensearch.addi.dk/b3.5_5.2/?HowRU",{}]': 'Gr8',
  '["https://openuserstatus.addi.dk/2.0/?HowRU",{}]': 'Gr8',
  '["openorder","<SOAP-ENV:Envelope xmlns=\\"http://oss.dbc.dk/ns/openorder\\" xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\">\\n     <SOAP-ENV:Body>\\n        <checkOrderPolicyRequest>\\n           <authentication>\\n              <groupIdAut>XXXXX</groupIdAut>\\n              <passwordAut>XXXXX</passwordAut>\\n              <userIdAut>XXXXX</userIdAut>\\n           </authentication>\\n           <pickUpAgencyId>790900</pickUpAgencyId>\\n           <pid>870970-basis:25775481</pid>\\n           <serviceRequester>190101</serviceRequester>\\n        </checkOrderPolicyRequest>\\n     </SOAP-ENV:Body>\\n  </SOAP-ENV:Envelope>"]':
    '<?xml version=\'1.0\' encoding=\'UTF-8\'?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/"><S:Body><ns1:checkOrderPolicyResponse xmlns:ns1="http://oss.dbc.dk/ns/openorder"><ns1:orderPossible>true</ns1:orderPossible><ns1:orderPossibleReason>not_owned_ILL_loc</ns1:orderPossibleReason></ns1:checkOrderPolicyResponse></S:Body></S:Envelope>'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: status.auto', () => {
  it('has same result as recorded (in status.auto)', () => {
    assert(
      Date.now() < +new Date('2023-01-01'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
