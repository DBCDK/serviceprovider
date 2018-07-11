// AUTOTEST GENERATOR: {"endpoint":"status","params":{}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'status';
const params = {};

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
        count: 100,
        underlyingServices: {
          '1.0': 64,
          '5.0': 86,
          '25.0': 186,
          '50.0': 269,
          '75.0': 343,
          '95.0': 432,
          '99.0': 607
        },
        total: {
          '1.0': 65,
          '5.0': 88,
          '25.0': 193,
          '50.0': 273,
          '75.0': 346,
          '95.0': 434,
          '99.0': 635
        }
      },
      {
        endpoint: 'suggest',
        version: '3.0.0',
        count: 16,
        underlyingServices: {
          '1.0': 15,
          '5.0': 16,
          '25.0': 16,
          '50.0': 17,
          '75.0': 22,
          '95.0': 30,
          '99.0': 31
        },
        total: {
          '1.0': 15,
          '5.0': 16,
          '25.0': 18,
          '50.0': 19,
          '75.0': 24,
          '95.0': 32,
          '99.0': 32
        }
      },
      {
        endpoint: 'work',
        version: '3.0.0',
        count: 16,
        underlyingServices: {
          '1.0': 238,
          '5.0': 256,
          '25.0': 340,
          '50.0': 394,
          '75.0': 462,
          '95.0': 545,
          '99.0': 560
        },
        total: {
          '1.0': 248,
          '5.0': 264,
          '25.0': 347,
          '50.0': 401,
          '75.0': 487,
          '95.0': 575,
          '99.0': 576
        }
      },
      {
        endpoint: 'recommend',
        version: '3.0.0',
        count: 13,
        underlyingServices: {
          '1.0': 75,
          '5.0': 76,
          '25.0': 87,
          '50.0': 210,
          '75.0': 254,
          '95.0': 405,
          '99.0': 534
        },
        total: {
          '1.0': 76,
          '5.0': 77,
          '25.0': 88,
          '50.0': 214,
          '75.0': 264,
          '95.0': 408,
          '99.0': 538
        }
      },
      {
        endpoint: 'recommend',
        version: '1.0.0',
        count: 3,
        underlyingServices: {
          '1.0': 8,
          '5.0': 8,
          '25.0': 9,
          '50.0': 10,
          '75.0': 21,
          '95.0': 30,
          '99.0': 32
        },
        total: {
          '1.0': 9,
          '5.0': 9,
          '25.0': 11,
          '50.0': 12,
          '75.0': 23,
          '95.0': 32,
          '99.0': 34
        }
      },
      {
        endpoint: 'libraries',
        version: '2.0.0',
        count: 2,
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
          '1.0': 19,
          '5.0': 19,
          '25.0': 20,
          '50.0': 22,
          '75.0': 23,
          '95.0': 24,
          '99.0': 24
        }
      },
      {
        endpoint: 'user',
        version: '2.0.0',
        count: 2,
        underlyingServices: {
          '1.0': 213,
          '5.0': 213,
          '25.0': 214,
          '50.0': 215,
          '75.0': 215,
          '95.0': 216,
          '99.0': 216
        },
        total: {
          '1.0': 215,
          '5.0': 215,
          '25.0': 216,
          '50.0': 218,
          '75.0': 219,
          '95.0': 220,
          '99.0': 220
        }
      },
      {
        endpoint: 'availability',
        version: '3.0.0',
        count: 1,
        underlyingServices: {
          '1.0': 2212,
          '5.0': 2212,
          '25.0': 2212,
          '50.0': 2212,
          '75.0': 2212,
          '95.0': 2212,
          '99.0': 2212
        },
        total: {
          '1.0': 2215,
          '5.0': 2215,
          '25.0': 2215,
          '50.0': 2215,
          '75.0': 2215,
          '95.0': 2215,
          '99.0': 2215
        }
      },
      {
        endpoint: 'search',
        version: '3.0.0',
        count: 1,
        underlyingServices: {
          '1.0': 564,
          '5.0': 564,
          '25.0': 564,
          '50.0': 564,
          '75.0': 564,
          '95.0': 564,
          '99.0': 564
        },
        total: {
          '1.0': 614,
          '5.0': 614,
          '25.0': 614,
          '50.0': 614,
          '75.0': 614,
          '95.0': 614,
          '99.0': 614
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
    performance: 'https://elk-p01.dbc.dk:9100/',
    recommendurls: 'XXXXX',
    cicero: 'https://cicero-fbs.com/rest/external/v1/'
  },
  cicero: {'DK-725300': {username: 'XXXXX', password: 'XXXXX'}},
  communityservice: {id: 1},
  performance: {password: 'XXXXX', username: 'XXXXX'},
  search: {agency: '725300', profile: 'opac'},
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
    '{"ok": true, "build": "1053", "git": "07dfa1446deaf502a87f905c20ea4c248ec97de3", "version": "0.2", "ab-id": 1, "mem-usage": 71768, "solr": [{"url": "http://0.ortograf-solr.microsearch.prod.mcp1.dbc.dk/solr/ortograf-all", "solr-ok": true}, {"url": "http://0.ortograf-solr.microsearch.prod.mcp1.dbc.dk/solr/ortograf-creator", "solr-ok": true}, {"url": "http://0.ortograf-solr.microsearch.prod.mcp1.dbc.dk/solr/ortograf-subject", "solr-ok": true}, {"url": "http://0.ortograf-solr.microsearch.prod.mcp1.dbc.dk/solr/ortograf-title", "solr-ok": true}], "statistics": [{"startup": "2018-06-07 15:37:26", "uptime": "813:27:19", "active": 0, "windowstart": "09:00:40", "total-success": 415565, "total-failure": 24, "window": {"success": {"count": 4999, "mean": 12.944, "std": 4.664, "min": 7.192, "25%": 9.835, "50%": 11.179, "75%": 15.004, "max": 77.868}, "failure": {"count": 1, "mean": 0.054, "std": null, "min": 0.054, "25%": 0.054, "50%": 0.054, "75%": 0.054, "max": 0.054}}, "name": "ortograf"}]}',
  '["http://staging.recomole.mcp1-proxy.dbc.dk/recomole/status",{}]':
    '{"ok": true, "build": "439", "git": "0302736440a6b591f1966ab7780f4a3352647598", "version": "0.1.0", "ab-id": 1, "mem-usage": 324348, "statistics": [{"startup": "2018-07-10 14:02:09", "uptime": "23:02:36", "active": 0, "windowstart": "09:23:53", "total-success": 20230, "total-failure": 4, "window": {"success": {"count": 4998, "mean": 172.074, "std": 89.246, "min": 50.322, "25%": 74.338, "50%": 184.75, "75%": 218.466, "max": 1131.665}, "failure": {"count": 2, "mean": 26.624, "std": 5.229, "min": 22.926, "25%": 24.775, "50%": 26.624, "75%": 28.472, "max": 30.321}}, "name": "loan-cosim-recommender"}]}',
  '["https://elk-p01.dbc.dk:9100/prod_ux-*//_search",{"method":"POST","auth":{"pass":"XXXXX","user":"XXXXX"},"json":{"size":0,"query":{"bool":{"must":[{"match_all":{}},{"match_phrase":{"msg":{"query":"transformer-done"}}},{"match_phrase":{"app":{"query":"serviceprovider"}}},{"range":{"@timestamp":{"gte":1531307026037,"lte":1531307086037,"format":"epoch_millis"}}}],"filter":[],"should":[],"must_not":[]}},"aggs":{"version":{"terms":{"field":"version.keyword"},"aggs":{"endpoints":{"terms":{"field":"name.keyword"},"aggs":{"external":{"percentiles":{"field":"timings.external"}},"total":{"percentiles":{"field":"timings.total"}}}}}}}}}]': {
    took: 18,
    timed_out: false,
    _shards: {total: 387, successful: 387, skipped: 378, failed: 0},
    hits: {total: 154, max_score: 0, hits: []},
    aggregations: {
      version: {
        doc_count_error_upper_bound: 0,
        sum_other_doc_count: 0,
        buckets: [
          {
            key: '2.0.0',
            doc_count: 104,
            endpoints: {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: 'work',
                  doc_count: 100,
                  total: {
                    values: {
                      '1.0': 64.99,
                      '5.0': 87.95,
                      '25.0': 193,
                      '50.0': 272.5,
                      '75.0': 345.5,
                      '95.0': 434.29999999999995,
                      '99.0': 635.1100000000001
                    }
                  },
                  external: {
                    values: {
                      '1.0': 63.98,
                      '5.0': 86,
                      '25.0': 186.25,
                      '50.0': 268.5,
                      '75.0': 343,
                      '95.0': 432.29999999999995,
                      '99.0': 607.12
                    }
                  }
                },
                {
                  key: 'libraries',
                  doc_count: 2,
                  total: {
                    values: {
                      '1.0': 19.049999999999997,
                      '5.0': 19.25,
                      '25.0': 20.25,
                      '50.0': 21.5,
                      '75.0': 22.75,
                      '95.0': 23.749999999999996,
                      '99.0': 23.95
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
                  doc_count: 2,
                  total: {
                    values: {
                      '1.0': 215.04999999999998,
                      '5.0': 215.25,
                      '25.0': 216.25,
                      '50.0': 217.5,
                      '75.0': 218.75,
                      '95.0': 219.75,
                      '99.0': 219.95000000000002
                    }
                  },
                  external: {
                    values: {
                      '1.0': 213.03,
                      '5.0': 213.15,
                      '25.0': 213.75,
                      '50.0': 214.5,
                      '75.0': 215.25,
                      '95.0': 215.85,
                      '99.0': 215.97
                    }
                  }
                }
              ]
            }
          },
          {
            key: '3.0.0',
            doc_count: 47,
            endpoints: {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: 'suggest',
                  doc_count: 16,
                  total: {
                    values: {
                      '1.0': 15.15,
                      '5.0': 15.75,
                      '25.0': 18,
                      '50.0': 19,
                      '75.0': 23.75,
                      '95.0': 32,
                      '99.0': 32
                    }
                  },
                  external: {
                    values: {
                      '1.0': 15.15,
                      '5.0': 15.75,
                      '25.0': 16,
                      '50.0': 17,
                      '75.0': 22.25,
                      '95.0': 30.25,
                      '99.0': 30.849999999999998
                    }
                  }
                },
                {
                  key: 'work',
                  doc_count: 16,
                  total: {
                    values: {
                      '1.0': 247.9,
                      '5.0': 263.5,
                      '25.0': 347,
                      '50.0': 400.5,
                      '75.0': 487.25,
                      '95.0': 575.25,
                      '99.0': 575.85
                    }
                  },
                  external: {
                    values: {
                      '1.0': 238.35,
                      '5.0': 255.75,
                      '25.0': 340.25,
                      '50.0': 394,
                      '75.0': 461.75,
                      '95.0': 545.25,
                      '99.0': 560.25
                    }
                  }
                },
                {
                  key: 'recommend',
                  doc_count: 13,
                  total: {
                    values: {
                      '1.0': 76.24,
                      '5.0': 77.19999999999999,
                      '25.0': 88,
                      '50.0': 214,
                      '75.0': 264,
                      '95.0': 408.39999999999964,
                      '99.0': 538.4799999999998
                    }
                  },
                  external: {
                    values: {
                      '1.0': 75.24,
                      '5.0': 76.2,
                      '25.0': 87,
                      '50.0': 210,
                      '75.0': 254,
                      '95.0': 404.59999999999957,
                      '99.0': 533.7199999999997
                    }
                  }
                },
                {
                  key: 'availability',
                  doc_count: 1,
                  total: {
                    values: {
                      '1.0': 2215,
                      '5.0': 2215,
                      '25.0': 2215,
                      '50.0': 2215,
                      '75.0': 2215,
                      '95.0': 2215,
                      '99.0': 2215
                    }
                  },
                  external: {
                    values: {
                      '1.0': 2212,
                      '5.0': 2212,
                      '25.0': 2212,
                      '50.0': 2212,
                      '75.0': 2212,
                      '95.0': 2212,
                      '99.0': 2212
                    }
                  }
                },
                {
                  key: 'search',
                  doc_count: 1,
                  total: {
                    values: {
                      '1.0': 614,
                      '5.0': 614,
                      '25.0': 614,
                      '50.0': 614,
                      '75.0': 614,
                      '95.0': 614,
                      '99.0': 614
                    }
                  },
                  external: {
                    values: {
                      '1.0': 564,
                      '5.0': 564,
                      '25.0': 564,
                      '50.0': 564,
                      '75.0': 564,
                      '95.0': 564,
                      '99.0': 564
                    }
                  }
                }
              ]
            }
          },
          {
            key: '1.0.0',
            doc_count: 3,
            endpoints: {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: 'recommend',
                  doc_count: 3,
                  total: {
                    values: {
                      '1.0': 9.06,
                      '5.0': 9.3,
                      '25.0': 10.5,
                      '50.0': 12,
                      '75.0': 23,
                      '95.0': 31.799999999999997,
                      '99.0': 33.56
                    }
                  },
                  external: {
                    values: {
                      '1.0': 8.04,
                      '5.0': 8.2,
                      '25.0': 9,
                      '50.0': 10,
                      '75.0': 21,
                      '95.0': 29.799999999999997,
                      '99.0': 31.56
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
      Date.now() < +new Date('2018-10-09'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
