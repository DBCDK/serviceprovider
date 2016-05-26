'use strict';
/**
 * @file
 * cancelOrder transformer.
 *
 * Wraps cancelOrder functionality of openorder backend.
 */
import {log} from '../utils';

/**
* Validate parameters
*
* @param {object} params parameters to validate
* @throws if validation fails
*/
function validateParams(params) {
  if (!params.orderId) {
    throw ('missing orderId. Needed to cancel order');
  }
}

/**
* Constructs soap request to perform cancelOrder request
* @param {object} param Parameters to substitute into soap request
* @returns soap request string
*/
function constructSoap(params) {

  let soap = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:open="http://oss.dbc.dk/ns/openuserstatus">
   <soapenv:Header/>
   <soapenv:Body>
      <open:cancelOrderRequest>
         <open:agencyId>${params.agencyId}</open:agencyId>
         <open:authentication>
            <open:groupIdAut>${params['authentication.groupIdAut']}</open:groupIdAut>
            <open:passwordAut>${params['authentication.passwordAut']}</open:passwordAut>
            <open:userIdAut>${params['authentication.userIdAut']}</open:userIdAut>
         </open:authentication>
         <open:cancelOrder>
            <open:orderId>${params['cancelOrder.orderId']}</open:orderId>
            <open:orderType>{params['cancelOrder.orderType']}</open:orderType>
         </open:cancelOrder>
         <open:outputType>json</open:outputType>
         <open:userId>${params.userId}</open:userId>
         <open:userPincode>${params.userPincode}</open:userPincode>
      </open:cancelOrderRequest>
   </soapenv:Body>
</soapenv:Envelope>`;

  return soap;
}

/**
 * Default transformer.
 * Wraps the cancelOrder functionality of openorder backend and
 * returns result of call
 *
 * @param {Object} params parameters from the user (no entries from this object is used)
 * @param {Object} context The context object fetched from smaug
 * @returns promise with result
 * @api public
 */
export default (request, context) => {
  try {
    log.debug('Validating request');
    validateParams(request);
  } catch (err) { // eslint-disable-line brace-style
    return new Promise(resolve => {
      return resolve({statusCode: 400,
                      error: err});
    });
  }

  let i = request.orderId.indexOf(':');
  let orderType = request.orderId.substring(0, i);
  let orderId = request.orderId.substring(i + 1);

  let userstatus = context.data.userstatus;
  let params = {
    'cancelOrder.orderId': orderId,
    'cancelOrder.orderType': orderType,
    agencyId: context.get('agency.order'),
    userId: context.get('user.id'),
    userPincode: context.get('user.pin'),
    'authentication.groupIdAut': context.get('netpunkt.group'),
    'authentication.passwordAut': context.get('netpunkt.password'),
    'authentication.userIdAut': context.get('netpunkt.user')
  };

  let soap = constructSoap(params);

  return context.call('openuserstatus', soap).then(body => {
    body = JSON.parse(body).cancelOrderResponse;

    if (body.cancelOrderStatus[0].cancelOrderError) {
      return {statusCode: 500, error: body.cancelOrderStatus[0].cancelOrderError.$};
    }
    if (body.cancelOrderStatus[0].orderCancelled) {
      return {statusCode: 200, data: {deleted: true, orderId: body.cancelOrderStatus[0].orderId.$}};
    }
    return {statusCode: 500, error: 'Unknown error occured'};
  });
};
