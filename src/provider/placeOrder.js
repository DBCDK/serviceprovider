'use strict';
'use strict';
/**
 * placeOrder transformer.
 */
import {extend}from 'lodash';

function validateParams(params) {
  if (!params.pids || params.pids.length === 0) {
    throw ('missing pids parameter');
  }
  if (params.expires && typeof params.expires !== 'string') {
    throw ('Expires must be a string');
  }
  if (params.expires && !params.expires.match(/\d{4}-\d{2}-\d{2}/g)) {
    throw ('The expires argument must be of the form YYYY-MM-DD (example: 2016-06-24)');
  }

  let dateOffset = new Date(params.expires) - Date.now();
  if (params.expires && dateOffset < 0) {
    throw ('The expire argument must be a future date');
  }
  if (!params.library) {
    throw ('library must be provided (used for pickup)');
  }
}

function createNeedBeforeDate() {
  let offsetInDays = 90;
  let offsetInMilliseconds = offsetInDays * 24 * 60 * 60 * 1000;
  let date = new Date(Date.now() + offsetInMilliseconds);
  let dateStr = `${date.getFullYear()}-${('0' + date.getMonth()).slice(-2)}-${('0' + date.getDate()).slice(-2)}T00:00:00`;
  return dateStr;
}


function getUserParams(params) {

  let result = {};

  [['address', 'userAddress'],
   ['email', 'userMail'],
   ['name', 'userName'],
   ['phone', 'userTelephone']].forEach((names) => {
     result[names[0]] = '';
     if (params[names[0]]) {
       result[names[0]] = `<${names[1]}>${names[0]}</${names[1]}>`;
     }
   });
  return result;
}


function constructSoap(pidList, expireDate, params) {

  let userParams = getUserParams(params);

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
           <needBeforeDate>${expireDate}</needBeforeDate>
           <orderSystem>bibliotekdk</orderSystem>
           <pickUpAgencyId>${params.library}</pickUpAgencyId>
${pidList.map(pid => {
  return `           <pid>${pid}</pid>`;
}).join('\n')}
           <serviceRequester>${params.serviceRequester}</serviceRequester>
           ${userParams.address}
           <userId>${params.userId}</userId>
           <userIdAuthenticated>true</userIdAuthenticated>
           ${userParams.email}
           ${userParams.name}
           ${userParams.phone}
           <verificationReferenceSource>dbcdatawell</verificationReferenceSource>
           <outputType>${params.outputType}</outputType>
         </placeOrderRequest>
      </SOAP-ENV:Body>
    </SOAP-ENV:Envelope>`;
  return soap;
}


function placeOrder(request, context) { // eslint-disable-line no-unused-vars

  let expireDate = createNeedBeforeDate();
  if (request.expires) {
    expireDate = request.expires + 'T00:00:00';
  }
  let soap = constructSoap(request.pids, expireDate, request);

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

  request = extend(request, params);

  return placeOrder(request, context);
};
