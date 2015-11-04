'use strict';

/**
 * @file
 * ProfileImage displays either a round profile image or and image editor.
 */

import React from 'react';
import Image from './Image.component.js';
import ImageEditor from '../ImageEditor/ImageEditor.component.js';
import ProfileActions from '../../actions/Profile.action.js';


const ProfileImage = React.createClass({
  displayName: 'ReactProfileImage',

  propTypes: {
    editable: React.PropTypes.bool,
    url: React.PropTypes.string
  },

  _handleSaveImageUrl(imageUrl) {
    ProfileActions.updateProfile({imageUrl: imageUrl});
  },

  render() {
    let url = this.props.url;
    let editable = this.props.editable;
    let imgComponent = editable ? <ImageEditor
      initialImageUrl={url} onSave={this._handleSaveImageUrl}/> : <Image url={url} />;
    return (
      <div>
        {imgComponent}
      </div>
    );
  }
});

export default ProfileImage;
