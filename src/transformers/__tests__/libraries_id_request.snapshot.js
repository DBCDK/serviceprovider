// AUTOTEST GENERATOR: {"endpoint":"libraries","params":{"agencyIds":["726500"],"branchIds":["726500"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'libraries';
const params = { agencyIds: ['726500'], branchIds: ['726500'] };

const expected = {
  statusCode: 200,
  data: [
    {
      agencyName: 'Roskilde Bibliotekerne',
      agencyId: '726500',
      agencyType: 'Folkebibliotek',
      agencyEmail: 'adm@roskilde.dk',
      agencyPhone: '46 31 50 00',
      agencyFax: '46 31 50 80',
      agencyCvrNumber: '29189404',
      agencyPNumber: '1003287869',
      branchId: '726500',
      branchType: 'H',
      branchName: ['Roskilde Bibliotek', 'Roskilde Libraries'],
      branchShortName: ['Roskilde Bibliotekerne', 'Roskilde Libraries'],
      branchPhone: '46 31 50 00',
      branchEmail: 'voksen@roskildebib.dk',
      branchIllEmail: 'fjernlaan@roskilde.dk',
      branchIsAgency: '0',
      postalAddress: 'Dronning Margrethes Vej 14 Postbox 229',
      postalCode: '4000',
      city: 'Roskilde',
      isil: 'DK-726500',
      junction: '726500',
      branchCatalogueUrl: 'https://www.roskildebib.dk/search',
      lookupUrl: 'https://www.roskildebib.dk/search/ting/id%3d',
      branchWebsiteUrl: 'https://www.roskildebib.dk',
      serviceDeclarationUrl: 'https://www.roskildebib.dk/node/456',
      registrationFormUrl: 'https://roskildebib.dk/registration',
      registrationFormUrlText: 'Bliv låner',
      userStatusUrl: 'https://www.roskildebib.dk/',
      librarydkSupportEmail: 'voksen@roskilde.dk',
      librarydkSupportPhone: '46 31 50 75',
      openingHours: [
        'Mandag-fredag kl.10-19\r\nlørdag kl. 10-14\r\nsøndage i vinterhalvåret 12-16\r\nSe bogbussens åbningstider på www.roskildebib.dk',
        "Open:\r\nMonday-Friday 10am-7pm\r\nSaturday 10am-2pm\r\nIn the winter months from the 15th of September to the 15th of  April also Sundays 12-4pm\r\n\r\nThe mobile library's times can be found at www.roskildebib.dk"
      ],
      temporarilyClosed: '0',
      illOrderReceiptText: [
        'Din bestilling er gennemført. Biblioteket sender en besked, når du kan afhente materialet.',
        'Your reservation has been completed. The library will send you a message when the material is ready for you to pick up.'
      ],
      pickupAllowed: '1',
      dropOffBranch: '726500',
      dropOffName: 'Roskilde Bibliotek',
      lastUpdated: '2020-11-05T00:00:00+01:00',
      isOclcRsLibrary: '0',
      stateAndUniversityLibraryCopyService: '1',
      geolocation: { latitude: 55.64191, longitude: 12.087845 },
      headOfInstitutionName: 'Christian Lauersen',
      headOfInstitutionTitle: 'Biblioteks- og borgerservicechef',
      nationalDeliveryService: '1',
      willReceiveIll: '1',
      orderParameters: ['cpr', 'pincode', 'email']
    }
  ]
};

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.10/',
    openagency: 'http://vipcore.iscrum-vip-prod.svc.cloud.dbc.dk:8080/1.0/api',
    openholdingstatus: 'https://openholdingstatus.addi.dk/2.2/',
    PRODopenorder: 'https://openorder.addi.dk/3.0',
    openorder: 'https://openorder.addi.dk/test_3.0',
    opensearch: 'https://opensearch.addi.dk/b3.5_5.2/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    suggest: 'http://ortograf.mcp1-proxy.dbc.dk/ortograf/',
    recommend: 'http://booklens-190101-1-0.mi-prod.svc.cloud.dbc.dk/',
    performance: 'http://elk/elasticsearch',
    cicero: 'https://cicero-fbs.com/rest/external/v1/',
    openformat:
      'http://openformat-php-develop.frontend-features.svc.cloud.dbc.dk/server.php',
    holdingsitems:
      'http://holdings-items-content-service.cisterne.svc.cloud.dbc.dk/holdings-items-content-service/api',
    infomediaservice: 'http://infomedia.mcp1-proxy.dbc.dk/server.php'
  },
  cicero: { 'DK-710100': 'XXXXX' },
  performance: { username: 'XXXXX', password: 'XXXXX' },
  search: {
    agency: '775100',
    profile: 'opac',
    collectionidentifiers: ''
  },
  storage: { user: 'XXXXX' },
  netpunkt: { user: 'XXXXX', group: 'XXXXX', password: 'XXXXX' },
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
    orderSystem: 'bibliotekdk',
    ips: { '0': 'XXXXX' },
    access_token: 'XXXXX'
  }
};
const mockData = {};

import Provider from '../../provider/Provider.js';
import { assert, fail } from 'chai';

const provider = Provider();

describe('Automated test: libraries_id_request.snapshot', () => {
  it('has same result as recorded (in libraries_id_request.snapshot)', () => {
    assert(
      Date.now() < +new Date('2022-01-01'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
