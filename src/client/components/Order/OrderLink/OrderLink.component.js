'use strict';

/**
 * @file
 * Renders an order link based on the given pids and an agency id (library).
 */
import React from 'react';
import OrderLinkStore from './OrderLink.store.js';
import OrderLinkActions from './OrderLink.action.js';

const OrderLink = React.createClass({

  displayName: 'OrderLink',
  propTypes: {
    agencyId: React.PropTypes.string.isRequired,
    borrowerId: React.PropTypes.string.isRequired,
    coverImagePids: React.PropTypes.array.isRequired,
    key: React.PropTypes.number,
    linkText: React.PropTypes.string.isRequired,
    orderUrl: React.PropTypes.string.isRequired,
    pickupAgencyId: React.PropTypes.string.isRequired,
    pids: React.PropTypes.array.isRequired,
    type: React.PropTypes.string.isRequired,
    userIsLoggedIn: React.PropTypes.bool.isRequired,
    workTypeOrder: React.PropTypes.bool.isRequired
  },

  getInitialState() {
    return {
      canOrder: false,
      orderUrl: this.props.orderUrl + '&pickupAgency=' + this.props.pickupAgencyId + '&borrowerId=' + this.props.borrowerId + '&coverImageIds=' + this.props.coverImagePids
    };
  },

  componentDidMount() {
    if (this.props.agencyId === '') {
      this.setOrderAlwaysPossible();
    }
    else if (this.props.userIsLoggedIn === true) {
      OrderLinkStore.listen(this.setOrderPossible);
      if (this.props.pids) {
        OrderLinkActions({agencyId: this.props.agencyId, pids: this.props.pids});
      }
    }
  },

  setOrderAlwaysPossible() {
    this.setState({
      canOrder: true
    });
  },

  setOrderPossible(store) {
    if (store[this.props.pids.toString()] === 'true') {
      this.setState({
        canOrder: true
      });
    }
  },

  render() {
    const required = ['agencyId', 'borrowerId', 'coverImagePids', 'linkText', 'orderUrl', 'pickupAgencyId', 'pids', 'type', 'userIsLoggedIn', 'workTypeOrder'];
    for (let i in required) {
      if (!this.props.hasOwnProperty(required[i])) {
        return <div className='no-order-button' ></div>;
      }
    }
    const no_order = 'Gå til desktopversion for at bestille ' + this.props.type;
    if (this.props.workTypeOrder === false) {
      return (
        <div className="no-mobile-order" data-canorder={this.state.canOrder} key={this.props.key} >{no_order}</div>
      );
    }
    if (this.props.userIsLoggedIn === true && this.state.canOrder === false) {
      return (
        <div className="no-mobile-order" data-canorder={this.state.canOrder} key={this.props.key} >{no_order}</div>
      );
    }
    return (
      <a
        className={'can-order-' + this.state.canOrder + ' order-button button'}
        data-canorder={this.state.canOrder}
        data-identifiers={this.props.pids}
        href={this.state.orderUrl}
        key={this.props.key} >
        {this.props.linkText}
      </a>
    );
  }
});

export default OrderLink;
