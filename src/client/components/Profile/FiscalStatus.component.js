'use strict';

/**
 * @file
 * FiscalStatus component displays the user's fined items.
 */

import React, {PropTypes} from 'react';
import {isEmpty} from 'lodash';

class FiscalStatus extends React.Component {

  constructor() {
    super();
  }

  render() {

    let items;

    if (this.props.items) {
      items = this.props.items.map(function(item) {

        return (
          <li key={item.title}>
            <span className='small-10 column'>{item.title}</span>
            <span className='small-9 column'>Afleveret for sent</span>
            <span className='small-5 column'>{item.amount + ' ' + item.currency}</span>
          </li>
        );
      });
    }


    // insert message if no items are present
    if (this.props.items === null) {
      items = (<p>Loading...</p>);
    }
    else if (isEmpty(this.props.items)) {
      items = (<p>Du har ingen mellemværende</p>);
    }

    let listContent = (
      <ul className='fiscal-list'>
        {items}
      </ul>
    );

    const content = (
        <div>
          {listContent}
        </div>
    );

    return content;
  }
}

FiscalStatus.propTypes = {
  collapsed: PropTypes.bool,
  items: PropTypes.array,
  onToggleFiscalDisplay: PropTypes.func
};

FiscalStatus.displayName = 'FiscalStatus.component';

export default FiscalStatus;
