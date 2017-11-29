/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: work {"pids":["870970-basis:28448716"],"fields":["coverUrlFull"]}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.10/',
    openagency: 'http://openagency.addi.dk/2.24/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/2.2/',
    PRODopenorder: 'https://openorder.addi.dk/2.8/',
    openorder: 'https://openorder.addi.dk/test_2.8/',
    opensearch: 'https://opensearch.addi.dk/b3.0_4.5/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.5/',
    rank: 'https://xptest.dbc.dk/ms/rank/v1',
    suggestpopular: 'http://xptest.dbc.dk/ms/entity-pop/v1',
    suggestcreator: 'http://xptest.dbc.dk/ms/entity-suggest/v1/creator',
    suggestlibrary: 'http://xptest.dbc.dk/ms/entity-suggest/v1/library',
    suggestsubject: 'http://xptest.dbc.dk/ms/entity-suggest/v1/subject',
    recommendurls: {
      default: 'https://xptest.dbc.dk/ms/recommend-cosim/v1',
      popular: 'https://xptest.dbc.dk/ms/recommend-pop/v1'
    },
    communityservice: 'http://localhost:4010/v1'
  },
  communityservice: {
    id: 1
  },
  search: {
    agency: '775100',
    profile: 'opac',
    collectionidentifiers:
      'rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog'
  },
  netpunkt: {
    user: 'XXXXX',
    group: 'XXXXX',
    password: 'XXXXX'
  },
  user: {
    id: 'XXXXX',
    salt: 'XXXXX',
    pin: 'XXXXX',
    libraryId: '710100',
    agency: '710100',
    isil: 'DK-710100'
  },
  app: {
    clientid: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  }
};
const provider = Provider();
const mockData = {
  '["moreinfo",{"qs":{"action":"moreInfo","authenticationUser":"XXXXX","authenticationGroup":"XXXXX","authenticationPassword":"XXXXX","pidList":"870970-basis:28448716","outputType":"json"}}]':
    '{"moreInfoResponse":{"requestStatus":{"statusEnum":{"$":"ok","@":"mi"},"errorText":{"$":"","@":"mi"},"@":"mi"},"identifierInformation":[{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870970-basis:28448716","@":"mi"},"@":"mi"},"backImage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_117&bibliotek=870970&source_id=870970&key=090fcf86a7b102916607","@imageSize":{"$":"detail_117"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_207&bibliotek=870970&source_id=870970&key=fe11f81976d77cab149a","@imageSize":{"$":"detail_207"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_42&bibliotek=870970&source_id=870970&key=fd69d5b4a513f836c405","@imageSize":{"$":"detail_42"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_500&bibliotek=870970&source_id=870970&key=436cf2e35a0948ff91b0","@imageSize":{"$":"detail_500"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_lille&bibliotek=870970&source_id=870970&key=88669a10245c732eb8d4","@imageSize":{"$":"thumbnail"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_stor&bibliotek=870970&source_id=870970&key=68fee63a5284ee5638cd","@imageSize":{"$":"detail"},"@imageFormat":{"$":"jpeg"},"@":"mi"}],"backPage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_pdf&bibliotek=870970&source_id=870970&key=a96fd8cd2be4ca09e386","@":"mi"}],"coverImage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=28448716&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=7a74659e96efa2764718","@imageSize":{"$":"detail_117"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=28448716&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=f20e5c1ab1c9512b3723","@imageSize":{"$":"detail_207"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=28448716&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=e20a5913b2ef872150c0","@imageSize":{"$":"detail_42"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=28448716&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=a8a4d6e61b7c70e201df","@imageSize":{"$":"detail_500"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=28448716&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=302f5c4b1075438ecb41","@imageSize":{"$":"thumbnail"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=28448716&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=c1b267d714f3f7b18029","@imageSize":{"$":"detail"},"@imageFormat":{"$":"jpeg"},"@":"mi"}],"@":"mi"}],"@":"mi"},"@namespaces":{"mi":"http:\\/\\/oss.dbc.dk\\/ns\\/moreinfo"}}\n'
};

describe('Automated test: work-single_pid-coverUrl', () => {
  it('expected response. ID:m5guwk, for {"pids":["870970-basis:28448716"],"fields":["coverUrlFull"]}', done => {
    context.mockData = mockData;
    provider
      .execute(
        'work',
        {pids: ['870970-basis:28448716'], fields: ['coverUrlFull']},
        context
      )
      .then(result => {
        assert.deepEqual(result, {
          statusCode: 200,
          data: [
            {
              coverUrl117: [
                'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=28448716&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=7a74659e96efa2764718'
              ],
              coverUrl207: [
                'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=28448716&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=f20e5c1ab1c9512b3723'
              ],
              coverUrl42: [
                'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=28448716&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=e20a5913b2ef872150c0'
              ],
              coverUrl500: [
                'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=28448716&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=a8a4d6e61b7c70e201df'
              ],
              coverUrlThumbnail: [
                'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=28448716&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=302f5c4b1075438ecb41'
              ],
              coverUrlFull: [
                'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=28448716&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=c1b267d714f3f7b18029'
              ]
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
                coverUrl117: [
                  'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=28448716&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=7a74659e96efa2764718'
                ],
                coverUrl207: [
                  'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=28448716&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=f20e5c1ab1c9512b3723'
                ],
                coverUrl42: [
                  'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=28448716&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=e20a5913b2ef872150c0'
                ],
                coverUrl500: [
                  'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=28448716&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=a8a4d6e61b7c70e201df'
                ],
                coverUrlThumbnail: [
                  'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=28448716&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=302f5c4b1075438ecb41'
                ],
                coverUrlFull: [
                  'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=28448716&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=c1b267d714f3f7b18029'
                ]
              }
            ]
          }
        );
        done();
      });
  });
});
