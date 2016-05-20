/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
// Request: recommend {"recommender":"popular","limit":3}
'use strict';
import Provider from '../Provider.js';
import {assert, fail} from 'chai';

let provider = Provider();
let mockData = {"[\"https://xptest.dbc.dk/ms/recommend-pop/v1\",{\"method\":\"POST\",\"json\":{\"like\":[],\"dislike\":[],\"known\":[],\"discard\":[],\"maxresults\":3,\"filter\":[\"rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog\"]}}]":{"result":[["870970-basis:28511663",{"creator":"Jussi Adler-Olsen","val":30889,"title":"Journal 64 : krimithriller","pid":"870970-basis:28511663"}],["870970-basis:29060835",{"creator":"Sara Blædel","val":26278,"title":"De glemte piger : krimi","pid":"870970-basis:29060835"}],["870970-basis:28567057",{"creator":"Sara Blædel","val":25139,"title":"Dødsenglen : krimi","pid":"870970-basis:28567057"}]],"msecs":282}};

describe('Automated test of the recommend endpoint', () => {
  it('expected response. ID:v41d7c, for {"recommender":"popular","limit":3}', (done) => {
    let context = {"app":{"collectionidentifiers":"rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog"},"opensearch":{"url":"http://opensearch.addi.dk/b3.0_4.2/","agency":"775100","profile":"opac"},"moreinfo":{"url":"http://moreinfo.addi.dk/2.1/","user":"XXXXX","group":"XXXXX","password":"XXXXX"},"entitysuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1","libraryType":"folkebibliotek"},"popsuggest":{"url":"http://xptest.dbc.dk/ms/entity-pop/v1"},"creatorsuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/creator"},"librarysuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/library","librarytype":"folkebibliotek"},"subjectsuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/subject"},"orderpolicy":{"url":"https://openorder.addi.dk/test_2.7.1/","servicerequester":"190101"},"userstatus":{"salt":"XXXXX","url":"https://openuserstatus.addi.dk/1.4.1/","userid":"XXXXX","userpin":"XXXXX","useragency":"DK-100451","authgroupid":"XXXXX","authpassword":"XXXXX","authid":"XXXXX"},"recommend":{"urls":{"default":"https://xptest.dbc.dk/ms/recommend-cosim/v1","popular":"https://xptest.dbc.dk/ms/recommend-pop/v1"}},"openagency":{"url":"http://openagency.addi.dk/2.24/","agency":"775100"},"ddbcms":{"url":"http://rest.filmstriben.dbc.inlead.dk/web/","agency":"775100","password":"XXXXX"},"openholdingstatus":{"url":"https://openholdingstatus.addi.dk/2.2/","authgroupid":"XXXXX","authpassword":"XXXXX","authid":"XXXXX"},"rank":{"url":"http://xp-p02.dbc.dk/rank"}};
    context.mockData = mockData;
    provider.execute('recommend', {"recommender":"popular","limit":3}, context)
      .then(result => {
        assert.deepEqual(result,
            {"statusCode":200,"data":[{"creator":"Jussi Adler-Olsen","val":30889,"title":"Journal 64 : krimithriller","pid":"870970-basis:28511663"},{"creator":"Sara Blædel","val":26278,"title":"De glemte piger : krimi","pid":"870970-basis:29060835"},{"creator":"Sara Blædel","val":25139,"title":"Dødsenglen : krimi","pid":"870970-basis:28567057"}]});
        done();
      })
      .catch(result => {
        fail({throw: result}, {"statusCode":200,"data":[{"creator":"Jussi Adler-Olsen","val":30889,"title":"Journal 64 : krimithriller","pid":"870970-basis:28511663"},{"creator":"Sara Blædel","val":26278,"title":"De glemte piger : krimi","pid":"870970-basis:29060835"},{"creator":"Sara Blædel","val":25139,"title":"Dødsenglen : krimi","pid":"870970-basis:28567057"}]});
        done();
      });
  });
});
