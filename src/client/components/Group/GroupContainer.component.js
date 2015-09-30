'use strict';

import React from 'react';
import Group from './Group.component.js';
import GroupCreator from './GroupCreator.component.js';
import GroupActions from '../../actions/Group.action.js';

class GroupContainer extends React.Component {
  static displayName() {
    return 'GroupContainer.component';
  }

  create(group) {
    GroupActions.createGroup(group);
    console.log('create group', group);
  }

  constructor() {
    super();
  }

  render() {
    const createMode = true;
    const content = (createMode) ? <GroupCreator onCreate={this.create}/> : <Group/>;
    return (<div>{content}</div>);
  }
}

export default GroupContainer;
