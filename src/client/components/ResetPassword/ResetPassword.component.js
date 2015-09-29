'use strict';

/**
 * @file
 * ResetPassword component displays the reset password form.
 */

import React from 'react';


const ResetPassword = React.createClass({

  displayName: function() {
    return 'ReactResetPassword';
  },

  componentDidMount: function () {
  },

  handleSubmit: function () {
  },

  render: function () {
    return (
      <div>
        <h2>Nulstil password</h2>
        <input ref='password' type='password' >password</input>
        <input ref='repeatedPassword' type='password' >password</input>
        <input onClick={this.handleSubmit} type='button' value='Nulstil password' ></input>
      </div>
    );
  }
});

export default ResetPassword;
