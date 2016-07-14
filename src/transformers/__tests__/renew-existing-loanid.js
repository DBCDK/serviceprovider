/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
// Request: renew {"loanId":"NCIPMDAxOXwwMDAwMDMyNDg0fFJvc2VuLCBNaWNoYWVsfFNtdXR8fHw="}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

let context = {"services":{"ddbcmsapi":"http://rest.filmstriben.dbc.inlead.dk/web/","moreinfo":"http://moreinfo.addi.dk/2.6/","openagency":"http://openagency.addi.dk/2.24/","openholdingstatus":"https://openholdingstatus.addi.dk/2.2/","openorder":"https://openorder.addi.dk/2.7.1/","TESTopenorder":"https://openorder.addi.dk/test_2.7.1/","opensearch":"http://opensearch.addi.dk/b3.0_4.2/","openuserstatus":"https://openuserstatus.addi.dk/1.4.1/","rank":"https://xptest.dbc.dk/ms/rank/v1","suggestpopular":"http://xptest.dbc.dk/ms/entity-pop/v1","suggestcreator":"http://xptest.dbc.dk/ms/entity-suggest/v1/creator","suggestlibrary":"http://xptest.dbc.dk/ms/entity-suggest/v1/library","suggestsubject":"http://xptest.dbc.dk/ms/entity-suggest/v1/subject","recommendurls":{"default":"https://xptest.dbc.dk/ms/recommend-cosim/v1","popular":"https://xptest.dbc.dk/ms/recommend-pop/v1"}},"search":{"agency":"775100","profile":"opac","collectionidentifiers":"rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog"},"netpunkt":{"user":"XXXXX","group":"XXXXX","password":"XXXXX"},"user":{"agency":"100451","id":"XXXXX","pin":"XXXXX","salt":"XXXXX"},"app":{"clientid":"XXXXX","ddbcmsapipassword":"XXXXX","orderpolicyrequester":"190101"}};
let provider = Provider();
let mockData = {"[\"openuserstatus\",\"<soapenv:Envelope xmlns:soapenv=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\" xmlns:open=\\\"http://oss.dbc.dk/ns/openuserstatus\\\">\\n   <soapenv:Header/>\\n   <soapenv:Body>\\n      <open:renewLoanRequest>\\n         <open:agencyId>100451</open:agencyId>\\n         <open:authentication>\\n            <open:groupIdAut>XXXXX</open:groupIdAut>\\n            <open:passwordAut>XXXXX</open:passwordAut>\\n            <open:userIdAut>XXXXX</open:userIdAut>\\n         </open:authentication>\\n         <open:loanId>NCIPMDAxOXwwMDAwMDMyNDg0fFJvc2VuLCBNaWNoYWVsfFNtdXR8fHw=</open:loanId>\\n         <open:outputType>json</open:outputType>\\n         <open:userId>XXXXX</open:userId>\\n         <open:userPincode>XXXXX</open:userPincode>\\n      </open:renewLoanRequest>\\n   </soapenv:Body>\\n</soapenv:Envelope>\"]":"{\"renewLoanResponse\":{\"renewLoanStatus\":[{\"loanId\":{\"$\":\"NCIPMDAxOXwwMDAwMDMyNDg0fFJvc2VuLCBNaWNoYWVsfFNtdXR8fHw=\",\"@\":\"ous\"},\"@\":\"ous\"}],\"@\":\"ous\"},\"@namespaces\":{\"ous\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openuserstatus\"}}"};

describe('Automated test: renew-existing-loanid', () => {
  it('expected response. ID:tiqh19, for {"loanId":"NCIPMDAxOXwwMDAwMDMyNDg0fFJvc2VuLCBNaWNoYWVsfFNtdXR8fHw="}', (done) => {
    context.mockData = mockData;
    provider.execute('renew', {"loanId":"NCIPMDAxOXwwMDAwMDMyNDg0fFJvc2VuLCBNaWNoYWVsfFNtdXR8fHw="}, context)
      .then(result => {
        assert.deepEqual(result,
            {"statusCode":200,"data":{"loanId":"NCIPMDAxOXwwMDAwMDMyNDg0fFJvc2VuLCBNaWNoYWVsfFNtdXR8fHw="}});
        done();
      })
      .catch(result => {
        fail({throw: result}, {"statusCode":200,"data":{"loanId":"NCIPMDAxOXwwMDAwMDMyNDg0fFJvc2VuLCBNaWNoYWVsfFNtdXR8fHw="}});
        done();
      });
  });
});
