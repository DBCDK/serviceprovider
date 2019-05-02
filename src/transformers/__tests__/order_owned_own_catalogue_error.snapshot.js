/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: order {"pids":["710100-katalog:50758060","710100-katalog:28657366"],"pickUpBranch":"710110","expires":"2019-06-28"}

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
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
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
    collectionidentifiers: ''
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
  '["openorder","<SOAP-ENV:Envelope xmlns=\\"http://oss.dbc.dk/ns/openorder\\" xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\">\\n     <SOAP-ENV:Body>\\n        <placeOrderRequest>\\n           <authentication>\\n              <groupIdAut>XXXXX</groupIdAut>\\n              <passwordAut>XXXXX</passwordAut>\\n              <userIdAut>XXXXX</userIdAut>\\n           </authentication>\\n           <copy>false</copy>\\n           <exactEdition>false</exactEdition>\\n           <needBeforeDate>2019-06-28T00:00:00</needBeforeDate>\\n           <orderSystem>bibliotekdk</orderSystem>\\n           <pickUpAgencyId>710110</pickUpAgencyId>\\n           <pid>710100-katalog:50758060</pid>\\n           <pid>710100-katalog:28657366</pid>\\n           <serviceRequester>190101</serviceRequester>\\n           \\n           <userId>XXXXX</userId>\\n           <userIdAuthenticated>true</userIdAuthenticated>\\n           \\n           \\n           \\n           <verificationReferenceSource>dbcdatawell</verificationReferenceSource>\\n           <outputType>json</outputType>\\n         </placeOrderRequest>\\n      </SOAP-ENV:Body>\\n    </SOAP-ENV:Envelope>"]':
    '{"placeOrderResponse":{"orderNotPlaced":{"lookUpUrl":[{"$":"http:\\/\\/stormp.kk.dk\\/linkme.asp?50758060"}],"placeOrderError":{"$":"owned_own_catalogue"}}},"@namespaces":{"oo":"http:\\/\\/oss.dbc.dk\\/ns\\/openorder"}}'
};

describe('Automated test: order-owned-own-catalogue-error', () => {
  it('expected response. ID:pecnu8, for {"pids":["710100-katalog:50758060","710100-katalog:28657366"],"pickUpBranch":"710110","expires":"2019-06-28"}', done => {
    context.mockData = mockData;
    provider
      .execute(
        'order',
        {
          pids: ['710100-katalog:50758060', '710100-katalog:28657366'],
          pickUpBranch: '710110',
          expires: '2019-06-28'
        },
        context
      )
      .then(result => {
        assert.deepEqual(result, {
          statusCode: 500,
          error: 'owned_own_catalogue',
          orderUrl: 'http://stormp.kk.dk/linkme.asp?50758060'
        });
        done();
      })
      .catch(result => {
        fail(
          {throw: result},
          {
            statusCode: 500,
            error: 'owned_own_catalogue',
            orderUrl: 'http://stormp.kk.dk/linkme.asp?50758060'
          }
        );
        done();
      });
  });
});
