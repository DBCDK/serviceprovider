'use strict';

/**
 * @file
 * Facets component container for displaying facest based on query.
 */

import React from 'react';

import FacetsStore from './Facets.store.js';

import FacetsResult from './FacetsResult.component.js';

class FacetsContainer extends React.Component {

  constructor() {
    super();

    this.onUpdateFacets = this.onUpdateFacets.bind(this);

    this.state = {
      facets: []
    };

    FacetsStore.listen(this.onUpdateFacets);
  }

  onUpdateFacets(store) {
    this.setState({facets: store.facets});
  }

  renderFacetsResult() {
    let facets = null;
    if (this.state.facets) {
      facets = this.state.facets;
    }
    return (
      <div>
        <h2>Afgræns din søgning</h2>
        <FacetsResult facets={facets} />
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
