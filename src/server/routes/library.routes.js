'use strict';

/**
 * @file
 * Configure work routes
 */

import express from 'express';
const LibraryRoutes = express.Router();

LibraryRoutes.get(['/'], (req, res) => {
  res.render('page', {
    content: 'wut',
    data: '""',
    pagescript: 'libraries.js'
  });
});

export default LibraryRoutes;
