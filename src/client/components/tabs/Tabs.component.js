'use strict';
/**
 * @file
 * Component for creating tabs
 */


import React from 'react';
import TabsButton from './TabsButton.component.js';

var Tabs = React.createClass({
  displayName: 'TabsContainer',
  propTypes: {
    defaultSelected: React.PropTypes.number,
    tabs: React.PropTypes.array.isRequired
  },

  getInitialState() {
    return {
      selected: this.props.defaultSelected
    };
  },

  update(selected) {
    this.setState({selected});
  },

  render() {
    const activeComponent = this.props.tabs[this.state.selected].component;
    const buttons = this.props.tabs.map((button, key)=> {
      return (<TabsButton active={key === this.state.selected} index={key} key={key} label={button.label} update={this.update} />);
    });
    return (
      <div tabs >
        <ul className="button-group even-2" >
          {buttons}
        </ul>
        {activeComponent}
      </div>
    );
  }
});

export default Tabs;
