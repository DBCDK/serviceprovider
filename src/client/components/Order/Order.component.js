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
    const type = this.props.order.type;
    const creator = this.props.order.creator;
    const pickupAgency = this.props.order.pickupAgency;
    const ids = this.props.order.ids;
    const coverImage = this.props.coverImage;

    const workId = ids.replace(/,.*/, '');

    const cancelLink = '/work?id=' + workId;

    let cancelOrder = <a className={'cancel-order-button button'} href={cancelLink}>Annuller</a>;

    let orderInfo = title + ' (' + type + ')';

    if (creator !== '') {
      orderInfo = creator + ': ' + title + ' (' + type + ')';
    }

    const orderLink = '/work/receipt?ids=' + ids + '&pickupAgency=' + this.state.pickupAgency.id + '&title='
      + encodeURIComponent(title) + '&creator=' + encodeURIComponent(creator) + '&type=' + encodeURIComponent(type);

    let placeOrder = <a className={'place-order-button button'} href={orderLink}>Ok</a>;

    let ordering = (<div className="order--info">
      <div className="order--headline">Du er i gang med at bestille:</div>
      <div className="order--bibliographic">{orderInfo}</div>
      <div className="order--library">Til afhentning på dit bibliotek: <LibraryAffiliatesDropDown pickupAgency={pickupAgency} /></div>
    </div>);

    return (<div className='order--container row'>
        <div className='image'>
          {coverImage}
        </div>
        <div className='order'>
          {ordering}
        </div>
        {cancelOrder}
        {placeOrder}
      </div>
    );
  }
}

Order.displayName = 'Order.component';
Order.propTypes = {
  coverImage: React.PropTypes.object,
  order: React.PropTypes.object.isRequired
};

export default Order;
