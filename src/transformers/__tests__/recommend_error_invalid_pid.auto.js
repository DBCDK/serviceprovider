// AUTOTEST GENERATOR: {"endpoint":"recommend","params":{"like":["WAT!?"],"agencies":[190101]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'recommend';
const params = {'like': ['WAT!?'], 'agencies': [190101]};

const expected = {'statusCode': 200, 'data': []};

const context = {
  'services': {
    'ddbcmsapi': 'https://cmscontent.dbc.dk/',
    'moreinfo': 'https://moreinfo.addi.dk/2.11/',
    'openagency': 'http://vipcore.iscrum-vip-prod.svc.cloud.dbc.dk:8080/1.0/api',
    'openholdingstatus': 'https://openholdingstatus.addi.dk/3.1/',
    'PRODopenorder': 'https://openorder.addi.dk/3.0',
    'openorder': 'https://openorder.addi.dk/test_3.0',
    'opensearch': 'https://opensearch.addi.dk/b3.5_5.2/',
    'openuserstatus': 'https://openuserstatus.addi.dk/2.0/',
    'suggest': 'http://ortograf-service-1-0.mi-prod.svc.cloud.dbc.dk/ortograf/',
    'recommend': 'http://booklens-1-1.mi-prod.svc.cloud.dbc.dk/',
    'performance': 'https://elk.dbc.dk:9100/k8s-frontend-prod-*/',
    'cicero': 'https://cicero-fbs.com/rest/external/v1/',
    'openformat': 'http://openformat-php-master.frontend-prod.svc.cloud.dbc.dk/server.php',
    'holdingsitems': 'http://holdings-items-content-service.cisterne.svc.cloud.dbc.dk/holdings-items-content-service/api',
    'infomediaservice': 'http://infomedia.mcp1-proxy.dbc.dk/server.php',
    'workpresentation': 'http://work-presentation-service.cisterne.svc.cloud.dbc.dk/api/work-presentation'
  },
  'access': {'0': 'moreinfo'},
  'cicero': {'DK-710100': 'XXXXX'},
  'performance': {'username': 'XXXXX', 'password': 'XXXXX'},
  'search': {
    'agency': '775100',
    'profile': 'opac',
    'collectionidentifiers': ''
  },
  'storage': {'user': 'XXXXX'},
  'netpunkt': {'user': 'XXXXX', 'group': 'XXXXX', 'password': 'XXXXX'},
  'user': {
    'id': 'XXXXX',
    'salt': 'XXXXX',
    'pin': 'XXXXX',
    'libraryId': '710100',
    'agency': '710100',
    'isil': 'DK-710100'
  },
  'app': {
    'clientId': 'XclientIdX',
    'ddbcmsapipassword': 'XXXXX',
    'orderpolicyrequester': '190101',
    'orderSystem': 'bibliotekdk',
    'ips': {'0': 'XXXXX'},
    'access_token': 'XXXXX'
  }
};
const mockData = {
  '["http://booklens-1-1.mi-prod.svc.cloud.dbc.dk/",{"method":"post","json":{"like":["WAT!?"],"agencies":[190101]}}]': {
    'responseHeader': {
      'build': '52',
      'git': '86919a1cf4430379bf19484451f5c920bf60d4c8',
      'version': '1.1.0',
      'ab-id': 1,
      'recommender': 'booklens',
      'timings': {'recommend': 8.033},
      'warnings': ['Unknown pid: WAT!?'],
      'active-connections': 0,
      'time': 8.33
    }, 'response': []
  }
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

const provider = Provider();

describe('Automated test: recommend_error_invalid_pid.auto', () => {
  it('has same result as recorded (in recommend_error_invalid_pid.auto)',
    () => {
      assert(Date.now() < +new Date('2022-01-05'),
        'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.');
      context.mockData = mockData;
      return provider.execute(endpoint, params, context).then(result => {
        assert.deepEqual(result, expected);
      });
    });
});
