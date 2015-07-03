'use strict';
import React from 'react';
import newrelic from 'newrelic';

var SearchTabs = React.createClass({
  propTypes: {
    buttons: React.PropTypes.array.isRequired,
    selected: React.PropTypes.string
  },

  update(button, event) {
    event.preventDefault();
    this.props.update(button);
    newrelic.addPageAction('SearchTabClicked', {data: button});
  },

  render() {
    const selected = this.props.selected || this.props.buttons[0];
    const buttons = this.props.buttons.map(button => {
      let classes = ['button', 'secondary'];
      if (button === selected) {
        classes.push('active');
      }
      return (
        <li key={button} >
          <a onClick={this.update.bind(null, button)} href="#" className={classes.join(' ')} >
            {button}
          </a>
        </li>
      );
    });

    return (
      <ul className="button-group even-2" >
        {buttons}
      </ul>
    );
  }
});

export default SearchTabs;
