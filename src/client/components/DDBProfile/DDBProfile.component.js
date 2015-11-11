'use strict';

/**
 * @file
 * DDBProfile component displays the user attributes and allows editing.
 */

import React from 'react';
// import Reflux from 'reflux';

import UserStatusStore from '../../stores/UserStatus.store.js';
import UserStatusActions from '../../actions/UserStatus.action.js';

import OrdersList from './OrdersList.component';
import LoansList from './LoansList.component';
import FiscalStatus from './FiscalStatus.component';

class DDBProfile extends React.Component {

  static displayName() {
    return 'DDBProfile.component';
  }

  constructor() {
    super();

    this.onUpdateUserStatus = this.onUpdateUserStatus.bind(this);

    this.state = {
      status: null
    };

    UserStatusStore.listen(this.onUpdateUserStatus);
  }

  onUpdateUserStatus(status) {
    this.setState({status: status});
  }

  deleteOrder(orderId, orderType) {
    UserStatusActions.markOrderForDeletion(orderId, orderType);
  }

  renewLoan(loanId) {
    UserStatusActions.markLoanForRenewal(loanId);
  }

  render() {

    let fiscalItems = null;
    if (this.state.status && this.state.status.fiscalAccount) {
      fiscalItems = this.state.status.fiscalAccount.items;
    }

    let orders = null;
    if (this.state.status && this.state.status.orderedItems) {
      orders = this.state.status.orderedItems.orders;
    }

    let loans = null;
    if (this.state.status && this.state.status.loanedItems) {
      loans = this.state.status.loanedItems.loans;
    }

    return (
      <div className='profile--user-status'>
        <FiscalStatus items={fiscalItems} />
        <LoansList loans={loans} onRenew={this.renewLoan} />
        <OrdersList onDelete={this.deleteOrder} orders={orders}/>
      </div>
    );
  }
}

export default DDBProfile;
