'use strict';

/**
 * @file
 * Configure passport routes
 */

import express from 'express';
import dbcMiddleware from './middleware.js';
import React from 'react';
import ReactDOM from 'react-dom/server';

import DDBProfile from '../../client/components/DDBProfile/DDBProfile.component.js';

const DDBProfileRoutes = express.Router();

DDBProfileRoutes.get('/', dbcMiddleware.ensureAuthenticated, (req, res) => {
  dbcMiddleware.renderPage(res, 'profile', {
    profileString: ReactDOM.renderToString(<DDBProfile />),
    title: req.app.locals.title + ' - Profil'
  }, 'no service involved');
});

export default DDBProfileRoutes;
