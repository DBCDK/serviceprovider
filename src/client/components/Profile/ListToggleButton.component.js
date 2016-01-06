'use strict';

/**
 * @file
 * ToggleButton component displays toggle buttons.
 */

import React, {PropTypes} from 'react';

class ListToggleButton extends React.Component {

  constructor() {
    super();
  }

  render() {
    const content = (this.props.visible === true) ? (<div className='small-24 expand--content'>{this.props.content}</div>) : null;

    const buttonClass = (this.props.visible === true) ? 'expanded' : 'collapsed';

    return (
      <div className='row expand--container'>
        <div className={'expand--button small-24 ' + buttonClass} onClick={this.props.toggleDisplay} >
          <h2 className='small-24'>{this.props.buttonLabel}</h2>
        </div>
        {content}
      </div>
    );
  }

}

ListToggleButton.propTypes = {
  visible: PropTypes.bool,
  content: PropTypes.element,
  buttonLabel: PropTypes.string,
  toggleDisplay: PropTypes.func
};

ListToggleButton.displayName = 'ListToggleButton.component';

export default ListToggleButton;
