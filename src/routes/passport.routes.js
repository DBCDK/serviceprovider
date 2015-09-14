'use strict';

/**
 * @file
 * Configure passport routes
 */

import express from 'express';
const PassportRoutes = express.Router();

import passport from 'passport';

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    // the user is logged in
    req.session.returnTo = req.originalUrl;
    return next();
  }

  if (req.query.ids) {
    const rt = req.query.ids.split(',');
    req.session.returnTo = '/work?id=' + rt[0];
  }
  // send user to login otherwise
  res.redirect('/profile/login');
}

PassportRoutes.get('/logout', (req, res) => {
  const serviceProvider = req.app.get('serviceProvider');

  if (typeof req.user !== 'undefined') {
    const params = {
      accessToken: req.user.id,
      id: req.user.uid
    };
    serviceProvider.trigger('logoutProfile', params);
  }
  //

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
      token: token
    }
  );

  Promise.all(verifyResponse).then(() => {
    res.redirect(redirectUrl);
  }, () => {
    res.status(500).send('Internal Error');
  });
});

PassportRoutes.get('/signup', (req, res) => {
  res.render('signup');
});

PassportRoutes.post('/signup', (req, res) => {
  const serviceProvider = req.app.get('serviceProvider');
  const EMAIL_REDIRECT = req.app.get('EMAIL_REDIRECT');
  const logger = req.app.get('logger');

  const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

  const email = req.body.email;
  const password = req.body.password;
  const repeatedPassword = req.body.repeatedPassword;

  // validate arguments
  if (email && password && repeatedPassword && (password === repeatedPassword) && emailRegex.test(email)) {
    let resp = serviceProvider.trigger(
      'createProfile', {
        email: email,
        password: password,
        basePath: EMAIL_REDIRECT
      }
    );

    Promise.all(resp).then(() => {
      res.render('signup', {message: {text: 'Vi har sendt en bekræftelse-email til dig', error: false}});
    }, (error) => {
      res.status(500).send('Internal Error');
      logger.log('error', 'Internal Error on signup', error);
    });
  }
  else {
    // input was not valid
    let errorMessage = 'De indtastede værdier er ikke gyldige';
    if (email === '') {
      errorMessage = 'Email skal udfyldes';
    }
    else if (!emailRegex.test(email)) {
      errorMessage = 'Email er ikke gyldig';
    }
    else if (password === '') {
      errorMessage = 'Password skal udfyldes';
    }
    else if (password !== repeatedPassword) {
      errorMessage = 'De 2 passwords er ikke identiske';
    }
    res.render('signup', {message: {text: errorMessage, error: true}});
  }
});

PassportRoutes.get('/resetpassword', (req, res) => {
  res.render('resetpassword');
});

PassportRoutes.get('/login', (req, res) => {
  res.render('login');
});

PassportRoutes.get('/', ensureAuthenticated, (req, res) => {
  if (req.session.returnTo === '/profile') {
    res.render('profile');
  }
  else {
    res.redirect(req.session.returnTo);
  }
});

export default PassportRoutes;
