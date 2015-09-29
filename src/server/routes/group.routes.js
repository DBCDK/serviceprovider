'use strict';

/**
 * @file
 * Configure group routes
 */


import express from 'express';
const GroupRoutes = express.Router();

GroupRoutes.get(['/', '/search*'], (req, res) => {
  res.render('group_index', {groupSearchProps: JSON.stringify({groupData: [
    {
      name: 'Pony gruppen',
      timeCreated: '2015-09-29T11:21:26.000Z',
      id: 0
    },
    {
      name: 'katte gruppen',
      timeCreated: '2015-09-29T11:21:26.000Z',
      id: 1
    },
    {
      name: 'heste gruppen',
      timeCreated: '2015-09-29T11:21:26.000Z',
      id: 2
    }
  ]})});
});

GroupRoutes.get('/:id?', (req, res) => {
  var id = req.params.id;
  res.render('group', {id});
});

export default GroupRoutes;
