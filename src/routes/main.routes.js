'use strict';

/**
 * @file
 * Configure main routes
 * Includes utility routes (example: /moreinfo)
 */

import uiconfig from '../../uiconfig.js';

import {isEmpty} from 'lodash';
import http from 'http';
import express from 'express';
const MainRoutes = express.Router();

// loading components
import SearchServer from '../components/searchpage/Search.server.js';
import {defaultRecommendations} from '../stores/Recommendations.store.js';

import dbcMiddleware from './middleware.js';

MainRoutes.get(['/', '/search', '/search/*'], (req, res) => {
  let query = req.query || [];
  query = query.text ? query.text.split('|').map((val) => {
    return {value: val, type: 'text'};
  }) : [];

  let recommendations = {
    result: [],
    pending: false,
    info: {more: false}
  };

  function cbFunc(err, result) {
    if (result) {
      recommendations.result = result[0];
    }

    let properties = SearchServer({query, config: {}, recommendations});
    properties.config = JSON.stringify(uiconfig);
    res.render('search', properties);
  }

  if (!isEmpty(query)) {
    cbFunc(null, null);
  }
  else {
    let promiseResponse = req.app.get('serviceProvider').trigger('getRecommendations', defaultRecommendations);
    dbcMiddleware.setupSSR(req, res, promiseResponse, cbFunc);
  }
});

MainRoutes.get('/moreinfo/:restOfPath*', (req, res) => {
  http.get('http://moreinfo.addi.dk/' + req.params.restOfPath, (response) => {
    res.set('Cache-Control', 'max-age=86400, s-maxage=86400, public');
    response.pipe(res);
  });
});

export default MainRoutes;
