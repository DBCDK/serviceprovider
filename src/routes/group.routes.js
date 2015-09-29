'use strict';

/**
 * @file
 * Configure group routes
 */

import express from 'express';
const GroupRoutes = express.Router();

GroupRoutes.get(['/'], (req, res) => {
  res.render('group_index', {});
});

export default GroupRoutes;
