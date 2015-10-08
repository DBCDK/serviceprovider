'use strict';

import React, {PropTypes} from 'react';

class ResetLikesDislikesButtonComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  onResetClicked() {
    if (this.props.resetCallback) {
      this.props.resetCallback();
    }
  }

  render() {
    return (
      <div className="row">
        <a className='button expand' onClick={this.onResetClicked.bind(this)} ref='resetButton'>
          {this.props.buttonText}
        </a>
      </div>
    );
  }
}

ResetLikesDislikesButtonComponent.displayName = 'ResetLikesDislikesButton.component';
ResetLikesDislikesButtonComponent.propTypes = {
  buttonText: PropTypes.string.isRequired,
  resetCallback: PropTypes.func
};

export default ResetLikesDislikesButtonComponent;
