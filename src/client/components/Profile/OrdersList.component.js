'use strict';

/**
 * @file
 * OrderList component displays a list of orders made by the user.
 */

import React, {PropTypes} from 'react';
// import Reflux from 'reflux';
import {curry, sortByAll, isEmpty} from 'lodash';
import PickUpAgencySelector from './PickUpAgencySelector.component';
import Loader from '../Loader.component.js';

class OrdersList extends React.Component {

  constructor() {
    super();
  }

  render() {
    const deleteOrder = this.props.onDelete ? curry(this.props.onDelete, 3) : function() {};

    const onSelect = this.props.onSelectPickupAgency;

    const branchNamesMap = this.props.branchNamesMap;

    let orderListContent = (<p>Ingen reserveringer</p>);
    if (!isEmpty(this.props.orders)) {

      let sortedOrders = sortByAll(this.props.orders, (o) => {
        return o.status !== 'Available for pickup';
      }, 'title');

      orderListContent = sortedOrders.map(function(order) {
        const ready = (order.status === 'Available for pickup');

        let actionField = <button className='tiny' onClick={deleteOrder(order.orderId, order.orderType)}>Slet</button>;
        if (order.markedForDeletion) {
          actionField = <button className='tiny'>Sletter, vent venligst</button>;

          if (order.isDeleteConfirmed && !order.isDeleteSuccesful) {
            actionField = <button className='tiny'>Kunne ikke slette reservering</button>;
          }
          else if (order.isDeleteConfirmed && order.isDeleteSuccesful) {
            actionField = <button className='tiny'>Reservering slettet</button>;
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
          <li key={order.orderId}>
            <span className='small-6 column'>{order.title}</span>
            <span className={'small-6 column ' + pickupClass}>{ready ? 'Klar til afhentning på ' + order.pickUpAgency : queue}</span>
            <span className='small-6 column'>{ready ? '' : dropdown}</span>
            <span className='small-6 column'>{ready ? pickupDate : actionField}</span>
          </li>
        );
      });
    }


    const ordersList = (<ul className='order-list'>
      {orderListContent}
    </ul>);
    const pending = true;
    const loadingWheel = <Loader pending={pending} />;


    const content = (
        <div className='row'>
          {(this.props.orders === null) ? loadingWheel : ordersList}
        </div>
    );

    return content;
  }

}

OrdersList.propTypes = {
  branchNamesMap: PropTypes.object,
  onDelete: PropTypes.func,
  onSelectPickupAgency: PropTypes.func,
  orders: PropTypes.array
};

OrdersList.displayName = 'OrdersList.component';

export default OrdersList;
