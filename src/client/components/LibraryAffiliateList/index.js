'use strict';

/**
 * @file
 * This file is the entrypoint for the LibraryAffiliateList component
 */

import React from 'react';
import ReactDOM from 'react-dom';
import LibraryAffiliateList from './LibraryAffiliateList.component';

let affiliatesData;
if (window.PAGE_DATA.length > 0) {
  affiliatesData = JSON.parse(window.PAGE_DATA);
}

ReactDOM.render(<LibraryAffiliateList affiliatesData={affiliatesData} />, document.getElementById('page'), null);
