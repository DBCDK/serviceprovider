'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import GroupSearchContainerComponent from './GroupSearchContainer.component.js';

ReactDOM.render(
  <GroupSearchContainerComponent
    groupData={window.groupSearchProps.groupData || []}
    query={window.groupSearchProps.qObj || []} />,
  document.getElementById('search'),
  null
);
