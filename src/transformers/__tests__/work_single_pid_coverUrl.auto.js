// AUTOTEST GENERATOR: {"endpoint":"work","params":{"pids":["870970-basis:28448716"],"fields":["coverUrlFull"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'work';
const params = {pids: ['870970-basis:28448716'], fields: ['coverUrlFull']};

const expected = {
  statusCode: 200,
  data: [
    {
      coverUrl117: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=28448716&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=bfe56e4f83fa8be831d5'
      ],
      coverUrl207: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=28448716&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=e018b4bedd1073ebacdc'
      ],
      coverUrl42: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=28448716&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=398e215e5af87ddebdb6'
      ],
      coverUrl500: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=28448716&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=d7d1b04691c7b888c007'
      ],
      coverUrlThumbnail: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=28448716&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=367f207f2e9952a6d973'
      ],
      coverUrlFull: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=28448716&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=39dc2bf596ab19f0d6b3'
      ]
    }
  ]
};

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.11/',
    openagency: 'https://openagency.addi.dk/2.34/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/3.0/',
    openorder: 'https://openorder.addi.dk/2.8/',
    opensearch: 'https://opensearch.addi.dk/b3.5_5.0/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    rank: 'https://xptest.dbc.dk/ms/rank/v1',
    suggest: 'http://ortograf.mcp1-proxy.dbc.dk/ortograf/',
    recommend: 'http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim',
    suggestpopular: 'XXXXX',
    suggestcreator: 'XXXXX',
    suggestlibrary: 'XXXXX',
    suggestsubject: 'XXXXX',
    performance: 'https://elk-p01.dbc.dk:9100/',
    recommendurls: 'XXXXX'
  },
  communityservice: {id: 1},
  performance: {password: 'XXXXX', username: 'XXXXX'},
  search: {agency: '710100', profile: 'opac'},
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
  user: {
    id: 'XXXXX',
    salt: 'XXXXX',
    pin: 'XXXXX',
    libraryId: '710100',
    agency: '710100',
    isil: 'DK-710100'
  },
  app: {
    clientId: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  }
};
const mockData = {
  '["moreinfo",{"qs":{"action":"moreInfo","authenticationUser":"XXXXX","authenticationGroup":"XXXXX","authenticationPassword":"XXXXX","pidList":"870970-basis:28448716","outputType":"json"}}]':
    '{"moreInfoResponse":{"requestStatus":{"statusEnum":{"$":"ok","@":"mi"},"errorText":{"$":"","@":"mi"},"@":"mi"},"identifierInformation":[{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870970-basis:28448716","@":"mi"},"@":"mi"},"backImage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_117&bibliotek=870970&source_id=870970&key=9b739fd2586bfe98f7ae","@imageSize":{"$":"detail_117"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_207&bibliotek=870970&source_id=870970&key=cb39939015b6c8719078","@imageSize":{"$":"detail_207"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_42&bibliotek=870970&source_id=870970&key=5a81ec5dec61de0f348c","@imageSize":{"$":"detail_42"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_500&bibliotek=870970&source_id=870970&key=ae68999e87516adaa6b4","@imageSize":{"$":"detail_500"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_lille&bibliotek=870970&source_id=870970&key=d43efbdaa02272802205","@imageSize":{"$":"thumbnail"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_stor&bibliotek=870970&source_id=870970&key=104b57c8a4ff07618dee","@imageSize":{"$":"detail"},"@imageFormat":{"$":"jpeg"},"@":"mi"}],"backPage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_pdf&bibliotek=870970&source_id=870970&key=8bc0da90007ddf1fa262","@":"mi"}],"coverImage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=28448716&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=bfe56e4f83fa8be831d5","@imageSize":{"$":"detail_117"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=28448716&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=e018b4bedd1073ebacdc","@imageSize":{"$":"detail_207"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=28448716&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=398e215e5af87ddebdb6","@imageSize":{"$":"detail_42"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=28448716&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=d7d1b04691c7b888c007","@imageSize":{"$":"detail_500"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=28448716&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=367f207f2e9952a6d973","@imageSize":{"$":"thumbnail"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=28448716&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=39dc2bf596ab19f0d6b3","@imageSize":{"$":"detail"},"@imageFormat":{"$":"jpeg"},"@":"mi"}],"@":"mi"}],"@":"mi"},"@namespaces":{"mi":"http:\\/\\/oss.dbc.dk\\/ns\\/moreinfo"}}\n'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: work_single_pid_coverUrl.auto', () => {
  it('has same result as recorded (in work_single_pid_coverUrl.auto)', () => {
    assert(
      Date.now() < +new Date('2019-02-28'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
