'use strict';

/**
 * @file
 * FiscalStatus component displays the user's fined items.
 */

import React, {PropTypes} from 'react';


class FiscalStatus extends React.Component {

  constructor() {
    super();
  }

  render() {

    let items;

    if (this.props.items) {
      items = this.props.items.map(function(item) {

        return (
          <li className='row' key={item.title}>
            <span className='small-12 column'>{item.title}</span>
            <span className='small-10 column'>Afleveret for sent</span>
            <span className='small-2 column'>{item.amount + ' ' + item.currency}</span>
          </li>
        );
      });
    }

    const itemsList = (<ul>
      {items}
    </ul>);

    // show this if not results have been returned yet
    const loadingWheel = (<p>Loading...</p>);

    const noItemsMessage = (<p>Du har ingen bøder</p>);

    let listContent = loadingWheel;
    if (Array.isArray(this.props.items) && this.props.items.length === 0) {
      listContent = noItemsMessage;
    }
    else if (this.props.items !== null) {
      listContent = itemsList;
    }


    const content = (
        <div>
          <h2>Mellemhavende</h2>
          {listContent}
        </div>
    );

    const emptyComponent = (<span/>);

    const stuffToBeRendered = Array.isArray(items) && (items.length > 0) ? content : emptyComponent;

    return stuffToBeRendered;
  }
}

FiscalStatus.propTypes = {
  items: PropTypes.array
};

FiscalStatus.displayName = 'FiscalStatus.component';

export default FiscalStatus;
