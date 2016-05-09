'use strict';
/**
 * Order transformer.
 */
import getOrderPolicy from './getOrderPolicy';
import placeOrder from './placeOrder';
import {indexOf} from 'lodash';


function validateParams(params) {
  if (params.delete && indexOf(['true', 'false'], params.delete) < 0) {
    throw (`parameter error: delete must be either true or false (given ${params.delete})`);
  }

  if (params.delete && params.delete === 'true' && !params.orderId) {
    throw ('Needs orderId to delete order');
  }

  if (params.delete && params.delete === 'true' && typeof params.orderId !== 'string') {
    throw ('orderId must be a string');
  }

  if ((!params.delete || params.delete === 'false') && (!params.pids || params.pids.length < 1)) {
    throw ('At least one pid must be provided to place order');
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

  // return getOrderPolicy(request, context);

  if (request.delete) {
    console.log('DELETE');
  }

  // library param in request.
  // Do we use the users agencyID???
  return placeOrder(request, context);
  

};
