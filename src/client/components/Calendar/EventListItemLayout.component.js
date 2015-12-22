'use strict';

/**
 * @file
 * Shows a newsitem i list form layout
 *
 * @usage
 * <EventListItemLayout {...data} />
 *
 */

import React from 'react';

export default class EventListItemLayout extends React.Component {
  render() {

    const months = [
      'Januar',
      'Februar',
      'Marts',
      'April',
      'Maj',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'December',
    ];
    let datetimeParts = this.props.start.split(/[:\ \-]/);
    const time = datetimeParts[3] + ":" + datetimeParts[4];
    const date = datetimeParts[2] + ". " + months[Number(datetimeParts[1])+1];

    return (
      <div className={`news-item clearfix ${this.props.zebra}`} >
        <a className="" href={`${this.props.link}`} >
          <div className="time">{date} kl. {time}</div>
          <div className="headline" >{this.props.title}</div>
          <div className="image" >
            {this.props.image &&
            <img alt={this.props.title} className='news-item-image' src={`http://rest.filmstriben.dbc.inlead.dk/web/${this.props.image}`} />
            }
          </div>
          <div className="lead" >
            {this.props.lead}
          </div>
          <span className="link" >Læs mere</span>
        </a>
      </div>
    );
  }
}

EventListItemLayout.displayName = 'EventItem';
EventListItemLayout.propTypes = {
  body: React.PropTypes.string.isRequired,
  image: React.PropTypes.string,
  lead: React.PropTypes.string.isRequired,
  start: React.PropTypes.string,
  link: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  zebra: React.PropTypes.string.isRequired
};
