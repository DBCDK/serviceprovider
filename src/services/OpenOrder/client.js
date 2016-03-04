'use strict';

import request from 'request';
import {parseString} from 'xml2js';

/**
 * Retrieves data from the webservice based on the parameters given
 *
 * @param {Object} params Parameters for the request
 * @return {Promise}
 */
function sendOpenOrderRequest(endpoint, params) {
  return new Promise((resolve, reject) => {
    let options = {
      url: endpoint,
      qs: params
    };
    request(options, function (error, response) {
      if (response.statusCode === 200) {
        parseString(response.body, function (err, res) {
          if (!err) {
            res.pids = params.pid;
            resolve(res);
          }
        });
      } else {
        reject({
          type: 'Error',
          statusCode: response.statusCode,
          statusMessage: response.statusMessage,
          response: response
        });
      }
    });
  });
}

/**
 * Constructs the object of parameters for OpenOrder check order policy request.
 *
 * @param {Object} values Object with the necessary parameters
 * @return {Promise}
 */
export function checkOrderPolicy(endpoint, defaults, values) {
  const params = {
    action: 'checkOrderPolicy',
    outputType: 'xml',
    pickUpAgencyId: values.agencyId,
    pid: values.pids,
    groupIdAut: defaults.groupIdAut,
    passwordAut: defaults.passwordAut,
    userIdAut: defaults.userIdAut,
    serviceRequester: defaults.serviceRequester
  };
  let response = new Promise((resolve) => {
    const res = {
      checkOrderPolicyResponse: {
        orderPossible: ['true']
      },
      pids: values.pids
    };
    resolve(res);
  });
  if (values.loggedIn === true) {
    response = sendOpenOrderRequest(endpoint, params);
  }
  return response;
}

/**
 * Constructs the object of parameters for OpenOrder place order request.
 *
 * @param {Object} values Object with the necessary parameters
 * @return {Promise}
 */
export function placeOrder(endpoint, defaults, values) {
  const params = {
    action: 'placeOrder',
    outputType: 'xml',
    pickUpAgencyId: values.agencyId,
    pid: values.pids,
    userId: values.userId,
    needBeforeDate: values.needBeforeDate,
    groupIdAut: defaults.groupIdAut,
    passwordAut: defaults.passwordAut,
    userIdAut: defaults.userIdAut,
    serviceRequester: defaults.serviceRequester,
    orderSystem: defaults.orderSystem
  };
  return sendOpenOrderRequest(endpoint, params);
}

/**
 * Setting the necessary paramerters for the client to be usable.
 * The endpoint is only set if endpoint is null to allow setting it through
 * environment variables.
 *
 * @param {Object} config Config object with the necessary parameters to use
 * the webservice
 */
export default function OpenOrderClient(config) {

  const defaults = {
    groupIdAut: config.group,
    passwordAut: config.password,
    userIdAut: config.user,
    serviceRequester: config.serviceRequester,
    orderSystem: config.orderSystem
  };

  return {
    checkOrderPolicy: checkOrderPolicy.bind(null, config.endpoint, defaults),
    placeOrder: placeOrder.bind(null, config.endpoint, defaults)
  };
}
