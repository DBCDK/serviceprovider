/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: availability {"pid":""}

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
  '["openholdingstatus","\\n <soapenv:Envelope xmlns:soapenv=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:open=\\"http://oss.dbc.dk/ns/openholdingstatus\\">\\n   <soapenv:Header/>\\n   <soapenv:Body>\\n      <open:holdingsRequest>\\n         <open:authentication>\\n            <open:groupIdAut>XXXXX</open:groupIdAut>\\n            <open:passwordAut>XXXXX</open:passwordAut>\\n            <open:userIdAut>XXXXX</open:userIdAut>\\n         </open:authentication>\\n         <open:lookupRecord>\\n            <open:responderId>710100</open:responderId>\\n            <open:pid></open:pid>\\n         </open:lookupRecord>\\n         <open:outputType>json</open:outputType>\\n      </open:holdingsRequest>\\n   </soapenv:Body>\\n</soapenv:Envelope>"]':
    '{"holdingsResponse":{"error":[{"pid":null,"responderId":{"$":"710100"},"errorMessage":{"$":"error_searching_library"}}]},"@namespaces":null}',
  '["openorder","<SOAP-ENV:Envelope xmlns=\\"http://oss.dbc.dk/ns/openorder\\" xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\">\\n     <SOAP-ENV:Body>\\n\\n        <checkOrderPolicyRequest>\\n           <authentication>\\n              <groupIdAut>XXXXX</groupIdAut>\\n              <passwordAut>XXXXX</passwordAut>\\n              <userIdAut>XXXXX</userIdAut>\\n           </authentication>\\n           <pickUpAgencyId>710100</pickUpAgencyId>\\n           <pid></pid>\\n           <serviceRequester>190101</serviceRequester>\\n           <outputType>json</outputType>\\n        </checkOrderPolicyRequest>\\n     </SOAP-ENV:Body>\\n  </SOAP-ENV:Envelope>"]':
    '{"checkOrderPolicyResponse":{"checkOrderPolicyError":{"$":"service_unavailable"}},"@namespaces":{"oo":"http:\\/\\/oss.dbc.dk\\/ns\\/openorder"}}'
};

describe('Automated test: availability-empty-pid', () => {
  it('expected response. ID:5e26i0, for {"pid":""}', done => {
    context.mockData = mockData;
    provider
      .execute('availability', {pid: ''}, context)
      .then(result => {
        assert.deepEqual(result, {
          statusCode: 200,
          data: {
            holdingStatus: {
              willLend: false
            },
            orderPossible: true
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
              holdingStatus: {
                willLend: false
              },
              orderPossible: true
            }
          }
        );
        done();
      });
  });
});
