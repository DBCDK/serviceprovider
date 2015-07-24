/**
 * Created by matias on 22-07-15.
 */

'use strict';
/**
 * @file
 * Comment
 */

import React from 'react';
import ProfileActions from '../../actions/Profile.action.js';

const ProfileAttribute = React.createClass({

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
      component = <input type='text' className={'profile--displayname'} defaultValue={value}
                         onChange={this.handleTextChange}></input>;
    }
    return (<div>{component}</div>);
  }
});

export default ProfileAttribute;
