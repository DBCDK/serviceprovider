'use strict';
/**
 * @file
 * Currently the main entrypoint served on /order.
 * Provides the order form for the enduser.
 */
import React from 'react';

import LibraryAffiliatesDropDown from '../LibraryAffiliatesDropDown/LibraryAffiliatesDropDown.component';
import LibraryAffiliatesDropDownActions from '../LibraryAffiliatesDropDown/LibraryAffiliatesDropDown.action.js';

class Order extends React.Component {
  constructor(props) {
    super();

    this.state = {
      pickupAgency: {id: props.order.pickupAgency, name: props.order.pickupAgency}
    };

    this.unsub = LibraryAffiliatesDropDownActions.libraryAffiliateSelected.listen((val) => {
      this.setState({pickupAgency: val});
    });
  }

  componentWillUnmount() {
    this.unsub();
  }

  render() {
    const title = this.props.order.title;
    const creator = this.props.order.creator;
    const pickupAgency = this.props.pickupAgency;
    const coverImage = this.props.coverImage;
    const workId = this.props.orderId;

    let cancelOrder = <a className={'cancel-order-button button'} href={'/work?id=' + workId}>Annuller</a>;
    let orderInfo = title;
    if (creator !== '') {
      orderInfo = creator + ': ' + title;
    }

    let placeOrder = <a className={'place-order-button button'} href={'/work/receipt/' + workId}>Ok</a>;

    let ordering = (<div className="order--info">
      <div className="order--headline">Du er i gang med at bestille:</div>
      <div className="order--bibliographic">{orderInfo}</div>
      <div className="order--library">Til afhentning på dit bibliotek: <LibraryAffiliatesDropDown pickupAgency={pickupAgency} /></div>
    </div>);

    return (<div className='order--container column small-24'>
        <div className='image column small-8 medium-6'>
          {coverImage}
        </div>
        <div className='order column small-24 medium-18'>
          {ordering}
          {cancelOrder}
          {placeOrder}
        </div>
      </div>
    );
  }
}

Order.displayName = 'Order.component';
Order.propTypes = {
  coverImage: React.PropTypes.object,
  order: React.PropTypes.object.isRequired,
  orderId: React.PropTypes.string.isRequired,
  pickupAgency: React.PropTypes.string.isRequired
};

export default Order;
