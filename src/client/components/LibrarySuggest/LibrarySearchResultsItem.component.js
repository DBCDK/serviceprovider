'use strict';

import React, {PropTypes} from 'react';

class LibrarySearchResultsItemComponent extends React.Component {
  static displayName() {
    return 'LibrarySearchResultsItem.component';
  }

  static propTypes() {
    return {
      libraryData: PropTypes.object.isRequired
    };
  }

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

export default LibrarySearchResultsItemComponent;
