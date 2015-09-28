'use strict';

import React from 'react';
import LibrarySuggestContainerComponent from './LibrarySuggestContainer.component.js';

React.render(
  <LibrarySuggestContainerComponent
    libraryData={window.libSuggestProps.libraryData || []}
    query={window.libSuggestProps.qObj || []} />,
  document.getElementById('search'),
  null
);
