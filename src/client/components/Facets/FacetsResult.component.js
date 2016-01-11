'use strict';

/**
 * @file
 * Facets Result Display
 */

import React from 'react';
import {isArray, isEmpty, forEach} from 'lodash';

// Actions
import FacetsActions from './Facets.action';
import QueryActions from '../../actions/QueryUpdate.action.js';

// Stores
import QueryStore from '../../stores/QueryStore.store.js';
import ResultListStore from '../../stores/ResultList.store';

// Components
import FacetTerms from './FacetTerms.component.js';
import ToggleExpand from '../Work/WorkToggleExpand.component';

export default class FacetsResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: QueryStore.getInitialState(),
      termsSelected: {},
      result: ResultListStore.getInitialState()
    };

    this.unsubscribe = [
      QueryStore.listen(
        () => this.setState({
          query: QueryStore.store
        })
      ),
      QueryActions.queryElementWasRemoved.listen(this.queryElementWasRemoved.bind(this)),
      ResultListStore.listen(() => this.setState({result: ResultListStore.store}))
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

  termSelection(facetName, term, checked) {
    const terms = this.state.termsSelected;
    terms[facetName] = terms[facetName] || [];

    if (checked) {
      terms[facetName].push(term);
      this.addFacet(facetName, term);
    }
    else {
      terms[facetName] = terms[facetName].filter((el) => {
        return el !== term;
      });
      this.removeFacet(facetName, term);
    }

    this.setState({termsSelected: terms});
  }

  addFacet(facetName, term) {
    QueryActions.add({type: facetName, value: term});
  }

  removeFacet(facetName, term) {
    QueryActions.remove({type: facetName, value: term});
  }

  resetSelectedFacets() {
    const selectedFacets = this.state.termsSelected;
    forEach(selectedFacets, (terms, facetName) => {
      QueryActions.remove({type: facetName, value: []});
    });
  }

  generateFacets() {
    const facetNames = {
      'facet.type': 'Materialetype',
      'facet.creator': 'Forfatter',
      'facet.subject': 'Emne',
      'facet.language': 'Sprog',
      'facet.category': 'Målgruppe',
      'facet.date': 'Årstal',
      'facet.acSource': 'Kilde'
    };

    return this.props.facets.map((facet) => {

      const selectedTerms = this.state.termsSelected[facet.facetName] || [];

      return (
        <ToggleExpand key={facet.facetName} label={facetNames[facet.facetName]} className="small-10 columns">
          <div className="facet" >
            <FacetTerms facetName={facet.facetName} termSelection={this.termSelection.bind(this)} terms={facet} selectedTerms={selectedTerms} />
            <a className="button tiny" onClick={() => FacetsActions.getMoreFacetTerms(this.state.query.query, facet.facetName, facet.terms.length)} >Mere</a>
          </div>
        </ToggleExpand>
      );
    });
  }

  hasSelectedTerms() {
    let result = false;

    if (typeof this.state.termsSelected === 'object') {
      forEach(this.state.termsSelected, (value) => {
        if (value.length) {
          result = true;
        }
      });
    }

    return result;
  }

  render() {
    const removeAllBtnClass = this.hasSelectedTerms() ? '' : 'disabled';
    const resultCount = this.state.result.info.hits ? this.state.result.info.hits : '0';

    const facets = this.generateFacets();

    return (
      <div className={this.props.className} >
        <div className='facets--update-buttons' >
          <a className={`button small small-10 ${removeAllBtnClass}`} onClick={this.resetSelectedFacets.bind(this)} >Nulstil</a>
          <a className='button small small-10' onClick={this.props.toggleFunc} >Vis</a>
          <p>{`${resultCount} resultater fundet`}</p>
        </div>
        {facets}
      </div>
    );
  }
}

FacetsResult.displayName = 'FacetsResult';
FacetsResult.propTypes = {
  className: React.PropTypes.string.isRequired,
  facets: React.PropTypes.array.isRequired,
  toggleFunc: React.PropTypes.func.isRequired
};
