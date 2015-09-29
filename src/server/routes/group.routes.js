'use strict';

/**
 * @file
 * Configure group routes
 */


import express from 'express';
const GroupRoutes = express.Router();

import {stringToObject} from '../../utils/QueryParser.util.js';

GroupRoutes.get(['/', '/search*'], (req, res) => {
  let query = req.query || [];
  let qObj = query.text ? stringToObject(query) : [];
  query = JSON.stringify(query);

  let gruppeData = [{ // Temp for testing
    name: 'Pony gruppen',
    timeCreated: '2015-09-29T11:21:26.000Z',
    id: 0
  }, {
    name: 'katte gruppen',
    timeCreated: '2015-09-29T11:21:26.000Z',
    id: 1
  }, {
    name: 'heste gruppen',
    timeCreated: '2015-09-29T11:21:26.000Z',
    id: 2
  }];

  res.render('group_index', {
    query: query,
    groupSearchProps: JSON.stringify({
      groupData: gruppeData,
      qObj
    })
  });
});

GroupRoutes.get('/:id?', (req, res) => {
  var id = req.params.id;
  res.render('group', {id});
});

export default GroupRoutes;
