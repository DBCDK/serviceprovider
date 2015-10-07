'use strict';

/**
 * @file
 * Configure work routes
 */

import express from 'express';
const LibraryRoutes = express.Router();

import React from 'react';

import dbcMiddleware from './middleware.js';
import {stringToObject} from '../../utils/QueryParser.util.js';

import Library from '../../client/components/Library/Library.component.js';
import LibrarySuggestContainerComponent from '../../client/components/LibrarySuggest/LibrarySuggestContainer.component.js';

LibraryRoutes.get(['/suggest', '/suggest/*'], (req, res) => {
  let query = req.query;
  query = JSON.stringify(query);

  let qObj = req.query.text ? stringToObject(req.query) : [];

  let promiseResponse = req.app.get('serviceProvider').trigger(
    'searchOpenAgency', qObj.map((val) => {
      return val.value;
    }).join(' '));

  dbcMiddleware.setupSSR(req, res, promiseResponse, (err, result) => {
    let libraryData = result ? result[0].agencies : [];
    let libSuggestString = React.renderToString(<LibrarySuggestContainerComponent libraryData={libraryData} query={qObj} />);

    res.set('Cache-Control', 'max-age=86400, s-maxage=86400, public');
    res.render('library_suggest', {query, libSuggestString, libSuggestProps: JSON.stringify({libraryData, qObj})});
  });
});

LibraryRoutes.get(['/', '/*'], (req, res) => {
  let id = req.query.id;
  id = '"' + id + '"';

  let promiseResponse = req.app.get('serviceProvider').trigger('getOpenAgency', req.query.id);

  dbcMiddleware.setupSSR(req, res, promiseResponse, (err, result) => {
    let libData = result ? result[0] : null;
    let libString = React.renderToString(<Library id={id} libData={libData} />);

    res.set('Cache-Control', 'max-age=86400, s-maxage=86400, public');
    res.render('library', {id, libString, libData: JSON.stringify(libData)});
  });
});

export default LibraryRoutes;
