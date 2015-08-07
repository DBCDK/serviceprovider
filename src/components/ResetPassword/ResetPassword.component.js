'use strict';

/**
 * @file
 * ResetPassword component displays the reset password form.
 */

import React from 'react';


const ResetPassword = React.createClass({

  componentDidMount: function () {
  },

  handleSubmit: function () {
  },

  render: function () {
    return (
      <div>
        <h2>Nulstil password</h2>
        <input type='password' ref='password'>password</input>
        <input type='password' ref='repeatedPassword'>password</input>
        <input type='button' value='Nulstil password' onClick={this.handleSubmit}></input>
      </div>
    );
  }
});

export default ResetPassword;
