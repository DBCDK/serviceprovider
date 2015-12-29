'use strict';

/**
 * @file
 * Configure work routes
 */

import React from 'react';
import ReactDOM from 'react-dom/server';

import express from 'express';
import {inHTMLData} from 'xss-filters';
const WorkRoutes = express.Router();

import dbcMiddleware from './../middlewares/middleware.js';

// Components
import workServer from '../../client/components/Work/Work.server';
import CoverImage from '../../client/components/CoverImage/CoverImageContainer.component';
import Order from '../../client/components/Order/Order.component';
import Receipt from '../../client/components/Receipt/Receipt.component';

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

    const image = <CoverImage pids={req.query.coverImageIds.split(',')} prefSize={'detail_500'} />;

    dbcMiddleware.renderPage(res, 'order', {
      query,
      pagescript: 'order.js',
      srrString: ReactDOM.renderToString(
        <Order coverImage={image} order={req.query} />)
    }, 'was not serverside');
  }
);

WorkRoutes.get(['/receipt', '/receipt/*'], (req, res) => {
  let query = req.query;
  query = JSON.stringify(query);
  dbcMiddleware.renderPage(res, 'receipt', {
    query,
    pagescript: 'receipt.js',
    ssrString: ReactDOM.renderToString(<Receipt receipt={req.query} />)
  }, 'was not serverside');
});

WorkRoutes.get(['/', '/*'], (req, res) => {
  // Start by getting id from request
  let id = inHTMLData(req.query.id);
  id = '"' + id + '"';

  let promiseResponse = req.app.get('serviceProvider').trigger(
    'getOpenSearchWork', {
      pid: req.query.id,
      offset: 1,
      worksPerPage: 1,
      allManifestations: true
    },
    res.locals
  );

  dbcMiddleware.setupSSR(req, res, promiseResponse, (err, result, serviceTime) => {
    if (err) {
      return dbcMiddleware.renderPage(res, 'work', {
        id,
        pagescript: 'work.js',
        ssrString: workServer({id}).work
      }, 'was too slow');
    }

    const workStr = workServer({
      id: id,
      work: result[0].work
    }).work;

    res.set('Cache-Control', 'max-age=86400, s-maxage=86400, public');
    dbcMiddleware.renderPage(res, 'work', {
      id,
      workString: workStr
    }, serviceTime);
  });
});

export default WorkRoutes;
