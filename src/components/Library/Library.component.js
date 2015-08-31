'use strict';
/**
 * @file
 * Currently the main entrypoint served on /work.
 * Provides the work view for the enduser.
 */
import React from 'react';
import Reflux from 'reflux';

import LibraryStore from '../../stores/Library.store.js';
import LibraryActions from '../../actions/Library.action.js';

const Library = React.createClass({
  displayName: 'Library.component',
  propTypes: {
    id: React.PropTypes.string.isRequired
  },
  mixins: [
    Reflux.connect(LibraryStore, 'library')
  ],

  componentDidMount() {
    LibraryActions.libraryIdUpdated.trigger(this.props.id);
  },

  render() {
    return (
      <div className='library'>
        <p>{this.state.library.data.agencyName}</p>
        <p>{this.state.library.data.branchEmail}</p>
        <p>{this.state.library.data.branchId}</p>
        <p>{this.state.library.data.branchNameDan}</p>
        <p>{this.state.library.data.branchPhone}</p>
        <p>{this.state.library.data.branchWebsiteUrl}</p>
        <p>{this.state.library.data.city}</p>
        <p>{this.state.library.data.openingHoursDan}</p>
        <p>{this.state.library.data.postalAddress}</p>
        <p>{this.state.library.data.postalCode}</p>
      </div>
    );
  }
});

export default Library;
