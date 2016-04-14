'use strict';

import * as prep from './response-preparation.js';

const HoldingStatusTransform = {

  event() {
    return 'holdingStatus';
  },

  holdingStatus(request) {
    return this.callServiceClient('openholdingstatus', 'getHolding', request);
  },

  requestTransform(event, request, connection) {
    let agencyId;
    try {
      agencyId = connection.libdata.config.provider.services.ddbcontent.agency;
    } catch (e) {} // eslint-disable-line

    const params = {
      responderId: agencyId,
      pid: request
    };

    return this.holdingStatus(params);
  },

  responseTransform(response) {

    let data = {};
    data.result = {};
    data.info = {};
    data.error = [];

    let result = prep.checkHoldingStatusResponse(response);

    if (result.hasOwnProperty('error')) {
      data.info.pid = result.pid;
      data.error.push(result.error);
      return data;
    }

    data.info.pid = response.responder.pid;

    data.result.available = (response.responder.willLend === 'true');
    data.result.expectedDelievery = response.responder.expectedDelivery;

    let today = new Date().toUTCString();
    today = today.split(' ').slice(0, 4).join(' ');
    let expected = new Date(response.responder.expectedDelivery).toUTCString();
    expected = expected.split(' ').slice(0, 4).join(' ');

    data.result.now = (expected === today);

    return data;
  }

};

export default HoldingStatusTransform;
