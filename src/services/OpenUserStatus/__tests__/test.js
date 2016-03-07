'use strict';

import {assert} from 'chai'; // eslint-disable-line
import * as OpenUserStatus from '../client.js'; // eslint-disable-line

describe('Test OpenUserStatus getUserStatus', () => {


  it('Dummy. Assert a getUserStatus error response', function(done) {

    done();

    /*
    this.timeout(5000);
    setTimeout(done, 5000);
    const config = {
      endpoint: 'https://openuserstatus.addi.dk/test_1.2/'
    };

    OpenUserStatus.init(config);
    let result = OpenUserStatus.getUserStatus({
      agencyId: '738100',
      userId: '000',
      pinCode: '000'
    });

    result.then(function (userStatusResult) {
      assert.equal(userStatusResult['ous:getUserStatusResponse']['ous:getUserStatusError'][0], 'Service unavailable');
      done();
    });
    */

  });
});

describe('Test OpenUserStatus cancelOrder', () => {

  it('Dummy. Assert a cancelOrder error response', function(done) {

    done();

    /*
    this.timeout(5000);
    setTimeout(done, 5000);
    const config = {
      endpoint: 'https://openuserstatus.addi.dk/test_1.2/'
    };

    OpenUserStatus.init(config);
    let result = OpenUserStatus.cancelOrder({
      agencyId: 'DK-710100',
      userId: '000',
      pinCode: '000'
    });

    result.then(function (cancelOrderResult) {
      assert.equal(cancelOrderResult['ous:cancelOrderResponse']['ous:cancelOrderError'][0], 'Element rule violated');
      done();
    });
    */

  });

});

describe('Test OpenUserStatus renewLoan', () => {

  it('Dummy. Assert a renewLoan error response', function(done) {

    done();

    /*
    this.timeout(5000);
    setTimeout(done, 5000);
    const config = {
      endpoint: 'https://openuserstatus.addi.dk/test_1.2/'
    };

    OpenUserStatus.init(config);
    let result = OpenUserStatus.renewLoan({
      agencyId: 'DK-100451',
      userId: '000',
      pinCode: '000'
    });

    result.then(function (renewLoanResult) {
      assert.equal(renewLoanResult['ous:renewLoanResponse']['ous:renewLoanError'][0], 'Element rule violated');
      done();
    });
    */

  });

});

describe('Test OpenUserStatus updateOrder', () => {

  it('Dummy. Assert a updateOrderRequest error response', function(done) {

    done();

    /*
    this.timeout(5000);
    setTimeout(done, 5000);
    const config = {
      endpoint: 'https://openuserstatus.addi.dk/test_1.2/'
    };

    OpenUserStatus.init(config);
    let result = OpenUserStatus.updateOrder({
      agencyId: 'DK-100451',
      userId: '000',
      pinCode: '000'
    });

    result.then(function (updateOrderResult) {
      assert.equal(updateOrderResult['ous:updateOrderResponse']['ous:updateOrderError'][0], 'Element rule violated');
      done();
    });
    */

  });

});

