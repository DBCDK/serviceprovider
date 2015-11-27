'use strict';

/**
 * @file
 * Container providing dislike functionality
 */

import React from 'react';
import ImageSwitch from '../ImageSwitch/ImageSwitchComponent.component.js';

// Actions
import ProfileActions from '../../actions/Profile.action.js';

// Stores
import ProfileStore from '../../stores/Profile.store.js';

export default class DislikeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.unsubscribe = [
      ProfileStore.listen(this.updateProfile.bind(this))
    ];

    this.state = ProfileStore.getState();
  }

  componentWillUnmount() {
    this.unsubscribe.forEach(
      (unsubscriber) => {
        unsubscriber();
      }
    );
  }

  updateProfile(profile) {
    this.setState(profile);
  }

  onClick(e) {
    e.preventDefault();
    ProfileActions.dislikeObject(this.props.objectId);
  }

  isToggled() {
    const likes = this.state.profile.likes;

    const obj = likes.filter((like) => {
      return like.item_id === this.props.objectId;
    });

    return obj.length ? (obj[0].value === '-1') : false;
  }

  render() {
    const isToggled = this.isToggled();

    return (
      <a href='#' onClick={this.onClick.bind(this)} >
        <ImageSwitch isToggled={isToggled} offStateImg='/dislike_inactive.png' onStateImg='/dislike_active.png' />
      </a>
    );
  }
}

DislikeContainer.displayName = 'DislikeContainer';
DislikeContainer.propTypes = {
  objectId: React.PropTypes.string.isRequired
};
