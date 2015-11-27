'use strict';

import React, {PropTypes} from 'react';

// Layouts

import FrontPageLayoutMobilsoeg from './FrontPageLayout.component.js';

export default class FrontpageContainer extends React.Component {
  render() {
    return <FrontPageLayoutMobilsoeg />;
  }
}

FrontpageContainer.displayName = 'FrontpageContainer';
FrontpageContainer.propTypes = {
  application: PropTypes.string.isRequired
};
