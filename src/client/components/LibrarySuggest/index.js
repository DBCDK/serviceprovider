'use strict';

import ReactDOM from 'react-dom';
import LibrarySuggestContainerComponent from './LibrarySuggestContainer.component.js';

ReactDOM.render(
  <LibrarySuggestContainerComponent
    libraryData={window.libSuggestProps.libraryData || []}
    query={window.libSuggestProps.qObj || []} />,
  document.getElementById('search'),
  null
);
