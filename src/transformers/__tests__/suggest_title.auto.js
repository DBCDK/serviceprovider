// AUTOTEST GENERATOR: {"endpoint":"suggest","params":{"q":"hest","type":"title","limit":3,"fields":["term"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'suggest';
const params = {q: 'hest', type: 'title', limit: 3, fields: ['term']};

const expected = {
  statusCode: 200,
  data: [
    {
      term: 'Hestenes Dal',
      pid: '870970-basis:06598722',
      creator: 'Jean M. Auel',
      type: 'book'
    },
    {
      term: 'Hestetyven',
      pid: '870970-basis:26191076',
      creator: 'Ole Frøslev',
      type: 'book'
    },
    {
      term: 'Hestehovedtågen',
      pid: '870970-basis:50507173',
      creator: 'Ola Bauer',
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
    opensearch: 'https://opensearch.addi.dk/b3.5_4.5/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    rank: 'https://xptest.dbc.dk/ms/rank/v1',
    suggest: 'XXXXX',
    suggestpopular: 'http://xptest.dbc.dk/ms/entity-pop/v1',
    suggestcreator: 'http://xptest.dbc.dk/ms/entity-suggest/v1/creator',
    suggestlibrary: 'http://xptest.dbc.dk/ms/entity-suggest/v1/library',
    suggestsubject: 'http://xptest.dbc.dk/ms/entity-suggest/v1/subject',
    recommend: 'http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim',
    recommendurls: 'XXXXX',
    communityservice: 'http://localhost:4010/v1'
  },
  communityservice: {id: 1},
  search: {agency: '775100', profile: 'opac', collectionidentifiers: ''},
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
  user: {
    id: 'XXXXX',
    salt: 'XXXXX',
    pin: 'XXXXX',
    libraryId: '726501',
    agency: '726500',
    isil: 'DK-726500'
  },
  app: {
    clientId: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  }
};
const mockData = {
  '["suggestpopular",{"qs":{"query":"{!complexphrase inOrder=true}display.title:hest*","fields":"display.title,fedoraPid,display.creator,display.workType","rows":3}}]':
    '{"responseHeader": {"args": {"fq": "work.isPrimaryObject:true", "rows": 3, "group": "true", "start": 0, "group.field": "fedoraPid", "group.main": "true", "fl": "display.title fedoraPid display.creator display.workType"}, "svn-revision": "106527", "ab-id": "1", "qtime": 10, "q": "{!complexphrase inOrder=true}display.title:hest*", "version": "0.1.0", "stime": 10, "qf": ["inOrder=true}display.title"], "build": "581", "modified_q": "{!boost b=loan.count}{!complexphrase inOrder=true}display.title:hest*"}, "response": {"start": 0, "numFound": 3313, "docs": [{"fedoraPid": "870970-basis:06598722", "display.creator": ["Jean M. Auel"], "display.title": ["Hestenes Dal"], "display.workType": ["book"]}, {"fedoraPid": "870970-basis:26191076", "display.creator": ["Ole Fr\\u00f8slev"], "display.title": ["Hestetyven"], "display.workType": ["book"]}, {"fedoraPid": "870970-basis:50507173", "display.creator": ["Ola Bauer"], "display.title": ["Hestehovedt\\u00e5gen"], "display.workType": ["book"]}]}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: suggest_title.auto', () => {
  it('has same result as recorded (in suggest_title.auto)', () => {
    assert(
      Date.now() < +new Date('2018-06-12'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
