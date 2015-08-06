'use strict';
/**
 * @file
 * Component for creating tabs
 */


import React from 'react';
import TabsButton from './TabsButton.component.js';

var Tabs = React.createClass({
  propTypes: {
    tabs: React.PropTypes.array.isRequired,
    defaultSelected: React.PropTypes.number
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
      return (<TabsButton key={key} label={button.label} index={key} active={key === this.state.selected} update={this.update} />);
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
