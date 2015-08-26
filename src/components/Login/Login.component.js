'use strict';

/**
 * @file
 * Login component displays the login form.
 */

import React from 'react';


const Login = React.createClass({

  displayName: function() {
    return 'ReactLogin';
  },

  componentDidMount: function () {
  },

  handleSubmit: function () {
  },

  render: function () {
    return (
      <div>
        <h2>Log ind</h2>

        <form action='/login' method='POST'>
          <label>Email</label>
          <input name='username' ref='email 'type='email'></input>
          <label>Password</label>
          <input name='password' ref='password' type='password'></input>
          <input className='button' onClick={this.handleSubmit} type='submit' value='Log ind'></input>
        </form>

        <div className='row'>
          <div className='small-6 columns'><a href='/signup'>Ny Bruger?</a></div>
          <div className='small-6 columns'><a href='/resetpassword'>Glemt password?</a></div>
        </div>
      </div>
    );
  }
});

export default Login;
