'use strict';
/**
 * @file
 * Currently the main entrypoint served on /search.
 * Provides the search functionality result view for the enduser.
 */
import React from 'react';
import QueryParser from '../../utils/QueryParser.util.js';
import {isEmpty, extend} from 'lodash';

// import components
import AutoComplete from 'dbc-react-autocomplete';
import {TokenSearchField, FilterGuide} from 'dbc-react-querystring';
import {ResultDisplay} from 'dbc-react-resultlistview';
import SearchTabs from './SearchTabs.component.js';
import Loader from '../Loader.component.js';

// import actions
import AutoCompleteActions from '../../actions/AutoComplete.action.js';
import QueryActions from '../../actions/QueryUpdate.action.js';
import RecommendationsAction from '../../actions/Recommendations.action.js';
import ResultListActions from '../../actions/ResultList.action.js';
import FilterActions from '../../actions/Filter.action.js';

// Import Stores
import AutoCompleteStore from '../../stores/AutoComplete.store.js';
import RecommendationsStore from '../../stores/Recommendations.store.js';
import QueryStore from '../../stores/QueryStore.store.js';
import FilterStore from '../../stores/FilterStore.store.js';
import ResultListStore from '../../stores/ResultList.store.js';
import CoverImageStore from '../../stores/CoverImage.store.js';

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
  let query = extend({}, QueryStore.getStore());
    query.query = QueryParser.stringToObject(this.props.query || []);
    if (query.query.length && this.isClient()) {
      QueryActions.update(query.query);
    }
    return {
      query,
      filterElements: this.props.filterElements || [],
      resultList: ResultListStore.getStore(),
      coverImages: {images: new Map()},
      recommendations: RecommendationsStore.getStore(),
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
   * Update the Query with a new Query
   */
  updateQuery(query) {
    if (this.state.query !== query) {
      ResultListActions.clear();
    }
    ResultListActions(query);
    FilterActions(query.query);

    this.setState({query});
    // this is a simple way of handling updates of the url
    // we might need to implement a more advanced version at some point e.g. react-router
    // but we need to figure out our needs first
    const queryString = query.query.length && `?${QueryParser.objectToString(query.query)}` || '';
    history.pushState(null, null, window.location.pathname + queryString);
  },

  updateFilters(filterElements) {
    this.setState({filterElements});
  },

  updateResultList(resultList) {
    if (resultList && resultList.result) {
      RecommendationsAction(resultList.result.map(element => element.identifiers[0]));
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
    if (this.isClient()){
      window.addEventListener("popstate", () => {console.log('hep')});
    }

    AutoCompleteStore.listen(this.updateAutoComplete);
    QueryStore.listen(this.updateQuery);
    FilterStore.listen(this.updateFilters);
    ResultListStore.listen(this.updateResultList);
    CoverImageStore.listen(this.updateCoverImages);
    RecommendationsStore.listen(this.updateRecommendations);
    if (this.state.query.length === 0) {
      RecommendationsAction(RecommendationsStore.getDefaultRecommendations());
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
    return query.query.length === 0 && 'Anbefalinger' || selected;
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
        <FilterGuide elements={filterElements} select={QueryActions.add} />;
    }
    if (resultList.result.length) {
      searchTabs = <SearchTabs
        buttons={['Søgeresultat', 'Anbefalinger']}
        selected={view}
        update={this.updateSelected}
        />;
    }
    const loader = <Loader pending={results.pending} />;
    return (
      <div className='search' >
        <TokenSearchField query={query.query} update={QueryActions.update} change={this.onChange} />
        <AutoComplete data={autoCompleteData} visible={autoCompleteVisible} />
        {filterGuide}
        <div className='search-result' >
          {searchTabs}
            <ResultDisplay result={results.result} noResultsText='' pending={results.pending} loader={loader} coverImages={coverImages.images} hasMore={resultList.info.more === 'true'} loadMore={QueryActions.nextPage}>
              {noResults}

            </ResultDisplay>
        </div>
      </div>
    );
  }
});

export default Search;
