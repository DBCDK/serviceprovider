'use strict';

import React, {PropTypes} from 'react';

class Group extends React.Component {
  static displayName() {
    return 'Group.component';
  }

  static propTypes() {
    return {
      name: PropTypes.string.isRequired(),
      description: PropTypes.string.isRequired(),
      posts: PropTypes.array.isRequired(),
      members: PropTypes.array.isRequired()
    };
  }

  constructor() {
    super();
  }

  render() {
    return (<p>I'm a Group</p>);
  }
}

export default Group;
