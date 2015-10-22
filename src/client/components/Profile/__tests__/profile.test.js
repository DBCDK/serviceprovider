'use strict';

import {assert, expect} from 'chai';
import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {extend} from 'lodash';

import Profile from '../Profile.component.js';
import ProfileHeader from '../ProfileHeader.component.js';
import Image from '../ProfileImage.component.js';
import ResetLikesDislikesButton from '../ResetLikesDislikesButton.component.js';
import ProfileActions from '../../../actions/Profile.action.js';
import ProfileLibraries from '../ProfileLibraries.component.js';

let testProfile = {
  name: 'I-Love-Ponys',
  imageUrl: '/dummy.jpg',
  followingCount: 16,
  groupsCount: 7,
  followersCount: 35,
  editEnabled: false
};


describe('Test the Profile component', () => {
  it('should toggle to edit mode when edit button is clicked', (done) => {
    let element = React.createElement(Profile, {testProfile});
    let dom = TestUtils.renderIntoDocument(element);
    assert.equal(testProfile.editEnabled, false);
    let header = TestUtils.findRenderedComponentWithType(dom, ProfileHeader);
    let toggleButtonText = ReactDom.findDOMNode(header.refs.toggleButton).text;
    expect(toggleButtonText).to.be.equal('Rediger');
    TestUtils.Simulate.click(header.refs.toggleButton);
    setTimeout(() => {
      toggleButtonText = ReactDom.findDOMNode(header.refs.toggleButton).text;
      expect(toggleButtonText).to.be.equal('Gem');
      done();
    }, 0);
  });

  it('should have a profile image in non-edit mode', () => {
    let element = React.createElement(Profile, {testProfile});
    let dom = TestUtils.renderIntoDocument(element);
    assert.equal(testProfile.editEnabled, false);
    let image = TestUtils.findRenderedComponentWithType(dom, Image);
    assert.instanceOf(image, Image);
  });

  it('should test reset likes button', () => {
    let sandbox = sinon.sandbox.create(); // eslint-disable-line
    sandbox.spy(ProfileActions, 'resetLikes');

    let element = React.createElement(Profile, {testProfile});
    let dom = TestUtils.renderIntoDocument(element);
    let resbutton = TestUtils.findRenderedComponentWithType(dom, ResetLikesDislikesButton);
    TestUtils.Simulate.click(resbutton.refs.resetButton);

    expect(ProfileActions.resetLikes.calledOnce).to.equal(true);
    sandbox.restore();
  });

  it('should have a favorite library', () => {
    let testProfileWithLibraries = extend({}, testProfile);
    testProfileWithLibraries.favoriteLibraries = [
      {
        agencyID: '710118',
        libraryID: '710100',
        borrowerID: '123',
        default: 1
      }
    ];
    testProfileWithLibraries.favoriteLibrariesResolved = [
      {"agencyName":"Københavns Biblioteker","agencyId":"710100","branchId":"710118","branchNameDan":"Kulturstationen Vanløse. Biblioteket","branchPhone":"33 66 30 00","branchEmail":"bibliotek@kff.kk.dk","postalAddress":"Jernbane Alle 38","postalCode":"2720","city":"Vanløse","openingHoursDan":"Åbningstider\r\nMandag-søndag: kl. 8-22 \r\n\r\nAdgang med sundhedskort\r\nMandag-fredag: kl. 17-22\r\nLørdag: kl. 14-22\r\nSøndag: kl. 8-22\r\n \r\nPersonlig vejledning\r\nMandag-fredag: kl. 10-17\r\nLørdag: kl. 10-14\r\n\r\nBorgerservice\r\nMandag-fredag: kl. 10-17\r\nLørdag: kl. 10-14","branchWebsiteUrl":"http://bibliotek.kk.dk/","query":"710118"} // eslint-disable-line
    ];

    let element = React.createElement(ProfileLibraries, {
      store: testProfileWithLibraries,
      libraries: testProfileWithLibraries.favoriteLibraries,
      actions: {libraryIdUpdated: {trigger: () => {}}}
    });
    let dom = TestUtils.renderIntoDocument(element);
    expect(dom.getDOMNode().innerHTML).to.contain('Kulturstationen Vanløse. Biblioteket');
  });

  it('should have a favorite library and be selectable as default', () => {
    let testProfileWithLibraries = extend({}, testProfile);
    testProfileWithLibraries.favoriteLibraries = [
      {
        agencyID: '710118',
        libraryID: '710100',
        borrowerID: '123',
        default: 0
      }, {
        agencyID: '710111',
        libraryID: '710100',
        borrowerID: '', default: 1
      }
    ];
    testProfileWithLibraries.favoriteLibrariesResolved = [
      {"agencyName":"Københavns Biblioteker","agencyId":"710100","branchId":"710118","branchNameDan":"Kulturstationen Vanløse. Biblioteket","branchPhone":"33 66 30 00","branchEmail":"bibliotek@kff.kk.dk","postalAddress":"Jernbane Alle 38","postalCode":"2720","city":"Vanløse","openingHoursDan":"Åbningstider\r\nMandag-søndag: kl. 8-22 \r\n\r\nAdgang med sundhedskort\r\nMandag-fredag: kl. 17-22\r\nLørdag: kl. 14-22\r\nSøndag: kl. 8-22\r\n \r\nPersonlig vejledning\r\nMandag-fredag: kl. 10-17\r\nLørdag: kl. 10-14\r\n\r\nBorgerservice\r\nMandag-fredag: kl. 10-17\r\nLørdag: kl. 10-14","branchWebsiteUrl":"http://bibliotek.kk.dk/","query":"710118"}, // eslint-disable-line
      {"agencyName":"Københavns Biblioteker","agencyId":"710100","branchId":"710111","branchNameDan":"Nørrebro Bibliotek","branchPhone":"33 66 30 00","branchEmail":"bibliotek@kff.kk.dk","postalAddress":"Bragesgade 8","postalCode":"2200","city":"København N","openingHoursDan":"Alle dage kl. 8-22\r\n\r\nAdgang med sundhedskort:\r\nMandag-fredag kl. 19-22\r\nLørdag kl. 15-22\r\nSøndag kl. 8-22\r\n\r\nPersonlig vejledning:\r\nMandag og onsdag kl. 11-16\r\nTirsdag og torsdag kl. 13-18\r\nFredag og lørdag  kl. 11-15","branchWebsiteUrl":"http://bibliotek.kk.dk/biblioteker/norrebro","query":"710111"} // eslint-disable-line
    ];

    let defaultLibrary;
    let removedLibrary;

    let element = React.createElement(ProfileLibraries, {
      store: testProfileWithLibraries,
      libraries: testProfileWithLibraries.favoriteLibraries,
      actions: {
        libraryIdUpdated: {
          trigger() {}
        },
        toggleEdit() {},
        setLibraryAsDefault(val) {
          defaultLibrary = val;
        },
        removeLibraryFromFavorites(val) {
          removedLibrary = val;
        }
      },
      editable: true,
      pickupLocationText: 'afhentningssted',
      setAsText: 'Vælg som'
    });
    let dom = TestUtils.renderIntoDocument(element);
    expect(dom.getDOMNode().innerHTML).to.contain('Nørrebro Bibliotek');
    expect(dom.getDOMNode().innerHTML).to.contain('Vælg som');
    expect(dom.getDOMNode().innerHTML).to.contain('afhentningssted');
    let btn = TestUtils.scryRenderedDOMComponentsWithClass(dom, 'button tiny')[2];
    TestUtils.Simulate.click(btn);
    assert.equal(defaultLibrary, '710118');

    let remove_btn = TestUtils.scryRenderedDOMComponentsWithClass(dom, 'button tiny')[1];
    TestUtils.Simulate.click(remove_btn);
    assert.equal(removedLibrary, '710118');
  });
});
