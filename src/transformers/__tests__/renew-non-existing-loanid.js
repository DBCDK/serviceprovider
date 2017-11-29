/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: renew {"loanId":"non-existing"}

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
  '["openuserstatus","<soapenv:Envelope xmlns:soapenv=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:open=\\"http://oss.dbc.dk/ns/openuserstatus\\">\\n   <soapenv:Header/>\\n   <soapenv:Body>\\n      <open:renewLoanRequest>\\n         <open:agencyId>710100</open:agencyId>\\n         <open:authentication>\\n            <open:groupIdAut>XXXXX</open:groupIdAut>\\n            <open:passwordAut>XXXXX</open:passwordAut>\\n            <open:userIdAut>XXXXX</open:userIdAut>\\n         </open:authentication>\\n         <open:loanId>non-existing</open:loanId>\\n         <open:outputType>json</open:outputType>\\n         <open:userId>XXXXX</open:userId>\\n         <open:userPincode>XXXXX</open:userPincode>\\n      </open:renewLoanRequest>\\n   </soapenv:Body>\\n</soapenv:Envelope>"]':
    '{"renewLoanResponse":{"renewLoanStatus":[{"loanId":{"$":"non-existing","@":"ous"},"renewLoanError":{"$":"Agency authentication failed","@":"ous"},"@":"ous"}],"@":"ous"},"@namespaces":{"ous":"http:\\/\\/oss.dbc.dk\\/ns\\/openuserstatus"}}'
};

describe('Automated test: renew-non-existing-loanid', () => {
  it('expected response. ID:kf7drr, for {"loanId":"non-existing"}', done => {
    context.mockData = mockData;
    provider
      .execute('renew', {loanId: 'non-existing'}, context)
      .then(result => {
        assert.deepEqual(result, {
          statusCode: 500,
          error: 'Agency authentication failed'
        });
        done();
      })
      .catch(result => {
        fail(
          {throw: result},
          {
            statusCode: 500,
            error: 'Agency authentication failed'
          }
        );
        done();
      });
  });
});
