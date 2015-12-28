'use strict';

import React from 'react';

import ProfileStore from '../../stores/Profile.store.js';
import Menu from './Menu.component.js';

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
    const isMenuOpen = true;
    const isLoggedIn = this.state.userIsLoggedIn;
    const buttonData = isLoggedIn ? {url: '/profile/logout', text: 'Log Ud'} : {url: '/profile/login', text: 'Log Ind'};
    const profileLink = isLoggedIn ?
      <a className='right' href='/profile' >Lånerstatus</a> : '';

    const menu = (isMenuOpen) ? <Menu/> : null;

    return (
      <div id="header" >

        <div id="topbar" >
          <div className="topbar--logo--container row" >
            <div className="topbar--logo-container small-13 medium-18 large-18 columns" >
              <a href="/" >
                <span id="logo" > </span>
              </a>
            </div>
            <div className="topbar--login-btn-container small-7 medium-6 large-6 columns" >
              <a className='button tiny right' href={buttonData.url} >{buttonData.text}</a>
            </div>
            <div className="burger small-3 small-only columns" >
              <i className='icon-align-justify'></i>
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

        {menu}

      </div>
    );
  }
}

Header.displayName = 'Header';
