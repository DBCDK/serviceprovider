/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: getEntity {"id":"3888","_meta":{"type":"flag","elvisType":"action","schemaMap":{"reason":"attributes.reason","reference":"attributes.reference","profile_id":"owner_id","created_epoch":"created_epoch","deleted_epoch":"deleted_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","id":"id"},"schema":{"properties":{"reason":{"type":"string"},"reference":{"type":"object","properties":{"type":{"type":"string","required":true},"id":{"type":"integer","required":true}}},"profile_id":{"type":"number","format":"integer"},"created_epoch":{"type":"integer"},"deleted_epoch":{"type":"integer"},"modified_epoch":{"type":"integer"},"modified_by":{"type":"integer"},"id":{"type":"integer"}}}}}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

const context = {
  "services": {
    "ddbcmsapi": "http://rest.filmstriben.dbc.inlead.dk/web/",
    "moreinfo": "http://moreinfo.addi.dk/2.6/",
    "openagency": "http://openagency.addi.dk/2.24/",
    "openholdingstatus": "https://openholdingstatus.addi.dk/2.2/",
    "PRODopenorder": "https://openorder.addi.dk/2.7.1/",
    "openorder": "https://openorder.addi.dk/test_2.7.1/",
    "opensearch": "http://opensearch.addi.dk/b3.0_4.2/",
    "openuserstatus": "https://openuserstatus.addi.dk/1.4.1/",
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
const mockData = {
  "[\"http://localhost:4010/v1/community/1/query\",{\"method\":\"post\",\"json\":{\"Actions\":{\"id\":\"3888\",\"type\":\"flag\"},\"Limit\":1,\"Include\":{\"reason\":\"attributes.reason\",\"reference\":\"attributes.reference\",\"profile_id\":\"owner_id\",\"created_epoch\":\"created_epoch\",\"deleted_epoch\":\"deleted_epoch\",\"modified_epoch\":\"modified_epoch\",\"modified_by\":\"modified_by\",\"id\":\"id\"}}}]": {
    "data": {
      "Total": 1,
      "NextOffset": null,
      "List": [
        {
          "reason": "this is the reason",
          "reference": {
            "id": 1,
            "type": "group"
          },
          "profile_id": 1,
          "created_epoch": 1493804583,
          "deleted_epoch": null,
          "modified_epoch": 1493804583,
          "modified_by": null,
          "id": 3888
        }
      ]
    }
  }
};

describe('Automated test: getFlag', () => {
  it('expected response. ID:t9ll8u, for {"id":"3888","_meta":{"type":"flag","elvisType":"action","schemaMap":{"reason":"attributes.reason","reference":"attributes.reference","profile_id":"owner_id","created_epoch":"created_epoch","deleted_epoch":"deleted_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","id":"id"},"schema":{"properties":{"reason":{"type":"string"},"reference":{"type":"object","properties":{"type":{"type":"string","required":true},"id":{"type":"integer","required":true}}},"profile_id":{"type":"number","format":"integer"},"created_epoch":{"type":"integer"},"deleted_epoch":{"type":"integer"},"modified_epoch":{"type":"integer"},"modified_by":{"type":"integer"},"id":{"type":"integer"}}}}}', (done) => {
    context.mockData = mockData;
    provider.execute('getEntity', {"id":"3888","_meta":{"type":"flag","elvisType":"action","schemaMap":{"reason":"attributes.reason","reference":"attributes.reference","profile_id":"owner_id","created_epoch":"created_epoch","deleted_epoch":"deleted_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","id":"id"},"schema":{"properties":{"reason":{"type":"string"},"reference":{"type":"object","properties":{"type":{"type":"string","required":true},"id":{"type":"integer","required":true}}},"profile_id":{"type":"number","format":"integer"},"created_epoch":{"type":"integer"},"deleted_epoch":{"type":"integer"},"modified_epoch":{"type":"integer"},"modified_by":{"type":"integer"},"id":{"type":"integer"}}}}}, context)
      .then(result => {
        assert.deepEqual(result,
            {
  "status": 200,
  "data": {
    "reason": "this is the reason",
    "reference": {
      "id": 1,
      "type": "group"
    },
    "profile_id": 1,
    "created_epoch": 1493804583,
    "deleted_epoch": null,
    "modified_epoch": 1493804583,
    "modified_by": null,
    "id": 3888
  },
  "errors": []
});
        done();
      })
      .catch(result => {
        fail({throw: result}, {
  "status": 200,
  "data": {
    "reason": "this is the reason",
    "reference": {
      "id": 1,
      "type": "group"
    },
    "profile_id": 1,
    "created_epoch": 1493804583,
    "deleted_epoch": null,
    "modified_epoch": 1493804583,
    "modified_by": null,
    "id": 3888
  },
  "errors": []
});
        done();
      });
  });
});
