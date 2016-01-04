'use strict';

/**
 * @file
 * Configure Event Page routes
 */

import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import EventItemPage from '../../client/components/Calendar/EventPageContainer.component.js';

export default express.Router().get(['/:id'], (req, res) => {
  const id = req.params.id;
  let contextObject = {
    content: '',
    data: '""',
    pagescript: 'event.js'
  };

  res.callServiceProvider('getEventById', {node: id}, 300).then((result) => {
    const news = result && result[0] || null;
    const data = {
      id: id,
      data: news
    };
    contextObject.data = JSON.stringify(data);
    contextObject.content = ReactDOM.renderToString(<EventItemPage {...data} />);
    res.render('page', contextObject);
  }, () => {
    res.render('page', contextObject);
  });
});
