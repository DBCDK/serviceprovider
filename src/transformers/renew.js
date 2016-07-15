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

  return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:open="http://oss.dbc.dk/ns/openuserstatus">
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
}

/**
 * Default transformer.
 * Wraps openuserstatus backend and returns result of renew call
 *
 * @param {Object} request parameters from the user (no entries from this object is used)
 * @param {Object} context The context object fetched from smaug
 * @returns {Promise} promise with result
 * @api public
 */
export default (request, context) => {

  const params = {
    loanId: request.loanId,
    agencyId: context.get('user.agency'),
    userId: context.get('user.id'),
    userPincode: context.get('user.pin'),
    'authentication.groupIdAut': context.get('netpunkt.group'),
    'authentication.passwordAut': context.get('netpunkt.password'),
    'authentication.userIdAut': context.get('netpunkt.user')
  };

  const soap = constructSoap(params);
  return context.call('openuserstatus', soap).then(body => {

    body = JSON.parse(body).renewLoanResponse.renewLoanStatus[0];

    if (body.renewLoanError) {
      return Promise.resolve({
        statusCode: 500,
        error: body.renewLoanError.$
      });
    }
    if (body.loanId) {
      return Promise.resolve({
        statusCode: 200,
        data: {loanId: body.loanId.$}
      });
    }
    return Promise.resolve({
      statusCode: 500,
      error: 'Unknown error occured'
    });
  });
};
