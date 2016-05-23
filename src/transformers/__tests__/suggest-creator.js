/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
// Request: suggest {"q":"rowling","type":"creator","limit":3,"pretty":true}
'use strict';
import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

let provider = Provider();
let mockData = {"[\"creatorsuggest\",{\"qs\":{\"query\":\"rowling\",\"n\":3}}]":"{\"responseHeader\": {\"q\": \"rowling\", \"version\": \"0.1.0\", \"build\": \"263\", \"time\": 1, \"ab-id\": \"1\", \"args\": {\"hr\": \"None\", \"hl\": \"None\"}, \"svn-revision\": \"97895\"}, \"response\": {\"suggestions\": [{\"frequency\": 144507, \"suggestion\": \"Joanne K. Rowling\"}, {\"frequency\": 451, \"suggestion\": \"Phelps Sarah aus\"}, {\"frequency\": 62, \"suggestion\": \"Newt Scamander\"}], \"numFound\": 8}}"};

describe('Automated test of the suggest endpoint', () => {
  it('expected response. ID:jwt24s, for {"q":"rowling","type":"creator","limit":3,"pretty":true}', (done) => {
    let context = {"app":{"collectionidentifiers":"rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog"},"opensearch":{"url":"http://opensearch.addi.dk/b3.0_4.2/","agency":"775100","profile":"opac"},"moreinfo":{"url":"http://moreinfo.addi.dk/2.1/","user":"XXXXX","group":"XXXXX","password":"XXXXX"},"entitysuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1","libraryType":"folkebibliotek"},"popsuggest":{"url":"http://xptest.dbc.dk/ms/entity-pop/v1"},"creatorsuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/creator"},"librarysuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/library","librarytype":"folkebibliotek"},"subjectsuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/subject"},"orderpolicy":{"url":"https://openorder.addi.dk/test_2.7.1/","servicerequester":"190101"},"userstatus":{"salt":"XXXXX","url":"https://openuserstatus.addi.dk/1.4.1/","userid":"XXXXX","userpin":"XXXXX","useragency":"DK-100451","authgroupid":"XXXXX","authpassword":"XXXXX","authid":"XXXXX"},"recommend":{"urls":{"default":"https://xptest.dbc.dk/ms/recommend-cosim/v1","popular":"https://xptest.dbc.dk/ms/recommend-pop/v1"}},"openagency":{"url":"http://openagency.addi.dk/2.24/","agency":"775100"},"ddbcms":{"url":"http://rest.filmstriben.dbc.inlead.dk/web/","agency":"775100","password":"XXXXX"},"openholdingstatus":{"url":"https://openholdingstatus.addi.dk/2.2/","authgroupid":"XXXXX","authpassword":"XXXXX","authid":"XXXXX"},"rank":{"url":"http://xp-p02.dbc.dk/rank"}};
    context.mockData = mockData;
    provider.execute('suggest', {"q":"rowling","type":"creator","limit":3,"pretty":true}, context)
      .then(result => {
        assert.deepEqual(result,
            {"statusCode":200,"data":[{"str":"Joanne K. Rowling"},{"str":"Phelps Sarah aus"},{"str":"Newt Scamander"}]});
        done();
      })
      .catch(result => {
        fail({throw: result}, {"statusCode":200,"data":[{"str":"Joanne K. Rowling"},{"str":"Phelps Sarah aus"},{"str":"Newt Scamander"}]});
        done();
      });
  });
});
