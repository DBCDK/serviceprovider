'use strict';

import {expect} from 'chai';
import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import GroupActions from '../../../actions/Group.action.js';

import Group from '../Group.component.js';
import GroupPost from '../Post/GroupPost.component.js';

describe('Test the group components', () => {

  it('Group should have a cover image', () => {
    let element = React.createElement(Group, {
      members: [
        {
          id: 1,
          imageUrl: '/dummy.jpg',
          email: 'mrtest@waaaargh.ch'
        },
        {
          id: 2,
          email: 'mrtest@waaaargh.ch'
        }
      ],
      name: 'En gruppe',
      description: 'En beskrivelse',
      posts: [],
      groupId: 1,
      commentCb: () => {
      }
    });
    let dom = TestUtils.renderIntoDocument(element);
    let group = ReactDom.findDOMNode(TestUtils.findRenderedComponentWithType(dom, Group));
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
      ],
      groupId: 1,
      commentCb: () => {
      }
    });
    let dom = TestUtils.renderIntoDocument(element);
    let group = ReactDom.findDOMNode(TestUtils.findRenderedComponentWithType(dom, GroupPost));
    expect(group.innerHTML).to.contain('Skriv kommentar');
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
      ],
      groupId: 1,
      commentCb: () => {
      }
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
      ],
      groupId: 1,
      commentCb: () => {
      }
    };

    GroupActions.updateGroup(newGroup);

    let dom = TestUtils.renderIntoDocument(element);
    let group = ReactDom.findDOMNode(TestUtils.findRenderedComponentWithType(dom, GroupPost));
    expect(group.innerHTML).to.contain('Skriv kommentar');
  });

});
