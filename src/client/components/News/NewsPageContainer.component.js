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

import WorkListActions from '../../actions/WorkList.action.js';
import WorkListStore from '../../stores/WorkList.store.js';


export default class NewsPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.item = props.data || null;
    this.state.workList = {elements: []};

    this.unsubscribe = [];
    this.unsubscribe.push(NewsStore.listen(store => this.updateNewsInformation(store, props.id)));
    this.unsubscribe.push(WorkListStore.listen(store => this.setState({workList: store || null})));
  }

  updateNewsInformation(store, id) {
    const item = store.singles[id] || null;
    if (item) {
      this.getRelatedMaterials(item);
      this.setState({item});
    }
  }

  getRelatedMaterials(newsPage) {
    if (newsPage.relatedWorks.length) {
      WorkListActions.getList(newsPage.relatedWorks);
    }
  }

  componentDidMount() {
    if (!this.state.item) {
      NewsActions.fetchNewsById({node: this.props.id});
    }
    else {
      this.getRelatedMaterials(this.state.item);
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

    return (<NewsPageLayout {...this.state.item} works={this.state.workList.elements} />);
  }
}

NewsPageContainer.displayName = 'NewsPageContainer';
NewsPageContainer.propTypes = {
  data: React.PropTypes.object,
  id: React.PropTypes.string
};
