'use strict';
import React from 'react';
import {SearchField as QueryString, FilterGuide} from 'dbc-react-querystring';
import * as QueryParser from '../../utils/query.util.js';




/**
 * Search field wrapper component
 */
const Search = React.createClass({
  getInitialState(){
    const query = QueryParser.queryToState(this.props.query || {});
    console.log(query);
    return {
      query,
      elements: this.props.elements || []
    };
  },
  propTypes: {

  },
  addElementToQuery(element, event){
    let query = this.state.query;
    query.push(element.label);
    this.updateQuery(query);
  },
  updateQuery(query) {
    this.setState({query});
    //history.pushState(null, null, window.location.pathname +  '?' + QueryParser.stateToQuery(query));
  },
  render() {
    const {elements, query} = this.state;
    console.log(query, query);
    return (
      <div className='search'>
        <QueryString query={query} update={this.updateQuery} />
        <FilterGuide elements={elements} select={this.addElementToQuery}/>
      </div>
    );
  }
});

export default Search;
