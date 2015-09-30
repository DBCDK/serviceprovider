'use strict';

/**
 * @file
 * Configure group routes
 */


import express from 'express';
const GroupRoutes = express.Router();

import {stringToObject} from '../../utils/QueryParser.util.js';

GroupRoutes.get(['/search*'], (req, res) => {
  let query = req.query || [];
  let qObj = query.text ? stringToObject(query) : [];
  query = JSON.stringify(query);

  res.render('group_index', {
    query: query,
    groupSearchProps: JSON.stringify({
      groupData: [],
      qObj
    })
  });
});

GroupRoutes.get('/:id?', (req, res) => {
  var id = req.params.id;
  res.render('group', {id});
});

export default GroupRoutes;
