'use strict';

/**
 * @file
 * ToggleButton component displays toggle buttons.
 */

import React, {PropTypes} from 'react';

class PickUpAgencySelector extends React.Component {

  constructor() {
    super();
    this.changePickupAgency = this.changePickupAgency.bind(this);
  }

  changePickupAgency(e) {
    const newAgencyId = e.target.value;
    this.props.onSelect(this.props.order.orderId, newAgencyId);
  }

  render() {

    const branchNamesMap = this.props.branchNamesMap;

    const branchIds = Object.keys(branchNamesMap);

    const isConfirmedSuccess = this.props.order.isChangePickupAgencyConfirmed && this.props.order.isChangePickupAgencySuccesful;

    const isConfirmedFailure = this.props.order.isChangePickupAgencyConfirmed && !this.props.order.isChangePickupAgencySuccesful;

    const isSelectorLoading = this.props.order.markedForChangePickupAgency && !isConfirmedFailure && !isConfirmedSuccess;


    let selector = (
        <span className='selector'>
          <select onChange={this.changePickupAgency} value={this.props.order.pickUpAgencyId}>
            {branchIds.map((id) => {
              return <option key={id} value={id}>{branchNamesMap[id]}</option>;
            })}
          </select>
        </span>
    );

    if (isSelectorLoading) {
      selector = (
          <span className='selector'>
            <select className='loading' disabled='true'>
              <option></option>
            </select>
          </span>
      );
    }

    return selector;
  }
}

PickUpAgencySelector.propTypes = {
  branchNamesMap: PropTypes.object,
  onSelect: PropTypes.func,
  order: PropTypes.object
};

PickUpAgencySelector.displayName = 'PickUpAgencySelector.component';

export default PickUpAgencySelector;
