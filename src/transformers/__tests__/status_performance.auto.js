// AUTOTEST GENERATOR: {"endpoint":"status","params":{"fields":["performance"],"before":"2018-07-11","after":"2018-07-04"}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'status';
const params = {
  fields: ['performance'],
  before: '2018-07-11',
  after: '2018-07-04'
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
        count: 145458,
        underlyingServices: {
          '1.0': 45,
          '5.0': 47,
          '25.0': 77,
          '50.0': 147,
          '75.0': 184,
          '95.0': 314,
          '99.0': 564
        },
        total: {
          '1.0': 45,
          '5.0': 48,
          '25.0': 77,
          '50.0': 152,
          '75.0': 189,
          '95.0': 319,
          '99.0': 569
        }
      },
      {
        endpoint: 'suggest',
        version: '3.0.0',
        count: 90357,
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
        count: 56170,
        underlyingServices: {
          '1.0': 90,
          '5.0': 122,
          '25.0': 243,
          '50.0': 392,
          '75.0': 656,
          '95.0': 2375,
          '99.0': 4988
        },
        total: {
          '1.0': 96,
          '5.0': 130,
          '25.0': 256,
          '50.0': 406,
          '75.0': 672,
          '95.0': 2484,
          '99.0': 5084
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
          '99.0': 1159
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
        count: 15110,
        underlyingServices: {
          '1.0': 7,
          '5.0': 8,
          '25.0': 10,
          '50.0': 13,
          '75.0': 27,
          '95.0': 47,
          '99.0': 69
        },
        total: {
          '1.0': 7,
          '5.0': 8,
          '25.0': 10,
          '50.0': 14,
          '75.0': 28,
          '95.0': 48,
          '99.0': 70
        }
      },
      {
        endpoint: 'search',
        version: '3.0.0',
        count: 14069,
        underlyingServices: {
          '1.0': 102,
          '5.0': 170,
          '25.0': 419,
          '50.0': 629,
          '75.0': 1103,
          '95.0': 3285,
          '99.0': 6513
        },
        total: {
          '1.0': 104,
          '5.0': 173,
          '25.0': 466,
          '50.0': 701,
          '75.0': 1240,
          '95.0': 3453,
          '99.0': 6729
        }
      },
      {
        endpoint: 'availability',
        version: '3.0.0',
        count: 11693,
        underlyingServices: {
          '1.0': 510,
          '5.0': 1106,
          '25.0': 1623,
          '50.0': 2026,
          '75.0': 2509,
          '95.0': 4138,
          '99.0': 6077
        },
        total: {
          '1.0': 511,
          '5.0': 1108,
          '25.0': 1624,
          '50.0': 2028,
          '75.0': 2511,
          '95.0': 4140,
          '99.0': 6078
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
        count: 128,
        underlyingServices: {
          '1.0': 1660,
          '5.0': 1829,
          '25.0': 2198,
          '50.0': 2522,
          '75.0': 2989,
          '95.0': 4600,
          '99.0': 6337
        },
        total: {
          '1.0': 1664,
          '5.0': 1831,
          '25.0': 2200,
          '50.0': 2525,
          '75.0': 2991,
          '95.0': 4602,
          '99.0': 6337
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
  '["https://elk-p01.dbc.dk:9100/prod_ux-*//_search",{"method":"POST","auth":{"pass":"XXXXX","user":"XXXXX"},"json":{"size":0,"query":{"bool":{"must":[{"match_all":{}},{"match_phrase":{"msg":{"query":"transformer-done"}}},{"match_phrase":{"app":{"query":"serviceprovider"}}},{"range":{"@timestamp":{"gte":1530662400000,"lte":1531267200000,"format":"epoch_millis"}}}],"filter":[],"should":[],"must_not":[]}},"aggs":{"version":{"terms":{"field":"version.keyword"},"aggs":{"endpoints":{"terms":{"field":"name.keyword"},"aggs":{"external":{"percentiles":{"field":"timings.external"}},"total":{"percentiles":{"field":"timings.total"}}}}}}}}}]': {
    took: 490,
    timed_out: false,
    _shards: {total: 387, successful: 387, skipped: 324, failed: 0},
    hits: {total: 385098, max_score: 0, hits: []},
    aggregations: {
      version: {
        doc_count_error_upper_bound: 0,
        sum_other_doc_count: 0,
        buckets: [
          {
            key: '3.0.0',
            doc_count: 317881,
            endpoints: {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: 'recommend',
                  doc_count: 145458,
                  total: {
                    values: {
                      '1.0': 45,
                      '5.0': 48,
                      '25.0': 77.47383409566146,
                      '50.0': 152.02620692384377,
                      '75.0': 189.1041639307099,
                      '95.0': 319.46649469500665,
                      '99.0': 568.7228355387515
                    }
                  },
                  external: {
                    values: {
                      '1.0': 45,
                      '5.0': 47,
                      '25.0': 76.69762382894501,
                      '50.0': 146.7564260971697,
                      '75.0': 183.63820007475135,
                      '95.0': 314.223815128582,
                      '99.0': 563.9722748538003
                    }
                  }
                },
                {
                  key: 'suggest',
                  doc_count: 90357,
                  total: {
                    values: {
                      '1.0': 13,
                      '5.0': 14,
                      '25.0': 16,
                      '50.0': 19.663341645885286,
                      '75.0': 26.999999999999996,
                      '95.0': 36,
                      '99.0': 54
                    }
                  },
                  external: {
                    values: {
                      '1.0': 12,
                      '5.0': 13,
                      '25.0': 14.999999999999998,
                      '50.0': 17,
                      '75.0': 24,
                      '95.0': 32,
                      '99.0': 51
                    }
                  }
                },
                {
                  key: 'work',
                  doc_count: 56170,
                  total: {
                    values: {
                      '1.0': 96,
                      '5.0': 129.72961562696918,
                      '25.0': 256.05686929345217,
                      '50.0': 405.9749499938265,
                      '75.0': 672.0868115188769,
                      '95.0': 2484.11714285714,
                      '99.0': 5083.5057575757455
                    }
                  },
                  external: {
                    values: {
                      '1.0': 90,
                      '5.0': 122.22129629629632,
                      '25.0': 242.74825599887862,
                      '50.0': 391.93021537442576,
                      '75.0': 655.807678132678,
                      '95.0': 2375.1596666666646,
                      '99.0': 4987.692681159416
                    }
                  }
                },
                {
                  key: 'search',
                  doc_count: 14069,
                  total: {
                    values: {
                      '1.0': 104.33714285714287,
                      '5.0': 172.67700000000002,
                      '25.0': 465.6108747044917,
                      '50.0': 701.2401732786138,
                      '75.0': 1240.3546701542016,
                      '95.0': 3452.5966386554574,
                      '99.0': 6729.448888888886
                    }
                  },
                  external: {
                    values: {
                      '1.0': 102,
                      '5.0': 170.37342657342663,
                      '25.0': 419.3302172481896,
                      '50.0': 628.9679906150495,
                      '75.0': 1102.7111375818938,
                      '95.0': 3284.593650793645,
                      '99.0': 6512.934999999999
                    }
                  }
                },
                {
                  key: 'availability',
                  doc_count: 11693,
                  total: {
                    values: {
                      '1.0': 510.6453333333333,
                      '5.0': 1107.562962962963,
                      '25.0': 1624.1693438914026,
                      '50.0': 2028.3022763753102,
                      '75.0': 2510.7120940519153,
                      '95.0': 4139.613675213674,
                      '99.0': 6077.778666666667
                    }
                  },
                  external: {
                    values: {
                      '1.0': 510.368,
                      '5.0': 1106.0133333333335,
                      '25.0': 1622.8704621296392,
                      '50.0': 2026.4074153757888,
                      '75.0': 2508.97112734878,
                      '95.0': 4138.283928571427,
                      '99.0': 6076.589333333333
                    }
                  }
                },
                {
                  key: 'order',
                  doc_count: 128,
                  total: {
                    values: {
                      '1.0': 1663.7,
                      '5.0': 1831.3,
                      '25.0': 2199.75,
                      '50.0': 2525,
                      '75.0': 2991,
                      '95.0': 4601.8499999999985,
                      '99.0': 6337.110000000002
                    }
                  },
                  external: {
                    values: {
                      '1.0': 1659.8899999999999,
                      '5.0': 1829.3000000000002,
                      '25.0': 2197.75,
                      '50.0': 2521.5,
                      '75.0': 2989,
                      '95.0': 4600.499999999999,
                      '99.0': 6336.570000000003
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
                      '5.0': 115,
                      '25.0': 208.89269312474977,
                      '50.0': 292.81599501188646,
                      '75.0': 410.2303062812007,
                      '95.0': 729.8665013774099,
                      '99.0': 1163.738461538461
                    }
                  },
                  external: {
                    values: {
                      '1.0': 74,
                      '5.0': 112.9499533146592,
                      '25.0': 207.00887024259274,
                      '50.0': 290.7676184918087,
                      '75.0': 408.1229222619774,
                      '95.0': 727.0748251748247,
                      '99.0': 1158.8693650793648
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
            doc_count: 15329,
            endpoints: {
              doc_count_error_upper_bound: 0,
              sum_other_doc_count: 0,
              buckets: [
                {
                  key: 'recommend',
                  doc_count: 15110,
                  total: {
                    values: {
                      '1.0': 7,
                      '5.0': 8,
                      '25.0': 10,
                      '50.0': 14,
                      '75.0': 27.569620253164555,
                      '95.0': 48,
                      '99.0': 70
                    }
                  },
                  external: {
                    values: {
                      '1.0': 7,
                      '5.0': 8,
                      '25.0': 10,
                      '50.0': 13,
                      '75.0': 27,
                      '95.0': 46.99999999999999,
                      '99.0': 69
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
      Date.now() < +new Date('2018-10-09'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
