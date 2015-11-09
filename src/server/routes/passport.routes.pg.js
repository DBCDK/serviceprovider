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

// Components
import Login from '../../client/components/Login/pg/Login.pg.component';
import ResetPassword from '../../client/components/ResetPassword/ResetPassword.component.js';
import Signup from '../../client/components/Signup/pg/Signup.pg.component.js';
import Profile from '../../client/components/Profile/Profile.component.js';

const PassportRoutes = express.Router();

PassportRoutes.get('/', dbcMiddleware.ensureAuthenticated, (req, res) => {
  dbcMiddleware.renderPage(res, 'profile', {
    profileString: ReactDOM.renderToString(<Profile />),
    title: req.app.locals.title + ' - Profil'
  }, 'no service involved');
});

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

PassportRoutes.post('/login', passport.authenticate('local', {failureRedirect: '/profile/login?error=Ugyldigt%20brugernavn%20eller%20kodeord'}), (req, res) => {
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
    markup: ReactDOM.renderToString(<Signup />),
    title: req.app.locals.title + ' - Opret ny bruger'
  });
});

PassportRoutes.post('/signup', (req, res) => {
  const serviceProvider = req.app.get('serviceProvider');
  const EMAIL_REDIRECT = req.app.get('EMAIL_REDIRECT');
  const logger = req.app.get('logger');

  const email = req.body.email;
  const password = req.body.password;
  const repeatedPassword = req.body.repeatedPassword;
  const library = req.body.library;

  req.checkBody('email', 'Du skal indtaste en gyldig email adresse').notEmpty();
  req.checkBody('email', 'Du skal indtaste en gyldig email adresse').isEmail();
  req.checkBody('password', 'Dit password skal være på mellem 8 og 30 tegn').notEmpty().len(8, 30);
  req.checkBody('password', 'De to passwords er ikke ens').isEqual(repeatedPassword);

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
        markup: ReactDOM.renderToString(<Signup />),
        message: {
          text: 'Vi har sendt en bekræftelse-email til dig',
          error: false
        }
      });
    }, (error) => {
      res.status(500).render('signup', {
        markup: ReactDOM.renderToString(<Signup />),
        message: {
          text: 'På grund af en fejl på serveren kunne du ikke blive oprettet.',
          error: true
        }
      });
      logger.log('error', 'Internal Error on signup. Is the profile service running?', error);
    });
  }
  else {
    // we have validation errors!
    const validationErrors = req.validationErrors();
    dbcMiddleware.renderPage(res, 'signup', {
      markup: ReactDOM.renderToStaticMarkup(
        <Signup data={{email: email, library: library}} errors={validationErrors} />
      ),
      props: JSON.stringify({
        errors: validationErrors
      }),
      message: {
        text: 'Alle felter skal være korrekt udfyldt',
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
  let contextObject = {
    markup: ReactDOM.renderToString(<Login />),
    title: req.app.locals.title + ' - Log ind'
  };

  if (req.query.error) {
    contextObject.message = {
      text: req.query.error,
      error: true
    };
  }

  dbcMiddleware.renderPage(res, 'login', contextObject, 'no service involved');
});

export default PassportRoutes;
