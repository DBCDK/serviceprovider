/**
 * @file
 * orderPolicy transformer.
 *
 * Wraps the getorderpolicy functionality of the openorder backend.
 *
 */
var parseString = require('xml2js').parseString;
var stripNS = require('xml2js').processors.stripPrefix;

/**
 * Validate parameters
 *
 * @param {object} params parameters to validate
 * @throws if validation fails
 */
function validateParams(params) {
  if (!params.pids || (params.pids && params.pids.length === 0)) {
    throw 'missing pids parameter';
  }

  if (params.pids[0].length === 0) {
    throw 'empty pids parameter';
  }
}

/**
 * Constructs soap request to perform renew request
 * @param pid
 * @param {object} params Parameters to substitute into soap request
 * @param context
 * @returns soap request string
 */
async function getOrderPolicy(pid, params, context) {
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
        </checkOrderPolicyRequest>
     </SOAP-ENV:Body>
  </SOAP-ENV:Envelope>`;
  return context.call('openorder', soap).then(body => {
    parseString(body, {trim: true, tagNameProcessors: [stripNS]}, function(
      err,
      result
    ) {
      body = result.Envelope.Body[0].checkOrderPolicyResponse[0];
    });
    const data = {};

    if (body.checkOrderPolicyError) {
      return {statusCode: 500, error: body.checkOrderPolicyError[0]};
    }

    if (body.orderPossible) {
      data.orderPossible = body.orderPossible[0] !== 'false';
    }
    if (body.orderPossibleReason) {
      data.orderPossibleReason = body.orderPossibleReason[0];
    }
    return {statusCode: 200, data: data};
  });
}

/**
 * Default transformer.
 * Wraps getorderpolicy of the openorder backend
 *
 * @param {Object} request parameters from the user (no entries from this object is used)
 * @param {Object} context The context object fetched from smaug
 * @returns promise with result
 * @api public
 */
export default (request, context, agencyId = null) => {
  try {
    validateParams(request);
  } catch (err) {
    // eslint-disable-line brace-style
    return new Promise(resolve => {
      return resolve({statusCode: 400, error: err});
    });
  }

  let params = {
    agencyId: agencyId || context.get('user.agency', true),
    userId: context.get('user.id'),
    userPincode: context.get('user.pin'),
    'authentication.groupIdAut': context.get('netpunkt.group', true),
    'authentication.passwordAut': context.get('netpunkt.password', true),
    'authentication.userIdAut': context.get('netpunkt.user', true),
    outputType: 'json',
    serviceRequester: context.get('app.orderpolicyrequester', true)
  };

  return getOrderPolicy(request.pids, params, context);
};
