/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
// Request: rank {"pids":["870970-basis:28511663","870970-basis:28902239"],"like":["870970-basis:45488713","870970-basis:28643713"]}
'use strict';
import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

let provider = Provider();
let mockData = {"[\"https://xptest.dbc.dk/ms/rank/v1\",{\"uri\":\"https://xptest.dbc.dk/ms/rank/v1\",\"method\":\"POST\",\"json\":{\"like\":[\"870970-basis:45488713\",\"870970-basis:28643713\"],\"set\":[\"870970-basis:28511663\",\"870970-basis:28902239\"]}}]":{"result":[["870970-basis:28511663",{"title":"Journal 64 : krimithriller","creator":"Jussi Adler-Olsen","val":62.798478002209706,"ctkey":"Journal_64_:_krimithriller::Jussi_Adler-Olsen","pid":"870970-basis:28511663"}],["870970-basis:28902239",{"title":"Det syvende barn","creator":"Erik Valeur","val":42.07434137795138,"ctkey":"Det_syvende_barn::Erik_Valeur","pid":"870970-basis:28902239"}]],"msecs":"not set"}};

describe('Automated test of the rank endpoint', () => {
  it('expected response. ID:8yykf4, for {"pids":["870970-basis:28511663","870970-basis:28902239"],"like":["870970-basis:45488713","870970-basis:28643713"]}', (done) => {
    let context = {"services":{"ddbcmsapi":"http://rest.filmstriben.dbc.inlead.dk/web/","moreinfo":"http://moreinfo.addi.dk/2.1/","openagency":"http://openagency.addi.dk/2.24/","openholdingstatus":"https://openholdingstatus.addi.dk/2.2/","openorder":"https://openorder.addi.dk/test_2.7.1/","opensearch":"http://opensearch.addi.dk/b3.0_4.2/","openuserstatus":"https://openuserstatus.addi.dk/1.4.1/","rank":"https://xptest.dbc.dk/ms/rank/v1","recommenddefault":"https://xptest.dbc.dk/ms/recommend-cosim/v1","recommendpopular":"https://xptest.dbc.dk/ms/recommend-pop/v1","suggestpopular":"http://xptest.dbc.dk/ms/entity-pop/v1","suggestcreator":"http://xptest.dbc.dk/ms/entity-suggest/v1/creator","suggestlibrary":"http://xptest.dbc.dk/ms/entity-suggest/v1/library","suggestsubject":"http://xptest.dbc.dk/ms/entity-suggest/v1/subject"},"agency":{"search":"775100","order":"DK-100451"},"XXXXX":{"user":"XXXXX","group":"XXXXX","password":"XXXXX"},"user":{"id":"XXXXX","pin":"XXXXX","salt":"XXXXX"},"app":{"clientid":"XXXXX","collectionidentifiers":"rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog","ddbcmsapipassword":"XXXXX","orderpolicyrequester":"190101","searchprofile":"opac"},"opensearch":{"url":"http://opensearch.addi.dk/b3.0_4.2/","agency":"775100","profile":"opac"},"moreinfo":{"url":"http://moreinfo.addi.dk/2.1/","user":"XXXXX","group":"XXXXX","password":"XXXXX"},"entitysuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1","libraryType":"folkebibliotek"},"popsuggest":{"url":"http://xptest.dbc.dk/ms/entity-pop/v1"},"creatorsuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/creator"},"librarysuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/library","librarytype":"folkebibliotek"},"subjectsuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/subject"},"orderpolicy":{"url":"https://openorder.addi.dk/test_2.7.1/","servicerequester":"190101"},"userstatus":{"salt":"XXXXX","url":"https://openuserstatus.addi.dk/1.4.1/","userid":"XXXXX","userpin":"XXXXX","useragency":"DK-100451","authgroupid":"XXXXX","authpassword":"XXXXX","authid":"XXXXX"},"recommend":{"urls":{"default":"https://xptest.dbc.dk/ms/recommend-cosim/v1","popular":"https://xptest.dbc.dk/ms/recommend-pop/v1"}},"openagency":{"url":"http://openagency.addi.dk/2.24/","agency":"775100"},"ddbcms":{"url":"http://rest.filmstriben.dbc.inlead.dk/web/","agency":"775100","password":"XXXXX"},"openholdingstatus":{"url":"https://openholdingstatus.addi.dk/2.2/","authgroupid":"XXXXX","authpassword":"XXXXX","authid":"XXXXX"},"rank":{"url":"https://xptest.dbc.dk/ms/rank/v1"}};
    context.mockData = mockData;
    provider.execute('rank', {"pids":["870970-basis:28511663","870970-basis:28902239"],"like":["870970-basis:45488713","870970-basis:28643713"]}, context)
      .then(result => {
        assert.deepEqual(result,
            {"statusCode":200,"data":[{"title":"Journal 64 : krimithriller","creator":"Jussi Adler-Olsen","val":62.798478002209706,"ctkey":"Journal_64_:_krimithriller::Jussi_Adler-Olsen","pid":"870970-basis:28511663"},{"title":"Det syvende barn","creator":"Erik Valeur","val":42.07434137795138,"ctkey":"Det_syvende_barn::Erik_Valeur","pid":"870970-basis:28902239"}]});
        done();
      })
      .catch(result => {
        fail({throw: result}, {"statusCode":200,"data":[{"title":"Journal 64 : krimithriller","creator":"Jussi Adler-Olsen","val":62.798478002209706,"ctkey":"Journal_64_:_krimithriller::Jussi_Adler-Olsen","pid":"870970-basis:28511663"},{"title":"Det syvende barn","creator":"Erik Valeur","val":42.07434137795138,"ctkey":"Det_syvende_barn::Erik_Valeur","pid":"870970-basis:28902239"}]});
        done();
      });
  });
});
