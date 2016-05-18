/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
'use strict';
import Provider from '../Provider.js';
import {assert} from 'chai';

let provider = Provider();
let mockData = {"[\"userstatus\",\"<soapenv:Envelope xmlns:soapenv=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\" xmlns:open=\\\"http://oss.dbc.dk/ns/openuserstatus\\\">\\n   <soapenv:Header/>\\n   <soapenv:Body>\\n      <open:cancelOrderRequest>\\n         <open:agencyId>DK-100450</open:agencyId>\\n         <open:authentication>\\n            <open:groupIdAut>XXXXX</open:groupIdAut>\\n            <open:passwordAut>XXXXX</open:passwordAut>\\n            <open:userIdAut>XXXXX</open:userIdAut>\\n         </open:authentication>\\n         <open:cancelOrder>\\n            <open:orderId>non-existing-order</open:orderId>\\n            <open:orderType>{params['cancelOrder.orderType']}</open:orderType>\\n         </open:cancelOrder>\\n         <open:outputType>json</open:outputType>\\n         <open:userId>XXXXX</open:userId>\\n         <open:userPincode>XXXXX</open:userPincode>\\n      </open:cancelOrderRequest>\\n   </soapenv:Body>\\n</soapenv:Envelope>\"]":"{\"cancelOrderResponse\":{\"cancelOrderStatus\":[{\"orderId\":{\"$\":\"non-existing-order\",\"@\":\"ous\"},\"cancelOrderError\":{\"$\":\"Unknown order\",\"@\":\"ous\"},\"@\":\"ous\"}],\"@\":\"ous\"},\"@namespaces\":{\"ous\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openuserstatus\"}}"};

describe('Automated test of the order endpoint', () => {
  it('expected response. ID:zjqjau, for {"pretty":true,"orderId":"non-existing-order","delete":"true"}', (done) => {
    let context = {"opensearch":{"url":"http://opensearch.addi.dk/b3.0_4.2/","agency":775100,"profile":"opac"},"moreinfo":{"url":"http://moreinfo.addi.dk/2.1/","user":"XXXXX","group":"XXXXX","password":"XXXXX"},"popsuggest":{"url":"http://xptest.dbc.dk/ms/entity-pop/v1"},"creatorsuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/creator"},"librarysuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/library","librarytype":"folkebibliotek"},"subjectsuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/subject"},"userstatus":{"salt":"XXXXX","url":"https://openuserstatus.addi.dk/1.4.1/","userid":"XXXXX","userpin":"XXXXX","useragency":"DK-100450","authgroupid":"XXXXX","authpassword":"XXXXX","authid":"XXXXX","uniqueid":"123456"},"orderpolicy":{"url":"https://openorder.addi.dk/test_2.7.1/","servicerequester":"190101"},"recommend":{"url":"http://xptest.dbc.dk/ms/recommend-cosim/v1","filters":["rec.collectionIdentifier:150031-sted OR rec.collectionIdentifier:150031-tema OR rec.collectionIdentifier:775100-katalog OR rec.collectionIdentifier:150033-dandyr OR rec.collectionIdentifier:150008-public OR rec.collectionIdentifier:150052-ekurser OR rec.collectionIdentifier:150015-ereol OR rec.collectionIdentifier:150061-ebog OR rec.collectionIdentifier:150061-netlydbog OR rec.collectionIdentifier:150015-erelic OR rec.collectionIdentifier:870971-faktalink OR rec.collectionIdentifier:150022-alle OR rec.collectionIdentifier:150021-fjern OR rec.collectionIdentifier:870971-forfweb OR rec.collectionIdentifier:150012-ordbog OR rec.collectionIdentifier:150043-atlas OR rec.collectionIdentifier:150005-analyse OR rec.collectionIdentifier:150005-artikel OR rec.collectionIdentifier:150005-portraet OR rec.collectionIdentifier:159014-lokalbibl OR rec.collectionIdentifier:150015-netlydbog OR rec.collectionIdentifier:150060-pressdisp OR rec.collectionIdentifier:150044-safari OR rec.collectionIdentifier:150023-sicref OR rec.collectionIdentifier:150053-turteori OR rec.collectionIdentifier:150033-verdyr OR rec.collectionIdentifier:150059-magasin"]},"openagency":{"url":"http://openagency.addi.dk/2.24/","agency":775100},"openholdingstatus":{"url":"https://openholdingstatus.addi.dk/2.2/","authgroupid":"XXXXX**","authpassword":"XXXXXXXXXX","authid":"XXXXXXXXXX"}};
    context.mockData = mockData;
    provider.execute('order', {"pretty":true,"orderId":"non-existing-order","delete":"true"}, context)
      .then(result => {
        assert.deepEqual(result,
            {"statusCode":500,"error":"Unknown order"});
        done();
      });
  });
});
