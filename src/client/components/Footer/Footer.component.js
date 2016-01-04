'use strict';

import React from 'react';
import {filter, isArray} from 'lodash';

import LibrariesStore from '../../stores/Libraries.store.js';
import LibrariesActions from '../../actions/Libraries.actions.js';

export default class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      agencyName: null,
      openingHoursToday: [],
      openingHoursTomorrow: []
    };

    this.unsubscribe = [
      LibrariesStore.listen(this.updateLibraries.bind(this))
    ];
  }

  componentWillMount() {
    if (this.props.libraryData) {
      let stateObject = this.extractLibraryInfo(this.props.libraryData);
      this.state.agencyName = stateObject.agencyName;
      this.state.openingHoursToday = stateObject.openingHoursToday;
      this.state.openingHoursTomorrow = stateObject.openingHoursTomorrow;
    }
  }

  componentDidMount() {
    LibrariesActions.fetchAllAffiliates();
  }

  componentWillUnmount() {
    this.unsubscribe.forEach((unsubscriber) => unsubscriber());
  }

  extractLibraryInfo(stuff) {
    // TODO: find a way to identify the main agency in the library
    // for now we just extract the opening hours for the first agency

    let libraryData = stuff.libraries[0];
    while (isArray(libraryData)) {
      libraryData = libraryData[0];
    }

    const today = new Date(Date.now());
    const tomorrow = new Date(Date.now() + 24*60*60*1000);
    const todayDay = ('0' + today.getDate()).slice(-2);
    const todayMonth = ('0' + today.getMonth()+1).slice(-2);
    const todayYear = today.getFullYear();
    const todayString = todayYear + '-' + todayMonth + '-' + todayDay;

    const tomorrowDay = ('0' + tomorrow.getDate()).slice(-2);
    const tomorrowMonth = ('0' + tomorrow.getMonth()+1).slice(-2);
    const tomorrowYear = tomorrow.getFullYear();
    const tomorrowString = tomorrowYear + '-' + tomorrowMonth + '-' + tomorrowDay;


    const openingHoursToday = filter(libraryData.opening_hours, (day) => {
      return (day.date === todayString);
    });

    const openingHoursTomorrow = filter(libraryData.opening_hours, (day) => {
      return (day.date === tomorrowString);
    });

    return {
      agencyName: libraryData.title,
      openingHoursTomorrow: openingHoursTomorrow,
      openingHoursToday: openingHoursToday
    };
  }

  updateLibraries(stuff) {
    this.setState(this.extractLibraryInfo(stuff));
  }

  render() {

    const openToday = this.state.openingHoursToday.map((day) => {
      return (<li key={['idag', day.opening_time, day.closing_time].join('_')}>{day.opening_time} - {day.closing_time}</li>);
    });

    const openTomorrow = this.state.openingHoursTomorrow.map((day) => {
      return (<li key={['idag', day.opening_time, day.closing_time].join('_')}>{day.opening_time} - {day.closing_time}</li>);
    });

    const agencyName = this.state.agencyName || null;
    return (
      <div className='small-12 footer' >
        <h4>Åbningstider for {agencyName}</h4>
        <div className='opening-hours today'>
          <h5>Idag</h5>
          <ul>
          {openToday}
          </ul>
        </div>
        <div className='opening-hours tomorrow'>
          <h5>Imorgen</h5>
          <ul>
          {openTomorrow}
          </ul>
        </div>
      </div>
    );
  }
}

Footer.displayName = 'Footer';
Footer.propTypes = {
  libraryData: React.PropTypes.object
};
