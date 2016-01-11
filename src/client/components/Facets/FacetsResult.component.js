'use strict';

/**
 * @file
 * Facets Result Display
 */

import React from 'react';
import {isArray} from 'lodash';

import FacetsActions from './Facets.action';
import QueryActions from '../../actions/QueryUpdate.action.js';

import QueryStore from '../../stores/QueryStore.store.js';

import FacetTerms from './FacetTerms.component.js';
import ToggleButton from '../ToggleButton.component.js';

export default class FacetsResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: {},
      termsSelected: {},
      query: QueryStore.getInitialState()
    };

    this.unsubscribe = [
      QueryStore.listen(
        () => this.setState({
          query: QueryStore.store
        })
      ),
      QueryActions.queryElementWasRemoved.listen(this.queryElementWasRemoved.bind(this))
    ];
  }

  componentDidMount() {
    this.state.query.query.forEach((queryElement) => {
      if (queryElement.type.indexOf('facet') > -1) {
        (isArray(queryElement.value) ? queryElement.value : queryElement.value.split(',')).forEach((val) => {
          const selector = [queryElement.type, val.replace(/"/g, '')].join('.');
          FacetsActions.selectFacetButton(selector);

          let terms = this.state.termsSelected;
          terms[queryElement.type] = terms[queryElement.type] || [];
          terms[queryElement.type].push(val);
          this.setState({termsSelected: terms}); // eslint-disable-line
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe.forEach((unsub) => unsub());
  }

  queryElementWasRemoved(element) {
    if (element.type && element.type.indexOf('facet') > -1) {
      (isArray(element.value) ? element.value : element.value.split(',')).forEach((val) => {
        val = val.replace(/"/g, '');
        const selector = [element.type, val].join('.');
        FacetsActions.deselectFacetButton(selector);

        this.termSelection(element.type, val, false);
      });
    }
  }

  toggleFacet(key) {
    const isExpanded = this.state.isExpanded;
    isExpanded[key] = !this.state.isExpanded[key];
    this.setState({isExpanded});
  }

  termSelection(facetName, term, checked) {
    let terms = this.state.termsSelected;
    terms[facetName] = terms[facetName] || [];
    term = '"' + term + '"';

    if (checked) {
      terms[facetName].push(term);
    }
    else {
      terms[facetName] = terms[facetName].filter((el) => {
        return el !== term;
      });
    }

    this.setState({termsSelected: terms});
  }

  onUpdateQuery(facetName, facets, query) {
    // Remove all the old terms with this facetname
    query.query.filter((term) => {
      return term.type === facetName;
    }).forEach((facet) => {
      QueryActions.remove(facet);
    });

    if (facets[facetName] && facets[facetName].length) {
      QueryActions.add({type: facetName, value: facets[facetName]});
    }
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

      const facetClass = (isCollapsed) ? 'facet collapsed' : 'facet';

      return (
        <div key={facet.facetName}>
          <h3 className='facet-name' onClick={toggleFunc}>{facetNames[facet.facetName]}</h3>
          {arrows}
          <div className={facetClass}>
            <FacetTerms facetName={facet.facetName} termSelection={termSelection} terms={facet} />
            <a className="button" onClick={() => FacetsActions.getMoreFacetTerms(this.state.query.query, facet.facetName, facet.terms.length)}>Hent flere</a>
            <a className="button" onClick={() => this.onUpdateQuery(facet.facetName, this.state.termsSelected, this.state.query)}>Opdater</a>
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
