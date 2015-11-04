'use strict';

/**
 * @file
 * The ProfileAttribute component show user attributes and allows editing.
 */

import React from 'react';
import ProfileActions from '../../actions/Profile.action.js';

const ProfileAttribute = React.createClass({
  displayName: 'ReactProfileAttribute',

  propTypes: {
    editable: React.PropTypes.bool,
    name: React.PropTypes.string,
    value: React.PropTypes.string
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
        <div>
          <label>{this.props.name}</label>
          <input
            className={'profile--displayname'}
            defaultValue={value}
            onChange={this.handleTextChange}
            type='text'
            >
          </input>
        </div>
      );
    }
    return (<div>{component}</div>);
  }
});

export default ProfileAttribute;
