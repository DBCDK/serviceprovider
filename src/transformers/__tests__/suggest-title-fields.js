/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
// Request: suggest {"q":"herlev","type":"title","limit":3,"fields":["term","pid"]}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

let context = {"services":{"ddbcmsapi":"http://rest.filmstriben.dbc.inlead.dk/web/","moreinfo":"http://moreinfo.addi.dk/2.6/","openagency":"http://openagency.addi.dk/2.24/","openholdingstatus":"https://openholdingstatus.addi.dk/2.2/","openorder":"https://openorder.addi.dk/2.7.1/","TESTopenorder":"https://openorder.addi.dk/test_2.7.1/","opensearch":"http://opensearch.addi.dk/b3.0_4.2/","openuserstatus":"https://openuserstatus.addi.dk/1.4.1/","rank":"https://xptest.dbc.dk/ms/rank/v1","suggestpopular":"http://xptest.dbc.dk/ms/entity-pop/v1","suggestcreator":"http://xptest.dbc.dk/ms/entity-suggest/v1/creator","suggestlibrary":"http://xptest.dbc.dk/ms/entity-suggest/v1/library","suggestsubject":"http://xptest.dbc.dk/ms/entity-suggest/v1/subject","recommendurls":{"default":"https://xptest.dbc.dk/ms/recommend-cosim/v1","popular":"https://xptest.dbc.dk/ms/recommend-pop/v1"}},"search":{"agency":"775100","profile":"opac","collectionidentifiers":"rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog"},"netpunkt":{"user":"XXXXX","group":"XXXXX","password":"XXXXX"},"user":{"agency":"100451","id":"XXXXX","pin":"XXXXX","salt":"XXXXX"},"app":{"clientid":"XXXXX","ddbcmsapipassword":"XXXXX","orderpolicyrequester":"190101"}};
let provider = Provider();
let mockData = {"[\"suggestpopular\",{\"qs\":{\"query\":\"{!complexphrase inOrder=true}display.title:herlev*\",\"fields\":\"display.title,fedoraPid,display.creator,display.workType\",\"filter\":\"rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog\",\"rows\":3}}]":"{\"responseHeader\": {\"args\": {\"fq\": \"work.isPrimaryObject:true AND rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog\", \"rows\": 3, \"group\": \"true\", \"start\": 0, \"group.field\": \"fedoraPid\", \"group.main\": \"true\", \"fl\": \"display.title fedoraPid display.creator display.workType\"}, \"svn-revision\": \"97052\", \"ab-id\": \"1\", \"qtime\": 2, \"q\": \"{!complexphrase inOrder=true}display.title:herlev*\", \"version\": \"0.1.0\", \"stime\": 7, \"qf\": [\"inOrder=true}display.title\"], \"build\": \"283\", \"modified_q\": \"{!boost b=loan.count}{!complexphrase inOrder=true}display.title:herlev*\"}, \"response\": {\"start\": 0, \"numFound\": 228, \"docs\": [{\"fedoraPid\": \"870970-basis:22591304\", \"display.creator\": [\"Lise Reinau\"], \"display.title\": [\"Herlev tur/retur\"], \"display.workType\": [\"music\"]}, {\"fedoraPid\": \"870970-basis:21085839\", \"display.creator\": [\"Hans-Henrik Thomsen (f. 1949)\"], \"display.title\": [\"Herlev-Ruterne\"], \"display.workType\": [\"book\"]}, {\"fedoraPid\": \"870970-basis:06131484\", \"display.creator\": [\"Olaf Hansen (f. 1913)\"], \"display.title\": [\"Herlev kommune 75 \\u00e5r\"], \"display.workType\": [\"book\"]}]}}"};

describe('Automated test: suggest-title-fields', () => {
  it('expected response. ID:42wf3p, for {"q":"herlev","type":"title","limit":3,"fields":["term","pid"]}', (done) => {
    context.mockData = mockData;
    provider.execute('suggest', {"q":"herlev","type":"title","limit":3,"fields":["term","pid"]}, context)
      .then(result => {
        assert.deepEqual(result,
            {"statusCode":200,"data":[{"term":"Herlev tur/retur","pid":"870970-basis:22591304","creator":"Lise Reinau","type":"music"},{"term":"Herlev-Ruterne","pid":"870970-basis:21085839","creator":"Hans-Henrik Thomsen (f. 1949)","type":"book"},{"term":"Herlev kommune 75 år","pid":"870970-basis:06131484","creator":"Olaf Hansen (f. 1913)","type":"book"}]});
        done();
      })
      .catch(result => {
        fail({throw: result}, {"statusCode":200,"data":[{"term":"Herlev tur/retur","pid":"870970-basis:22591304","creator":"Lise Reinau","type":"music"},{"term":"Herlev-Ruterne","pid":"870970-basis:21085839","creator":"Hans-Henrik Thomsen (f. 1949)","type":"book"},{"term":"Herlev kommune 75 år","pid":"870970-basis:06131484","creator":"Olaf Hansen (f. 1913)","type":"book"}]});
        done();
      });
  });
});
