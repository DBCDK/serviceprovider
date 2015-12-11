'use strict';

function hasValidUserStatusResponse(response) {
  return response['ous:getUserStatusResponse'].hasOwnProperty('ous:userStatus');
}

function hasValidCancelOrderResponse(response) {
  return response['ous:cancelOrderResponse'].hasOwnProperty('ous:cancelOrderStatus');
}

function hasValidRenewLoanResponse(response) {
  return response['ous:renewLoanResponse'].hasOwnProperty('ous:renewLoanStatus');
}

function hasValidUpdateOrderResponse(response) {
  return response['ous:updateOrderResponse'].hasOwnProperty('ous:updateOrderStatus');
}

export function checkUserStatusResponse(response) {

  if (hasValidUserStatusResponse(response) === true) {
    return response;
  }

  response.error = response['ous:getUserStatusResponse']['ous:getUserStatusError'][0];
  return response;

}

export function checkCancelOrderResponse(response) {

  if (hasValidCancelOrderResponse(response) === true) {
    return response;
  }

  response.error = response['ous:cancelOrderResponse']['ous:cancelOrderError'][0];
  return response;

}

export function checkRenewLoanResponse(response) {

  if (hasValidRenewLoanResponse(response) === true) {
    return response;
  }

  response.error = response['ous:renewLoanResponse']['ous:renewLoanError'][0];
  return response;

}

export function checkUpdateOrderResponse(response) {

  if (hasValidUpdateOrderResponse(response) === true) {
    return response;
  }

  response.error = response['ous:updateOrderResponse']['ous:updateOrderError'][0];
  return response;

}
