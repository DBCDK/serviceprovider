'use strict';

import React, {PropTypes} from 'react';

import LibrarySearchResultsItem from './LibrarySearchResultsItem.component.js';
import {isEmpty} from 'lodash';

class LibrarySearchResultsComponent extends React.Component {
  static displayName() {
    return 'LibrarySearchResults.component';
  }

  static propTypes() {
    return {
      data: PropTypes.array.isRequired,
      emptyMessage: PropTypes.string,
      pending: PropTypes.bool,
      query: PropTypes.array.isRequired,
      searchingPlaceholder: PropTypes.string
    };
  }

  render() {
    let rows = [];
    this.props.data.forEach((val, index) => {
      rows.push(<LibrarySearchResultsItem key={index} libraryData={val} />);
    });

    let message = '';
    if (this.props.pending) {
      message = this.props.searchingPlaceholder || 'Søger, vent veligst';
    }
    else if (isEmpty(rows) && this.props.query.length > 0) {
      message = this.props.emptyMessage || 'Vi kunne desværre ikke finde nogle resultater';
    }

    message = (
      <div className='row'>
        <p>{message}</p>
      </div>
    );

    return (
      <div className='results' >
        <hr />
        {this.props.pending || (isEmpty(rows) && this.props.query.length > 0) ? message : rows}
      </div>
    );
  }
}

export default LibrarySearchResultsComponent;
