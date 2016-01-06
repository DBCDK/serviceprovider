'use strict';

/**
 * @file
 * Creates a list of tokens
 *
 * This component is only used internally for the TokenSearchField
 *
 * Properties:
 * query: array of strings
 * remove: callback function for removing elements with a certain index
 *
 */

import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Token from './Token.component.js';

/**
 * Get a random color. This function is used for development only.
 * Should be exchanged with a colorscheme
 *
 * @returns {string}
 * @private
 */
function _getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/**
 * Return a color depending on the type
 *
 * @param type
 * @returns {*}
 */
function getColor(type) {
  switch (type) {
    case 'text':
      return '#222';
    default:
      return '#61b6d9';
  }
}

export default React.createClass({
  displayName: 'TokenList.component',
  propTypes: {
    hasFocus: PropTypes.bool,
    setFocus: PropTypes.func,
    query: PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired,
    translations: PropTypes.object
  },

  getInitialState() {
    let queries = this.props.query.map((query)=> {
      return {
        text: query,
        color: _getRandomColor()
      };
    });
    return {
      query: queries
    };
  },
  getTranslation(type, text) {
    if (this.props.translations && type !== 'text' && this.props.translations[text]) {
      return this.props.translations[text];
    }

    return text;
  },

  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  },

  getListWidth(tokens) {
    if (!tokens.length) {
      return 0;
    }
    const padding = 4;
    const emptySpace = 75;
    return tokens
        .map(element => element && ReactDOM.findDOMNode(element).offsetWidth)
        .reduce((sum, width) => sum + width + padding) + emptySpace;
  },

  scrollToEnd(scrollWrapper) {
    ReactDOM.findDOMNode(scrollWrapper).scrollLeft = 10000;
  },

  containsClass(className, list) {
    return Array.prototype.filter.call(list, (listClassName) => className === listClassName).length && true || false;
  },

  onEventListClick(event) {
    if (this.containsClass('tokenlist', event.target.classList) && this.props.setFocus) {
      this.props.setFocus(true);
    }
  },

  updateListWidth(listWidth) {
    if (listWidth !== this.state.listWidth) {
      this.setState({listWidth});
    }
  },

  componentDidUpdate() {
    this.scrollToEnd(this.refs.tokenList);
    this.updateListWidth(this.getListWidth(this._tokens));
  },

  componentDidMount() {
    this.scrollToEnd(this.refs.tokenList);
  },

  render() {
    // _tokens contains a list of Token Components.
    this._tokens = [];
    const {query, remove} = this.props;
    const tokenClasses = !this.props.hasFocus && 'tokens-wrapper' || 'tokens-wrapper hide';

    const tokens = query.map((element, index)=> {
      return (
        <Token
          ref={component => this._tokens.push(component)}
          color={getColor(element.type)}
          index={element.index}
          key={index}
          remove={remove.bind(null, element)}
          text={this.getTranslation(element.type, this.replaceAll(element.value.toString(), ',', ' eller '))}
          />
      );
    });

    return (
      <div ref='tokenList' className={tokenClasses} >
        <div
          className='tokenlist'
          style={{width: this.state.listWidth || '1000px'}}
          onClick={(event) => this.onEventListClick(event)}
          >
          {tokens}
        </div>
      </div>
    );
  }
});
