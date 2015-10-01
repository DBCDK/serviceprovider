'use strict';

import React from 'react';
import GroupPostComponentContainer from './GroupPostContainer.component.js';

React.render(
  <GroupPostComponentContainer
    groupId={window.groupId[0]}
    groupPostData={window.groupPostData}
    groupPostId={window.postId[0]} />,
  document.getElementById('post'),
  null
);
