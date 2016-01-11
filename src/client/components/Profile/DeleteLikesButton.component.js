'use strict';

import React from 'react';

// Actions
import ProfileActions from '../../actions/Profile.action';

export default class DeleteLikesButton extends React.Component {
  onButtonDown(e) {
    if (confirm('Alle dine likes vil blive slettet.') || e.testing) { // eslint-disable-line
      ProfileActions.deleteLikes();
    }
  }

  render() {
    return (
      <div className="row" >
        <div className='column small-12' >
          <a className='button tiny' onClick={this.onButtonDown.bind(this)} >Slet mine likes</a>
        </div>
      </div>
    );
  }
}

DeleteLikesButton.displayName = 'DeleteLikesButton';
