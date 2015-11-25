'use strict';

/**
 * @file
 * Render an element for a Filterguide list
 */

import React from 'react';

const FilterGuideListElement = React.createClass({
  displayName: 'FilterGuideListElement',

  propTypes: {
    element: React.PropTypes.object.isRequired,
    select: React.PropTypes.func.isRequired
  },

  onClick(element, event) {
    event.preventDefault();
    this.props.select(element);
  },

  render() {
    const {element} = this.props;
    let cssClassname = element.cssClass ? 'element-label-' + element.cssClass + ' ' : '';
    cssClassname += 'element-label button';
    return (
      <li className='filterguide-list-element'>
        <a className={cssClassname} href='#' onClick={this.onClick.bind(null, element)} >{element.displayValue || element.value}</a>
      </li>
    );
  }
});

export default FilterGuideListElement;
