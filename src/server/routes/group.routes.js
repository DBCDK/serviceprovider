'use strict';

/**
 * @file
 * Configure group routes
 */


import express from 'express';
const GroupRoutes = express.Router();

import React from 'react';
import GroupSearchContainerComponent from '../../client/components/GroupSearch/GroupSearchContainer.component.js';

import {stringToObject} from '../../utils/QueryParser.util.js';
import dbcMiddleware from './middleware.js';

GroupRoutes.get(['/search*'], (req, res) => {
  let query = req.query || [];
  let qObj = query.text ? stringToObject(query) : [];
  query = JSON.stringify(query);

  let promiseResponse = req.app.get('serviceProvider').trigger(
    'queryGroups', qObj.map((val) => {
      return val.value;
    }).join(' '), {request: req});

  dbcMiddleware.setupSSR(req, res, promiseResponse, (err, result) => {
    let groupData = result ? result[0].groups : [];
    let groupSearchString = React.renderToString(<GroupSearchContainerComponent groupData={groupData} query={qObj} />);
    res.render('group_index', {
      query: query,
      groupSearchProps: JSON.stringify({
        groupData: groupData,
        qObj
      }),
      groupSearchString: groupSearchString
    });
  });
});

GroupRoutes.get(['/post/:id'], (req, res) => {

});

GroupRoutes.get('/:id?', (req, res) => {
  var id = req.params.id;
  res.render('group', {id});
});

export default GroupRoutes;
