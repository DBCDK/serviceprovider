'use strict';

/**
 * @file
 * Configure work routes
 */

import express from 'express';
const WorkRoutes = express.Router();

function ensureAuthenticated (req, res, next) {
  if (req.isAuthenticated()) {
    // the user is logged in
    req.session.returnTo = req.originalUrl;
    return next();
  }

  if (req.query.ids) {
    const rt = req.query.ids.split(',');
    req.session.returnTo = '/work?id=' + rt[0];
  }
  // send user to login otherwise
  res.redirect('/login');
}

WorkRoutes.get(['/work', '/work/*'], (req, res) => {
  let id = req.query.id;
  id = '"' + id + '"';
  res.render('work', {id});
});

WorkRoutes.get(['/order', '/order*'], ensureAuthenticated, (req, res) => {
  let query = req.query;
  query = JSON.stringify(query);
  res.render('order', {query});
});

WorkRoutes.get(['/receipt', '/receipt/*'], (req, res) => {
  let query = req.query;
  query = JSON.stringify(query);
  res.render('receipt', {query});
});

export default WorkRoutes;
