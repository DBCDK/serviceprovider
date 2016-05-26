'use strict';
/**
 * @file
 * orderPolicy transformer.
 *
 * Wraps the getorderpolicy functionality of the openorder backend.
 *
 */
import _ from 'lodash';

/**
* Validate parameters
*
* @param {object} params parameters to validate
* @throws if validation fails
*/
function validateParams(params) {
  if (!params.pids || params.pids.length === 0) {
    throw ('missing pids parameter');
  }
}

/**
* Constructs soap request to perform renew request
* @param {object} param Parameters to substitute into soap request
* @returns soap request string
*/
function getOrderPolicy(pid, params, context) {

  let soap = `<SOAP-ENV:Envelope xmlns="http://oss.dbc.dk/ns/openorder" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
     <SOAP-ENV:Body>

        <checkOrderPolicyRequest>
           <authentication>
              <groupIdAut>${params['authentication.groupIdAut']}</groupIdAut>
              <passwordAut>${params['authentication.passwordAut']}</passwordAut>
              <userIdAut>${params['authentication.userIdAut']}</userIdAut>
           </authentication>
           <pickUpAgencyId>${params.agencyId}</pickUpAgencyId>
           <pid>${pid}</pid>
           <serviceRequester>${params.serviceRequester}</serviceRequester>
           <outputType>json</outputType>
        </checkOrderPolicyRequest>
     </SOAP-ENV:Body>
  </SOAP-ENV:Envelope>`;

  return context.call('openorder', soap).then(body => {
    body = JSON.parse(body).checkOrderPolicyResponse;
    let data = {};
    if (_.has(body, 'orderPossible.$') && _.has(body, 'orderPossibleReason.$')) {
      data = {orderPossible: body.orderPossible.$, orderPossibleReason: body.orderPossibleReason.$};
    }
    return {statusCode: 200, data: data};
  });
}

/**
 * Default transformer.
 * Wraps getorderpolicy of the openorder backend
 *
 * @param {Object} params parameters from the user (no entries from this object is used)
 * @param {Object} context The context object fetched from smaug
 * @returns promise with result
 * @api public
 */
export default (request, context) => {

  try {
    validateParams(request);
  } catch (err) { // eslint-disable-line brace-style
    return new Promise(resolve => {
      return resolve({statusCode: 400,
                      error: err});
    });
  }

  let params = {
    agencyId: context.get('agency.order'),
    userId: context.get('user.id'),
    userPincode: context.get('user.pin'),
    'authentication.groupIdAut': context.get('netpunkt.group'),
    'authentication.passwordAut': context.get('netpunkt.password'),
    'authentication.userIdAut': context.get('netpunkt.user'),
    outputType: 'json',
    serviceRequester: context.get('app.orderpolicyrequester')
  };

  return getOrderPolicy(request.pids, params, context);
};
