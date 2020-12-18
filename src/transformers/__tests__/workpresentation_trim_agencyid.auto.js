// AUTOTEST GENERATOR: {"endpoint":"workpresentation","params":{"workId":"work-of:870970-basis:25775481","agencyId":"DK-775100","profile":"opac","includeRelations":false}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'workpresentation';
const params = {
  workId: 'work-of:870970-basis:25775481',
  agencyId: 'DK-775100',
  profile: 'opac',
  includeRelations: false
};

const expected = {
  statusCode: 200,
  data: {
    trackingId: '5dad7098-3550-4b65-b482-edd1e978846a',
    work: {
      creators: [{type: 'aut', value: 'Erlend Loe'}],
      description:
        'Doppler, som er en velfungerende borger, beslutter pludselig, at han må finde sig selv, opgiver job og ægteskab og flytter ud i skoven omkring Oslo for at finde sig selv, i selskab med en elgkalv og i pagt med naturen, mens han tænker over udviklingen i samfundet og hans eget ægteskab',
      fullTitle: 'Doppler : roman',
      records: [
        {id: '775100-katalog:25775481', types: ['Bog']},
        {id: '775100-katalog:26339340', types: ['Bog']},
        {id: '870970-basis:25775481', types: ['Bog']},
        {id: '870970-basis:26339340', types: ['Bog']},
        {id: '870970-basis:28281412', types: ['Bog']},
        {id: '870970-basis:28644957', types: ['Lydbog (net)']},
        {id: '870970-basis:50981223', types: ['Bog']},
        {id: '870970-basis:51883322', types: ['Ebog']}
      ],
      subjects: [
        {type: 'DBCO', value: 'ironi'},
        {type: 'DK5', value: 'sk'},
        {type: 'DBCS', value: 'ironi'},
        {type: 'DK5', value: 'fb'},
        {type: 'DBCO', value: 'samfundssatire'},
        {type: 'DBCS', value: 'samfundssatire'},
        {type: 'DBCS', value: 'midtvejskriser'},
        {type: 'DK5-Text', value: 'Skønlitteratur'},
        {type: 'DBCO', value: 'humor'},
        {type: 'genre', value: 'humor'},
        {type: 'genre', value: 'samfundssatire'},
        {type: 'DBCS', value: 'humor'},
        {type: 'DBCS', value: 'familien'},
        {type: 'not_specified', value: 'godtanmeldt'}
      ],
      title: 'Doppler',
      workId: 'work-of:870970-basis:25775481'
    }
  }
};

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.10/',
    openagency: 'http://vipcore.iscrum-vip-prod.svc.cloud.dbc.dk/1.0/api',
    openholdingstatus: 'https://openholdingstatus.addi.dk/3.1/',
    PRODopenorder: 'https://openorder.addi.dk/3.0',
    openorder: 'https://openorder.addi.dk/3.0',
    opensearch: 'https://opensearch.addi.dk/b3.5_5.2/',
    openuserstatus: 'https://openuserstatus.addi.dk/2.0/',
    suggest: 'http://ortograf-service-1-0.mi-prod.svc.cloud.dbc.dk/ortograf/',
    recommend: 'http://booklens-190101-1-0.mi-prod.svc.cloud.dbc.dk/',
    performance: 'https://elk.dbc.dk:9100/k8s-frontend-prod-*/',
    communityservice: 'http://localhost:4010/v1',
    cicero: 'https://cicero-fbs.com/rest/external/v1/',
    openformat:
      'http://openformat-php-master.frontend-prod.svc.cloud.dbc.dk/server.php',
    holdingsitems:
      'http://holdings-items-content-service.cisterne.svc.cloud.dbc.dk/holdings-items-content-service/api',
    infomediaservice: 'http://infomedia.mcp1-proxy.dbc.dk/server.php',
    workpresentation:
      'http://work-presentation-service.cisterne.svc.cloud.dbc.dk/api/work-presentation'
  },
  infomedia: {userId: 'XXXXX', libraryCode: 'XXXXX'},
  cicero: {'DK-710100': 'XXXXX'},
  performance: {username: 'XXXXX', password: 'XXXXX'},
  communityservice: {id: 1},
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
    orderSystem: 'bibliotekdk',
    ips: {'0': 'XXXXX'},
    access_token: 'XXXXX'
  }
};
const mockData = {
  '["http://work-presentation-service.cisterne.svc.cloud.dbc.dk/api/work-presentation",{"qs":{"workId":"work-of:870970-basis:25775481","agencyId":"775100","profile":"opac","includeRelations":false,"appId":"openplatform/v3/"}}]':
    '{"trackingId":"5dad7098-3550-4b65-b482-edd1e978846a","work":{"creators":[{"type":"aut","value":"Erlend Loe"}],"description":"Doppler, som er en velfungerende borger, beslutter pludselig, at han må finde sig selv, opgiver job og ægteskab og flytter ud i skoven omkring Oslo for at finde sig selv, i selskab med en elgkalv og i pagt med naturen, mens han tænker over udviklingen i samfundet og hans eget ægteskab","fullTitle":"Doppler : roman","records":[{"id":"775100-katalog:25775481","types":["Bog"]},{"id":"775100-katalog:26339340","types":["Bog"]},{"id":"870970-basis:25775481","types":["Bog"]},{"id":"870970-basis:26339340","types":["Bog"]},{"id":"870970-basis:28281412","types":["Bog"]},{"id":"870970-basis:28644957","types":["Lydbog (net)"]},{"id":"870970-basis:50981223","types":["Bog"]},{"id":"870970-basis:51883322","types":["Ebog"]}],"subjects":[{"type":"DBCO","value":"ironi"},{"type":"DK5","value":"sk"},{"type":"DBCS","value":"ironi"},{"type":"DK5","value":"fb"},{"type":"DBCO","value":"samfundssatire"},{"type":"DBCS","value":"samfundssatire"},{"type":"DBCS","value":"midtvejskriser"},{"type":"DK5-Text","value":"Skønlitteratur"},{"type":"DBCO","value":"humor"},{"type":"genre","value":"humor"},{"type":"genre","value":"samfundssatire"},{"type":"DBCS","value":"humor"},{"type":"DBCS","value":"familien"},{"type":"not_specified","value":"godtanmeldt"}],"title":"Doppler","workId":"work-of:870970-basis:25775481"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: workpresentation_trim_agencyid.auto', () => {
  it('has same result as recorded (in workpresentation_trim_agencyid.auto)', () => {
    assert(
      Date.now() < +new Date('2021-03-18'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
