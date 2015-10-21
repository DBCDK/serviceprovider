'use strict';

/**
 * @file
 * Configure main routes
 * Includes utility routes (example: /moreinfo)
 */

import {isEmpty} from 'lodash';
import http from 'http';
import express from 'express';
const MainRoutes = express.Router();

import {stringToObject} from '../../utils/QueryParser.util.js';

// loading components
import SearchServer from '../../client/components/searchpage/Search.server.js';
import {defaultLikes} from '../../client/components/Recommend/Recommendations.store.js';

import dbcMiddleware from './middleware.js';

MainRoutes.get('/', (req, res) => {
  const APPLICATION = req.app.get('APPLICATION');

  if (APPLICATION === 'pg') {
    res.redirect('/search');
  }
  else {
    res.set('Cache-Control', 'max-age=86400, s-maxage=86400, public');
    res.render('frontpage-mobilsoeg');
  }
});

MainRoutes.get(['/search', '/search/*'], (req, res) => {
  let query = req.query || [];
  query = query.text ? stringToObject(query) : [];

  let recommendations = {
    result: [],
    pending: false,
    info: {more: false}
  };

  function cbFunc(err, result, timeTaken) {
    if (result) {
      recommendations.result = result[0];
    }

    let properties = SearchServer({query, recommendations});
    res.set('Cache-Control', 'max-age=86400, s-maxage=86400, public');
    dbcMiddleware.renderPage(res, 'search', properties, timeTaken);
  }

  if (!isEmpty(query)) {
    cbFunc(null, null, 'call was deferred');
  }
  else {
    let promiseResponse = req.app.get('serviceProvider').trigger('getRecommendations', {likes: defaultLikes, dislikes: []});
    dbcMiddleware.setupSSR(req, res, promiseResponse, cbFunc);
  }
});

MainRoutes.get('/moreinfo/:restOfPath*', (req, res) => {
  http.get('http://moreinfo.addi.dk/' + req.params.restOfPath, (response) => {
    res.set('Cache-Control', 'max-age=86400, s-maxage=86400, public');
    response.pipe(res);
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
