'use strict';

/**
 * @file
 * Facets Result Display
 */

import React from 'react';

import FacetTerms from './FacetTerms.component.js';
import ToggleButton from '../ToggleButton.component.js';

export default class FacetsResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.state.isExpanded = {};
  }

  toggleFacet(key) {
    const isExpanded = this.state.isExpanded;
    isExpanded[key] = !this.state.isExpanded[key];
    this.setState({isExpanded});
  }

  render() {
    const facetNames = {
      'facet.type': 'Materialetype',
      'facet.creator': 'Forfatter',
      'facet.subject': 'Emne',
      'facet.language': 'Sprog',
      'facet.category': 'Målgruppe',
      'facet.date': 'Årstal',
      'facet.acSource': 'Kilde'
    };

    const facets = this.props.facets.map((facet) => {

      const isCollapsed = !this.state.isExpanded[facet.facetName];

      const toggleFunc = this.toggleFacet.bind(this, facet.facetName);

      const arrows = <ToggleButton collapsed={isCollapsed} toggleDisplay={toggleFunc} />;

      const facetClass = (isCollapsed === true) ? 'facet collapsed' : 'facet';

      return (
        <div key={facet.facetName}>
          <h3 className='facet-name' onClick={toggleFunc}>{facetNames[facet.facetName]}</h3>
          {arrows}
          <div className={facetClass}>
            <FacetTerms facetName={facet.facetName} terms={facet}/>
          </div>
        </div>
      );
    });

    return (
      <div className={this.props.className}>
        {facets}
      </div>
    );
  }
}

FacetsResult.displayName = 'FacetsResult';
FacetsResult.propTypes = {
  className: React.PropTypes.string.isRequired,
  facets: React.PropTypes.array.isRequired
};
