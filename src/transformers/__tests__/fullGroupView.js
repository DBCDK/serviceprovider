/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: getEntity {"id":"1","postLimit":"1","commentLimit":"2","commentOffset":"0","include":["owner",{"counts":["likes","flags","comments"],"name":"posts","limit":"1","offset":0,"include":["owner",{"counts":["likes","flags"],"name":"comments","limit":"2","offset":"0","include":["owner"]}]}],"counts":["posts","likes","flags","follows"],"selector":{"type":"group","id":"1"},"_meta":{"type":"group","elvisType":"entity","schemaMap":{"title":"title","body":"contents","media":"attributes.media","profile_id":"owner_id","created_epoch":"created_epoch","deleted_epoch":"deleted_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","id":"id"},"schema":{"properties":{"title":{"type":"string"},"body":{"type":"string"},"media":{"properties":{"type":{"type":"string"},"value":{"type":"object"}}},"profile_id":{"type":"number","format":"integer"},"created_epoch":{"type":"integer"},"deleted_epoch":{"type":"integer"},"modified_epoch":{"type":"integer"},"modified_by":{"type":"integer"},"id":{"type":"integer"}}}}}

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
  "[\"http://localhost:4010/v1/community/1/query\",{\"method\":\"post\",\"json\":{\"Entities\":{\"id\":\"1\",\"type\":\"group\"},\"Limit\":1,\"Include\":{\"title\":\"title\",\"body\":\"contents\",\"media\":\"attributes.media\",\"profile_id\":\"owner_id\",\"created_epoch\":\"created_epoch\",\"deleted_epoch\":\"deleted_epoch\",\"modified_epoch\":\"modified_epoch\",\"modified_by\":\"modified_by\",\"id\":\"id\",\"owner\":{\"Profile\":{\"id\":\"^owner_id\"},\"Include\":{\"id\":\"id\",\"modified_epoch\":\"modified_epoch\",\"created_epoch\":\"created_epoch\",\"deleted_epoch\":\"deleted_epoch\",\"username\":\"name\",\"modified_by\":\"modified_by\",\"email\":\"attributes.email\",\"displayName\":\"attributes.displayName\",\"description\":\"attributes.description\",\"phone\":\"attributes.phone\",\"birthday\":\"attributes.birthday\",\"fullName\":\"attributes.fullName\"}},\"posts\":{\"Entities\":{\"type\":\"post\",\"entity_ref\":\"^id\"},\"Limit\":\"1\",\"Offset\":0,\"Include\":{\"title\":\"title\",\"body\":\"contents\",\"group_id\":\"entity_ref\",\"media\":\"attributes.media\",\"profile_id\":\"owner_id\",\"created_epoch\":\"created_epoch\",\"deleted_epoch\":\"deleted_epoch\",\"modified_epoch\":\"modified_epoch\",\"modified_by\":\"modified_by\",\"id\":\"id\",\"owner\":{\"Profile\":{\"id\":\"^owner_id\"},\"Include\":{\"id\":\"id\",\"modified_epoch\":\"modified_epoch\",\"created_epoch\":\"created_epoch\",\"deleted_epoch\":\"deleted_epoch\",\"username\":\"name\",\"modified_by\":\"modified_by\",\"email\":\"attributes.email\",\"displayName\":\"attributes.displayName\",\"description\":\"attributes.description\",\"phone\":\"attributes.phone\",\"birthday\":\"attributes.birthday\",\"fullName\":\"attributes.fullName\"}},\"comments\":{\"Entities\":{\"type\":\"comment\",\"entity_ref\":\"^id\"},\"Limit\":\"2\",\"Offset\":\"0\",\"Include\":{\"title\":\"title\",\"body\":\"contents\",\"post_id\":\"entity_ref\",\"media\":\"attributes.media\",\"profile_id\":\"owner_id\",\"created_epoch\":\"created_epoch\",\"deleted_epoch\":\"deleted_epoch\",\"modified_epoch\":\"modified_epoch\",\"modified_by\":\"modified_by\",\"id\":\"id\",\"owner\":{\"Profile\":{\"id\":\"^owner_id\"},\"Include\":{\"id\":\"id\",\"modified_epoch\":\"modified_epoch\",\"created_epoch\":\"created_epoch\",\"deleted_epoch\":\"deleted_epoch\",\"username\":\"name\",\"modified_by\":\"modified_by\",\"email\":\"attributes.email\",\"displayName\":\"attributes.displayName\",\"description\":\"attributes.description\",\"phone\":\"attributes.phone\",\"birthday\":\"attributes.birthday\",\"fullName\":\"attributes.fullName\"}},\"likesCount\":{\"CountActions\":{\"type\":\"like\",\"entity_ref\":\"^id\"}},\"flagsCount\":{\"CountActions\":{\"type\":\"flag\",\"entity_ref\":\"^id\"}}}},\"likesCount\":{\"CountActions\":{\"type\":\"like\",\"entity_ref\":\"^id\"}},\"flagsCount\":{\"CountActions\":{\"type\":\"flag\",\"entity_ref\":\"^id\"}},\"commentsCount\":{\"CountEntities\":{\"type\":\"comment\",\"entity_ref\":\"^id\"}}}},\"postsCount\":{\"CountEntities\":{\"type\":\"post\",\"entity_ref\":\"^id\"}},\"likesCount\":{\"CountActions\":{\"type\":\"like\",\"entity_ref\":\"^id\"}},\"flagsCount\":{\"CountActions\":{\"type\":\"flag\",\"entity_ref\":\"^id\"}},\"followsCount\":{\"CountActions\":{\"type\":\"member\",\"entity_ref\":\"^id\"}}}}}]": {
    "data": {
      "Total": 1,
      "NextOffset": null,
      "List": [
        {
          "title": "Repellat corrupti laudantium",
          "body": "Aspernatur ea ea veritatis aut consequatur dicta doloribus illo. Facere molestiae in quisquam aut. Quae ab quos consectetur eaque.\nMolestiae labore ea harum sint eum qui veniam commodi cumque. Natus rerum ut. Aut dolor accusamus explicabo. Impedit quibusdam aut. Error aut aut. Exercitationem odit voluptatem qui ut aliquid.",
          "profile_id": 505,
          "created_epoch": 1490363188,
          "deleted_epoch": null,
          "modified_epoch": 1490363188,
          "modified_by": null,
          "id": 1,
          "owner": {
            "id": 505,
            "modified_epoch": 1490363169,
            "created_epoch": 1490363169,
            "deleted_epoch": null,
            "username": "Tyra",
            "modified_by": null,
            "email": "Theo_Collier78@yahoo.com"
          },
          "posts": {
            "Total": 2,
            "NextOffset": 1,
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
                "id": 419,
                "owner": {
                  "id": 469,
                  "modified_epoch": 1490363167,
                  "created_epoch": 1490363167,
                  "deleted_epoch": null,
                  "username": "Austin",
                  "modified_by": null,
                  "email": "Adell.Ward99@yahoo.com"
                },
                "comments": {
                  "Total": 5,
                  "NextOffset": 2,
                  "List": [
                    {
                      "title": "some tiel",
                      "body": "sdsfsdf",
                      "post_id": 419,
                      "media": {
                        "type": "image",
                        "value": {
                          "full": "http://lorempixel.com/1600/800/",
                          "thumb": "http://lorempixel.com/400/200/"
                        }
                      },
                      "profile_id": 1,
                      "created_epoch": 1493897689,
                      "deleted_epoch": null,
                      "modified_epoch": 1493897689,
                      "modified_by": null,
                      "id": 6496,
                      "owner": {
                        "id": 1,
                        "modified_epoch": 1490363149,
                        "created_epoch": 1490363149,
                        "deleted_epoch": null,
                        "username": "Marjolaine",
                        "modified_by": null,
                        "email": "Jazmyn_Gleason@gmail.com"
                      },
                      "likesCount": 0,
                      "flagsCount": 0
                    },
                    {
                      "title": "some tiel",
                      "body": "sdsfsdf",
                      "post_id": 419,
                      "media": {
                        "type": "image",
                        "value": {
                          "full": "http://lorempixel.com/1600/800/",
                          "thumb": "http://lorempixel.com/400/200/"
                        }
                      },
                      "profile_id": 1,
                      "created_epoch": 1493897631,
                      "deleted_epoch": null,
                      "modified_epoch": 1493897631,
                      "modified_by": null,
                      "id": 6495,
                      "owner": {
                        "id": 1,
                        "modified_epoch": 1490363149,
                        "created_epoch": 1490363149,
                        "deleted_epoch": null,
                        "username": "Marjolaine",
                        "modified_by": null,
                        "email": "Jazmyn_Gleason@gmail.com"
                      },
                      "likesCount": 0,
                      "flagsCount": 0
                    }
                  ]
                },
                "likesCount": 1,
                "flagsCount": 0,
                "commentsCount": 5
              }
            ]
          },
          "postsCount": 2,
          "likesCount": 2,
          "flagsCount": 2,
          "followsCount": 2
        }
      ]
    }
  }
};

describe('Automated test: fullGroupView', () => {
  it('expected response. ID:pdisbw, for {"id":"1","postLimit":"1","commentLimit":"2","commentOffset":"0","include":["owner",{"counts":["likes","flags","comments"],"name":"posts","limit":"1","offset":0,"include":["owner",{"counts":["likes","flags"],"name":"comments","limit":"2","offset":"0","include":["owner"]}]}],"counts":["posts","likes","flags","follows"],"selector":{"type":"group","id":"1"},"_meta":{"type":"group","elvisType":"entity","schemaMap":{"title":"title","body":"contents","media":"attributes.media","profile_id":"owner_id","created_epoch":"created_epoch","deleted_epoch":"deleted_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","id":"id"},"schema":{"properties":{"title":{"type":"string"},"body":{"type":"string"},"media":{"properties":{"type":{"type":"string"},"value":{"type":"object"}}},"profile_id":{"type":"number","format":"integer"},"created_epoch":{"type":"integer"},"deleted_epoch":{"type":"integer"},"modified_epoch":{"type":"integer"},"modified_by":{"type":"integer"},"id":{"type":"integer"}}}}}', (done) => {
    context.mockData = mockData;
    provider.execute('getEntity', {"id":"1","postLimit":"1","commentLimit":"2","commentOffset":"0","include":["owner",{"counts":["likes","flags","comments"],"name":"posts","limit":"1","offset":0,"include":["owner",{"counts":["likes","flags"],"name":"comments","limit":"2","offset":"0","include":["owner"]}]}],"counts":["posts","likes","flags","follows"],"selector":{"type":"group","id":"1"},"_meta":{"type":"group","elvisType":"entity","schemaMap":{"title":"title","body":"contents","media":"attributes.media","profile_id":"owner_id","created_epoch":"created_epoch","deleted_epoch":"deleted_epoch","modified_epoch":"modified_epoch","modified_by":"modified_by","id":"id"},"schema":{"properties":{"title":{"type":"string"},"body":{"type":"string"},"media":{"properties":{"type":{"type":"string"},"value":{"type":"object"}}},"profile_id":{"type":"number","format":"integer"},"created_epoch":{"type":"integer"},"deleted_epoch":{"type":"integer"},"modified_epoch":{"type":"integer"},"modified_by":{"type":"integer"},"id":{"type":"integer"}}}}}, context)
      .then(result => {
        assert.deepEqual(result,
            {
  "status": 200,
  "data": {
    "title": "Repellat corrupti laudantium",
    "body": "Aspernatur ea ea veritatis aut consequatur dicta doloribus illo. Facere molestiae in quisquam aut. Quae ab quos consectetur eaque.\nMolestiae labore ea harum sint eum qui veniam commodi cumque. Natus rerum ut. Aut dolor accusamus explicabo. Impedit quibusdam aut. Error aut aut. Exercitationem odit voluptatem qui ut aliquid.",
    "profile_id": 505,
    "created_epoch": 1490363188,
    "deleted_epoch": null,
    "modified_epoch": 1490363188,
    "modified_by": null,
    "id": 1,
    "owner": {
      "id": 505,
      "modified_epoch": 1490363169,
      "created_epoch": 1490363169,
      "deleted_epoch": null,
      "username": "Tyra",
      "modified_by": null,
      "email": "Theo_Collier78@yahoo.com"
    },
    "posts": {
      "Total": 2,
      "NextOffset": 1,
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
          "id": 419,
          "owner": {
            "id": 469,
            "modified_epoch": 1490363167,
            "created_epoch": 1490363167,
            "deleted_epoch": null,
            "username": "Austin",
            "modified_by": null,
            "email": "Adell.Ward99@yahoo.com"
          },
          "comments": {
            "Total": 5,
            "NextOffset": 2,
            "List": [
              {
                "title": "some tiel",
                "body": "sdsfsdf",
                "post_id": 419,
                "media": {
                  "type": "image",
                  "value": {
                    "full": "http://lorempixel.com/1600/800/",
                    "thumb": "http://lorempixel.com/400/200/"
                  }
                },
                "profile_id": 1,
                "created_epoch": 1493897689,
                "deleted_epoch": null,
                "modified_epoch": 1493897689,
                "modified_by": null,
                "id": 6496,
                "owner": {
                  "id": 1,
                  "modified_epoch": 1490363149,
                  "created_epoch": 1490363149,
                  "deleted_epoch": null,
                  "username": "Marjolaine",
                  "modified_by": null,
                  "email": "Jazmyn_Gleason@gmail.com"
                },
                "likesCount": 0,
                "flagsCount": 0
              },
              {
                "title": "some tiel",
                "body": "sdsfsdf",
                "post_id": 419,
                "media": {
                  "type": "image",
                  "value": {
                    "full": "http://lorempixel.com/1600/800/",
                    "thumb": "http://lorempixel.com/400/200/"
                  }
                },
                "profile_id": 1,
                "created_epoch": 1493897631,
                "deleted_epoch": null,
                "modified_epoch": 1493897631,
                "modified_by": null,
                "id": 6495,
                "owner": {
                  "id": 1,
                  "modified_epoch": 1490363149,
                  "created_epoch": 1490363149,
                  "deleted_epoch": null,
                  "username": "Marjolaine",
                  "modified_by": null,
                  "email": "Jazmyn_Gleason@gmail.com"
                },
                "likesCount": 0,
                "flagsCount": 0
              }
            ]
          },
          "likesCount": 1,
          "flagsCount": 0,
          "commentsCount": 5
        }
      ]
    },
    "postsCount": 2,
    "likesCount": 2,
    "flagsCount": 2,
    "followsCount": 2
  },
  "errors": []
});
        done();
      })
      .catch(result => {
        fail({throw: result}, {
  "status": 200,
  "data": {
    "title": "Repellat corrupti laudantium",
    "body": "Aspernatur ea ea veritatis aut consequatur dicta doloribus illo. Facere molestiae in quisquam aut. Quae ab quos consectetur eaque.\nMolestiae labore ea harum sint eum qui veniam commodi cumque. Natus rerum ut. Aut dolor accusamus explicabo. Impedit quibusdam aut. Error aut aut. Exercitationem odit voluptatem qui ut aliquid.",
    "profile_id": 505,
    "created_epoch": 1490363188,
    "deleted_epoch": null,
    "modified_epoch": 1490363188,
    "modified_by": null,
    "id": 1,
    "owner": {
      "id": 505,
      "modified_epoch": 1490363169,
      "created_epoch": 1490363169,
      "deleted_epoch": null,
      "username": "Tyra",
      "modified_by": null,
      "email": "Theo_Collier78@yahoo.com"
    },
    "posts": {
      "Total": 2,
      "NextOffset": 1,
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
          "id": 419,
          "owner": {
            "id": 469,
            "modified_epoch": 1490363167,
            "created_epoch": 1490363167,
            "deleted_epoch": null,
            "username": "Austin",
            "modified_by": null,
            "email": "Adell.Ward99@yahoo.com"
          },
          "comments": {
            "Total": 5,
            "NextOffset": 2,
            "List": [
              {
                "title": "some tiel",
                "body": "sdsfsdf",
                "post_id": 419,
                "media": {
                  "type": "image",
                  "value": {
                    "full": "http://lorempixel.com/1600/800/",
                    "thumb": "http://lorempixel.com/400/200/"
                  }
                },
                "profile_id": 1,
                "created_epoch": 1493897689,
                "deleted_epoch": null,
                "modified_epoch": 1493897689,
                "modified_by": null,
                "id": 6496,
                "owner": {
                  "id": 1,
                  "modified_epoch": 1490363149,
                  "created_epoch": 1490363149,
                  "deleted_epoch": null,
                  "username": "Marjolaine",
                  "modified_by": null,
                  "email": "Jazmyn_Gleason@gmail.com"
                },
                "likesCount": 0,
                "flagsCount": 0
              },
              {
                "title": "some tiel",
                "body": "sdsfsdf",
                "post_id": 419,
                "media": {
                  "type": "image",
                  "value": {
                    "full": "http://lorempixel.com/1600/800/",
                    "thumb": "http://lorempixel.com/400/200/"
                  }
                },
                "profile_id": 1,
                "created_epoch": 1493897631,
                "deleted_epoch": null,
                "modified_epoch": 1493897631,
                "modified_by": null,
                "id": 6495,
                "owner": {
                  "id": 1,
                  "modified_epoch": 1490363149,
                  "created_epoch": 1490363149,
                  "deleted_epoch": null,
                  "username": "Marjolaine",
                  "modified_by": null,
                  "email": "Jazmyn_Gleason@gmail.com"
                },
                "likesCount": 0,
                "flagsCount": 0
              }
            ]
          },
          "likesCount": 1,
          "flagsCount": 0,
          "commentsCount": 5
        }
      ]
    },
    "postsCount": 2,
    "likesCount": 2,
    "flagsCount": 2,
    "followsCount": 2
  },
  "errors": []
});
        done();
      });
  });
});
