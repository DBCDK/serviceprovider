'use strict';

/**
 * @file
 * It's a back button!
 */

import React from 'react';
import {goBack} from '../../../utils/Navigation.util.js';

class BackButton extends React.Component {


  render() {
    return (
      <div className='back-button'>
        <a onClick={goBack} ><image src='/icons/back-alt.svg'/></a>
      </div>
    );
  }
}

BackButton.displayName = 'BackButton';

export default BackButton;
