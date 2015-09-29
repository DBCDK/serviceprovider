'use strict';

import React from 'react';
import GroupSearchContainerComponent from './GroupSearchContainer.component.js';

React.render(
  <GroupSearchContainerComponent
    groupData={window.groupSearchProps.groupData || []}
    query={window.groupSearchProps.qObj || []} />,
  document.getElementById('search'),
  null
);
