'use strict';

/**
 * @file
 * ProfileLibraries displays a users favorite libraries.
 */

import React from 'react';
import {find} from 'lodash';

const ProfileLibrary = React.createClass({
  displayName: 'ProfileLibrary',

  propTypes: {
    actions: React.PropTypes.object.isRequired,
    editable: React.PropTypes.bool.isRequired,
    library: React.PropTypes.object.isRequired,
    pickupLocationText: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string.isRequired,
    setAsText: React.PropTypes.string.isRequired,
    store: React.PropTypes.object.isRequired
  },

  componentDidMount() {
    this.props.actions.libraryIdUpdated.trigger(this.props.library.agencyID);
  },

  handleTextChange(e) {
    this.props.actions.updateBorrowerIDForLibrary(this.props.library.agencyID, e.target.value);
  },

  setDefaultLibrary() {
    this.props.actions.toggleEdit();
    this.props.actions.setLibraryAsDefault(this.props.library.agencyID);
  },

  render: function () {
    let library = find(this.props.store.favoriteLibrariesResolved, {branchId: this.props.library.agencyID});
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
            placeholder={this.props.placeholder}
            />
          <a className={this.props.library.default === 1 ? 'button disabled secondary tiny' : 'button tiny'} onClick={this.setDefaultLibrary}>
            {this.props.library.default === 1 ? '' : this.props.setAsText} {this.props.pickupLocationText}
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
