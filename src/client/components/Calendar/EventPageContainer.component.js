'use strict';

/**
 * @file
 * Wrapper for a news page.
 *
 * @usage
 * <EventPageContainer id=1 data={data} />
 */

import React from 'react';
import EventActions from '../../actions/Event.action.js';
import EventStore from '../../stores/Event.store.js';
import EventPageLayout from './EventPageLayout.component.js';

export default class EventPageContainer extends React.Component {
  constructor(props) {
    super();
    this.state = {};
    this.state.item = props.data || null;
    this.unsubscribe = EventStore.listen((store) => {
      this.setState({item: store.singles[props.id] || null});
    });
  }

  componentDidMount() {
    if (!this.state.item) {
      EventActions.fetchEventById({node: this.props.id});
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

    return (<EventPageLayout {...this.state.item} />);
  }
}

EventPageContainer.displayName = 'EventPageContainer';
EventPageContainer.propTypes = {
  data: React.PropTypes.object,
  id: React.PropTypes.string
};
