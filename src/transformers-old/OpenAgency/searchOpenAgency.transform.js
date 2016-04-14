'use strict';

import {isEmpty, isArray} from 'lodash';
import getDataFromPickupAgency from './openagency.js';

const SearchOpenAgencyTransform = {

  event() {
    return 'searchOpenAgency';
  },

  searchOpenAgencyRequest(query) {
    return this.callServiceClient('openagency', 'searchOpenAgency', {
      query: query
    });
  },

  requestTransform(event, query) {
    if (event === 'searchOpenAgency') {
      return this.searchOpenAgencyRequest(query);
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
      response.pickupAgency = (isArray(response.pickupAgency)) ? response.pickupAgency : [response.pickupAgency];
      data = {
        agencies: response.pickupAgency.map(function (val) {
          return getDataFromPickupAgency(val);
        })
      };
    }
    data.query = query;

    return data;
  }
};

export default SearchOpenAgencyTransform;
