'use strict';

import React, {PropTypes} from 'react';

export default class Menu extends React.Component {
  constructor() {
    super();
  }

  render() {
    let animationClass = '';
    if (this.props.isMenuAnimated) {
      animationClass = (this.props.isMenuOpen) ? 'opened' : 'closed';
    }

    let login_logout_button = (<li><a href="/profile/login">Log ind</a></li>);
    let profile_button = '';

    if (this.props.userIsLoggedIn) {
      login_logout_button = (<li><a href='/profile/logout'>Log ud</a></li>);
      profile_button = (<li><a href='/profile'>Lånerstatus</a></li>);
    }

    return (
        <div className={'row header--topbar-menu slider ' + animationClass} id='menu'>
          <ul>
            <li><a href='/'>Forside</a></li>
            <li><a href='/libraries'>Åbningstider</a></li>
            {profile_button}
            {login_logout_button}
          </ul>
        </div>
    );
  }
}

Menu.propTypes = {
  isMenuOpen: PropTypes.bool,
  isMenuAnimated: PropTypes.bool,
  userIsLoggedIn: PropTypes.bool
};

Menu.displayName = 'Menu';
