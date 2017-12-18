/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
// Request: news {"nids":["19","40"],"fields":["title","changed","nid","field_ding_news_list_image"]}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

let context = {
  services: {
    ddbcmsapi: 'http://rest.filmstriben.dbc.inlead.dk/web/',
    moreinfo: 'http://moreinfo.addi.dk/2.1/',
    openagency: 'http://openagency.addi.dk/2.24/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/2.2/',
    openorder: 'https://openorder.addi.dk/test_2.7.1/',
    opensearch: 'http://opensearch.addi.dk/b3.0_4.2/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.5/',
    rank: 'https://xptest.dbc.dk/ms/rank/v1',
    recommenddefault: 'https://xptest.dbc.dk/ms/recommend-cosim/v1',
    recommendpopular: 'https://xptest.dbc.dk/ms/recommend-pop/v1',
    suggestpopular: 'http://xptest.dbc.dk/ms/entity-pop/v1',
    suggestcreator: 'http://xptest.dbc.dk/ms/entity-suggest/v1/creator',
    suggestlibrary: 'http://xptest.dbc.dk/ms/entity-suggest/v1/library',
    suggestsubject: 'http://xptest.dbc.dk/ms/entity-suggest/v1/subject'
  },
  agency: {search: '775100', order: 'DK-100451'},
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
  user: {agency: '775100', id: 'XXXXX', pin: 'XXXXX', salt: 'XXXXX'},
  app: {
    clientid: 'to-be-decided',
    collectionidentifiers:
      'rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    searchprofile: 'opac'
  },
  opensearch: {
    url: 'http://opensearch.addi.dk/b3.0_4.2/',
    agency: '775100',
    profile: 'opac'
  },
  moreinfo: {
    url: 'http://moreinfo.addi.dk/2.1/',
    user: 'XXXXX',
    group: 'XXXXX',
    password: 'XXXXX'
  },
  entitysuggest: {
    url: 'http://xptest.dbc.dk/ms/entity-suggest/v1',
    libraryType: 'folkebibliotek'
  },
  popsuggest: {url: 'http://xptest.dbc.dk/ms/entity-pop/v1'},
  creatorsuggest: {url: 'http://xptest.dbc.dk/ms/entity-suggest/v1/creator'},
  librarysuggest: {
    url: 'http://xptest.dbc.dk/ms/entity-suggest/v1/library',
    librarytype: 'folkebibliotek'
  },
  subjectsuggest: {url: 'http://xptest.dbc.dk/ms/entity-suggest/v1/subject'},
  orderpolicy: {
    url: 'https://openorder.addi.dk/test_2.7.1/',
    servicerequester: '190101'
  },
  userstatus: {
    salt: 'XXXXX',
    url: 'https://openuserstatus.addi.dk/1.5/',
    userid: 'XXXXX',
    userpin: 'XXXXX',
    useragency: 'DK-100451',
    authgroupid: 'XXXXX',
    authpassword: 'XXXXX',
    authid: 'XXXXX'
  },
  recommend: {
    urls: {
      default: 'https://xptest.dbc.dk/ms/recommend-cosim/v1',
      popular: 'https://xptest.dbc.dk/ms/recommend-pop/v1'
    }
  },
  openagency: {url: 'http://openagency.addi.dk/2.24/', agency: '775100'},
  ddbcms: {
    url: 'http://rest.filmstriben.dbc.inlead.dk/web/',
    agency: '775100',
    password: 'XXXXX'
  },
  openholdingstatus: {
    url: 'https://openholdingstatus.addi.dk/2.2/',
    authgroupid: 'XXXXX',
    authpassword: 'XXXXX',
    authid: 'XXXXX'
  },
  rank: {url: 'https://xptest.dbc.dk/ms/rank/v1'}
};
let provider = Provider();
let mockData = {
  '["http://rest.filmstriben.dbc.inlead.dk/web/content/fetch",{"qs":{"node":"19","agency":"775100"}}]':
    '{"status":true,"message":"","items":[{"id":"568a831f13e4ee5f4408257a","nid":19,"agency":"775100","type":"ding_news","fields":{"title":{"name":"Titel","value":"Sportsstjerner - bag facaden","attr":[]},"author":{"name":"Forfatter","value":"admin","attr":[]},"created":{"name":"Oprettet","value":1387229872,"attr":[]},"changed":{"name":"Opdateret","value":1451918109,"attr":[]},"status":{"name":"Status","value":1,"attr":[]},"field_ding_news_body":{"name":"Body","value":"<p style=\\"text-align: justify; line-height: 14px; margin-top: 0px; margin-bottom: 14px; font-family: Arial, Helvetica, sans;\\">Maecenas venenatis diam sit amet nunc ullamcorper elementum. Etiam id sagittis orci. Fusce laoreet erat non lorem molestie, eget pellentesque libero consequat. Maecenas risus nibh, placerat vitae lectus a, cursus egestas lectus. Fusce vel facilisis massa.<\\/p><p style=\\"text-align: justify; line-height: 14px; margin-top: 0px; margin-bottom: 14px; font-family: Arial, Helvetica, sans;\\">Integer scelerisque tellus in blandit consequat. Etiam congue vel lacus nec commodo. Vestibulum nec libero libero. Nunc adipiscing commodo neque, sed venenatis ligula tempus sed. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus a hendrerit dui, ut ultricies eros. Suspendisse euismod vel neque et fermentum. Suspendisse potenti. Sed luctus odio massa. Pellentesque commodo odio in tempor laoreet.<\\/p>","attr":[]},"field_ding_news_lead":{"name":"Lead","value":"Curabitur eu nibh ac purus sagittis molestie consectetur nec dolor. Nunc sed scelerisque dolor.","attr":[]},"field_ding_news_list_image":{"name":"List image","value":["files\\/775100\\/7268c0e6792000b897cea1d0dff628bd41117017.jpeg"],"attr":["image\\/jpeg"]},"field_ding_news_materials":{"name":"Materials","value":[],"attr":[]}},"taxonomy":{"field_ding_news_category":{"name":"News Category","terms":["Film"]}},"list":[]}]}',
  '["http://rest.filmstriben.dbc.inlead.dk/web/content/fetch",{"qs":{"node":"40","agency":"775100"}}]':
    '{"status":true,"message":"","items":[{"id":"56b0687313e4eefa60ef18cd","nid":40,"agency":"775100","type":"ding_news","fields":{"title":{"name":"Titel","value":"Bagud med danskopgaven ? her er hj\\u00e6lp til dig","attr":[]},"author":{"name":"Forfatter","value":"admin","attr":[]},"created":{"name":"Oprettet","value":1454401649,"attr":[]},"changed":{"name":"Opdateret","value":1454401649,"attr":[]},"status":{"name":"Status","value":1,"attr":[]},"ding_news_groups_ref":{"name":"Groups","value":[],"attr":[]},"field_ding_news_body":{"name":"Body","value":"<p>Nunc ullamcorper pulvinar pharetra. Aliquam massa ante, gravida id velit at, tempor suscipit diam. Vivamus lacinia nunc ipsum, ut adipiscing nisl adipiscing in. Nam quis luctus massa. Phasellus cursus sem ipsum, sed semper turpis auctor nec. Cras vel magna sed ante scelerisque eleifend eu sed ligula. Integer in adipiscing turpis. In nibh arcu, porta vel placerat id, aliquet nec lacus. Donec sed rutrum risus. Vestibulum volutpat tempor fringilla. Mauris ornare eros vitae porta ultricies. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.<\\/p><p>Etiam quis tincidunt magna, ut fermentum purus. Pellentesque at justo magna. Integer gravida scelerisque turpis non vehicula. Duis nec nisi id dui vehicula tempus. Pellentesque nec hendrerit mi, in laoreet dolor. Pellentesque eu augue tincidunt, porta purus in, scelerisque arcu. Nulla facilisis lorem ut quam viverra ullamcorper a quis est. Quisque diam felis, aliquet id sapien sed, faucibus dictum dolor. Curabitur dapibus feugiat mattis. Quisque sit amet massa convallis, vehicula felis non, varius lorem. Proin sed congue magna. Suspendisse non mi nunc. Pellentesque in augue fringilla, iaculis mauris nec, rutrum nibh. Suspendisse potenti. Fusce eget urna mi. Nullam gravida cursus eleifend. Duis volutpat pellentesque convallis. Aenean id ligula risus. Nulla vestibulum neque ac adipiscing posuere. Proin eu faucibus augue. Proin dictum ante quam, eu iaculis dui venenatis a. Ut faucibus erat arcu, id elementum tortor vulputate eget. Aliquam sagittis sagittis dolor id gravida. Nulla facilisis nec sem ac posuere. Nunc tincidunt hendrerit posuere.<\\/p><p>Originally published by admin, Aarhus Kommunes Biblioteker.<\\/p>","attr":[]},"field_ding_news_lead":{"name":"Lead","value":"Duis mi neque, ornare vel leo sit amet, tristique malesuada diam.","attr":[]},"field_ding_news_list_image":{"name":"List image","value":["files\\/775100\\/97d745b02862cde44e9f4a431e0da175608760b7.jpeg"],"attr":["image\\/jpeg"]},"field_ding_news_materials":{"name":"Materials","value":[],"attr":[]},"field_ding_news_title_image":{"name":"Title image","value":["files\\/775100\\/97d745b02862cde44e9f4a431e0da175608760b7.jpeg"],"attr":["image\\/jpeg"]},"og_group_ref":{"name":"Library","value":["3"],"attr":[]}},"taxonomy":{"field_ding_news_category":{"name":"News Category","terms":["B\\u00f8ger"]}},"list":[]}]}'
};

describe('Automated test: news_nids', () => {
  it('expected response. ID:vx8orb, for {"nids":["19","40"],"fields":["title","changed","nid","field_ding_news_list_image"]}', done => {
    context.mockData = mockData;
    provider
      .execute(
        'news',
        {
          nids: ['19', '40'],
          fields: ['title', 'changed', 'nid', 'field_ding_news_list_image']
        },
        context
      )
      .then(result => {
        assert.deepEqual(result, {
          statusCode: 200,
          data: [
            {
              title: {
                name: 'Titel',
                value: 'Sportsstjerner - bag facaden',
                attr: []
              },
              author: {name: 'Forfatter', value: 'admin', attr: []},
              created: {name: 'Oprettet', value: 1387229872, attr: []},
              changed: {name: 'Opdateret', value: 1451918109, attr: []},
              status: {name: 'Status', value: 1, attr: []},
              field_ding_news_body: {
                name: 'Body',
                value:
                  '<p style="text-align: justify; line-height: 14px; margin-top: 0px; margin-bottom: 14px; font-family: Arial, Helvetica, sans;">Maecenas venenatis diam sit amet nunc ullamcorper elementum. Etiam id sagittis orci. Fusce laoreet erat non lorem molestie, eget pellentesque libero consequat. Maecenas risus nibh, placerat vitae lectus a, cursus egestas lectus. Fusce vel facilisis massa.</p><p style="text-align: justify; line-height: 14px; margin-top: 0px; margin-bottom: 14px; font-family: Arial, Helvetica, sans;">Integer scelerisque tellus in blandit consequat. Etiam congue vel lacus nec commodo. Vestibulum nec libero libero. Nunc adipiscing commodo neque, sed venenatis ligula tempus sed. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus a hendrerit dui, ut ultricies eros. Suspendisse euismod vel neque et fermentum. Suspendisse potenti. Sed luctus odio massa. Pellentesque commodo odio in tempor laoreet.</p>',
                attr: []
              },
              field_ding_news_lead: {
                name: 'Lead',
                value:
                  'Curabitur eu nibh ac purus sagittis molestie consectetur nec dolor. Nunc sed scelerisque dolor.',
                attr: []
              },
              field_ding_news_list_image: {
                name: 'List image',
                value: [
                  'files/775100/7268c0e6792000b897cea1d0dff628bd41117017.jpeg'
                ],
                attr: ['image/jpeg']
              },
              field_ding_news_materials: {
                name: 'Materials',
                value: [],
                attr: []
              },
              nid: 19
            },
            {
              title: {
                name: 'Titel',
                value: 'Bagud med danskopgaven ? her er hjælp til dig',
                attr: []
              },
              author: {name: 'Forfatter', value: 'admin', attr: []},
              created: {name: 'Oprettet', value: 1454401649, attr: []},
              changed: {name: 'Opdateret', value: 1454401649, attr: []},
              status: {name: 'Status', value: 1, attr: []},
              ding_news_groups_ref: {name: 'Groups', value: [], attr: []},
              field_ding_news_body: {
                name: 'Body',
                value:
                  '<p>Nunc ullamcorper pulvinar pharetra. Aliquam massa ante, gravida id velit at, tempor suscipit diam. Vivamus lacinia nunc ipsum, ut adipiscing nisl adipiscing in. Nam quis luctus massa. Phasellus cursus sem ipsum, sed semper turpis auctor nec. Cras vel magna sed ante scelerisque eleifend eu sed ligula. Integer in adipiscing turpis. In nibh arcu, porta vel placerat id, aliquet nec lacus. Donec sed rutrum risus. Vestibulum volutpat tempor fringilla. Mauris ornare eros vitae porta ultricies. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p><p>Etiam quis tincidunt magna, ut fermentum purus. Pellentesque at justo magna. Integer gravida scelerisque turpis non vehicula. Duis nec nisi id dui vehicula tempus. Pellentesque nec hendrerit mi, in laoreet dolor. Pellentesque eu augue tincidunt, porta purus in, scelerisque arcu. Nulla facilisis lorem ut quam viverra ullamcorper a quis est. Quisque diam felis, aliquet id sapien sed, faucibus dictum dolor. Curabitur dapibus feugiat mattis. Quisque sit amet massa convallis, vehicula felis non, varius lorem. Proin sed congue magna. Suspendisse non mi nunc. Pellentesque in augue fringilla, iaculis mauris nec, rutrum nibh. Suspendisse potenti. Fusce eget urna mi. Nullam gravida cursus eleifend. Duis volutpat pellentesque convallis. Aenean id ligula risus. Nulla vestibulum neque ac adipiscing posuere. Proin eu faucibus augue. Proin dictum ante quam, eu iaculis dui venenatis a. Ut faucibus erat arcu, id elementum tortor vulputate eget. Aliquam sagittis sagittis dolor id gravida. Nulla facilisis nec sem ac posuere. Nunc tincidunt hendrerit posuere.</p><p>Originally published by admin, Aarhus Kommunes Biblioteker.</p>',
                attr: []
              },
              field_ding_news_lead: {
                name: 'Lead',
                value:
                  'Duis mi neque, ornare vel leo sit amet, tristique malesuada diam.',
                attr: []
              },
              field_ding_news_list_image: {
                name: 'List image',
                value: [
                  'files/775100/97d745b02862cde44e9f4a431e0da175608760b7.jpeg'
                ],
                attr: ['image/jpeg']
              },
              field_ding_news_materials: {
                name: 'Materials',
                value: [],
                attr: []
              },
              field_ding_news_title_image: {
                name: 'Title image',
                value: [
                  'files/775100/97d745b02862cde44e9f4a431e0da175608760b7.jpeg'
                ],
                attr: ['image/jpeg']
              },
              og_group_ref: {name: 'Library', value: ['3'], attr: []},
              nid: 40
            }
          ]
        });
        done();
      });
  });
});
