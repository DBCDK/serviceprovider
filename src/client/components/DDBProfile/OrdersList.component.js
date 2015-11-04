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

    let orders = (<p>ingen reserveringer</p>);
    if (this.props.orders) {
      orders = this.props.orders.map(function(order) {
        return (
          <li className='row' key={order.orderId}>
            <span className='small-12 column'>{order.title}</span>
            <span className='small-12 column'>{(order.status === 'Available for pickup') ? 'Klar til afhentning' : '[bestilt dato X]'}</span>
          </li>
        );
      });
    }

    const ordersList = (<ul>
      {orders}
    </ul>);

    const loadingWheel = (<p>Loading...</p>);

    const content = (
        <div>
          <h2>Reserveringer</h2>
          {(this.props.orders === null) ? loadingWheel : ordersList}
        </div>
    );

    return content;
  }
}

OrdersList.propTypes = {
  orders: PropTypes.array
};

OrdersList.displayName = 'OrdersList.component';

export default OrdersList;
