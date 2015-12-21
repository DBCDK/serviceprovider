'use strict';

import {isEmpty, isArray} from 'lodash';

const OpenAgencyPickupAgencyTransform = {
  event() {
    return 'getPickupAgencyList';
  },

  requestTransform(event, query) {
    return this.callServiceClient('openagency', 'getAgencyBranches', {
      id: [query]
    });
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
      const libraries = isArray(response.library.pickupAgency) ? response.library.pickupAgency : [response.library.pickupAgency];

      data = {
        libraries: libraries.filter((library) => {
          return library.pickupAllowed === '1';
        }).map((library) => {
          return {
            name: isArray(library.branchName) ? library.branchName[0]['$value'] : library.branchName['$value'],
            id: library.branchId,
            address: [library.postalAddress, library.postalCode, library.city].join(', ')
          }
        })
      }
    }
    data.query = query;

    return data;
  }
};

export default OpenAgencyPickupAgencyTransform;
