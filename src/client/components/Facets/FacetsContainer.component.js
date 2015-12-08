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

    FacetsStore.listen(this.onUpdateFacets);

    this.state.isExpanded = {};
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
      <div className="facets-container">
        <h2 className="facets-header" onClick={toggleFunc}>Afgræns din søgning</h2>
        {arrows}
        <FacetsResult className={facetsClass} facets={facets} />
      </div>
    );
  }

  renderBeforeFacets() {
    return (
      <div className='row'>
        <span className='small-24 column'></span>
      </div>
    );
  }

  render() {

    const result = this.state.facets.length && this.renderFacetsResult() || this.renderBeforeFacets();

    return (
      <div className={'facet-result columns'} >
        {result}
      </div>
    );
  }

}

FacetsContainer.displayName = 'FacetsContainer.component';

export default FacetsContainer;
