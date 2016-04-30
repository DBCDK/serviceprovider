'use strict';
/**
 * User transformer.
 */
import {log} from '../utils';
import {requestPromise} from '../services/requestPromise';

function loan(loanItem) {

  let result = {loanId : loanItem.loanId['$'],
                dueDate: loanItem.dateDue['$'],
               title: loanItem.title['$']};
  if (loanItem.author) {
    result.author = loanItem.author['$'];
  }
  return result;
}

function order(orderItem) {

  let result = {title: orderItem.title['$'],
                orderId: orderItem.orderId['$'],
                orderDate: orderItem.orderDate['$'],
                status: orderItem.orderStatus['$'],
                type: orderItem.orderType['$'],
                holdQueuePosition: orderItem.holdQueuePosition['$'],
                library: orderItem.pickUpAgency['$']
               };
  if (orderItem.author) {
    result.author = orderItem.author['$'];
  }
  return result;
}


export default (params, context) => {

  let agency = context.user.useragency;
  let userID = context.user.userid;
  let pin = context.user.userpin;
  let groupID = context.user.authgroupid;
  let password = context.user.authpassword;
  let authID = context.user.authid;

  let soap = `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:open="http://oss.dbc.dk/ns/openuserstatus">
  <SOAP-ENV:Body>
      <open:getUserStatusRequest>
         <open:agencyId>${agency}</open:agencyId>
         <open:authentication>
            <open:groupIdAut>${groupID}</open:groupIdAut>
            <open:passwordAut>${password}</open:passwordAut>
            <open:userIdAut>${authID}</open:userIdAut>
         </open:authentication>
         <open:outputType>json</open:outputType>
         <open:userId>${userID}</open:userId>
         <open:userPincode>${pin}</open:userPincode>
      </open:getUserStatusRequest>
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
`;

  var paramsPost = {
    uri: context.user.url,
    method: 'POST',
    form: {xml: soap}
  };


  // Brug caller i stedet
  return requestPromise(paramsPost).then(body => {
    body = JSON.parse(body);
    // registered? Hvad dækker denne nøgle over?

    // LOAN
    // Hvor får jeg pid fra i loan?
    // creator findes ikke altid
    
    // ORDER
    // er library i order det samme som pickup agency ??(implemnteret som sådan)
    // hvor får jeg pid fra i order?
    // hvor får jeg expires fra i order?
    // creator findes ikke altid

    // DEBT
    // Hvor findes disse oplysninger ? (Er det fordi testbrugeren ikke har noget gæld?)

    let data = {id: body.getUserStatusResponse.userId['$'],
                loans: body.getUserStatusResponse.userStatus.loanedItems.loan.map(loan),
                orders: body.getUserStatusResponse.userStatus.orderedItems.order.map(order)
               };
    
    return {statusCode: 200, data: data};
  });
};

