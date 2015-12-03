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
    const terms = this.props.terms.terms.map((term, i) => {
      const value = term.term + ' (' + term.count + ')';
      return (
        <label key={i}><input className='term-name' name={this.props.facetName} type='checkbox' value={term.term}></input>{value}</label>
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
  terms: React.PropTypes.object.isRequired
};
