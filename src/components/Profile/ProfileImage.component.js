/**
 * Created by matias on 22-07-15.
 */

'use strict';
/**
 * @file
 * Comment
 */

import React from 'react';
import Image from './Image.component.js';
import ImageEditor from '../ImageEditor/ImageEditor.component.js';
import ProfileActions from '../../actions/Profile.action.js';


const ProfileImage = React.createClass({

  _handleSaveImageUrl: function(imageUrl) {
    ProfileActions.updateImageUrl(imageUrl);
  },

  render: function () {
    let url = this.props.url;
    let editable = this.props.editable;
    let imgComponent = editable ? <ImageEditor initialImageUrl={url} onSave={this._handleSaveImageUrl} /> : <Image url={url} />;
    return (
      <div>
        {imgComponent}
      </div>
    );
  }
});

export default ProfileImage;
