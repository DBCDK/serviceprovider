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
    setAsText: React.PropTypes.string.isRequired,
    store: React.PropTypes.object.isRequired
  },

  componentDidMount() {
    this.props.actions.libraryIdUpdated.trigger(this.props.library.agencyID);
  },

  setDefaultLibrary() {
    if (this.props.library.default !== 1) {
      this.props.actions.setLibraryAsDefault(this.props.library.agencyID);
    }
  },

  removeFavoriteLibrary() {
    this.props.actions.removeLibraryFromFavorites(this.props.library.agencyID);
  },

  render: function () {
    let library = find(this.props.store.favoriteLibrariesResolved, {branchId: this.props.library.agencyID});
    let libContent = (<div></div>);

    if (library) {
      libContent = (
        <div className={'profile--library'}>
          <div className='row'>
            <a href={'/library?id=' + library.branchId}>
              <h3>{library.branchNameDan}</h3>
              <h5>{library.agencyName}</h5>
            </a>
            <div className='row'>
              <div className='large-4 medium-4 small-12 columns'>
                <a className='button tiny expand' href={'/library?id=' + library.branchId}>
                  Ret lånerdata
                </a>
              </div>
              <div className='large-4 medium-4 small-12 columns'>
                <a className='button alert expand tiny' href='#' onClick={this.removeFavoriteLibrary}>
                  Fjern bibliotek fra favoritter
                </a>
              </div>
              <div className='large-4 medium-4 small-12 columns'>
                <a className={this.props.library.default === 1 ? 'button disabled secondary tiny expand' : 'button tiny expand'}
                   href='#'
                   onClick={this.setDefaultLibrary}>
                  {(this.props.library.default === 1 ? '' : this.props.setAsText + ' ') + this.props.pickupLocationText}
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return libContent;
  }
});

export default ProfileLibrary;
