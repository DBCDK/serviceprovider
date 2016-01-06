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
    let colour = '';
    if (this.state.holdingStatus && this.props.accessType === 'physical') {
      if (this.state.holdingStatus.now) {
        result = 'Hjemme';
        classes += 'available-now';
        colour = '#41C001'; // ALCOOL
      }
      else if (this.state.holdingStatus.available) {
        const date = new Date(this.state.holdingStatus.expectedDelievery);
        const pickupDate = (this.state.holdingStatus.expectedDelievery ? date.getDate() + '/' + (date.getMonth() + 1) + '-' + date.getFullYear() : '');
        result = 'Hjemme den ' + pickupDate;
        classes += 'available-later';
        colour = '#FB1'; // FBI
      }
      else if (!this.state.holdingStatus.available || this.state.holdingStatus === 'item_not_found') {
        result = 'Udlånes ikke';
        classes += 'not-available';
        colour = 'F00'; // FOO
      }
    }

    if (this.props.compact) {
      return (
        <span className={'holding-status holding-status--compact'}>
          <svg className={'holding-status-svg-cicle'} xmlns="http://www.w3.org/2000/svg" version="1.1">
            <circle cx="10" cy="10" r="5" stroke="#333" strokeWidth="1" fill={colour} />
          </svg>
        </span>
      );
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
  compact: PropTypes.bool,
  identifier: PropTypes.string.isRequired
};

export default HoldingStatusComponent;
