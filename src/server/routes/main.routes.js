'use strict';

/**
 * @file
 * Configure main routes
 * Includes utility routes (example: /moreinfo)
 */

import {isEmpty} from 'lodash';
import express from 'express';
const MainRoutes = express.Router();
import React from 'react';
import ReactDOM from 'react-dom/server';
import {inHTMLData} from 'xss-filters';

import {stringToObject} from '../../utils/QueryParser.util.js';

// loading components
import SearchServer from '../../client/components/searchpage/Search.server.js';
import {defaultLikes} from '../../client/components/Recommend/Recommendations.store.js';
import FrontpageContainer from '../../client/components/FrontPage/FrontpageContainer.component.js';

import dbcMiddleware from './../middlewares/middleware.js';

function getRecommendations(res, likes) {
  res.callServiceProvider('getRecommendations', {likes: likes, dislikes: []}, 50).then((recommendations) => {
    // got recommendations
    const content = ReactDOM.renderToString(<FrontpageContainer application='mobilsoeg' recommendations={recommendations} />);
    res.render('frontpage', {
      frontpageContainerString: content,
      recommendations: JSON.stringify(recommendations)
    });
  }, () => {
    // error occurred (most likely a timeout hit)
    res.render('frontpage');
  });
}

MainRoutes.get('/', dbcMiddleware.ssrMiddleware, (req, res) => {
  res.set('Cache-Control', 'max-age=86400, s-maxage=86400, public');

  if (req.isAuthenticated()) {
    // user is logged in, get profile.
    res.callServiceProvider('findMobilSoegProfile', null, 400).then((profile) => {
      let likes = profile[0].body.likes.map((like) => {
        return like.item_id;
      });

      likes = likes.length > 0 ? likes : defaultLikes;
      // got profile, get recommendations
      getRecommendations(res, likes);
    }, () => {
      res.render('frontpage');
    });
  }
  else {
    getRecommendations(res, defaultLikes);
  }
});

MainRoutes.get(['/search', '/search/*'], (req, res) => {
  let query = req.query || [];
  query = query.text ? stringToObject(query) : [];

  // pass input through XSS filter
  query[0].value = inHTMLData(query[0].value);
  query[0].index = inHTMLData(query[0].index);

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

MainRoutes.get('/socket-terminal', (req, res) => {
  res.render('socket-terminal', {});
});

export default MainRoutes;
