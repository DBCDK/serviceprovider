/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
// Request: user {"pretty":true}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

let context = {
  "services": {
    "xddbcmsapi": "http://rest.filmstriben.dbc.inlead.dk/web/",
    "moreinfo": "http://moreinfo.addi.dk/2.6/",
    "openagency": "http://openagency.addi.dk/2.24/",
    "openholdingstatus": "https://openholdingstatus.addi.dk/2.2/",
    "openorder": "https://openorder.addi.dk/2.7.1/",
    "TESTopenorder": "https://openorder.addi.dk/test_2.7.1/",
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
    }
  },
  "search": {"agency": "710100", "profile": "opac", "collectionidentifiers": ""},
  "netpunkt": {"user": "XXXXX", "group": "XXXXX", "password": "XXXXX"},
  "user": {"agency": "710100", "librarytype": "folkebibliotek", "id": "XXXXX", "pin": "XXXXX", "salt": "XXXXX"},
  "app": {
    "clientid": "XXXXX",
    "xddbcmsapipassword": "d8b1070f9699c8f8a8752b5557b7fd45543edad1",
    "orderpolicyrequester": "190101"
  }
};
let provider = Provider();
let mockData = {"[\"openuserstatus\",{\"qs\":{\"agencyId\":\"710100\",\"userId\":\"XXXXX\",\"userPincode\":\"XXXXX\",\"authentication.groupIdAut\":\"XXXXX\",\"authentication.passwordAut\":\"XXXXX\",\"authentication.userIdAut\":\"XXXXX\",\"action\":\"getUserStatus\",\"outputType\":\"json\"}}]": "{\"getUserStatusResponse\":{\"userId\":{\"$\":\"XXXXX\",\"@\":\"ous\"},\"userName\":{\"$\":\"X-name\",\"@\":\"ous\"},\"userStatus\":{\"loanedItems\":{\"loan\":[{\"author\":{\"$\":\"Madsen, Peter, f. 1958\",\"@\":\"ous\"},\"title\":{\"$\":\"Eventyrbogen. - 2. udgave\",\"@\":\"ous\"},\"dateDue\":{\"$\":\"2016-06-10T00:00:00+02:00\",\"@\":\"ous\"},\"loanId\":{\"$\":\"5084184839\",\"@\":\"ous\"},\"reminderLevel\":{\"$\":\"1\",\"@\":\"ous\"},\"@\":\"ous\"},{\"author\":{\"$\":\"Tomas, S\\u00f8ren\",\"@\":\"ous\"},\"title\":{\"$\":\"Baronens svinestreg\",\"@\":\"ous\"},\"dateDue\":{\"$\":\"2016-06-25T00:00:00+02:00\",\"@\":\"ous\"},\"loanId\":{\"$\":\"4839778118\",\"@\":\"ous\"},\"reminderLevel\":{\"$\":\"1\",\"@\":\"ous\"},\"@\":\"ous\"},{\"author\":{\"$\":\"Tison, Annette\",\"@\":\"ous\"},\"title\":{\"$\":\"Barbapapa p\\u00e5 Mars. - 2. udgave\",\"@\":\"ous\"},\"dateDue\":{\"$\":\"2016-06-25T00:00:00+02:00\",\"@\":\"ous\"},\"loanId\":{\"$\":\"5005608785\",\"@\":\"ous\"},\"reminderLevel\":{\"$\":\"1\",\"@\":\"ous\"},\"@\":\"ous\"},{\"author\":{\"$\":\"Tison, Annette\",\"@\":\"ous\"},\"title\":{\"$\":\"Barbapapas hus. - 2. udgave\",\"@\":\"ous\"},\"dateDue\":{\"$\":\"2016-06-25T00:00:00+02:00\",\"@\":\"ous\"},\"loanId\":{\"$\":\"5005613835\",\"@\":\"ous\"},\"reminderLevel\":{\"$\":\"1\",\"@\":\"ous\"},\"@\":\"ous\"},{\"author\":{\"$\":\"Lindgren, Astrid\",\"@\":\"ous\"},\"title\":{\"$\":\"Eventyrrejsen\",\"@\":\"ous\"},\"dateDue\":{\"$\":\"2016-06-25T00:00:00+02:00\",\"@\":\"ous\"},\"loanId\":{\"$\":\"4054989720\",\"@\":\"ous\"},\"reminderLevel\":{\"$\":\"1\",\"@\":\"ous\"},\"@\":\"ous\"},{\"author\":{\"$\":\"Lindgren, Astrid\",\"@\":\"ous\"},\"title\":{\"$\":\"Nils Karlsson-Pusling flytter ind. - 3. \",\"@\":\"ous\"},\"dateDue\":{\"$\":\"2016-06-25T00:00:00+02:00\",\"@\":\"ous\"},\"loanId\":{\"$\":\"4054714217\",\"@\":\"ous\"},\"reminderLevel\":{\"$\":\"1\",\"@\":\"ous\"},\"@\":\"ous\"},{\"author\":{\"$\":\"Maidment, Stella\",\"@\":\"ous\"},\"title\":{\"$\":\"Sjov med enhj\\u00f8rninge\",\"@\":\"ous\"},\"dateDue\":{\"$\":\"2016-06-25T00:00:00+02:00\",\"@\":\"ous\"},\"loanId\":{\"$\":\"5007577879\",\"@\":\"ous\"},\"reminderLevel\":{\"$\":\"1\",\"@\":\"ous\"},\"@\":\"ous\"},{\"author\":{\"$\":\"Tomas, S\\u00f8ren\",\"@\":\"ous\"},\"title\":{\"$\":\"Det mystiske M\",\"@\":\"ous\"},\"dateDue\":{\"$\":\"2016-06-27T00:00:00+02:00\",\"@\":\"ous\"},\"loanId\":{\"$\":\"4892110293\",\"@\":\"ous\"},\"reminderLevel\":{\"$\":\"1\",\"@\":\"ous\"},\"@\":\"ous\"}],\"loansCount\":{\"$\":\"8\",\"@\":\"ous\"},\"@\":\"ous\"},\"orderedItems\":{\"order\":[{\"author\":{\"$\":\"Madsen, Peter, f. 1958\",\"@\":\"ous\"},\"title\":{\"$\":\"Eventyrbogen\",\"@\":\"ous\"},\"orderDate\":{\"$\":\"2016-05-27T00:00:00+02:00\",\"@\":\"ous\"},\"orderId\":{\"$\":\"24395923\",\"@\":\"ous\"},\"orderStatus\":{\"$\":\"In process\",\"@\":\"ous\"},\"orderType\":{\"$\":\"Hold\",\"@\":\"ous\"},\"holdQueuePosition\":{\"$\":\"1\",\"@\":\"ous\"},\"pickUpAgency\":{\"$\":\"DK-710111\",\"@\":\"ous\"},\"@\":\"ous\"},{\"author\":{\"$\":\"Hall, Patrick\",\"@\":\"ous\"},\"title\":{\"$\":\"How to solve it in LISP\",\"@\":\"ous\"},\"orderDate\":{\"$\":\"2016-05-30T00:00:00+02:00\",\"@\":\"ous\"},\"orderId\":{\"$\":\"24400305\",\"@\":\"ous\"},\"orderStatus\":{\"$\":\"In process\",\"@\":\"ous\"},\"orderType\":{\"$\":\"Hold\",\"@\":\"ous\"},\"holdQueuePosition\":{\"$\":\"1\",\"@\":\"ous\"},\"pickUpAgency\":{\"$\":\"DK-710111\",\"@\":\"ous\"},\"@\":\"ous\"},{\"author\":{\"$\":\"Franklin, Benjamin\",\"@\":\"ous\"},\"title\":{\"$\":\"Selvbiografi. - N.N.\",\"@\":\"ous\"},\"orderDate\":{\"$\":\"2016-05-30T00:00:00+02:00\",\"@\":\"ous\"},\"orderId\":{\"$\":\"24400287\",\"@\":\"ous\"},\"orderStatus\":{\"$\":\"In process\",\"@\":\"ous\"},\"orderType\":{\"$\":\"Hold\",\"@\":\"ous\"},\"holdQueuePosition\":{\"$\":\"1\",\"@\":\"ous\"},\"pickUpAgency\":{\"$\":\"DK-710111\",\"@\":\"ous\"},\"@\":\"ous\"},{\"author\":{\"$\":\"Riebnitzsky, Anne-Cathrine\",\"@\":\"ous\"},\"title\":{\"$\":\"Orkans\\u00e6sonen og stilheden\",\"@\":\"ous\"},\"orderDate\":{\"$\":\"2016-05-31T00:00:00+02:00\",\"@\":\"ous\"},\"orderId\":{\"$\":\"24404786\",\"@\":\"ous\"},\"orderStatus\":{\"$\":\"In process\",\"@\":\"ous\"},\"orderType\":{\"$\":\"Hold\",\"@\":\"ous\"},\"holdQueuePosition\":{\"$\":\"265\",\"@\":\"ous\"},\"pickUpAgency\":{\"$\":\"DK-710100\",\"@\":\"ous\"},\"@\":\"ous\"},{\"author\":{\"$\":\"\",\"@\":\"ous\"},\"title\":{\"$\":\"Hello Kitty julehistorier\",\"@\":\"ous\"},\"orderDate\":{\"$\":\"2016-05-30T00:00:00+02:00\",\"@\":\"ous\"},\"orderId\":{\"$\":\"24401745\",\"@\":\"ous\"},\"orderStatus\":{\"$\":\"In process\",\"@\":\"ous\"},\"orderType\":{\"$\":\"Hold\",\"@\":\"ous\"},\"holdQueuePosition\":{\"$\":\"1\",\"@\":\"ous\"},\"pickUpAgency\":{\"$\":\"DK-710100\",\"@\":\"ous\"},\"@\":\"ous\"},{\"author\":{\"$\":\"Murakami, Haruki\",\"@\":\"ous\"},\"title\":{\"$\":\"1Q84\",\"@\":\"ous\"},\"orderDate\":{\"$\":\"2016-05-31T00:00:00+02:00\",\"@\":\"ous\"},\"orderId\":{\"$\":\"24404796\",\"@\":\"ous\"},\"orderStatus\":{\"$\":\"In process\",\"@\":\"ous\"},\"orderType\":{\"$\":\"Hold\",\"@\":\"ous\"},\"holdQueuePosition\":{\"$\":\"1\",\"@\":\"ous\"},\"pickUpAgency\":{\"$\":\"DK-710100\",\"@\":\"ous\"},\"@\":\"ous\"},{\"author\":{\"$\":\"Lindgren, Astrid\",\"@\":\"ous\"},\"title\":{\"$\":\"Nissen\",\"@\":\"ous\"},\"orderDate\":{\"$\":\"2016-05-30T00:00:00+02:00\",\"@\":\"ous\"},\"orderId\":{\"$\":\"24400337\",\"@\":\"ous\"},\"orderStatus\":{\"$\":\"In process\",\"@\":\"ous\"},\"orderType\":{\"$\":\"Hold\",\"@\":\"ous\"},\"holdQueuePosition\":{\"$\":\"1\",\"@\":\"ous\"},\"pickUpAgency\":{\"$\":\"DK-710111\",\"@\":\"ous\"},\"@\":\"ous\"},{\"author\":{\"$\":\"Lindgren, Astrid\",\"@\":\"ous\"},\"title\":{\"$\":\"Emils skarnsstreg nr. 325\",\"@\":\"ous\"},\"orderDate\":{\"$\":\"2016-05-30T00:00:00+02:00\",\"@\":\"ous\"},\"orderId\":{\"$\":\"24400334\",\"@\":\"ous\"},\"orderStatus\":{\"$\":\"Available for pickup\",\"@\":\"ous\"},\"orderType\":{\"$\":\"Hold\",\"@\":\"ous\"},\"holdQueuePosition\":{\"$\":\"1\",\"@\":\"ous\"},\"pickUpExpiryDate\":{\"$\":\"2016-06-04T00:00:00+02:00\",\"@\":\"ous\"},\"pickUpId\":{\"$\":\"Nummer 16\",\"@\":\"ous\"},\"pickUpAgency\":{\"$\":\"DK-710111\",\"@\":\"ous\"},\"@\":\"ous\"}],\"ordersCount\":{\"$\":\"8\",\"@\":\"ous\"},\"@\":\"ous\"},\"fiscalAccount\":{\"totalAmount\":{\"$\":\"0\",\"@\":\"ous\"},\"totalAmountCurrency\":{\"$\":\"DKK\",\"@\":\"ous\"},\"@\":\"ous\"},\"@\":\"ous\"},\"@\":\"ous\"},\"@namespaces\":{\"ous\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openuserstatus\"}}"};
let expected = {
  "statusCode": 200,
  "data": {
    "id": "foervg55pADXBKzi3h8jYjnYqYNfI9a3",
    "name": "X-name",
    "loans": [{
      "loanId": "5084184839",
      "dueDate": "2016-06-10T00:00:00+02:00",
      "title": "Eventyrbogen. - 2. udgave",
      "creator": "Madsen, Peter, f. 1958"
    }, {
      "loanId": "4839778118",
      "dueDate": "2016-06-25T00:00:00+02:00",
      "title": "Baronens svinestreg",
      "creator": "Tomas, Søren"
    }, {
      "loanId": "5005608785",
      "dueDate": "2016-06-25T00:00:00+02:00",
      "title": "Barbapapa på Mars. - 2. udgave",
      "creator": "Tison, Annette"
    }, {
      "loanId": "5005613835",
      "dueDate": "2016-06-25T00:00:00+02:00",
      "title": "Barbapapas hus. - 2. udgave",
      "creator": "Tison, Annette"
    }, {
      "loanId": "4054989720",
      "dueDate": "2016-06-25T00:00:00+02:00",
      "title": "Eventyrrejsen",
      "creator": "Lindgren, Astrid"
    }, {
      "loanId": "4054714217",
      "dueDate": "2016-06-25T00:00:00+02:00",
      "title": "Nils Karlsson-Pusling flytter ind. - 3. ",
      "creator": "Lindgren, Astrid"
    }, {
      "loanId": "5007577879",
      "dueDate": "2016-06-25T00:00:00+02:00",
      "title": "Sjov med enhjørninge",
      "creator": "Maidment, Stella"
    }, {
      "loanId": "4892110293",
      "dueDate": "2016-06-27T00:00:00+02:00",
      "title": "Det mystiske M",
      "creator": "Tomas, Søren"
    }],
    "orders": [{
      "orderId": "Hold:24395923",
      "status": "In process",
      "pickUpAgency": "DK-710111",
      "holdQueuePosition": "1",
      "creator": "Madsen, Peter, f. 1958",
      "title": "Eventyrbogen",
      "orderDate": "2016-05-27T00:00:00+02:00"
    }, {
      "orderId": "Hold:24400305",
      "status": "In process",
      "pickUpAgency": "DK-710111",
      "holdQueuePosition": "1",
      "creator": "Hall, Patrick",
      "title": "How to solve it in LISP",
      "orderDate": "2016-05-30T00:00:00+02:00"
    }, {
      "orderId": "Hold:24400287",
      "status": "In process",
      "pickUpAgency": "DK-710111",
      "holdQueuePosition": "1",
      "creator": "Franklin, Benjamin",
      "title": "Selvbiografi. - N.N.",
      "orderDate": "2016-05-30T00:00:00+02:00"
    }, {
      "orderId": "Hold:24404786",
      "status": "In process",
      "pickUpAgency": "DK-710100",
      "holdQueuePosition": "265",
      "creator": "Riebnitzsky, Anne-Cathrine",
      "title": "Orkansæsonen og stilheden",
      "orderDate": "2016-05-31T00:00:00+02:00"
    }, {
      "orderId": "Hold:24401745",
      "status": "In process",
      "pickUpAgency": "DK-710100",
      "holdQueuePosition": "1",
      "title": "Hello Kitty julehistorier",
      "orderDate": "2016-05-30T00:00:00+02:00"
    }, {
      "orderId": "Hold:24404796",
      "status": "In process",
      "pickUpAgency": "DK-710100",
      "holdQueuePosition": "1",
      "creator": "Murakami, Haruki",
      "title": "1Q84",
      "orderDate": "2016-05-31T00:00:00+02:00"
    }, {
      "orderId": "Hold:24400337",
      "status": "In process",
      "pickUpAgency": "DK-710111",
      "holdQueuePosition": "1",
      "creator": "Lindgren, Astrid",
      "title": "Nissen",
      "orderDate": "2016-05-30T00:00:00+02:00"
    }, {
      "orderId": "Hold:24400334",
      "status": "Available for pickup",
      "pickUpAgency": "DK-710111",
      "holdQueuePosition": "1",
      "creator": "Lindgren, Astrid",
      "title": "Emils skarnsstreg nr. 325",
      "orderDate": "2016-05-30T00:00:00+02:00",
      "pickUpExpiryDate": "2016-06-04T00:00:00+02:00",
      "pickUpId": "Nummer 16"
    }],
    "debt": []
  }
};

describe('Automated test: user-pickup', () => {
  it('expected response. ID:0f3sbr, for {"pretty":true}', (done) => {
    context.mockData = mockData;
    provider.execute('user', {"pretty": true}, context)
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
