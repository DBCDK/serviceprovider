'use strict';

/**
 * @file
 * Configure main routes
 * Includes utility routes (example: /moreinfo)
 */

import uiconfig from '../../uiconfig.js';

import http from 'http';
import express from 'express';
const MainRoutes = express.Router();

// loading components
import SearchServer from '../components/searchpage/Search.server.js';

MainRoutes.get(['/', '/search', '/search/*'], (req, res) => {
  const query = req.query || [];
  let properties = SearchServer({query, config: uiconfig});
  properties.config = JSON.stringify(uiconfig);
  res.render('search', properties);
});

MainRoutes.get('/moreinfo/:restOfPath*', (req, res) => {
  http.get('http://moreinfo.addi.dk/' + req.params.restOfPath, (response) => {
    res.set('Cache-Control', 'max-age=86400, s-maxage=86400, public');
    response.pipe(res);
  });
});

export default MainRoutes;
