'use strict';

import React, {PropTypes} from 'react';

// Layouts
import FrontPageLayoutMobilsoeg from './FrontPageLayout.mobilsoeg.component';

export default class FrontpageContainer extends React.Component {
  render() {
    const layoutComponent = this.props.application === 'mobilsoeg' ? <FrontPageLayoutMobilsoeg /> : <FrontPageLayoutMobilsoeg />;
    return layoutComponent;
  }
}

FrontpageContainer.displayName = 'FrontpageContainer';
FrontpageContainer.propTypes = {
  application: PropTypes.string.isRequired
};
