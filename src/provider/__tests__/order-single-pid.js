/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
'use strict';
import Provider from '../Provider.js';
import {assert} from 'chai';

let provider = Provider();
let mockData = {"[\"orderpolicy\",\"<SOAP-ENV:Envelope xmlns=\\\"http://oss.dbc.dk/ns/openorder\\\" xmlns:SOAP-ENV=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\">\\n     <SOAP-ENV:Body>\\n        <placeOrderRequest>\\n           <authentication>\\n              <groupIdAut>XXXXX</groupIdAut>\\n              <passwordAut>XXXXX</passwordAut>\\n              <userIdAut>XXXXX</userIdAut>\\n           </authentication>\\n           <copy>false</copy>\\n           <exactEdition>false</exactEdition>\\n           <needBeforeDate>2016-08-01T00:00:00</needBeforeDate>\\n           <orderSystem>bibliotekdk</orderSystem>\\n           <pickUpAgencyId>DK-100451</pickUpAgencyId>\\n           <pid>870970-basis:28126727</pid>\\n           <serviceRequester>190101</serviceRequester>\\n           <userAddress>address</userAddress>\\n           <userId>XXXXX</userId>\\n           <userIdAuthenticated>true</userIdAuthenticated>\\n           <userMail>email</userMail>\\n           <userName>name</userName>\\n           <userTelephone>phone</userTelephone>\\n           <verificationReferenceSource>dbcdatawell</verificationReferenceSource>\\n           <outputType>json</outputType>\\n         </placeOrderRequest>\\n      </SOAP-ENV:Body>\\n    </SOAP-ENV:Envelope>\"]":"{\"placeOrderResponse\":{\"orderPlaced\":{\"orderId\":{\"$\":\"1022692208\"},\"orderPlacedMessage\":{\"$\":\"not_owned_ILL_loc\"}}},\"@namespaces\":{\"oo\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openorder\"}}"};

describe('Automated test of the order endpoint', () => {
  it('expected response. ID:bic9u7, for {"pretty":true,"pids":["870970-basis:28126727"],"expires":"2016-08-01","library":"DK-100451","phone":"123454","address":"ADDRESS","email":"EMAIL","name":"NAME","agencyId":"DK-100450","userId":"XXXXX","userPincode":"XXXXX","authentication.groupIdAut":"XXXXX","authentication.passwordAut":"XXXXX","authentication.userIdAut":"XXXXX","outputType":"json","serviceRequester":"190101"}', (done) => {
    let context = {"opensearch":{"url":"http://opensearch.addi.dk/b3.0_4.2/","agency":775100,"profile":"opac"},"moreinfo":{"url":"http://moreinfo.addi.dk/2.1/","user":"XXXXX","group":"XXXXX","password":"XXXXX"},"popsuggest":{"url":"http://xptest.dbc.dk/ms/entity-pop/v1"},"creatorsuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/creator"},"librarysuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/library","librarytype":"folkebibliotek"},"subjectsuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/subject"},"userstatus":{"salt":"XXXXX","url":"https://openuserstatus.addi.dk/1.4.1/","userid":"XXXXX","userpin":"XXXXX","useragency":"DK-100450","authgroupid":"XXXXX","authpassword":"XXXXX","authid":"XXXXX","uniqueid":"123456"},"orderpolicy":{"url":"https://openorder.addi.dk/test_2.7.1/","servicerequester":"190101"},"recommend":{"url":"http://xptest.dbc.dk/ms/recommend-cosim/v1","filters":["rec.collectionIdentifier:150031-sted OR rec.collectionIdentifier:150031-tema OR rec.collectionIdentifier:775100-katalog OR rec.collectionIdentifier:150033-dandyr OR rec.collectionIdentifier:150008-public OR rec.collectionIdentifier:150052-ekurser OR rec.collectionIdentifier:150015-ereol OR rec.collectionIdentifier:150061-ebog OR rec.collectionIdentifier:150061-netlydbog OR rec.collectionIdentifier:150015-erelic OR rec.collectionIdentifier:870971-faktalink OR rec.collectionIdentifier:150022-alle OR rec.collectionIdentifier:150021-fjern OR rec.collectionIdentifier:870971-forfweb OR rec.collectionIdentifier:150012-ordbog OR rec.collectionIdentifier:150043-atlas OR rec.collectionIdentifier:150005-analyse OR rec.collectionIdentifier:150005-artikel OR rec.collectionIdentifier:150005-portraet OR rec.collectionIdentifier:159014-lokalbibl OR rec.collectionIdentifier:150015-netlydbog OR rec.collectionIdentifier:150060-pressdisp OR rec.collectionIdentifier:150044-safari OR rec.collectionIdentifier:150023-sicref OR rec.collectionIdentifier:150053-turteori OR rec.collectionIdentifier:150033-verdyr OR rec.collectionIdentifier:150059-magasin"]},"openagency":{"url":"http://openagency.addi.dk/2.24/","agency":775100},"openholdingstatus":{"url":"https://openholdingstatus.addi.dk/2.2/","authgroupid":"XXXXX**","authpassword":"XXXXXXXXXX","authid":"XXXXXXXXXX"}};
    context.mockData = mockData;
    provider.execute('order', {"pretty":true,"pids":["870970-basis:28126727"],"expires":"2016-08-01","library":"DK-100451","phone":"123454","address":"ADDRESS","email":"EMAIL","name":"NAME","agencyId":"DK-100450","userId":"XXXXX","userPincode":"XXXXX","authentication.groupIdAut":"XXXXX","authentication.passwordAut":"XXXXX","authentication.userIdAut":"XXXXX","outputType":"json","serviceRequester":"190101"}, context)
      .then(result => {
        assert.deepEqual(result,
            {"statusCode":200,"data":"ok"});
        done();
      });
  });
});