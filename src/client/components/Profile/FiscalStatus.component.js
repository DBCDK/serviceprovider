'use strict';

/**
 * @file
 * FiscalStatus component displays the user's fined items.
 */

import React, {PropTypes} from 'react';
import ToggleButton from '../ToggleButton.component';


class FiscalStatus extends React.Component {

  constructor() {
    super();
  }

  render() {

    let items;
    const toggleDisplay = this.props.onToggleFiscalDisplay;

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

    const listClass = (this.props.collapsed === true) ? 'fiscal-list collapsed' : 'fiscal-list';

    const itemsList = (<ul className={listClass} id='fiscal-list'>
      {items}
    </ul>);

    // show this if not results have been returned yet
    const loadingWheel = (<p>Loading...</p>);

    let header = 'Mellemværender';
    let arrows = '';
    let toggleFunc = toggleDisplay;
    let headerClass = 'user-status-header toggle';

    let listContent = loadingWheel;
    if (Array.isArray(this.props.items) && this.props.items.length === 0) {
      header = 'Du har ingen mellemværender';
      listContent = '';
      toggleFunc = '';
      headerClass = 'user-status-header';
    }
    else if (this.props.items !== null) {
      arrows = <ToggleButton collapsed={this.props.collapsed} toggleDisplay={toggleDisplay} />;
      if (this.props.items.length === 1) {
        header = this.props.items.length + ' mellemværende';
      }
      else {
        header = this.props.items.length + ' mellemværender';
      }
      listContent = itemsList;
    }

    const sliderClass = (this.props.collapsed === true) ? 'slider slider-collapsed' : 'slider slider-not-collapsed';
    const content = (
        <div className='row'>
          <a id='fiscal-scroll' name='fiscal-scroll'></a>
          <h2 className={headerClass} onClick={toggleFunc}>{header}</h2>
          {arrows}
          <div className={sliderClass}>{listContent}</div>
        </div>
    );

    const emptyComponent = (<span/>);

    const stuffToBeRendered = Array.isArray(items) && (items.length > 0) ? content : emptyComponent;

    return stuffToBeRendered;
  }
}

FiscalStatus.propTypes = {
  collapsed: PropTypes.bool,
  items: PropTypes.array,
  onToggleFiscalDisplay: PropTypes.func
};

FiscalStatus.displayName = 'FiscalStatus.component';

export default FiscalStatus;
