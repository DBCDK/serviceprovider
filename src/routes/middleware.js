'use strict';

/**
 * @file
 * Collection of middleware functions
 */
const loginUrl = '/profile/login';

/*
 * @function
 * Middleware which lets you carry on if you're logged in, else it redirects you to the login page
 */
function ensureAuthenticated (req, res, next) {
  if (req.isAuthenticated()) {
    // the user is logged in
    return next();
  }

  // send user to login otherwise
  res.redirect(loginUrl);
}

/*
 * @function
 * Middleware which takes a destination (String) as a parameter
 * If the string is not set, it falls back to original URL.
 * returns a middleware function which redirects you, yo the destination once you're logged in
 */
function redirectWhenLoggedIn (destination) {
  return (req, res, next) => {
    if (req.isAuthenticated()) {
      if (destination) {
        res.redirect(destination);
      }

      return next();
    }

    req.session.returnTo = destination ? destination : req.originalUrl;
    res.redirect(loginUrl);
  };
}

/*
 * @function
 * Middleware which gets your destination from a callback (that has to return a string)
 * callback gets called the request and response
 */
function redirectToCallbackWhenLoggedIn (cb, alwaysRedirect) {
  return (req, res, next) => {
    if (req.isAuthenticated()) {
      if (alwaysRedirect) {
        res.redirect(cb(req, res));
      }

      return next();
    }

    req.session.returnTo = cb(req, res);
    res.redirect(loginUrl);
  };
}

const dbcMiddleware = {
  ensureAuthenticated: ensureAuthenticated,
  redirectWhenLoggedIn: redirectWhenLoggedIn,
  redirectToCallbackWhenLoggedIn: redirectToCallbackWhenLoggedIn
};

export default dbcMiddleware;
