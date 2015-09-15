'use strict';

/**
 * @file
 * Collection of middleware functions
 */

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

const dbcMiddleware = {
  ensureAuthenticated: ensureAuthenticated
};

export default dbcMiddleware;
