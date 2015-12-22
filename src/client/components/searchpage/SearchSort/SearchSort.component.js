'use strict';

import React from 'react';

import QueryActions from '../../../actions/QueryUpdate.action';

export default class SearchSort extends React.Component {
  sortWasChanged() {
    const e = this.refs.sortSelector;
    const value = e.options[e.selectedIndex].value;
    QueryActions.changeQuerySort(value);
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
      <div className='search-sort-container'>
        <select onChange={this.sortWasChanged.bind(this)} ref={"sortSelector"}>
          {options}
        </select>
      </div>
    );
  }
}

SearchSort.displayName = 'SearchSort.component';
