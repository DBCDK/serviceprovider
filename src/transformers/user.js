'use strict';
import {pbkdf2} from 'crypto';
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
                orderId: `${orderItem.orderType.$}:${orderItem.orderId.$}`,
                orderDate: orderItem.orderDate.$,
                status: orderItem.orderStatus.$,
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

  if (!(userstatus && userstatus.salt && userstatus.useragency)) {
    return {statusCode: 500, error: 'userstatus is missing data in config from Smaug'};
  }
  if (!(userstatus.userid && userstatus.userpin)) {
    return {statusCode: 300, error: 'not logged in'};
  }
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

  let idPromise = new Promise((resolve, reject) =>
    pbkdf2(userstatus.useragency.replace(/^DK-/, '') + ' ' + userstatus.userid,
      userstatus.salt, 100000, 24, 'sha512', (err, key) => err ? reject(err) : resolve(key)));

  return context.call('userstatus', params).then(body => idPromise.then(id => {
    let data = {id: id.toString('base64'),
                loans: body.data.getUserStatusResponse.userStatus.loanedItems.loan.map(loan),
                orders: body.data.getUserStatusResponse.userStatus.orderedItems.order.map(order)
               };
    if (context.data.ddbcms) {
      data.ddbcmsapi = context.data.ddbcms.url;
    }

    return {statusCode: 200, data: [data]};
  }));
};
