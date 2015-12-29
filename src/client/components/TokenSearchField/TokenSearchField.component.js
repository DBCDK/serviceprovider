'use strict';

/**
 * @file
 * Main component for showing searchstring as buttons
 *
 * Properties:
 * query: an array of query elements. Only supports string elements for now.
 * change optional callback function for when the input field is updated
 */

import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import TokenList from '../TokenList/TokenList.component.js';
import {updateQueryFromString} from '../../../utils/QueryString.util';
import QueryActions from '../../actions/QueryUpdate.action';

const TokenSearchField = React.createClass({
  displayName: 'TokenSearchField.component',
  propTypes: {
    change: PropTypes.func,
    focus: PropTypes.func,
    pending: PropTypes.bool,
    placeholder: PropTypes.string,
    query: PropTypes.array.isRequired,
    translations: PropTypes.object,
    update: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      value: '',
      hasFocus: false,
      text: this.getQueryTexts()
    };
  },

  componentDidMount() {
    this.hasScrolled = false;
    if (window) {
      window.addEventListener('touchmove', () => {
        if (!this.hasScrolled) {
          this.hasScrolled = true;
          this.onBlur();
        }
      });
    }
  },

  hasScrolled: false,

  removeElement(element) {
    let query = _.remove(this.props.query, (queryObject)=> queryObject !== element);
    const text = query.map((e)=> e.value).join(' ');
    this.props.update(query);
    this.setState({text: text});
    QueryActions.queryElementWasRemoved(element);
  },

  onSubmit(event) {
    // make sure form is not submitted, it is handled with js
    // @todo implement fallback for when js is failing
    event.preventDefault();

    // removing focus from the textfield
    this.onBlur();
    const focus = false;
    this.props.focus(focus);

    // update query with the updated text string
    let text = this.state.text && this.state.text.trim() || '';
    let query = updateQueryFromString(text, this.props.query);

    // Send updated query to parent component
    this.props.update(query);

    // Update local state: remove focus and empty textfield
    this.setState({
      text: '',
      hasFocus: focus
    });
  },

  getQueryTexts() {
    return this.props.query.map((element)=> element.value).join(' ');
  },

  setFocus(state) {
    this.hasScrolled = false;
    let text = state && this.getQueryTexts() || this.state.text;
    this.props.focus(state); // mismatch between this and the below hasFocus value
    this.setState({hasFocus: state, text});
  },

  onBlur() {
    ReactDOM.findDOMNode(this.refs.searchfield).blur();
  },

  onChange(event) {
    let text = event.target.value;
    if (!this.state.hasFocus) {
      text = this.getQueryTexts() + ' ' + text;
    }
    this.setState({text});
    if (this.props.change) {
      this.props.change(event.target.value);
    }
  },

  onKey(event) {
    if (event.key && event.key === 'Escape') {
      this.onBlur();
      this.setFocus(false);
    }
  },

  render() {
    const {hasFocus, text} = this.state;
    const {query, pending} = this.props;
    const tokenClasses = !hasFocus && 'tokens-wrapper' || 'tokens-wrapper hide';
    const spinnerClass = pending ? 'token-searchfield--spinner pending' : 'token-searchfield--spinner';

    return (
      <div className='token-searchfield' onKeyUp={this.onKey} >
        <form onSubmit={this.onSubmit} >
          <div className="row" >
            <div className="large-24 columns" >
              <div className="row collapse" >
                <div className="small-20 columns" >
                  <div className='tokens' >
                    <div className={tokenClasses} >
                      <TokenList query={query} remove={this.removeElement} translations={this.props.translations} />
                    </div>
                  </div>
                  <input className='searchfield'
                         onChange={this.onChange}
                         onClick={this.setFocus.bind(this, true)}
                         onFocus={this.setFocus.bind(this, true)}
                         placeholder={this.props.placeholder}
                         ref='searchfield'
                         type='text'
                         value={text || ''}
                  />
                  <span className={`${spinnerClass}`} />
                </div>
                <div className="small-4 columns" >
                  <input className='button postfix' onClick={this.onSubmit} type='submit' value='Søg' />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
});

export default TokenSearchField;
