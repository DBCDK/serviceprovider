'use strict';
/*eslint-disable */
import {expect, assert} from 'chai';

const policyTransform = require('../transformers/OpenOrder/CheckOrderPolicy.transform');
const orderTransform = require('../transformers/OpenOrder/PlaceOrder.transform');

describe('Test transform of OpenOrder response', () => {
  
	it('Response transform can order', function() {

		let response = {"checkOrderPolicyResponse":{"$":{"xmlns":"http://oss.dbc.dk/ns/openorder"},"lookUpUrl":["http://stormp.kk.dk/linkme.asp?26885612"],"orderPossible":["true"],"orderPossibleReason":["owned_accepted"],"orderCondition":[{"_":"Dansk betingelse","$":{"language":"dan"}},{"_":"English condition","$":{"language":"eng"}}]}, pids: [ '870970-basis:26885612' ]};

		assert.equal(JSON.stringify(policyTransform.responseTransform(response)), JSON.stringify({"result":{"canOrder":"true"},"info":{"pids":["870970-basis:26885612"]},"error":[]}), 'Can order');

	});
	
	it('Response transform cannot order', function() {

		let response = {"checkOrderPolicyResponse":{"$":{"xmlns":"http://oss.dbc.dk/ns/openorder"},"lookUpUrl":["http://biblioteksbaserne.dk/sites/WODDER/pub/search.html?doaction=search&data=scode_ccl%3Did%3D28183488"],"orderPossible":["false"],"orderPossibleReason":["owned_own_catalogue"]}, pids: [ '870970-basis:28183488' ]};

		assert.equal(JSON.stringify(policyTransform.responseTransform(response)), JSON.stringify({"result":{"canOrder":"false"},"info":{"pids":["870970-basis:28183488"]},"error":[]}), 'Cannot order');

	});
	
	it('Response transform error', function() {

		let response = {"checkOrderPolicyResponse":{"$":{"xmlns":"http://oss.dbc.dk/ns/openorder"},"checkOrderPolicyError":["service_unavailable"]}, pids: [ '870970-basis:28183488' ]};

		assert.equal(JSON.stringify(policyTransform.responseTransform(response)), JSON.stringify({"result":{},"info":{"pids":["870970-basis:28183488"]},"error":[["service_unavailable"]]}), 'Error');

	});
	
	it('Response transform order placed', function() {

		let response = {"placeOrderResponse":{"$":{"xmlns":"http://oss.dbc.dk/ns/openorder"},"orderPlaced":[{"orderId":["1019667320"],"orderPlacedMessage":["owned_accepted"]}],"orderCondition":[{"_":"Dansk betingelse","$":{"language":"dan"}},{"_":"English condition","$":{"language":"eng"}}]},"pids":["870970-basis:28183488"]};

		assert.equal(JSON.stringify(orderTransform.responseTransform(response)), JSON.stringify({"result":{"orderPlaced":true},"info":{"pids":["870970-basis:28183488"]},"error":[]}), 'Order placed');

	});
	
	it('Response transform order not placed', function() {

		let response = {"placeOrderResponse":{"$":{"xmlns":"http://oss.dbc.dk/ns/openorder"},"orderNotPlaced":[{"placeOrderError":["service_unavailable"]}]},"pids":["870970-basis:28183481"]};

		assert.equal(JSON.stringify(orderTransform.responseTransform(response)), JSON.stringify({"result":{"orderPlaced":false},"info":{"pids":["870970-basis:28183481"]},"error":[]}), 'Order not placed');

	});

});
/* eslint-enable */
