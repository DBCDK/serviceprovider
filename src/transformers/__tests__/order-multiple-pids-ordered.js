/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
// Request: order {"pids":["870970-basis:28126727","870970-basis:27597726"],"expires":"2016-08-01","library":"DK-100451","phone":"123454","address":"ADDRESS","email":"EMAIL"}
'use strict';
import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

let context = {"services":{"ddbcmsapi":"http://rest.filmstriben.dbc.inlead.dk/web/","moreinfo":"http://moreinfo.addi.dk/2.6/","openagency":"http://openagency.addi.dk/2.24/","openholdingstatus":"https://openholdingstatus.addi.dk/2.2/","openorder":"https://openorder.addi.dk/2.7.1/","TESTopenorder":"https://openorder.addi.dk/test_2.7.1/","opensearch":"http://opensearch.addi.dk/b3.0_4.2/","openuserstatus":"https://openuserstatus.addi.dk/1.4.1/","rank":"https://xptest.dbc.dk/ms/rank/v1","suggestpopular":"http://xptest.dbc.dk/ms/entity-pop/v1","suggestcreator":"http://xptest.dbc.dk/ms/entity-suggest/v1/creator","suggestlibrary":"http://xptest.dbc.dk/ms/entity-suggest/v1/library","suggestsubject":"http://xptest.dbc.dk/ms/entity-suggest/v1/subject","recommendurls":{"default":"https://xptest.dbc.dk/ms/recommend-cosim/v1","popular":"https://xptest.dbc.dk/ms/recommend-pop/v1"}},"search":{"agency":"775100","profile":"opac","collectionidentifiers":"rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog"},"netpunkt":{"user":"XXXXX","group":"XXXXX","password":"XXXXX"},"user":{"agency":"DK-100451","id":"XXXXX","pin":"XXXXX","salt":"XXXXX"},"app":{"clientid":"XXXXX","ddbcmsapipassword":"XXXXX","orderpolicyrequester":"190101"}};
let provider = Provider();
let mockData = {"[\"openorder\",\"<SOAP-ENV:Envelope xmlns=\\\"http://oss.dbc.dk/ns/openorder\\\" xmlns:SOAP-ENV=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\">\\n     <SOAP-ENV:Body>\\n        <placeOrderRequest>\\n           <authentication>\\n              <groupIdAut>XXXXX</groupIdAut>\\n              <passwordAut>XXXXX</passwordAut>\\n              <userIdAut>XXXXX</userIdAut>\\n           </authentication>\\n           <copy>false</copy>\\n           <exactEdition>false</exactEdition>\\n           <needBeforeDate>2016-08-01T00:00:00</needBeforeDate>\\n           <orderSystem>bibliotekdk</orderSystem>\\n           <pickUpAgencyId>DK-100451</pickUpAgencyId>\\n           <pid>870970-basis:28126727</pid>\\n           <pid>870970-basis:27597726</pid>\\n           <serviceRequester>190101</serviceRequester>\\n           <userAddress>address</userAddress>\\n           <userId>XXXXX</userId>\\n           <userIdAuthenticated>true</userIdAuthenticated>\\n           <userMail>email</userMail>\\n           \\n           <userTelephone>phone</userTelephone>\\n           <verificationReferenceSource>dbcdatawell</verificationReferenceSource>\\n           <outputType>json</outputType>\\n         </placeOrderRequest>\\n      </SOAP-ENV:Body>\\n    </SOAP-ENV:Envelope>\"]":"{\"placeOrderResponse\":{\"orderPlaced\":{\"orderId\":{\"$\":\"1022805579\"},\"orderPlacedMessage\":{\"$\":\"owned_accepted\"}}},\"@namespaces\":{\"oo\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openorder\"}}"};

describe('Automated test: order-multiple-pids-ordered', () => {
  it('expected response. ID:zkfbw9, for {"pids":["870970-basis:28126727","870970-basis:27597726"],"expires":"2016-08-01","library":"DK-100451","phone":"123454","address":"ADDRESS","email":"EMAIL"}', (done) => {
    context.mockData = mockData;
    provider.execute('order', {"pids":["870970-basis:28126727","870970-basis:27597726"],"expires":"2016-08-01","library":"DK-100451","phone":"123454","address":"ADDRESS","email":"EMAIL"}, context)
      .then(result => {
        assert.deepEqual(result,
            {"statusCode":200,"data":{"status":"ok"}});
        done();
      })
      .catch(result => {
        fail({throw: result}, {"statusCode":200,"data":{"status":"ok"}});
        done();
      });
  });
});
