'use strict';
import React from 'react';
import {SearchField as QueryString, FilterGuide} from 'dbc-react-querystring';



function Query () {


}


/**
 * Search field wrapper component
 */
const Search = React.createClass({
  getInitialState(){
    return {
      query: this.props.query || [],
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
  },
  render() {
    const {elements, query} = this.state;
    return (
      <div className='search'>
        <QueryString query={query} update={this.updateQuery} />
        <FilterGuide elements={elements} select={this.addElementToQuery}/>
      </div>
    );
  }
});

export default Search;
