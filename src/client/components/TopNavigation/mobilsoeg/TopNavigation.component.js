'use strict';

/**
 * @file
 * TopNavigation displays a logo and a navigation menu in the top of the page.
 */

import React from 'react';
import MobilSoegProfileStore from '../../../stores/MobilSoegProfile.store';

class TopNavigation extends React.Component {
  constructor() {
    super();

    this.state = MobilSoegProfileStore.getState();
  }

  componentDidMount() {
    this.unsubscribe = [
      MobilSoegProfileStore.listen(() => this.updateProfile())
    ];
  }

  componentWillUnmount() {
    this.unsubscribe.forEach(
      (unsubscriber) => {
        unsubscriber();
      }
    );
  }

  updateProfile() {
    this.setState(MobilSoegProfileStore.getState());
  }

  render() {
    const isLoggedIn = this.state.userIsLoggedIn;
    const buttonData = isLoggedIn ? {url: '/profile/logout', text: 'Log Ud'} : {url: '/profile/login', text: 'Log Ind'};
    const profileLink = isLoggedIn ? <a href='/profile' >Lånerstatus</a> : '';

    return (
      <div className='topnavigation--header' role="navigation" >
          <div className='topnavigation--header--buttons' >
            <div className='left topnavigation--header--buttons--profilelink' >
              {profileLink}
            </div>
            <div className='right' >
              <a className='button tiny' href={buttonData.url} >{buttonData.text}</a>
            </div>
        </div>
      </div>
    );
  }
}

TopNavigation.displayName = 'TopNavigation';

export default TopNavigation;
