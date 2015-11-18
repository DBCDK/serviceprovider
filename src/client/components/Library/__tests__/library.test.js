'use strict';

import {expect} from 'chai';
import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Library from '../Library.component.js';
import {libraryMock, profileLibraryMock, profileLibraryWithPinMock} from './library.mock.js';

import ProfileStore from '../../../stores/Profile.store.js';
import LibraryStore from '../../../stores/Library.store.js';

import ProfileActions from '../../../actions/Profile.action.js';
import MessageActions from '../../../actions/Message.action.js';

describe('Test the library component', () => {
  let sandbox;

  beforeEach(function(done) {
    sandbox = sinon.sandbox.create(); // eslint-disable-line
    done();
  });

  afterEach(function(done) {
    sandbox.restore();
    React.unmountComponentAtNode(document.body); // Assuming mounted to document.body
    document.body.innerHTML = ''; // Just to be sure :-P
    setTimeout(done);
  });

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
    sandbox.spy(ProfileActions, 'addLibraryToFavorites');

    let element = React.createElement(Library, {libData: libraryMock, id: ''});
    let dom = TestUtils.renderIntoDocument(element);
    let dmn = TestUtils.findRenderedComponentWithType(dom, Library);

    ProfileStore.onUpdateProfile({userIsLoggedIn: true, favoriteLibraries: []});

    TestUtils.Simulate.click(dmn.refs.favoriteButton);
    expect(ProfileActions.addLibraryToFavorites.calledWith(dmn.state.library.data.branchId, dmn.state.library.data.agencyId)).to.equal(true);
  });

  it('Create library with data and click on remove from favorites', () => {
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
  });

  it('should test back button', () => {
    sandbox.spy(window.history, 'back');

    let element = React.createElement(Library, {libData: libraryMock, id: libraryMock.agencyId});
    let dom = TestUtils.renderIntoDocument(element);
    let dmn = TestUtils.findRenderedComponentWithType(dom, Library);
    TestUtils.Simulate.click(dmn.refs.backButton);

    expect(window.history.back.calledOnce).to.equal(true);
  });

  it('should test store onResponse', () => {
    let element = React.createElement(Library, {libData: {}, id: libraryMock.agencyId});
    let dom = TestUtils.renderIntoDocument(element);
    let dmn = TestUtils.findRenderedComponentWithType(dom, Library);
    ProfileStore.onUpdateProfile({userIsLoggedIn: true});
    LibraryStore.onLibraryIdUpdatedResponse(libraryMock);
    expect(ReactDom.findDOMNode(dmn).innerHTML).to.contain(libraryMock.agencyName);
  });

  it('should test editing of borrower info', () => {
    sandbox.spy(ProfileActions, 'checkBorrowerAndSaveToProfile');

    let element = React.createElement(Library, {libData: libraryMock, id: libraryMock.agencyId});
    let dom = TestUtils.renderIntoDocument(element);
    let dmn = TestUtils.findRenderedComponentWithType(dom, Library);

    ProfileStore.onUpdateProfile({
      userIsLoggedIn: true,
      favoriteLibraries: profileLibraryMock
    });

    dmn.refs.favoriteLibraryBorrowerId.value = '1234id';
    TestUtils.Simulate.change(dmn.refs.favoriteLibraryBorrowerId);

    dmn.refs.favoriteLibraryBorrowerPassword.value = '1234pass';
    TestUtils.Simulate.change(dmn.refs.favoriteLibraryBorrowerPassword);

    TestUtils.Simulate.submit(TestUtils.scryRenderedDOMComponentsWithClass(dom, 'library--favorite-library-form')[0]);

    expect(ProfileActions.checkBorrowerAndSaveToProfile.calledWith({
      updatedLibrary: {
        agencyID: libraryMock.branchId,
        libraryID: libraryMock.agencyId,
        borrowerID: '1234id',
        borrowerPIN: '1234pass',
        default: 0
      },
      favoriteLibraries: profileLibraryMock
    })).to.equal(true);
  });

  it('should test usermessage when no data is present in form', () => {
    sandbox.spy(MessageActions, 'setUserMessage');

    let element = React.createElement(Library, {libData: libraryMock, id: libraryMock.agencyId});
    let dom = TestUtils.renderIntoDocument(element);

    ProfileStore.onUpdateProfile({
      userIsLoggedIn: true,
      favoriteLibraries: profileLibraryWithPinMock
    });

    let dmn = TestUtils.findRenderedComponentWithType(dom, Library);

    dmn.refs.favoriteLibraryBorrowerId.value = '';
    TestUtils.Simulate.change(dmn.refs.favoriteLibraryBorrowerId);

    dmn.refs.favoriteLibraryBorrowerPassword.value = '';
    TestUtils.Simulate.change(dmn.refs.favoriteLibraryBorrowerPassword);

    const commentForm = TestUtils.scryRenderedDOMComponentsWithClass(dom, 'library--favorite-library-form')[0];
    TestUtils.Simulate.submit(commentForm);

    expect(MessageActions.setUserMessage.calledWith({message: 'Fejl, husk at udfylde alle felter', error: true})).to.equal(true);
  });

  it('should test all messages get sent to user', () => {
    sandbox.spy(MessageActions, 'setUserMessage');

    ProfileStore.onUpdateProfile({
      borrowerCheckStatus: 'pending'
    });
    expect(MessageActions.setUserMessage.calledWith({message: 'Checker brugerdata', error: false})).to.equal(true);
  });

  it('should test all messages get sent to user', () => {
    sandbox.spy(MessageActions, 'setUserMessage');

    ProfileStore.onUpdateProfile({
      borrowerCheckStatus: 'ok',
      borrowerInfoSaved: false
    });
    expect(MessageActions.setUserMessage.calledWith({message: 'Der skete en fejl! Prøv igen senere...', error: true})).to.equal(true);
  });

  it('should test all messages get sent to user', () => {
    sandbox.spy(MessageActions, 'setUserMessage');

    ProfileStore.onUpdateProfile({
      borrowerCheckStatus: 'ok',
      borrowerInfoSaved: true
    });
    expect(MessageActions.setUserMessage.calledWith({message: 'Dine brugerdata er gemt!', error: false})).to.equal(true);
  });

  it('should test all messages get sent to user', () => {
    sandbox.spy(MessageActions, 'setUserMessage');

    ProfileStore.onUpdateProfile({
      borrowerCheckStatus: 'borrower_not_found'
    });
    expect(MessageActions.setUserMessage.calledWith({message: 'Ugyldig bruger, check venligst låner ID og pinkode', error: true})).to.equal(true);
  });

  it('should test all messages get sent to user', () => {
    sandbox.spy(MessageActions, 'setUserMessage');

    ProfileStore.onUpdateProfile({
      borrowerCheckStatus: 'none'
    });
    expect(MessageActions.setUserMessage.calledWith({message: 'Der skete en fejl! Prøv igen senere...', error: true})).to.equal(true);
  });

  it('should test default values of borrower id on library', () => {
    sandbox.spy(ProfileActions, 'checkBorrowerAndSaveToProfile');

    let element = React.createElement(Library, {libData: libraryMock, id: libraryMock.agencyId});
    let dom = TestUtils.renderIntoDocument(element);
    let dmn = TestUtils.findRenderedComponentWithType(dom, Library);

    ProfileStore.onUpdateProfile({
      userIsLoggedIn: true,
      favoriteLibraries: profileLibraryWithPinMock
    });

    const borrId = dmn.refs.favoriteLibraryBorrowerId;
    const borrPass = dmn.refs.favoriteLibraryBorrowerPassword;

    expect(borrId.value).to.equal('PPPPPPPPPP');
    expect(borrPass.value).to.equal('PPPP');

    borrId.value = '1234id';
    TestUtils.Simulate.change(borrId);

    borrPass.value = '1234pass';
    TestUtils.Simulate.change(borrPass);

    TestUtils.Simulate.submit(TestUtils.scryRenderedDOMComponentsWithClass(dom, 'library--favorite-library-form')[0]);

    expect(ProfileActions.checkBorrowerAndSaveToProfile.calledWith({
      updatedLibrary: {
        agencyID: libraryMock.branchId,
        libraryID: libraryMock.agencyId,
        borrowerID: '1234id',
        borrowerPIN: '1234pass',
        default: 0
      },
      favoriteLibraries: profileLibraryWithPinMock
    })).to.equal(true);
  });
});
