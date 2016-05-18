'use strict';
/**
 * Renew transformer.
 */

function validateParams(params) {
  if (!params.loanId) {
    throw ('Needs loanId to renew order');
  }
}


function constructSoap(params) {

  let soap = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:open="http://oss.dbc.dk/ns/openuserstatus">
   <soapenv:Header/>
   <soapenv:Body>
      <open:renewLoanRequest>
         <open:agencyId>${params.agencyId}</open:agencyId>
         <open:authentication>
            <open:groupIdAut>${params['authentication.groupIdAut']}</open:groupIdAut>
            <open:passwordAut>${params['authentication.passwordAut']}</open:passwordAut>
            <open:userIdAut>${params['authentication.userIdAut']}</open:userIdAut>
         </open:authentication>
         <open:loanId>${params.loanId}</open:loanId>
         <open:outputType>json</open:outputType>
         <open:userId>${params.userId}</open:userId>
         <open:userPincode>${params.userPincode}</open:userPincode>
      </open:renewLoanRequest>
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

  let userstatus = context.data.userstatus;
  let params = {
    loanId: request.loanId,
    agencyId: userstatus.useragency,
    userId: userstatus.userid,
    userPincode: userstatus.userpin,
    'authentication.groupIdAut': userstatus.authgroupid,
    'authentication.passwordAut': userstatus.authpassword,
    'authentication.userIdAut': userstatus.authid
  };

  let soap = constructSoap(params);
  return context.call('userstatus', soap).then(body => {

    body = JSON.parse(body).renewLoanResponse.renewLoanStatus[0];

    if (body.renewLoanError) {
      return {statusCode: 500, error: body.renewLoanError.$};
    }
    if (body.loanId) {
      return {statusCode: 200, data: {loanId: body.loanId.$}};
    }
    return {statusCode: 500, error: 'Unknown error occured'};
  });
};
