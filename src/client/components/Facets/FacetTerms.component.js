'use strict';

/**
 * @file
 * Facets Terms Display
 */

import React from 'react';

import QueryActions from '../../actions/QueryUpdate.action.js';
import QueryStore from '../../stores/QueryStore.store.js';

export default class FacetTerms extends React.Component {
  constructor(props) {
    super(props);

    this.onUpdateQuery = this.onUpdateQuery.bind(this);

    this.state = {
      query: QueryStore.getInitialState()
    };

    this.unsubscribe = [
      QueryStore.listen(
        () => this.setState({
          query: QueryStore.store
        })
      )
    ];

  }

  onUpdateQuery(index, term, event) {
    const facet = {type: index, value: term};
    if (event.target.checked) {
      QueryActions.add(facet);
    }
    else {
      QueryActions.remove(this.state.query.search, facet);
    }
  }

  render() {
    const terms = this.props.terms.terms.map((term) => {
      const value = term.term + ' (' + term.count + ')';
      return (
        <label key={term.term}>
          <input
            className='term-name'
            name={this.props.facetName}
            onChange={this.onUpdateQuery.bind(this, this.props.facetName, term.term)}
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
  terms: React.PropTypes.object.isRequired
};
