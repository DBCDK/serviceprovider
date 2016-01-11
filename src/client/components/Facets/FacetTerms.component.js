'use strict';

/**
 * @file
 * Facets Terms Display
 */

import React from 'react';

import FacetsActions from './Facets.action';

export default class FacetTerms extends React.Component {
  constructor(props) {
    super(props);

    FacetsActions.selectFacetButton.listen(this.onSelectFacetButton.bind(this, true));
    FacetsActions.deselectFacetButton.listen(this.onSelectFacetButton.bind(this, false));
  }

  onSelectFacetButton(shouldSelect, selector) {
    if (this.refs.hasOwnProperty(selector)) {
      this.refs[selector].checked = shouldSelect;
    }
  }

  render() {
    const termSelection = this.props.termSelection;
    const terms = this.props.terms.terms.map((term) => {
      const isChecked = (this.props.selectedTerms.indexOf(term.term) > -1);
      const term_ref = [this.props.facetName, term.term].join('.');
      const value = term.term + ' (' + term.count + ')';
      return (
        <label key={term.term}>
          <input
            className='facets--term-checkbox'
            name={this.props.facetName}
            checked={isChecked}
            onChange={(event) => termSelection(this.props.facetName, term.term, event.target.checked)}
            ref={term_ref}
            type='checkbox' value={term.term} >
          </input>
          <span className='facets--term-label'>{value}</span>
        </label>
      );
    });

    return (
      <form className='facets--term-form'>
        {terms}
      </form>
    );
  }
}

FacetTerms.displayName = 'FacetTerms';
FacetTerms.propTypes = {
  facetName: React.PropTypes.string.isRequired,
  selectedTerms: React.PropTypes.array.isRequired,
  termSelection: React.PropTypes.func.isRequired,
  terms: React.PropTypes.object.isRequired
};
