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
      const link = `/event/${element.nid}`;
      return (
        <EventItem key={element.nid} {...element} link={link} zebra={zebra} />
      );
    });
  }

  /**
   * Show all loaded news
   * @todo when the ddbContent service supports pagination, this should call an action to load more events
   * @param event
   */
  showAllEvent(event) {
    event.preventDefault();
    const showNumberOfPosts = this.state.events.items.length;
    this.setState({showNumberOfPosts});
  }

  render() {
    const eventsDefault = slice(this.state.events.items, 0, this.state.showNumberOfPosts);
    const eventsMore = slice(this.state.events.items, this.state.showNumberOfPosts);

    return (
      <div className='news' >
        <div className='news-items' >
          <div className='news-items-headline' >
            <span>Det sker</span>
          </div>
          <div className="news-default" >
            {this.mapEvent(eventsDefault)}
          </div>
          <div className={`news-more hide`} >
            {this.mapEvent(eventsMore)}
          </div>
        </div>
        <div className='news-items-link-container' >
          {eventsMore.length &&
          (<a className='link show-more' href='#' onClick={this.showAllEvent.bind(this)} >Se flere begivenheder...</a>) || null
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


