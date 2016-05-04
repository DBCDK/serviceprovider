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
    
    let data = {id: context.userstatus.uniqueid,
                loans: body.data.getUserStatusResponse.userStatus.loanedItems.loan.map(loan),
                orders: body.data.getUserStatusResponse.userStatus.orderedItems.order.map(order)
               };
    return {statusCode: 200, data: [data]};
  });
};
