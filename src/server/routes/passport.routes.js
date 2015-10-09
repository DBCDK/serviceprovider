'use strict';

/**
 * @file
 * Configure passport routes
 */

import express from 'express';
import passport from 'passport';
import dbcMiddleware from './middleware.js';
import React from 'react';
import ReactDOM from 'react-dom/server';

import Profile from '../../client/components/Profile/Profile.component.js';
import Login from '../../client/components/Login/Login.component.js';
import ResetPassword from '../../client/components/ResetPassword/ResetPassword.component.js';
import Signup from '../../client/components/Signup/Signup.component.js';

const PassportRoutes = express.Router();

PassportRoutes.get('/logout', (req, res) => {
  const serviceProvider = req.app.get('serviceProvider');

  if (typeof req.user !== 'undefined') {
    const params = {
      accessToken: req.user.id,
      id: req.user.uid
    };
    serviceProvider.trigger('logoutProfile', params);
  }

  req.session.destroy(() => {
    res.redirect('/profile/login');
  });
});

PassportRoutes.post('/login', passport.authenticate('local'), (req, res) => {
  if (req.session.hasOwnProperty('returnTo')) {
    res.redirect(req.session.returnTo);
  }
  else {
    res.redirect('/profile');
  }
});

PassportRoutes.get('/confirm', (req, res) => {
  const serviceProvider = req.app.get('serviceProvider');

  // for email verification flow
  const uid = req.query.uid;
  const token = req.query.token;
  const redirectUrl = req.query.redirect;

  let verifyResponse = serviceProvider.trigger(
    'verifyEmail', {
      uid: uid,
      token: token,
      redirect: '/email_confirm'
    }
  );

  Promise.all(verifyResponse).then(() => {
    res.redirect(redirectUrl);
  }, () => {
    res.status(500).send('Internal Error');
  });
});

PassportRoutes.get('/signup', (req, res) => {
  res.render('signup', {
    signUpString: ReactDOM.renderToString(<Signup />)
  });
});

PassportRoutes.post('/signup', (req, res) => {
  const serviceProvider = req.app.get('serviceProvider');
  const EMAIL_REDIRECT = req.app.get('EMAIL_REDIRECT');
  const logger = req.app.get('logger');

  req.checkBody('email', 'Invalid email').isEmail();
  req.checkBody('password', 'Password should contain 8-30 characters').notEmpty().len(8, 30);

  const email = req.body.email;
  const password = req.body.password;

  // validate arguments
  if (!req.validationErrors()) {
    let resp = serviceProvider.trigger(
      'createProfile', {
        email: email,
        password: password,
        basePath: EMAIL_REDIRECT
      }
    );

    Promise.all(resp).then(() => {
      res.render('signup', {
        signUpString: ReactDOM.renderToString(<Signup />),
        message: {
          text: 'Vi har sendt en bekræftelse-email til dig',
          error: false
        }
      });
    }, (error) => {
      res.status(500).send('Internal Error');
      logger.log('error', 'Internal Error on signup', error);
    });
  }
  else {
    // we have validation errors!
    const errorMessage = req.validationErrors()[0].msg;
    dbcMiddleware.renderPage(res, 'signup', {
      signUpString: ReactDOM.renderToString(<Signup />),
      message: {
        text: errorMessage,
        error: true
      }
    }, 'not timed');
  }
});

PassportRoutes.get('/resetpassword', (req, res) => {
  dbcMiddleware.renderPage(res, 'resetpassword', {
    resetString: ReactDOM.renderToString(<ResetPassword />)
  }, 'no service involved');
});

PassportRoutes.get('/login', (req, res) => {
  dbcMiddleware.renderPage(res, 'login', {
    loginString: ReactDOM.renderToString(<Login />)
  }, 'no service involved');
});

PassportRoutes.get('/', dbcMiddleware.ensureAuthenticated, (req, res) => {
  dbcMiddleware.renderPage(res, 'profile', {
    profileString: ReactDOM.renderToString(<Profile />)
  }, 'no service involved');
});

export default PassportRoutes;
