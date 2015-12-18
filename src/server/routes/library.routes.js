'use strict';

/**
 * @file
 * Configure work routes
 */

import express from 'express';
const LibraryRoutes = express.Router();

import React from 'react';
import ReactDOM from 'react-dom/server';

import dbcMiddleware from './../middlewares/middleware.js';

LibraryRoutes.get(['/'], (req, res) => {
  res.render('page', {
    content: 'wut',
    // data: "JSON.parse('"+JSON.stringify(wup)+"')",
    data: '""',
    pagescript: 'libraries.js'
  });
});

export default LibraryRoutes;
