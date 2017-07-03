/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: libraries {"fields":["agencyName"],"agencyIds":["DK-726500"],"branchIds":["DK-726500"]}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

const context = {
  "services": {
    "ddbcmsapi": "https://cmscontent.dbc.dk/",
    "moreinfo": "http://moreinfo.addi.dk/2.6/",
    "openagency": "http://openagency.addi.dk/2.24/",
    "openholdingstatus": "https://openholdingstatus.addi.dk/2.2/",
    "PRODopenorder": "https://openorder.addi.dk/2.7.1/",
    "openorder": "https://openorder.addi.dk/test_2.7.1/",
    "opensearch": "http://opensearch.addi.dk/b3.0_4.2/",
    "openuserstatus": "https://openuserstatus.addi.dk/1.4.1/",
    "rank": "https://xptest.dbc.dk/ms/rank/v1",
    "suggestpopular": "http://xptest.dbc.dk/ms/entity-pop/v1",
    "suggestcreator": "http://xptest.dbc.dk/ms/entity-suggest/v1/creator",
    "suggestlibrary": "http://xptest.dbc.dk/ms/entity-suggest/v1/library",
    "suggestsubject": "http://xptest.dbc.dk/ms/entity-suggest/v1/subject",
    "recommendurls": {
      "default": "https://xptest.dbc.dk/ms/recommend-cosim/v1",
      "popular": "https://xptest.dbc.dk/ms/recommend-pop/v1"
    },
    "communityservice": "http://localhost:4010/v1"
  },
  "communityservice": {
    "id": "XXXXX"
  },
  "search": {
    "agency": "775100",
    "profile": "opac",
    "collectionidentifiers": "rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog"
  },
  "netpunkt": {
    "user": "XXXXX",
    "group": "XXXXX",
    "password": "XXXXX"
  },
  "user": {
    "salt": "XXXXX",
    "pin": "XXXXX",
    "libraryId": "710100",
    "agency": "710100",
    "isil": "DK-710100"
  },
  "app": {
    "clientid": "XXXXX",
    "ddbcmsapipassword": "XXXXX",
    "orderpolicyrequester": "190101",
    "orderSystem": "bibliotekdk"
  }
};
const provider = Provider();
const mockData = {};

describe('Automated test: libraries_isil_request', () => {
  it('expected response. ID:8t5pn3, for {"agencyIds":["DK-726500"],"branchIds":["DK-726500"]}', (done) => {
    context.mockData = mockData;
    provider.execute('libraries', {
      "agencyIds": ["DK-726500"],
      "branchIds": ["DK-726500"]
    }, context)
      .then(result => {
        assert.deepEqual(result,
          {
            "statusCode": 200,
            "data": [{
              "agencyName": "Roskilde Bibliotekerne",
              "agencyId": "726500",
              "agencyType": "Folkebibliotek",
              "agencyEmail": "adm@roskilde.dk",
              "agencyPhone": "46 31 50 00",
              "agencyFax": "46 31 50 80",
              "agencyCvrNumber": "29189404",
              "agencyPNumber": "1003287869",
              "branchId": "726500",
              "branchType": "H",
              "branchName": ["Roskilde Bibliotek", "Roskilde Libraries"],
              "branchShortName": ["Roskilde Bibliotekerne", "Roskilde Libraries"],
              "branchPhone": "46 31 50 00",
              "branchEmail": "voksen@roskildebib.dk",
              "branchIsAgency": "0",
              "postalAddress": "Dronning Margrethes Vej 14 Postbox 229",
              "postalCode": "4000",
              "city": "Roskilde",
              "isil": "DK-726500",
              "branchCatalogueUrl": "https://www.roskildebib.dk/web/arena/",
              "lookupUrl": "https://www.roskildebib.dk/web/arena/results?p_p_id=crDetailWicket_WAR_arenaportlets&p_p_lifecycle=1&p_p_state=normal&p_p_mode=view&agency_name=ADK726500&search_item_id=",
              "branchWebsiteUrl": "http://www.roskildebib.dk",
              "serviceDeclarationUrl": "http://tinyurl.com/mvyshdo",
              "userStatusUrl": "https://www.roskildebib.dk/web/arena/",
              "librarydkSupportEmail": "voksen@roskildebib.dk",
              "librarydkSupportPhone": "46 31 50 75",
              "openingHours": ["Mandag-fredag kl.10-19\r\nlørdag kl. 10-14\r\nsøndage i vinterhalvåret 12-16\r\nSe bogbussens åbningstider på www.roskildebib.dk", "Open:\r\nMonday-Friday 10am-7pm\r\nSaturday 10am-2pm\r\nIn the winter months from the 15th of September to the 15th of  April also Sundays 12-4pm\r\n\r\nThe mobile library's times can be found at www.roskildebib.dk"],
              "temporarilyClosed": "0",
              "illOrderReceiptText": ["Bestillingen er gennemført. Biblioteket sender besked når materialet kan afhentes.", "Reservation completed. The library will send a message when the material can be picked up"],
              "pickupAllowed": "1",
              "dropOffBranch": "726500",
              "dropOffName": "Roskilde Bibliotek",
              "lastUpdated": "2016-03-07T00:00:00+01:00",
              "isOclcRsLibrary": "0",
              "stateAndUniversityLibraryCopyService": "1",
              "geolocation": {"latitude": "55.64191", "longitude": "12.087845"},
              "orderParameters": ["cpr", "pincode", "email"]
            }]
          });
        done();
      })
      .catch(result => {
        fail({throw: result}, {
          "statusCode": 200,
          "data": [{
            "agencyName": "Roskilde Bibliotekerne",
            "agencyId": "726500",
            "agencyType": "Folkebibliotek",
            "agencyEmail": "adm@roskilde.dk",
            "agencyPhone": "46 31 50 00",
            "agencyFax": "46 31 50 80",
            "agencyCvrNumber": "29189404",
            "agencyPNumber": "1003287869",
            "branchId": "726500",
            "branchType": "H",
            "branchName": ["Roskilde Bibliotek", "Roskilde Libraries"],
            "branchShortName": ["Roskilde Bibliotekerne", "Roskilde Libraries"],
            "branchPhone": "46 31 50 00",
            "branchEmail": "voksen@roskildebib.dk",
            "branchIsAgency": "0",
            "postalAddress": "Dronning Margrethes Vej 14 Postbox 229",
            "postalCode": "4000",
            "city": "Roskilde",
            "isil": "DK-726500",
            "branchCatalogueUrl": "https://www.roskildebib.dk/web/arena/",
            "lookupUrl": "https://www.roskildebib.dk/web/arena/results?p_p_id=crDetailWicket_WAR_arenaportlets&p_p_lifecycle=1&p_p_state=normal&p_p_mode=view&agency_name=ADK726500&search_item_id=",
            "branchWebsiteUrl": "http://www.roskildebib.dk",
            "serviceDeclarationUrl": "http://tinyurl.com/mvyshdo",
            "userStatusUrl": "https://www.roskildebib.dk/web/arena/",
            "librarydkSupportEmail": "voksen@roskildebib.dk",
            "librarydkSupportPhone": "46 31 50 75",
            "openingHours": ["Mandag-fredag kl.10-19\r\nlørdag kl. 10-14\r\nsøndage i vinterhalvåret 12-16\r\nSe bogbussens åbningstider på www.roskildebib.dk", "Open:\r\nMonday-Friday 10am-7pm\r\nSaturday 10am-2pm\r\nIn the winter months from the 15th of September to the 15th of  April also Sundays 12-4pm\r\n\r\nThe mobile library's times can be found at www.roskildebib.dk"],
            "temporarilyClosed": "0",
            "illOrderReceiptText": ["Bestillingen er gennemført. Biblioteket sender besked når materialet kan afhentes.", "Reservation completed. The library will send a message when the material can be picked up"],
            "pickupAllowed": "1",
            "dropOffBranch": "726500",
            "dropOffName": "Roskilde Bibliotek",
            "lastUpdated": "2016-03-07T00:00:00+01:00",
            "isOclcRsLibrary": "0",
            "stateAndUniversityLibraryCopyService": "1",
            "geolocation": {"latitude": "55.64191", "longitude": "12.087845"},
            "orderParameters": ["cpr", "pincode", "email"]
          }]
        });
        done();
      });
  });
});
