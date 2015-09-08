'use strict';

/**
 * @file
 * TopNavigation displays a logo and a navigation menu in the top of the page.
 */

import React from 'react';
import ProfileStore from '../../stores/Profile.store.js';
import ProfileActions from '../../actions/Profile.action.js';


const TopNavigation = React.createClass({

  displayName: function() {
    return 'ReactTopNavigation';
  },

  getInitialState() {
    return {
      isLoggedIn: null
    };
  },

  componentDidMount: function() {
    ProfileStore.listen(this.updateProfile);
    ProfileActions.fetchProfile();
  },

  updateProfile: function(profile) {
    this.setState({
      isLoggedIn: profile.userIsLoggedIn,
      username: profile.name
    });
  },

  render: function() {
    const isLoggedIn = this.state.isLoggedIn;
    const username = this.state.username;
    const buttonData = isLoggedIn ? {url: '/logout', text: 'Log Ud'} : {url: '/login', text: 'Log Ind'};
    let button = null;
    const linkText = isLoggedIn ? <a href='/profile'>{username}</a> : null;
    if (isLoggedIn !== null) {
      const profileLink = <p className='link'>{linkText}</p>;
      button = <div>{profileLink}<a className='button tiny' href={buttonData.url}>{buttonData.text}</a></div>;
    }
    return (
      <nav className='topnavigation--header' role="navigation">
        <div className='row'>
          <div className='small-4 columns logo'><a href='/'><image src='/logo.png'></image></a></div>
          <div className='small-8 columns right'>{button}</div>
        </div>
      </nav>
    );
  }
});

export default TopNavigation;
