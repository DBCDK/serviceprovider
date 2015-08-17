'use strict';
/**
 * @file
 * Currently the main entrypoint served on /order.
 * Provides the order form for the enduser.
 */
import React from 'react';

// import reflux actions and stores
// import orderAction from '../../actions/Order.action.js';
// import orderStore from '../../stores/Order.store.js';

const Order = React.createClass({

  displayName: function() {
    return 'ReactOrder';
  },

  propTypes: {
    ids: React.PropTypes.array,
    title: React.PropTypes.string,
    type: React.PropTypes.string
  },

  getInitialState() {
    return {
    };
  },

  componentDidMount: function () {
  },

  render() {
    const title = this.props.order.title;
    const type = this.props.order.type;
    return (<div className='order-container'>
        <div className='order small-12 medium-6 large-4'>
          <div className="order-headline">Hvis vi havde implementeret bestilling, ville du nu kunne bestille:</div>
          <div className="order-info">{title} ({type})</div>
        </div>
      </div>
    );
  }
});

export default Order;
