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
    actions: React.PropTypes.object.isRequired,
    addLibraryLabel: React.PropTypes.string.isRequired,
    editable: React.PropTypes.bool.isRequired,
    libraries: React.PropTypes.array.isRequired,
    pickupLocationText: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string.isRequired,
    setAsText: React.PropTypes.string.isRequired,
    store: React.PropTypes.object.isRequired
  },

  render: function () {
    let libraries = [];
    this.props.libraries.forEach((val, key) => {
      libraries.push(
        <ProfileLibrary
          actions={this.props.actions}
          editable={this.props.editable}
          key={key}
          library={val}
          pickupLocationText={this.props.pickupLocationText}
          placeholder={this.props.placeholder}
          store={this.props.store}
          setAsText={this.props.setAsText}
          />
      );
    });

    return (
      <div className={'profile--libraries'}>
        <hr />
        {libraries}
        <div className='row'>
          <a className="button expand" href="/librarysuggest">{this.props.addLibraryLabel}</a>
        </div>
      </div>
    );
  }
});

export default ProfileLibraries;
