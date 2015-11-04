'use strict';

import React from 'react';

/**
 * @file
 * Login component displays the login form.
 * Implemeneted as a stateless function
 */

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <h2>Log ind</h2>

        <form action='/profile/login' method='POST' >
          <label>Email</label>
          <input name='username' type='email' />
          <label>Password</label>
          <input name='password' type='password' />
          <input className='button' type='submit' value='Log ind' />
        </form>

        <div className='row' >
          <div className='small-6 columns' >
            <a href='/profile/signup' >Ny Bruger?</a></div>
          <div className='small-6 columns' >
            <a href='/profile/resetpassword' >Glemt password?</a></div>
        </div>
      </div>
    );
  }
}

Login.displayName = 'Login.pg';
