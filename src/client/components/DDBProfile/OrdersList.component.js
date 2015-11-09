'use strict';

/**
 * @file
 * DDBProfile component displays the user attributes and allows editing.
 */

import React, {PropTypes} from 'react';
// import Reflux from 'reflux';
import {curry} from 'lodash';

class OrdersList extends React.Component {


  constructor() {
    super();
  }

  render() {

    const deleteOrder = this.props.onDelete ? curry(this.props.onDelete, 3) : function() {};

    let orders = (<p>ingen reserveringer</p>);
    if (this.props.orders) {
      orders = this.props.orders.map(function(order) {

        const ready = (order.status === 'Available for pickup');

        let actionField = <button className='tiny' onClick={deleteOrder(order.orderId, order.orderType)}>slet</button>;
        if (order.markedForDeletion) {
          actionField = <button className='tiny' onClick={deleteOrder(order.orderId, order.orderType)}>marked</button>;

          if (order.isDeleteSuccesful) {
            actionField = <button className='tiny' onClick={deleteOrder(order.orderId, order.orderType)}>lån fjernet</button>;
          }
          else {
            actionField = <button className='tiny' onClick={deleteOrder(order.orderId, order.orderType)}>kunne ikke fjerne lån</button>;
          }
        }

        return (
          <li className='row' key={order.orderId}>
            <span className='small-12 column'>{order.title}</span>
            <span className='small-10 column'>{ready ? 'Klar til afhentning' : '[bestilt dato X]'}</span>
            <span className='small-2 column'>{ready ? '' : actionField}</span>
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
  onDelete: PropTypes.func,
  orders: PropTypes.array
};

OrdersList.displayName = 'OrdersList.component';

export default OrdersList;
