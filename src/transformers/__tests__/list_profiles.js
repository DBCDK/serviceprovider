/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: listEntities {"_meta":{"type":null,"elvisType":"profile","schemaMap":{"username":"name","displayName":"attributes.displayName","description":"attributes.description","email":"attributes.email","phone":"attributes.phone","created_epoch":"created_epoch","modified_epoch":"modified_epoch","birthday":"attributes.birthday","fullName":"attributes.fullName","id":"id","deleted_epoch":"deleted_epoch"},"schema":{"type":"object","properties":{"username":{"type":"string"},"displayName":{"type":"string"},"description":{"type":"string"},"email":{"type":"string"},"phone":{"type":"string"},"created_epoch":{"type":"number","format":"integer","readOnly":true},"modified_epoch":{"type":"number","format":"integer","readOnly":true},"birthday":{"type":"string","format":"date"},"fullName":{"type":"string"},"id":{"type":"number","format":"integer","readOnly":true}},"required":["username"],"additionalProperties":false}}}

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
    "communityservice": "http://communitybe-s01:8000/v1"
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
  "[\"http://communitybe-s01:8000/v1/community/1/query\",{\"method\":\"post\",\"json\":{\"Profiles\":{},\"SortBy\":\"created_epoch\",\"Order\":\"descending\",\"Limit\":2,\"Offset\":0,\"Include\":{\"username\":\"name\",\"displayName\":\"attributes.displayName\",\"description\":\"attributes.description\",\"email\":\"attributes.email\",\"phone\":\"attributes.phone\",\"created_epoch\":\"created_epoch\",\"modified_epoch\":\"modified_epoch\",\"birthday\":\"attributes.birthday\",\"fullName\":\"attributes.fullName\",\"id\":\"id\",\"deleted_epoch\":\"deleted_epoch\"}}}]": {
    "data": {
      "Total": 4,
      "NextOffset": 2,
      "List": [
        {
          "username": "larsens",
          "created_epoch": 1491988700,
          "modified_epoch": 1491988700,
          "id": 4,
          "deleted_epoch": null
        },
        {
          "username": "larsen",
          "created_epoch": 1491988603,
          "modified_epoch": 1491988603,
          "id": 3,
          "deleted_epoch": null
        }
      ]
    }
  }
};

describe('Automated test: list_profiles', () => {
  it('expected response. ID:mj2nyb, for {"_meta":{"type":null,"elvisType":"profile","schemaMap":{"username":"name","displayName":"attributes.displayName","description":"attributes.description","email":"attributes.email","phone":"attributes.phone","created_epoch":"created_epoch","modified_epoch":"modified_epoch","birthday":"attributes.birthday","fullName":"attributes.fullName","id":"id","deleted_epoch":"deleted_epoch"},"schema":{"type":"object","properties":{"username":{"type":"string"},"displayName":{"type":"string"},"description":{"type":"string"},"email":{"type":"string"},"phone":{"type":"string"},"created_epoch":{"type":"number","format":"integer","readOnly":true},"modified_epoch":{"type":"number","format":"integer","readOnly":true},"birthday":{"type":"string","format":"date"},"fullName":{"type":"string"},"id":{"type":"number","format":"integer","readOnly":true}},"required":["username"],"additionalProperties":false}}}', (done) => {
    context.mockData = mockData;
    provider.execute('listEntities', {"_meta":{"type":null,"elvisType":"profile","schemaMap":{"username":"name","displayName":"attributes.displayName","description":"attributes.description","email":"attributes.email","phone":"attributes.phone","created_epoch":"created_epoch","modified_epoch":"modified_epoch","birthday":"attributes.birthday","fullName":"attributes.fullName","id":"id","deleted_epoch":"deleted_epoch"},"schema":{"type":"object","properties":{"username":{"type":"string"},"displayName":{"type":"string"},"description":{"type":"string"},"email":{"type":"string"},"phone":{"type":"string"},"created_epoch":{"type":"number","format":"integer","readOnly":true},"modified_epoch":{"type":"number","format":"integer","readOnly":true},"birthday":{"type":"string","format":"date"},"fullName":{"type":"string"},"id":{"type":"number","format":"integer","readOnly":true}},"required":["username"],"additionalProperties":false}}}, context)
      .then(result => {
        assert.deepEqual(result,
            {
  "status": 200,
  "data": {
    "Total": 4,
    "NextOffset": 2,
    "List": [
      {
        "username": "larsens",
        "created_epoch": 1491988700,
        "modified_epoch": 1491988700,
        "id": 4,
        "deleted_epoch": null
      },
      {
        "username": "larsen",
        "created_epoch": 1491988603,
        "modified_epoch": 1491988603,
        "id": 3,
        "deleted_epoch": null
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
    "Total": 4,
    "NextOffset": 2,
    "List": [
      {
        "username": "larsens",
        "created_epoch": 1491988700,
        "modified_epoch": 1491988700,
        "id": 4,
        "deleted_epoch": null
      },
      {
        "username": "larsen",
        "created_epoch": 1491988603,
        "modified_epoch": 1491988603,
        "id": 3,
        "deleted_epoch": null
      }
    ]
  },
  "errors": []
});
        done();
      });
  });
});
