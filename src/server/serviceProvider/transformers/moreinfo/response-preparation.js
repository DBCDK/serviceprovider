'use strict';

/**
 * Checks the response from the MoreInfo webservice, to see
 * if any errors are returned from the service.
 *
 * @param {Object} the requestStatus from the webservice
 * @return {Object} either empty if everything was ok, otherwise error
 * code and error messages
 */

export function checkResponse(response) {

  let error = null;
  let serviceError = '';

  if (response.errorText) {
    serviceError = response.errorText;
  }

  switch (response.requestStatus.statusEnum) {
    case 'ok':
      break;
    case 'authentication_error':
      error = {
        errorcode: 1,
        errormessage: 'Authentication error',
        serviceerror: serviceError
      };
      break;
    case 'error_in_request':
      error = {
        errorcode: 2,
        errormessage: 'Error in request',
        serviceerror: serviceError
      };
      break;
    case 'service_unavailable':
      error = {
        errorcode: 3,
        errormessage: 'Service unavailable',
        serviceerror: serviceError
      };
      break;
    default:
      error = {
        errorcode: 0,
        errormessage: 'Error',
        serviceerror: serviceError
      };
      break;
  }

  return error;

}
