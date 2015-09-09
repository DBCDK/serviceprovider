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
    addLibraryLabel: React.PropTypes.string,
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
        {libraries}
        <div className='row'>
          <a className="button expand" href="/librarysuggest">{this.props.addLibraryLabel || 'Tilføj bibliotek'}</a>
        </div>
      </div>
    );
  }
});

export default ProfileLibraries;
