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

import Login from '../../client/components/Login/mobilsoeg/Login.mobilsoeg.component';
import Profile from '../../client/components/DDBProfile/DDBProfile.component.js';

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

PassportRoutes.post('/login', passport.authenticate('borchk',
  { // TODO mmj cutsom callback to properly handle borchk responses
    failureRedirect: '/profile/login?error=Ugyldigt%20brugernavn%20eller%20kodeord'
  }),
  (req, res) => {
    if (req.session.hasOwnProperty('returnTo')) {
      res.redirect(req.session.returnTo);
    }
    else {
      res.redirect('/profile');
    }
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
