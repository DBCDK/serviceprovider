/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
// Request: recommend {"like":["870970-basis:45488713","870970-basis:28643713","870970-basis:29494940","870970-basis:29386404","870970-basis:28429576"],"limit":10}
'use strict';
import Provider from '../Provider.js';
import {assert, fail} from 'chai';

let provider = Provider();
let mockData = {"[\"https://xptest.dbc.dk/ms/recommend-cosim/v1\",{\"method\":\"POST\",\"json\":{\"like\":[\"870970-basis:45488713\",\"870970-basis:28643713\",\"870970-basis:29494940\",\"870970-basis:29386404\",\"870970-basis:28429576\"],\"maxresults\":10}}]":{"result":[["870970-basis:28824130",{"creator":"Mari Jungstedt","val":0.5212014338107577,"title":"Den mørke engel : kriminalroman","pid":"870970-basis:28824130"}],["870970-basis:50625532",{"creator":"Mari Jungstedt","val":0.49969786213953876,"title":"Den farlige leg : kriminalroman","pid":"870970-basis:50625532"}],["870970-basis:28709994",{"creator":"Camilla Läckberg","val":0.4797369002061243,"title":"Fyrmesteren : kriminalroman","pid":"870970-basis:28709994"}],["870970-basis:28277350",{"creator":"Mari Jungstedt","val":0.45033463212057645,"title":"I denne søde sommertid : kriminalroman","pid":"870970-basis:28277350"}],["870970-basis:27670806",{"creator":"Camilla Läckberg","val":0.4138118073099609,"title":"Tyskerungen : kriminalroman","pid":"870970-basis:27670806"}],["870970-basis:29953554",{"creator":"Elsebeth Egholm","val":0.3873503806990347,"title":"Eget ansvar","pid":"870970-basis:29953554"}],["874310-katalog:DBB0041046",{"creator":"Grete Tulinius","val":0.37914277339855307,"title":"Noras bog : krimi","pid":"874310-katalog:DBB0041046"}],["874310-katalog:DBB0708070",{"creator":"Camilla Läckberg","val":0.3678050803762474,"title":"Ulykkesfuglen : kriminalroman","pid":"874310-katalog:DBB0708070"}],["870970-basis:29477744",{"creator":"Anna Grue","val":0.3673895724014438,"title":"Et spørgsmål om penge","pid":"870970-basis:29477744"}],["870970-basis:45188981",{"creator":"Camilla Läckberg","val":0.3626510422203491,"title":"Englemagersken : kriminalroman","pid":"870970-basis:45188981"}]],"msecs":42}};

describe('Automated test of the recommend endpoint', () => {
  it('expected response. ID:do1mc0, for {"like":["870970-basis:45488713","870970-basis:28643713","870970-basis:29494940","870970-basis:29386404","870970-basis:28429576"],"limit":10}', (done) => {
    let context = {"opensearch":{"url":"http://opensearch.addi.dk/b3.0_4.2/","agency":"775100","profile":"opac"},"moreinfo":{"url":"http://moreinfo.addi.dk/2.1/","user":"XXXXX","group":"XXXXX","password":"XXXXX"},"entitysuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1","libraryType":"folkebibliotek"},"popsuggest":{"url":"http://xptest.dbc.dk/ms/entity-pop/v1"},"creatorsuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/creator"},"librarysuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/library","librarytype":"folkebibliotek"},"subjectsuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/subject"},"orderpolicy":{"url":"https://openorder.addi.dk/test_2.7.1/","servicerequester":"190101"},"userstatus":{"salt":"XXXXX","url":"https://openuserstatus.addi.dk/1.4.1/","userid":"XXXXX","userpin":"XXXXX","useragency":"DK-100451","authgroupid":"XXXXX","authpassword":"XXXXX","authid":"XXXXX"},"recommend":{"urls":{"default":"https://xptest.dbc.dk/ms/recommend-cosim/v1","popular":"https://xptest.dbc.dk/ms/recommend-pop/v1"}},"openagency":{"url":"http://openagency.addi.dk/2.24/","agency":"775100"},"ddbcms":{"url":"http://rest.filmstriben.dbc.inlead.dk/web/","agency":"775100","password":"XXXXX"},"openholdingstatus":{"url":"https://openholdingstatus.addi.dk/2.2/","authgroupid":"XXXXX","authpassword":"XXXXX","authid":"XXXXX"},"rank":{"url":"http://xp-p02.dbc.dk/rank"}};
    context.mockData = mockData;
    provider.execute('recommend', {"like":["870970-basis:45488713","870970-basis:28643713","870970-basis:29494940","870970-basis:29386404","870970-basis:28429576"],"limit":10}, context)
      .then(result => {
        assert.deepEqual(result,
            {"statusCode":200,"data":[{"creator":"Mari Jungstedt","val":0.5212014338107577,"title":"Den mørke engel : kriminalroman","pid":"870970-basis:28824130"},{"creator":"Mari Jungstedt","val":0.49969786213953876,"title":"Den farlige leg : kriminalroman","pid":"870970-basis:50625532"},{"creator":"Camilla Läckberg","val":0.4797369002061243,"title":"Fyrmesteren : kriminalroman","pid":"870970-basis:28709994"},{"creator":"Mari Jungstedt","val":0.45033463212057645,"title":"I denne søde sommertid : kriminalroman","pid":"870970-basis:28277350"},{"creator":"Camilla Läckberg","val":0.4138118073099609,"title":"Tyskerungen : kriminalroman","pid":"870970-basis:27670806"},{"creator":"Elsebeth Egholm","val":0.3873503806990347,"title":"Eget ansvar","pid":"870970-basis:29953554"},{"creator":"Grete Tulinius","val":0.37914277339855307,"title":"Noras bog : krimi","pid":"874310-katalog:DBB0041046"},{"creator":"Camilla Läckberg","val":0.3678050803762474,"title":"Ulykkesfuglen : kriminalroman","pid":"874310-katalog:DBB0708070"},{"creator":"Anna Grue","val":0.3673895724014438,"title":"Et spørgsmål om penge","pid":"870970-basis:29477744"},{"creator":"Camilla Läckberg","val":0.3626510422203491,"title":"Englemagersken : kriminalroman","pid":"870970-basis:45188981"}]});
        done();
      })
      .catch(result => {
        fail({throw: result}, {"statusCode":200,"data":[{"creator":"Mari Jungstedt","val":0.5212014338107577,"title":"Den mørke engel : kriminalroman","pid":"870970-basis:28824130"},{"creator":"Mari Jungstedt","val":0.49969786213953876,"title":"Den farlige leg : kriminalroman","pid":"870970-basis:50625532"},{"creator":"Camilla Läckberg","val":0.4797369002061243,"title":"Fyrmesteren : kriminalroman","pid":"870970-basis:28709994"},{"creator":"Mari Jungstedt","val":0.45033463212057645,"title":"I denne søde sommertid : kriminalroman","pid":"870970-basis:28277350"},{"creator":"Camilla Läckberg","val":0.4138118073099609,"title":"Tyskerungen : kriminalroman","pid":"870970-basis:27670806"},{"creator":"Elsebeth Egholm","val":0.3873503806990347,"title":"Eget ansvar","pid":"870970-basis:29953554"},{"creator":"Grete Tulinius","val":0.37914277339855307,"title":"Noras bog : krimi","pid":"874310-katalog:DBB0041046"},{"creator":"Camilla Läckberg","val":0.3678050803762474,"title":"Ulykkesfuglen : kriminalroman","pid":"874310-katalog:DBB0708070"},{"creator":"Anna Grue","val":0.3673895724014438,"title":"Et spørgsmål om penge","pid":"870970-basis:29477744"},{"creator":"Camilla Läckberg","val":0.3626510422203491,"title":"Englemagersken : kriminalroman","pid":"870970-basis:45188981"}]});
        done();
      });
  });
});
