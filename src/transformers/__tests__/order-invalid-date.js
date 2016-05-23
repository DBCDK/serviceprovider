/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
// Request: order {"pretty":true,"pids":["870970-basis:28126727"],"expires":"2016-018-01","library":"DK-100451","phone":"123454","address":"ADDRESS","email":"EMAIL"}
'use strict';
import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

let provider = Provider();
let mockData = {};

describe('Automated test of the order endpoint', () => {
  it('expected response. ID:f2mgbk, for {"pretty":true,"pids":["870970-basis:28126727"],"expires":"2016-018-01","library":"DK-100451","phone":"123454","address":"ADDRESS","email":"EMAIL"}', (done) => {
    let context = {"app":{"collectionidentifiers":"rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog"},"opensearch":{"url":"http://opensearch.addi.dk/b3.0_4.2/","agency":"775100","profile":"opac"},"moreinfo":{"url":"http://moreinfo.addi.dk/2.1/","user":"XXXXX","group":"XXXXX","password":"XXXXX"},"entitysuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1","libraryType":"folkebibliotek"},"popsuggest":{"url":"http://xptest.dbc.dk/ms/entity-pop/v1"},"creatorsuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/creator"},"librarysuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/library","librarytype":"folkebibliotek"},"subjectsuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/subject"},"orderpolicy":{"url":"https://openorder.addi.dk/test_2.7.1/","servicerequester":"190101"},"userstatus":{"salt":"XXXXX","url":"https://openuserstatus.addi.dk/1.4.1/","userid":"XXXXX","userpin":"XXXXX","useragency":"DK-100451","authgroupid":"XXXXX","authpassword":"XXXXX","authid":"XXXXX"},"recommend":{"urls":{"default":"https://xptest.dbc.dk/ms/recommend-cosim/v1","popular":"https://xptest.dbc.dk/ms/recommend-pop/v1"}},"openagency":{"url":"http://openagency.addi.dk/2.24/","agency":"775100"},"ddbcms":{"url":"http://rest.filmstriben.dbc.inlead.dk/web/","agency":"775100","password":"XXXXX"},"openholdingstatus":{"url":"https://openholdingstatus.addi.dk/2.2/","authgroupid":"XXXXX","authpassword":"XXXXX","authid":"XXXXX"},"rank":{"url":"http://xp-p02.dbc.dk/rank"}};
    context.mockData = mockData;
    provider.execute('order', {"pretty":true,"pids":["870970-basis:28126727"],"expires":"2016-018-01","library":"DK-100451","phone":"123454","address":"ADDRESS","email":"EMAIL"}, context)
      .then(result => {
        assert.deepEqual(result,
            {"statusCode":400,"error":"The expires argument must be of the form YYYY-MM-DD (example: 2016-06-24)"});
        done();
      })
      .catch(result => {
        fail({throw: result}, {"statusCode":400,"error":"The expires argument must be of the form YYYY-MM-DD (example: 2016-06-24)"});
        done();
      });
  });
});
