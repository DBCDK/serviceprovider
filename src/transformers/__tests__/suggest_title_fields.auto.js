// AUTOTEST GENERATOR: {"endpoint":"suggest","params":{"q":"herlev","type":"title","limit":3,"fields":["term","pid"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'suggest';
const params = {q: 'herlev', type: 'title', limit: 3, fields: ['term', 'pid']};

const expected = {
  statusCode: 200,
  data: [
    {
      term: 'Herlev tur/retur',
      pid: '870970-basis:22591304',
      creator: 'Lise Reinau',
      type: 'music'
    },
    {
      term: 'Herlev-Ruterne',
      pid: '870970-basis:21085839',
      creator: 'Hans-Henrik Thomsen (f. 1949)',
      type: 'book'
    },
    {
      term: 'Herlev kommune 75 år',
      pid: '870970-basis:06131484',
      creator: 'Olaf Hansen (f. 1913)',
      type: 'book'
    }
  ]
};

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.10/',
    openagency: 'http://openagency.addi.dk/2.24/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/2.2/',
    PRODopenorder: 'https://openorder.addi.dk/2.8/',
    openorder: 'https://openorder.addi.dk/test_2.8/',
    opensearch: 'https://opensearch.addi.dk/b3.0_4.5/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    rank: 'https://xptest.dbc.dk/ms/rank/v1',
    suggestpopular: 'http://xptest.dbc.dk/ms/entity-pop/v1',
    suggestcreator: 'http://xptest.dbc.dk/ms/entity-suggest/v1/creator',
    suggestlibrary: 'http://xptest.dbc.dk/ms/entity-suggest/v1/library',
    suggestsubject: 'http://xptest.dbc.dk/ms/entity-suggest/v1/subject',
    recommendurls: {
      default: 'https://xptest.dbc.dk/ms/recommend-cosim/v1',
      popular: 'https://xptest.dbc.dk/ms/recommend-pop/v1'
    },
    communityservice: 'http://localhost:4010/v1'
  },
  communityservice: {id: 1},
  search: {agency: '775100', profile: 'opac', collectionidentifiers: ''},
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
  user: {
    id: 'XXXXX',
    salt: 'XXXXX',
    pin: 'XXXXX',
    libraryId: '710100',
    agency: '710100',
    isil: 'DK-710100'
  },
  app: {
    clientId: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  }
};
const mockData = {
  '["suggestpopular",{"qs":{"query":"{!complexphrase inOrder=true}display.title:herlev*","fields":"display.title,fedoraPid,display.creator,display.workType","rows":3}}]':
    '{"responseHeader": {"args": {"fq": "work.isPrimaryObject:true", "rows": 3, "group": "true", "start": 0, "group.field": "fedoraPid", "group.main": "true", "fl": "display.title fedoraPid display.creator display.workType"}, "svn-revision": "106527", "ab-id": "1", "qtime": 10, "q": "{!complexphrase inOrder=true}display.title:herlev*", "version": "0.1.0", "stime": 10, "qf": ["inOrder=true}display.title"], "build": "581", "modified_q": "{!boost b=loan.count}{!complexphrase inOrder=true}display.title:herlev*"}, "response": {"start": 0, "numFound": 228, "docs": [{"fedoraPid": "870970-basis:22591304", "display.creator": ["Lise Reinau"], "display.title": ["Herlev tur/retur"], "display.workType": ["music"]}, {"fedoraPid": "870970-basis:21085839", "display.creator": ["Hans-Henrik Thomsen (f. 1949)"], "display.title": ["Herlev-Ruterne"], "display.workType": ["book"]}, {"fedoraPid": "870970-basis:06131484", "display.creator": ["Olaf Hansen (f. 1913)"], "display.title": ["Herlev kommune 75 \\u00e5r"], "display.workType": ["book"]}]}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: suggest_title_fields.auto', () => {
  it('has same result as recorded (in suggest_title_fields.auto)', done => {
    assert(
      Date.now() < +new Date('2018-03-18'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    provider
      .execute(endpoint, params, context)
      .then(result => {
        assert.deepEqual(result, expected);
        done();
      })
      .catch(result => {
        fail({throw: result}, expected);
        done();
      });
  });
});
