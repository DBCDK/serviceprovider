'use strict';
/*eslint-disable */
import {expect, assert} from 'chai';

import {isEqual} from 'lodash';

const userStatusTransform = require('../transformers/OpenUserStatus/GetUserStatus.transform');
const cancelOrderTransform = require('../transformers/OpenUserStatus/CancelOrder.transform');
const renewLoanTransform = require('../transformers/OpenUserStatus/RenewLoan.transform');
const updateOrderTransform = require('../transformers/OpenUserStatus/UpdateOrder.transform');

describe('Test transform of OpenUserStatus response', () => {

	it('Response transform 3 ordered items', function() {

		let response = {"ous:getUserStatusResponse":{"$":{"xmlns:ous":"http://oss.dbc.dk/ns/openuserstatus","xmlns":"http://oss.dbc.dk/ns/openuserstatus"},"ous:userId":["1111"],"ous:userStatus":[{"ous:loanedItems":[{"ous:loansCount":["0"]}],"ous:orderedItems":[{"ous:order":[{"ous:author":["Holm, Gretelise, f. 1946"],"ous:title":["Møgkællinger"],"ous:orderDate":["2015-10-27T00:00:00+01:00"],"ous:orderId":["1654246"],"ous:orderStatus":["Available for pickup"],"ous:orderType":["Hold"],"ous:holdQueuePosition":["1"],"ous:pickUpExpiryDate":["2015-11-03T00:00:00+01:00"],"ous:pickUpId":["1270"],"ous:pickUpAgency":["DK-737600"]},{"ous:author":["Ellemose, Søren"],"ous:title":["Tidsmaskinen"],"ous:orderDate":["2015-10-29T00:00:00+01:00"],"ous:orderId":["1655526"],"ous:orderStatus":["Available for pickup"],"ous:orderType":["Hold"],"ous:holdQueuePosition":["1"],"ous:pickUpExpiryDate":["2015-11-06T00:00:00+01:00"],"ous:pickUpId":["1708"],"ous:pickUpAgency":["DK-737600"]},{"ous:author":["Bidstrup, Lise"],"ous:title":["Overlevernes by"],"ous:orderDate":["2015-10-29T00:00:00+01:00"],"ous:orderId":["1655527"],"ous:orderStatus":["Available for pickup"],"ous:orderType":["Hold"],"ous:holdQueuePosition":["1"],"ous:pickUpExpiryDate":["2015-11-06T00:00:00+01:00"],"ous:pickUpId":["1707"],"ous:pickUpAgency":["DK-737600"]}],"ous:ordersCount":["3"]}],"ous:fiscalAccount":[{"ous:totalAmount":["0"],"ous:totalAmountCurrency":["DKK"]}]}]}};

    let connection = {
      request: {
        session: {
          passport: {
            user: {
              branchNames: {
                '737600':'Julemandens bibliotek'
              }
            }
          }
        }
      }
    };

    let newResponse = userStatusTransform.responseTransform(response, {}, connection);

		assert.equal(newResponse.result.orderedItems.count, 3, 'Ordered items');
		assert.equal(newResponse.result.orderedItems.orders[0].pickUpAgency, 'Julemandens bibliotek', 'Pickup Agency');
		assert.equal(newResponse.result.orderedItems.orders[0].ready, true, 'Ready for pickup');
		assert.equal(newResponse.result.orderedItems.orders[0].pickUpExpiryDate, '2015-11-03T00:00:00+01:00', 'Pickup Expiry Date');

	});

	it('Response transform 0 loaned items', function() {

		let response = {"ous:getUserStatusResponse":{"$":{"xmlns:ous":"http://oss.dbc.dk/ns/openuserstatus","xmlns":"http://oss.dbc.dk/ns/openuserstatus"},"ous:userId":["1111"],"ous:userStatus":[{"ous:loanedItems":[{"ous:loansCount":["0"]}],"ous:orderedItems":[{"ous:order":[{"ous:author":["Holm, Gretelise, f. 1946"],"ous:title":["Møgkællinger"],"ous:orderDate":["2015-10-27T00:00:00+01:00"],"ous:orderId":["1654246"],"ous:orderStatus":["Available for pickup"],"ous:orderType":["Hold"],"ous:holdQueuePosition":["1"],"ous:pickUpExpiryDate":["2015-11-03T00:00:00+01:00"],"ous:pickUpId":["1270"],"ous:pickUpAgency":["DK-737600"]},{"ous:author":["Ellemose, Søren"],"ous:title":["Tidsmaskinen"],"ous:orderDate":["2015-10-29T00:00:00+01:00"],"ous:orderId":["1655526"],"ous:orderStatus":["Available for pickup"],"ous:orderType":["Hold"],"ous:holdQueuePosition":["1"],"ous:pickUpExpiryDate":["2015-11-06T00:00:00+01:00"],"ous:pickUpId":["1708"],"ous:pickUpAgency":["DK-737600"]},{"ous:author":["Bidstrup, Lise"],"ous:title":["Overlevernes by"],"ous:orderDate":["2015-10-29T00:00:00+01:00"],"ous:orderId":["1655527"],"ous:orderStatus":["Available for pickup"],"ous:orderType":["Hold"],"ous:holdQueuePosition":["1"],"ous:pickUpExpiryDate":["2015-11-06T00:00:00+01:00"],"ous:pickUpId":["1707"],"ous:pickUpAgency":["DK-737600"]}],"ous:ordersCount":["3"]}],"ous:fiscalAccount":[{"ous:totalAmount":["0"],"ous:totalAmountCurrency":["DKK"]}]}]}};

    let connection = {
      request: {
        session: {
          passport: {
            user: {
              branchNames: {
                '737600':'Julemandens bibliotek'
              }
            }
          }
        }
      }
    };

    let newResponse = userStatusTransform.responseTransform(response, {}, connection);

		assert.equal(newResponse.result.loanedItems.count, 0, '0 loaned items');

	});

	it('Response transform 2 loaned items', function() {
    // Tests fluctuates because of changing date. Future date is set dynamically
    const twoDaysBackToTheFuture = new Date(new Date().getTime() + 72 * 60 * 60 * 1000);
		let response = {"ous:getUserStatusResponse":{"$":{"xmlns:ous":"http://oss.dbc.dk/ns/openuserstatus","xmlns":"http://oss.dbc.dk/ns/openuserstatus"},"ous:userId":["1231231231"],"ous:userStatus":[{"ous:loanedItems":[{"ous:loan":[{"ous:author":["Hesel, Lene Ewald"],"ous:title":["Pokker ta' den rådne kat"],"ous:dateDue":[twoDaysBackToTheFuture],"ous:loanId":["5008917428"],"ous:reminderLevel":["1"]},{"ous:author":["Davis, Jim"],"ous:title":["Garfield på bølgen blå"],"ous:dateDue":[twoDaysBackToTheFuture],"ous:loanId":["3487223157"],"ous:reminderLevel":["1"]}],"ous:loansCount":["2"]}],"ous:orderedItems":[{"ous:ordersCount":["0"]}],"ous:fiscalAccount":[{"ous:totalAmount":["0"],"ous:totalAmountCurrency":["DKK"]}]}]}};

    let connection = {
      request: {
        session: {
          passport: {
            user: {
              branchNames: {
                '737600':'Julemandens bibliotek'
              }
            }
          }
        }
      }
    };

    assert.equal(JSON.stringify(userStatusTransform.responseTransform(response, {}, connection)), JSON.stringify({"result":{"branchNamesMap":{"737600":"Julemandens bibliotek"},"orderedItems":{"count":0,"orders":[]},"loanedItems":{"count":2,"loans":[{"author":"Hesel, Lene Ewald","title":"Pokker ta\' den rådne kat","dueDate":twoDaysBackToTheFuture,"overdue":false,"dueSoon":false,"loanId":"5008917428"},{"author":"Davis, Jim","title":"Garfield på bølgen blå","dueDate":twoDaysBackToTheFuture,"overdue":false,"dueSoon":false,"loanId":"3487223157"}]},"fiscalAccount":{"totalAmount":0,"currency":"DKK","items":[]}},"info":{"userId":"1231231231"},"error":[]}), '2 loaned items');

	});

	it('Response transform fiscal account', function() {

		let response = {"ous:getUserStatusResponse":{"$":{"xmlns:ous":"http://oss.dbc.dk/ns/openuserstatus","xmlns":"http://oss.dbc.dk/ns/openuserstatus"},"ous:userId":["0000000000"],"ous:userStatus":[{"ous:loanedItems":[{"ous:loansCount":["0"]}],"ous:orderedItems":[{"ous:ordersCount":["0"]}],"ous:fiscalAccount":[{"ous:fiscalTransaction":[{"ous:fiscalTransactionAmount":["70"],"ous:fiscalTransactionCurrency":["DKK"],"ous:fiscalTransactionDate":["2015-05-21T00:00:00+02:00"],"ous:fiscalTransactionType":["Fine"],"ous:author":["Barber, Jacq"],"ous:title":["Design ideas for your garden"]}],"ous:totalAmount":["70"],"ous:totalAmountCurrency":["DKK"]}]}]}};

    let connection = {
      request: {
        session: {
          passport: {
            user: {
              branchNames: {
                '737600':'Julemandens bibliotek'
              }
            }
          }
        }
      }
    };

    assert.equal(JSON.stringify(userStatusTransform.responseTransform(response, {}, connection)), JSON.stringify({"result":{"branchNamesMap":{"737600":"Julemandens bibliotek"},"orderedItems":{"count":0,"orders":[]},"loanedItems":{"count":0,"loans":[]},"fiscalAccount":{"totalAmount":70,"currency":"DKK","items":[{"author":"Barber, Jacq","title":"Design ideas for your garden","amount":70,"currency":"DKK","date":"2015-05-21T00:00:00+02:00","type":"Fine"}]}},"info":{"userId":"0000000000"},"error":[]}), 'Fiscal account');

	});

	it('Response transform user authentication error', function() {

		let response = {"ous:getUserStatusResponse":{"$":{"xmlns:ous":"http://oss.dbc.dk/ns/openuserstatus","xmlns":"http://oss.dbc.dk/ns/openuserstatus"},"ous:getUserStatusError":["User authentication failed"]}};

    let connection = {
      request: {
        session: {
          passport: {
            user: {
              branchNames: {
                '737600':'Julemandens bibliotek'
              }
            }
          }
        }
      }
    };

    assert.equal(JSON.stringify(userStatusTransform.responseTransform(response, {}, connection)), JSON.stringify({"result":{"branchNamesMap":{"737600":"Julemandens bibliotek"}},"info":{},"error":["User authentication failed"]}), 'Authentication Error');

	});

	it('Response transform cancel order with error in request', function() {

		let response = {"ous:cancelOrderResponse":{"$":{"xmlns:ous":"http://oss.dbc.dk/ns/openuserstatus","xmlns":"http://oss.dbc.dk/ns/openuserstatus"},"ous:cancelOrderError":["Element rule violated"]}};

		assert.equal(JSON.stringify(cancelOrderTransform.responseTransform(response)), JSON.stringify({"orderCancelled":false,"error":"Element rule violated"}), 'Error in request');

	});

	it('Response transform cancel order success', function() {

		let response = {orderId: "23516292", "ous:cancelOrderResponse":{"$":{"xmlns:ous":"http://oss.dbc.dk/ns/openuserstatus","xmlns":"http://oss.dbc.dk/ns/openuserstatus"},"ous:cancelOrderStatus":[{"ous:orderId":["23516292"],"ous:orderCancelled":[""]}]}};

		assert.equal(JSON.stringify(cancelOrderTransform.responseTransform(response)), JSON.stringify({"orderId":"23516292","orderCancelled":true,"error":null}), 'Order cancelled');

	});

	it('Response transform cancel order, order not found', function() {

		let response = {"ous:cancelOrderResponse":{"$":{"xmlns:ous":"http://oss.dbc.dk/ns/openuserstatus","xmlns":"http://oss.dbc.dk/ns/openuserstatus"},"ous:cancelOrderStatus":[{"ous:orderId":["23516292"],"ous:cancelOrderError":["Unknown order"]}]}};

		assert.equal(JSON.stringify(cancelOrderTransform.responseTransform(response)), JSON.stringify({"orderCancelled":false,"error":null}), 'Error in request');

	});

	it('Response transform renew loan, renew success', function() {

		let response = {"ous:renewLoanResponse":{"$":{"xmlns:ous":"http://oss.dbc.dk/ns/openuserstatus","xmlns":"http://oss.dbc.dk/ns/openuserstatus"},"ous:renewLoanStatus":[{"ous:loanId":["5056136071"],"ous:dateDue":["2015-12-07T00:00:00+01:00"]}]}};

		assert.equal(JSON.stringify(renewLoanTransform.responseTransform(response)), JSON.stringify({"loanId":"5056136071","loanRenewed":true,"dueDate":"2015-12-07T00:00:00+01:00","error":null}), 'Loan renewed');

	});

	it('Response transform renew loan, renew failed', function() {

		let response = {"ous:renewLoanResponse":{"$":{"xmlns:ous":"http://oss.dbc.dk/ns/openuserstatus","xmlns":"http://oss.dbc.dk/ns/openuserstatus"},"ous:renewLoanStatus":[{"ous:loanId":["5056136671"],"ous:renewLoanError":["Item not renewable"]}]}};

		assert.equal(JSON.stringify(renewLoanTransform.responseTransform(response)), JSON.stringify({"loanId":"5056136671","loanRenewed":false,"dueDate":null,"error":["Item not renewable"]}), 'Loan not renewed');

	});

	it('Response transform renew loan, error', function() {

		let response = {"ous:renewLoanResponse":{"$":{"xmlns:ous":"http://oss.dbc.dk/ns/openuserstatus","xmlns":"http://oss.dbc.dk/ns/openuserstatus"},"ous:renewLoanError":["Service unavailable"]}};

		assert.equal(JSON.stringify(renewLoanTransform.responseTransform(response)), JSON.stringify({"loanRenewed":false,"dueDate":null,"error":"Service unavailable"}), 'Error');

	});

	it('Response transform update order, update success', function() {

		let response = {"ous:updateOrderResponse":{"$":{"xmlns:ous":"http://oss.dbc.dk/ns/openuserstatus","xmlns":"http://oss.dbc.dk/ns/openuserstatus"},"ous:updateOrderStatus":[{"ous:orderId":["14661460"],"ous:orderUpdated":[""]}]},"orderId":"14661460"};

		assert.equal(JSON.stringify(updateOrderTransform.responseTransform(response)), JSON.stringify({"orderId":"14661460","orderUpdated":true,"error":null}), 'Order updated');

	});

	it('Response transform update order, error', function() {

		let response = {"ous:updateOrderResponse":{"$":{"xmlns:ous":"http://oss.dbc.dk/ns/openuserstatus","xmlns":"http://oss.dbc.dk/ns/openuserstatus"},"ous:updateOrderError":["Element rule violated"]}};

		assert.equal(JSON.stringify(updateOrderTransform.responseTransform(response)), JSON.stringify({"orderId":null,"orderUpdated":false,"error":"Element rule violated"}), 'Error');

	});


});
/* eslint-enable */
