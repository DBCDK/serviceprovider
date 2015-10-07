'use strict';
/**
 * @file
 * Currently the main entrypoint served on /work.
 * Provides the work view for the enduser.
 */
import React, {PropTypes} from 'react';

import {find} from 'lodash';

// Stores
import LibraryStore from '../../stores/Library.store.js';
import ProfileStore from '../../stores/Profile.store.js';

// Actions
import LibraryActions from '../../actions/Library.action.js';
import ProfileActions from '../../actions/Profile.action.js';

class Library extends React.Component {
  constructor(props, ctx) {
    super(props, ctx);

    this.state = {
      library: LibraryStore.getInitialState(),
      profile: ProfileStore.getProfile()
    };

    this.unsubscribe = [
      LibraryStore.listen(
        () => this.setState({
          library: LibraryStore.store
        })
      ),
      ProfileStore.listen(
        () => this.setState({
          profile: ProfileStore.getProfile()
        })
      )
    ];
  }

  componentWillMount() {
    this.state.library.data = this.props.libData ? this.props.libData : this.state.library.data;
  }

  componentDidMount() {
    LibraryActions.libraryIdUpdated.trigger(this.props.id);
  }

  componentWillUnmount() {
    this.unsubscribe.forEach((unsubscriber) => {
      unsubscriber();
    });
  }

  shouldDisableFavoriteButton() {
    return (find(this.state.profile.favoriteLibraries, 'agencyID', this.state.library.data.branchId));
  }

  addOrRemoveFromFavorites() {
    if (this.shouldDisableFavoriteButton()) {
      ProfileActions.removeLibraryFromFavorites(this.state.library.data.branchId);
    }
    else {
      ProfileActions.addLibraryToFavorites(this.state.library.data.branchId, this.state.library.data.agencyId);
    }
  }

  goBack() {
    window.history.back();
  }

  render() {
    const shouldDisableFavoriteButton = this.shouldDisableFavoriteButton();
    let favoriteButton = '';

    if (this.state.profile.userIsLoggedIn) {
      favoriteButton = (
        <a className={shouldDisableFavoriteButton ? 'button alert' : 'button'} onClick={this.addOrRemoveFromFavorites.bind(this)} ref='favoriteButton'>
          {shouldDisableFavoriteButton ? 'Fjern biblioteket som favoritbibliotek' : 'Tilføj bibliotek til favoritter!'}
        </a>
      );
    }

    return (
      <div className='library'>
        <a className='button tiny' onClick={this.goBack} ref='backButton'>Tilbage!</a>
        <p>{this.state.library.data.agencyName}</p>
        <p>{this.state.library.data.agencyId}</p>
        <p>{this.state.library.data.branchEmail}</p>
        <p>{this.state.library.data.branchId}</p>
        <p>{this.state.library.data.branchNameDan}</p>
        <p>{this.state.library.data.branchPhone}</p>
        <p>{this.state.library.data.branchWebsiteUrl}</p>
        <p>{this.state.library.data.city}</p>
        <p>{this.state.library.data.openingHoursDan}</p>
        <p>{this.state.library.data.postalAddress}</p>
        <p>{this.state.library.data.postalCode}</p>
        {favoriteButton}
      </div>
    );
  }
}

Library.displayName = 'Library.component';
Library.propTypes = {
  id: PropTypes.string.isRequired,
  libData: PropTypes.object
};

export default Library;
