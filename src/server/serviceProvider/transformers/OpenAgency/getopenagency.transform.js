'use strict';

import {isEmpty} from 'lodash';
import getDataFromPickupAgency from './openagency.js';

const OpenAgencyTransform = {

  event() {
    return 'getOpenAgency';
  },

  getOpenAgencyRequest(id) {
    return this.callServiceClient('openagency', 'getOpenAgency', {
      id: [id]
    });
  },

  requestTransform(event, query) {
    if (event === 'getOpenAgency') {
      return this.getOpenAgencyRequest(query);
    }
  },

  responseTransform(response, query) {
    let data;
    if (response.error) {
      data = {
        error: true,
        statusCode: response.error.statusCode,
        statusMessage: response.error.statusMessage
      };
    }
    else if (isEmpty(response)) {
      data = {
        isEmpty: true
      };
    }
    else {
      data = getDataFromPickupAgency(response.pickupAgency);
    }
    data.query = query;

    return data;
  }
};

export default OpenAgencyTransform;
