// AUTOTEST GENERATOR: {"endpoint":"workpresentation","params":{"workId":"work-of:870970-basis:51701763","agencyId":777900,"profile":"opac","includeRelations":true}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'workpresentation';
const params = {
  workId: 'work-of:870970-basis:51701763',
  agencyId: 777900,
  profile: 'opac',
  includeRelations: true
};

const expected = {
  statusCode: 200,
  data: {
    trackingId: 'ddc1e861-ee3c-494f-a99b-7eeda31ec7ad',
    work: {
      creators: [{type: 'aut', value: 'Mette E. Neerlin'}],
      description:
        'Honeys forældre er skilt, hendes storesøster er handicappet, og hun er selv født med læbeganespalte. Hun er forelsket i Philip fra klassen og kommer nogle gange til at lyve en lille bitte smule. Ud over at sørge for sin familie, besøger hun ofte sin døende ven, Marcel',
      fullTitle: 'Hest, hest, tiger, tiger',
      records: [
        {id: '870970-basis:51701763', relations: [0], types: ['Bog']},
        {id: '870970-basis:51796527', relations: [0], types: ['Ebog']},
        {
          id: '870970-basis:52988055',
          relations: [0],
          types: ['Lydbog (cd-mp3)']
        }
      ],
      relations: [
        {
          id: '870971-forfweb:36962909',
          type: 'creator-description',
          types: ['Artikel']
        }
      ],
      subjects: [
        {type: 'not_specified', value: 'døden'},
        {
          type: 'not_specified',
          value: 'Materialeudvalget anbefaler 7. klasse.'
        },
        {type: 'DBCS', value: 'forelskelse'},
        {type: 'DBCN', value: 'for 12 år'},
        {type: 'DBCS', value: 'skilsmisse'},
        {type: 'not_specified', value: 'Mellemtrin'},
        {type: 'DK5-Text', value: 'Skønlitteratur'},
        {type: 'not_specified', value: 'Familien'},
        {type: 'DBCS', value: 'familien'},
        {type: 'DBCS', value: 'døden'},
        {type: 'DBCN', value: 'mellemtrinudskoling'},
        {type: 'DBCN', value: 'for 11 år'},
        {type: 'not_specified', value: 'Roman'},
        {type: 'DBCN', value: 'for 13 år'},
        {type: 'dcterms:LCSH', value: 'Børnebøger'},
        {type: 'not_specified', value: 'Dansk'},
        {type: 'DK5', value: 'sk'},
        {type: 'not_specified', value: 'Humor'},
        {type: 'not_specified', value: 'Skilsmisse'},
        {type: 'not_specified', value: 'Kærlighed'},
        {type: 'DBCO', value: 'humor'},
        {type: 'genre', value: 'humor'},
        {type: 'not_specified', value: 'familie'},
        {type: 'DBCS', value: 'humor'},
        {type: 'not_specified', value: 'Forelskelse'}
      ],
      title: 'Hest, hest, tiger, tiger',
      workId: 'work-of:870970-basis:51701763'
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
  '["http://work-presentation-service.cisterne.svc.cloud.dbc.dk/api/work-presentation",{"qs":{"workId":"work-of:870970-basis:51701763","agencyId":"777900","profile":"opac","includeRelations":true,"appId":"openplatform/v3/"}}]':
    '{"trackingId":"ddc1e861-ee3c-494f-a99b-7eeda31ec7ad","work":{"creators":[{"type":"aut","value":"Mette E. Neerlin"}],"description":"Honeys forældre er skilt, hendes storesøster er handicappet, og hun er selv født med læbeganespalte. Hun er forelsket i Philip fra klassen og kommer nogle gange til at lyve en lille bitte smule. Ud over at sørge for sin familie, besøger hun ofte sin døende ven, Marcel","fullTitle":"Hest, hest, tiger, tiger","records":[{"id":"870970-basis:51701763","relations":[0],"types":["Bog"]},{"id":"870970-basis:51796527","relations":[0],"types":["Ebog"]},{"id":"870970-basis:52988055","relations":[0],"types":["Lydbog (cd-mp3)"]}],"relations":[{"id":"870971-forfweb:36962909","type":"creator-description","types":["Artikel"]}],"subjects":[{"type":"not_specified","value":"døden"},{"type":"not_specified","value":"Materialeudvalget anbefaler 7. klasse."},{"type":"DBCS","value":"forelskelse"},{"type":"DBCN","value":"for 12 år"},{"type":"DBCS","value":"skilsmisse"},{"type":"not_specified","value":"Mellemtrin"},{"type":"DK5-Text","value":"Skønlitteratur"},{"type":"not_specified","value":"Familien"},{"type":"DBCS","value":"familien"},{"type":"DBCS","value":"døden"},{"type":"DBCN","value":"mellemtrinudskoling"},{"type":"DBCN","value":"for 11 år"},{"type":"not_specified","value":"Roman"},{"type":"DBCN","value":"for 13 år"},{"type":"dcterms:LCSH","value":"Børnebøger"},{"type":"not_specified","value":"Dansk"},{"type":"DK5","value":"sk"},{"type":"not_specified","value":"Humor"},{"type":"not_specified","value":"Skilsmisse"},{"type":"not_specified","value":"Kærlighed"},{"type":"DBCO","value":"humor"},{"type":"genre","value":"humor"},{"type":"not_specified","value":"familie"},{"type":"DBCS","value":"humor"},{"type":"not_specified","value":"Forelskelse"}],"title":"Hest, hest, tiger, tiger","workId":"work-of:870970-basis:51701763"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: workpresentation_include_realtations.auto', () => {
  it('has same result as recorded (in workpresentation_include_realtations.auto)', () => {
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
