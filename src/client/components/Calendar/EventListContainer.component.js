'use strict';

/**
 * @file
 * Shows a list of news from the ddbContent service
 *
 * @usage
 * <EventListContainer loadNumberOfPosts=10 showNumberOfPosts=4 />
 */

import {slice} from 'lodash';
import React from 'react';
import EventItem from './EventListItemLayout.component.js';
import EventActions from '../../actions/Event.action.js';
import EventStore from '../../stores/Event.store.js';

export default class EventListContainer extends React.Component {
  constructor(props) {
    super();
    EventStore.listen(this.setState.bind(this));
    this.state = props.data || EventStore.getInitialState();
    this.state.showNumberOfPosts = props.showNumberOfPosts || 10;
  }

  componentDidMount() {
    EventActions.fetchEventList({amount: this.props.loadNumberOfPosts || 3});
  }

  /**
   * maps Event objects to a Event compoment
   * @param Event
   * @returns {*}
   */
  mapEvent(event) {
    return event.map((element, i) => {
      const zebra = (i % 2 === 0) && 'even' || 'odd';
      const link = `/news/${element.nid}`;
      return (
        <EventItem key={element.nid} {...element} link={link} zebra={zebra} />
      );
    });
  }

  /**
   * Show all loaded news
   * @todo when the ddbContent service supports pagination, this should call an action to load more news
   * @param event
   */
  showAllEvent(event) {
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
            {this.mapEvent(newsDefault)}
          </div>
          <div className={`news-more hide`} >
            {this.mapEvent(newsMore)}
          </div>
        </div>
        <div className='news-items-link-container' >
          {newsMore.length &&
          (<a className='link show-more' href='#' onClick={this.showAllEvent.bind(this)} >Se flere nyheder...</a>) || null
          }
        </div>
      </div>
    );
  }
}

EventListContainer.displayName = 'EventListContainer';
EventListContainer.propTypes = {
  data: React.PropTypes.object,
  loadNumberOfPosts: React.PropTypes.string,
  showNumberOfPosts: React.PropTypes.string
};


