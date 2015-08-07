'use strict';

/**
 * @file
 * Login component displays the login form.
 */

import React from 'react';


const Login = React.createClass({

  componentDidMount: function () {
  },

  handleSubmit: function () {
  },

  render: function () {
    return (
      <div>
        <h2>Log ind</h2>
        <input type='text' ref='email'>email</input>
        <input type='password' ref='password'>password</input>
        <input type='button' value='Log ind' onClick={this.handleSubmit}></input>

        <div className='row'>
          <div className='small-6 columns'><a href='/signup'>Ny Profil?</a></div>
          <div className='small-6 columns'><a href='/resetpassword'>Glemt password?</a></div>
        </div>
      </div>
    );
  }
});

export default Login;
