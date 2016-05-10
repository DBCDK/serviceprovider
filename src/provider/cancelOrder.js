'use strict';
/**
 * cancelOrder transformer.
 */

function validateParams(params) {
  if (!params.orderId) {
    throw ('missing orderId. Needed to cancel order');
  }
}

export default (request, context) => {
  console.log('B1');
  try {
    validateParams(request);
  } catch (err) { // eslint-disable-line brace-style
    return new Promise(resolve => {
      return resolve({statusCode: 400,
                      error: err});
    });
  }

  console.log('B2');

  let userstatus = context.data.userstatus;
  let params = {
    cancelOrder: request.orderId,
    agencyId: userstatus.useragency,
    userId: userstatus.userid,
    userPincode: userstatus.userpin,
    'authentication.groupIdAut': userstatus.authgroupid,
    'authentication.passwordAut': userstatus.authpassword,
    'authentication.userIdAut': userstatus.authid,
    action: 'cancelOrder',
    outputType: 'json'
  };

  return context.call('userstatus', params).then(body => {
    console.log('RESULT' + JSON.stringify(body, null, 4));
    
    let response = body.data.cancelOrderResponse;
    if (response.cancelOrderError) {
      return {statusCode: 500, error: response.cancelOrderError.$};
    }
    
    return {statusCode: 200, data: 'foo'};
  });
};
