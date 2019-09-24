/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
// Request: events {"fields":["title","changed","nid","field_ding_event_title_image"]}

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
  '["http://rest.filmstriben.dbc.inlead.dk/web/content/fetch",{"qs":{"type":"ding_event","amount":10,"skip":0,"agency":"775100"}}]':
    '{"status":true,"message":"","items":[{"id":"569649c813e4ee945f2655a0","nid":15,"agency":"775100","type":"ding_event","fields":{"title":{"name":"Titel","value":"M\\u00f8d forfatteren: Tim Buk-Swienty","attr":[]},"author":{"name":"Forfatter","value":"admin","attr":[]},"created":{"name":"Oprettet","value":1387237332,"attr":[]},"changed":{"name":"Opdateret","value":1452689863,"attr":[]},"status":{"name":"Status","value":1,"attr":[]},"field_ding_event_body":{"name":"Body","value":"<p style=\\"text-align: justify; line-height: 14px; margin-top: 0px; margin-bottom: 14px; font-family: Arial, Helvetica, sans;\\">Quisque nulla lorem, varius vel tristique id, bibendum placerat dolor. Sed quis augue eget nibh convallis blandit. Etiam ac ligula ornare, congue diam ut, congue dui. Nullam vitae interdum risus. Morbi et diam non dui rutrum hendrerit posuere ut nulla. Nulla vel vestibulum metus, a vehicula lorem. Proin mollis tortor tempor massa pellentesque ultrices. Mauris eget scelerisque arcu. Donec non tincidunt nunc.<\\/p><p style=\\"text-align: justify; line-height: 14px; margin-top: 0px; margin-bottom: 14px; font-family: Arial, Helvetica, sans;\\">Nulla at lacus quis elit varius viverra ac quis metus. Fusce tincidunt lacinia purus ut vulputate. Donec lacinia viverra massa vitae convallis. Maecenas in sodales velit, vitae gravida libero. Fusce elit justo, egestas in malesuada quis, facilisis elementum magna.<\\/p><p style=\\"text-align: justify; line-height: 14px; margin-top: 0px; margin-bottom: 14px; font-family: Arial, Helvetica, sans;\\">Aliquam posuere faucibus elit, id interdum erat semper ut. Aliquam pretium tristique arcu. Etiam eu nulla enim. Aliquam aliquam mattis metus lacinia convallis. Donec vel massa velit. Quisque accumsan placerat sodales.<\\/p>","attr":[]},"field_ding_event_lead":{"name":"Lead","value":"Ut a augue quam. Integer ut risus eu massa mattis fermentum eu mattis metus. Curabitur. bob.","attr":[]},"field_ding_event_list_image":{"name":"List image","value":["files\\/775100\\/351e4d417aff46c89e288d8e017accf0a4026937.jpeg"],"attr":["image\\/jpeg"]},"field_ding_event_location__thoroughfare":{"name":"Location (thoroughfare)","value":[""],"attr":[]},"field_ding_event_location__premise":{"name":"Location (premise)","value":[""],"attr":[]},"field_ding_event_location__postal_code":{"name":"Location (postal code)","value":[""],"attr":[]},"field_ding_event_location__locality":{"name":"Location (locality)","value":[""],"attr":[]},"field_ding_event_location__country":{"name":"Location (country)","value":["DK"],"attr":[]},"field_ding_event_location__name_line":{"name":"Location (name line)","value":[""],"attr":[]},"field_ding_event_location__first_name":{"name":"Location (first name)","value":[""],"attr":[]},"field_ding_event_location__last_name":{"name":"Location (last name)","value":[""],"attr":[]},"field_ding_event_materials":{"name":"Materials","value":[],"attr":[]},"field_ding_event_price":{"name":"Price","value":[],"attr":[]},"field_ding_event_title_image":{"name":"Title image","value":["files\\/775100\\/581328cef1630f7c4ca26a5ad814b8edb214f0d2.jpeg"],"attr":["image\\/jpeg"]},"field_ding_event_date":{"name":"Event date","value":{"from":"2016-05-15 08:30:00","to":"2016-05-15 10:00:00"},"attr":[]}},"taxonomy":{"field_ding_event_category":{"name":"Event category","terms":["Internet & undervisning"]},"field_ding_event_target":{"name":"Event target","terms":["For b\\u00f8rn"]}},"list":[]}]}'
};

describe('Automated test: events', () => {
  it('expected response. ID:e2nwmd, for {"fields":["title","changed","nid","field_ding_event_title_image"]}', done => {
    context.mockData = mockData;
    provider
      .execute(
        'events',
        {fields: ['title', 'changed', 'nid', 'field_ding_event_title_image']},
        context
      )
      .then(result => {
        assert.deepEqual(result, {
          statusCode: 200,
          data: [
            {
              title: {
                name: 'Titel',
                value: 'Mød forfatteren: Tim Buk-Swienty',
                attr: []
              },
              author: {name: 'Forfatter', value: 'admin', attr: []},
              created: {name: 'Oprettet', value: 1387237332, attr: []},
              changed: {name: 'Opdateret', value: 1452689863, attr: []},
              status: {name: 'Status', value: 1, attr: []},
              field_ding_event_body: {
                name: 'Body',
                value:
                  '<p style="text-align: justify; line-height: 14px; margin-top: 0px; margin-bottom: 14px; font-family: Arial, Helvetica, sans;">Quisque nulla lorem, varius vel tristique id, bibendum placerat dolor. Sed quis augue eget nibh convallis blandit. Etiam ac ligula ornare, congue diam ut, congue dui. Nullam vitae interdum risus. Morbi et diam non dui rutrum hendrerit posuere ut nulla. Nulla vel vestibulum metus, a vehicula lorem. Proin mollis tortor tempor massa pellentesque ultrices. Mauris eget scelerisque arcu. Donec non tincidunt nunc.</p><p style="text-align: justify; line-height: 14px; margin-top: 0px; margin-bottom: 14px; font-family: Arial, Helvetica, sans;">Nulla at lacus quis elit varius viverra ac quis metus. Fusce tincidunt lacinia purus ut vulputate. Donec lacinia viverra massa vitae convallis. Maecenas in sodales velit, vitae gravida libero. Fusce elit justo, egestas in malesuada quis, facilisis elementum magna.</p><p style="text-align: justify; line-height: 14px; margin-top: 0px; margin-bottom: 14px; font-family: Arial, Helvetica, sans;">Aliquam posuere faucibus elit, id interdum erat semper ut. Aliquam pretium tristique arcu. Etiam eu nulla enim. Aliquam aliquam mattis metus lacinia convallis. Donec vel massa velit. Quisque accumsan placerat sodales.</p>',
                attr: []
              },
              field_ding_event_lead: {
                name: 'Lead',
                value:
                  'Ut a augue quam. Integer ut risus eu massa mattis fermentum eu mattis metus. Curabitur. bob.',
                attr: []
              },
              field_ding_event_list_image: {
                name: 'List image',
                value: [
                  'files/775100/351e4d417aff46c89e288d8e017accf0a4026937.jpeg'
                ],
                attr: ['image/jpeg']
              },
              field_ding_event_location__thoroughfare: {
                name: 'Location (thoroughfare)',
                value: [''],
                attr: []
              },
              field_ding_event_location__premise: {
                name: 'Location (premise)',
                value: [''],
                attr: []
              },
              field_ding_event_location__postal_code: {
                name: 'Location (postal code)',
                value: [''],
                attr: []
              },
              field_ding_event_location__locality: {
                name: 'Location (locality)',
                value: [''],
                attr: []
              },
              field_ding_event_location__country: {
                name: 'Location (country)',
                value: ['DK'],
                attr: []
              },
              field_ding_event_location__name_line: {
                name: 'Location (name line)',
                value: [''],
                attr: []
              },
              field_ding_event_location__first_name: {
                name: 'Location (first name)',
                value: [''],
                attr: []
              },
              field_ding_event_location__last_name: {
                name: 'Location (last name)',
                value: [''],
                attr: []
              },
              field_ding_event_materials: {
                name: 'Materials',
                value: [],
                attr: []
              },
              field_ding_event_price: {name: 'Price', value: [], attr: []},
              field_ding_event_title_image: {
                name: 'Title image',
                value: [
                  'files/775100/581328cef1630f7c4ca26a5ad814b8edb214f0d2.jpeg'
                ],
                attr: ['image/jpeg']
              },
              field_ding_event_date: {
                name: 'Event date',
                value: {from: '2016-05-15 08:30:00', to: '2016-05-15 10:00:00'},
                attr: []
              },
              field_ding_event_category: {
                name: 'Event category',
                terms: ['Internet & undervisning']
              },
              field_ding_event_target: {
                name: 'Event target',
                terms: ['For børn']
              },
              nid: 15
            }
          ]
        });
        done();
      })
      .catch(result => {
        fail(
          {throw: result},
          {
            statusCode: 200,
            data: [
              {
                title: {
                  name: 'Titel',
                  value: 'Mød forfatteren: Tim Buk-Swienty',
                  attr: []
                },
                author: {name: 'Forfatter', value: 'admin', attr: []},
                created: {name: 'Oprettet', value: 1387237332, attr: []},
                changed: {name: 'Opdateret', value: 1452689863, attr: []},
                status: {name: 'Status', value: 1, attr: []},
                field_ding_event_body: {
                  name: 'Body',
                  value:
                    '<p style="text-align: justify; line-height: 14px; margin-top: 0px; margin-bottom: 14px; font-family: Arial, Helvetica, sans;">Quisque nulla lorem, varius vel tristique id, bibendum placerat dolor. Sed quis augue eget nibh convallis blandit. Etiam ac ligula ornare, congue diam ut, congue dui. Nullam vitae interdum risus. Morbi et diam non dui rutrum hendrerit posuere ut nulla. Nulla vel vestibulum metus, a vehicula lorem. Proin mollis tortor tempor massa pellentesque ultrices. Mauris eget scelerisque arcu. Donec non tincidunt nunc.</p><p style="text-align: justify; line-height: 14px; margin-top: 0px; margin-bottom: 14px; font-family: Arial, Helvetica, sans;">Nulla at lacus quis elit varius viverra ac quis metus. Fusce tincidunt lacinia purus ut vulputate. Donec lacinia viverra massa vitae convallis. Maecenas in sodales velit, vitae gravida libero. Fusce elit justo, egestas in malesuada quis, facilisis elementum magna.</p><p style="text-align: justify; line-height: 14px; margin-top: 0px; margin-bottom: 14px; font-family: Arial, Helvetica, sans;">Aliquam posuere faucibus elit, id interdum erat semper ut. Aliquam pretium tristique arcu. Etiam eu nulla enim. Aliquam aliquam mattis metus lacinia convallis. Donec vel massa velit. Quisque accumsan placerat sodales.</p>',
                  attr: []
                },
                field_ding_event_lead: {
                  name: 'Lead',
                  value:
                    'Ut a augue quam. Integer ut risus eu massa mattis fermentum eu mattis metus. Curabitur. bob.',
                  attr: []
                },
                field_ding_event_list_image: {
                  name: 'List image',
                  value: [
                    'files/775100/351e4d417aff46c89e288d8e017accf0a4026937.jpeg'
                  ],
                  attr: ['image/jpeg']
                },
                field_ding_event_location__thoroughfare: {
                  name: 'Location (thoroughfare)',
                  value: [''],
                  attr: []
                },
                field_ding_event_location__premise: {
                  name: 'Location (premise)',
                  value: [''],
                  attr: []
                },
                field_ding_event_location__postal_code: {
                  name: 'Location (postal code)',
                  value: [''],
                  attr: []
                },
                field_ding_event_location__locality: {
                  name: 'Location (locality)',
                  value: [''],
                  attr: []
                },
                field_ding_event_location__country: {
                  name: 'Location (country)',
                  value: ['DK'],
                  attr: []
                },
                field_ding_event_location__name_line: {
                  name: 'Location (name line)',
                  value: [''],
                  attr: []
                },
                field_ding_event_location__first_name: {
                  name: 'Location (first name)',
                  value: [''],
                  attr: []
                },
                field_ding_event_location__last_name: {
                  name: 'Location (last name)',
                  value: [''],
                  attr: []
                },
                field_ding_event_materials: {
                  name: 'Materials',
                  value: [],
                  attr: []
                },
                field_ding_event_price: {name: 'Price', value: [], attr: []},
                field_ding_event_title_image: {
                  name: 'Title image',
                  value: [
                    'files/775100/581328cef1630f7c4ca26a5ad814b8edb214f0d2.jpeg'
                  ],
                  attr: ['image/jpeg']
                },
                field_ding_event_date: {
                  name: 'Event date',
                  value: {
                    from: '2016-05-15 08:30:00',
                    to: '2016-05-15 10:00:00'
                  },
                  attr: []
                },
                nid: 15
              }
            ]
          }
        );
        done();
      });
  });
});
