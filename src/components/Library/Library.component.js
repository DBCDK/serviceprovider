'use strict';
/**
 * @file
 * Currently the main entrypoint served on /work.
 * Provides the work view for the enduser.
 */
import React from 'react';
import Reflux from 'reflux';

import {find} from 'lodash';

// Stores
import LibraryStore from '../../stores/Library.store.js';
import ProfileStore from '../../stores/Profile.store.js';

// Actions
import LibraryActions from '../../actions/Library.action.js';
import ProfileActions from '../../actions/Profile.action.js';

const Library = React.createClass({
  displayName: 'Library.component',

  propTypes: {
    id: React.PropTypes.string.isRequired,
    libData: React.PropTypes.object
  },

  mixins: [
    Reflux.connect(LibraryStore, 'library'),
    Reflux.connect(ProfileStore, 'profile')
  ],

  componentDidMount() {
    LibraryActions.libraryIdUpdated.trigger(this.props.id);
  },

  addOrRemoveFromFavorites() {
    if (this.shouldDisableFavoriteButton()) {
      ProfileActions.removeLibraryFromFavorites(this.state.library.data.branchId);
    }
    else {
      ProfileActions.addLibraryToFavorites(this.state.library.data.branchId, this.state.library.data.agencyId);
    }
  },

  shouldDisableFavoriteButton() {
    return (find(this.state.profile.favoriteLibraries, 'agencyID', this.state.library.data.branchId));
  },

  goBack() {
    window.history.back();
  },

  render() {
    const libData = this.props.libData || this.state.library.data;
    const shouldDisableFavoriteButton = this.shouldDisableFavoriteButton();
    const favoriteButton = this.state.profile.userIsLoggedIn ? (
      <a className={shouldDisableFavoriteButton ? 'button alert' : 'button'} onClick={this.addOrRemoveFromFavorites}>
        {shouldDisableFavoriteButton ? 'Fjern biblioteket som favoritbibliotek' : 'Tilføj bibliotek til favoritter!'}
      </a>
    ) : ''; // Show favorite button if user is logged in, otherwise don't show.

    return (
      <div className='library'>
        <a className='button tiny' onClick={this.goBack}>Tilbage!</a>
        <p>{libData.agencyName}</p>
        <p>{libData.agencyId}</p>
        <p>{libData.branchEmail}</p>
        <p>{libData.branchId}</p>
        <p>{libData.branchNameDan}</p>
        <p>{libData.branchPhone}</p>
        <p>{libData.branchWebsiteUrl}</p>
        <p>{libData.city}</p>
        <p>{libData.openingHoursDan}</p>
        <p>{libData.postalAddress}</p>
        <p>{libData.postalCode}</p>
        {favoriteButton}
      </div>
    );
  }
});

export default Library;
