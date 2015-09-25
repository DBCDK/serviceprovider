'use strict';

/**
 * @file
 * Configure work routes
 */

import React from 'react';

import express from 'express';
const WorkRoutes = express.Router();

import dbcMiddleware from './middleware.js';

import workServer from '../components/Work/Work.server.js';
import {Receipt, Order} from 'dbc-react-components';
import {CoverImage} from 'dbc-react-components';
import {rewriteCoverImageUrl} from '../utils/CoverImage.util.js';

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

    const image = <CoverImage pids={req.query.coverImageIds.split(',')} prefSize={'detail_500'} rewriteImgUrl={rewriteCoverImageUrl} />;

    res.render('order', {
      query,
      orderString: React.renderToString(<Order coverImage={image} order={req.query} />)
    });
  }
);

WorkRoutes.get(['/receipt', '/receipt/*'], (req, res) => {
  let query = req.query;
  query = JSON.stringify(query);
  res.render('receipt', {
    query,
    receiptString: React.renderToString(<Receipt receipt={req.query} />)
  });
});

WorkRoutes.get(['/', '/*'], (req, res) => {
  // Start by getting id from request
  let id = req.query.id;
  id = '"' + id + '"';

  let promiseResponse = req.app.get('serviceProvider').trigger(
    'getOpenSearchWork', {
      pid: req.query.id,
      offset: 1,
      worksPerPage: 1,
      allManifestations: true
    }
  );

  dbcMiddleware.setupSSR(req, res, promiseResponse, (err, result) => {
    if (err) {
      return res.render('work', {
        id,
        workString: workServer({id}).work
      });
    }

    let workStr = workServer({
      id: id,
      work: result[0]
    }).work;

    res.render('work', {
      id,
      workString: workStr
    });
  });
});

export default WorkRoutes;
