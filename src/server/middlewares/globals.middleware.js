'use strict';

/**
 * @file
 * Middleware for setting global variables that should accessible in the
 * browser, optioanlly through the global window object
 */

/**
 * Sets the isLoggedIn variable (bool) depending on the users current status.
 * The variable is used to set the global window.USER_IS_LOGGED_IN in the
 * browser.
 *
 * @param {Object}req
 * @param {Object} res
 * @param {Function} next
 */
export function GlobalsMiddleware(req, res, next) {
  res.locals.isLoggedIn = req.isAuthenticated();
  next();
}
