/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
// Request: user {}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

let context = {
  "services": {
    "ddbcmsapi": "http://rest.filmstriben.dbc.inlead.dk/web/",
    "moreinfo": "http://moreinfo.addi.dk/2.6/",
    "openagency": "http://openagency.addi.dk/2.24/",
    "openholdingstatus": "https://openholdingstatus.addi.dk/2.2/",
    "openorder": "https://openorder.addi.dk/2.7.1/",
    "TESTopenorder": "https://openorder.addi.dk/test_2.7.1/",
    "opensearch": "http://opensearch.addi.dk/b3.0_4.2/",
    "openuserstatus": "https://openuserstatus.addi.dk/1.5/",
    "rank": "https://xptest.dbc.dk/ms/rank/v1",
    "suggestpopular": "http://xptest.dbc.dk/ms/entity-pop/v1",
    "suggestcreator": "http://xptest.dbc.dk/ms/entity-suggest/v1/creator",
    "suggestlibrary": "http://xptest.dbc.dk/ms/entity-suggest/v1/library",
    "suggestsubject": "http://xptest.dbc.dk/ms/entity-suggest/v1/subject",
    "recommendurls": {
      "default": "https://xptest.dbc.dk/ms/recommend-cosim/v1",
      "popular": "https://xptest.dbc.dk/ms/recommend-pop/v1"
    }
  },
  "search": {
    "agency": "775100",
    "profile": "opac",
    "collectionidentifiers": "rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog"
  },
  "netpunkt": {"user": "XXXXX", "group": "XXXXX", "password": "XXXXX"},
  "user": {"agency": "100451", "id": "XXXXX", "pin": "XXXXX", "salt": "XXXXX"},
  "app": {"clientid": "XXXXX", "ddbcmsapipassword": "XXXXX", "orderpolicyrequester": "190101"}
};
let provider = Provider();
let mockData = {"[\"openuserstatus\",{\"qs\":{\"agencyId\":\"100451\",\"userId\":\"XXXXX\",\"userPincode\":\"XXXXX\",\"authentication.groupIdAut\":\"XXXXX\",\"authentication.passwordAut\":\"XXXXX\",\"authentication.userIdAut\":\"XXXXX\",\"action\":\"getUserStatus\",\"outputType\":\"json\"}}]": "{\"getUserStatusResponse\":{\"userId\":{\"$\":\"XXXXX\",\"@\":\"ous\"},\"userName\":{\"$\":\"X-name\",\"@\":\"ous\"},\"userAddress\":{\"$\":\"X-address\",\"@\":\"ous\"},\"userPostalCode\":{\"$\":\"X-postalcode\",\"@\":\"ous\"},\"userMail\":{\"$\":\"X-mail\",\"@\":\"ous\"},\"userStatus\":{\"loanedItems\":{\"loan\":[{\"title\":{\"$\":\"9900.\",\"@\":\"ous\"},\"dateDue\":{\"$\":\"2016-06-20T00:00:00+02:00\",\"@\":\"ous\"},\"loanId\":{\"$\":\"NCIPMDAxOXw5OTAwfHw5OTAwLnx8\",\"@\":\"ous\"},\"@\":\"ous\"},{\"author\":{\"$\":\"Rosen, Michael\",\"@\":\"ous\"},\"title\":{\"$\":\"Smut\",\"@\":\"ous\"},\"dateDue\":{\"$\":\"2016-06-29T00:00:00+02:00\",\"@\":\"ous\"},\"loanId\":{\"$\":\"NCIPMDAxOXwwMDAwMDMyNDg0fFJvc2VuLCBNaWNoYWVsfFNtdXR8fHw=\",\"@\":\"ous\"},\"@\":\"ous\"}],\"loansCount\":{\"$\":\"2\",\"@\":\"ous\"},\"@\":\"ous\"},\"orderedItems\":{\"order\":[{\"author\":{\"$\":\"Loumann, Ole\",\"@\":\"ous\"},\"title\":{\"$\":\"Turen g\\u00e5r til Gran Canaria, Fuerteventura og Lanzarote\",\"@\":\"ous\"},\"orderDate\":{\"$\":\"2016-05-27T00:00:00+02:00\",\"@\":\"ous\"},\"orderId\":{\"$\":\"NCIPMDAxOXwyNy0wNS0yMDE2IDEwOjA3OjU4fExvdW1hbm4sIE9sZXxUdXJlbiBnJmFyaW5nO3IgdGlsIEdyYW4gQ2FuYXJpYSwgRnVlcnRldmVudHVyYSBvZyBMYW56YXJvdGV8fHwx\",\"@\":\"ous\"},\"orderStatus\":{\"$\":\"In process\",\"@\":\"ous\"},\"orderType\":{\"$\":\"Hold\",\"@\":\"ous\"},\"holdQueuePosition\":{\"$\":\"1\",\"@\":\"ous\"},\"pickUpAgency\":{\"$\":\"DK-100451\",\"@\":\"ous\"},\"@\":\"ous\"}],\"ordersCount\":{\"$\":\"1\",\"@\":\"ous\"},\"@\":\"ous\"},\"@\":\"ous\"},\"@\":\"ous\"},\"@namespaces\":{\"ous\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openuserstatus\"}}"};
let expected = {
  "statusCode": 200,
  "data": {
    "id": "KbZ0UoBGys8QMLzieTQ5mHZ39ivzulP4",
    "name": "X-name",
    "address": "X-address",
    "postalCode": "X-postalcode",
    "agency": "100451",
    "mail": "X-mail",
    "loans": [{
      "loanId": "NCIPMDAxOXw5OTAwfHw5OTAwLnx8",
      "dueDate": "2016-06-20T00:00:00+02:00",
      "title": "9900."
    }, {
      "loanId": "NCIPMDAxOXwwMDAwMDMyNDg0fFJvc2VuLCBNaWNoYWVsfFNtdXR8fHw=",
      "dueDate": "2016-06-29T00:00:00+02:00",
      "title": "Smut",
      "creator": "Rosen, Michael"
    }],
    "orders": [{
      "title": "Turen går til Gran Canaria, Fuerteventura og Lanzarote",
      "orderId": "Hold:NCIPMDAxOXwyNy0wNS0yMDE2IDEwOjA3OjU4fExvdW1hbm4sIE9sZXxUdXJlbiBnJmFyaW5nO3IgdGlsIEdyYW4gQ2FuYXJpYSwgRnVlcnRldmVudHVyYSBvZyBMYW56YXJvdGV8fHwx",
      "orderDate": "2016-05-27T00:00:00+02:00",
      "status": "In process",
      "pickUpAgency": "DK-100451",
      "holdQueuePosition": "1",
      "creator": "Loumann, Ole"
    }],
    "debt": [],
    "ddbcmsapi": "http://rest.filmstriben.dbc.inlead.dk/web/"
  }
};

describe('Automated test: user-get-user-info', () => {
  it('expected response. ID:7j9nzx, for {}', (done) => {
    context.mockData = mockData;
    provider.execute('user', {}, context)
      .then(result => {
        assert.deepEqual(result, expected);
        done();
      })
      .catch(result => {
        fail({throw: result}, expected);
        done();
      });
  });
});
