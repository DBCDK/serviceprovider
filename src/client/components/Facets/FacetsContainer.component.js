'use strict';

/**
 * @file
 * Facets component container for displaying facest based on query.
 */

import React from 'react';

import FacetsStore from './Facets.store.js';

import FacetsResult from './FacetsResult.component.js';
import ToggleButton from '../ToggleButton.component.js';

class FacetsContainer extends React.Component {

  constructor() {
    super();

    this.onUpdateFacets = this.onUpdateFacets.bind(this);

    this.state = {
      facets: []
    };

    this.unsubscribe = FacetsStore.listen(this.onUpdateFacets);

    this.state.isExpanded = {};
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onUpdateFacets(store) {
    this.setState({facets: store.facets});
  }

  toggleFacets(key) {
    const isExpanded = this.state.isExpanded;
    isExpanded[key] = !this.state.isExpanded[key];
    this.setState({isExpanded});
  }

  renderFacetsResult() {
    let facets = null;
    if (this.state.facets) {
      facets = this.state.facets;
    }

    const isCollapsed = !this.state.isExpanded.facets;

    const toggleFunc = this.toggleFacets.bind(this, 'facets');

    const arrows = <ToggleButton collapsed={isCollapsed} toggleDisplay={toggleFunc} />;

    const facetsClass = (isCollapsed === true) ? 'facets collapsed' : 'facets';

    return (
      <div className="facets-container small-24 columns">
        <h2 className="facets-header" onClick={toggleFunc}>Afgræns din søgning</h2>
        {arrows}
        <FacetsResult className={facetsClass} facets={facets} />
      </div>
    );
  }

  render() {
    const result = this.state.facets && this.state.facets.length && this.renderFacetsResult() || '';

    return (
      <div className='facet-result row' >
        <div className='small-24 columns'>
          {result}
        </div>
      </div>
    );
  }

}

FacetsContainer.displayName = 'FacetsContainer.component';

export default FacetsContainer;
