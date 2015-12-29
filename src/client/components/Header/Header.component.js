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
    this.state.animateMenu = false;
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
    this.setState({
      showMenu: state.isTopBarMenuOpen,
      animateMenu: state.animateTopBarMenu
    });
  }

  updateProfile() {
    this.setState(ProfileStore.getState());
  }

  toggleMenu() {
    UIActions.toggleTopBarMenu();
  }

  render() {
    const isMenuOpen = this.state.showMenu;
    const isMenuAnimated = this.state.animateMenu;
    const isLoggedIn = this.state.userIsLoggedIn;
    const buttonData = isLoggedIn ? {url: '/profile'} : {url: '/profile/login'};
    const profileLink = isLoggedIn ? <a className='right' href='/profile' >Lånerstatus</a> : '';

    const menu = <Menu isMenuAnimated={isMenuAnimated} isMenuOpen={isMenuOpen}/>;

    return (
      <div id="header" >

        <div id="topbar" >
          <div className="topbar--logo--container row" >
            <div className="topbar--logo-container small-18 medium-20 large-20 columns" >
              <a href="/" >
                <span id="logo" > </span>
              </a>
            </div>

            <div className="topbar--button-container small-3 medium-2 large-2 columns" >
              <a href={buttonData.url}>
                <img src='/icons/profile-white.svg'></img>
              </a>
            </div>

            <div className="topbar--button-container small-3 medium-2 large-2 columns" >
              <a onClick={this.toggleMenu}>
                <img src='/icons/menu-alt-white.svg'></img>
              </a>
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
