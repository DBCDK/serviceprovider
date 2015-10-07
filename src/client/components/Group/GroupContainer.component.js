'use strict';

import React from 'react';
import Group from './Group.component.js';
import GroupCreator from './GroupCreator.component.js';
import GroupActions from '../../actions/Group.action.js';
import GroupStore from '../../stores/Group.store.js';

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

    this.onUpdateGroup = this.onUpdateGroup.bind(this);

    this.state = {
      name: '',
      description: '',
      posts: [],
      members: []
    };

    GroupStore.listen(this.onUpdateGroup);
    // fetch the current group
    const groupId = window.QUERYSTRING_PROPS;
    GroupActions.fetchGroup({id: groupId});
  }

  componentWillUnmount() {
    GroupStore.unlisten(this.onUpdateGroup);
  }

  onUpdateGroup(group) {
    console.log('got from store', group);
    this.setState(group);
  }

  render() {
    const createMode = typeof window.QUERYSTRING_PROPS === 'undefined';
    const props = this.state;
    const content = (createMode) ? <GroupCreator onCreate={this.create}/> : <Group {...props} />;
    return (<div>{content}</div>);
  }
}

export default GroupContainer;
