'use strict';

import React from 'react';

export default class OrderButtonOnlineComponent extends React.Component {
  render() {
    const r = this.props.relation;

    if ((
      r.collection.indexOf('150015-erelic') === -1 &&
      r.collection.indexOf('150021-bibliotek') === -1 &&
      r.collection.indexOf('150021-fjern') === -1 &&
      r.collection.indexOf('150015-ereol') === -1) ||
      r.access === 'onsite'
    ) {
      return (<div className={'work-not-correct-relation'}></div>);
    }

    return (
      <div className='order--order-button-container--order-button'>
        <a className='order--order-button-container--order-button--order-button-link button' href={r.link} target="_blank">Åbn online udgave!</a>
      </div>
    );
  }
}

OrderButtonOnlineComponent.displayName = 'OrderButton.online.component';
OrderButtonOnlineComponent.propTypes = {
  relation: React.PropTypes.object.isRequired
};
