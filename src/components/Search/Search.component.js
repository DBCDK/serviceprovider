'use strict';
import React from 'react';
import {TokenSearchField, FilterGuide} from 'dbc-react-querystring';
import QueryParser from '../../utils/QueryParser.util.js';

// import reflux actions and stores
import queryAction from '../../actions/QueryUpdate.action.js';
import queryStore from '../../stores/QueryStore.store.js';

/**
 * Search field wrapper component
 */
const Search = React.createClass({
  propTypes: {
    query: React.PropTypes.object,
    filterElements: React.PropTypes.array
  },
  getInitialState() {
    const query = QueryParser.stringToObject(this.props.query || {});
    return {
      query,
      filterElements: this.props.filterElements || []
    };
  },
  addElementToQuery(element) {
    let query = this.state.query;
    query.push(element);
    queryAction(query);
  },
  updateQuery(query) {
    this.setState({query});
    // this is a simple way of handling updates of the url
    // we might need to implement a more advanced version at some point e.g. react-router
    // but we need to figure out our needs first
    history.pushState(null, null, `${window.location.pathname}?${QueryParser.objectToString(query)}`);
  },
  componentDidMount: function() {
    this.unsubscribe = queryStore.listen(this.updateQuery);
  },
  componentWillUnmount: function() {
    this.unsubscribe();
  },

  render() {
    const {filterElements, query} = this.state;
    let filterGuide;
    if (filterElements.length > 0) {
      filterGuide = (<FilterGuide elements={filterElements} select={this.addElementToQuery}/>);
    }

    return (
      <div className='search'>
        <TokenSearchField query={query} update={queryAction} />
        {filterGuide}
      </div>
    );
  }
});

export default Search;
