'use strict';

/**
 * @file
 * Configure work routes
 */

import express from 'express';
const LibraryRoutes = express.Router();

import React from 'react';
import ReactDOM from 'react-dom/server';

import LibraryAffiliateList from '../../client/components/LibraryAffiliateList/LibraryAffiliateList.component';

LibraryRoutes.get(['/'], (req, res) => {
  let contextObject = {
    content: '',
    data: '""',
    pagescript: 'libraries.js'
  };

  res.callServiceProvider('getAllAffiliates', {}, 300).then((libraries) => {
    // got libraries
    contextObject.content = ReactDOM.renderToString(<LibraryAffiliateList affiliatesData={libraries} />);
    contextObject.data = '\'' + JSON.stringify(libraries) + '\'';
    res.render('page', contextObject);
  }, () => {
    // error occurred (most likely a timeout hit)
    res.render('page', contextObject);
  });
});

export default LibraryRoutes;
