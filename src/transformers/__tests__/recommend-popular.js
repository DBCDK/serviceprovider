/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
// Request: recommend {"recommender":"popular","limit":3,"pretty":true}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

let context = {"services":{"ddbcmsapi":"http://rest.filmstriben.dbc.inlead.dk/web/","moreinfo":"http://moreinfo.addi.dk/2.6/","openagency":"http://openagency.addi.dk/2.24/","openholdingstatus":"https://openholdingstatus.addi.dk/2.2/","openorder":"https://openorder.addi.dk/2.7.1/","TESTopenorder":"https://openorder.addi.dk/test_2.7.1/","opensearch":"http://opensearch.addi.dk/b3.0_4.2/","openuserstatus":"https://openuserstatus.addi.dk/1.4.1/","rank":"https://xptest.dbc.dk/ms/rank/v1","suggestpopular":"http://xptest.dbc.dk/ms/entity-pop/v1","suggestcreator":"http://xptest.dbc.dk/ms/entity-suggest/v1/creator","suggestlibrary":"http://xptest.dbc.dk/ms/entity-suggest/v1/library","suggestsubject":"http://xptest.dbc.dk/ms/entity-suggest/v1/subject","recommendurls":{"default":"https://xptest.dbc.dk/ms/recommend-cosim/v1","popular":"https://xptest.dbc.dk/ms/recommend-pop/v1"}},"search":{"agency":"775100","profile":"opac","collectionidentifiers":"rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog"},"netpunkt":{"user":"XXXXX","group":"XXXXX","password":"XXXXX"},"user":{"agency":"100451","id":"XXXXX","pin":"XXXXX","salt":"XXXXX"},"app":{"clientid":"XXXXX","ddbcmsapipassword":"XXXXX","orderpolicyrequester":"190101"}};
let provider = Provider();
let mockData = {"[\"https://xptest.dbc.dk/ms/recommend-pop/v1\",{\"method\":\"POST\",\"json\":{\"like\":[],\"dislike\":[],\"known\":[],\"discard\":[],\"maxresults\":3,\"filter\":[\"rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog\"]}}]":{"result":[["870970-basis:28511663",{"creator":"Jussi Adler-Olsen","val":30889,"title":"Journal 64 : krimithriller","pid":"870970-basis:28511663"}],["870970-basis:29060835",{"creator":"Sara Blædel","val":26278,"title":"De glemte piger : krimi","pid":"870970-basis:29060835"}],["870970-basis:28567057",{"creator":"Sara Blædel","val":25139,"title":"Dødsenglen : krimi","pid":"870970-basis:28567057"}]],"msecs":274}};

describe('Automated test: recommend-popular', () => {
  it('expected response. ID:h0a3kh, for {"recommender":"popular","limit":3,"pretty":true}', (done) => {
    context.mockData = mockData;
    provider.execute('recommend', {"recommender":"popular","limit":3,"pretty":true}, context)
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
