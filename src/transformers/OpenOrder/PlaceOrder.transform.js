'use strict';

import * as prep from './response-preparation.js';

const PlaceOrderTransform = {

  event() {
    return 'placeOrder';
  },

  getNeedBeforeDate(days) {
    let future = new Date();
    return new Date(future.setDate(future.getDate() + days)).toISOString();
  },

  requestTransform(event, request, connection) {
    const passport = connection.request.session.passport || {user: {loanerid: null}};

    return this.callServiceClient('openorder', 'placeOrder', {
      agencyId: request.agencyId,
      pids: request.pids.split(','),
      userId: passport.user.loanerid,
      needBeforeDate: this.getNeedBeforeDate(90)
    });
  },

  responseTransform(response) {
    let data = {};
    data.result = {};
    data.info = {pids: response.pids};
    data.error = [];

    let result = prep.checkOrderResponse(response);

    if (result.hasOwnProperty('error')) {
      data.error.push(result.error);
      return data;
    }

    let orderPlaced = false;

    if (result.placeOrderResponse.hasOwnProperty('orderPlaced')) {
      orderPlaced = true;
    }

    data.result = {
      orderPlaced: orderPlaced
    };

    return data;
  }

};

export default PlaceOrderTransform;
