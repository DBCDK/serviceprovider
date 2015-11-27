'use strict';

/**
 * @file
 * Signup component displays the signup form.
 */

import React from 'react';
import {isArray} from 'lodash';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    const errors = this.parseErrors(this.props.errors);

    this.state = {
      emailValue: errors.email ? errors.email.value : '',
      isPasswordMatching: false,
      isEmailFormatted: false
    };
  }

  handlePasswordTyping() {
    const password = this.refs.password.value;
    const repeatedPassword = this.refs.repeatedPassword.value;
    const isPasswordMatching = (password !== '' && repeatedPassword !== '' && password === repeatedPassword);
    this.setState({isPasswordMatching: isPasswordMatching});
  }

  handleEmailTyping() {
    // check if email is valid
    const email = this.refs.email.value;
    const re = /\S+@\S+\.\S+/;
    const isEmailFormatted = re.test(email);
    this.setState({isEmailFormatted: isEmailFormatted, emailValue: this.refs.email.value});
  }

  prepareErrorMessage(msg) {
    return (
      <small className="error" >{msg}</small>
    );
  }

  parseErrors(errors) {
    let errorObj = {email: null, password: null};

    if (!isArray(errors)) {
      return errorObj;
    }

    errors.forEach((val) => {
      if (val.param === 'email' && !errorObj.email) {
        errorObj.email = {
          msg: val.msg,
          value: val.value
        };
      }

      if (val.param === 'password' && !errorObj.password) {
        errorObj.password = {
          msg: val.msg,
          value: val.value
        };
      }
    });

    return errorObj;
  }

  render() {
    const errors = this.parseErrors(this.props.errors);
    const passwordColor = this.state.isPasswordMatching ? 'green' : 'orange';
    const emailColor = this.state.isEmailFormatted ? 'green' : 'orange';

    const emailClassNames = errors.email ? 'large-24 columns error' : 'large-24 columns';
    const emailErrorMsg = errors.email ? this.prepareErrorMessage(errors.email.msg) : '';

    return (
      <div className="large-24 columns" >
        <form action='/profile/signup' method='post' >
          <h2>Opret Profil</h2>

          <div className="large-24 columns" >
            <label>Vælg dit bibliotek
              <select defaultValue="775100" name="library" >
                <option disabled="true" value="715100" >Ballerup</option>
                <option value="775100" >Aarhus</option>
                <option disabled="true" value="743001" >Ringe</option>
              </select>
            </label>
          </div>

          <div className={emailClassNames} >
            <label>Email
              <input
                name='email'
                onChange={this.handleEmailTyping.bind(this)}
                ref='email'
                style={{borderColor: emailColor}}
                type='text'
                value={this.state.emailValue}
              />
            </label>
            {emailErrorMsg}
          </div>

          <div className="large-12 columns" >
            <label>Password
              <input
                name='password'
                onChange={this.handlePasswordTyping}
                ref='password'
                style={{borderColor: passwordColor}}
                type='password'
              />
            </label>
          </div>

          <div className="large-12 columns" >
            <label>Gentag password
              <input
                name='repeatedPassword'
                onChange={this.handlePasswordTyping}
                ref='repeatedPassword'
                style={{borderColor: passwordColor}}
                type='password'
              />
            </label>
          </div>

          <div className="large-24 columns" >
            <input
              className='button'
              onKeyUp={this.handleSubmit}
              type='submit'
              value='Opret profil'
            />
          </div>
        </form>
      </div>
    );
  }
}

Signup.displayName = 'Signup';
Signup.propTypes = {
  errors: React.PropTypes.object
};

export default Signup;
