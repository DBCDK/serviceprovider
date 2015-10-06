'use strict';
/**
 * @file
 * Component for creating tabs
 */

import React from 'react';
import TabsButton from './TabsButton.component.js';

class Tabs extends React.Component {
  constructor() {
    super();

    this.state = {selected: null};
  }

  update(selected) {
    this.setState({selected});
  }

  getRenderedTabsContent(selected) {
    const tabs = this.props.tabs || [];
    let rendered = [];
    tabs.forEach((value, key) => {
      const hiddenClass = key !== selected ? 'hide' : '';
      rendered.push(<div className={hiddenClass} key={key} >{value.component}</div>);
    });

    return rendered;
  }

  render() {
    const selected = this.state.selected !== null ? this.state.selected : this.props.defaultSelected;
    const tabsContent = this.getRenderedTabsContent(selected);
    const buttons = this.props.tabs.map((button, key) => {
      return (
        <TabsButton active={key === selected} index={key} key={key} label={button.label} update={this.update.bind(this)} />);
    });

    return (
      <div>
        <ul className="button-group even-2" >
          {buttons}
        </ul>
        {tabsContent}
      </div>
    );
  }
}

Tabs.displayName = 'Tabs';
Tabs.propTypes = {
  defaultSelected: React.PropTypes.number,
  tabs: React.PropTypes.array.isRequired
};

export default Tabs;
