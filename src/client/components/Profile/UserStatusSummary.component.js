'use strict';

/**
 * @file
 * FiscalStatus component displays the user's fined items.
 */

import React, {PropTypes} from 'react';

import {filter, forEach} from 'lodash';

class UserStatusSummary extends React.Component {

  constructor() {
    super();
  }

  render() {
    const expiringLoans = (this.props.loans) ? filter(this.props.loans, (x) => {
      return x.dueSoon;
    }) : [];
    const expiredLoans = (this.props.loans) ? filter(this.props.loans, (y) => {
      return y.overdue;
    }) : [];
    const readyOrders = (this.props.orders) ? filter(this.props.orders, (z) => {
      return z.ready;
    }) : [];
    const expiringLoansCount = expiringLoans.length;
    const expiredLoansCount = expiredLoans.length;
    const readyOrdersCount = readyOrders.length;

    const noOrders = (readyOrdersCount === 1) ? 'reservering' : 'reserveringer';

    let debt = 0;
    forEach(this.props.items, (item) => {
      if (item.amount) {
        debt += item.amount;
      }
    });

    const ordersReadyForPickUpMessage = (readyOrdersCount > 0) ? (
      <div className='small-24 medium-12 large-8 column pickup message-button' onClick={this.props.toggleOrderDisplay}>
        <div>{readyOrdersCount} {noOrders} klar til afhentning</div>
      </div>) : '';
    const expiringLoansMessage =(expiringLoansCount > 0) ? (
      <div className='small-24 medium-12 large-8 column expiring message-button' onClick={this.props.toggleLoanDisplay}>
        <div>{expiringLoansCount} lån skal afleveres snart</div>
      </div>) : '';
    const expiredLoansMessage =(expiredLoansCount > 0) ? (
      <div className='small-24 medium-12 large-8 column expired message-button' onClick={this.props.toggleLoanDisplay}>
        <div>{expiredLoansCount} lån skulle have været afleveret</div>
      </div>) : '';
    const debtMessage = (debt > 0) ? (
      <div className='small-24 medium-12 large-8 column debt message-button' onClick={this.props.toggleFiscalDisplay}>
        <div>Du skylder {debt} kr</div>
      </div>) : '';

    const content = (
        <div className='row action'>
          {ordersReadyForPickUpMessage}
          {expiringLoansMessage}
          {expiredLoansMessage}
          {debtMessage}
        </div>
    );

    return content;
  }
}

UserStatusSummary.propTypes = {
  items: PropTypes.array,
  loans: PropTypes.array,
  orders: PropTypes.array,
  toggleFiscalDisplay: PropTypes.func,
  toggleLoanDisplay: PropTypes.func,
  toggleOrderDisplay: PropTypes.func
};

UserStatusSummary.displayName = 'UserStatusSummary.component';

export default UserStatusSummary;
