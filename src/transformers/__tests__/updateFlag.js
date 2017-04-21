/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: updateEntity {"id":"309","flag_reason":"nej","modifiedById":2,"_meta":{"type":"flag","elvisType":"action","schemaMap":{"created_epoch":"created_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","id":"id","owner_id":"owner_id","profile_id":"profile_ref","flag_reason":"attributes.flag_reason"},"schema":{"properties":{"created_epoch":{"type":"number","format":"integer"},"modified_epoch":{"type":"number","format":"integer"},"modified_by":{"type":"number","format":"integer"},"id":{"type":"number","format":"integer"},"owner_id":{"type":"number","format":"integer"},"profile_id":{"type":"number","format":"integer"},"flag_reason":{"type":"string"}}}}}

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
    "communityservice": "http://localhost:3001/v1"
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
  "[\"http://localhost:3001/v1/community/1/action/309\",{\"method\":\"put\",\"json\":{\"attributes\":{\"flag_reason\":\"nej\"},\"modified_by\":2}}]": {
    "links": {
      "self": "/v1/community/1/action/309"
    },
    "data": {
      "id": 309,
      "created_epoch": 1492763608,
      "deleted_epoch": null,
      "modified_epoch": 1492764006,
      "modified_by": 2,
      "deleted_by": null,
      "community_id": 1,
      "owner_id": 1,
      "start_epoch": null,
      "end_epoch": null,
      "entity_ref": null,
      "profile_ref": null,
      "type": "flag",
      "attributes": {
        "flag_reason": "nej"
      },
      "log": [
        {
          "modified_by": 2,
          "modified_epoch": 1492764006
        }
      ]
    }
  }
};

describe('Automated test: updateFlag', () => {
  it('expected response. ID:kzvfoe, for {"id":"309","flag_reason":"nej","modifiedById":2,"_meta":{"type":"flag","elvisType":"action","schemaMap":{"created_epoch":"created_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","id":"id","owner_id":"owner_id","profile_id":"profile_ref","flag_reason":"attributes.flag_reason"},"schema":{"properties":{"created_epoch":{"type":"number","format":"integer"},"modified_epoch":{"type":"number","format":"integer"},"modified_by":{"type":"number","format":"integer"},"id":{"type":"number","format":"integer"},"owner_id":{"type":"number","format":"integer"},"profile_id":{"type":"number","format":"integer"},"flag_reason":{"type":"string"}}}}}', (done) => {
    context.mockData = mockData;
    provider.execute('updateEntity', {"id":"309","flag_reason":"nej","modifiedById":2,"_meta":{"type":"flag","elvisType":"action","schemaMap":{"created_epoch":"created_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","id":"id","owner_id":"owner_id","profile_id":"profile_ref","flag_reason":"attributes.flag_reason"},"schema":{"properties":{"created_epoch":{"type":"number","format":"integer"},"modified_epoch":{"type":"number","format":"integer"},"modified_by":{"type":"number","format":"integer"},"id":{"type":"number","format":"integer"},"owner_id":{"type":"number","format":"integer"},"profile_id":{"type":"number","format":"integer"},"flag_reason":{"type":"string"}}}}}, context)
      .then(result => {
        assert.deepEqual(result,
            {
  "status": 200,
  "data": {
    "created_epoch": 1492763608,
    "modified_epoch": 1492764006,
    "modified_by": 2,
    "id": 309,
    "owner_id": 1,
    "flag_reason": "nej"
  },
  "errors": []
});
        done();
      })
      .catch(result => {
        fail({throw: result}, {
  "status": 200,
  "data": {
    "created_epoch": 1492763608,
    "modified_epoch": 1492764006,
    "modified_by": 2,
    "id": 309,
    "owner_id": 1,
    "flag_reason": "nej"
  },
  "errors": []
});
        done();
      });
  });
});
