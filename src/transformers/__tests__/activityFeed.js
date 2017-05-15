/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: getEntity {"id":"28","limit":"1","offset":"0","include":[{"name":"activity_likes","limit":"1","offset":"0"},{"name":"activity_follows","limit":"1","offset":"0"},{"name":"activity_flags","limit":"1","offset":"0"},{"name":"activity_groups","limit":"1","offset":"0"},{"name":"activity_posts","limit":"1","offset":"0"},{"name":"activity_comments","limit":"1","offset":"0"},{"name":"activity_reviews","limit":"1","offset":"0"}],"selector":{"id":"28"},"_meta":{"elvisType":"profile","schemaMap":{"username":"name","displayName":"attributes.displayName","description":"attributes.description","email":"attributes.email","phone":"attributes.phone","created_epoch":"created_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","deleted_epoch":"deleted_epoch","birthday":"attributes.birthday","fullName":"attributes.fullName","id":"id"},"schema":{"type":"object","properties":{"username":{"type":"string"},"displayName":{"type":"string"},"description":{"type":"string"},"email":{"type":"string"},"phone":{"type":"string"},"created_epoch":{"type":"integer","readOnly":true},"modified_epoch":{"type":"integer","readOnly":true},"modified_by":{"type":"integer"},"deleted_epoch":{"type":"integer","readOnly":true},"birthday":{"type":"string","format":"date"},"fullName":{"type":"string"},"id":{"type":"integer","readOnly":true}},"required":["username"],"additionalProperties":false}}}

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
  "communityservice": {
    "id": "XXXXX"
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
  "[\"http://localhost:4010/v1/community/1/query\",{\"method\":\"post\",\"json\":{\"Profiles\":{\"id\":\"28\"},\"Limit\":1,\"Include\":{\"username\":\"name\",\"displayName\":\"attributes.displayName\",\"description\":\"attributes.description\",\"email\":\"attributes.email\",\"phone\":\"attributes.phone\",\"created_epoch\":\"created_epoch\",\"modified_epoch\":\"modified_epoch\",\"modified_by\":\"modified_by\",\"deleted_epoch\":\"deleted_epoch\",\"birthday\":\"attributes.birthday\",\"fullName\":\"attributes.fullName\",\"id\":\"id\",\"activity_likes\":{\"Actions\":{\"type\":\"like\",\"owner_id\":\"^id\"},\"Include\":{\"reference\":\"attributes.reference\",\"profile_id\":\"owner_id\",\"created_epoch\":\"created_epoch\",\"deleted_epoch\":\"deleted_epoch\",\"modified_epoch\":\"modified_epoch\",\"modified_by\":\"modified_by\",\"id\":\"id\"},\"Limit\":\"1\",\"Offset\":\"0\",\"SortBy\":\"created_epoch\",\"Order\":\"ascending\"},\"activity_follows\":{\"Actions\":{\"type\":\"follow\",\"owner_id\":\"^id\"},\"Include\":{\"reference\":\"attributes.reference\",\"profile_id\":\"owner_id\",\"id\":\"id\"},\"Limit\":\"1\",\"Offset\":\"0\",\"SortBy\":\"created_epoch\",\"Order\":\"ascending\"},\"activity_flags\":{\"Actions\":{\"type\":\"flag\",\"owner_id\":\"^id\"},\"Include\":{\"reason\":\"attributes.reason\",\"reference\":\"attributes.reference\",\"profile_id\":\"owner_id\",\"created_epoch\":\"created_epoch\",\"deleted_epoch\":\"deleted_epoch\",\"modified_epoch\":\"modified_epoch\",\"modified_by\":\"modified_by\",\"id\":\"id\"},\"Limit\":\"1\",\"Offset\":\"0\",\"SortBy\":\"created_epoch\",\"Order\":\"ascending\"},\"activity_groups\":{\"Entities\":{\"type\":\"group\",\"owner_id\":\"^id\"},\"Include\":{\"title\":\"title\",\"body\":\"contents\",\"media\":\"attributes.media\",\"profile_id\":\"owner_id\",\"created_epoch\":\"created_epoch\",\"deleted_epoch\":\"deleted_epoch\",\"modified_epoch\":\"modified_epoch\",\"modified_by\":\"modified_by\",\"id\":\"id\"},\"Limit\":\"1\",\"Offset\":\"0\",\"SortBy\":\"created_epoch\",\"Order\":\"ascending\"},\"activity_posts\":{\"Entities\":{\"type\":\"post\",\"owner_id\":\"^id\"},\"Include\":{\"title\":\"title\",\"body\":\"contents\",\"group_id\":\"entity_ref\",\"media\":\"attributes.media\",\"profile_id\":\"owner_id\",\"created_epoch\":\"created_epoch\",\"deleted_epoch\":\"deleted_epoch\",\"modified_epoch\":\"modified_epoch\",\"modified_by\":\"modified_by\",\"id\":\"id\"},\"Limit\":\"1\",\"Offset\":\"0\",\"SortBy\":\"created_epoch\",\"Order\":\"ascending\"},\"activity_comments\":{\"Entities\":{\"type\":\"comment\",\"owner_id\":\"^id\"},\"Include\":{\"title\":\"title\",\"body\":\"contents\",\"post_id\":\"entity_ref\",\"media\":\"attributes.media\",\"profile_id\":\"owner_id\",\"created_epoch\":\"created_epoch\",\"deleted_epoch\":\"deleted_epoch\",\"modified_epoch\":\"modified_epoch\",\"modified_by\":\"modified_by\",\"id\":\"id\"},\"Limit\":\"1\",\"Offset\":\"0\",\"SortBy\":\"created_epoch\",\"Order\":\"ascending\"},\"activity_reviews\":{\"Entities\":{\"type\":\"review\",\"owner_id\":\"^id\"},\"Include\":{\"title\":\"title\",\"body\":\"contents\",\"rating\":\"attributes.rating\",\"reference\":\"entity_ref\",\"media\":\"attributes.media\",\"profile_id\":\"owner_id\",\"created_epoch\":\"created_epoch\",\"deleted_epoch\":\"deleted_epoch\",\"modified_epoch\":\"modified_epoch\",\"modified_by\":\"modified_by\",\"id\":\"id\"},\"Limit\":\"1\",\"Offset\":\"0\",\"SortBy\":\"created_epoch\",\"Order\":\"ascending\"}}}}]": {
    "data": {
      "Total": 1,
      "NextOffset": null,
      "List": [
        {
          "username": "Jalyn",
          "email": "Katarina.Hyatt24@gmail.com",
          "created_epoch": 1494315118,
          "modified_epoch": 1494315118,
          "modified_by": null,
          "deleted_epoch": null,
          "id": 28,
          "activity_likes": {
            "Total": 37,
            "NextOffset": 1,
            "List": [
              {
                "profile_id": 28,
                "created_epoch": 1494315181,
                "deleted_epoch": null,
                "modified_epoch": 1494315181,
                "modified_by": null,
                "id": 418
              }
            ]
          },
          "activity_follows": {
            "Total": 3,
            "NextOffset": 1,
            "List": [
              {
                "profile_id": 28,
                "id": 3416
              }
            ]
          },
          "activity_flags": {
            "Total": 0,
            "NextOffset": null,
            "List": []
          },
          "activity_groups": {
            "Total": 0,
            "NextOffset": null,
            "List": []
          },
          "activity_posts": {
            "Total": 36,
            "NextOffset": 1,
            "List": [
              {
                "title": "Dolorem exercitationem asperiores",
                "body": "Voluptas nesciunt laboriosam et velit non ut ab numquam. Impedit eos et iste quas sit ut nihil mollitia. Laudantium ad ipsum quod dolorem neque quod earum eos. Accusantium eos odit deserunt voluptatem. Pariatur doloribus sequi.\nSaepe harum et omnis. Nesciunt occaecati sunt. Voluptas quo minima aliquam odio a consequatur veritatis dignissimos reprehenderit. Ut consequatur explicabo quod in et porro. Et neque ut est voluptatem magni suscipit vel inventore dolorem.",
                "group_id": 77,
                "profile_id": 28,
                "created_epoch": 1494315128,
                "deleted_epoch": null,
                "modified_epoch": 1494315128,
                "modified_by": null,
                "id": 218
              }
            ]
          },
          "activity_comments": {
            "Total": 0,
            "NextOffset": null,
            "List": []
          },
          "activity_reviews": {
            "Total": 10,
            "NextOffset": 1,
            "List": [
              {
                "title": "Explicabo accusamus ratione",
                "body": "Nostrum facilis est omnis. Eaque perferendis quia accusantium doloremque non quia natus quam blanditiis. Possimus dolores impedit ullam. Quis magnam assumenda.\nAccusamus provident eum eaque vel illo temporibus aut. Temporibus quas iusto vel consequatur veniam impedit. Sapiente qui accusantium est quo qui fugit ut.",
                "rating": 3,
                "reference": 77,
                "profile_id": 28,
                "created_epoch": 1494315132,
                "deleted_epoch": null,
                "modified_epoch": 1494315132,
                "modified_by": null,
                "id": 714
              }
            ]
          }
        }
      ]
    }
  }
};

describe('Automated test: activityFeed', () => {
  it('expected response. ID:ycdkgt, for {"id":"28","limit":"1","offset":"0","include":[{"name":"activity_likes","limit":"1","offset":"0"},{"name":"activity_follows","limit":"1","offset":"0"},{"name":"activity_flags","limit":"1","offset":"0"},{"name":"activity_groups","limit":"1","offset":"0"},{"name":"activity_posts","limit":"1","offset":"0"},{"name":"activity_comments","limit":"1","offset":"0"},{"name":"activity_reviews","limit":"1","offset":"0"}],"selector":{"id":"28"},"_meta":{"elvisType":"profile","schemaMap":{"username":"name","displayName":"attributes.displayName","description":"attributes.description","email":"attributes.email","phone":"attributes.phone","created_epoch":"created_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","deleted_epoch":"deleted_epoch","birthday":"attributes.birthday","fullName":"attributes.fullName","id":"id"},"schema":{"type":"object","properties":{"username":{"type":"string"},"displayName":{"type":"string"},"description":{"type":"string"},"email":{"type":"string"},"phone":{"type":"string"},"created_epoch":{"type":"integer","readOnly":true},"modified_epoch":{"type":"integer","readOnly":true},"modified_by":{"type":"integer"},"deleted_epoch":{"type":"integer","readOnly":true},"birthday":{"type":"string","format":"date"},"fullName":{"type":"string"},"id":{"type":"integer","readOnly":true}},"required":["username"],"additionalProperties":false}}}', (done) => {
    context.mockData = mockData;
    provider.execute('getEntity', {"id":"28","limit":"1","offset":"0","include":[{"name":"activity_likes","limit":"1","offset":"0"},{"name":"activity_follows","limit":"1","offset":"0"},{"name":"activity_flags","limit":"1","offset":"0"},{"name":"activity_groups","limit":"1","offset":"0"},{"name":"activity_posts","limit":"1","offset":"0"},{"name":"activity_comments","limit":"1","offset":"0"},{"name":"activity_reviews","limit":"1","offset":"0"}],"selector":{"id":"28"},"_meta":{"elvisType":"profile","schemaMap":{"username":"name","displayName":"attributes.displayName","description":"attributes.description","email":"attributes.email","phone":"attributes.phone","created_epoch":"created_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","deleted_epoch":"deleted_epoch","birthday":"attributes.birthday","fullName":"attributes.fullName","id":"id"},"schema":{"type":"object","properties":{"username":{"type":"string"},"displayName":{"type":"string"},"description":{"type":"string"},"email":{"type":"string"},"phone":{"type":"string"},"created_epoch":{"type":"integer","readOnly":true},"modified_epoch":{"type":"integer","readOnly":true},"modified_by":{"type":"integer"},"deleted_epoch":{"type":"integer","readOnly":true},"birthday":{"type":"string","format":"date"},"fullName":{"type":"string"},"id":{"type":"integer","readOnly":true}},"required":["username"],"additionalProperties":false}}}, context)
      .then(result => {
        assert.deepEqual(result,
            {
  "status": 200,
  "data": {
    "username": "Jalyn",
    "email": "Katarina.Hyatt24@gmail.com",
    "created_epoch": 1494315118,
    "modified_epoch": 1494315118,
    "modified_by": null,
    "deleted_epoch": null,
    "id": 28,
    "activity_likes": {
      "Total": 37,
      "NextOffset": 1,
      "List": [
        {
          "profile_id": 28,
          "created_epoch": 1494315181,
          "deleted_epoch": null,
          "modified_epoch": 1494315181,
          "modified_by": null,
          "id": 418
        }
      ]
    },
    "activity_follows": {
      "Total": 3,
      "NextOffset": 1,
      "List": [
        {
          "profile_id": 28,
          "id": 3416
        }
      ]
    },
    "activity_flags": {
      "Total": 0,
      "NextOffset": null,
      "List": []
    },
    "activity_groups": {
      "Total": 0,
      "NextOffset": null,
      "List": []
    },
    "activity_posts": {
      "Total": 36,
      "NextOffset": 1,
      "List": [
        {
          "title": "Dolorem exercitationem asperiores",
          "body": "Voluptas nesciunt laboriosam et velit non ut ab numquam. Impedit eos et iste quas sit ut nihil mollitia. Laudantium ad ipsum quod dolorem neque quod earum eos. Accusantium eos odit deserunt voluptatem. Pariatur doloribus sequi.\nSaepe harum et omnis. Nesciunt occaecati sunt. Voluptas quo minima aliquam odio a consequatur veritatis dignissimos reprehenderit. Ut consequatur explicabo quod in et porro. Et neque ut est voluptatem magni suscipit vel inventore dolorem.",
          "group_id": 77,
          "profile_id": 28,
          "created_epoch": 1494315128,
          "deleted_epoch": null,
          "modified_epoch": 1494315128,
          "modified_by": null,
          "id": 218
        }
      ]
    },
    "activity_comments": {
      "Total": 0,
      "NextOffset": null,
      "List": []
    },
    "activity_reviews": {
      "Total": 10,
      "NextOffset": 1,
      "List": [
        {
          "title": "Explicabo accusamus ratione",
          "body": "Nostrum facilis est omnis. Eaque perferendis quia accusantium doloremque non quia natus quam blanditiis. Possimus dolores impedit ullam. Quis magnam assumenda.\nAccusamus provident eum eaque vel illo temporibus aut. Temporibus quas iusto vel consequatur veniam impedit. Sapiente qui accusantium est quo qui fugit ut.",
          "rating": 3,
          "reference": 77,
          "profile_id": 28,
          "created_epoch": 1494315132,
          "deleted_epoch": null,
          "modified_epoch": 1494315132,
          "modified_by": null,
          "id": 714
        }
      ]
    }
  },
  "errors": []
});
        done();
      })
      .catch(result => {
        fail({throw: result}, {
  "status": 200,
  "data": {
    "username": "Jalyn",
    "email": "Katarina.Hyatt24@gmail.com",
    "created_epoch": 1494315118,
    "modified_epoch": 1494315118,
    "modified_by": null,
    "deleted_epoch": null,
    "id": 28,
    "activity_likes": {
      "Total": 37,
      "NextOffset": 1,
      "List": [
        {
          "profile_id": 28,
          "created_epoch": 1494315181,
          "deleted_epoch": null,
          "modified_epoch": 1494315181,
          "modified_by": null,
          "id": 418
        }
      ]
    },
    "activity_follows": {
      "Total": 3,
      "NextOffset": 1,
      "List": [
        {
          "profile_id": 28,
          "id": 3416
        }
      ]
    },
    "activity_flags": {
      "Total": 0,
      "NextOffset": null,
      "List": []
    },
    "activity_groups": {
      "Total": 0,
      "NextOffset": null,
      "List": []
    },
    "activity_posts": {
      "Total": 36,
      "NextOffset": 1,
      "List": [
        {
          "title": "Dolorem exercitationem asperiores",
          "body": "Voluptas nesciunt laboriosam et velit non ut ab numquam. Impedit eos et iste quas sit ut nihil mollitia. Laudantium ad ipsum quod dolorem neque quod earum eos. Accusantium eos odit deserunt voluptatem. Pariatur doloribus sequi.\nSaepe harum et omnis. Nesciunt occaecati sunt. Voluptas quo minima aliquam odio a consequatur veritatis dignissimos reprehenderit. Ut consequatur explicabo quod in et porro. Et neque ut est voluptatem magni suscipit vel inventore dolorem.",
          "group_id": 77,
          "profile_id": 28,
          "created_epoch": 1494315128,
          "deleted_epoch": null,
          "modified_epoch": 1494315128,
          "modified_by": null,
          "id": 218
        }
      ]
    },
    "activity_comments": {
      "Total": 0,
      "NextOffset": null,
      "List": []
    },
    "activity_reviews": {
      "Total": 10,
      "NextOffset": 1,
      "List": [
        {
          "title": "Explicabo accusamus ratione",
          "body": "Nostrum facilis est omnis. Eaque perferendis quia accusantium doloremque non quia natus quam blanditiis. Possimus dolores impedit ullam. Quis magnam assumenda.\nAccusamus provident eum eaque vel illo temporibus aut. Temporibus quas iusto vel consequatur veniam impedit. Sapiente qui accusantium est quo qui fugit ut.",
          "rating": 3,
          "reference": 77,
          "profile_id": 28,
          "created_epoch": 1494315132,
          "deleted_epoch": null,
          "modified_epoch": 1494315132,
          "modified_by": null,
          "id": 714
        }
      ]
    }
  },
  "errors": []
});
        done();
      });
  });
});
