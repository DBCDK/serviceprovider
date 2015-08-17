'use strict';

/**
 * @file
 * The ProfileAttribute component show user attributes and allows editing.
 */

import React from 'react';
import ProfileActions from '../../actions/Profile.action.js';

const ProfileAttribute = React.createClass({

  displayName: function() {
    return 'ReactProfileAttribute';
  },

  propTypes: function () {
    return {
      name: React.PropTypes.string,
      value: React.PropTypes.string,
      editable: React.PropTypes.bool
    };
  },

  handleTextChange: function (e) {
    let text = e.target.value;
    ProfileActions.updateAttribute(text);
  },

  render: function () {
    let value = this.props.value;
    let isEditable = this.props.editable;
    let component = <h3 className={'profile--displayname'}>{value}</h3>;
    if (isEditable === true) {
      component = (
        <input
          className={'profile--displayname'}
          defaultValue={value}
          onChange={this.handleTextChange}
          type='text'
          >
        </input>
      );
    }
    return (<div>{component}</div>);
  }
});

export default ProfileAttribute;
