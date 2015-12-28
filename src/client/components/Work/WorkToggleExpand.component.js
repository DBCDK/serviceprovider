'use strict';

/**
 * @file
 * Generic toggle box
 */

import React, {PropTypes} from 'react';

export default class ToggleExpand extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      detailsExpanded: false
    };
  }

  onClick(event) {
    event.preventDefault();
    this.setState({detailsExpanded: !this.state.detailsExpanded});
  }

  render() {
    const stateClass = this.state.detailsExpanded && 'is-visible' || 'is-not-visible';
    return (
      <div className={`toggle--wrapper ${stateClass}`} >
        <div className='toggle--button' onClick={event => this.onClick(event)} >
          {this.props.label}
        </div>
        <div className='toggle--content' >
          {this.props.children}
        </div>
      </div>
    );
  }
}

ToggleExpand.displayName = 'ToggleExpand';
ToggleExpand.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node
};
