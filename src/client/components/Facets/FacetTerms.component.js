'use strict';

/**
 * @file
 * Facets Terms Display
 */

import React from 'react';

export default class FacetTerms extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const termSelection = this.props.termSelection;
    const terms = this.props.terms.terms.map((term) => {
      const value = term.term + ' (' + term.count + ')';
      return (
        <label key={term.term}>
          <input
            className='term-name'
            name={this.props.facetName}
            onChange={(event) => termSelection(this.props.facetName, term.term, event.target.checked)}
            type='checkbox' value={term.term} >
          </input>
          {value}
        </label>
      );
    });

    return (
      <form className='term'>
        {terms}
      </form>
    );
  }
}

FacetTerms.displayName = 'FacetTerms';
FacetTerms.propTypes = {
  facetName: React.PropTypes.string.isRequired,
  termSelection: React.PropTypes.func.isRequired,
  terms: React.PropTypes.object.isRequired
};
