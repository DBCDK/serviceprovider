'use strict';
/**
 * cancelOrder transformer.
 */

function validateParams(params) {
  if (!params.orderId) {
    throw ('missing orderId. Needed to cancel order');
  }
}



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

export default (request, context) => {
  try {
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
    agencyId: userstatus.useragency,
    userId: userstatus.userid,
    userPincode: userstatus.userpin,
    'authentication.groupIdAut': userstatus.authgroupid,
    'authentication.passwordAut': userstatus.authpassword,
    'authentication.userIdAut': userstatus.authid
  };

  let soap = constructSoap(params);

  return context.call('userstatus', soap).then(body => {
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
