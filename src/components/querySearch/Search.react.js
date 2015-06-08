'use strict';
import React from 'react';
import {SearchField as QueryString, FilterGuide} from 'dbc-react-querystring';

/**
 * Search field wrapper component
 */
const Search = React.createClass({
  propTypes: {

  },
  render() {
    const {elements, query} = this.props;
    return (
      <div className='search'>
        <QueryString query={query}/>
        <FilterGuide elements={elements}/>
      </div>
    );
  }
});

export default Search;
