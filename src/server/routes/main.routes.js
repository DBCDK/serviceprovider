'use strict';

/**
 * @file
 * Configure main routes
 * Includes utility routes (example: /moreinfo)
 */

import express from 'express';
const MainRoutes = express.Router();
import React from 'react';
import ReactDOM from 'react-dom/server';

import {stringToObject} from '../../utils/QueryParser.util.js';

// loading components
//import {defaultLikes} from '../../client/components/Recommend/Recommendations.store.js';

MainRoutes.get('/', (req, res) => {
});

MainRoutes.get(['/search', '/search/*'], (req, res) => {
  res.render('search', {
    props: JSON.stringify({query: stringToObject(req.query || []) || []})
  });
});

MainRoutes.post(['/report-violation'], function(req, res) {
  const logger = req.app.get('logger');
  if (req.body) {
    logger.log('warning', 'CSP Violation: ', req.body);
  }
  else {
    logger.log('warning', 'CSP Violation: No data received!');
  }
  res.status(204).end();
});

export default MainRoutes;
