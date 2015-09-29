'use strict';

import React, {PropTypes} from 'react';

class Group extends React.Component {
  static displayName() {
    return 'Group.component';
  }

  static propTypes() {
    return {
      blabla: PropTypes.string
    };
  }

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <p>lol</p>
      </div>
    );
  }
}

export default Group;
