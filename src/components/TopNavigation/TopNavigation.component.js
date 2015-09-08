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
    this.setState({isLoggedIn: profile.userIsLoggedIn});
  },

  render: function() {
    const buttonData = this.state.isLoggedIn ? {url: '/logout', text: 'Log Ud'} : {url: '/login', text: 'Log Ind'};
    let button = null;
    if (this.state.isLoggedIn !== null) {
      button = <a href={buttonData.url}>{buttonData.text}</a>;
    }
    return (
      <nav className='topnavigation--header' role="navigation">
        <div className='row'>
          <div className='small-4 columns'><a href='/'><image src='/palle_logo.png'></image></a></div>
          <div className='small-4 columns'><p></p></div>
          <div className='small-4 columns right'>{button}</div>
        </div>
      </nav>
    );
  }
});

export default TopNavigation;
