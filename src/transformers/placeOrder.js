
/**
 * @file
 * orderPolicy transformer.
 *
 * Wraps the getorderpolicy functionality of the openorder backend.
 *
 */
import {extend} from 'lodash';

/**
* Validate parameters
*
* @param {object} params parameters to validate
* @throws if validation fails
*/
function validateParams(params) {
  if (!params.pids || params.pids.length === 0) {
    throw ('missing pids parameter');
  }
  if (params.expires && typeof params.expires !== 'string') {
    throw ('Expires must be a string');
  }
  if (params.expires && !params.expires.match(/^\d{4}-\d{2}-\d{2}$/g)) {
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

/**
 * Creates date three months in the future. Used if a date is not provided
 */
function createNeedBeforeDate() {
  let offsetInDays = 90;
  let offsetInMilliseconds = offsetInDays * 24 * 60 * 60 * 1000;
  let date = new Date(Date.now() + offsetInMilliseconds);
  let dateStr = `${date.getFullYear()}-${('0' + date.getMonth()).slice(-2)}-${('0' + date.getDate()).slice(-2)}T00:00:00`;
  return dateStr;
}


/**
 * Retrieves user info from parameters and returns xml snippet for use
 * in soap request
 *
 * @param {object} params parameter map from user
 * @returns {object} xml snippet with found user data
 */
function getUserParams(params) {

  let result = {};

  [['address', 'userAddress'],
   ['email', 'userMail'],
   ['name', 'userName'],
   ['phone', 'userTelephone']].forEach((names) => {
     result[names[0]] = '';

     if (params[names[0]]) {
       result[names[0]] = `<${names[1]}>${params[names[0]]}</${names[1]}>`;
     }
   });

  return result;
}

/**
* Constructs soap request to perform placeOrder request
* @param {object} params Parameters to substitute into soap request
* @returns {string} soap request string
*/
function constructSoap(pidList, expireDate, params, orderSystem) {
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
           <orderSystem>${orderSystem}</orderSystem>
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


/**
 * placeOrder.
 *
 * @param {Object} request parameters to use in backend call
 * @param {Object} context The context object fetched from smaug
 * @returns {Promise} promise with result
 */
function placeOrder(request, context) { // eslint-disable-line no-unused-vars
  let expireDate = createNeedBeforeDate();
  if (request.expires) {
    expireDate = request.expires + 'T00:00:00';
  }

  // Make orderSystem configurable by smaug.
  const orderSystem = context.get('app.orderSystem');
  let soap = constructSoap(request.pids, expireDate, request, orderSystem);

  return context.call('openorder', soap).then(body => {
    body = JSON.parse(body).placeOrderResponse;
    let status = 500;
    if (body.orderNotPlaced) {
      let err = 'order not placed';

      if (body.orderNotPlaced.placeOrderError) {
        err = body.orderNotPlaced.placeOrderError.$;
        if (err === 'service_unavailable'){
          status = 503;
        }
      }

      return {statusCode: status, error: err};
    }

    if (!body.orderPlaced) {
      return {statusCode: 500, error: 'Unknown error occured'};
    }
    return {statusCode: 200, data: {status: 'ok'}};
  });
}

/**
 * Default transformer.
 * Wraps placeOrder functionality of the openorder backend
 *
 * @param {Object} request params parameters from the user
 * @param {Object} context The context object fetched from smaug
 * @returns {Promise} with result
 * @api public
 */
export default (request, context) => {

  try {
    validateParams(request);
  } catch (err) { // eslint-disable-line brace-style
    return new Promise(resolve => {
      return resolve({statusCode: 400, error: err});
    });
  }

  const params = {
    agencyId: context.get('user.agency'),
    userId: context.get('user.id'),
    userPincode: context.get('user.pin'),
    'authentication.groupIdAut': context.get('netpunkt.group'),
    'authentication.passwordAut': context.get('netpunkt.password'),
    'authentication.userIdAut': context.get('netpunkt.user'),
    outputType: 'json',
    serviceRequester: context.get('app.orderpolicyrequester')
  };

  request = extend(params, request);

  return placeOrder(request, context);
};
