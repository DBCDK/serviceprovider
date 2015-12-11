'use strict';
/*eslint-disable */
import {assert} from 'chai';

const holdingTransform = require('../transformers/OpenHoldingStatus/HoldingStatus.transform');

describe('Test transform of OpenHoldingStatus response', () => {

	it('Response transform holding status, will lend', function() {

		let response = { responder: { localHoldingsId: '43512447', willLend: 'true', expectedDelivery: '2015-11-16', pid: '870970-basis:43512447', responderId: '710100' }};

		assert.equal(JSON.stringify(holdingTransform.responseTransform(response)), JSON.stringify({"result":{"available":true,"expectedDelievery":"2015-11-16","now":false},"info":{"pid":"870970-basis:43512447"},"error":[]}), 'Holding will lend');

	});

	it('Response transform holding status, will not lend', function() {

		let response = { responder: { localHoldingsId: '43512447', willLend: 'false', pid: '870970-basis:43512447', responderId: '710100' }};

		assert.equal(JSON.stringify(holdingTransform.responseTransform(response)), JSON.stringify({"result":{"available":false,"now":false},"info":{"pid":"870970-basis:43512447"},"error":[]}), 'Holding will not lend');

	});

	it('Response transform holding status, error', function() {

		let response = { error: { pid: '870970-basis:43512449', responderId: '710100', errorMessage: 'item_not_found' }};

		assert.equal(JSON.stringify(holdingTransform.responseTransform(response)), JSON.stringify({"result":{},"info":{"pid":"870970-basis:43512449"},"error":["item_not_found"]}), 'Item not found');

	});


});
/* eslint-enable */
