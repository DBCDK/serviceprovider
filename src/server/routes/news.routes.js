'use strict';

/**
 * @file
 * Configure News Page routes
 */

import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import dbcMiddleware from '../middlewares/middleware.js';
import NewsItemPage from '../../client/components/News/NewsPageContainer.component.js';

export default express.Router().get(['/:id'], (req, res) => {
  const id = req.params.id;
  const pagescript = 'news.js';
  let promiseResponse = req.app.get('serviceProvider').trigger('getNewsById', {node: id});
  dbcMiddleware.setupSSR(req, res, promiseResponse, (err, result, serviceTime) => {
    const news = result && result[0] || null;
    const data = {
      id: id,
      data: news
    };
    const content = ReactDOM.renderToString(<NewsItemPage {...data} />);
    res.set('Cache-Control', 'max-age=86400, s-maxage=86400, public');
    dbcMiddleware.renderPage(res, 'page', {content, pagescript, data: JSON.stringify(data)}, serviceTime);
  });
});
