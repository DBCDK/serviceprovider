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
      series,
      subjects,
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
        return (<div className='creator'>{creator}</div>);
      });
    }
    if (general.hasOwnProperty('description')) {
      description = general.description;
    }
    if (general.hasOwnProperty('series')) {
      series = general.series;
    }
    if (general.hasOwnProperty('subjects')) {
      subjects = general.subjects.map((subject) => {
        return (<div className='subject'>{subject}</div>);
      });
    }
    if (general.hasOwnProperty('languages')) {
      languages = general.languages.map((language) => {
        return (<div className='language'>{language}</div>);
      });
    }
    specific = work.result.specific;
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
        <div className='general' >
          <div className='title'>{title}</div>
          <div className='creators'>{creators}</div>
          <div className='clear'></div>
          <div className='description'>{description}</div>
          <div className='series'>{series}</div>
          <div className='subjects'>{subjects}</div>
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
