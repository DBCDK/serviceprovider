'use strict';

import React from 'react';

export default class OrderButtonPhysicalComponent extends React.Component {
  render() {
    if (!this.props.orderPolicy || this.props.orderPolicy && !this.props.orderPolicy.hasOwnProperty('canOrder')) {
      // if the prop is undefined, we are waiting for the order policy
      // if the prop has not property canOrder, we are also waiting for the order policy.
      return (<div className="pending-on-order-policy"></div>);
    }

    const no_order_types = {other: 'denne materiale type', periodica: 'periodikum', article: 'artikel'};
    const m = this.props.manifestation;

    if (Object.keys(no_order_types).indexOf(m.workType) > -1) {
      // if the worktype is found, let the user know that they can't order here.
      return (<div>Gå til desktopversionen for at bestille {no_order_types[m.workType]}.</div>);
    }

    let orderUrl = this.props.orderBaseUrl || '/work/order/';
    orderUrl += m.identifiers[0];

    return (
      <a className='order--order-button-container--order-button button small' href={orderUrl}>
        Bestil {m.type}
      </a>
    );
  }
}

OrderButtonPhysicalComponent.displayName = 'OrderButton.physical.component';
OrderButtonPhysicalComponent.propTypes = {
  manifestation: React.PropTypes.object.isRequired,
  orderBaseUrl: React.PropTypes.string,
  orderPolicy: React.PropTypes.object
};
