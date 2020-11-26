// AUTOTEST GENERATOR: {"endpoint":"libraries","params":{"fields":["agencyId","orderParameters"],"agencyIds":["717500"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'libraries';
const params = {
  fields: ['agencyId', 'orderParameters'],
  agencyIds: ['717500']
};

const expected = {
  statusCode: 200,
  data: [
    {
      agencyName: 'Rødovre Bibliotek',
      agencyId: '717500',
      agencyType: 'Folkebibliotek',
      agencyEmail: 'biblioteket@rk.dk',
      agencyPhone: '36 37 97 00',
      agencyCvrNumber: '65307316',
      agencyPNumber: '1003271659',
      branchId: '717500',
      branchType: 'H',
      branchName: ['Rødovre Bibliotek'],
      branchShortName: ['Rødovre Bibliotek', 'Rødovre Bibliotek'],
      branchPhone: '36 37 97 00',
      branchEmail: 'biblioteket@rk.dk',
      branchIllEmail: 'bibliotekar@rk.dk',
      branchIsAgency: '0',
      postalAddress: 'Rødovre Parkvej 140',
      postalCode: '2610',
      city: 'Rødovre',
      isil: 'DK-717500',
      junction: '715700',
      branchCatalogueUrl: 'http://www.rdb.dk',
      lookupUrl: 'http://www.rdb.dk/ting/object/870970-basis%3A',
      branchWebsiteUrl: 'http://www.rdb.dk',
      registrationFormUrl: 'https://rdb.dk/registration',
      userStatusUrl: 'http://www.rdb.dk',
      librarydkSupportEmail: 'bibliotekar@rk.dk',
      librarydkSupportPhone: '36 37 97 22',
      openingHours: [
        'Man-Tors:10.00-19.00\r\nFre:10.00-17.00\r\nLør: 10-14\r\nSøn: 10-14'
      ],
      temporarilyClosed: '0',
      illOrderReceiptText: [
        'Din bestilling er modtaget',
        'Your reservation has been received'
      ],
      pickupAllowed: '1',
      dropOffBranch: '717500',
      dropOffName: 'Rødovre Kommunebiblioteker',
      lastUpdated: '2020-07-08T00:00:00+02:00',
      isOclcRsLibrary: '0',
      stateAndUniversityLibraryCopyService: '1',
      geolocation: {latitude: 55.680913, longitude: 12.457274},
      headOfInstitutionName: 'Lone Terpgaard-Jensen',
      headOfInstitutionTitle: 'Bibliotekschef',
      nationalDeliveryService: '1',
      willReceiveIll: '1',
      orderParameters: ['userId', 'pincode', 'name', 'address']
    },
    {
      agencyName: 'Rødovre Bibliotek',
      agencyId: '717500',
      agencyType: 'Folkebibliotek',
      agencyEmail: 'biblioteket@rk.dk',
      agencyPhone: '36 37 97 00',
      agencyCvrNumber: '65307316',
      agencyPNumber: '1003271659',
      branchId: '717501',
      branchType: 'f',
      branchName: ['Islev Bibliotek: Trekanten'],
      branchShortName: ['Islev', 'Islev'],
      branchPhone: '36 37 85 00',
      branchEmail: 'biblioteket@rk.dk',
      branchIllEmail: 'bibliotekar@rk.dk',
      branchIsAgency: '0',
      postalAddress: 'Rødovrevej 405',
      postalCode: '2610',
      city: 'Rødovre',
      isil: 'DK-717501',
      junction: '715700',
      branchCatalogueUrl: 'http://www.rdb.dk',
      lookupUrl: 'http://www.rdb.dk/ting/object/870970-basis%3A',
      branchWebsiteUrl: 'http://www.rdb.dk',
      registrationFormUrl: 'https://rdb.dk/gatewayf/registration/information',
      userStatusUrl:
        'https://www.genvej.gentofte.bibnet.dk/sites/RKB/pub/patronstatus.html',
      librarydkSupportEmail: 'bibliotekar@rk.dk',
      librarydkSupportPhone: '36 36 90 36',
      openingHours: [
        'Man-tir og tor:12-18\r\nOns: 10-18\r\nFre: 12-16\r\nLør: 10-14',
        'Mon-tues and thur: 12-18\r\nWed: 10-18\r\nFri: 12-16\r\nSat: 10-14'
      ],
      temporarilyClosed: '0',
      illOrderReceiptText: [
        'Din bestilling er modtaget',
        'Your reservation has been received'
      ],
      pickupAllowed: '1',
      dropOffBranch: '717500',
      dropOffName: 'Rødovre Kommunebiblioteker',
      lastUpdated: '2020-07-08T00:00:00+02:00',
      isOclcRsLibrary: '0',
      stateAndUniversityLibraryCopyService: '1',
      geolocation: {latitude: 55.701627, longitude: 12.454169},
      headOfInstitutionName: 'Lone Terpgaard-Jensen',
      headOfInstitutionTitle: 'Bibliotekschef',
      nationalDeliveryService: '1',
      willReceiveIll: '1',
      orderParameters: ['userId', 'pincode', 'name', 'address']
    },
    {
      agencyName: 'Rødovre Bibliotek',
      agencyId: '717500',
      agencyType: 'Folkebibliotek',
      agencyEmail: 'biblioteket@rk.dk',
      agencyPhone: '36 37 97 00',
      agencyCvrNumber: '65307316',
      agencyPNumber: '1003271659',
      branchId: '717502',
      branchType: 'f',
      branchName: ['Cafébiblioteket: Tremilen'],
      branchShortName: ['Cafébiblioteket'],
      branchPhone: '36 47 46 16',
      branchEmail: 'biblioteket@rk.dk',
      branchIllEmail: 'bibliotekar@rk.dk',
      branchIsAgency: '0',
      postalAddress: 'Uddannelsescenter Milestedet Nørrekær 8',
      postalCode: '2610',
      city: 'Rødovre',
      isil: 'DK-717502',
      junction: '715700',
      branchCatalogueUrl: 'http://www.rdb.dk',
      lookupUrl: 'http://www.rdb.dk/ting/object/870970-basis%3A',
      registrationFormUrl: 'https://rdb.dk/gatewayf/registration/information',
      userStatusUrl:
        'https://www.genvej.gentofte.bibnet.dk/sites/RKB/pub/patronstatus.html',
      openingHours: ['Man, tir og tor:9-16\r\nOns og fre:9-12'],
      temporarilyClosed: '1',
      temporarilyClosedReason: [
        'Vi modtager pt. ikke bestillinger pga. corona.',
        'Temporary closed'
      ],
      pickupAllowed: '0',
      dropOffBranch: '717500',
      dropOffName: 'Rødovre Kommunebiblioteker',
      lastUpdated: '2020-07-08T00:00:00+02:00',
      isOclcRsLibrary: '0',
      stateAndUniversityLibraryCopyService: '1',
      headOfInstitutionName: 'Lone Terpgaard-Jensen',
      headOfInstitutionTitle: 'Bibliotekschef',
      nationalDeliveryService: '1',
      willReceiveIll: '1',
      orderParameters: ['userId', 'pincode', 'name', 'address']
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
    opensearch: 'https://opensearch.addi.dk/b3.5_5.0/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    suggest: 'http://ortograf.mcp1-proxy.dbc.dk/ortograf/',
    recommend: 'http://booklens-190101-1-0.mi-prod.svc.cloud.dbc.dk/',
    performance: 'http://elk/elasticsearch',
    communityservice: 'http://localhost:4010/v1',
    cicero: 'https://cicero-fbs.com/rest/external/v1/',
    openformat:
      'http://openformat-php-develop.frontend-features.svc.cloud.dbc.dk/server.php',
    holdingsitems:
      'http://holdings-items-content-service.cisterne.svc.cloud.dbc.dk/holdings-items-content-service/api',
    infomediaservice: 'http://infomedia.mcp1-proxy.dbc.dk/server.php'
  },
  cicero: {'DK-710100': 'XXXXX'},
  performance: {username: 'XXXXX', password: 'XXXXX'},
  communityservice: {id: 1},
  search: {
    agency: '775100',
    profile: 'opac',
    collectionidentifiers: ''
  },
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
    orderSystem: 'bibliotekdk',
    ips: {'0': 'XXXXX'},
    access_token: 'XXXXX'
  }
};
const mockData = {};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

const provider = Provider();

describe('Automated test: libraries_000_agencyIds.snapshot', () => {
  it('has same result as recorded (in libraries_000_agencyIds.snapshot)', () => {
    assert(
      Date.now() < +new Date('2021-02-24'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
