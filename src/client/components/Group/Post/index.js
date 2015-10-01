'use strict';

import React from 'react';
import GroupPostComponent from './GroupPost.component.js';

React.render(
  <GroupPostComponent
    groupId={window.groupId[0]}
    groupPostData={window.groupPostData}
    groupPostId={window.postId[0]} />,
  document.getElementById('post'),
  null
);
