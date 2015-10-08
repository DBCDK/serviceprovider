'use strict';

import {expect} from 'chai';
import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Library from '../Library.component.js';
import {libraryMock} from './library.mock.js';

import ProfileStore from '../../../stores/Profile.store.js';
import LibraryStore from '../../../stores/Library.store.js';

import ProfileActions from '../../../actions/Profile.action.js';

describe('Test the library component', () => {
  it('Create library without props', () => {
    let element = React.createElement(Library, {id: ''});
    let dom = TestUtils.renderIntoDocument(element);
    let dmn = ReactDom.findDOMNode(TestUtils.findRenderedComponentWithType(dom, Library));
    expect(dmn.innerHTML).to.contain('Tilbage!');
    ReactDom.unmountComponentAtNode(dmn.parentNode);
  });

  it('Create library with data', () => {
    let element = React.createElement(Library, {libData: libraryMock, id: ''});
    let dom = TestUtils.renderIntoDocument(element);
    let dmn = TestUtils.findRenderedComponentWithType(dom, Library);

    ProfileStore.onUpdateProfile({userIsLoggedIn: true, favoriteLibraries: []});

    expect(ReactDom.findDOMNode(dmn).innerHTML).to.contain('Tilføj bibliotek til favoritter!');
  });

  it('Create library with data and click on add to favorites', () => {
    let sandbox = sinon.sandbox.create(); // eslint-disable-line
    sandbox.spy(ProfileActions, 'addLibraryToFavorites');

    let element = React.createElement(Library, {libData: libraryMock, id: ''});
    let dom = TestUtils.renderIntoDocument(element);
    let dmn = TestUtils.findRenderedComponentWithType(dom, Library);

    ProfileStore.onUpdateProfile({userIsLoggedIn: true, favoriteLibraries: []});

    TestUtils.Simulate.click(dmn.refs.favoriteButton);
    expect(ProfileActions.addLibraryToFavorites.calledWith(dmn.state.library.data.branchId, dmn.state.library.data.agencyId)).to.equal(true);
    sandbox.restore();
  });

  it('Create library with data and click on remove from favorites', () => {
    let sandbox = sinon.sandbox.create(); // eslint-disable-line
    sandbox.spy(ProfileActions, 'removeLibraryFromFavorites');

    let element = React.createElement(Library, {libData: libraryMock, id: libraryMock.agencyId});
    let dom = TestUtils.renderIntoDocument(element);
    let dmn = TestUtils.findRenderedComponentWithType(dom, Library);

    ProfileStore.onUpdateProfile({
      userIsLoggedIn: true,
      favoriteLibraries: [{
        agencyID: '710118',
        libraryID: '710100',
        borrowerID: '123',
        default: 1
      }]
    });

    TestUtils.Simulate.click(dmn.refs.favoriteButton);
    expect(ProfileActions.removeLibraryFromFavorites.calledWith(libraryMock.branchId)).to.equal(true);
    sandbox.restore();
  });

  it('should test back button', () => {
    let sandbox = sinon.sandbox.create(); // eslint-disable-line
    sandbox.spy(window.history, 'back');

    let element = React.createElement(Library, {libData: libraryMock, id: libraryMock.agencyId});
    let dom = TestUtils.renderIntoDocument(element);
    let dmn = TestUtils.findRenderedComponentWithType(dom, Library);
    TestUtils.Simulate.click(dmn.refs.backButton);

    expect(window.history.back.calledOnce).to.equal(true);
    sandbox.restore();
  });

  it('should test store onResponse', () => {
    let element = React.createElement(Library, {libData: {}, id: libraryMock.agencyId});
    let dom = TestUtils.renderIntoDocument(element);
    let dmn = TestUtils.findRenderedComponentWithType(dom, Library);
    ProfileStore.onUpdateProfile({userIsLoggedIn: true});
    LibraryStore.onLibraryIdUpdatedResponse(libraryMock);
    expect(ReactDom.findDOMNode(dmn).innerHTML).to.contain(libraryMock.agencyName);
  });
});
