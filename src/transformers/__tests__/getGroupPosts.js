/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: listEntities {"id":"1","selector":{"type":"post","entity_ref":"1"},"_meta":{"type":"post","elvisType":"entity","schemaMap":{"title":"title","body":"contents","group_id":"entity_ref","media":"attributes.media","profile_id":"owner_id","created_epoch":"created_epoch","deleted_epoch":"deleted_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","id":"id"},"schema":{"properties":{"title":{"type":"string"},"body":{"type":"string"},"group_id":{"type":"integer"},"media":{"properties":{"type":{"type":"string"},"value":{"type":"object"}}},"profile_id":{"type":"number","format":"integer"},"created_epoch":{"type":"integer"},"deleted_epoch":{"type":"integer"},"modified_epoch":{"type":"integer"},"modified_by":{"type":"integer"},"id":{"type":"integer"}}}}}

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
const mockData = {
  "[\"http://localhost:4010/v1/community/1/query\",{\"method\":\"post\",\"json\":{\"Entities\":{\"type\":\"post\",\"entity_ref\":\"1\"},\"SortBy\":\"id\",\"Order\":\"descending\",\"Limit\":2,\"Offset\":0,\"Include\":{\"title\":\"title\",\"body\":\"contents\",\"group_id\":\"entity_ref\",\"media\":\"attributes.media\",\"profile_id\":\"owner_id\",\"created_epoch\":\"created_epoch\",\"deleted_epoch\":\"deleted_epoch\",\"modified_epoch\":\"modified_epoch\",\"modified_by\":\"modified_by\",\"id\":\"id\"}}}]": {
    "data": {
      "Total": 2,
      "NextOffset": null,
      "List": [
        {
          "title": "Ab consectetur nisi",
          "body": "Sint quos at reiciendis dolorem beatae. Mollitia debitis numquam consectetur eveniet. Consequatur qui repellendus nostrum odit voluptatem fugit velit aspernatur ut. Sunt modi omnis totam ipsum aut quibusdam fugiat. Et repellendus autem ea omnis reprehenderit rem rem consequuntur quia.\nAut et consequatur. Sint aperiam temporibus illo aut modi illo. Odit perspiciatis dolores voluptatibus ab commodi qui blanditiis vel.",
          "group_id": 1,
          "profile_id": 469,
          "created_epoch": 1490363218,
          "deleted_epoch": null,
          "modified_epoch": 1490363218,
          "modified_by": null,
          "id": 419
        },
        {
          "title": "At velit perferendis",
          "body": "Aut dolorum sed velit quia sequi eum magni blanditiis cupiditate. Officia quos facilis ut totam et autem velit. Quos alias consequatur quis exercitationem eveniet omnis. Ut ducimus sint animi natus nobis id. Error ducimus est consequuntur. Earum aut harum vero amet.\nNeque assumenda qui porro assumenda qui vel quasi. Provident possimus ipsa et velit est ut neque qui. Quo aspernatur optio sint cum sapiente voluptatem voluptas et. Eos nihil rerum natus et impedit. Mollitia voluptates ea.",
          "group_id": 1,
          "profile_id": 316,
          "created_epoch": 1490363215,
          "deleted_epoch": null,
          "modified_epoch": 1490363215,
          "modified_by": null,
          "id": 340
        }
      ]
    }
  }
};

describe('Automated test: getGroupPosts', () => {
  it('expected response. ID:r3d5rl, for {"id":"1","selector":{"type":"post","entity_ref":"1"},"_meta":{"type":"post","elvisType":"entity","schemaMap":{"title":"title","body":"contents","group_id":"entity_ref","media":"attributes.media","profile_id":"owner_id","created_epoch":"created_epoch","deleted_epoch":"deleted_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","id":"id"},"schema":{"properties":{"title":{"type":"string"},"body":{"type":"string"},"group_id":{"type":"integer"},"media":{"properties":{"type":{"type":"string"},"value":{"type":"object"}}},"profile_id":{"type":"number","format":"integer"},"created_epoch":{"type":"integer"},"deleted_epoch":{"type":"integer"},"modified_epoch":{"type":"integer"},"modified_by":{"type":"integer"},"id":{"type":"integer"}}}}}', (done) => {
    context.mockData = mockData;
    provider.execute('listEntities', {"id":"1","selector":{"type":"post","entity_ref":"1"},"_meta":{"type":"post","elvisType":"entity","schemaMap":{"title":"title","body":"contents","group_id":"entity_ref","media":"attributes.media","profile_id":"owner_id","created_epoch":"created_epoch","deleted_epoch":"deleted_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","id":"id"},"schema":{"properties":{"title":{"type":"string"},"body":{"type":"string"},"group_id":{"type":"integer"},"media":{"properties":{"type":{"type":"string"},"value":{"type":"object"}}},"profile_id":{"type":"number","format":"integer"},"created_epoch":{"type":"integer"},"deleted_epoch":{"type":"integer"},"modified_epoch":{"type":"integer"},"modified_by":{"type":"integer"},"id":{"type":"integer"}}}}}, context)
      .then(result => {
        assert.deepEqual(result,
            {
  "status": 200,
  "data": {
    "Total": 2,
    "NextOffset": null,
    "List": [
      {
        "title": "Ab consectetur nisi",
        "body": "Sint quos at reiciendis dolorem beatae. Mollitia debitis numquam consectetur eveniet. Consequatur qui repellendus nostrum odit voluptatem fugit velit aspernatur ut. Sunt modi omnis totam ipsum aut quibusdam fugiat. Et repellendus autem ea omnis reprehenderit rem rem consequuntur quia.\nAut et consequatur. Sint aperiam temporibus illo aut modi illo. Odit perspiciatis dolores voluptatibus ab commodi qui blanditiis vel.",
        "group_id": 1,
        "profile_id": 469,
        "created_epoch": 1490363218,
        "deleted_epoch": null,
        "modified_epoch": 1490363218,
        "modified_by": null,
        "id": 419
      },
      {
        "title": "At velit perferendis",
        "body": "Aut dolorum sed velit quia sequi eum magni blanditiis cupiditate. Officia quos facilis ut totam et autem velit. Quos alias consequatur quis exercitationem eveniet omnis. Ut ducimus sint animi natus nobis id. Error ducimus est consequuntur. Earum aut harum vero amet.\nNeque assumenda qui porro assumenda qui vel quasi. Provident possimus ipsa et velit est ut neque qui. Quo aspernatur optio sint cum sapiente voluptatem voluptas et. Eos nihil rerum natus et impedit. Mollitia voluptates ea.",
        "group_id": 1,
        "profile_id": 316,
        "created_epoch": 1490363215,
        "deleted_epoch": null,
        "modified_epoch": 1490363215,
        "modified_by": null,
        "id": 340
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
    "Total": 2,
    "NextOffset": null,
    "List": [
      {
        "title": "Ab consectetur nisi",
        "body": "Sint quos at reiciendis dolorem beatae. Mollitia debitis numquam consectetur eveniet. Consequatur qui repellendus nostrum odit voluptatem fugit velit aspernatur ut. Sunt modi omnis totam ipsum aut quibusdam fugiat. Et repellendus autem ea omnis reprehenderit rem rem consequuntur quia.\nAut et consequatur. Sint aperiam temporibus illo aut modi illo. Odit perspiciatis dolores voluptatibus ab commodi qui blanditiis vel.",
        "group_id": 1,
        "profile_id": 469,
        "created_epoch": 1490363218,
        "deleted_epoch": null,
        "modified_epoch": 1490363218,
        "modified_by": null,
        "id": 419
      },
      {
        "title": "At velit perferendis",
        "body": "Aut dolorum sed velit quia sequi eum magni blanditiis cupiditate. Officia quos facilis ut totam et autem velit. Quos alias consequatur quis exercitationem eveniet omnis. Ut ducimus sint animi natus nobis id. Error ducimus est consequuntur. Earum aut harum vero amet.\nNeque assumenda qui porro assumenda qui vel quasi. Provident possimus ipsa et velit est ut neque qui. Quo aspernatur optio sint cum sapiente voluptatem voluptas et. Eos nihil rerum natus et impedit. Mollitia voluptates ea.",
        "group_id": 1,
        "profile_id": 316,
        "created_epoch": 1490363215,
        "deleted_epoch": null,
        "modified_epoch": 1490363215,
        "modified_by": null,
        "id": 340
      }
    ]
  },
  "errors": []
});
        done();
      });
  });
});
