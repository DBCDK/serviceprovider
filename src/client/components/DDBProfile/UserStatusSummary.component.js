'use strict';

/**
 * @file
 * FiscalStatus component displays the user's fined items.
 */

import React, {PropTypes} from 'react';

import {filter, reduce} from 'lodash';

class UserStatusSummary extends React.Component {

  constructor() {
    super();
  }

  render() {

    const expiringLoans = (this.props.loans) ? filter(this.props.loans, (x) => {
      return x.dueSoon;
    }) : [];
    const expiringLoansCount = expiringLoans.length;

    const ordersReadyForPickUp = (this.props.items) ? this.props.items.length : 0;

    const debt = (this.props.items) ? reduce(this.props.items, (a, b) => {
      return a.amount + b.amount;
    }, {
      amount: 0
    }) : 0;

    const ordersReadyForPickUpMessage = (<p>{ordersReadyForPickUp} reserveringer klar til afhentning</p>);
    const expiringLoansMessage = (<p>{expiringLoansCount} lån skal afleveres snart</p>);
    const debtMessage = (<p>Du skylder {debt} kr</p>);

    const content = (
        <div className='row'>
          <span className='small-8 column'>{ordersReadyForPickUpMessage}</span>
          <span className='small-8 column'>{expiringLoansMessage}</span>
          <span className='small-8 column'>{debtMessage}</span>
        </div>
    );

    return content;
  }
}

UserStatusSummary.propTypes = {
  items: PropTypes.array,
  loans: PropTypes.array,
  orders: PropTypes.array
};

UserStatusSummary.displayName = 'UserStatusSummary.component';

export default UserStatusSummary;
