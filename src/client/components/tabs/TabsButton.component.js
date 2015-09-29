'use strict';
/**
 * @file
 * Component for creating a tab button
 */

import React from 'react';

const TabsButton = React.createClass({
  displayName: 'TabButton',

  propTypes: {
    active() {
      return React.PropTypes.boolean;
    },
    index: React.PropTypes.number,
    label: React.PropTypes.string,
    update: React.PropTypes.func,
    'update.bind': React.PropTypes.func
  },

  render() {
    let classes = ['button', 'secondary'];
    if (this.props.active) {
      classes.push('active');
    }
    return (
      <li>
        <a className={classes.join(' ')} href="#" onClick={this.props.update.bind(null, this.props.index)} >
          {this.props.label}
        </a>
      </li>
    );

  }
});

export default TabsButton;
