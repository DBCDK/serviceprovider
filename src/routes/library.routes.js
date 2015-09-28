'use strict';

/**
 * @file
 * Configure work routes
 */

import express from 'express';
const LibraryRoutes = express.Router();

import React from 'react';

import dbcMiddleware from './middleware.js';
import {stringToObject} from '../utils/QueryParser.util.js';

import Library from '../components/Library/Library.component.js';
import LibrarySuggestContainerComponent from '../components/LibrarySuggest/LibrarySuggestContainer.component.js';

LibraryRoutes.get(['/suggest', '/suggest/*'], (req, res) => {
  let query = req.query;
  query = JSON.stringify(query);

  let qObj = req.query.text ? stringToObject(req.query) : [];

  let promiseResponse = req.app.get('serviceProvider').trigger(
    'searchOpenAgency', qObj.map((val) => {
      return val.value;
    }).join(' '));

  dbcMiddleware.setupSSR(req, res, promiseResponse, (err, result) => {
    let libSuggestString = React.renderToString(<LibrarySuggestContainerComponent libraryData={result ? result[0].agencies : []} query={qObj} />);
    res.render('library_suggest', {query, libSuggestString});
  });
});

LibraryRoutes.get(['/', '/*'], (req, res) => {
  let id = req.query.id;
  id = '"' + id + '"';

  let promiseResponse = req.app.get('serviceProvider').trigger('getOpenAgency', req.query.id);

  dbcMiddleware.setupSSR(req, res, promiseResponse, (err, result) => {
    let libString = React.renderToString(<Library id={id} libData={result ? result[0] : null} />);
    res.render('library', {id, libString});
  });
});

export default LibraryRoutes;
