/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
// Request: suggest {"q":"hest","type":"title","limit":3,"pretty":true}
'use strict';
import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

let provider = Provider();
let mockData = {"[\"popsuggest\",{\"qs\":{\"query\":\"{!complexphrase inOrder=true}display.title:hest*\",\"fields\":\"display.title,fedoraPid,display.creator,display.workType\",\"filter\":\"rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog\",\"rows\":3}}]":"{\"responseHeader\": {\"args\": {\"fq\": \"work.isPrimaryObject:true AND rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog\", \"rows\": 3, \"group\": \"true\", \"start\": 0, \"group.field\": \"fedoraPid\", \"group.main\": \"true\", \"fl\": \"display.title fedoraPid display.creator display.workType\"}, \"svn-revision\": \"97052\", \"ab-id\": \"1\", \"qtime\": 22, \"q\": \"{!complexphrase inOrder=true}display.title:hest*\", \"version\": \"0.1.0\", \"stime\": 27, \"qf\": [\"inOrder=true}display.title\"], \"build\": \"283\", \"modified_q\": \"{!boost b=loan.count}{!complexphrase inOrder=true}display.title:hest*\"}, \"response\": {\"start\": 0, \"numFound\": 3313, \"docs\": [{\"fedoraPid\": \"870970-basis:06598722\", \"display.creator\": [\"Jean M. Auel\"], \"display.title\": [\"Hestenes Dal\"], \"display.workType\": [\"book\"]}, {\"fedoraPid\": \"870970-basis:26191076\", \"display.creator\": [\"Ole Fr\\u00f8slev\"], \"display.title\": [\"Hestetyven\"], \"display.workType\": [\"book\"]}, {\"fedoraPid\": \"870970-basis:50507173\", \"display.creator\": [\"Ola Bauer\"], \"display.title\": [\"Hestehovedt\\u00e5gen\"], \"display.workType\": [\"book\"]}]}}"};

describe('Automated test of the suggest endpoint', () => {
  it('expected response. ID:e4v6nz, for {"q":"hest","type":"title","limit":3,"pretty":true}', (done) => {
    let context = {"app":{"collectionidentifiers":"rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog"},"opensearch":{"url":"http://opensearch.addi.dk/b3.0_4.2/","agency":"775100","profile":"opac"},"moreinfo":{"url":"http://moreinfo.addi.dk/2.1/","user":"XXXXX","group":"XXXXX","password":"XXXXX"},"entitysuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1","libraryType":"folkebibliotek"},"popsuggest":{"url":"http://xptest.dbc.dk/ms/entity-pop/v1"},"creatorsuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/creator"},"librarysuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/library","librarytype":"folkebibliotek"},"subjectsuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/subject"},"orderpolicy":{"url":"https://openorder.addi.dk/test_2.7.1/","servicerequester":"190101"},"userstatus":{"salt":"XXXXX","url":"https://openuserstatus.addi.dk/1.4.1/","userid":"XXXXX","userpin":"XXXXX","useragency":"DK-100451","authgroupid":"XXXXX","authpassword":"XXXXX","authid":"XXXXX"},"recommend":{"urls":{"default":"https://xptest.dbc.dk/ms/recommend-cosim/v1","popular":"https://xptest.dbc.dk/ms/recommend-pop/v1"}},"openagency":{"url":"http://openagency.addi.dk/2.24/","agency":"775100"},"ddbcms":{"url":"http://rest.filmstriben.dbc.inlead.dk/web/","agency":"775100","password":"XXXXX"},"openholdingstatus":{"url":"https://openholdingstatus.addi.dk/2.2/","authgroupid":"XXXXX","authpassword":"XXXXX","authid":"XXXXX"},"rank":{"url":"http://xp-p02.dbc.dk/rank"}};
    context.mockData = mockData;
    provider.execute('suggest', {"q":"hest","type":"title","limit":3,"pretty":true}, context)
      .then(result => {
        assert.deepEqual(result,
            {"statusCode":200,"data":[{"str":"Hestenes Dal","id":"870970-basis:06598722","creator":"Jean M. Auel","type":"book"},{"str":"Hestetyven","id":"870970-basis:26191076","creator":"Ole Frøslev","type":"book"},{"str":"Hestehovedtågen","id":"870970-basis:50507173","creator":"Ola Bauer","type":"book"}]});
        done();
      })
      .catch(result => {
        fail({throw: result}, {"statusCode":200,"data":[{"str":"Hestenes Dal","id":"870970-basis:06598722","creator":"Jean M. Auel","type":"book"},{"str":"Hestetyven","id":"870970-basis:26191076","creator":"Ole Frøslev","type":"book"},{"str":"Hestehovedtågen","id":"870970-basis:50507173","creator":"Ola Bauer","type":"book"}]});
        done();
      });
  });
});
