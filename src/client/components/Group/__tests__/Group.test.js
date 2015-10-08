'use strict';

import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';

import GroupActions from '../../../actions/Group.action.js';

import GroupContainer from '../GroupContainer.component.js';
import Group from '../Group.component.js';
import Post from '../Post.component.js';

describe('Test the group components', () => {

  it('Group should have a cover image', () => {
    let element = React.createElement(Group, {
      members: [],
      name: 'En gruppe',
      description: 'En beskrivelse',
      posts: []
    });
    let dom = TestUtils.renderIntoDocument(element);
    let group = React.findDOMNode(TestUtils.findRenderedComponentWithType(dom, Group));
    expect(group.innerHTML).to.contain('<img');
  });


  it('should show post author name in Post', () => {
    let element = React.createElement(Group, {
      members: [],
      name: 'En gruppe',
      description: 'En beskrivelse',
      posts: [
          {
            id: 666,
            owner: {
              id: 42,
              email: 'some@email.com',
              imageUrl: '/dummy.jpg',
              timeCreated: 123123123
            },
            comments: []
          }
      ]
    });
    let dom = TestUtils.renderIntoDocument(element);
    let group = React.findDOMNode(TestUtils.findRenderedComponentWithType(dom, Post));
    expect(group.innerHTML).to.contain('some@email.com');
  });

  it('should update group cover image', () => {
    let element = React.createElement(Group, {
      members: [],
      name: 'En gruppe',
      description: 'En beskrivelse',
      posts: [
          {
            id: 666,
            owner: {
              id: 42,
              email: 'some@email.com',
              imageUrl: '/dummy.jpg',
              timeCreated: 123123123
            },
            comments: []
          }
      ]
    });

    const newGroup = {
      members: [],
      name: 'En gruppe',
      description: 'En beskrivelse',
      posts: [
          {
            id: 666,
            owner: {
              id: 42,
              email: 'someother@email.com',
              imageUrl: '/dummy.jpg',
              timeCreated: 123123123
            },
            comments: []
          }
      ]
    };

    GroupActions.updateGroup(newGroup);

    let dom = TestUtils.renderIntoDocument(element);
    let group = React.findDOMNode(TestUtils.findRenderedComponentWithType(dom, Post));
    expect(group.innerHTML).to.contain('some@email.com');
  });

});
