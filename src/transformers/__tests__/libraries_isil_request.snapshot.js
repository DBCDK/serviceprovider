// AUTOTEST GENERATOR: {"endpoint":"libraries","params":{"fields":["agencyName"],"agencyIds":["DK-726500"],"branchIds":["DK-726500"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'libraries';
const params = {
  fields: ['agencyName'],
  agencyIds: ['DK-726500'],
  branchIds: ['DK-726500']
};

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
      branchPNumber: '000000',
      branchCatalogueUrl: 'https://www.roskildebib.dk/search',
      lookupUrl: 'https://www.roskildebib.dk/search/ting/',
      branchWebsiteUrl: 'https://www.roskildebib.dk',
      serviceDeclarationUrl: 'https://www.roskildebib.dk/node/456',
      registrationFormUrl:
        'https://www.roskildebib.dk/gatewayf/registration/information',
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
        'Bestillingen er gennemført. Biblioteket sender besked når materialet kan afhentes.',
        'Reservation completed. The library will send a message when the material can be picked up'
      ],
      pickupAllowed: '1',
      dropOffBranch: '726500',
      dropOffName: 'Roskilde Bibliotek',
      lastUpdated: '2019-05-24T00:00:00+02:00',
      isOclcRsLibrary: '0',
      stateAndUniversityLibraryCopyService: '1',
      geolocation: {latitude: '55.64191', longitude: '12.087845'},
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
    ddbcmsapi: 'http://rest.filmstriben.dbc.inlead.dk/web/',
    moreinfo: 'http://moreinfo.addi.dk/2.11/',
    openagency: 'http://openagency.addi.dk/2.34/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/3.0/',
    PRODopenorder: 'https://openorder.addi.dk/3.0',
    openorder: 'https://openorder.addi.dk/3.0',
    opensearch: 'http://opensearch.addi.dk/b3.5_5.0/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    rank: 'https://xptest.dbc.dk/ms/rank/v1',
    suggestpopular: 'XXXXX',
    suggestcreator: 'XXXXX',
    suggestlibrary: 'XXXXX',
    suggestsubject: 'XXXXX',
    recommendurls: 'XXXXX'
  },
  search: {agency: '775100', profile: 'opac'},
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
  user: {
    agency: '100450',
    libraryId: '100450',
    isil: 'DK-100450',
    id: 'XXXXX',
    pin: 'XXXXX',
    salt: 'XXXXX'
  },
  app: {
    clientid: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  }
};
const mockData = {};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: libraries_isil_request.snapshot', () => {
  it('has same result as recorded (in libraries_isil_request.snapshot)', () => {
    assert(
      Date.now() < +new Date('2019-09-17'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
