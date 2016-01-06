'use strict';

/**
 * @file
 * This file is the entrypoint for the Footer component
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer.component.js';

// Create variable libraryData first, get footerData from localStorage for future reference.
let libraryData = {};
const localData = localStorage.getItem('footerData');

// If footerData was sent from server, update localStorage
if (window.footerData && window.footerData.length > 0) {
  localStorage.setItem('footerData', window.footerData);
  libraryData = JSON.parse(window.footerData);
}

// If no footerData was sent from server, try and use data in localStorage
else if (localData) {
  libraryData = JSON.parse(localData);
}

// Render the component.
ReactDOM.render(
  <Footer libraryData={libraryData} />, document.getElementById('footer'), null
);
