'use strict';
/**
 * Order transformer.
 */

export default (request, context) => {

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

  return getOrderPolicy(request.pid, params, context);

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

  return context.call('userstatus', soap).then(body => {
    body = JSON.parse(body).checkOrderPolicyResponse;
    return {statusCode: 200, data: {orderPossible: body.orderPossible.$, orderPossibleReason: body.orderPossibleReason.$}};
  });
}




