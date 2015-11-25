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
      headline: '',
      libraryInfo: '',
      orderInfo: ''
    };
  },

  componentDidMount() {
    ReceiptStore.listen(this.setOrderPlaced);
    ReceiptActions({agencyId: this.props.receipt.pickupAgency, pids: this.props.receipt.ids, userId: this.props.receipt.borrowerId});
  },

  setOrderPlaced(store) {
    const title = this.props.receipt.title;
    const creator = this.props.receipt.creator;
    const type = this.props.receipt.type;
    const ids = this.props.receipt.ids.split(',');

    let orderInfo = title + ' (' + type + ')';

    if (creator !== '') {
      orderInfo = creator + ': ' + title + ' (' + type + ')';
    }

    const backLink = 'work?id=' + ids[0];

    if (store[this.props.receipt.ids.toString()] === true) {
      this.setState({
        orderPlaced: true,
        headline: 'Vi har modtaget din bestilling på:',
        orderInfo: orderInfo,
        libraryInfo: 'Du vil få besked fra dit bibliotek (' + this.props.receipt.pickupAgency + '), når materialet er klar til afhentning.',
        backLink: <a className="back-button button" href={backLink}>Afslut</a>
      });
    }
    else {
      this.setState({
        orderPlaced: false,
        headline: 'Bestilling af følgende materiale mislykkedes:',
        orderInfo: orderInfo,
        libraryInfo: '',
        backLink: <a className="back-button button" href={backLink}>Gå tilbage</a>
      });
    }
  },

  render() {
    return (<div className='receipt--container'>
        <div className='receipt small-12 medium-6 large-4'>
          <div className="receipt--info">
            <div className="receipt--headline">{this.state.headline}</div>
            <div className="receipt--bibliographic">{this.state.orderInfo}</div>
            <div className="receipt--library">{this.state.libraryInfo}</div>
            <div className="receipt--back-link">{this.state.backLink}</div>
          </div>
        </div>
      </div>
    );
  }
});

export default Receipt;
