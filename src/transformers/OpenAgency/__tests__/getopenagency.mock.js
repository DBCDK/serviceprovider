'use strict';

/**
 * @file
 * Mock object to be used within the openagency.test.js
 * The objects are stringified response parameter in the responseTransform
 * method in the getopenagency.transform.js
 */

/* eslint-disable */

export const gladsaxeAgency = {
  pickupAgency: {
    agencyName: 'Gladsaxe Bibliotekerne',
    agencyId: '715900',
    agencyType: 'Folkebibliotek',
    agencyEmail: 'bibliotek@gladsaxe.dk',
    agencyPhone: '39 57 63 00',
    agencyFax: '39 57 64 20',
    agencyCvrNumber: '62761113',
    agencyPNumber: '1003264446',
    branchId: '715905',
    branchType: 'f',
    branchName: {
      attributes: {
        'oa:language': 'dan'
      },
      '$value': 'Værebro Bibliotek'
    },
    branchShortName: {
      attributes: {
        'oa:language': 'dan'
      },
      '$value': 'Værebro'
    },
    branchPhone: '39 57 64 70',
    branchEmail: 'bkbvaebib@gladsaxe.dk',
    branchIsAgency: '0',
    postalAddress: 'Værebrovej 72',
    postalCode: '2880',
    city: 'Bagsværd',
    isil: 'DK-715905',
    branchPNumber: '1003427362',
    branchCatalogueUrl: 'https://www.gladbib.dk/',
    lookupUrl: 'https://www.gladbib.dk/web/arena1/results?p_p_id=crDetailWicket_WAR_arenaportlets&p_p_lifecycle=1&p_p_state=normal&p_p_mode=view&agency_name=ADK715900&search_item_id=',
    branchWebsiteUrl: 'http://www.gladsaxe.dk/bibliotek',
    serviceDeclarationUrl: 'https://www.gladbib.dk/web/arena1/om-biblioteket',
    registrationFormUrl: 'https://gladbib.dk/web/arena1/ny-laner',
    registrationFormUrlText: 'Indmeldelse som låner på Gladsaxe Bibliotekerne',
    userStatusUrl: 'https://www.gladbib.dk/web/arena1/protected/user-pages',
    librarydkSupportEmail: 'bkbvok@gladsaxe.dk',
    librarydkSupportPhone: '39 57  63 58',
    openingHours: {
      attributes: {
        'oa:language': 'dan'
      },
      '$value': 'man.: 13-18, tirs.-fre.: 10-16, lør.: 10-14. Selvbetjening: man.: 8-13, tirs.-fre.: 8-10, lør.: 8-10.'
    },
    temporarilyClosed: '0',
    illOrderReceiptText: {
      attributes: {
        'oa:language': 'dan'
      },
      '$value': 'Din bestilling vil blive behandlet snarest efter modtagelsen'
    },
    pickupAllowed: '1',
    ncipLookupUser: '1',
    ncipRenewOrder: '1',
    ncipCancelOrder: '1',
    ncipUpdateOrder: '0',
    ncipServerAddress: 'https://bibghl.bib.gladsaxe.dk:4000',
    dropOffBranch: '715900',
    dropOffName: 'Gladsaxe.  Hovedbiblioteket',
    lastUpdated: '2015-01-30',
    isOclcRsLibrary: '0',
    stateAndUniversityLibraryCopyService: '1'
  }
};

export const ballerupAgency = {
  pickupAgency: {
    agencyName: 'Ballerup Bibliotekerne',
    agencyId: '715100',
    agencyType: 'Folkebibliotek',
    agencyEmail: 'Ballerup-bibliotek@balk.dk',
    agencyPhone: '44 77 33 33',
    agencyCvrNumber: '58271713',
    agencyPNumber: '1003259741',
    branchId: '715100',
    branchType: 'H',
    branchName: [
      {
        attributes: {
          'oa:language': 'dan'
        },
        '$value': 'Ballerup Bibliotek'
      },
      {
        attributes: {
          'oa:language': 'eng'
        },
        '$value': 'Ballerup Bibliotek'
      }
    ],
    branchShortName: [
      {
        attributes: {
          'oa:language': 'dan'
        },
        '$value':
          'Ballerup Bibliotek'
      },
      {
        attributes: {
          'oa:language': 'eng'
        },
        '$value': 'Ballerup Bibliotek'
      }
    ],
    branchPhone: '44 77 33 33',
    branchEmail: 'Ballerup-bibliotek@balk.dk',
    branchIsAgency: '0',
    postalAddress: 'Hovedbiblioteket Banegårdspladsen 1',
    postalCode: '2750',
    city: 'Ballerup',
    isil: 'DK-715100',
    branchPNumber: '1003259741',
    branchCatalogueUrl: 'https://bib.ballerup.dk',
    lookupUrl: 'https://bib.ballerup.dk/search/ting/',
    branchWebsiteUrl: 'https://bib.ballerup.dk',
    serviceDeclarationUrl: 'https://bib.ballerup.dk/biblioteker/strategiplan-og-servicemaal',
    librarydkSupportEmail: 'balskranke@balk.dk',
    librarydkSupportPhone: '44 77 33 33',
    openingHours: [
      {
        attributes: {
          'oa:language': 'dan'
        },
        '$value': 'Ma.-to.: 10-19,  fre.: 10-17, lør.: 10-14.'
      },
      {
        attributes: {
          'oa:language': 'eng'
        },
        '$value': 'Mo.-thu.: 10-19,  fri.: 10-17, sat.: 10-14.'
      }
    ],
    temporarilyClosed: '0',
    illOrderReceiptText: [
      {
        attributes: {
          'oa:language': 'dan'
        },
        '$value': 'Din bestilling vil blive behandlet senest hverdagen efter modtagelsen.'
      },
      {
        attributes: {
          'oa:language': 'eng'
        },
        '$value': 'Your request will be handled ASAP - no later than next working day.'
      }
    ],
    pickupAllowed: '1',
    ncipLookupUser: '1',
    ncipRenewOrder: '1',
    ncipCancelOrder: '1',
    ncipUpdateOrder: '0',
    ncipServerAddress: 'https://ballibra.balk.dk:4000',
    dropOffBranch: '715100',
    dropOffName: 'Ballerup Bibliotek',
    lastUpdated: '2015-06-09',
    isOclcRsLibrary: '0',
    stateAndUniversityLibraryCopyService: '1'
  }
};

export const hjoerringAgency = {
  pickupAgency: {
    agencyName: 'Hjørring Bibliotekerne',
    agencyId: '786000',
    agencyType: 'Folkebibliotek',
    agencyEmail: 'bibliotekerne@hjoerring.dk',
    agencyPhone: '72 33 48 00',
    agencyCvrNumber: '29189382',
    agencyPNumber: '1003379475',
    agencyEanNumber: '5798003593654',
    branchId: '786008',
    branchType: 's',
    branchName: {
      attributes: {
        'oa:language': 'dan'
      },
      '$value': 'Bjergby'
    },
    branchShortName: {
      attributes: {
        'oa:language': 'dan'
      },
      '$value': 'Bjergby - Skole'
    },
    branchPhone: {},
    branchEmail: {},
    branchIsAgency: '0',
      postalAddress: 'Bjergby-Mygdal Skole Asdalvej 14 Bjergby',
    postalCode: '9800',
    city: 'Hjørring',
    isil: 'DK-786008',
    branchCatalogueUrl: 'https://hjoweb.axielldrift.dk/sites/XHJBIB/',
    lookupUrl: 'https://hjoweb.axielldrift.dk/sites/XHJBIB/pub/search.html?doaction=showfull&data=format%3dfull%20keyno_list%3d',
    branchWebsiteUrl: 'http://www.hjbib.dk',
    paymentUrl: 'https://hjoweb.axielldrift.dk/sites/XHJBIB/pub/patronstatus.html',
    userStatusUrl: 'https://hjoweb.axielldrift.dk/sites/XHJBIB/pub/patronstatus.html',
    librarydkSupportEmail: 'bibfje@hjoerring.dk',
    temporarilyClosed: '0',
    pickupAllowed: '1',
    ncipLookupUser: '1',
    ncipRenewOrder: '1',
    ncipCancelOrder: '1',
    ncipUpdateOrder: '1',
    ncipServerAddress: 'https://hjobib.axielldrift.dk:4001/',
    dropOffBranch: '786000',
    dropOffName: 'Hjørring Bibliotek',
    lastUpdated: '2015-02-12',
    isOclcRsLibrary: '0',
    stateAndUniversityLibraryCopyService: '1'
  }
};
