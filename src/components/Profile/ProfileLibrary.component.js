'use strict';

/**
 * @file
 * ProfileLibraries displays a users favorite libraries.
 */

import React from 'react';
import {find} from 'lodash';

import ProfileActions from '../../actions/Profile.action.js';

const ProfileLibrary = React.createClass({
  displayName: 'ProfileLibrary',

  propTypes: {
    editable: React.PropTypes.bool.isRequired,
    library: React.PropTypes.object.isRequired,
    placeholder: React.PropTypes.string,
    profileStore: React.PropTypes.object.isRequired,
    setAsDefaultText: React.PropTypes.string
  },

  componentDidMount() {
    ProfileActions.libraryIdUpdated.trigger(this.props.library.agencyID);
  },

  handleTextChange(e) {
    ProfileActions.updateBorrowerIDForLibrary(this.props.library.agencyID, e.target.value);
  },

  setDefaultLibrary() {
    ProfileActions.toggleEdit();
    ProfileActions.setLibraryAsDefault(this.props.library.agencyID);
  },

  render: function () {
    let library = find(this.props.profileStore.favoriteLibrariesResolved, {branchId: this.props.library.agencyID});
    let libContent = (<div></div>);

    if (library) {
      libContent = !this.props.editable ? (
        <a href={'/library?id=' + library.branchId}>
          <div className='row'>
            <h3>{library.branchNameDan}</h3>
            <h5>{library.agencyName}</h5>
            <p>{this.props.placeholder || 'Låner ID:'} {this.props.library.borrowerID}</p>
          </div>
        </a>) : (
        <div className='row'>
          <h3>{library.branchNameDan}</h3>
          <h5>{library.agencyName}</h5>
          <input
            defaultValue={this.props.library.borrowerID}
            onChange={this.handleTextChange}
            placeholder={this.props.placeholder || 'Låner ID'}
            />
          <a className={this.props.library.default === 1 ? 'hide' : 'button tiny'} onClick={this.setDefaultLibrary}>
            {this.props.setAsDefaultText || 'Vælg som afhentningssted'}
          </a>
        </div>
      );
    }

    return (
      <div className={'profile--library'}>
        {libContent}
      </div>
    );
  }
});

export default ProfileLibrary;
