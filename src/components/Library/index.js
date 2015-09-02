'use strict';

import React from 'react';
import Library from './Library.component.js';

if (window.LIBRARY_ID && window.LIBRARY_ID !== 'undefined') {
  React.render(<Library id={window.LIBRARY_ID} />, document.getElementById('library-container'));
}
else {
  // Render error
  React.render(
    (<div>
      Fejl! Vi kunne ikke finde det bibliotek du leder efter.
    </div>),
    document.getElementById('library-container')
  );
}


