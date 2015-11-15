'use strict';

/**
 * @file
 * ToggleButton component displays toggle buttons.
 */

import React, {PropTypes} from 'react';

class ToggleButton extends React.Component {

  constructor() {
    super();
  }

  render() {
    const toggleClass = (this.props.collapsed === true) ? 'toggle-buttons collapsed' : 'toggle-buttons not-collapsed';

    return (
      <div className={toggleClass} onClick={this.props.toggleDisplay}>
        <div className='button-collapsed'></div>
        <div className='button-not-collapsed'></div>
      </div>
    );
  }

}

ToggleButton.propTypes = {
  collapsed: PropTypes.bool,
  toggleDisplay: PropTypes.func
};

ToggleButton.displayName = 'ToggleButton.component';

export default ToggleButton;
