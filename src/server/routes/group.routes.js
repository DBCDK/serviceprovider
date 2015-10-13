'use strict';

/**
 * @file
 * Configure group routes
 */

import express from 'express';
const GroupRoutes = express.Router();

import React from 'react';
import ReactDOM from 'react-dom/server';
import GroupSearchContainerComponent from '../../client/components/Group/Search/GroupSearchContainer.component.js';
import GroupPostComponent from '../../client/components/Group/Post/GroupPost.component.js';

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

  dbcMiddleware.setupSSR(req, res, promiseResponse, (err, result, serviceTime) => {
    let groupData = result ? result[0].groups : [];
    let groupSearchString = ReactDOM.renderToString(
      <GroupSearchContainerComponent groupData={groupData} query={qObj} />);
    dbcMiddleware.renderPage(res, 'group_index', {
      query: query,
      groupSearchProps: JSON.stringify({
        groupData: groupData,
        qObj
      }),
      groupSearchString: groupSearchString
    }, serviceTime);
  });
});

GroupRoutes.get(['/:groupId/post/:id'], (req, res) => {
  let promiseResponse = req.app.get('serviceProvider').trigger('getGroupPost', req.params.id, {request: req});

  dbcMiddleware.setupSSR(req, res, promiseResponse, (err, result, serviceTime) => {
    let groupPostData = result ? result[0] : {};
    let groupPostString = ReactDOM.renderToString(
      <GroupPostComponent groupId={parseInt(req.params.groupId, 10)}
                          groupPostData={groupPostData}
                          groupPostId={parseInt(req.params.id, 10)} />);
    dbcMiddleware.renderPage(res, 'group_post_view', {
      groupId: req.params.groupId,
      id: req.params.id,
      groupPostData: JSON.stringify(groupPostData),
      groupPostString: groupPostString
    }, serviceTime);
  });
});

GroupRoutes.get('/create', dbcMiddleware.ensureAuthenticated, (req, res) => {
  res.render('group', {});
});

GroupRoutes.get('/:id', (req, res) => {
  var id = req.params.id;
  res.render('group', {id});
});

export default GroupRoutes;
