'use strict';

import * as prep from './response-preparation.js';

const UpdateOrderTransform = {

  event() {
    return 'updateOrder';
  },

  updateOrder(request) {
    return this.callServiceClient('openuserstatus', 'updateOrder', request);
  },

  requestTransform(event, request, connection) {

    const passport = connection.request.session.passport || {user: {id: '', uid: ''}};

    return this.updateOrder({
      agencyId: 'DK-' + passport.user.agencyid,
      orderId: request.orderId,
      pickUpAgency: request.pickUpAgencyId,
      userId: passport.user.loanerid,
      pinCode: passport.user.pincode
    });
  },

  responseTransform(response) {

    let result = prep.checkUpdateOrderResponse(response);

    let error = null;

    let orderUpdated = false;
    let orderId = null;

    if (result.hasOwnProperty('error')) {
      error = result.error;
    }
    else {
      orderUpdated = (response['ous:updateOrderResponse']['ous:updateOrderStatus'][0].hasOwnProperty('ous:orderUpdated'));
      orderId = response['ous:updateOrderResponse']['ous:updateOrderStatus'][0]['ous:orderId'][0];
    }

    response = {orderId: orderId, orderUpdated: orderUpdated, error: error};

    return response;
  }

};

export default UpdateOrderTransform;
