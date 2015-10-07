'use strict';

import React from 'react';
import GroupPostContainerComponent from './GroupPostContainer.component.js';

React.render(
  <GroupPostContainerComponent
    groupId={window.groupId[0]}
    groupPostData={window.groupPostData}
    groupPostId={window.postId[0]} />,
  document.getElementById('post'),
  null
);
