'use strict';
/**
 * @file
 * Component for creating a tab button
 */

import React from 'react';

const TabsButton = React.createClass({
  render() {
    let classes = ['button', 'secondary'];
    if (this.props.active) {
      classes.push('active');
    }
    return (
      <li>
        <a onClick={this.props.update.bind(null, this.props.index)} href="#" className={classes.join(' ')} >
          {this.props.label}
        </a>
      </li>
    );

  }
});

export default TabsButton;
