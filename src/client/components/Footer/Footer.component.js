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
      openingHoursTomorrow: [],
      address: {
        street: null,
        city: null,
        zipcode: null
      }
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
      this.state.address = stateObject.address;
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

    const address = {
      street: libraryData.address,
      city: libraryData.city,
      zipcode: libraryData.postal_code
    };

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
      openingHoursToday: openingHoursToday,
      address: address
    };
  }

  updateLibraries(stuff) {
    this.setState(this.extractLibraryInfo(stuff));
  }

  render() {

    const openToday = this.state.openingHoursToday.map((day) => {
      return (<li key={['idag', day.opening_time, day.closing_time].join('_')}>{day.opening_time.slice(0,-3)} - {day.closing_time.slice(0,-3)}</li>);
    });

    const openTomorrow = this.state.openingHoursTomorrow.map((day) => {
      return (<li key={['idag', day.opening_time, day.closing_time].join('_')}>{day.opening_time.slice(0,-3)} - {day.closing_time.slice(0,-3)}</li>);
    });

    const address = this.state.address;

    const agencyName = this.state.agencyName || null;
    return (
      <div className='small-24 columns footer' >
        <div className='small-24 medium-12 column footer--opening-hours'>
          <h4>Åbningstider for <a href='/libraries'>{agencyName}</a></h4>
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
        <span className='small-24 medium-12 column footer--address'>
          <h4>Adresse</h4>
          <ul>
            <li>{agencyName}</li>
            <li>{address.street}</li>
            <li>{address.zipcode} {address.city}</li>
          </ul>
          <p><a href='/libraries'>Se alle biblioteker</a></p>
        </span>
      </div>
    );
  }
}

Footer.displayName = 'Footer';
Footer.propTypes = {
  libraryData: React.PropTypes.object
};
