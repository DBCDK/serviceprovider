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
        <label>Email</label>
        <input type='text' ref='email'></input>
        <label>Password</label>
        <input type='password' ref='password'></input>
        <input className='button' type='button' value='Log ind' onClick={this.handleSubmit}></input>

        <div className='row'>
          <div className='small-6 columns'><a href='/signup'>Ny Bruger?</a></div>
          <div className='small-6 columns'><a href='/resetpassword'>Glemt password?</a></div>
        </div>
      </div>
    );
  }
});

export default Login;
