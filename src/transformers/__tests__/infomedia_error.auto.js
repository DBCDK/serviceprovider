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
  statusCode: 403,
  error: 'forbidden'
};

const context = {
  access: ['infomedia'],
  services: {
    infomediaservice: 'http://infomedia.mcp1-proxy.dbc.dk/server.php'
  },
  infomedia: {
    userId: 'XXXXX'
  },
  user: {
    libraryId: 'DK-710100'
  }
};
const mockData = {
  '["infomediaservice","\\n  <SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope\\"\\n    xmlns:xml=\\"http://www.w3.org/XML/1998/namespace\\"\\n    xmlns:wsdl=\\"http://schemas.xmlsoap.org/wsdl/\\"\\n    xmlns:xs=\\"http://www.w3.org/2001/XMLSchema\\"\\n    xmlns:uaim=\\"http://oss.dbc.dk/ns/useraccessinfomedia\\"\\n    xmlns:soap=\\"http://schemas.xmlsoap.org/wsdl/soap/\\"\\n    xmlns:xmlns=\\"http://www.w3.org/1999/xhtml\\">\\n    <SOAP-ENV:Body>\\n    <uaim:getArticleRequest>\\n      <uaim:articleIdentifier>\\n        <uaim:faust>34146233</uaim:faust>\\n      </uaim:articleIdentifier>\\n      <uaim:userId>XXXXX</uaim:userId>\\n      <uaim:libraryCode>710100</uaim:libraryCode>\\n      <uaim:outputType>json</uaim:outputType>\\n    </uaim:getArticleRequest>\\n    </SOAP-ENV:Body>\\n  </SOAP-ENV:Envelope>"]':
    '{"getArticleResponse":{"error":{"$":"service_not_licensed","@":"uaim"},"@":"uaim"},"@namespaces":{"soap":"http://schemas.xmlsoap.org/wsdl/soap/","uaim":"http://oss.dbc.dk/ns/useraccessinfomedia","wsdl":"http://schemas.xmlsoap.org/wsdl/","xml":"http://www.w3.org/XML/1998/namespace","xmlns":"http://www.w3.org/1999/xhtml","xs":"http://www.w3.org/2001/XMLSchema"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: infomedia.auto', () => {
  it('has same result as recorded (in  infomedia.auto)', () => {
    assert(
      Date.now() < +new Date('2024-01-01'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
