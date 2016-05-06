'use strict';

function validateParams(params) {
  if (!params.pids || params.pids.length === 0) {
    throw ('missing pids parameter');
  }
}


function createNeedBeforeDate() {
  let offsetInDays = 90;
  let offsetInMilliseconds = offsetInDays * 24 * 60 * 60 * 1000;
  let date = new Date(Date.now() + offsetInMilliseconds);
  let dateStr = `${date.getFullYear()}-${('0' + date.getMonth()).slice(-2)}-${('0' + date.getDay()).slice(-2)}T00:00:00`;
  return dateStr;
}


function placeOrder(pidList, params, context) { // eslint-disable-line no-unused-vars

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
           <needBeforeDate>${createNeedBeforeDate()}</needBeforeDate>
           <orderSystem>bibliotekdk</orderSystem>
           <pickUpAgencyId>${params.agencyId}</pickUpAgencyId>
            ${pidList.map(pid => {
              return `<pid>${pid}</pid>`;
            }).join('\n')}
             <serviceRequester>${params.serviceRequester}</serviceRequester>
           <userId>${params.userId}</userId>
           <userIdAuthenticated>true</userIdAuthenticated>
           <verificationReferenceSource>dbcdatawell</verificationReferenceSource>
           <outputType>${params.outputType}</outputType>
        </placeOrderRequest>
     </SOAP-ENV:Body>
  </SOAP-ENV:Envelope>`;

  return context.call('orderpolicy', soap).then(body => {
    body = JSON.parse(body).placeOrderResponse;
    if (body.orderNotPlaced) {
      let err = 'order not placed';
      if (body.orderNotPlaced.placeOrderError) {
        err = body.orderNotPlaced.placeOrderError.$;
      }
      return {statusCode: 500, error: err};
    }
    if (!body.orderPlaced) {
      return {statusCode: 500, error: 'Unknown error occured'};
    }
    return {statusCode: 200, data: 'ok'};
  });
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
    agencyId: context.data.userstatus.useragency,
    userId: context.data.userstatus.userid,
    userPincode: context.data.userstatus.userpin,
    'authentication.groupIdAut': context.data.userstatus.authgroupid,
    'authentication.passwordAut': context.data.userstatus.authpassword,
    'authentication.userIdAut': context.data.userstatus.authid,
    outputType: 'json',
    serviceRequester: context.data.orderpolicy.servicerequester
  };

  return placeOrder(request.pids, params, context);
};
