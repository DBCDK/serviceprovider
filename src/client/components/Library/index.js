'use strict';

import ReactDOM from 'react-dom';
import Library from './Library.component.js';

if (window.LIBRARY_ID && window.LIBRARY_ID !== 'undefined') {
  ReactDOM.render(<Library id={window.LIBRARY_ID} libData={window.LIBDATA} />, document.getElementById('library-container'));
}
else {
  // Render error
  ReactDOM.render(
    (<div>
      Fejl! Vi kunne ikke finde det bibliotek du leder efter.
    </div>),
    document.getElementById('library-container')
  );
}


