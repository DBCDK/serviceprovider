/**
 * @file
 * User transformer.
 *
 * Wraps userstatus backend.
 */
import {pbkdf2} from 'crypto';

/**
 * Maps loan item from backend response to serviceprovider api
 * @param {Object} loanItem
 * @returns {Object} response with mapped keys
 */
function loan(loanItem) {

  const result = {
    loanId: loanItem.loanId.$,
    dueDate: loanItem.dateDue.$,
    title: loanItem.title.$
  };

  if (loanItem.author) {
    result.author = loanItem.author.$;
  }
  return result;
}

/**
 * Maps debt item from backend response to serviceprovider api
 * @param {Object} debtItem openuserstatus orders response
 * @returns {Object} response with mapped keys
 */
function debt(debtItem) {

  const result = {
    amount: debtItem.fiscalTransactionAmount.$,
    currency: debtItem.fiscalTransactionCurrency.$,
    date: debtItem.fiscalTransactionDate.$.split('T')[0],
    title: debtItem.title.$
  };

  if (debtItem.author) {
    result.author = debtItem.author.$;
  }
  return result;
}

/**
 * Maps order item from backend response to serviceprovider api
 * @param {Object} orderItem openuserstatus orders response
 * @returns {Object} response with mapped keys
 */
function order(orderItem) {
  const result = {
    orderId: `${orderItem.orderType.$}:${orderItem.orderId.$}`,
    status: orderItem.orderStatus.$,
    library: orderItem.pickUpAgency.$
  };

  const orderFields = ['holdQueuePosition', 'author', 'title', 'orderDate', 'pickUpExpiryDate', 'pickUpId'];

  orderFields.forEach(key => {
    if (orderItem[key] && orderItem[key].$) {
      result[key] = orderItem[key].$;
    }
  });

  return result;
}

/**
 * Default transformer.
 * Wraps openuserstatus backend and returns user info
 *
 * @param {Object} request parameters from the user (no entries from this object is used)
 * @param {Object} context The context object fetched from smaug
 * @returns {Object|Promise} promise with result
 * @api public
 */
export default (request, context) => {

  if (!(context.get('user.id') && context.get('user.pin'))) {
    return {
      statusCode: 300,
      error: 'not logged in'
    };
  }

  const params = {
    agencyId: context.get('user.agency'),
    userId: context.get('user.id'),
    userPincode: context.get('user.pin'),
    'authentication.groupIdAut': context.get('netpunkt.group'),
    'authentication.passwordAut': context.get('netpunkt.password'),
    'authentication.userIdAut': context.get('netpunkt.user'),
    action: 'getUserStatus',
    outputType: 'json'
  };

  const idPromise = new Promise((resolve, reject) =>
    pbkdf2(context.get('user.agency').replace(/^DK-/, '') + ' ' + context.get('user.id'),
      context.get('user.salt'), 100000, 24, 'sha512', (err, key) => err ? reject(err) : resolve(key)));

  return context.call('openuserstatus', params).then(body => idPromise.then(id => {
    if (body.data.getUserStatusResponse.getUserStatusError) {
      return {
        statusCode: 500,
        error: body.data.getUserStatusResponse.getUserStatusError.$
      };
    }

    let loans = [];
    if (body.data.getUserStatusResponse.userStatus.loanedItems.loan) {
      loans = body.data.getUserStatusResponse.userStatus.loanedItems.loan;
    }
    let orders = [];
    if (body.data.getUserStatusResponse.userStatus.orderedItems.order) {
      orders = body.data.getUserStatusResponse.userStatus.orderedItems.order;
    }

    let debts = [];
    if (body.data.getUserStatusResponse.userStatus.fiscalAccount) {
      debts = body.data.getUserStatusResponse.userStatus.fiscalAccount.fiscalTransaction || [];
    }

    const data = {
      id: id.toString('base64'),
      loans: loans.map(loan),
      orders: orders.map(order),
      debt: debts.map(debt)
    };

    if (context.get('services.ddbcmsapi')) {
      data.ddbcmsapi = context.get('services.ddbcmsapi');
    }

    return {
      statusCode: 200,
      data: data
    };
  }));
};
