'use strict';

/**
 * @file Main autocomplete component
 */

import React from 'react';
import {forIn} from 'lodash';
import AutoCompleteCategory from './AutoCompleteCategory.component.js';

const AutoComplete = React.createClass({
  displayName: 'AutoCompleteContainer.component',

  propTypes: {
    data: React.PropTypes.object,
    errormessage: React.PropTypes.string,
    visible: React.PropTypes.bool
  },

  /*
   * Retrieves the categories from the data prop and renders a
   * AutoCompleteCategory for each category.
   *
   * @return {Array}
   */
  getCategories() {
    let categories = [];
    const data = this.props.data || {};

    forIn(data, (value, key) => {
      categories.splice(value.weight, 0,
        <AutoCompleteCategory data={value.data} key={key} label={value.label} />);
    });

    return categories;
  },

  render() {
    const categories = this.getCategories();
    let classNames = 'autocomplete--container';
    classNames += this.props.visible === true ? '' : ' autocomplete--container-hidden';
    let htmlToRender = '';

    if (categories.length === 0) {
      htmlToRender = (
        <div className={classNames} >
        <div className='autocomplete--category--label-container' >
          <span className='autocomplete--category--label' >{this.props.errormessage}</span>
        </div>
      </div>
      );
    }
    else {
      htmlToRender = (
        <div className={classNames} >
          {categories}
        </div>
      );
    }

    return htmlToRender;
  }
});

export default AutoComplete;
