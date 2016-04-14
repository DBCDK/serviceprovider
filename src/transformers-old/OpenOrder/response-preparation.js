'use strict';

function hasValidPolicyResponse(response) {
  return response.checkOrderPolicyResponse.hasOwnProperty('orderPossible');
}

export function checkPolicyResponse(response) {

  if (hasValidPolicyResponse(response) === true) {
    return response;
  }

  response.error = response.checkOrderPolicyResponse.checkOrderPolicyError;
  return response;

}

function hasValidOrderResponse(response) {
  return response.hasOwnProperty('placeOrderResponse');
}

export function checkOrderResponse(response) {

  if (hasValidOrderResponse(response) === true) {
    return response;
  }

  response.error = 'Fejl ved bestilling';
  return response;

}
