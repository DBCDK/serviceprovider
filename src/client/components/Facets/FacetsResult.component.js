'use strict';

/**
 * @file
 * Facets Result Display
 */

import React from 'react';
import {remove} from 'lodash';

import QueryActions from '../../actions/QueryUpdate.action.js';

import QueryStore from '../../stores/QueryStore.store.js';

import FacetTerms from './FacetTerms.component.js';
import ToggleButton from '../ToggleButton.component.js';

export default class FacetsResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: {},
      termsSelected: [],
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

  toggleFacet(key) {
    const isExpanded = this.state.isExpanded;
    isExpanded[key] = !this.state.isExpanded[key];
    this.setState({isExpanded});
  }

  termSelection(facetName, term, checked) {
    if (this.state.termsSelected) {
      let terms = this.state.termsSelected;
      const part = {name: facetName, term: term};
      if (checked) {
        terms.push(part);
      }
      else {
        terms = remove(terms, function(el) {
          return el.name === facetName && el.term !== term || el.name !== facetName;
        });
      }
      this.setState({termsSelected: terms});
    }
  }

  onUpdateQuery(facetName, facets, query) {
    query.query = remove(query.query, function(el) {
      return el.type !== facetName;
    });
    let terms = [];
    facets.map((term) => {
      if (term.name === facetName) {
        terms.push(term.term);
      }
    });
    if (terms.length > 0) {
      QueryActions.add({type: facetName, value: terms});
    }
    else {
      QueryActions.remove(query.search, {type: facetName, value: terms});
    }
    this.setState({query: query});
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

      const termSelection = this.termSelection.bind(this);

      const arrows = <ToggleButton collapsed={isCollapsed} toggleDisplay={toggleFunc} />;

      const facetClass = (isCollapsed === true) ? 'facet collapsed' : 'facet';

      return (
        <div key={facet.facetName}>
          <h3 className='facet-name' onClick={toggleFunc}>{facetNames[facet.facetName]}</h3>
          {arrows}
          <div className={facetClass}>
            <FacetTerms facetName={facet.facetName} termSelection={termSelection} terms={facet} />
            <a className="button" onClick={this.onUpdateQuery.bind(this, facet.facetName, this.state.termsSelected, this.state.query)}>Opdater</a>
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
