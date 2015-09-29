'use strict';

import React, {PropTypes} from 'react';

class GroupSearchResultsItemComponent extends React.Component {
  render() {
    return (
      <div className='search-item row'>
        {this.props.groupData}
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
