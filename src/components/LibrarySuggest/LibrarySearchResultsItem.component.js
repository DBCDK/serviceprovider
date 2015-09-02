'use strict';

import React from 'react';

const LibrarySearchResultsItemComponent = React.createClass({
  displayName: 'LibrarySearchResultsItem.component',

  propTypes: {
    libraryData: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <div className='search-item row'>
        <a href={'/library?id=' + this.props.libraryData.branchId}>
          <h3>{this.props.libraryData.branchNameDan}</h3>
          <blockquote>{this.props.libraryData.agencyName}</blockquote>
        </a>
        <hr />
      </div>
    );
  }
});

export default LibrarySearchResultsItemComponent;
