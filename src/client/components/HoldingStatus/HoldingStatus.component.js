'use strict';

import React, {PropTypes} from 'react';

import HoldingStatusStore from './HoldingStatus.store.js';
import HoldingStatusActions from './HoldingStatus.action.js';

class HoldingStatusComponent extends React.Component {

  constructor() {
    super();

    this.state = {
      holdingStatus: HoldingStatusStore.getInitialState()
    };

    this.unsubscribe = [
      HoldingStatusStore.listen(() => this.setState({holdingStatus: HoldingStatusStore.store[this.props.identifier]}))
    ];
  }

  componentDidMount() {
    HoldingStatusActions.getHoldingStatusRequest(this.props.identifier);
  }

  componentWillUnmount() {
    this.unsubscribe.forEach(
      (unsubscriber) => {
        unsubscriber();
      }
    );
  }

  render() {
    let result = '';
    let classes = 'status ';
    if (this.state.holdingStatus && this.props.accessType === 'physical') {
      if (this.state.holdingStatus.now === true) {
        result = 'Hjemme';
        classes += 'available-now';
      }
      else if (this.state.holdingStatus.available === true) {
        const date = new Date(this.state.holdingStatus.expectedDelievery);
        const pickupDate = (this.state.holdingStatus.expectedDelievery ? date.getDate() + '/' + (date.getMonth() + 1) + '-' + date.getFullYear() : '');
        result = 'Hjemme den ' + pickupDate;
        classes += 'available-later';
      }
      else if (this.state.holdingStatus.available === false || this.state.holdingStatus === 'item_not_found') {
        result = 'Udlånes ikke';
        classes += 'not-available';
      }
    }
    return (
      <div className={'work-container--work--editions--holding-status'}>
        <div className={classes}>{result}</div>
      </div>
    );
  }
}

HoldingStatusComponent.displayName = 'HoldingStatus.component';
HoldingStatusComponent.propTypes = {
  accessType: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired
};

export default HoldingStatusComponent;
