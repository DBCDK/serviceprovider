'use strict';

import * as prep from './response-preparation.js';

const CheckOrderPolicyTransform = {

  event() {
    return 'getOrderPolicy';
  },

  checkOrderPolicy(request) {
    return this.callServiceClient('openorder', 'checkOrderPolicy', request);
  },

  requestTransform(event, request, connection) {
    let loggedIn = false;
    if (connection.request.session.hasOwnProperty('passport')) {
      loggedIn = true;
    }
    return this.checkOrderPolicy({
      agencyId: request.agencyId,
      pids: request.pids,
      loggedIn: loggedIn
    });
  },

  responseTransform(response) {
    let data = {};
    data.result = {};
    data.info = {pids: response.pids};
    data.error = [];

    let result = prep.checkPolicyResponse(response);

    if (result.hasOwnProperty('error')) {
      data.error.push(result.error);
      return data;
    }

    data.result = {
      canOrder: result.checkOrderPolicyResponse.orderPossible[0]
    };

    return data;
  }

};

export default CheckOrderPolicyTransform;
