'use strict';
/**
 * @file
 * Load a news page component into the #page dom element. If page data exists on the window object,
 * it is added as properties
 */

import ReactDOM from 'react-dom';
import React from 'react';
import NewsPage from './NewsPageContainer.component.js';

ReactDOM.render(<NewsPage {...window.PAGE_DATA} />, document.getElementById('page'));
