/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: getSingleProperty {"profile_id":"436","group_id":"32","selector":{"owner_id":"436","entity_ref":"32"},"_meta":{"type":"action","elvisType":"action","schemaMap":{"id":"id","reference":"attributes.reference","profile_id":"owner_id"},"schema":{"properties":{"id":{"type":"integer"}}}}}

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
  "[\"http://localhost:4010/v1/community/1/query\",{\"method\":\"post\",\"json\":{\"Action\":{\"owner_id\":\"436\",\"entity_ref\":\"32\"},\"Include\":{\"id\":\"id\",\"reference\":\"attributes.reference\",\"profile_id\":\"owner_id\"}}}]": {
    "errors": [
      {
        "code": "400",
        "title": "Error during execution of query",
        "detail": "No result from singleton selector",
        "meta": {
          "query": {
            "Action": {
              "owner_id": "436",
              "entity_ref": "32"
            },
            "Include": {
              "id": "id",
              "reference": "attributes.reference",
              "profile_id": "owner_id"
            }
          },
          "subquery": {
            "owner_id": "436",
            "entity_ref": "32"
          },
          "context": {}
        }
      }
    ]
  }
};

describe('Automated test: is-user-following-group', () => {
  it('expected response. ID:fw7nnw, for {"profile_id":"436","group_id":"32","selector":{"owner_id":"436","entity_ref":"32"},"_meta":{"type":"action","elvisType":"action","schemaMap":{"id":"id","reference":"attributes.reference","profile_id":"owner_id"},"schema":{"properties":{"id":{"type":"integer"}}}}}', (done) => {
    context.mockData = mockData;
    provider.execute('getSingleProperty', {"profile_id":"436","group_id":"32","selector":{"owner_id":"436","entity_ref":"32"},"_meta":{"type":"action","elvisType":"action","schemaMap":{"id":"id","reference":"attributes.reference","profile_id":"owner_id"},"schema":{"properties":{"id":{"type":"integer"}}}}}, context)
      .then(result => {
        assert.deepEqual(result,
            {
  "status": 400,
  "error": {
    "code": "400",
    "title": "Error during execution of query",
    "detail": "No result from singleton selector",
    "meta": {
      "query": {
        "Action": {
          "owner_id": "436",
          "entity_ref": "32"
        },
        "Include": {
          "id": "id",
          "reference": "attributes.reference",
          "profile_id": "owner_id"
        }
      },
      "subquery": {
        "owner_id": "436",
        "entity_ref": "32"
      },
      "context": {}
    }
  },
  "data": []
});
        done();
      })
      .catch(result => {
        fail({throw: result}, {
  "status": 400,
  "error": {
    "code": "400",
    "title": "Error during execution of query",
    "detail": "No result from singleton selector",
    "meta": {
      "query": {
        "Action": {
          "owner_id": "436",
          "entity_ref": "32"
        },
        "Include": {
          "id": "id",
          "reference": "attributes.reference",
          "profile_id": "owner_id"
        }
      },
      "subquery": {
        "owner_id": "436",
        "entity_ref": "32"
      },
      "context": {}
    }
  },
  "data": []
});
        done();
      });
  });
});
