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
import WorkContainer from '../../client/components/Work/WorkContainer.container.component';
import WorkLayout from '../../client/components/Work/WorkLayout.component';

WorkRoutes.get(['/order/:id'], dbcMiddleware.redirectWhenLoggedIn(false), (req, res) => {
  const id = req.params.id;
  let contextObject = {
    pagescript: 'order.js',
    content: '',
    data: '""'
  };

  res.callServiceProvider('getOpenSearchWorkBriefDisplay', {pid: id}, 30000).then((response) => {
    let pagedata = {
      q: id,
      work: response[0].work,
      pickupAgency: req.user.profile.pickup_agency ? req.user.profile.pickup_agency : req.user.agencyid
    };

    contextObject.data = '\'' + JSON.stringify(pagedata) + '\'';

    const image = <CoverImage pids={pagedata.q} prefSize={'detail_500'} />;
    contextObject.content = ReactDOM.renderToString(
      <Order coverImage={image} order={pagedata.work} orderId={pagedata.q} pickupAgency={pagedata.pickupAgency} />);

    res.render('page', contextObject);
  }, () => {
    res.status(500);
    res.render('error', {errorImage: '', errortext: 'Der skete en fejl under indlæsningen af dette værk, prøv igen senere.'});
  });
});

WorkRoutes.get(['/receipt/:id'], dbcMiddleware.redirectToCallbackWhenLoggedIn((req) => {
  return '/work/order/' + req.params.id;
}, false), (req, res) => {
  const id = req.params.id;
  let contextObject = {
    pagescript: 'receipt.js',
    content: '',
    data: '""'
  };

  let pickupAgency = req.user.profile.pickup_agency ? req.user.profile.pickup_agency : req.user.agencyid;

  Promise.all([
    res.callServiceProvider('getOpenSearchWorkBriefDisplay', {pid: id}, 30000),
    res.callServiceProvider('getOpenAgency', pickupAgency, 30000)
  ]).then((response) => {
    let pagedata = {
      q: id,
      work: response[0][0].work,
      pickupAgency: pickupAgency,
      pickupAgencyTitle: response[1][0].branchNameDan
    };

    contextObject.data = '\'' + JSON.stringify(pagedata) + '\'';
    res.render('page', contextObject);
  }, () => {
    res.status(500);
    res.render('error', {errorImage: '', errortext: 'Der skete en fejl under indlæsningen af dette værk, prøv igen senere.'});
  });
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
    contextObject.ssrString = ReactDOM.renderToString(<WorkContainer id={req.query.id} work={work} workLayout={WorkLayout} />);
    res.render('work', contextObject);
  }, () => {
    contextObject.ssrString = ReactDOM.renderToString(<WorkContainer id={req.query.id} workLayout={WorkLayout} />);
    res.render('work', contextObject);
  });
});

export default WorkRoutes;
