'use strict';

import React from 'react';
import LibrarySelector from '../../LibrarySelector/LibrarySelector.component';

/**
 * @file
 * Login component displays the login form.
 */

export default class Login extends React.Component {
  render() {
    return (
      <div className="large-24 columns" >
        <form action='/profile/login' method='POST' >

          <h2>Log ind</h2>

          <div className="large-24 columns" >
            <label>Vælg dit bibliotek
              <LibrarySelector />
            </label>
          </div>

          <div className="large-24 columns" >
            <label>Låner ID
              <input inputMode="numeric" name="loanerid" pattern="[0-9]*" type="number" />
            </label>
          </div>

          <div className="large-24 columns" >
            <label>Pinkode
              <input name="pin" type="password" />
            </label>
          </div>

          <div className="large-24 columns" >
            <input className="button" type="submit" value="Log ind" />
          </div>
        </form>
      </div>
    );
  }
}

Login.displayName = 'Login.mobilsoeg';
