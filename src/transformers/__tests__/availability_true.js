/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: availability {"pid":"870970-basis:28448716","pretty":true}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

let context = {
  "services": {
    "ddbcmsapi": "http://rest.filmstriben.dbc.inlead.dk/web/",
    "moreinfo": "http://moreinfo.addi.dk/2.6/",
    "openagency": "http://openagency.addi.dk/2.24/",
    "openholdingstatus": "https://openholdingstatus.addi.dk/2.2/",
    "openorder": "https://openorder.addi.dk/2.7.1/",
    "TESTopenorder": "https://openorder.addi.dk/test_2.7.1/",
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
    }
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
    "agency": "775100",
    "librarytype": "folkebibliotek",
    "id": "XXXXX",
    "pin": "XXXXX",
    "salt": "XXXXX"
  },
  "app": {
    "clientid": "XXXXX",
    "ddbcmsapipassword": "XXXXX",
    "orderpolicyrequester": "190101"
  }
};
let provider = Provider();
let mockData = {
  "[\"openholdingstatus\",\"\\n <soapenv:Envelope xmlns:soapenv=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\" xmlns:open=\\\"http://oss.dbc.dk/ns/openholdingstatus\\\">\\n   <soapenv:Header/>\\n   <soapenv:Body>\\n      <open:holdingsRequest>\\n         <open:authentication>\\n            <open:groupIdAut>XXXXX</open:groupIdAut>\\n            <open:passwordAut>XXXXX</open:passwordAut>\\n            <open:userIdAut>XXXXX</open:userIdAut>\\n         </open:authentication>\\n         <open:lookupRecord>\\n            <open:responderId>775100</open:responderId>\\n            <open:pid>870970-basis:28448716</open:pid>\\n         </open:lookupRecord>\\n         <open:outputType>json</open:outputType>\\n      </open:holdingsRequest>\\n   </soapenv:Body>\\n</soapenv:Envelope>\"]": "{\"holdingsResponse\":{\"responder\":[{\"localHoldingsId\":{\"$\":\"28448716\"},\"willLend\":{\"$\":\"true\"},\"expectedDelivery\":{\"$\":\"2016-05-31\"},\"pid\":{\"$\":\"870970-basis:28448716\"},\"responderId\":{\"$\":\"775100\"}}]},\"@namespaces\":null}",
  "[\"openorder\",\"<SOAP-ENV:Envelope xmlns=\\\"http://oss.dbc.dk/ns/openorder\\\" xmlns:SOAP-ENV=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\">\\n     <SOAP-ENV:Body>\\n\\n        <checkOrderPolicyRequest>\\n           <authentication>\\n              <groupIdAut>XXXXX</groupIdAut>\\n              <passwordAut>XXXXX</passwordAut>\\n              <userIdAut>XXXXX</userIdAut>\\n           </authentication>\\n           <pickUpAgencyId>775100</pickUpAgencyId>\\n           <pid>870970-basis:28448716</pid>\\n           <serviceRequester>190101</serviceRequester>\\n           <outputType>json</outputType>\\n        </checkOrderPolicyRequest>\\n     </SOAP-ENV:Body>\\n  </SOAP-ENV:Envelope>\"]": "{\"checkOrderPolicyResponse\":{\"lookUpUrl\":[{\"$\":\"http:\\/\\/www.aakb.dk\\/ting\\/collection\\/775100%3A28448716\"}],\"orderPossible\":{\"$\":\"true\"},\"orderPossibleReason\":{\"$\":\"owned_accepted\"}},\"@namespaces\":{\"oo\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openorder\"}}"
};

describe('Automated test: availability_true', () => {
  it('expected response. ID:psztvf, for {"pid":"870970-basis:28448716","pretty":true}', (done) => {
    context.mockData = mockData;
    provider.execute('availability', {"pid":"870970-basis:28448716","pretty":true}, context)
      .then(result => {
        assert.deepEqual(result,
            {
  "statusCode": 200,
  "data": {
    "willLend": true,
    "expectedDelivery": "2016-05-31"
  }
});
        done();
      })
      .catch(result => {
        fail({throw: result}, {
  "statusCode": 200,
  "data": {
    "willLend": true,
    "expectedDelivery": "2016-05-31"
  }
});
        done();
      });
  });
});
