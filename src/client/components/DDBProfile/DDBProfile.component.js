'use strict';

/**
 * @file
 * DDBProfile component displays the user attributes and allows editing.
 */

import React from 'react';
// import Reflux from 'reflux';

import UserStatusStore from '../../stores/UserStatus.store.js';
// import UserStatusActions from '../../actions/UserStatus.action.js';

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

  render() {
    const orders = (this.state.status && this.state.status.orderedItems.count > 0) ? this.state.status.orderedItems.orders : null;
    const loans = (this.state.status && this.state.status.loanedItems.count > 0) ? this.state.status.loanedItems.loans : null;
    return (
      <div className='profile--user-status'>
        <LoansList loans={loans}/>
        <OrdersList orders={orders}/>
      </div>
    );
  }
}

export default DDBProfile;
