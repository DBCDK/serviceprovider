// AUTOTEST GENERATOR: {"endpoint":"status","params":{"before":"2018-07-13 10:02:00"}}
//
//
const endpoint = 'status';
const params = {before: '2018-07-13 10:02:00'};

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
    openorder: {url: 'https://openorder.addi.dk/2.8/', ok: true},
    opensearch: {url: 'https://opensearch.addi.dk/b3.5_5.0/', ok: true},
    openuserstatus: {url: 'https://openuserstatus.addi.dk/1.6.1/', ok: true},
    moreinfo: {url: 'https://moreinfo.addi.dk/2.11/', ok: true},
    ddbcmsapi: {url: 'https://cmscontent.dbc.dk/'},
    storage: {
      ok: true,
      client: 'XXXXX',
      user: 'XXXXX'
    },

    recommend: {
      url: 'http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim',
      ok: true
    },
    communityservice: {url: ''},
    suggest: {url: 'http://ortograf.mcp1-proxy.dbc.dk/ortograf/', ok: true},
    performance: [
      {
        endpoint: 'work',
        version: '2.0.0',
        count: 150,
        underlyingServices: {
          '1.0': 61,
          '5.0': 83,
          '25.0': 226,
          '50.0': 325,
          '75.0': 402,
          '95.0': 472,
          '99.0': 627
        },
        total: {
          '1.0': 62,
          '5.0': 84,
          '25.0': 228,
          '50.0': 329,
          '75.0': 404,
          '95.0': 475,
          '99.0': 644
        }
      },
      {
        endpoint: 'suggest',
        version: '3.0.0',
        count: 94,
        underlyingServices: {
          '1.0': 14,
          '5.0': 14,
          '25.0': 16,
          '50.0': 18,
          '75.0': 21,
          '95.0': 28,
          '99.0': 32
        },
        total: {
          '1.0': 15,
          '5.0': 16,
          '25.0': 17,
          '50.0': 19,
          '75.0': 23,
          '95.0': 32,
          '99.0': 34
        }
      },
      {
        endpoint: 'recommend',
        version: '3.0.0',
        count: 31,
        underlyingServices: {
          '1.0': 53,
          '5.0': 56,
          '25.0': 64,
          '50.0': 155,
          '75.0': 189,
          '95.0': 331,
          '99.0': 924
        },
        total: {
          '1.0': 53,
          '5.0': 56,
          '25.0': 65,
          '50.0': 157,
          '75.0': 193,
          '95.0': 335,
          '99.0': 929
        }
      },
      {
        endpoint: 'work',
        version: '3.0.0',
        count: 14,
        underlyingServices: {
          '1.0': 114,
          '5.0': 140,
          '25.0': 210,
          '50.0': 258,
          '75.0': 661,
          '95.0': 859,
          '99.0': 988
        },
        total: {
          '1.0': 124,
          '5.0': 152,
          '25.0': 234,
          '50.0': 262,
          '75.0': 667,
          '95.0': 882,
          '99.0': 1003
        }
      },
      {
        endpoint: 'search',
        version: '3.0.0',
        count: 6,
        underlyingServices: {
          '1.0': 281,
          '5.0': 357,
          '25.0': 648,
          '50.0': 691,
          '75.0': 758,
          '95.0': 958,
          '99.0': 1008
        },
        total: {
          '1.0': 286,
          '5.0': 366,
          '25.0': 674,
          '50.0': 811,
          '75.0': 923,
          '95.0': 1023,
          '99.0': 1049
        }
      },
      {
        endpoint: 'recommend',
        version: '1.0.0',
        count: 4,
        underlyingServices: {
          '1.0': 8,
          '5.0': 8,
          '25.0': 10,
          '50.0': 12,
          '75.0': 13,
          '95.0': 13,
          '99.0': 13
        },
        total: {
          '1.0': 8,
          '5.0': 9,
          '25.0': 11,
          '50.0': 13,
          '75.0': 13,
          '95.0': 14,
          '99.0': 14
        }
      },
      {
        endpoint: 'libraries',
        version: '2.0.0',
        count: 3,
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
          '1.0': 22,
          '5.0': 22,
          '25.0': 23,
          '50.0': 23,
          '75.0': 24,
          '95.0': 24,
          '99.0': 24
        }
      },
      {
        endpoint: 'user',
        version: '2.0.0',
        count: 3,
        underlyingServices: {
          '1.0': 253,
          '5.0': 271,
          '25.0': 365,
          '50.0': 482,
          '75.0': 515,
          '95.0': 541,
          '99.0': 547
        },
        total: {
          '1.0': 255,
          '5.0': 274,
          '25.0': 369,
          '50.0': 487,
          '75.0': 519,
          '95.0': 544,
          '99.0': 549
        }
      },
      {
        endpoint: 'availability',
        version: '3.0.0',
        count: 3,
        underlyingServices: {
          '1.0': 1776,
          '5.0': 1804,
          '25.0': 1946,
          '50.0': 2123,
          '75.0': 2567,
          '95.0': 2921,
          '99.0': 2992
        },
        total: {
          '1.0': 1783,
          '5.0': 1811,
          '25.0': 1950,
          '50.0': 2123,
          '75.0': 2567,
          '95.0': 2922,
          '99.0': 2993
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
    openorder: 'https://openorder.addi.dk/2.8/',
    opensearch: 'https://opensearch.addi.dk/b3.5_5.0/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    rank: 'https://xptest.dbc.dk/ms/rank/v1',
    suggest: 'http://ortograf.mcp1-proxy.dbc.dk/ortograf/',
    recommend: 'http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim',
    communityservice: '',
    suggestpopular: 'XXXXX',
    suggestcreator: 'XXXXX',
    suggestlibrary: 'XXXXX',
    suggestsubject: 'XXXXX',
    performance: 'https://elk-p01.dbc.dk:9100/prod_ux-*/',
    recommendurls: 'XXXXX',
    cicero: 'https://cicero-fbs.com/rest/external/v1/'
  },
  cicero: {'DK-725300': {username: 'XXXXX', password: 'XXXXX'}},
  communityservice: {id: 1},
  performance: {password: 'XXXXX', username: 'XXXXX'},
  search: {agency: '725300', profile: 'opac'},
  storage: {user: 'XXXXX'},
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
  user: {
    id: 'XXXXX',
    salt: 'XXXXX',
    pin: 'XXXXX',
    libraryId: '725300',
    agency: '725300',
    isil: 'DK-725300'
  },
  app: {
    clientId: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  }
};
const mockData = {
  '["http://ortograf.mcp1-proxy.dbc.dk/ortograf/status",{}]':
    '{"ok": true, "build": "1053", "git": "07dfa1446deaf502a87f905c20ea4c248ec97de3", "version": "0.2", "ab-id": 1, "mem-usage": 71768, "solr": [{"url": "http://0.ortograf-solr.microsearch.prod.mcp1.dbc.dk/solr/ortograf-all", "solr-ok": true}, {"url": "http://0.ortograf-solr.microsearch.prod.mcp1.dbc.dk/solr/ortograf-creator", "solr-ok": true}, {"url": "http://0.ortograf-solr.microsearch.prod.mcp1.dbc.dk/solr/ortograf-subject", "solr-ok": true}, {"url": "http://0.ortograf-solr.microsearch.prod.mcp1.dbc.dk/solr/ortograf-title", "solr-ok": true}], "statistics": [{"startup": "2018-06-07 15:37:26", "uptime": "858:27:57", "active": 0, "windowstart": "21:22:59", "total-success": 444583, "total-failure": 36, "window": {"success": {"count": 4995, "mean": 13.179, "std": 6.444, "min": 6.156, "25%": 9.916, "50%": 11.2, "75%": 15.521, "max": 313.965}, "failure": {"count": 5, "mean": 0.059, "std": 0.006, "min": 0.051, "25%": 0.057, "50%": 0.06, "75%": 0.06, "max": 0.068}}, "name": "ortograf"}]}',
  '["http://staging.recomole.mcp1-proxy.dbc.dk/recomole/status",{}]':
    '{"ok": true, "build": "443", "git": "344571f638c92b6f8969e64467583f23af403592", "version": "0.1.0", "ab-id": 1, "mem-usage": 323948, "statistics": [{"startup": "2018-07-12 11:48:21", "uptime": "22:17:03", "active": 0, "windowstart": "07:28:58", "total-success": 45297, "total-failure": 13, "window": {"success": {"count": 4999, "mean": 133.531, "std": 66.412, "min": 32.719, "25%": 58.258, "50%": 142.198, "75%": 168.324, "max": 621.361}, "failure": {"count": 1, "mean": 17.204, "std": null, "min": 17.204, "25%": 17.204, "50%": 17.204, "75%": 17.204, "max": 17.204}}, "name": "loan-cosim-recommender"}]}',
  '["https://elk-p01.dbc.dk:9100/prod_ux-*/_search",{"method":"POST","auth":{"pass":"XXXXX","user":"XXXXX"},"json":{"size":0,"query":{"bool":{"must":[{"match_all":{}},{"match_phrase":{"msg":{"query":"transformer-done"}}},{"match_phrase":{"app":{"query":"serviceprovider"}}},{"range":{"@timestamp":{"gte":1531468860000,"lte":1531468920000,"format":"epoch_millis"}}}],"filter":[],"should":[],"must_not":[]}},"aggs":{"version":{"terms":{"field":"version.keyword"},"aggs":{"endpoints":{"terms":{"field":"name.keyword"},"aggs":{"external":{"percentiles":{"field":"timings.external"}},"total":{"percentiles":{"field":"timings.total"}}}}}}}}}]': {
    took: 26,
    timed_out: false,
    _shards: {total: 405, successful: 405, skipped: 396, failed: 0},
    hits: {total: 308, max_score: 0, hits: []},
    aggregations: {
      version: {
        doc_count_error_upper_bound: 0,
        sum_other_doc_count: 0,
        buckets: [
          {
            key: '2.0.0',
            doc_count: 156,
            endpoints: {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: 'work',
                  doc_count: 150,
                  total: {
                    values: {
                      '1.0': 62.45,
                      '5.0': 84,
                      '25.0': 227.75,
                      '50.0': 328.5,
                      '75.0': 404,
                      '95.0': 475.2499999999998,
                      '99.0': 643.729999999998
                    }
                  },
                  external: {
                    values: {
                      '1.0': 60.96,
                      '5.0': 83,
                      '25.0': 226.25,
                      '50.0': 325,
                      '75.0': 401.75,
                      '95.0': 472.2499999999998,
                      '99.0': 627.0199999999982
                    }
                  }
                },
                {
                  key: 'libraries',
                  doc_count: 3,
                  total: {
                    values: {
                      '1.0': 22.02,
                      '5.0': 22.1,
                      '25.0': 22.5,
                      '50.0': 23,
                      '75.0': 23.5,
                      '95.0': 23.9,
                      '99.0': 23.98
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
                  key: 'user',
                  doc_count: 3,
                  total: {
                    values: {
                      '1.0': 254.74,
                      '5.0': 273.7,
                      '25.0': 368.5,
                      '50.0': 487,
                      '75.0': 518.5,
                      '95.0': 543.7,
                      '99.0': 548.74
                    }
                  },
                  external: {
                    values: {
                      '1.0': 252.68,
                      '5.0': 271.40000000000003,
                      '25.0': 365,
                      '50.0': 482,
                      '75.0': 515,
                      '95.0': 541.4,
                      '99.0': 546.68
                    }
                  }
                }
              ]
            }
          },
          {
            key: '3.0.0',
            doc_count: 148,
            endpoints: {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: 'suggest',
                  doc_count: 94,
                  total: {
                    values: {
                      '1.0': 14.93,
                      '5.0': 16,
                      '25.0': 17,
                      '50.0': 19,
                      '75.0': 23,
                      '95.0': 32.349999999999994,
                      '99.0': 34.139999999999986
                    }
                  },
                  external: {
                    values: {
                      '1.0': 13.930000000000001,
                      '5.0': 14,
                      '25.0': 16,
                      '50.0': 18,
                      '75.0': 21,
                      '95.0': 28.349999999999994,
                      '99.0': 32.139999999999986
                    }
                  }
                },
                {
                  key: 'recommend',
                  doc_count: 31,
                  total: {
                    values: {
                      '1.0': 53.2,
                      '5.0': 56,
                      '25.0': 65,
                      '50.0': 157,
                      '75.0': 192.5,
                      '95.0': 335,
                      '99.0': 928.5999999999995
                    }
                  },
                  external: {
                    values: {
                      '1.0': 53.2,
                      '5.0': 56,
                      '25.0': 64,
                      '50.0': 155,
                      '75.0': 188.5,
                      '95.0': 330.5,
                      '99.0': 923.9999999999994
                    }
                  }
                },
                {
                  key: 'work',
                  doc_count: 14,
                  total: {
                    values: {
                      '1.0': 124.02000000000001,
                      '5.0': 152.1,
                      '25.0': 233.75,
                      '50.0': 262,
                      '75.0': 666.75,
                      '95.0': 881.5499999999998,
                      '99.0': 1002.7099999999998
                    }
                  },
                  external: {
                    values: {
                      '1.0': 113.5,
                      '5.0': 139.5,
                      '25.0': 210.25,
                      '50.0': 257.5,
                      '75.0': 660.5,
                      '95.0': 858.8,
                      '99.0': 987.7599999999998
                    }
                  }
                },
                {
                  key: 'search',
                  doc_count: 6,
                  total: {
                    values: {
                      '1.0': 286,
                      '5.0': 366,
                      '25.0': 674.25,
                      '50.0': 810.5,
                      '75.0': 922.75,
                      '95.0': 1022.75,
                      '99.0': 1049.35
                    }
                  },
                  external: {
                    values: {
                      '1.0': 280.95,
                      '5.0': 356.75,
                      '25.0': 647.5,
                      '50.0': 691,
                      '75.0': 757.75,
                      '95.0': 958,
                      '99.0': 1007.6000000000001
                    }
                  }
                },
                {
                  key: 'availability',
                  doc_count: 3,
                  total: {
                    values: {
                      '1.0': 1782.94,
                      '5.0': 1810.7,
                      '25.0': 1949.5,
                      '50.0': 2123,
                      '75.0': 2567,
                      '95.0': 2922.2,
                      '99.0': 2993.24
                    }
                  },
                  external: {
                    values: {
                      '1.0': 1776.08,
                      '5.0': 1804.4,
                      '25.0': 1946,
                      '50.0': 2123,
                      '75.0': 2566.5,
                      '95.0': 2921.2999999999997,
                      '99.0': 2992.2599999999998
                    }
                  }
                }
              ]
            }
          },
          {
            key: '1.0.0',
            doc_count: 4,
            endpoints: {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: 'recommend',
                  doc_count: 4,
                  total: {
                    values: {
                      '1.0': 8.12,
                      '5.0': 8.6,
                      '25.0': 11,
                      '50.0': 12.5,
                      '75.0': 13.25,
                      '95.0': 13.85,
                      '99.0': 13.969999999999999
                    }
                  },
                  external: {
                    values: {
                      '1.0': 8.09,
                      '5.0': 8.45,
                      '25.0': 10.25,
                      '50.0': 12,
                      '75.0': 13,
                      '95.0': 13,
                      '99.0': 13
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
  '["https://openorder.addi.dk/2.8/?HowRU",{}]': 'Gr8',
  '["https://opensearch.addi.dk/b3.5_5.0/?HowRU",{}]': 'Gr8',
  '["https://openuserstatus.addi.dk/1.6.1/?HowRU",{}]': 'Gr8'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: status.auto', () => {
  it('has same result as recorded (in status.auto)', () => {
    assert(
      Date.now() < +new Date('2019-02-28'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
