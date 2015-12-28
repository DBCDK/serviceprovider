'use strict';

import React from 'react';

import ProfileStore from '../../stores/Profile.store.js';
import UIStore from '../../stores/UI.store.js';
import UIActions from '../../actions/UI.actions.js';
import Menu from './Menu.component.js';

export default class Header extends React.Component {
  constructor() {
    super();
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = ProfileStore.getState();
    this.state.showMenu = false;
  }

  componentDidMount() {
    this.unsubscribe = [
      ProfileStore.listen(() => this.updateProfile()),
      UIStore.listen((val) => this.updateUIState(val))
    ];
  }

  componentWillUnmount() {
    this.unsubscribe.forEach(
      (unsubscriber) => {
        unsubscriber();
      }
    );
  }

  updateUIState(state) {
    this.setState({showMenu: state.isTopBarMenuOpen});
  }

  updateProfile() {
    this.setState(ProfileStore.getState());
  }

  toggleMenu() {
    UIActions.toggleTopBarMenu();
  }

  render() {
    const isMenuOpen = this.state.showMenu;
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
            <div className="topbar--login-btn-container small-4 columns" >
              <a className='button tiny burger right' onClick={this.toggleMenu}>Menu</a>
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
