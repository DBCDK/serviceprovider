'use strict';

/**
 * @file
 * Configure work routes
 */

import express from 'express';
const WorkRoutes = express.Router();

import dbcMiddleware from './middleware.js';

WorkRoutes.get(
  ['/order', '/order*'],
  dbcMiddleware.redirectToCallbackWhenLoggedIn(
    (req) => {
      // Redirect destination callback
      if (req.query.ids) {
        const rt = req.query.ids.split(',');
        return '/work?id=' + rt[0];
      }

      // if the if fails, just fall back to original url
      return req.originalUrl;
    }
  ),
  (req, res) => {
    let query = req.query;
    query = JSON.stringify(query);
    res.render('order', {query});
  }
);

WorkRoutes.get(['/receipt', '/receipt/*'], (req, res) => {
  let query = req.query;
  query = JSON.stringify(query);
  res.render('receipt', {query});
});

WorkRoutes.get(['/', '/*'], (req, res) => {
  let id = req.query.id;
  id = '"' + id + '"';
  res.render('work', {id});
});

export default WorkRoutes;
