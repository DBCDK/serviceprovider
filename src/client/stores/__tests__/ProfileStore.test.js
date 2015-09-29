'use strict';

import {assert} from 'chai';

import ProfileActions from '../../actions/Profile.action.js';
import ProfileStore from '../Profile.store.js';

describe('Testing the onLikeObject method in Profile.store', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create(); // eslint-disable-line
    sandbox.spy(ProfileActions, 'saveLike'); // eslint-disable-line
    ProfileStore.getProfile().likes = [];
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('Should create a new like', () => {
    assert.equal(ProfileStore.getProfile().likes.length, 0, 'No likes in store yet');

    ProfileStore.onLikeObject('objId');

    assert.equal(ProfileStore.getProfile().likes.length, 1, 'One like is now found in the store');

    assert.isTrue(ProfileActions.saveLike.called, 'ProfileActions.saveLike was called');
    assert.isTrue(ProfileActions.saveLike.calledWith({item_id: 'objId', action: 'like'}), 'Given arguments was as expected');
  });

  it('Should change a dislike to a positive like', () => {
    ProfileStore.getProfile().likes.push({item_id: 'some_pid', value: '-1', id: 1, profileId: 1});

    ProfileStore.onLikeObject('some_pid');

    assert.isTrue(ProfileActions.saveLike.called, 'ProfileActions.saveLike was called');
    assert.isTrue(ProfileActions.saveLike.calledWith({item_id: 'some_pid', action: 'like', id: 1, uid: 1}), 'Given arguments was as expected');
  });

  it('Should remove an existing like', () => {
    ProfileStore.getProfile().likes.push({item_id: 'some_pid', value: '1', id: 1, profileId: 1});

    ProfileStore.onLikeObject('some_pid');

    assert.isTrue(ProfileActions.saveLike.called, 'ProfileActions.saveLike was called');
    assert.isTrue(ProfileActions.saveLike.calledWith({item_id: 'some_pid', action: 'remove', id: 1, uid: 1}), 'Given arguments was as expected');
  });

  it('Should create a new dislike', () => {
    assert.equal(ProfileStore.getProfile().likes.length, 0, 'No likes in store yet');

    ProfileStore.onDislikeObject('objId');

    assert.equal(ProfileStore.getProfile().likes.length, 1, 'One like is now found in the store');

    assert.isTrue(ProfileActions.saveLike.called, 'ProfileActions.saveLike was called');
    assert.isTrue(ProfileActions.saveLike.calledWith({item_id: 'objId', action: 'dislike'}), 'Given arguments was as expected');
  });

  it('Should change a dislike to a positive like', () => {
    ProfileStore.getProfile().likes.push({item_id: 'some_pid', value: '1', id: 1, profileId: 1});

    ProfileStore.onDislikeObject('some_pid');

    assert.isTrue(ProfileActions.saveLike.called, 'ProfileActions.saveLike was called');
    assert.isTrue(ProfileActions.saveLike.calledWith({item_id: 'some_pid', action: 'dislike', id: 1, uid: 1}), 'Given arguments was as expected');
  });

  it('Should remove an existing like', () => {
    ProfileStore.getProfile().likes.push({item_id: 'some_pid', value: '-1', id: 1, profileId: 1});

    ProfileStore.onDislikeObject('some_pid');

    assert.isTrue(ProfileActions.saveLike.called, 'ProfileActions.saveLike was called');
    assert.isTrue(ProfileActions.saveLike.calledWith({item_id: 'some_pid', action: 'remove', id: 1, uid: 1}), 'Given arguments was as expected');
  });

});
