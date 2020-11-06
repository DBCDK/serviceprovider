// AUTOTEST GENERATOR: {"endpoint":"recommend","params":{"like":["870970-basis:51861213"],"filters":{"authorFlood":1},"boosters":{"loanCount":0}}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = "recommend";
const params = {"like":["870970-basis:51861213"],"filters":{"authorFlood":1},"boosters":{"loanCount":0}};

const expected = {"statusCode":200,"data":[{"pid":"870970-basis:51804007","val":0.1525635974390807,"from":["work:1454595"]},{"pid":"870970-basis:48364349","val":43,"from":["work:1454595"]},{"pid":"870970-basis:45404420","val":63,"from":["work:1454595"]},{"pid":"870970-basis:52028442","val":45,"from":["work:1454595"]},{"pid":"870970-basis:51764560","val":0.15106813773979227,"from":["work:1454595"]},{"pid":"870970-basis:51748557","val":0.14801999700615392,"from":["work:1454595"]},{"pid":"870970-basis:54091370","val":41,"from":["work:1454595"]},{"pid":"870970-basis:51642899","val":34,"from":["work:1454595"]},{"pid":"870970-basis:48047491","val":33,"from":["work:1454595"]},{"pid":"870970-basis:46486927","val":33,"from":["work:1454595"]}]};

const context = {"services":{"ddbcmsapi":"https://cmscontent.dbc.dk/","moreinfo":"https://moreinfo.addi.dk/2.11/","openagency":"https://openagency.addi.dk/2.34/","openholdingstatus":"https://openholdingstatus.addi.dk/3.0/","PRODopenorder":"https://openorder.addi.dk/3.0","openorder":"https://openorder.addi.dk/3.0","opensearch":"https://opensearch.addi.dk/b3.5_5.2/","openuserstatus":"https://openuserstatus.addi.dk/2.0/","suggest":"http://ortograf-service-1-0.mi-prod.svc.cloud.dbc.dk/ortograf/","recommend":"http://booklens-190101-1-0.mi-prod.svc.cloud.dbc.dk/","performance":"https://elk.dbc.dk:9100/k8s-frontend-prod-*/","communityservice":"http://localhost:4010/v1","cicero":"https://cicero-fbs.com/rest/external/v1/","openformat":"http://openformat-php-master.frontend-prod.svc.cloud.dbc.dk/server.php","holdingsitems":"http://holdings-items-content-service.cisterne.svc.cloud.dbc.dk/holdings-items-content-service/api","infomediaservice":"http://infomedia.mcp1-proxy.dbc.dk/server.php"},"infomedia":{"userId":"XXXXX","libraryCode":"XXXXX"},"cicero":{"DK-710100":"XXXXX"},"performance":{"username":"XXXXX","password":"XXXXX"},"communityservice":{"id":1},"search":{"agency":"775100","profile":"opac","collectionidentifiers":""},"storage":{"user":"XXXXX"},"netpunkt":{"user":"XXXXX","group":"XXXXX","password":"XXXXX"},"user":{"id":"XXXXX","salt":"XXXXX","pin":"XXXXX","libraryId":"790900","agency":"790900","isil":"DK-790900"},"app":{"clientId":"XXXXX","ddbcmsapipassword":"XXXXX","orderpolicyrequester":"190101","orderSystem":"bibliotekdk","ips":{"0":"XXXXX"},"access_token":"XXXXX"}};
const mockData = {"[\"http://booklens-190101-1-0.mi-prod.svc.cloud.dbc.dk/\",{\"method\":\"post\",\"json\":{\"like\":[\"870970-basis:51861213\"]}}]":{"responseHeader":{"build":"HEAD","git":"HEAD","version":"1.0.0","ab-id":1,"recommender":"190101","timings":{"read-from-db":92.57,"filter-candidates":2.738,"recommend":96.579},"time":97.614},"response":[{"pid":"870970-basis:51804007","work":"work:1453511","value":0.1525635974390807,"seed":"work:1454595","reader":"_190101_loans_norm"},{"pid":"870970-basis:48364349","work":"work:32529300","value":43,"seed":"work:1454595","reader":"_190101_metacompass"},{"pid":"870970-basis:45404420","work":"work:1387881","value":63,"seed":"work:1454595","reader":"_190101_search_clicks"},{"pid":"870970-basis:52028442","work":"work:881768","value":45,"seed":"work:1454595","reader":"_190101_search_clicks"},{"pid":"870970-basis:51764560","work":"work:1449360","value":0.15106813773979227,"seed":"work:1454595","reader":"_190101_loans_norm"},{"pid":"870970-basis:51748557","work":"work:1449975","value":0.14801999700615392,"seed":"work:1454595","reader":"_190101_loans_norm"},{"pid":"870970-basis:54091370","work":"work:26888147","value":41,"seed":"work:1454595","reader":"_190101_metacompass"},{"pid":"870970-basis:51642899","work":"work:1476685","value":34,"seed":"work:1454595","reader":"_190101_search_clicks"},{"pid":"870970-basis:48047491","work":"work:27204416","value":33,"seed":"work:1454595","reader":"_190101_metacompass"},{"pid":"870970-basis:46486927","work":"work:24629843","value":33,"seed":"work:1454595","reader":"_190101_metacompass"}]}};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: recommend_ignore_filters_and_boosters.auto', () => {
  it('has same result as recorded (in recommend_ignore_filters_and_boosters.auto)', () => {
    assert(Date.now() < +new Date('2021-02-04'), 'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.');
    context.mockData = mockData;
    return provider.execute(endpoint, params, context)
      .then(result => {
        assert.deepEqual(result, expected);
      })
  });
});
