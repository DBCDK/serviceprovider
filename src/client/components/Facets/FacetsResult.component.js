'use strict';

/**
 * @file
 * Facets Result Display
 */

import React from 'react';

import FacetTerms from './FacetTerms.component.js';

export default class FacetsResult extends React.Component {
  constructor(props) {
    super(props);
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

    const facets = this.props.facets.map((facet, i) => {
      return (
        <div className='facet' key={i}>
          <div className='facet-name'>{facetNames[facet.facetName]}</div>
          <FacetTerms facetName={facet.facetName} terms={facet}/>
        </div>
      );
    });

    return (
      <div className="facets">
        {facets}
      </div>
    );
  }
}

FacetsResult.displayName = 'FacetsResult';
FacetsResult.propTypes = {
  facets: React.PropTypes.array.isRequired
};
