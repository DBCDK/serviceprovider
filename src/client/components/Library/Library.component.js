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
import MessageActions from '../../actions/Message.action.js';

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
        () => {
          this.setState({
            profile: ProfileStore.getProfile()
          });

          this.profileUpdated(this.state.profile);
        }
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
      MessageActions.setUserMessage({message: 'Biblioteket er fjernet fra dine favoritter!', error: false});
    }
    else {
      ProfileActions.addLibraryToFavorites(this.state.library.data.branchId, this.state.library.data.agencyId);
      MessageActions.setUserMessage({message: 'Biblioteket er blevet tilføjet til dine favoritter!', error: false});
    }
  }

  saveBorrowerInfo(e) {
    e.preventDefault();
    const agencyId = this.state.library.data.agencyId;
    const branchId = this.state.library.data.branchId;
    const borrId = this.refs.favoriteLibraryBorrowerId.value;
    const borrPass = this.refs.favoriteLibraryBorrowerPassword.value;
    const defaultLibrary = this.shouldDisableFavoriteButton() && this.shouldDisableFavoriteButton().default || 0;

    if (borrId !== '' && borrPass !== '' && agencyId && branchId) {
      ProfileActions.checkBorrowerAndSaveToProfile({
        updatedLibrary: {
          agencyID: branchId,
          libraryID: agencyId,
          borrowerID: borrId,
          borrowerPIN: borrPass,
          default: defaultLibrary
        },
        favoriteLibraries: this.state.profile.favoriteLibraries
      });
    }
    else {
      MessageActions.setUserMessage({message: 'Fejl, husk at udfylde alle felter', error: true});
    }
  }

  profileUpdated(state) {
    // Check the response of borrowercheck and inform user of what's going on.
    if (state.borrowerCheckStatus === 'pending') {
      MessageActions.setUserMessage({message: 'Checker brugerdata', error: false});
    }
    else if (state.borrowerCheckStatus === 'borrower_not_found') {
      MessageActions.setUserMessage({message: 'Ugyldig bruger, check venligst låner ID og pinkode', error: true});
    }
    else if (state.borrowerCheckStatus === 'ok') {
      if (state.borrowerInfoSaved) {
        MessageActions.setUserMessage({message: 'Dine brugerdata er gemt!', error: false});
      }
      else {
        MessageActions.setUserMessage({message: 'Der skete en fejl! Prøv igen senere...', error: true});
      }
    }
    else if (state.borrowerCheckStatus !== '') {
      MessageActions.setUserMessage({message: 'Der skete en fejl! Prøv igen senere...', error: true});
    }
  }

  goBack() {
    window.history.back();
  }

  onFormFieldInput() {
    let elements = document.getElementsByClassName('cleardefault');
    while (elements.length > 0) {
      elements[0].value = elements[0].value.replace(/P/g, '');
      elements[0].className = elements[0].className.replace('cleardefault', '').trim();
    }
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

    if (shouldDisableFavoriteButton) {
      favoriteButton = (
        <div>
          {favoriteButton}

          <form className='library--favorite-library-form' onSubmit={this.saveBorrowerInfo.bind(this)}>
            <div className='hide'>
              <input name='id' type='hidden' value={branchId} />
            </div>
            <fieldset>
              <legend>Favoritbibliotek</legend>

              <div className='large-10 medium-8 small-24 columns'>
                <label>
                  <span>Låner ID</span>
                  <input
                    className='profile--library--borrower-id cleardefault'
                    defaultValue={shouldDisableFavoriteButton && shouldDisableFavoriteButton.borrowerID !== '' ? 'PPPPPPPPPP': ''}
                    onChange={this.onFormFieldInput}
                    placeholder={'Skriv dit låner id her'}
                    ref='favoriteLibraryBorrowerId'
                    type='password' />
                </label>
              </div>
              <div className='large-10 medium-8 small-24 columns'>
                <label>
                  <span>Pinkode</span>
                  <input
                    className='profile--library--borrower-password cleardefault'
                    defaultValue={shouldDisableFavoriteButton && shouldDisableFavoriteButton.borrowerPIN !== '' ? 'PPPP': ''}
                    onChange={this.onFormFieldInput}
                    placeholder='Skriv din kode her'
                    ref='favoriteLibraryBorrowerPassword'
                    type='password' />
                </label>
              </div>
              <div className='large-4 medium-8 small-24 columns'>
                <label>
                  <br />
                  <input
                    className='button tiny expand'
                    onClick={this.setDefaultLibrary}
                    ref='saveUserDataBtn'
                    type='submit'
                    value='Gem'
                    />
                </label>
              </div>
            </fieldset>
          </form>
        </div>
      );
    }

    return (
      <div className='library'>
        <br />
        <div className='row'>
          <a className='button tiny' onClick={this.goBack} ref='backButton'>Tilbage!</a>
          <p>{agencyName}</p>
          <p>{agencyId}</p>
          <p>{branchEmail}</p>
          <p>{branchId}</p>
          <p className='library--branch-name'>{branchNameDan}</p>
          <p>{branchPhone}</p>
          <p>{branchWebsiteUrl}</p>
          <p>{city}</p>
          <p>{openingHoursDan}</p>
          <p>{postalAddress}</p>
          <p>{postalCode}</p>
        </div>
        <div className='row'>
          {favoriteButton}
        </div>
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
