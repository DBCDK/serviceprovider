/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: order {"orderId":"normal:18180802","delete":true}

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
    orderSystem: 'bibliotekdk',
    ips: ['10.10.10.0'],
    access_token: 'qwerty'
  }
};
const provider = Provider();
const mockData = {
  '["openuserstatus","<soapenv:Envelope xmlns:soapenv=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:open=\\"http://oss.dbc.dk/ns/openuserstatus\\">\\n   <soapenv:Header/>\\n   <soapenv:Body>\\n      <open:cancelOrderRequest>\\n         <open:agencyId>710100</open:agencyId>\\n         <open:authentication>\\n            <open:groupIdAut>XXXXX</open:groupIdAut>\\n            <open:passwordAut>XXXXX</open:passwordAut>\\n            <open:userIdAut>XXXXX</open:userIdAut>\\n         </open:authentication>\\n         <open:cancelOrder>\\n            <open:orderId>18180802</open:orderId>\\n            <open:orderType>normal</open:orderType>\\n         </open:cancelOrder>\\n         <open:outputType>json</open:outputType>\\n         <open:userId>XXXXX</open:userId>\\n         <open:userPincode>XXXXX</open:userPincode>\\n      </open:cancelOrderRequest>\\n   </soapenv:Body>\\n</soapenv:Envelope>"]':
    '{"cancelOrderResponse":{"cancelOrderStatus":[{"orderId":{"$":"18180802","@":"ous"},"orderCancelled":{"$":"","@":"ous"},"@":"ous"}],"@":"ous"},"@namespaces":{"ous":"http:\\/\\/oss.dbc.dk\\/ns\\/openuserstatus"}}'
};

describe('Automated test: order-cancel', () => {
  it('expected response. ID:wuskx7, for {"orderId":"18180802", "orderType":"normal","delete":true}', done => {
    context.mockData = mockData;
    provider
      .execute(
        'order',
        {orderId: '18180802', orderType: 'normal', delete: true},
        context
      )
      .then(result => {
        assert.deepEqual(result, {
          statusCode: 200,
          data: {
            deleted: true,
            orderId: '18180802'
          }
        });
        done();
      })
      .catch(result => {
        fail(
          {throw: result},
          {
            statusCode: 200,
            data: {
              deleted: true,
              orderId: '18180802'
            }
          }
        );
        done();
      });
  });
});
