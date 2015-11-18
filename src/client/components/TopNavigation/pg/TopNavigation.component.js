'use strict';

/**
 * @file
 * TopNavigation displays a logo and a navigation menu in the top of the page.
 */

import React from 'react';
import ProfileStore from '../../../stores/Profile.store.js';

const TopNavigation = React.createClass({

  displayName: 'ReactTopNavigation',

  getInitialState() {
    return {
      isLoggedIn: null,
      username: ''
    };
  },

  componentDidMount() {
    ProfileStore.listen(this.updateProfile);
  },

  updateProfile(profile) {
    this.setState({
      isLoggedIn: profile.userIsLoggedIn,
      username: profile.name
    });
  },

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const buttonData = isLoggedIn ? {url: '/profile/logout', text: 'Log Ud'} : {url: '/profile/login', text: 'Log Ind'};
    const profileLink = isLoggedIn ? <a href='/profile' >{this.state.username}</a> : '';

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
});

export default TopNavigation;
