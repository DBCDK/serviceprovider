'use strict';

/**
 * @file
 * Search sort component
 */

import React from 'react';

import QueryActions from '../../../actions/QueryUpdate.action';

export default class SearchSort extends React.Component {
  constructor() {
    super();

    let defaultSort = 'rank_frequency';
    if (typeof localStorage !== 'undefined') {
      defaultSort = localStorage.getItem('defaultSearchSort') || defaultSort;
    }

    this.state = {
      sort: defaultSort
    };

    QueryActions.changeQuerySort(this.state.sort);
  }

  sortWasChanged() {
    const e = this.refs.sortSelector;
    const value = e.options[e.selectedIndex].value;
    QueryActions.changeQuerySort(value);

    this.setState({
      sort: value
    });

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('defaultSearchSort', value);
    }
  }

  render() {
    const options = [
      {name: 'Almindelig sortering', sort: 'rank_frequency'},
      {name: 'Udgivelsesår - nyeste først', sort: 'date_descending'},
      {name: 'Udgivelsesår - ældste først', sort: 'date_ascending'},
      {name: 'Titel - a-å', sort: 'title_ascending'},
      {name: 'Titel - å-a', sort: 'title_descending'},
      {name: 'Forfatter - a-å', sort: 'creator_ascending'},
      {name: 'Forfatter - å-a', sort: 'creator_descending'},
      {name: 'Jeg leder efter en titel', sort: 'rank_main_title'},
      {name: 'Jeg søger i et emne', sort: 'rank_subject'},
      {name: 'Jeg leder efter en forfatter', sort: 'rank_creator'}
    ].map((sort) => {
      return (<option key={sort.sort} value={sort.sort} >{sort.name}</option>);
    });

    return (
      <div className='search-sort-container small-12 columns'>
        <select defaultValue={this.state.sort} onChange={this.sortWasChanged.bind(this)} ref={"sortSelector"}>
          {options}
        </select>
      </div>
    );
  }
}

SearchSort.displayName = 'SearchSort.component';
