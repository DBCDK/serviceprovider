'use strict';

/**
 * @file
 * Collection of middleware functions
 */
const loginUrl = '/profile/login';
import * as logger from 'dbc-node-logger';
import {isArray} from 'lodash';

import React from 'react';
import ReactDOM from 'react-dom/server';


/*
 * @function
 * Middleware which lets you carry on if you're logged in, else it redirects you to the login page
 */
function ensureAuthenticated(req, res, next) {
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
function redirectWhenLoggedIn(destination) {
  return (req, res, next) => {
    if (req.isAuthenticated()) {
      if (destination && destination !== req.originalUrl) {
        return res.redirect(destination);
      }

      return next();
    }

    req.session.returnTo = destination ? destination : req.originalUrl;
    return res.redirect(loginUrl);
  };
}

/*
 * @function
 * Middleware which gets your destination from a callback (that has to return a string)
 * callback gets called the request and response
 */
function redirectToCallbackWhenLoggedIn(cb, alwaysRedirect) {
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

function setupTimeouts(req, res, timeout, cb) {
  if (req.query.ssrTimeout) {
    timeout = req.query.ssrTimeout;
  }

  setTimeout(() => { // If we cant respond within the timeout, just send what we have
    if (!res.headersSent) {
      cb('Couldn\'t respond in time', null, 'did not respond in time');
    }
  }, timeout);
}

function ssrPromiseFunction(res, promiseResponse, cb) {
  const before = Date.now();
  Promise.all(promiseResponse).then((result) => { // If the promise is resolved, render the react component with the data
    if (!res.headersSent) {
      // Callback only gets called if the response isn't already underway
      // cb (error, response)
      cb(null, result, 'responded in: ' + (Date.now() - before) + 'ms');
    }
  }, (err) => { // If the promise is rejected, render the template without data and send it
    logger.error('Error in SSR: Promise was rejected', err);
    if (!res.headersSent) { // _httpMessage becomes null when request is sent
      cb(err, null, 'responded in: ' + (Date.now() - before) + 'ms');
    }
  });
}

function setupSSR(req, res, promiseResponse, cb) {
  setupTimeouts(req, res, 50, cb);
  ssrPromiseFunction(res, promiseResponse, cb);
}

function renderPage(res, template, properties, serviceTime, fn) {
  const beforeTime = Date.now();
  res.render(template, properties, (err, html) => {
    html = html.replace('%RENDERTIME%', Date.now() - beforeTime).replace('%SERVICETIME%', serviceTime);
    if (fn) {
      fn(err, html);
    }
    else {
      res.send(html);
    }
  });
}

function ssrMiddleware(req, res, next) {
  let serviceTime = ['responded in: '];
  let _render = res.render;
  res.render = (view, options, fn) => {
    res.render = _render;
    renderPage(res, view, options, serviceTime.join(', '), fn);
  };

  let ssrTimeout = req.query.ssrTimeout;
  let serviceProvider = req.app.get('serviceProvider');
  res.ssrPromiseTimerFunction = (promiseArray, timeout) => {
    if (ssrTimeout) {
      timeout = ssrTimeout;
    }

    return new Promise((resolve, reject) => {
      let sent = false;
      let timer = setTimeout(() => {
        if (!sent) {
          sent = true;
          serviceTime.push('did not respond in time');
          reject(serviceTime);
        }
      }, timeout);

      promiseArray = isArray(promiseArray) ? promiseArray : [promiseArray];
      const beforeTime = Date.now();
      Promise.all(promiseArray).then((result) => {
        if (!sent) {
          sent = true;
          serviceTime.push((Date.now() - beforeTime) + 'ms');
          clearTimeout(timer);
          resolve(result);
        }
      }, (err) => {
        sent = true;
        serviceTime = ['failed'];
        clearTimeout(timer);
        reject(err);
      });
    });
  };

  res.callServiceProvider = (event, query, timeout) => {
    timeout = timeout ? timeout : 200;

    let connection = {
      request: {
        session: req.session
      },
      libdata: res.locals.libdata
    };

    return res.ssrPromiseTimerFunction(serviceProvider.trigger(event, query, connection), timeout);
  };

  next();
}

/**
 * Middleware to prerender the dynamic content in the footer
 * @param req
 * @param res
 * @param next
 */
function ssrFooter (req, res, next) {
  // Race the serviceprovider against a timeout, which rejects (and therefore makes sure the resolve is only called with the library results)
  Promise.race([res.callServiceProvider('getAllAffiliates', {}, 1000), new Promise((resolve, reject) => {
    setTimeout(() => reject(false), 200);
  })]).then((libraries) => {
    if (libraries) {
      res.locals.footerData = JSON.stringify({libraries: libraries});
      //res.locals.footerString = ReactDOM.renderToString(<Footer libraryData={{libraries: libraries}} />);
    }
    next();
  }, () => next()); // On reject, just call next function
}


/**
 * Middleware to prerender the header
 * @param req
 * @param res
 * @param next
 */
function ssrHeader (req, res, next) {
  // res.locals.headerString = ReactDOM.renderToString(<Header/>);
  next();
}

/**
 * Set a cache header and calls next
 * @param req
 * @param res
 * @param next
 */
function cacheMiddleware(req, res, next) {
  res.set('Cache-Control', 'max-age=86400, s-maxage=86400, public');
  next();
}

const dbcMiddleware = {
  ensureAuthenticated: ensureAuthenticated,
  redirectWhenLoggedIn: redirectWhenLoggedIn,
  redirectToCallbackWhenLoggedIn: redirectToCallbackWhenLoggedIn,
  setupSSR: setupSSR,
  renderPage: renderPage,
  ssrMiddleware: ssrMiddleware,
  ssrFooter: ssrFooter,
  ssrHeader: ssrHeader,
  cacheMiddleware: cacheMiddleware
};

export default dbcMiddleware;
