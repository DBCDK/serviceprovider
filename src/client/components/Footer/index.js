'use strict';

/**
 * @file
 * This file is the entrypoint for the Footer component
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer.component.js';

const libraryData = (window.footerData && window.footerData.length > 0) ? JSON.parse(window.footerData) : '';

ReactDOM.render(
  <Footer libraryData={libraryData} />, document.getElementById('footer'), null
);
