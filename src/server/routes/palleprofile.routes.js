'use strict';

/**
 * @file
 * Configure passport routes
 */

import express from 'express';
import dbcMiddleware from './middleware.js';
import React from 'react';
import ReactDOM from 'react-dom/server';

import Profile from '../../client/components/Profile/Profile.component.js';

const PalleKontoRoutes = express.Router();

PalleKontoRoutes.get('/', dbcMiddleware.ensureAuthenticated, (req, res) => {
  dbcMiddleware.renderPage(res, 'profile', {
    profileString: ReactDOM.renderToString(<Profile />),
    title: req.app.locals.title + ' - Profil'
  }, 'no service involved');
});

export default PalleKontoRoutes;
