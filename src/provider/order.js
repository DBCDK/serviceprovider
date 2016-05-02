'use strict';
/**
 * Order transformer.
 */
function validateParams(params) {
  if (!params.pids || params.pids.length === 0) {
    throw ('missing pids parameter');
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


  let params = {
    agencyId: context.userstatus.useragency,
    userId: context.userstatus.userid,
    userPincode: context.userstatus.userpin,
    'authentication.groupIdAut': context.userstatus.authgroupid,
    'authentication.passwordAut': context.userstatus.authpassword,
    'authentication.userIdAut': context.userstatus.authid,
    action: 'getOrderPolicy',
    outputType: 'json',
    serviceRequester: 190101    
  };



  placeOrder(['870970-basis:27597726', '870970-basis:28126727', '870970-basis:27709885'], params, context);
  return getOrderPolicy(request.pids, params, context);

}


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


  return context.call('orderpolicy', soap).then(body => {
    body = JSON.parse(body).checkOrderPolicyResponse;
    return {statusCode: 200, data: {orderPossible: body.orderPossible.$, orderPossibleReason: body.orderPossibleReason.$}};
  });
}

function placeOrder(pidList, params, context) {
    
  let soap = `<SOAP-ENV:Envelope xmlns="http://oss.dbc.dk/ns/openorder" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
     <SOAP-ENV:Body>
        <placeOrderRequest>
           <authentication>
              <groupIdAut>${params['authentication.groupIdAut']}</groupIdAut>
              <passwordAut>${params['authentication.passwordAut']}</passwordAut>
              <userIdAut>${params['authentication.userIdAut']}</userIdAut>
           </authentication>
           <copy>false</copy>
           <exactEdition>false</exactEdition>
           <needBeforeDate>2016-07-29T00:00:00</needBeforeDate>
           <orderSystem>bibliotekdk</orderSystem>
           <pickUpAgencyId>${params.agencyId}</pickUpAgencyId>
            ${pidList.map(pid => {return `<pid>${pid}</pid>`;}).join('\n')}
             <serviceRequester>${params.serviceRequester}</serviceRequester>
           <userId>${params.userId}</userId>
           <userIdAuthenticated>true</userIdAuthenticated>
           <verificationReferenceSource>dbcdatawell</verificationReferenceSource>
        </placeOrderRequest>
     </SOAP-ENV:Body>
  </SOAP-ENV:Envelope>`;

  console.log('SOAP\n' + soap);
}
