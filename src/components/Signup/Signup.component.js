'use strict';

/**
 * @file
 * Signup component displays the signup form.
 */

import React from 'react';

import ProfileStore from '../../stores/Profile.store.js';


const Signup = React.createClass({

  getInitialState: function() {
    return {isPasswordMatching: null};
  },

  componentDidMount: function () {
    ProfileStore.listen(this.updateProfile);
  },

  handleSubmit: function () {
  },

  handlePasswordTyping: function () {
  },

  handleEmailTyping: function () {
  },

  render: function () {
    return (
      <div>
        <form method='post' action='/signup'>
          <h2>Opret Profil</h2>
          <input name='email' type='text' ref='email' onChange={this.handleEmailTyping}>email</input>
          <input name='password' type='password' ref='password' onChange={this.handlePasswordTyping}>password</input>
          <input name='repeatedPassword' type='password' ref='repeatedPassword' onChange={this.handlePasswordTyping}>password</input>
          <input type='submit' value='Opret profil' onClick={this.handleSubmit}></input>
        </form>
      </div>
    );
  }
});

export default Signup;
