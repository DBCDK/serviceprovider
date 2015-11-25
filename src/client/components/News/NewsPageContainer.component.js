'use strict';

/**
 * @file
 * Wrapper for a news page.
 *
 * @usage
 * <NewsPageContainer id=1 data={data} />
 */

import React from 'react';
import NewsActions from '../../actions/News.action.js';
import NewsStore from '../../stores/News.store.js';
import NewsPageLayout from './NewsPageLayout.component.js';

export default class NewsPageContainer extends React.Component {
  constructor(props) {
    super();
    this.state = {};
    this.state.item = props.data || null;
    this.unsubscribe = NewsStore.listen((store) => {
      this.setState({item: store.singles[props.id] || null});
    });
  }

  componentDidMount() {
    if (!this.state.item) {
      NewsActions.fetchNewsById({node: this.props.id});
    }
  }

  componentDidUnMount() {
    this.unsubscribe();
  }

  render() {
    if (!this.state.item) {
      return (<div><span className='loader' ></span></div>);
    }
    if (this.state.item.error) {
      return (<div className='news-error' >Nyheden findes ikke</div>);
    }

    return (<NewsPageLayout {...this.state.item} />);
  }
}

NewsPageContainer.displayName = 'NewsPageContainer';
NewsPageContainer.propTypes = {
  data: React.PropTypes.object,
  id: React.PropTypes.string
};
