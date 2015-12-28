'use strict';

import React from 'react';

export default class Menu extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row hide-for-large-up" id="menu">
        <ul>
          <li><a href='/libraries'>Åbningstider</a></li>
          <li><a href='/profile/logout'>Log ud</a></li>
        </ul>
      </div>
    );
  }
}

Menu.displayName = 'Menu';
