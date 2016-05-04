'use strict';
/**
 * User transformer.
 */

function loan(loanItem) {

  let result = {loanId: loanItem.loanId.$,
                dueDate: loanItem.dateDue.$,
               title: loanItem.title.$};
  if (loanItem.author) {
    result.author = loanItem.author.$;
  }
  return result;
}

function order(orderItem) {
  // Just for testing!
  // if (!orderItem.title) console.log("title");
  // if (!orderItem.orderId) console.log("orderId");
  // if (!orderItem.orderDate) console.log("orderDate");
  // if (!orderItem.orderStatus) console.log("orderStatus");
  // if (!orderItem.orderType) console.log("orderType");
  // if (!orderItem.holdQueuePosition) console.log("holdQueuePosition");
  // if (!orderItem.pickUpAgency) console.log("pickUpAgency");

  let result = {title: orderItem.title.$,
                orderId: orderItem.orderId.$,
                orderDate: orderItem.orderDate.$,
                status: orderItem.orderStatus.$,
                type: orderItem.orderType.$,
                library: orderItem.pickUpAgency.$
               };
  if (orderItem.holdQueuePosition) {
    result.holdQueuePosition = orderItem.holdQueuePosition.$;
  }
  if (orderItem.author) {
    result.author = orderItem.author.$;
  }
  return result;
}

export default (request, context) => {

  let userstatus = context.data.userstatus;
  let params = {
    agencyId: userstatus.useragency,
    userId: userstatus.userid,
    userPincode: userstatus.userpin,
    'authentication.groupIdAut': userstatus.authgroupid,
    'authentication.passwordAut': userstatus.authpassword,
    'authentication.userIdAut': userstatus.authid,
    action: 'getUserStatus',
    outputType: 'json'
  };

  return context.call('userstatus', params).then(body => {
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

    let data = {id: body.data.getUserStatusResponse.userId.$,
                loans: body.data.getUserStatusResponse.userStatus.loanedItems.loan.map(loan),
                orders: body.data.getUserStatusResponse.userStatus.orderedItems.order.map(order)
               };

    return {statusCode: 200, data: [data]};
  });
};
