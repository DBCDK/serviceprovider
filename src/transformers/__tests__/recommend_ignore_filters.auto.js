// AUTOTEST GENERATOR: {"endpoint":"recommend","params":{"like":["870970-basis:51861213"],"agencies":[190101],"filters":{"authorFlood":1}}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = "recommend";
const params = {"like":["870970-basis:51861213"],"agencies":[190101],"filters":{"authorFlood":1}};

const expected = {"statusCode":200,"data":[{"pid":"870970-basis:51738179","val":39.431684502043424,"from":["work:1454595"]},{"pid":"870970-basis:51098285","val":9,"from":["work:1454595"]},{"pid":"870970-basis:26395704","val":9,"from":["work:1454595"]},{"pid":"870970-basis:52028442","val":40,"from":["work:1454595"]},{"pid":"870970-basis:50957802","val":38.732140800544066,"from":["work:1454595"]},{"pid":"870970-basis:50984508","val":36.6705490149267,"from":["work:1454595"]},{"pid":"870970-basis:54175086","val":8,"from":["work:1454595"]},{"pid":"870970-basis:51642899","val":33,"from":["work:1454595"]},{"pid":"870970-basis:47387906","val":8,"from":["work:1454595"]},{"pid":"870970-basis:52144310","val":29.464251465550344,"from":["work:1454595"]}]};

const context = {"services":{"ddbcmsapi":"https://cmscontent.dbc.dk/","moreinfo":"https://moreinfo.addi.dk/2.11/","openagency":"http://vipcore.iscrum-vip-prod.svc.cloud.dbc.dk:8080/1.0/api","openholdingstatus":"https://openholdingstatus.addi.dk/3.1/","PRODopenorder":"https://openorder.addi.dk/3.0","openorder":"https://openorder.addi.dk/test_3.0","opensearch":"https://opensearch.addi.dk/b3.5_5.2/","openuserstatus":"https://openuserstatus.addi.dk/2.0/","suggest":"http://ortograf-service-1-0.mi-prod.svc.cloud.dbc.dk/ortograf/","recommend":"http://booklens-1-1.mi-prod.svc.cloud.dbc.dk/","performance":"https://elk.dbc.dk:9100/k8s-frontend-prod-*/","cicero":"https://cicero-fbs.com/rest/external/v1/","openformat":"http://openformat-php-master.frontend-prod.svc.cloud.dbc.dk/server.php","holdingsitems":"http://holdings-items-content-service.cisterne.svc.cloud.dbc.dk/holdings-items-content-service/api","infomediaservice":"http://infomedia.mcp1-proxy.dbc.dk/server.php","workpresentation":"http://work-presentation-service.cisterne.svc.cloud.dbc.dk/api/work-presentation"},"access":{"0":"moreinfo"},"cicero":{"DK-710100":"XXXXX"},"performance":{"username":"XXXXX","password":"XXXXX"},"search":{"agency":"775100","profile":"opac","collectionidentifiers":""},"storage":{"user":"XXXXX"},"netpunkt":{"user":"XXXXX","group":"XXXXX","password":"XXXXX"},"user":{"id":"XXXXX","salt":"XXXXX","pin":"XXXXX","libraryId":"710100","agency":"710100","isil":"DK-710100"},"app":{"clientId":"XclientIdX","ddbcmsapipassword":"XXXXX","orderpolicyrequester":"190101","orderSystem":"bibliotekdk","ips":{"0":"XXXXX"},"access_token":"XXXXX"}};
const mockData = {"[\"http://booklens-1-1.mi-prod.svc.cloud.dbc.dk/\",{\"method\":\"post\",\"json\":{\"like\":[\"870970-basis:51861213\"],\"agencies\":[190101]}}]":{"responseHeader":{"build":"52","git":"86919a1cf4430379bf19484451f5c920bf60d4c8","version":"1.1.0","ab-id":1,"recommender":"booklens","timings":{"read-from-db":6.195,"fetch-metadata":92.982,"filter-candidates":9.022,"recommend":111.06},"active-connections":0,"time":111.456},"response":[{"pid":"870970-basis:51738179","work":"work:1453511","value":39.431684502043424,"based-on":"work:1454595","reader":"_booklens_loans_norm"},{"pid":"870970-basis:51098285","work":"work:1437730","value":9,"based-on":"work:1454595","reader":"_booklens_metacompass"},{"pid":"870970-basis:26395704","work":"work:856141","value":9,"based-on":"work:1454595","reader":"_booklens_metacompass"},{"pid":"870970-basis:52028442","work":"work:881768","value":40,"based-on":"work:1454595","reader":"_booklens_search_clicks"},{"pid":"870970-basis:50957802","work":"work:1449360","value":38.732140800544066,"based-on":"work:1454595","reader":"_booklens_loans_norm"},{"pid":"870970-basis:50984508","work":"work:1449975","value":36.6705490149267,"based-on":"work:1454595","reader":"_booklens_loans_norm"},{"pid":"870970-basis:54175086","work":"work:27593310","value":8,"based-on":"work:1454595","reader":"_booklens_metacompass"},{"pid":"870970-basis:51642899","work":"work:1476685","value":33,"based-on":"work:1454595","reader":"_booklens_search_clicks"},{"pid":"870970-basis:47387906","work":"work:35482043","value":8,"based-on":"work:1454595","reader":"_booklens_metacompass"},{"pid":"870970-basis:52144310","work":"work:4420729","value":29.464251465550344,"based-on":"work:1454595","reader":"_booklens_loans_norm"}]}};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: recommend_ignore_filters.auto', () => {
  it('has same result as recorded (in recommend_ignore_filters.auto)', () => {
    assert(Date.now() < +new Date('2022-01-05'), 'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.');
    context.mockData = mockData;
    return provider.execute(endpoint, params, context)
      .then(result => {
        assert.deepEqual(result, expected);
      })
  });
});
