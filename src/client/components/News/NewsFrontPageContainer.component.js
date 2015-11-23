'use strict';

import {slice} from 'lodash';
import React from 'react';
import NewsItem from './NewsItem.component.js';
import NewsActions from '../../actions/News.action.js';
import NewsStore from '../../stores/News.store.js';

export default class NewsFrontPageContainerComponent extends React.Component {
  constructor(props) {
    super();
    NewsStore.listen(this.setState.bind(this));
    this.state = NewsStore.getInitialState();
    this.state.showNumberOfPosts = props.showNumberOfPosts || 10;
    NewsActions.fetchNewsList({amount: props.loadNumberOfPosts || 3});
  }

  /**
   * maps news objects to a news compoment
   * @param news
   * @returns {*}
   */
  mapNews(news) {
    return news.map((element, i) => {
      const zebra = (i % 2 === 0) && 'even' || 'odd';
      const link = `/news/${element.id}`;
      return (
        <NewsItem key={element.id} {...element} link={link} zebra={zebra} />
      );
    });
  }

  /**
   * Show all loaded news
   * @todo when the ddbContent service supports pagination, this should call an action to load more news
   * @param event
   */
  showAllNews(event) {
    event.preventDefault();
    const showNumberOfPosts = this.state.news.items.length;
    this.setState({showNumberOfPosts});
  }

  render() {
    const newsDefault = slice(this.state.news.items, 0, this.state.showNumberOfPosts);
    const newsMore = slice(this.state.news.items, this.state.showNumberOfPosts);

    return (
      <div className='news' >
        <div className='news-items' >
          <div className='news-items-headline' >
            <span>Nyt fra biblioteket</span>
          </div>
          <div className="news-default" >
            {this.mapNews(newsDefault)}
          </div>
          <div className={`news-more hide`} >
            {this.mapNews(newsMore)}
          </div>
        </div>
        <div className='news-items-link-container' >
          {newsMore.length &&
          (<a className='link' href='#' onClick={this.showAllNews.bind(this)} >Se flere nyheder...</a>) || null
          }
        </div>
      </div>
    );
  }
}

NewsFrontPageContainerComponent.displayName = 'NewsFrontPageContainerComponent';
NewsFrontPageContainerComponent.propTypes = {
  loadNumberOfPosts: React.PropTypes.string,
  showNumberOfPosts: React.PropTypes.string
};


