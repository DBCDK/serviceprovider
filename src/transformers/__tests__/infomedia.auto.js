// AUTOTEST GENERATOR: {"endpoint":"infomedia","params":{"pid":"870971-anmeld:34146233"}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'infomedia';
const params = {pid: '870971-anmeld:34146233'};

const expected = {
  statusCode: 200,
  data: [
    {
      id: 'abcdefgh',
      html: '<div>some content</div>'
    }
  ]
};

const context = {
  access: ['infomedia'],
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.11/',
    openagency: 'https://openagency.addi.dk/2.34/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/3.0/',
    PRODopenorder: 'https://openorder.addi.dk/2.8/',
    openorder: 'https://openorder.addi.dk/2.8/',
    opensearch: 'https://opensearch.addi.dk/b3.5_5.0/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    suggest: 'http://ortograf.mcp1-proxy.dbc.dk/ortograf/',
    recommend: 'http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim',
    performance: 'https://elk-p01.dbc.dk:9100/',
    communityservice: 'http://localhost:4010/v1',
    cicero: 'https://cicero-fbs.com/rest/external/v1/',
    rank: 'https://xptest.dbc.dk/ms/rank/v1',
    infomediaservice: 'http://infomedia.mcp1-proxy.dbc.dk/server.php'
  },
  infomedia: {
    userId: 'XXXXX',
    libraryCode: 'XXXXX'
  },
  cicero: {'DK-710100': 'XXXXX'},
  performance: {username: 'XXXXX', password: 'XXXXX'},
  communityservice: {id: 1},
  search: {agency: '710100', profile: 'opac', collectionidentifiers: ''},
  storage: {user: 'XXXXX'},
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
  user: {
    id: 'XXXXX',
    salt: 'XXXXX',
    pin: 'XXXXX',
    libraryId: '710100',
    agency: '710100',
    isil: 'DK-710100'
  },
  app: {
    clientId: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  }
};
const mockData = {
  '["infomediaservice","\\n  <SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope\\"\\n    xmlns:xml=\\"http://www.w3.org/XML/1998/namespace\\" \\n    xmlns:wsdl=\\"http://schemas.xmlsoap.org/wsdl/\\" \\n    xmlns:xs=\\"http://www.w3.org/2001/XMLSchema\\" \\n    xmlns:uaim=\\"http://oss.dbc.dk/ns/useraccessinfomedia\\" \\n    xmlns:soap=\\"http://schemas.xmlsoap.org/wsdl/soap/\\" \\n    xmlns:xmlns=\\"http://www.w3.org/1999/xhtml\\">\\n    <SOAP-ENV:Body>\\n    <uaim:getArticleRequest>\\n      <uaim:articleIdentifier>\\n        <uaim:faust>34146233</uaim:faust>\\n      </uaim:articleIdentifier>\\n      <uaim:userId>XXXXX</uaim:userId>\\n      <uaim:libraryCode>XXXXX</uaim:libraryCode>\\n      <uaim:outputType>json</uaim:outputType>\\n    </uaim:getArticleRequest>\\n    </SOAP-ENV:Body>\\n  </SOAP-ENV:Envelope>"]':
    '{"getArticleResponse":{"getArticleResponseDetails":[{"articleVerified":{"$":"true","@":"uaim"},"articleIdentifier":{"$":"abcdefgh","@":"uaim"},"imArticle":{"$":"<div>some content</div>","@":"uaim"},"@":"uaim"}],"@":"uaim"},"@namespaces":{"soap":"http:\\/\\/schemas.xmlsoap.org\\/wsdl\\/soap\\/","uaim":"http://oss.dbc.dk/ns/useraccessinfomedia","wsdl":"http:\\/\\/schemas.xmlsoap.org\\/wsdl\\/","xml":"http:\\/\\/www.w3.org\\/XML\\/1998\\/namespace","xmlns":"http:\\/\\/www.w3.org\\/1999\\/xhtml","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: infomedia.auto', () => {
  it('has same result as recorded (in  infomedia.auto)', () => {
    assert(
      Date.now() < +new Date('2019-11-17'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
