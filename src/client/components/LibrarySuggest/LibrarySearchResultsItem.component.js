'use strict';

import React, {PropTypes} from 'react';

class LibrarySearchResultsItemComponent extends React.Component {
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
}

LibrarySearchResultsItemComponent.displayName = 'LibrarySearchResultsItem.component';
LibrarySearchResultsItemComponent.propTypes = {
  libraryData: PropTypes.object.isRequired
};

export default LibrarySearchResultsItemComponent;
