'use strict';

import React from 'react';

import ProfileStore from '../../stores/Profile.store.js';

export default class Header extends React.Component {
  constructor() {
    super();

    this.state = ProfileStore.getState();
  }

  componentDidMount() {
    this.unsubscribe = [
      ProfileStore.listen(() => this.updateProfile())
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
    this.setState(ProfileStore.getState());
  }

  render() {
    const isLoggedIn = this.state.userIsLoggedIn;
    const buttonData = isLoggedIn ? {url: '/profile/logout', text: 'Log Ud'} : {url: '/profile/login', text: 'Log Ind'};
    const profileLink = isLoggedIn ?
      <a className='right' href='/profile' >Lånerstatus</a> : '';

    return (
      <div id="header" >

        <div id="topbar" >
          <div className="topbar--logo--container row" >
            <div className="topbar--logo-container small-17 medium-18 large-18 columns" >
              <a href="/" >
                <span id="logo" > </span>
              </a>
            </div>
            <div className="topbar--login-btn-container small-7 medium-6 large-6 columns" >
              <a className='button tiny right' href={buttonData.url} >{buttonData.text}</a>
            </div>
          </div>
        </div>

        <div className="header--topnavigation-container row" >
          <div className="header--topnavigation-links  small-24 medium-24 large-24 columns" >
            <div className="header--topnavigation-links--link" >
              {profileLink}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

Header.displayName = 'Header';
