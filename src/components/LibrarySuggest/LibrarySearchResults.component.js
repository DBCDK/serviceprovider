'use strict';

import React from 'react';
import LibrarySearchResultsItem from './LibrarySearchResultsItem.component.js';
import {isEmpty} from 'lodash';

const LibrarySearchResultsComponent = React.createClass({
  displayName: 'LibrarySearchResults.component',

  propTypes: {
    data: React.PropTypes.array.isRequired,
    emptyMessage: React.PropTypes.string,
    pending: React.PropTypes.bool
  },

  render() {
    let rows = [];
    this.props.data.forEach((val, index) => {
      rows.push(<LibrarySearchResultsItem key={index} libraryData={val} />);
    });

    let showEmpty = !this.props.pending && (isEmpty(rows));
    let emptyMessage = (
      <div className='row'>
        <p>{this.props.emptyMessage || 'Vi kunne desværre ikke finde nogle resultater'}</p>
      </div>
    );

    return (
      <div className='results' >
        <hr />
        {showEmpty ? emptyMessage : rows}
      </div>
    );
  }
});

export default LibrarySearchResultsComponent;
