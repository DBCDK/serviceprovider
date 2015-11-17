'use strict';

/**
 * @file
 * OrderList component displays a list of orders made by the user.
 */

import React, {PropTypes} from 'react';
// import Reflux from 'reflux';
import {curry, sortByAll} from 'lodash';
import ToggleButton from './ToggleButton.component';
import PickUpAgencySelector from './PickUpAgencySelector.component';

class OrdersList extends React.Component {

  constructor() {
    super();
  }

  render() {
    const deleteOrder = this.props.onDelete ? curry(this.props.onDelete, 3) : function() {};
    const toggleDisplay = this.props.onToggleOrderDisplay;

    const onSelect = this.props.onSelectPickupAgency;

    const branchNamesMap = this.props.branchNamesMap;

    let orderListContent = (<p>ingen reserveringer</p>);
    if (this.props.orders) {

      let sortedOrders = sortByAll(this.props.orders, (o) => {
        return o.status !== 'Available for pickup';
      }, 'title');

      orderListContent = sortedOrders.map(function(order) {
        const ready = (order.status === 'Available for pickup');

        let actionField = <button className='tiny' onClick={deleteOrder(order.orderId, order.orderType)}>slet</button>;
        if (order.markedForDeletion) {
          actionField = <button className='tiny' onClick={deleteOrder(order.orderId, order.orderType)}>marked</button>;

          if (order.isDeleteConfirmed && !order.isDeleteSuccesful) {
            actionField = <button className='tiny' onClick={deleteOrder(order.orderId, order.orderType)}>kunne ikke slette reservering</button>;
          }
          else if (order.isDeleteConfirmed && order.isDeleteSuccesful) {
            actionField = <button className='tiny' onClick={deleteOrder(order.orderId, order.orderType)}>reservering slettet</button>;
          }
        }

        const date = new Date(order.pickUpExpiryDate);
        const pickupDate = (order.pickUpExpiryDate ? 'Hentes senest ' + date.getDate() + '/' + (date.getMonth() + 1) + '-' + date.getFullYear() : '');

        const pickupClass = (ready) ? 'ready' : '';

        const queue = (order.queue !== null) ? 'Du er nr ' + order.queue + ' i køen': '-';

        const dropdown = (
            <PickUpAgencySelector
                branchNamesMap={branchNamesMap}
                onSelect={onSelect}
                order={order}
                />
        );


        return (
          <li className='row' key={order.orderId}>
            <span className='small-6 column'>{order.title}</span>
            <span className={'small-6 column ' + pickupClass}>{ready ? 'Klar til afhentning på ' + order.pickUpAgency : queue}</span>
            <span className='small-6 column'>{ready ? '' : dropdown}</span>
            <span className='small-6 column'>{ready ? pickupDate : actionField}</span>
          </li>
        );
      });
    }

    const listClass = (this.props.collapsed === true) ? 'order-list collapsed' : 'order-list';

    const ordersList = (<ul className={listClass} id='order-list'>
      {orderListContent}
    </ul>);

    const loadingWheel = (<p>Loading...</p>);

    let header = 'Reserveringer';
    let arrows = '';
    let toggleFunc = '';
    let headerClass = '';

    if (this.props.orders !== null) {
      arrows = <ToggleButton collapsed={this.props.collapsed} toggleDisplay={toggleDisplay} />;
      if (this.props.orders.length === 0) {
        header = 'Du har ingen reserveringer';
      }
      else if (this.props.orders.length === 1) {
        header = this.props.orders.length + ' reservering';
      }
      else {
        header = this.props.orders.length + ' reserveringer';
      }
      toggleFunc = toggleDisplay;
      headerClass = 'user-status-header toggle';
    }

    const sliderClass = (this.props.collapsed === true) ? 'slider slider-collapsed' : 'slider slider-not-collapsed';
    const content = (
        <div className='row'>
          <a id='order-scroll' name='order-scroll'></a>
          <h2 className={headerClass} onClick={toggleFunc}>{header}</h2>
          {arrows}
          {(this.props.orders === null) ? loadingWheel : <div className={sliderClass}>{ordersList}</div>}
        </div>
    );

    return content;
  }

}

OrdersList.propTypes = {
  branchNamesMap: PropTypes.object,
  collapsed: PropTypes.bool,
  onDelete: PropTypes.func,
  onSelectPickupAgency: PropTypes.func,
  onToggleOrderDisplay: PropTypes.func,
  orders: PropTypes.array
};

OrdersList.displayName = 'OrdersList.component';

export default OrdersList;
