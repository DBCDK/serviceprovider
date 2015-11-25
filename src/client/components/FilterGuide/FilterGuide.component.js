'use strict';

/**
 * @file
 * Create a List of words for filtering the searchresult
 */

import React from 'react';
import FilterGuideList from './FilterGuideList.component.js';

const FilterGuide = React.createClass({
  displayName: 'FilterGuide',

  propTypes: {
    categories: React.PropTypes.array.isRequired,
    select: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <div className='filterguide-wrapper' >
        <div className='filterguide' >
          <FilterGuideList {...this.props}/>
        </div>
      </div>
    );
  }
});

export default FilterGuide;
