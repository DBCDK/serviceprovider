'use strict';

/**
 * Mock for library
 */

export const libraryMock = {
  agencyName: 'Københavns Biblioteker',
  agencyId: '710100',
  branchId: '710118',
  branchNameDan: 'Kulturstationen Vanløse. Biblioteket',
  branchPhone: '33 66 30 00',
  branchEmail: 'bibliotek@kff.kk.dk',
  postalAddress: 'Jernbane Alle 38',
  postalCode: '2720',
  city: 'Vanløse',
  openingHoursDan: 'Åbningstider Mandag-søndag: kl. 8-22',
  branchWebsiteUrl: 'http://bibliotek.kk.dk/',
  query: '710118'
};

export const profileLibraryMock = [{
  agencyID: '710118',
  libraryID: '710100',
  borrowerID: '',
  borrowerPIN: '',
  default: 0
}, {
  agencyID: '710111',
  libraryID: '710100',
  borrowerID: '',
  borrowerPIN: '',
  default: 1
}];

export const profileLibraryWithPinMock = [{
  agencyID: '710118',
  libraryID: '710100',
  borrowerID: '1234id',
  borrowerPIN: '1234pin',
  default: 0
}, {
  agencyID: '710111',
  libraryID: '710100',
  borrowerID: '1234id',
  borrowerPIN: '1234pin',
  default: 1
}];
