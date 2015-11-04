'use strict';

import React, {PropTypes} from 'react';

class GroupSearchResultsItemComponent extends React.Component {
  render() {
    return (
      <div className='search-item row'>
        <a href={'/groups/' + this.props.groupData.id}>
          <div className="large-2 medium-2 small-4 columns">
            <img src="http://placehold.it/150x150" />
          </div>
          <div className="large-10 medium-10 small-8 columns">
            <h2>{this.props.groupData.name}</h2>
            <h6>Følgere: {this.props.groupData.members.length}</h6>
          </div>
        </a>
        <hr />
      </div>
    );
  }
}

GroupSearchResultsItemComponent.displayName = 'GroupSearchResultsItem.component';
GroupSearchResultsItemComponent.propTypes = {
  groupData: PropTypes.object.isRequired
};

export default GroupSearchResultsItemComponent;
