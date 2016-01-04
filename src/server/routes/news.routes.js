'use strict';

/**
 * @file
 * Configure News Page routes
 */

import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import NewsItemPage from '../../client/components/News/NewsPageContainer.component.js';

export default express.Router().get(['/:id'], (req, res) => {
  const id = req.params.id;
  let contextObject = {
    content: '',
    data: '""',
    pagescript: 'news.js'
  };

  res.callServiceProvider('getNewsById', {node: id}, 300).then((result) => {
    const news = result && result[0] || null;
    const data = {
      id: id,
      data: news
    };
    contextObject.data = JSON.stringify(data);
    contextObject.content = ReactDOM.renderToString(<NewsItemPage {...data} />);
    res.render('page', contextObject);
  }, () => {
    res.render('page', contextObject);
  });
});
