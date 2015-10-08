'use strict';

import ReactDOM from 'react-dom';
import GroupPostContainerComponent from './GroupPostContainer.component.js';

ReactDOM.render(
  <GroupPostContainerComponent
    groupId={window.groupId[0]}
    groupPostData={window.groupPostData}
    groupPostId={window.postId[0]} />,
  document.getElementById('post'),
  null
);
