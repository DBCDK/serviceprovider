'use strict';

/**
 * @file
 * Testing OrderButton.component.js
 */

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {assert} from 'chai';

import OrderButton from '../OrderButton.component.js';

describe('Test OrderButton Component', () => {

  let render = null;

  beforeEach(() => {
    render = TestUtils.createRenderer();
  });

  it('Assert rendering of order buttons', () => {
    const manifestations = [
      {
        type: 'Bog',
        accessType: 'physical',
        title: 'Den tavse by',
        creator: 'Cassandra Clare',
        identifiers: ['775100-katalog:27695183'],
        dates: ['2009'],
        order: '/order?ids=775100-katalog:27695183&creator=Cassandra%20Clare&title=Den%20tavse%20by&type=Bog'
      },
      {
        type: 'Bog',
        accessType: 'physical',
        title: 'Den tavse by',
        creator: 'Cassandra Clare',
        identifiers: ['775100-katalog:27695187'],
        dates: ['2009'],
        order: '/order?ids=775100-katalog:27695183&creator=Cassandra%20Clare&title=Den%20tavse%20by&type=Bog'
      },
      {
        type: 'Lydbog (net)',
        accessType: 'online',
        title: 'Den tavse by',
        creator: 'Cassandra Clare',
        identifiers: ['775100-katalog:28993374'], dates: ['2011']
      }
    ];

    const profile = {
      name: '',
      imageUrl: '/dummy.jpg',
      followingCount: 16,
      groupsCount: 7,
      followersCount: 35,
      editEnabled: false,
      favoriteLibraries: [],
      favoriteLibrariesResolved: [],
      likes: [],
      userIsLoggedIn: false,
      error: {}
    };

    const relations = [
      {
        link: 'http://www.filmstriben.dk/bibliotek/film/details.aspx?id=9000000917',
        access: 'onsite'
      },
      {
        link: 'http://www.filmstriben.dk/fjernleje/film/details.aspx?id=9000000917',
        access: 'remote'
      }
    ];

    render.render(
      <OrderButton manifestations={manifestations} profile={profile} relations={relations} />
    );
    const rendered = render.getRenderOutput();

    assert.strictEqual(rendered.type, 'div', 'Component rendered element of type \'div\'');
    assert.strictEqual('Bestil Bog', rendered.props.children[0].props.linkText, 'Component rendered order button text');
    assert.strictEqual('/work/order?ids=775100-katalog:27695183&creator=Cassandra%20Clare&title=Den%20tavse%20by&type=Bog',
      rendered.props.children[0].props.orderUrl, 'Component rendered order button text');
    assert.strictEqual('775100-katalog:27695183', rendered.props.children[0].props.coverImagePids[0], 'Cover Image identifier');
    assert.strictEqual(rendered.props.className, 'work-container--order-buttons clearfix', 'Component rendered element with class');
  });

  it('Assert rendering of link to online access', () => {
    const manifestations = [
      {
        type: 'Film (net)',
        accessType: 'online',
        title: 'Drengelejren',
        creator: 'Cathrine Marchen Asmussen',
        identifiers: ['870970-basis:50687589'],
        dates: ['2013']
      }
    ];

    const profile = {
      name: '',
      imageUrl: '/dummy.jpg',
      followingCount: 16,
      groupsCount: 7,
      followersCount: 35,
      editEnabled: false,
      favoriteLibrariesResolved: [],
      likes: [],
      userIsLoggedIn: false,
      error: {}
    };

    const relations = [
      {
        link: 'http://www.filmstriben.dk/bibliotek/film/details.aspx?id=9000000917',
        type: 'dbcaddi:hasOnlineAccess',
        access: 'onsite',
        collection: ['150021-bibliotek']
      },
      {
        link: 'http://www.filmstriben.dk/fjernleje/film/details.aspx?id=9000000917',
        type: 'dbcaddi:hasOnlineAccess',
        access: 'remote',
        collection: ['150021-fjern']
      }
    ];

    render.render(
      <OrderButton manifestations={manifestations} profile={profile} relations={relations} />
    );

    const rendered = render.getRenderOutput();
    assert.strictEqual(rendered.props.children[0][0].props.children, 'Se Film (net) på biblioteket', 'Component rendered a link text');
    assert.strictEqual(rendered.props.children[0][0].type, 'a', 'Component rendered element of type \'a\'');
    assert.strictEqual(rendered.props.children[0][0].props.href, 'http://www.filmstriben.dk/bibliotek/film/details.aspx?id=9000000917',
      'Component rendered a href-attribute with a link');
  });

  it('User not logged in', () => {
    const manifestations = [
      {
        type: 'Bog',
        accessType: 'physical',
        title: 'Den tavse by',
        creator: 'Cassandra Clare',
        identifiers: ['775100-katalog:27695183'],
        dates: ['2009'],
        order: '/order?ids=775100-katalog:27695183&creator=Cassandra%20Clare&title=Den%20tavse%20by&type=Bog'
      },
      {
        type: 'Lydbog (net)',
        accessType: 'online',
        title: 'Den tavse by',
        creator: 'Cassandra Clare',
        identifiers: ['775100-katalog: 28993374'],
        dates: ['2011']
      }
    ];

    const profile = {
      name: '',
      imageUrl: '/dummy.jpg',
      followingCount: 16,
      groupsCount: 7,
      followersCount: 35,
      editEnabled: false,
      favoriteLibrariesResolved: [],
      likes: [],
      userIsLoggedIn: false,
      error: {}
    };

    render.render(
      <OrderButton manifestations={manifestations} profile={profile} />
    );

    const rendered = render.getRenderOutput();

    assert.strictEqual(false, rendered.props.children[0].props.userIsLoggedIn, 'User is not logged in');
    assert.strictEqual('', rendered.props.children[0].props.agencyId, 'No agencyId');
  });

  it('User logged in, no favorite library', () => {
    const manifestations = [
      {
        type: 'Bog',
        accessType: 'physical',
        title: 'Den tavse by',
        creator: 'Cassandra Clare',
        identifiers: ['775100-katalog:27695183'],
        dates: ['2009'],
        order: '/order?ids=775100-katalog:27695183&creator=Cassandra%20Clare&title=Den%20tavse%20by&type=Bog'
      },
      {
        type: 'Lydbog (net)',
        accessType: 'online',
        title: 'Den tavse by',
        creator: 'Cassandra Clare',
        identifiers: ['775100-katalog: 28993374'],
        dates: ['2011']
      }
    ];

    const profile = {
      name: '',
      imageUrl: '/dummy.jpg',
      followingCount: 16,
      groupsCount: 7,
      followersCount: 35,
      editEnabled: false,
      favoriteLibraries: [],
      favoriteLibrariesResolved: [],
      likes: [],
      userIsLoggedIn: true,
      error: {}
    };
    render.render(
      <OrderButton manifestations={manifestations} profile={profile} />
    );
    const rendered = render.getRenderOutput();
    assert.strictEqual(true, rendered.props.children[0].props.userIsLoggedIn, 'User is logged in');
    assert.strictEqual('', rendered.props.children[0].props.agencyId, 'No agencyId');
  });

  it('User logged in, has favorite library, no borrower Id', () => {
    const manifestations = [
      {
        type: 'Bog',
        accessType: 'physical',
        title: 'Den tavse by',
        creator: 'Cassandra Clare',
        identifiers: ['775100-katalog:27695183'],
        dates: ['2009'],
        order: '/order?ids=775100-katalog:27695183&creator=Cassandra%20Clare&title=Den%20tavse%20by&type=Bog'
      },
      {
        type: 'Lydbog (net)',
        accessType: 'online',
        title: 'Den tavse by',
        creator: 'Cassandra Clare',
        identifiers: ['775100-katalog: 28993374'],
        dates: ['2011']
      }];
    const profile = {
      name: '',
      imageUrl: '/dummy.jpg',
      followingCount: 16,
      groupsCount: 7,
      followersCount: 35,
      editEnabled: false,
      favoriteLibrariesResolved: [],
      likes: [],
      userIsLoggedIn: true,
      error: {}
    };

    const favoriteLibraries = [{agencyID: '710117', libraryID: '710100', borrowerID: '', default: 0}];

    render.render(
      <OrderButton favoriteLibraries={favoriteLibraries} manifestations={manifestations} profile={profile} />
    );
    const rendered = render.getRenderOutput();
    assert.strictEqual(true, rendered.props.children[0].props.userIsLoggedIn, 'User is logged in');
    assert.strictEqual('710117', rendered.props.children[0].props.pickupAgencyId, 'User has a chosen a favorite library');
    assert.strictEqual('', rendered.props.children[0].props.borrowerId, 'User has not provided borrower Id');
  });

  it('User logged in, has favorite library and borrower Id', () => {
    const manifestations = [
      {
        type: 'Bog',
        accessType: 'physical',
        title: 'Den tavse by',
        creator: 'Cassandra Clare',
        identifiers: ['775100-katalog:27695183'],
        dates: ['2009'],
        order: '/order?ids=775100-katalog:27695183&creator=Cassandra%20Clare&title=Den%20tavse%20by&type=Bog'
      },
      {
        type: 'Lydbog (net)',
        accessType: 'online',
        title: 'Den tavse by',
        creator: 'Cassandra Clare',
        identifiers: ['775100-katalog: 28993374'],
        dates: ['2011']
      }];

    const profile = {
      name: '',
      imageUrl: '/dummy.jpg',
      followingCount: 16,
      groupsCount: 7,
      followersCount: 35,
      editEnabled: false,
      favoriteLibrariesResolved: [],
      likes: [],
      userIsLoggedIn: true,
      error: {}
    };

    const favoriteLibraries = [{agencyID: '710117', libraryID: '710100', borrowerID: '1231231230', default: 0}];

    render.render(
      <OrderButton favoriteLibraries={favoriteLibraries} manifestations={manifestations} profile={profile} />
    );
    const rendered = render.getRenderOutput();
    assert.strictEqual(true, rendered.props.children[0].props.userIsLoggedIn, 'User is logged in');
    assert.strictEqual('1231231230', rendered.props.children[0].props.borrowerId, 'User has provided borrower Id');
  });

  it('User logged in, has pickup agency and borrower Id', () => {
    const manifestations = [
      {
        type: 'Bog',
        accessType: 'physical',
        title: 'Den tavse by',
        creator: 'Cassandra Clare',
        identifiers: ['775100-katalog:27695183'],
        dates: ['2009'],
        order: '/order?ids=775100-katalog:27695183&creator=Cassandra%20Clare&title=Den%20tavse%20by&type=Bog'
      },
      {
        type: 'Lydbog (net)',
        accessType: 'online',
        title: 'Den tavse by',
        creator: 'Cassandra Clare',
        identifiers: ['775100-katalog: 28993374'],
        dates: ['2011']
      }];

    const profile = {
      name: '',
      imageUrl: '/dummy.jpg',
      followingCount: 16,
      groupsCount: 7,
      followersCount: 35,
      editEnabled: false,
      favoriteLibrariesResolved: [],
      likes: [],
      userIsLoggedIn: true,
      error: {}
    };

    const favoriteLibraries = [{agencyID: '710117', libraryID: '710100', borrowerID: '1231231230', default: 1}];

    render.render(
      <OrderButton favoriteLibraries={favoriteLibraries} manifestations={manifestations} profile={profile} />
    );
    const rendered = render.getRenderOutput();
    assert.isTrue(rendered.props.children[0].props.userIsLoggedIn, 'User is logged in');
    assert.strictEqual('1231231230', rendered.props.children[0].props.borrowerId, 'User has provided borrower Id');
  });

  it('User logged in, second library as pickup agency', () => {
    const manifestations = [
      {
        type: 'Bog',
        accessType: 'physical',
        title: 'Den tavse by',
        creator: 'Cassandra Clare',
        identifiers: ['775100-katalog:27695183'],
        dates: ['2009'],
        order: '/order?ids=775100-katalog:27695183&creator=Cassandra%20Clare&title=Den%20tavse%20by&type=Bog'
      },
      {
        type: 'Lydbog (net)',
        accessType: 'online',
        title: 'Den tavse by',
        creator: 'Cassandra Clare',
        identifiers: ['775100-katalog: 28993374'],
        dates: ['2011']
      }
    ];
    const profile = {
      name: '',
      imageUrl: '/dummy.jpg',
      followingCount: 16,
      groupsCount: 7,
      followersCount: 35,
      editEnabled: false,
      favoriteLibrariesResolved: [],
      likes: [],
      userIsLoggedIn: true,
      error: {}
    };

    const favoriteLibraries = [
      {
        agencyID: '710117',
        libraryID: '710100',
        borrowerID: '',
        default: 0
      },
      {
        agencyID: '775100',
        libraryID: '775100',
        borrowerID: '1231231230',
        default: 1
      }
    ];

    render.render(
      <OrderButton favoriteLibraries={favoriteLibraries} manifestations={manifestations} profile={profile} />
    );

    const rendered = render.getRenderOutput();
    assert.isTrue(rendered.props.children[0].props.userIsLoggedIn, 'User is logged in');
    assert.strictEqual('775100', rendered.props.children[0].props.pickupAgencyId, 'User has chosen pickup agency');
  });

  it('No manifestations provided', () => {
    const profile = {
      name: '',
      imageUrl: '/dummy.jpg',
      followingCount: 16,
      groupsCount: 7,
      followersCount: 35,
      editEnabled: false,
      favoriteLibrariesResolved: [],
      likes: [],
      userIsLoggedIn: true,
      error: {}
    };

    render.render(
      <OrderButton profile={profile} />
    );

    const rendered = render.getRenderOutput();

    assert.strictEqual(rendered.type, 'div', 'Component rendered element of type \'div\'');
    assert.isUndefined(rendered.props.children);
  });

  it('No profile provided', () => {
    const manifestations = [
      {
        type: 'Bog',
        accessType: 'physical',
        title: 'Den tavse by',
        creator: 'Cassandra Clare',
        identifiers: ['775100-katalog:27695183'],
        dates: ['2009'],
        order: '/order?ids=775100-katalog:27695183&creator=Cassandra%20Clare&title=Den%20tavse%20by&type=Bog'
      },
      {
        type: 'Lydbog (net)',
        accessType: 'online',
        title: 'Den tavse by',
        creator: 'Cassandra Clare',
        identifiers: ['775100-katalog: 28993374'],
        dates: ['2011']
      }
    ];

    render.render(
      <OrderButton manifestations={manifestations} />
    );

    const rendered = render.getRenderOutput();

    assert.strictEqual(rendered.type, 'div', 'Component rendered element of type \'div\'');
    assert.isUndefined(rendered.props.children);
  });

  it('No manifestations nor profile provided', () => {
    render.render(
      <OrderButton />
    );

    const rendered = render.getRenderOutput();

    assert.strictEqual(rendered.type, 'div', 'Component rendered element of type \'div\'');
    assert.isUndefined(rendered.props.children);
  });

});
