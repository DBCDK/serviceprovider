'use strict';

/**
 * @file
 * Token component displayed as a removable button in an inputfield
 *
 * This component is only used internally for the TokenList
 *
 * Properties:
 * color: the color of the token, supports any kind of CSS color
 * text: the string to be displayed on the button
 * remove: callback function for removing an element
 * index: index of the element
 */

import React, {PropTypes} from 'react';

export default React.createClass({
  displayName: 'Token.component',
  propTypes: {
    color: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  },

  render() {
    let {color, text, remove} = this.props;

    // Background color is dynamic and therefore set inline
    let style = {
      backgroundColor: color
    };

    return (
      <div className='token' style={style}>
        <span className="text">{text}</span>
        <span className="remove" onClick={remove}>x</span>
      </div>
    );
  }
});
