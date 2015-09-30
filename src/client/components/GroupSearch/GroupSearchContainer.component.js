'use strict';

import React from 'react';
import {isEmpty} from 'lodash';

// Components
import Query from '../query/Query.component.js';
import GroupSearchComponent from './groupsearch.component.js';
import GroupSearchResultsComponent from './GroupSearchResults.component.js';

// Stores
import QueryStore from '../../stores/QueryStore.store.js';
import GroupSearchStore from '../../stores/GroupSearch.store.js';

class GroupSearchContainerComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      groups: GroupSearchStore.store,
      query: QueryStore.store
    };

    this.unsubscribe = [
      GroupSearchStore.listen(() => this.setState({
        groups: GroupSearchStore.store
      })),
      QueryStore.listen(
        () => this.setState({
          query: QueryStore.store
        })
      )
    ];
  }

  componentWillMount() {
    this.state.groups.data = this.props.groupData ? this.props.groupData : this.state.groups.data;
    this.state.query.query = this.props.query ? this.props.query : this.state.query.query;
  }

  componentDidMount() {
    if (this.state.query.query.length > 0 && isEmpty(this.state.groups.data)) {
      GroupSearchStore.onQueryUpdated(this.state.query);
    }
  }

  componentWillUnmount() {
    this.unsubscribe.forEach(
      (unsubscriber) => {
        unsubscriber();
      }
    );
  }

  render() {
    return (
      <div className='search' >
        <Query queryLocation='/groups/search' />
        <GroupSearchComponent query={this.state.query.query} />
        <GroupSearchResultsComponent
          data={this.state.groups.data}
          query={this.state.query.query}
          />
      </div>
    );
  }
}

GroupSearchContainerComponent.displayName = 'GroupSearchContainer.component';
GroupSearchContainerComponent.propTypes = {
  groupData: React.PropTypes.array,
  query: React.PropTypes.array
};

export default GroupSearchContainerComponent;
