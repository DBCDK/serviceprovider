// AUTOTEST GENERATOR: {"endpoint":"status","params":{"fields":["performance"],"before":"2018-07-11 00:00:00","after":"2018-07-04 00:00:00"}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'status';
const params = {
  fields: ['performance'],
  before: '2018-07-11 00:00:00',
  after: '2018-07-04 00:00:00'
};

const expected = {
  statusCode: 200,
  data: {
    version: '3.0.0',
    endOfServiceDate: '0000-00-00T00:00:00Z',
    performance: [
      {
        endpoint: 'recommend',
        version: '3.0.0',
        count: 146203,
        underlyingServices: {
          '1.0': 45,
          '5.0': 47,
          '25.0': 76,
          '50.0': 146,
          '75.0': 183,
          '95.0': 313,
          '99.0': 563
        },
        total: {
          '1.0': 45,
          '5.0': 48,
          '25.0': 77,
          '50.0': 152,
          '75.0': 189,
          '95.0': 318,
          '99.0': 568
        }
      },
      {
        endpoint: 'suggest',
        version: '3.0.0',
        count: 90471,
        underlyingServices: {
          '1.0': 12,
          '5.0': 13,
          '25.0': 15,
          '50.0': 17,
          '75.0': 24,
          '95.0': 32,
          '99.0': 51
        },
        total: {
          '1.0': 13,
          '5.0': 14,
          '25.0': 16,
          '50.0': 20,
          '75.0': 27,
          '95.0': 36,
          '99.0': 54
        }
      },
      {
        endpoint: 'work',
        version: '3.0.0',
        count: 56215,
        underlyingServices: {
          '1.0': 90,
          '5.0': 122,
          '25.0': 243,
          '50.0': 392,
          '75.0': 656,
          '95.0': 2374,
          '99.0': 4987
        },
        total: {
          '1.0': 96,
          '5.0': 130,
          '25.0': 256,
          '50.0': 406,
          '75.0': 672,
          '95.0': 2482,
          '99.0': 5076
        }
      },
      {
        endpoint: 'work',
        version: '2.0.0',
        count: 50823,
        underlyingServices: {
          '1.0': 74,
          '5.0': 113,
          '25.0': 207,
          '50.0': 291,
          '75.0': 408,
          '95.0': 727,
          '99.0': 1160
        },
        total: {
          '1.0': 76,
          '5.0': 115,
          '25.0': 209,
          '50.0': 293,
          '75.0': 410,
          '95.0': 730,
          '99.0': 1164
        }
      },
      {
        endpoint: 'recommend',
        version: '1.0.0',
        count: 15354,
        underlyingServices: {
          '1.0': 7,
          '5.0': 8,
          '25.0': 10,
          '50.0': 13,
          '75.0': 27,
          '95.0': 48,
          '99.0': 70
        },
        total: {
          '1.0': 7,
          '5.0': 8,
          '25.0': 10,
          '50.0': 14,
          '75.0': 28,
          '95.0': 49,
          '99.0': 71
        }
      },
      {
        endpoint: 'search',
        version: '3.0.0',
        count: 14081,
        underlyingServices: {
          '1.0': 102,
          '5.0': 171,
          '25.0': 420,
          '50.0': 629,
          '75.0': 1103,
          '95.0': 3276,
          '99.0': 6512
        },
        total: {
          '1.0': 104,
          '5.0': 173,
          '25.0': 466,
          '50.0': 701,
          '75.0': 1241,
          '95.0': 3448,
          '99.0': 6729
        }
      },
      {
        endpoint: 'availability',
        version: '3.0.0',
        count: 11704,
        underlyingServices: {
          '1.0': 510,
          '5.0': 1106,
          '25.0': 1622,
          '50.0': 2026,
          '75.0': 2509,
          '95.0': 4137,
          '99.0': 6076
        },
        total: {
          '1.0': 511,
          '5.0': 1107,
          '25.0': 1623,
          '50.0': 2028,
          '75.0': 2510,
          '95.0': 4137,
          '99.0': 6077
        }
      },
      {
        endpoint: 'user',
        version: '2.0.0',
        count: 425,
        underlyingServices: {
          '1.0': 178,
          '5.0': 190,
          '25.0': 215,
          '50.0': 265,
          '75.0': 333,
          '95.0': 661,
          '99.0': 1630
        },
        total: {
          '1.0': 180,
          '5.0': 193,
          '25.0': 218,
          '50.0': 269,
          '75.0': 340,
          '95.0': 664,
          '99.0': 1638
        }
      },
      {
        endpoint: 'libraries',
        version: '2.0.0',
        count: 391,
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
          '5.0': 20,
          '25.0': 26,
          '50.0': 30,
          '75.0': 33,
          '95.0': 40,
          '99.0': 46
        }
      },
      {
        endpoint: 'search',
        version: '2.0.0',
        count: 181,
        underlyingServices: {
          '1.0': 134,
          '5.0': 291,
          '25.0': 724,
          '50.0': 966,
          '75.0': 1255,
          '95.0': 1967,
          '99.0': 2590
        },
        total: {
          '1.0': 138,
          '5.0': 326,
          '25.0': 798,
          '50.0': 1075,
          '75.0': 1407,
          '95.0': 2098,
          '99.0': 2748
        }
      },
      {
        endpoint: 'order',
        version: '3.0.0',
        count: 129,
        underlyingServices: {
          '1.0': 1660,
          '5.0': 1833,
          '25.0': 2205,
          '50.0': 2532,
          '75.0': 2988,
          '95.0': 4594,
          '99.0': 6329
        },
        total: {
          '1.0': 1664,
          '5.0': 1835,
          '25.0': 2207,
          '50.0': 2534,
          '75.0': 2990,
          '95.0': 4595,
          '99.0': 6330
        }
      },
      {
        endpoint: 'search',
        version: '1.0.0',
        count: 111,
        underlyingServices: {
          '1.0': 131,
          '5.0': 222,
          '25.0': 480,
          '50.0': 599,
          '75.0': 757,
          '95.0': 1246,
          '99.0': 1540
        },
        total: {
          '1.0': 132,
          '5.0': 231,
          '25.0': 490,
          '50.0': 612,
          '75.0': 762,
          '95.0': 1319,
          '99.0': 1617
        }
      },
      {
        endpoint: 'work',
        version: '1.0.0',
        count: 108,
        underlyingServices: {
          '1.0': 130,
          '5.0': 250,
          '25.0': 484,
          '50.0': 606,
          '75.0': 762,
          '95.0': 1257,
          '99.0': 1541
        },
        total: {
          '1.0': 131,
          '5.0': 253,
          '25.0': 490,
          '50.0': 613,
          '75.0': 765,
          '95.0': 1320,
          '99.0': 1619
        }
      },
      {
        endpoint: 'availability',
        version: '2.0.0',
        count: 68,
        underlyingServices: {
          '1.0': 347,
          '5.0': 809,
          '25.0': 1596,
          '50.0': 1838,
          '75.0': 2399,
          '95.0': 6238,
          '99.0': 9492
        },
        total: {
          '1.0': 348,
          '5.0': 810,
          '25.0': 1597,
          '50.0': 1839,
          '75.0': 2401,
          '95.0': 6238,
          '99.0': 9493
        }
      },
      {
        endpoint: 'libraries',
        version: '3.0.0',
        count: 3,
        underlyingServices: {
          '1.0': 0,
          '5.0': 0,
          '25.0': 0,
          '50.0': 0,
          '75.0': 2224,
          '95.0': 4002,
          '99.0': 4358
        },
        total: {
          '1.0': 5097,
          '5.0': 5149,
          '25.0': 5407,
          '50.0': 5730,
          '75.0': 8100,
          '95.0': 9995,
          '99.0': 10374
        }
      },
      {
        endpoint: 'library',
        version: '3.0.0',
        count: 2,
        underlyingServices: {
          '1.0': 33,
          '5.0': 36,
          '25.0': 50,
          '50.0': 69,
          '75.0': 87,
          '95.0': 101,
          '99.0': 104
        },
        total: {
          '1.0': 34,
          '5.0': 37,
          '25.0': 53,
          '50.0': 72,
          '75.0': 92,
          '95.0': 107,
          '99.0': 110
        }
      },
      {
        endpoint: 'events',
        version: '3.0.0',
        count: 1,
        underlyingServices: {
          '1.0': 159,
          '5.0': 159,
          '25.0': 159,
          '50.0': 159,
          '75.0': 159,
          '95.0': 159,
          '99.0': 159
        },
        total: {
          '1.0': 335,
          '5.0': 335,
          '25.0': 335,
          '50.0': 335,
          '75.0': 335,
          '95.0': 335,
          '99.0': 335
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
    suggestpopular: 'XXXXX',
    suggestcreator: 'XXXXX',
    suggestlibrary: 'XXXXX',
    suggestsubject: 'XXXXX',
    performance: 'https://elk-p01.dbc.dk:9100/prod_ux-*/',
    recommendurls: 'XXXXX',
    cicero: 'https://cicero-fbs.com/rest/external/v1/'
  },
  cicero: {'DK-725300': {username: 'XXXXX', password: 'XXXXX'}},

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
  '["https://elk-p01.dbc.dk:9100/prod_ux-*/_search",{"method":"POST","auth":{"pass":"XXXXX","user":"XXXXX"},"json":{"size":0,"query":{"bool":{"must":[{"match_all":{}},{"match_phrase":{"msg":{"query":"transformer-done"}}},{"match_phrase":{"app":{"query":"serviceprovider"}}},{"range":{"@timestamp":{"gte":1530655200000,"lte":1531260000000,"format":"epoch_millis"}}}],"filter":[],"should":[],"must_not":[]}},"aggs":{"version":{"terms":{"field":"version.keyword"},"aggs":{"endpoints":{"terms":{"field":"name.keyword"},"aggs":{"external":{"percentiles":{"field":"timings.external"}},"total":{"percentiles":{"field":"timings.total"}}}}}}}}}]': {
    took: 960,
    timed_out: false,
    _shards: {total: 405, successful: 405, skipped: 333, failed: 0},
    hits: {total: 386270, max_score: 0, hits: []},
    aggregations: {
      version: {
        doc_count_error_upper_bound: 0,
        sum_other_doc_count: 0,
        buckets: [
          {
            key: '3.0.0',
            doc_count: 318809,
            endpoints: {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: 'recommend',
                  doc_count: 146203,
                  total: {
                    values: {
                      '1.0': 45,
                      '5.0': 48,
                      '25.0': 76.5435378704696,
                      '50.0': 151.95571517506002,
                      '75.0': 188.53430420721423,
                      '95.0': 318.4738488850329,
                      '99.0': 568.1583662714112
                    }
                  },
                  external: {
                    values: {
                      '1.0': 45,
                      '5.0': 47,
                      '25.0': 75.68477607610339,
                      '50.0': 146.26744924009742,
                      '75.0': 183,
                      '95.0': 313.1710474101921,
                      '99.0': 563.2454479716926
                    }
                  }
                },
                {
                  key: 'suggest',
                  doc_count: 90471,
                  total: {
                    values: {
                      '1.0': 13,
                      '5.0': 14,
                      '25.0': 16,
                      '50.0': 19.62811387900356,
                      '75.0': 27.000000000000004,
                      '95.0': 36,
                      '99.0': 54
                    }
                  },
                  external: {
                    values: {
                      '1.0': 12,
                      '5.0': 13,
                      '25.0': 15,
                      '50.0': 17,
                      '75.0': 24,
                      '95.0': 32,
                      '99.0': 51
                    }
                  }
                },
                {
                  key: 'work',
                  doc_count: 56215,
                  total: {
                    values: {
                      '1.0': 96,
                      '5.0': 129.75992129246066,
                      '25.0': 256.10261778729193,
                      '50.0': 405.83901551614116,
                      '75.0': 671.6598917467303,
                      '95.0': 2482.329304029301,
                      '99.0': 5075.62411764706
                    }
                  },
                  external: {
                    values: {
                      '1.0': 90,
                      '5.0': 122.2736603773585,
                      '25.0': 242.7355420059722,
                      '50.0': 391.8709758398247,
                      '75.0': 655.6741165810934,
                      '95.0': 2373.7199806201525,
                      '99.0': 4986.631575091578
                    }
                  }
                },
                {
                  key: 'search',
                  doc_count: 14081,
                  total: {
                    values: {
                      '1.0': 104.10000000000001,
                      '5.0': 173.125,
                      '25.0': 465.91610942249235,
                      '50.0': 701.4493738819319,
                      '75.0': 1240.8376290376293,
                      '95.0': 3447.60625,
                      '99.0': 6728.822222222226
                    }
                  },
                  external: {
                    values: {
                      '1.0': 102,
                      '5.0': 170.70247933884298,
                      '25.0': 419.7143120279978,
                      '50.0': 629.1187839173676,
                      '75.0': 1102.730418943534,
                      '95.0': 3276.386809269162,
                      '99.0': 6512.225000000004
                    }
                  }
                },
                {
                  key: 'availability',
                  doc_count: 11704,
                  total: {
                    values: {
                      '1.0': 510.6826666666667,
                      '5.0': 1106.6546296296294,
                      '25.0': 1623.369966063348,
                      '50.0': 2027.635732323232,
                      '75.0': 2510.128989055299,
                      '95.0': 4137.006250000001,
                      '99.0': 6077.257999999996
                    }
                  },
                  external: {
                    values: {
                      '1.0': 510.41200000000003,
                      '5.0': 1105.942857142857,
                      '25.0': 1621.9345764033258,
                      '50.0': 2025.9823949074532,
                      '75.0': 2508.8789772727273,
                      '95.0': 4136.502261904762,
                      '99.0': 6076.053999999996
                    }
                  }
                },
                {
                  key: 'order',
                  doc_count: 129,
                  total: {
                    values: {
                      '1.0': 1663.8,
                      '5.0': 1835.2,
                      '25.0': 2207,
                      '50.0': 2534,
                      '75.0': 2990,
                      '95.0': 4595.4,
                      '99.0': 6330.039999999999
                    }
                  },
                  external: {
                    values: {
                      '1.0': 1659.96,
                      '5.0': 1833.2,
                      '25.0': 2205,
                      '50.0': 2532,
                      '75.0': 2988,
                      '95.0': 4593.999999999999,
                      '99.0': 6329.48
                    }
                  }
                },
                {
                  key: 'libraries',
                  doc_count: 3,
                  total: {
                    values: {
                      '1.0': 5096.92,
                      '5.0': 5148.6,
                      '25.0': 5407,
                      '50.0': 5730,
                      '75.0': 8099.5,
                      '95.0': 9995.099999999999,
                      '99.0': 10374.22
                    }
                  },
                  external: {
                    values: {
                      '1.0': 0,
                      '5.0': 0,
                      '25.0': 0,
                      '50.0': 0,
                      '75.0': 2223.5,
                      '95.0': 4002.2999999999997,
                      '99.0': 4358.0599999999995
                    }
                  }
                },
                {
                  key: 'library',
                  doc_count: 2,
                  total: {
                    values: {
                      '1.0': 33.78,
                      '5.0': 36.9,
                      '25.0': 52.5,
                      '50.0': 72,
                      '75.0': 91.5,
                      '95.0': 107.1,
                      '99.0': 110.22
                    }
                  },
                  external: {
                    values: {
                      '1.0': 32.73,
                      '5.0': 35.65,
                      '25.0': 50.25,
                      '50.0': 68.5,
                      '75.0': 86.75,
                      '95.0': 101.35,
                      '99.0': 104.27000000000001
                    }
                  }
                },
                {
                  key: 'events',
                  doc_count: 1,
                  total: {
                    values: {
                      '1.0': 335,
                      '5.0': 335,
                      '25.0': 335,
                      '50.0': 335,
                      '75.0': 335,
                      '95.0': 335,
                      '99.0': 335
                    }
                  },
                  external: {
                    values: {
                      '1.0': 159,
                      '5.0': 159,
                      '25.0': 159,
                      '50.0': 159,
                      '75.0': 159,
                      '95.0': 159,
                      '99.0': 159
                    }
                  }
                }
              ]
            }
          },
          {
            key: '2.0.0',
            doc_count: 51888,
            endpoints: {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: 'work',
                  doc_count: 50823,
                  total: {
                    values: {
                      '1.0': 76,
                      '5.0': 114.94066666666667,
                      '25.0': 208.8999804006405,
                      '50.0': 292.76964327602957,
                      '75.0': 410.26308665323836,
                      '95.0': 729.8936567164174,
                      '99.0': 1163.7646464646455
                    }
                  },
                  external: {
                    values: {
                      '1.0': 74,
                      '5.0': 112.96278388278388,
                      '25.0': 207.0027678294003,
                      '50.0': 290.7483888292159,
                      '75.0': 408.100142606127,
                      '95.0': 726.8963942307687,
                      '99.0': 1160.0069607843134
                    }
                  }
                },
                {
                  key: 'user',
                  doc_count: 425,
                  total: {
                    values: {
                      '1.0': 180.24,
                      '5.0': 193,
                      '25.0': 218.33333333333331,
                      '50.0': 269,
                      '75.0': 340,
                      '95.0': 663.7999999999995,
                      '99.0': 1637.6399999999999
                    }
                  },
                  external: {
                    values: {
                      '1.0': 178.24,
                      '5.0': 190,
                      '25.0': 215,
                      '50.0': 265,
                      '75.0': 333,
                      '95.0': 661.3999999999994,
                      '99.0': 1629.6
                    }
                  }
                },
                {
                  key: 'libraries',
                  doc_count: 391,
                  total: {
                    values: {
                      '1.0': 19,
                      '5.0': 20,
                      '25.0': 26,
                      '50.0': 30,
                      '75.0': 33,
                      '95.0': 40,
                      '99.0': 46.10000000000002
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
                  doc_count: 181,
                  total: {
                    values: {
                      '1.0': 138.2,
                      '5.0': 326,
                      '25.0': 798,
                      '50.0': 1075,
                      '75.0': 1407,
                      '95.0': 2098,
                      '99.0': 2748.399999999984
                    }
                  },
                  external: {
                    values: {
                      '1.0': 133.8,
                      '5.0': 291,
                      '25.0': 724,
                      '50.0': 966,
                      '75.0': 1255,
                      '95.0': 1967,
                      '99.0': 2590.199999999987
                    }
                  }
                },
                {
                  key: 'availability',
                  doc_count: 68,
                  total: {
                    values: {
                      '1.0': 348.32,
                      '5.0': 809.75,
                      '25.0': 1597,
                      '50.0': 1838.5,
                      '75.0': 2400.5,
                      '95.0': 6237.65,
                      '99.0': 9492.8
                    }
                  },
                  external: {
                    values: {
                      '1.0': 347.32,
                      '5.0': 809.4000000000001,
                      '25.0': 1595.75,
                      '50.0': 1837.5,
                      '75.0': 2399.25,
                      '95.0': 6237.65,
                      '99.0': 9492.47
                    }
                  }
                }
              ]
            }
          },
          {
            key: '1.0.0',
            doc_count: 15573,
            endpoints: {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: 'recommend',
                  doc_count: 15354,
                  total: {
                    values: {
                      '1.0': 7,
                      '5.0': 8,
                      '25.0': 10,
                      '50.0': 14.000000000000002,
                      '75.0': 28,
                      '95.0': 48.61190476190469,
                      '99.0': 71
                    }
                  },
                  external: {
                    values: {
                      '1.0': 7,
                      '5.0': 8,
                      '25.0': 10,
                      '50.0': 13,
                      '75.0': 27,
                      '95.0': 48,
                      '99.0': 70
                    }
                  }
                },
                {
                  key: 'search',
                  doc_count: 111,
                  total: {
                    values: {
                      '1.0': 132.2,
                      '5.0': 231,
                      '25.0': 489.5,
                      '50.0': 612,
                      '75.0': 762,
                      '95.0': 1318.5,
                      '99.0': 1616.8000000000004
                    }
                  },
                  external: {
                    values: {
                      '1.0': 130.8,
                      '5.0': 222,
                      '25.0': 480,
                      '50.0': 599,
                      '75.0': 757,
                      '95.0': 1246,
                      '99.0': 1539.9000000000003
                    }
                  }
                },
                {
                  key: 'work',
                  doc_count: 108,
                  total: {
                    values: {
                      '1.0': 130.94,
                      '5.0': 253.05,
                      '25.0': 490,
                      '50.0': 613,
                      '75.0': 765.25,
                      '95.0': 1320.35,
                      '99.0': 1618.5599999999993
                    }
                  },
                  external: {
                    values: {
                      '1.0': 129.66,
                      '5.0': 249.70000000000005,
                      '25.0': 483.75,
                      '50.0': 606,
                      '75.0': 762,
                      '95.0': 1257.0999999999995,
                      '99.0': 1541.4299999999996
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
      Date.now() < +new Date('2022-01-01'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
