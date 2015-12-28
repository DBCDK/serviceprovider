'use strict';

/**
 * @file
 * Shows a list of libraries from the ddbContent service
 *
 * @usage
 * <LibraryAffiliateList />
 */

import React from 'react';

export default class LibraryAffiliateListItem extends React.Component {
  getMarkup(html) {
    return {__html: html};
  }

  getOpeningHours(opening_hours_array) {
    const oneDayInMilliSeconds = 86400000;
    let today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);
    const lastDay = today.getTime() + (7 * oneDayInMilliSeconds);

    let day = today.getTime();
    let counter = 0;
    let days = {};
    while (day < lastDay && counter < opening_hours_array.length) {
      const currentDay = opening_hours_array[counter];
      counter += 1;
      day = (new Date(currentDay.date)).getTime();
      if (day >= today.getTime()) {
        if (!days.hasOwnProperty(currentDay.date)) {
          days[currentDay.date] = [];
        }
        days[currentDay.date].push(currentDay);
      }
    }

    let dayArray = [];
    for (var i = 0; i <= 6; i++) {
      const currentDay = new Date(today.getTime() + (i * oneDayInMilliSeconds));
      const dateString = currentDay.getFullYear() + '-' + (currentDay.getMonth() + 1) + '-' + currentDay.getDate();

      switch (currentDay.getDay()) {
        case 0:
          day = 'Søndag:';
          break;
        case 1:
          day = 'Mandag: ';
          break;
        case 2:
          day = 'Tirsdag: ';
          break;
        case 3:
          day = 'Onsdag: ';
          break;
        case 4:
          day = 'Torsdag: ';
          break;
        case 5:
          day = 'Fredag: ';
          break;
        case 6:
          day = 'Lørdag: ';
          break;
        default:
          day = 'ukendt ';
          break;
      }

      if (days.hasOwnProperty(dateString)) {
        let openingTimeString = '';
        openingTimeString += day;
        let dateStrings = [];
        days[dateString].forEach((date) => {
          dateStrings.push(
            date.opening_time.split(':').splice(0, 2).join(':') +
            ' til ' +
            date.closing_time.split(':').splice(0, 2).join(':')
          );
        });

        openingTimeString += dateStrings.join(', ');
        dayArray.push(
          <p key={day}>{openingTimeString}</p>
        );
      }
      else {
        dayArray.push(<p key={day}>{day} lukket</p>);
      }
    }

    return dayArray;
  }

  render() {
    const openingHoursArray = this.getOpeningHours(this.props.opening_hours);

    /* eslint-disable react/no-danger */
    const library_lead_description = (<div className='libraries--library-list-item--library-lead-description' dangerouslySetInnerHTML={this.getMarkup(this.props.lead_description)}></div>);
    const library_description = (<div className='libraries--library-list-item--library-description' dangerouslySetInnerHTML={this.getMarkup(this.props.description)}></div>);
    /* eslint-enable react/no-danger */

    return (
      <div className='libraries--library-list-item'>
        <div className='libraries--library-list-item--library-title-image'>
          <img src={this.props.title_images[0] || ''} />
        </div>

        <div className='libraries--library-list-item--library-title'>
          <h2>{this.props.title}</h2>
        </div>

        {library_lead_description}
        <br />

        {library_description}

        <div className='row'>
          <div className='libraries--library-list-item--library-opening-hours large-12 medium-12 small-24 columns'>
            <div className='libraries--library-list-item--library-opening-hours--title'>
              <h4>Åbningstider de næste 7 dage</h4>
            </div>

            <div className='libraries--library-list-item--library-opening-hours--opening-hours-list'>
              <div className='libraries--library-list-item--library-opening-hours--opening-hours-list--opening-hours-list-item'>
                {openingHoursArray}
              </div>
            </div>
          </div>

          <div className='libraries--library-list-item--library-address large-12 medium-12 small-24 columns'>
            <div className='libraries--library-list-item--library-address--title'>
              <h4>Adresse på biblioteket</h4>
            </div>

            <div className='libraries--library-list-item--library-address--full'>
              <p>{this.props.address}, {this.props.postal_code} {this.props.city}</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

LibraryAffiliateListItem.displayName = 'LibraryAffiliateListItem.component';
LibraryAffiliateListItem.propTypes = {
  address: React.PropTypes.string,
  city: React.PropTypes.string,
  description: React.PropTypes.string,
  lead_description: React.PropTypes.string,
  list_images: React.PropTypes.array,
  opening_hours: React.PropTypes.array.isRequired,
  postal_code: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  title_images: React.PropTypes.array
};
