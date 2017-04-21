/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: listEntities {"_meta":{"type":"flag","elvisType":"action","schemaMap":{"created_epoch":"created_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","id":"id","owner_id":"owner_id","profile_id":"profile_ref","flag_reason":"attributes.flag_reason"},"schema":{"properties":{"created_epoch":{"type":"number","format":"integer"},"modified_epoch":{"type":"number","format":"integer"},"modified_by":{"type":"number","format":"integer"},"id":{"type":"number","format":"integer"},"owner_id":{"type":"number","format":"integer"},"profile_id":{"type":"number","format":"integer"},"flag_reason":{"type":"string"}}}}}

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
  "[\"http://localhost:3001/v1/community/1/query\",{\"method\":\"post\",\"json\":{\"Actions\":{\"type\":\"flag\"},\"SortBy\":\"id\",\"Order\":\"descending\",\"Limit\":2,\"Offset\":0,\"Include\":{\"created_epoch\":\"created_epoch\",\"modified_epoch\":\"modified_epoch\",\"modified_by\":\"modified_by\",\"id\":\"id\",\"owner_id\":\"owner_id\",\"profile_id\":\"profile_ref\",\"flag_reason\":\"attributes.flag_reason\"}}}]": {
    "data": {
      "Total": 1,
      "NextOffset": null,
      "List": [
        {
          "created_epoch": 1492763734,
          "modified_epoch": 1492763734,
          "modified_by": null,
          "id": 310,
          "owner_id": 1,
          "profile_id": null
        }
      ]
    }
  }
};

describe('Automated test: listFlags', () => {
  it('expected response. ID:ew7xfc, for {"_meta":{"type":"flag","elvisType":"action","schemaMap":{"created_epoch":"created_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","id":"id","owner_id":"owner_id","profile_id":"profile_ref","flag_reason":"attributes.flag_reason"},"schema":{"properties":{"created_epoch":{"type":"number","format":"integer"},"modified_epoch":{"type":"number","format":"integer"},"modified_by":{"type":"number","format":"integer"},"id":{"type":"number","format":"integer"},"owner_id":{"type":"number","format":"integer"},"profile_id":{"type":"number","format":"integer"},"flag_reason":{"type":"string"}}}}}', (done) => {
    context.mockData = mockData;
    provider.execute('listEntities', {"_meta":{"type":"flag","elvisType":"action","schemaMap":{"created_epoch":"created_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","id":"id","owner_id":"owner_id","profile_id":"profile_ref","flag_reason":"attributes.flag_reason"},"schema":{"properties":{"created_epoch":{"type":"number","format":"integer"},"modified_epoch":{"type":"number","format":"integer"},"modified_by":{"type":"number","format":"integer"},"id":{"type":"number","format":"integer"},"owner_id":{"type":"number","format":"integer"},"profile_id":{"type":"number","format":"integer"},"flag_reason":{"type":"string"}}}}}, context)
      .then(result => {
        assert.deepEqual(result,
            {
  "status": 200,
  "data": {
    "Total": 1,
    "NextOffset": null,
    "List": [
      {
        "created_epoch": 1492763734,
        "modified_epoch": 1492763734,
        "modified_by": null,
        "id": 310,
        "owner_id": 1,
        "profile_id": null
      }
    ]
  },
  "errors": []
});
        done();
      })
      .catch(result => {
        fail({throw: result}, {
  "status": 200,
  "data": {
    "Total": 1,
    "NextOffset": null,
    "List": [
      {
        "created_epoch": 1492763734,
        "modified_epoch": 1492763734,
        "modified_by": null,
        "id": 310,
        "owner_id": 1,
        "profile_id": null
      }
    ]
  },
  "errors": []
});
        done();
      });
  });
});
