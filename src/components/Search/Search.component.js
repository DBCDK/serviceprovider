'use strict';
/**
 * @file
 * Currently the main entrypoint served on /search.
 * Provides the search functionality result view for the enduser.
 */
import React from 'react';
import QueryParser from '../../utils/QueryParser.util.js';
import {isEmpty} from 'lodash';

// import components
import AutoComplete from 'dbc-react-autocomplete';
import {TokenSearchField, FilterGuide} from 'dbc-react-querystring';
import {ResultDisplay} from 'dbc-react-resultlistview';
import SearchTabs from './SearchTabs.component.js';
import Loader from '../Loader.component.js';
// import reflux actions and stores
import AutoCompleteActions from '../../actions/AutoComplete.action.js';
import AutoCompleteStore from '../../stores/AutoComplete.store.js';
import queryAction from '../../actions/QueryUpdate.action.js';
import resultListActions from '../../actions/ResultList.action.js';
import recommendationsAction from '../../actions/Recommendations.action.js';
import recommendationsStore from '../../stores/Recommendations.store.js';
import queryStore from '../../stores/QueryStore.store.js';
import filterStore from '../../stores/FilterStore.store.js';
import resultListStore from '../../stores/ResultList.store.js';
import coverImageStore from '../../stores/CoverImage.store.js';

/**
 * Search field wrapper component
 */
const Search = React.createClass({
  propTypes: {
    query: React.PropTypes.object,
    filterElements: React.PropTypes.array,
    resultList: React.PropTypes.array,
    recommendations: React.PropTypes.array,
    selected: React.PropTypes.string,
    coverImages: React.PropTypes.object
  },

  getInitialState() {
    const query = QueryParser.stringToObject(this.props.query || []);
    if (query.length && this.isClient()) {
      queryAction(query);
    }

    return {
      query: query,
      filterElements: this.props.filterElements || [],
      resultList: resultListStore.getStore(),
      coverImages: {images: new Map()},
      recommendations: recommendationsStore.getStore(),
      selected: null,
      autoCompleteData: {}
    };
  },

  /**
   * Get context for rendering
   */
  isClient() {
    return (typeof window !== 'undefined');
  },

  /**
   * Add a single element to the Query array
   */
    addElementToQuery(element) {
    let query = this.state.query;
    query.push(element);
    queryAction(query);
  },

  /**
   * Update the Query with a new Query
   */
    updateQuery(query) {
    this.setState({query});
    const queryString = query.length && `?${QueryParser.objectToString(query)}` || '';
    this.getResultList(query);
    // this is a simple way of handling updates of the url
    // we might need to implement a more advanced version at some point e.g. react-router
    // but we need to figure out our needs first
    history.pushState(null, null, window.location.pathname + queryString);
  },

  getResultList(query = null) {
    let result = {
      query: query || this.state.query,
      offset: this.state.resultList.offset,
      worksPerPage: this.state.resultList.worksPerPage
    };
    resultListActions(result);
  },

  updateFilters(filterElements) {
    this.setState({filterElements});
  },

  updateResultList(resultList) {
    if (resultList && resultList.result) {
      recommendationsAction(resultList.result.map(element => element.identifiers[0]));
    }
    this.setState({resultList});
  },

  updateRecommendations(recommendations) {
    this.setState({recommendations});
  },

  updateCoverImages(coverImages) {
    this.setState({coverImages});
  },

  updateSelected(selected) {
    this.setState({selected});
  },

  componentDidMount: function() {
    AutoCompleteStore.listen(this.updateAutoComplete);
    queryStore.listen(this.updateQuery);
    filterStore.listen(this.updateFilters);
    resultListStore.listen(this.updateResultList);
    coverImageStore.listen(this.updateCoverImages);
    recommendationsStore.listen(this.updateRecommendations);
    if (this.state.query.length === 0) {
      recommendationsAction(recommendationsStore.getDefaultRecommendations());
    }
  },

  updateAutoComplete(autoCompleteData) {
    this.setState({autoCompleteData: autoCompleteData[this.state.textFieldValue]});
  },

  /**
   * Callback for the text input (TokenSearchField)
   */
    onChange(textFieldValue) {
    this.setState({textFieldValue: textFieldValue});
    this.requestSuggestions();
  },

  requestSuggestions() {
    setTimeout(() => {
      AutoCompleteActions.textfieldUpdated(this.state.textFieldValue);
    }, 100);
  },

  getView() {
    const {query, selected} = this.state;
    return query.length === 0 && 'Anbefalinger' || selected;
  },

  render() {
    const {query, filterElements, resultList, recommendations, coverImages} = this.state;
    const autoCompleteData = this.state.autoCompleteData || {};
    const textFieldValue = this.state.textFieldValue || '';
    const autoCompleteVisible = (!isEmpty(autoCompleteData) && !isEmpty(textFieldValue));
    const view = this.getView();
    const results = (view === 'Anbefalinger') && recommendations || resultList;
    let filterGuide;
    let searchTabs;
    let noResults = (resultList.hasSearchBeenExecuted) && (<div className='no-results'>Søgningen gav ingen resultater</div>) || '';

    if (filterElements.length) {
      filterGuide =
        <FilterGuide elements={filterElements} select={this.addElementToQuery} />;
    }
    if (resultList.result.length) {
      searchTabs = <SearchTabs
        buttons={['Søgeresultat', 'Anbefalinger']}
        selected={view}
        update={this.updateSelected}
        />;
    }

    return (
      <div className='search' >
        <TokenSearchField query={query} update={queryAction} change={this.onChange} />
        <AutoComplete data={autoCompleteData} visible={autoCompleteVisible} />
        {filterGuide}
        <div className='search-result' >
          {searchTabs}
          <Loader pending={results.pending}>
            <ResultDisplay result={results.result} coverImages={coverImages.images} more={resultList.info.more} loadmore={this.getResultList}>
              {noResults}
            </ResultDisplay>
          </Loader>
        </div>
      </div>
    );
  }
});

export default Search;
