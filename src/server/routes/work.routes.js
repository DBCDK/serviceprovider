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
import CoverImage from '../../client/components/CoverImage/CoverImageContainer.component';
import Order from '../../client/components/Order/Order.component';
import Receipt from '../../client/components/Receipt/Receipt.component';
import WorkContainer from '../../client/components/Work/WorkContainer.container.component';
import WorkLayout from '../../client/components/Work/WorkLayout.component';

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

WorkRoutes.get(['/', '/*'], dbcMiddleware.cacheMiddleware, (req, res) => {
  // Start by getting id from request
  let id = inHTMLData(req.query.id);
  id = '"' + id + '"';

  let contextObject = {
    id: id,
    pagescript: 'work.js',
    ssrString: '',
    data: '""'
  };

  res.callServiceProvider('getOpenSearchWork', {
    pid: req.query.id,
    offset: 1,
    worksPerPage: 1,
    allManifestations: true
  }, 300).then((result) => {
    let work = {
      brief: {},
      result: result[0].work,
      info: result[0].info,
      error: result[0].error
    };

    contextObject.data = '\'' + JSON.stringify(work) + '\'';
    contextObject.ssrString = ReactDOM.renderToString(<WorkContainer id={id} work={work} workLayout={WorkLayout} />);
    res.render('work', contextObject);
  }, () => {
    contextObject.ssrString = ReactDOM.renderToString(<WorkContainer id={req.query.id} workLayout={WorkLayout} />);
    res.render('work', contextObject);
  });
});

export default WorkRoutes;
