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
import UserStatusSummary from './UserStatusSummary.component';

class DDBProfile extends React.Component {

  static displayName() {
    return 'DDBProfile.component';
  }

  constructor() {
    super();

    this.onUpdateUserStatus = this.onUpdateUserStatus.bind(this);

    this.state = {
      status: null,
      uiStatus: {
        loanCollapsed: true,
        ordersCollapsed: true,
        fiscalCollapsed: true
      }
    };

    UserStatusStore.listen(this.onUpdateUserStatus);
  }

  onUpdateUserStatus(store) {
    this.setState({status: store.status, uiStatus: store.uiStatus});
  }

  deleteOrder(orderId, orderType) {
    UserStatusActions.markOrderForDeletion(orderId, orderType);
  }

  renewLoan(loanId) {
    UserStatusActions.markLoanForRenewal(loanId);
  }

  toggleOrderDisplay() {
    UserStatusActions.toggleOrderDisplay();
  }

  toggleLoanDisplay() {
    UserStatusActions.toggleLoanDisplay();
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
        <UserStatusSummary items={fiscalItems} loans={loans} orders={orders} />
        <FiscalStatus items={fiscalItems} />
        <LoansList collapsed={this.state.uiStatus.loanCollapsed} loans={loans} onRenew={this.renewLoan} onToggleLoanDisplay={this.toggleLoanDisplay} />
        <OrdersList collapsed={this.state.uiStatus.ordersCollapsed} onDelete={this.deleteOrder} onToggleOrderDisplay={this.toggleOrderDisplay} orders={orders}/>
      </div>
    );
  }
}

export default DDBProfile;
