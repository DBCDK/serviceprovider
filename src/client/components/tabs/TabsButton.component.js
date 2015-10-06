'use strict';
/**
 * @file
 * Component for creating a tab button
 */

import React from 'react';

const TabsButton = React.createClass({
  displayName: 'TabsButton',

  propTypes: {
    active: React.PropTypes.bool,
    index: React.PropTypes.number,
    label: React.PropTypes.string,
    update: React.PropTypes.func,
    'update.bind': React.PropTypes.func
  },

  update() {
    this.props.update(this.props.index);
  },

  render() {
    let classes = ['button', 'secondary'];
    if (this.props.active) {
      classes.push('active');
    }
    return (
      <li>
        <a className={classes.join(' ')} href="#" onClick={this.update} >
          {this.props.label}
        </a>
      </li>
    );

  }
});

export default TabsButton;
