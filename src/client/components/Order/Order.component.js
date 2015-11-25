'use strict';
/**
 * @file
 * Currently the main entrypoint served on /order.
 * Provides the order form for the enduser.
 */
import React from 'react';

const Order = React.createClass({

  displayName: 'Order.component',

  propTypes: {
    coverImage: React.PropTypes.object,
    order: React.PropTypes.object.isRequired
  },

  render() {
    const title = this.props.order.title;
    const type = this.props.order.type;
    const creator = this.props.order.creator;
    const pickupAgency = this.props.order.pickupAgency;
    const borrowerId = this.props.order.borrowerId;
    const ids = this.props.order.ids;
    const coverImage = this.props.coverImage;

    const workId = ids.replace(/,.*/, '');

    const cancelLink = '/work?id=' + workId;

    let cancelOrder = <a className={'cancel-order-button button'} href={cancelLink}>Annuller</a>;

    let orderInfo = title + ' (' + type + ')';

    if (creator !== '') {
      orderInfo = creator + ': ' + title + ' (' + type + ')';
    }

    const libraryInfo = 'Til afhentning på dit bibliotek (' + pickupAgency + ')';

    const orderLink = '/work/receipt?ids=' + ids + '&pickupAgency=' + pickupAgency + '&borrowerId=' + borrowerId + '&title='
      + encodeURIComponent(title) + '&creator=' + encodeURIComponent(creator) + '&type=' + encodeURIComponent(type);

    let placeOrder = <a className={'place-order-button button'} href={orderLink}>Ok</a>;

    let ordering = (<div className="order--info">
        <div className="order--headline">Du er i gang med at bestille:</div>
        <div className="order--bibliographic">{orderInfo}</div>
        <div className="order--library">{libraryInfo}</div>
      </div>);

    if (pickupAgency === '' || borrowerId === '') {
      placeOrder = '';
      cancelOrder = '';
      let orderHeadline = 'Du skal vælge et favoritbibliotek for at kunne bestille';
      let buttonText = 'bibliotek';
      if (borrowerId === '' && pickupAgency !== '') {
        orderHeadline = 'Du skal gemme dit låner id i din profil';
        buttonText = 'låner id';
      }
      ordering = (<div className="order--info">
        <div className="order--headline">{orderHeadline}</div>
        <div className="order--bibliographic">{orderInfo}</div>
        <a className={'library-button button'} href='/profile'>Tilføj {buttonText}</a>
      </div>);
    }

    return (<div className='order--container'>
        <div className='image small-4 medium-6 large-4'>
          {coverImage}
        </div>
        <div className='order small-8 medium-6 large-4'>
          {ordering}
        </div>
        {cancelOrder}
        {placeOrder}
      </div>
    );
  }
});

export default Order;
