'use strict';

/**
 * @file
 * ProfileLibraries displays a users favorite libraries.
 */

import React from 'react';

import ProfileLibrary from './ProfileLibrary.component.js';

const ProfileLibraries = React.createClass({
  displayName: 'ProfileLibraries',

  propTypes: {
    editable: React.PropTypes.bool.isRequired,
    libraries: React.PropTypes.array.isRequired,
    profileStore: React.PropTypes.object.isRequired
  },

  render: function () {
    let libraries = [];
    this.props.libraries.forEach((val, key) => {
      libraries.push(<ProfileLibrary editable={this.props.editable} key={key} library={val} profileStore={this.props.profileStore} />);
    });

    return (
      <div className={'profile--libraries'}>
        <hr />
        {libraries[0]}
      </div>
    );
  }
});

export default ProfileLibraries;
