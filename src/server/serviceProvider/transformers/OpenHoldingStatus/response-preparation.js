'use strict';

function hasValidUserStatusResponse(response) {
  return response.hasOwnProperty('responder');
}

export function checkHoldingStatusResponse(response) {

  if (hasValidUserStatusResponse(response) === true) {
    return response;
  }

  const pid = response.error.pid;

  response.error = response.error.errorMessage;
  response.pid = pid;
  return response;

}
