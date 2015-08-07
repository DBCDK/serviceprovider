'use strict';

/**
 * @file
 * Signup component displays the signup form.
 */

import React from 'react';


const Signup = React.createClass({

  componentDidMount: function () {
  },

  handleSubmit: function () {
  },

  render: function () {
    return (
      <div>
        <h2>Opret Profil</h2>
        <input type='text' ref='email'>email</input>
        <input type='password' ref='password'>password</input>
        <input type='button' value='Opret profil' onClick={this.handleSubmit}></input>
      </div>
    );
  }
});

export default Signup;
