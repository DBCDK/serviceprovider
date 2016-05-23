'use strict';
/**
 * @file
 * renew transformer.
 *
 * Wraps userstatus backend (only the renew functionality).
 */


/**
* Constructs soap request to perform renew request
* @param {object} param Parameters to substitute into soap request
* @returns soap request string
*/
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

/**
 * Default transformer.
 * Wraps openuserstatus backend and returns result of renew call
 *
 * @param {Object} params parameters from the user (no entries from this object is used)
 * @param {Object} context The context object fetched from smaug
 * @returns promise with result
 * @api public
 */
export default (request, context) => {

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
