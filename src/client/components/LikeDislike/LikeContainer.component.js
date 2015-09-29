'use strict';

/**
 * @file
 * Container providing like functionality
 */

import React from 'react';
import {ImageSwitch} from 'dbc-react-components';

// actions
import ProfileActions from '../../actions/Profile.action.js';

// store
import ProfileStore from '../../stores/Profile.store.js';

const LikeContainer = React.createClass({
  displayName: 'LikeContainer.component',

  propTypes: {
    objectId: React.PropTypes.string.isRequired
  },

  getInitialState() {
    const profile = ProfileStore.getProfile();
    return {profile: profile};
  },

  componentDidMount() {
    ProfileStore.listen(this.updateProfile);
  },

  updateProfile(profile) {
    this.setState({profile: profile});
  },

  onClick(e) {
    e.preventDefault();
    ProfileActions.likeObject(this.props.objectId);
  },

  isToggled() {
    const likes = this.state.profile.likes;

    const obj = likes.filter((like) => {
      return like.item_id === this.props.objectId;
    });

    return obj.length ? (obj[0].value === '1') : false;
  },

  render() {
    const isToggled = this.isToggled();

    return (
      <a href='#' onClick={this.onClick} >
        <ImageSwitch isToggled={isToggled} offStateImg='/like_inactive.png' onStateImg='/like_active.png' />
      </a>
    );
  }
});

export default LikeContainer;
