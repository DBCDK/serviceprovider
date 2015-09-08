'use strict';

/**
 * @file
 * ProfileLibraries displays a users favorite libraries.
 */

import React from 'react';
import Reflux from 'reflux';

import ProfileActions from '../../actions/Profile.action.js';

import LibraryStore from '../../stores/Library.store.js';
import LibraryActions from '../../actions/Library.action.js';

const ProfileLibrary = React.createClass({
  displayName: 'ProfileLibrary',

  propTypes: {
    editable: React.PropTypes.bool.isRequired,
    library: React.PropTypes.object.isRequired,
    placeholder: React.PropTypes.string,
    profileStore: React.PropTypes.object.isRequired
  },

  mixins: [
    Reflux.connect(LibraryStore, 'library')
  ],

  componentDidMount() {
    LibraryActions.libraryIdUpdated.trigger(this.props.library.agencyID);
  },

  handleTextChange(e) {
    ProfileActions.updateBorrowerIDForLibrary(this.props.library.agencyID, e.target.value);
  },

  render: function () {
    let libContent = !this.props.editable ? (
      <a href={'/library?id=' + this.state.library.data.branchId}>
        <div className='row'>
          <h3>{this.state.library.data.branchNameDan}</h3>
          <h5>{this.state.library.data.agencyName}</h5>
          <p>{this.props.placeholder || 'Låner ID:'} {this.props.library.borrowerID}</p>
        </div>
      </a>) : (
      <div className='row'>
        <h3>{this.state.library.data.branchNameDan}</h3>
        <h5>{this.state.library.data.agencyName}</h5>
        <input
          defaultValue={this.props.library.borrowerID}
          onChange={this.handleTextChange}
          placeholder={this.props.placeholder || 'Låner ID'}
          />
      </div>
    );

    return (
      <div className={'profile--library'}>
        {libContent}
      </div>
    );
  }
});

export default ProfileLibrary;
