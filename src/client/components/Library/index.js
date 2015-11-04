'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Library from './Library.component.js';
import Message from '../message/Message.component.js';

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

ReactDOM.render(<Message />, document.getElementById('message'));
