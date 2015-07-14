'use strict';
/**
 * @file
 * Currently the main entrypoint served on /work.
 * Provides the work view for the enduser.
 */
import React from 'react';

// import components
// import {WorkDisplay} from 'dbc-react-workview';
// import Loader from '../Loader.component.js';
// import reflux actions and stores
import workAction from '../../actions/Work.action.js';
import workStore from '../../stores/Work.store.js';
import Covers from '../Cover.component.js';

const Work = React.createClass({
  propTypes: {
    id: React.PropTypes.string,
    work: React.PropTypes.object
  },

  getInitialState() {
    return {
      id: this.props.id,
      work: workStore.getStore()
    };
  },

  getWork() {
    let result = {
      id: this.state.id
    };
    workAction(result);
  },

  updateWork(work) {
    this.setState({work});
  },

  componentDidMount: function () {
    this.getWork();
    workStore.listen(this.updateWork);
  },

  render() {
    const {id, work, info} = this.state; // eslint-disable-line
    let general,
      title,
      creators,
      description,
      actors,
      series,
      subjects,
      tracks,
      languages,
      specific,
      specifics;

    if (work.info.hits === '0') {
      return (<div className="work-not-found">Værket blev ikke fundet</div>);
    }

    if (work.result.length === 0) {
      return (<div />);
    }

    general = work.result.general;
    title = general.title;
    if (general.hasOwnProperty('creators')) {
      creators = general.creators.map((creator) => {
        let search_creator = '/search?phrase.creator=' + encodeURIComponent(creator);
        return (<div className='creator'><a href={search_creator}>{creator}</a></div>);
      });
    }
    if (general.hasOwnProperty('description')) {
      description = general.description;
    }
    if (general.hasOwnProperty('actors')) {
      actors = general.actors.map((actor) => {
        let search_actor = '/search?phrase.creator=' + encodeURIComponent(actor);
        return (<div className='actor'><a href={search_actor}>{actor}</a></div>);
      });
    }
    if (general.hasOwnProperty('series')) {
      let series_title = general.series[0].replace(/ ; .*/, '');
      series_title = series_title.replace(/Samhørende: /, '');
      series_title = series_title.replace(/.* del af: /, '');
      let series_link = '/search?phrase.titleSeries=' + encodeURIComponent(series_title);
      series = <a href={series_link}>{general.series}</a>;
    }
    if (general.hasOwnProperty('subjects')) {
      subjects = general.subjects.map((subject) => {
        let search_subject = '/search?phrase.subject=' + encodeURIComponent(subject);
        return (<div className='subject'><a href={search_subject}>{subject}</a></div>);
      });
    }
    if (general.hasOwnProperty('tracks')) {
      tracks = general.tracks.map((track) => {
        return (<div className='track'>{track}</div>);
      });
    }
    if (general.hasOwnProperty('languages')) {
      languages = general.languages.map((language) => {
        return (<div className='language'>{language}</div>);
      });
    }
    specific = work.result.specific;
    let order_button = specific.map((tw) => {
      if (tw.accessType === 'physical') {
        let order_ids = [];
        order_ids.push(tw.identifiers);
        let order_link = '/order?ids=' + order_ids + '&title=' + encodeURIComponent(title) + '&type=' + tw.type;
        return (<a className='order-button button' href={order_link} data-identifiers={order_ids}>Bestil {tw.type}</a>);
      }
      if (tw.accessType === 'online') {
        let online_link = 'Se ' + tw.type + ' online';
        return (<a className='online-link' href="#">{online_link}</a>);
      }
    });
    specifics = specific.map((tw) => {
      let identifiers = [];
      identifiers.push(tw.identifiers);
      let dates = (<div></div>);
      if (tw.dates[0] !== null) {
        dates = tw.dates.map((date) => {
          return (<div className='date'>{date}</div>);
        });
      }
      return (<div className='specific' data-identifiers={identifiers}>
      <div className='type'>{tw.type}</div>
      {dates}
      </div>);
    });
    return (
      <div className='work-container'>
        <div className='work small-12 medium-6 large-4'>
        <Covers pids={work.result.specific[0].identifiers} />
        </div>
        <div className='work small-12 medium-6 large-4'>
        {order_button}
        <div className='clear'></div>
        <div className='general' >
          <div className='title'>{title}</div>
          <div className='creators'>{creators}</div>
          <div className='clear'></div>
          <div className='description'>{description}</div>
          <div className='actors'>{actors}</div>
          <div className='clear'></div>
          <div className='series'>{series}</div>
          <div className='subjects'>{subjects}</div>
          <div className='clear'></div>
          <div className='tracks'>{tracks}</div>
          <div className='clear'></div>
          <div className='languages'>{languages}</div>
          <div className='clear'></div>
        </div>
        {specifics}
        </div>
      </div>
    );
  }
});

export default Work;
