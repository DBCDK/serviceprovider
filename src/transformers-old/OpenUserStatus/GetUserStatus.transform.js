'use strict';

import * as prep from './response-preparation.js';

const GetUserStatusTransform = {

  event() {
    return 'getUserStatus';
  },

  getUserStatus(request) {
    return this.callServiceClient('openuserstatus', 'getUserStatus', request);
  },

  requestTransform(event, request, connection) {
    const passport = connection.request.session.passport || {user: {id: '', uid: ''}};

    const params = {
      agencyId: 'DK-' + passport.user.agencyid,
      userId: passport.user.loanerid,
      pinCode: passport.user.pincode
    };

    return this.getUserStatus(params);
  },

  getOrderData(orderedItems, orders, branchNamesMap) {

    let ready = 0;
    orders['ous:order'].forEach((order) => {
      let o;
      o = {};
      o.author = (order['ous:author']) ? order['ous:author'][0] : '';
      o.title = order['ous:title'][0];
      o.status = order['ous:orderStatus'][0];
      o.pickUpAgencyId = order['ous:pickUpAgency'][0].replace('DK-', '');
      o.pickUpAgency = branchNamesMap[o.pickUpAgencyId];
      if (o.status === 'Available for pickup') {
        o.pickUpExpiryDate = order['ous:pickUpExpiryDate'][0];
        o.ready = true;
      }
      else {
        o.queue = (order['ous:holdQueuePosition']) ? order['ous:holdQueuePosition'][0] : null;
      }
      o.orderId = order['ous:orderId'][0];
      o.orderType = order['ous:orderType'][0];
      orderedItems.orders.push(o);
      if (o.status === 'Available for pickup') {
        ready++;
      }
    });
    orderedItems.readyForPickUp = ready;

  },

  getLoanData(loanedItems, loans) {

    let l;

    loans['ous:loan'].forEach((loan) => {
      l = {};
      l.author = (loan['ous:author']) ? loan['ous:author'][0] : null;
      l.title = (loan['ous:title']) ? loan['ous:title'][0] : null;
      l.dueDate = loan['ous:dateDue'][0];
      const date = new Date(loan['ous:dateDue'][0]);
      const soonDate = new Date(new Date().getTime() + 48 * 60 * 60 * 1000);
      l.overdue = (date < new Date());
      l.dueSoon = (date < soonDate && date > new Date());
      l.loanId = loan['ous:loanId'][0];
      loanedItems.loans.push(l);
    });

  },

  getFiscalTransactionData(fiscalTransaction, fiscal) {

    let f;

    fiscal['ous:fiscalTransaction'].forEach((item) => {
      f = {};
      f.author = (item['ous:author']) ? item['ous:author'][0] : null;
      f.title = (item['ous:title']) ? item['ous:title'][0] : null;
      f.amount = (parseInt(item['ous:fiscalTransactionAmount'], 10)) ? parseInt(item['ous:fiscalTransactionAmount'][0], 10) : null;
      f.currency = (item['ous:fiscalTransactionCurrency']) ? item['ous:fiscalTransactionCurrency'][0] : null;
      f.date = (item['ous:fiscalTransactionDate']) ? item['ous:fiscalTransactionDate'][0] : null;
      f.type = (item['ous:fiscalTransactionType']) ? item['ous:fiscalTransactionType'][0] : null;
      fiscalTransaction.items.push(f);
    });

  },

  responseTransform(response, query, connection) {
    let data = {};
    data.result = {};
    data.info = {};
    data.error = [];

    const branchNamesMap = connection.request.session.passport.user.branchNames;

    data.result.branchNamesMap = branchNamesMap;

    let result = prep.checkUserStatusResponse(response);

    if (result.hasOwnProperty('error')) {
      data.error.push(result.error);
      return data;
    }

    data.info.userId = response['ous:getUserStatusResponse']['ous:userId'][0];

    const orders = result['ous:getUserStatusResponse']['ous:userStatus'][0]['ous:orderedItems'][0];


    let orderedItems = {};
    orderedItems.count = parseInt(orders['ous:ordersCount'][0], 10);

    orderedItems.orders = [];
    if (orderedItems.count > 0) {
      this.getOrderData(orderedItems, orders, branchNamesMap);
    }

    data.result.orderedItems = orderedItems;

    const loans = result['ous:getUserStatusResponse']['ous:userStatus'][0]['ous:loanedItems'][0];

    let loanedItems = {};
    loanedItems.count = parseInt(loans['ous:loansCount'][0], 10);

    loanedItems.loans = [];
    if (loanedItems.count > 0) {
      this.getLoanData(loanedItems, loans);
    }

    data.result.loanedItems = loanedItems;


    if (result['ous:getUserStatusResponse']['ous:userStatus'][0]['ous:fiscalAccount']) {

      const fiscal = result['ous:getUserStatusResponse']['ous:userStatus'][0]['ous:fiscalAccount'][0];

      let fiscalTransaction = {};
      fiscalTransaction.totalAmount = parseInt(fiscal['ous:totalAmount'][0], 10);
      fiscalTransaction.currency = fiscal['ous:totalAmountCurrency'][0];

      fiscalTransaction.items = [];
      if (fiscalTransaction.totalAmount > 0) {
        this.getFiscalTransactionData(fiscalTransaction, fiscal);
      }

      data.result.fiscalAccount = fiscalTransaction;
    }
    else {
      data.result.fiscalAccount = {
        items: []
      };
    }

    return data;
  }

};

export default GetUserStatusTransform;
