'use strict';

/**
 * @file
 * Facets component container for displaying facest based on query.
 */

import React from 'react';

import FacetsStore from './Facets.store.js';

import FacetsResult from './FacetsResult.component.js';

export default class FacetsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      facets: []
    };

    this.unsub = FacetsStore.listen(this.onUpdateFacets.bind(this));

    this.state.isToggled = false;
  }

  componentWillUnmount() {
    this.unsub();
  }

  onUpdateFacets(store) {
    this.setState({facets: store.facets});
  }

  toggleFacets() {
    this.setState({isToggled: !this.state.isToggled});
  }

  renderFacetsResult() {
    const facets = this.state.facets ? this.state.facets : null;

    const collapsedClass = !this.state.isToggled ? 'collapsed' : '';

    return <FacetsResult className={`facets small-24 columns ${collapsedClass}`} facets={facets} toggleFunc={this.toggleFacets.bind(this)} />;
  }

  render() {
    const result = this.renderFacetsResult();

    const toggleFunc = this.toggleFacets.bind(this, 'facets');

    return (
      <div>
        <div className='facets--container small-12 columns' >
          <span className="facets--result--header" onClick={toggleFunc} >Filtrér</span>
        </div>
        {result}
      </div>
    );
  }
}

FacetsContainer.displayName = 'FacetsContainer';
