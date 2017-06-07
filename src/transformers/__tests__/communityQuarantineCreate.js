/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: createEntity {"profile_id":1,"profile_ref":1,"reason":"string","flags":[],"_meta":{"type":"quarantine","elvisType":"action","schemaMap":{"profile_id":"owner_id","profile_ref":"profile_ref","reason":"attributes.reason","flags":"attributes.flags","created_epoch":"created_epoch","deleted_epoch":"deleted_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","id":"id"},"schema":{"properties":{"profile_id":{"type":"integer"},"profile_ref":{"type":"integer"},"reason":{"type":"string"},"flags":{"type":"array","items":{"type":"integer"}},"created_epoch":{"type":"integer"},"deleted_epoch":{"type":"integer"},"modified_epoch":{"type":"integer"},"modified_by":{"type":"integer"},"id":{"type":"integer"}}}}}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

const context = {
  "services": {
    "ddbcmsapi": "https://cmscontent.dbc.dk/",
    "moreinfo": "http://moreinfo.addi.dk/2.8/",
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
    "id": "1"
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
  "[\"http://localhost:4010/v1/community/1/query\",{\"method\":\"post\",\"json\":{\"Profile\":{\"id\":1},\"Include\":{\"id\":\"id\"}}}]": {
    "data": {
      "id": 1
    }
  },
  "[\"http://localhost:4010/v1/community/1/action\",{\"method\":\"post\",\"json\":{\"owner_id\":1,\"profile_ref\":1,\"attributes\":{\"reason\":\"string\",\"flags\":[]},\"type\":\"quarantine\"}}]": {
    "links": {
      "self": "/v1/community/1/action/3900"
    },
    "data": {
      "id": 3900,
      "created_epoch": 1496135643,
      "deleted_epoch": null,
      "modified_epoch": 1496135643,
      "modified_by": null,
      "deleted_by": null,
      "community_id": 1,
      "owner_id": 1,
      "start_epoch": null,
      "end_epoch": null,
      "entity_ref": null,
      "profile_ref": 1,
      "type": "quarantine",
      "attributes": {
        "flags": [],
        "reason": "string"
      },
      "log": null
    }
  }
};

describe('Automated test: communityQuarantineCreate', () => {
  it('expected response. ID:lpc7sl, for {"profile_id":1,"profile_ref":1,"reason":"string","flags":[],"_meta":{"type":"quarantine","elvisType":"action","schemaMap":{"profile_id":"owner_id","profile_ref":"profile_ref","reason":"attributes.reason","flags":"attributes.flags","created_epoch":"created_epoch","deleted_epoch":"deleted_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","id":"id"},"schema":{"properties":{"profile_id":{"type":"integer"},"profile_ref":{"type":"integer"},"reason":{"type":"string"},"flags":{"type":"array","items":{"type":"integer"}},"created_epoch":{"type":"integer"},"deleted_epoch":{"type":"integer"},"modified_epoch":{"type":"integer"},"modified_by":{"type":"integer"},"id":{"type":"integer"}}}}}', (done) => {
    context.mockData = mockData;
    provider.execute('createEntity', {"profile_id":1,"profile_ref":1,"reason":"string","flags":[],"_meta":{"type":"quarantine","elvisType":"action","schemaMap":{"profile_id":"owner_id","profile_ref":"profile_ref","reason":"attributes.reason","flags":"attributes.flags","created_epoch":"created_epoch","deleted_epoch":"deleted_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","id":"id"},"schema":{"properties":{"profile_id":{"type":"integer"},"profile_ref":{"type":"integer"},"reason":{"type":"string"},"flags":{"type":"array","items":{"type":"integer"}},"created_epoch":{"type":"integer"},"deleted_epoch":{"type":"integer"},"modified_epoch":{"type":"integer"},"modified_by":{"type":"integer"},"id":{"type":"integer"}}}}}, context)
      .then(result => {
        assert.deepEqual(result,
            {
  "status": 200,
  "data": {
    "profile_id": 1,
    "profile_ref": 1,
    "reason": "string",
    "flags": [],
    "created_epoch": 1496135643,
    "modified_epoch": 1496135643,
    "id": 3900
  },
  "errors": []
});
        done();
      })
      .catch(result => {
        fail({throw: result}, {
  "status": 200,
  "data": {
    "profile_id": 1,
    "profile_ref": 1,
    "reason": "string",
    "flags": [],
    "created_epoch": 1496135643,
    "modified_epoch": 1496135643,
    "id": 3900
  },
  "errors": []
});
        done();
      });
  });
});
