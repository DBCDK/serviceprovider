'use strict';
/**
 * @file
 * Currently the main entrypoint served on /work.
 * Provides the work view for the enduser.
 */
import React, {PropTypes} from 'react';
import {find, isString} from 'lodash';

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
    const agencyName = isString(this.state.library.data.agencyName) ? this.state.library.data.agencyName : '';
    const agencyId = isString(this.state.library.data.agencyId) ? this.state.library.data.agencyId : '';
    const branchEmail = isString(this.state.library.data.branchEmail) ? this.state.library.data.branchEmail : '';
    const branchId = isString(this.state.library.data.branchId) ? this.state.library.data.branchId : '';
    const branchNameDan = isString(this.state.library.data.branchNameDan) ? this.state.library.data.branchNameDan : '';
    const branchPhone = isString(this.state.library.data.branchPhone) ? this.state.library.data.branchPhone : '';
    const branchWebsiteUrl = isString(this.state.library.data.branchWebsiteUrl) ? this.state.library.data.branchWebsiteUrl : '';
    const city = isString(this.state.library.data.city) ? this.state.library.data.city : '';
    const openingHoursDan = isString(this.state.library.data.openingHoursDan) ? this.state.library.data.openingHoursDan : '';
    const postalAddress = isString(this.state.library.data.postalAddress) ? this.state.library.data.postalAddress : '';
    const postalCode = isString(this.state.library.data.postalCode) ? this.state.library.data.postalCode : '';

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
        <p>{agencyName}</p>
        <p>{agencyId}</p>
        <p>{branchEmail}</p>
        <p>{branchId}</p>
        <p>{branchNameDan}</p>
        <p>{branchPhone}</p>
        <p>{branchWebsiteUrl}</p>
        <p>{city}</p>
        <p>{openingHoursDan}</p>
        <p>{postalAddress}</p>
        <p>{postalCode}</p>
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
