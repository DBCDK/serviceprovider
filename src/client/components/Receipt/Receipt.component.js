'use strict';
/**
 * @file
 * Currently the main entrypoint served on /receipt.
 * Provides the order receipt for the enduser.
 */
import React from 'react';

import ReceiptActions from './Receipt.action.js';
import ReceiptStore from './Receipt.store.js';

const Receipt = React.createClass({

  displayName: 'Receipt',

  propTypes: {
    receipt: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      orderPlaced: false,
      headline: 'Bestiller',
      libraryInfo: ''
    };
  },

  componentDidMount() {
    ReceiptStore.listen(this.setOrderPlaced);
    ReceiptActions({agencyId: this.props.receipt.pickupAgency, pids: this.props.receipt.q});
  },

  setOrderPlaced(store) {
    if (store[this.props.receipt.q]) {
      this.setState({
        orderPlaced: true,
        headline: 'Vi har modtaget din bestilling på:',
        libraryInfo: 'Du vil få besked fra ' + (this.props.receipt.pickupAgencyTitle || this.props.receipt.pickupAgency) + ', når materialet er klar til afhentning.'
      });
    }
    else {
      this.setState({
        orderPlaced: false,
        headline: 'Bestilling af følgende materiale mislykkedes:',
        libraryInfo: ''
      });
    }
  },

  render() {
    const title = this.props.receipt.work.title;
    const creator = this.props.receipt.work.creator;
    const ids = [this.props.receipt.q];

    let orderInfo = title;

    if (creator !== '') {
      orderInfo = creator + ': ' + title;
    }

    const backLink = <a className="back-button button" href={'/work?id=' + ids[0]}> Afslut </a>;

    return (<div className='receipt--container row'>
        <div className='receipt'>
          <div className="receipt--info">
            <div className="receipt--headline">{this.state.headline}</div>
            <div className="receipt--bibliographic">{orderInfo}</div>
            <div className="receipt--library">{this.state.libraryInfo}</div>
            <div className="receipt--back-link"> {backLink} </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Receipt;
