// AUTOTEST GENERATOR: {"endpoint":"libraries","params":{"agencyIds":["717500"],"fields":["agencyId","orderParameters"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'libraries';
const params = {agencyIds: ['717500'], fields: ['agencyId', 'orderParameters']};

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
      branchPNumber: '000000',
      branchCatalogueUrl: 'http://www.rdb.dk',
      lookupUrl: 'http://www.rdb.dk/ting/object/870970-basis%3A',
      branchWebsiteUrl: 'http://www.rdb.dk',
      registrationFormUrl: 'https://rdb.dk/gatewayf/registration/information ',
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
      lastUpdated: '2019-05-13T00:00:00+02:00',
      isOclcRsLibrary: '0',
      stateAndUniversityLibraryCopyService: '1',
      geolocation: {latitude: '55.680913', longitude: '12.457274'},
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
      branchPNumber: '000000',
      branchCatalogueUrl: 'http://www.rdb.dk',
      lookupUrl: 'http://www.rdb.dk/ting/object/717500%3A',
      branchWebsiteUrl: 'http://www.rdb.dk',
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
      lastUpdated: '2019-01-25T00:00:00+01:00',
      isOclcRsLibrary: '0',
      stateAndUniversityLibraryCopyService: '1',
      geolocation: {latitude: '55.701627', longitude: '12.454169'},
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
      branchPNumber: '000000',
      branchCatalogueUrl: 'http://www.rdb.dk',
      lookupUrl: 'http://www.rdb.dk/ting/object/717500%3A',
      userStatusUrl:
        'https://www.genvej.gentofte.bibnet.dk/sites/RKB/pub/patronstatus.html',
      openingHours: ['Man, tir og tor:9-16\r\nOns og fre:9-12'],
      temporarilyClosed: '0',
      pickupAllowed: '1',
      dropOffBranch: '717500',
      dropOffName: 'Rødovre Kommunebiblioteker',
      lastUpdated: '2019-01-25T00:00:00+01:00',
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

describe('Automated test: libraries_000_agencyIds.snapshot', () => {
  it('has same result as recorded (in libraries_000_agencyIds.snapshot)', () => {
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
