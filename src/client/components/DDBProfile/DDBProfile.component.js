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
    // fetch the current user's status
    // UserStatusActions.fetchUserStatus({id: userId});
  }

  onUpdateUserStatus(status) {
    this.setState({status: status});
  }

  deleteOrder(orderId, orderType) {
    UserStatusActions.markOrderForDeletion(orderId, orderType);
  }

  render() {

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
        <LoansList loans={loans}/>
        <OrdersList onDelete={this.deleteOrder} orders={orders}/>
      </div>
    );
  }
}

export default DDBProfile;
