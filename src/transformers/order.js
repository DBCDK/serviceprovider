'use strict';
/**
 * Order transformer.
 */
import cancelOrder from './cancelOrder';
import placeOrder from './placeOrder';
import {indexOf} from 'lodash';


function validateParams(params) {
  if (params.delete && indexOf(['true', 'false'], params.delete) < 0) {
    throw (`parameter error: delete must be either true or false (given ${params.delete})`);
  }

  if (params.delete && params.delete === 'true') {
    // Delete is set
    if (!params.orderId) {
      throw ('Needs orderId to delete order');
    }

    if (typeof params.orderId !== 'string') {
      throw ('orderId must be a string');
    }
  }

  if (!params.delete || params.delete === 'false') {
    // Order is set
    if (!params.pids || params.pids.length < 1) {
      throw ('At least one pid must be provided to place order');
    }
    if (!params.library) {
      throw ('library must be provided (used for pickup)');
    }
  }
}


export default (request, context) => {
  try {
    validateParams(request);
  } catch (err) { // eslint-disable-line brace-style
    return new Promise(resolve => {
      return resolve({statusCode: 400,
                      error: err});
    });
  }

  if (request.delete) {
    return cancelOrder(request, context);
  }
  return placeOrder(request, context);
};
