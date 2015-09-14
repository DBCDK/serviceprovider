'use strict';

/**
 * @file
 * Configure work routes
 */

import express from 'express';
const LibraryRoutes = express.Router();

LibraryRoutes.get(['/suggest', '/suggest/*'], (req, res) => {
  let query = req.query;
  query = JSON.stringify(query);
  res.render('library_suggest', {query});
});

LibraryRoutes.get(['/', '/*'], (req, res) => {
  let id = req.query.id;
  id = '"' + id + '"';
  res.render('library', {id});
});

export default LibraryRoutes;
