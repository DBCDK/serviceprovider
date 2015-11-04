'use strict';

/**
 * @file
 * DDBProfile component displays the user attributes and allows editing.
 */

import React, {PropTypes} from 'react';
// import Reflux from 'reflux';


class OrdersList extends React.Component {

  static displayName() {
    return 'OrdersList.component';
  }

  constructor() {
    super();
  }

  render() {

    let orders = (<p>no orders</p>);
    if (this.props.orders) {
      orders = this.props.orders.map(function(order) {
        return (
          <li key={order.orderId}>
            <p>{order.title}</p>
            <p>{(order.status === 'Available for pickup') ? 'Klar til afhentning' : '[bestilt dato X]'}</p>
          </li>
        );
      });
    }

    const ordersList = (<ul>
      {orders}
    </ul>);

    const loadingWheel = (<p>Loading...</p>);

    return (this.props.orders === null) ? loadingWheel : ordersList;
  }
}

OrdersList.propTypes = {
  orders: PropTypes.array
};

OrdersList.displayName = 'OrdersList.component';

export default OrdersList;
