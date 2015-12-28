'use strict';

/**
 * @file
 * Profile component displays the user attributes and allows editing.
 */

import React from 'react';

// Actions
import ProfileActions from '../../actions/Profile.action';
import UserStatusActions from '../../actions/UserStatus.action.js';

// Components
import DeleteLikesButton from './DeleteLikesButton.component';
import OrdersList from './OrdersList.component';
import LoansList from './LoansList.component';
import FiscalStatus from './FiscalStatus.component';
import UserStatusSummary from './UserStatusSummary.component';
import LibraryAffiliatesDropDown from '../LibraryAffiliatesDropDown/LibraryAffiliatesDropDown.component';

// Stores
import ProfileStore from '../../stores/Profile.store';
import UserStatusStore from '../../stores/UserStatus.store.js';

class Profile extends React.Component {

  static displayName() {
    return 'Profile.component';
  }

  constructor() {
    super();

    this.onUpdateUserStatus = this.onUpdateUserStatus.bind(this);
    this.toggleOrderDisplay = this.toggleOrderDisplay.bind(this);
    this.toggleLoanDisplay = this.toggleLoanDisplay.bind(this);
    this.toggleFiscalDisplay = this.toggleFiscalDisplay.bind(this);
    this.selectPickupAgency = this.selectPickupAgency.bind(this);

    this.state = {
      status: null,
      uiStatus: {
        loanCollapsed: true,
        ordersCollapsed: true,
        fiscalCollapsed: true
      },
      profile: ProfileStore.getState()
    };

    this.unsubscriber = [
      UserStatusStore.listen(this.onUpdateUserStatus),
      ProfileStore.listen((store) => {
        this.setState({profile: store});
      })
    ];
  }

  componentWillUnmount() {
    this.unsubscriber.forEach((unsub) => {
      unsub();
    });
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

  toggleFiscalDisplay() {
    UserStatusActions.toggleFiscalDisplay();
    if (this.state.uiStatus.fiscalCollapsed === true) {
      location.hash = '#fiscal-scroll';
    }
  }

  toggleOrderDisplay() {
    UserStatusActions.toggleOrderDisplay();
    if (this.state.uiStatus.ordersCollapsed === true) {
      location.hash = '#order-scroll';
    }
  }

  toggleLoanDisplay() {
    UserStatusActions.toggleLoanDisplay();
    if (this.state.uiStatus.loanCollapsed === true) {
      location.hash = '#loan-scroll';
    }
  }

  selectPickupAgency(orderId, agencyId) {
    UserStatusActions.markForChangePickupAgency({orderId: orderId, agencyId: agencyId});
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

    let branchNamesMap = null;
    if (this.state.status && this.state.status.branchNamesMap) {
      branchNamesMap = this.state.status.branchNamesMap;
    }

    let defaultPickupAgency = '';
    if (!this.state.profile.pending) {
      defaultPickupAgency = this.state.profile.profile.pickup_agency || this.state.profile.profile.agencyid;
    }

    return (
      <div className='profile--user-status' >
        <UserStatusSummary
          items={fiscalItems}
          loans={loans} orders={orders}
          toggleFiscalDisplay={this.toggleFiscalDisplay}
          toggleLoanDisplay={this.toggleLoanDisplay}
          toggleOrderDisplay={this.toggleOrderDisplay}
        />

        <LoansList
          collapsed={this.state.uiStatus.loanCollapsed}
          loans={loans}
          onRenew={this.renewLoan}
          onToggleLoanDisplay={this.toggleLoanDisplay}
        />

        <OrdersList
          branchNamesMap={branchNamesMap}
          collapsed={this.state.uiStatus.ordersCollapsed}
          onDelete={this.deleteOrder}
          onSelectPickupAgency={this.selectPickupAgency}
          onToggleOrderDisplay={this.toggleOrderDisplay}
          orders={orders}
        />

        <FiscalStatus
          collapsed={this.state.uiStatus.fiscalCollapsed}
          items={fiscalItems}
          onToggleFiscalDisplay={this.toggleFiscalDisplay}
        />

        <div className="row clearfix">
          <h2>Vælg fremtidige afhentningsbibliotek</h2>
          <p>Bemærk, dette ændrer ikke eksisterende lån.</p>
          <LibraryAffiliatesDropDown onChangeCallback={(library) => {
            ProfileActions.savePickupAgencyToMobilSoegProfile(library.id);
          }} pickupAgency={defaultPickupAgency} />
        </div>

        <DeleteLikesButton />
      </div>
    );
  }
}

export default Profile;
