/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
// Request: order {"orderId":"Hold:NCIPMDAxOXwyNy0wNS0yMDE2IDEwOjA0OjAyfEdlcmxvdywgSmVhbmV0dGUgJk9zbGFzaDticm98RGV0ICZtaWRkb3Q7bm9yc2tlIGpvYnx8fA==","delete":true}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

let context = {"services":{"ddbcmsapi":"http://rest.filmstriben.dbc.inlead.dk/web/","moreinfo":"http://moreinfo.addi.dk/2.6/","openagency":"http://openagency.addi.dk/2.24/","openholdingstatus":"https://openholdingstatus.addi.dk/2.2/","openorder":"https://openorder.addi.dk/2.7.1/","TESTopenorder":"https://openorder.addi.dk/test_2.7.1/","opensearch":"http://opensearch.addi.dk/b3.0_4.2/","openuserstatus":"https://openuserstatus.addi.dk/1.5/","rank":"https://xptest.dbc.dk/ms/rank/v1","suggestpopular":"http://xptest.dbc.dk/ms/entity-pop/v1","suggestcreator":"http://xptest.dbc.dk/ms/entity-suggest/v1/creator","suggestlibrary":"http://xptest.dbc.dk/ms/entity-suggest/v1/library","suggestsubject":"http://xptest.dbc.dk/ms/entity-suggest/v1/subject","recommendurls":{"default":"https://xptest.dbc.dk/ms/recommend-cosim/v1","popular":"https://xptest.dbc.dk/ms/recommend-pop/v1"}},"search":{"agency":"775100","profile":"opac","collectionidentifiers":"rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog"},"netpunkt":{"user":"XXXXX","group":"XXXXX","password":"XXXXX"},"user":{"agency":"DK-100451","id":"XXXXX","pin":"XXXXX","salt":"XXXXX", "isil": "DK-100451"},"app":{"clientid":"XXXXX","ddbcmsapipassword":"XXXXX","orderpolicyrequester":"190101"}};
let provider = Provider();
let mockData = {"[\"openuserstatus\",\"<soapenv:Envelope xmlns:soapenv=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\" xmlns:open=\\\"http://oss.dbc.dk/ns/openuserstatus\\\">\\n   <soapenv:Header/>\\n   <soapenv:Body>\\n      <open:cancelOrderRequest>\\n         <open:agencyId>DK-100451</open:agencyId>\\n         <open:authentication>\\n            <open:groupIdAut>XXXXX</open:groupIdAut>\\n            <open:passwordAut>XXXXX</open:passwordAut>\\n            <open:userIdAut>XXXXX</open:userIdAut>\\n         </open:authentication>\\n         <open:cancelOrder>\\n            <open:orderId>NCIPMDAxOXwyNy0wNS0yMDE2IDEwOjA0OjAyfEdlcmxvdywgSmVhbmV0dGUgJk9zbGFzaDticm98RGV0ICZtaWRkb3Q7bm9yc2tlIGpvYnx8fA==</open:orderId>\\n            <open:orderType>{params['cancelOrder.orderType']}</open:orderType>\\n         </open:cancelOrder>\\n         <open:outputType>json</open:outputType>\\n         <open:userId>XXXXX</open:userId>\\n         <open:userPincode>XXXXX</open:userPincode>\\n      </open:cancelOrderRequest>\\n   </soapenv:Body>\\n</soapenv:Envelope>\"]":"{\"cancelOrderResponse\":{\"cancelOrderStatus\":[{\"orderId\":{\"$\":\"NCIPMDAxOXwyNy0wNS0yMDE2IDEwOjA0OjAyfEdlcmxvdywgSmVhbmV0dGUgJk9zbGFzaDticm98RGV0ICZtaWRkb3Q7bm9yc2tlIGpvYnx8fA==\",\"@\":\"ous\"},\"orderCancelled\":{\"$\":\"\",\"@\":\"ous\"},\"@\":\"ous\"}],\"@\":\"ous\"},\"@namespaces\":{\"ous\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openuserstatus\"}}"};

describe('Automated test: order-delete-existing-order', () => {
  it('expected response. ID:9vgcu5, for {"orderId":"Hold:NCIPMDAxOXwyNy0wNS0yMDE2IDEwOjA0OjAyfEdlcmxvdywgSmVhbmV0dGUgJk9zbGFzaDticm98RGV0ICZtaWRkb3Q7bm9yc2tlIGpvYnx8fA==","delete":true}', (done) => {
    context.mockData = mockData;
    provider.execute('order', {"orderId":"Hold:NCIPMDAxOXwyNy0wNS0yMDE2IDEwOjA0OjAyfEdlcmxvdywgSmVhbmV0dGUgJk9zbGFzaDticm98RGV0ICZtaWRkb3Q7bm9yc2tlIGpvYnx8fA==","delete":true}, context)
      .then(result => {
        assert.deepEqual(result,
            {"statusCode":200,"data":{"deleted":true,"orderId":"NCIPMDAxOXwyNy0wNS0yMDE2IDEwOjA0OjAyfEdlcmxvdywgSmVhbmV0dGUgJk9zbGFzaDticm98RGV0ICZtaWRkb3Q7bm9yc2tlIGpvYnx8fA=="}});
        done();
      })
      .catch(result => {
        fail({throw: result}, {"statusCode":200,"data":{"deleted":true,"orderId":"NCIPMDAxOXwyNy0wNS0yMDE2IDEwOjA0OjAyfEdlcmxvdywgSmVhbmV0dGUgJk9zbGFzaDticm98RGV0ICZtaWRkb3Q7bm9yc2tlIGpvYnx8fA=="}});
        done();
      });
  });
});
