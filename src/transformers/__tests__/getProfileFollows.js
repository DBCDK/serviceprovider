/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: createEntity {"post_fid":419,"media":{"type":"image","value":{"thumb":"http://lorempixel.com/400/200/","full":"http://lorempixel.com/1600/800/"}},"fisk":"sdfsdsdf","profile_id":1,"_meta":{"type":"comment","elvisType":"entity","schemaMap":{"title":"title","body":"contents","post_id":"entity_ref","media":"attributes.media","profile_id":"owner_id","created_epoch":"created_epoch","deleted_epoch":"deleted_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","id":"id"},"schema":{"properties":{"title":{"type":"string"},"body":{"type":"string"},"post_id":{"type":"integer"},"media":{"properties":{"type":{"type":"string"},"value":{"type":"object"}}},"profile_id":{"type":"number","format":"integer"},"created_epoch":{"type":"integer"},"deleted_epoch":{"type":"integer"},"modified_epoch":{"type":"integer"},"modified_by":{"type":"integer"},"id":{"type":"integer"}},"required":["body","post_id"]}}}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

const context = {
  "services": {
    "ddbcmsapi": "https://cmscontent.dbc.dk/",
    "moreinfo": "http://moreinfo.addi.dk/2.6/",
    "openagency": "http://openagency.addi.dk/2.24/",
    "openholdingstatus": "https://openholdingstatus.addi.dk/2.2/",
    "PRODopenorder": "https://openorder.addi.dk/2.7.1/",
    "openorder": "https://openorder.addi.dk/test_2.7.1/",
    "opensearch": "http://opensearch.addi.dk/b3.0_4.2/",
    "openuserstatus": "https://openuserstatus.addi.dk/1.5/",
    "rank": "https://xptest.dbc.dk/ms/rank/v1",
    "suggestpopular": "http://xptest.dbc.dk/ms/entity-pop/v1",
    "suggestcreator": "http://xptest.dbc.dk/ms/entity-suggest/v1/creator",
    "suggestlibrary": "http://xptest.dbc.dk/ms/entity-suggest/v1/library",
    "suggestsubject": "http://xptest.dbc.dk/ms/entity-suggest/v1/subject",
    "recommendurls": {
      "default": "https://xptest.dbc.dk/ms/recommend-cosim/v1",
      "popular": "https://xptest.dbc.dk/ms/recommend-pop/v1"
    },
    "communityservice": "http://localhost:4010/v1"
  },
  "communityservice": {
    "id": 1
  },
  "search": {
    "agency": "775100",
    "profile": "opac",
    "collectionidentifiers": "rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog"
  },
  "netpunkt": {
    "user": "XXXXX",
    "group": "XXXXX",
    "password": "XXXXX"
  },
  "user": {
    "agency": "100451",
    "id": "XXXXX",
    "pin": "XXXXX",
    "salt": "XXXXX"
  },
  "app": {
    "clientid": "XXXXX",
    "ddbcmsapipassword": "XXXXX",
    "orderpolicyrequester": "190101",
    "orderSystem": "bibliotekdk"
  },
  "crud": {}
};
const provider = Provider();
const mockData = {};

describe('Automated test: getProfileFollows', () => {
  it('expected response. ID:scl2ii, for {"post_fid":419,"media":{"type":"image","value":{"thumb":"http://lorempixel.com/400/200/","full":"http://lorempixel.com/1600/800/"}},"fisk":"sdfsdsdf","profile_id":1,"_meta":{"type":"comment","elvisType":"entity","schemaMap":{"title":"title","body":"contents","post_id":"entity_ref","media":"attributes.media","profile_id":"owner_id","created_epoch":"created_epoch","deleted_epoch":"deleted_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","id":"id"},"schema":{"properties":{"title":{"type":"string"},"body":{"type":"string"},"post_id":{"type":"integer"},"media":{"properties":{"type":{"type":"string"},"value":{"type":"object"}}},"profile_id":{"type":"number","format":"integer"},"created_epoch":{"type":"integer"},"deleted_epoch":{"type":"integer"},"modified_epoch":{"type":"integer"},"modified_by":{"type":"integer"},"id":{"type":"integer"}},"required":["body","post_id"]}}}', (done) => {
    context.mockData = mockData;
    provider.execute('createEntity', {"post_fid":419,"media":{"type":"image","value":{"thumb":"http://lorempixel.com/400/200/","full":"http://lorempixel.com/1600/800/"}},"fisk":"sdfsdsdf","profile_id":1,"_meta":{"type":"comment","elvisType":"entity","schemaMap":{"title":"title","body":"contents","post_id":"entity_ref","media":"attributes.media","profile_id":"owner_id","created_epoch":"created_epoch","deleted_epoch":"deleted_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","id":"id"},"schema":{"properties":{"title":{"type":"string"},"body":{"type":"string"},"post_id":{"type":"integer"},"media":{"properties":{"type":{"type":"string"},"value":{"type":"object"}}},"profile_id":{"type":"number","format":"integer"},"created_epoch":{"type":"integer"},"deleted_epoch":{"type":"integer"},"modified_epoch":{"type":"integer"},"modified_by":{"type":"integer"},"id":{"type":"integer"}},"required":["body","post_id"]}}}, context)
      .then(result => {
        assert.deepEqual(result,
            {
  "status": 400,
  "errors": " requires property \"body\"\n requires property \"post_id\"",
  "data": []
});
        done();
      })
      .catch(result => {
        fail({throw: result}, {
  "status": 400,
  "errors": " requires property \"body\"\n requires property \"post_id\"",
  "data": []
});
        done();
      });
  });
});
