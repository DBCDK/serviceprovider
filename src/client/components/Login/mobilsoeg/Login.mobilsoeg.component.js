'use strict';

import React from 'react';

/**
 * @file
 * Login component displays the login form.
 */

export default class Login extends React.Component {
  render() {
    return (
      <div className="large-24 columns" >

        <div className="large-24 columns" >
          <h2>Log ind</h2>
          <p>For at logge ind skal du være oprettet som låner på dit lokale bibliotek.</p>
        </div>

        <form action='/profile/login' method='POST' >
          <div>
            <input name="agencyid" type="hidden" value={this.props.agencyId} />
          </div>

          <div className="large-24 columns" >
            <label>Låner ID
              <input inputMode="numeric" name="loanerid" pattern="[0-9]*" type="number" />
            </label>
          </div>

          <div className="large-24 columns" >
            <label>Pinkode
              <input name="pincode" type="password" />
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
Login.propTypes = {
  agencyId: React.PropTypes.string.isRequired
};
