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
      parts,
      issns,
      extents,
      actors,
      series,
      subjects,
      tracks,
      languages,
      specific,
      specifics,
      types,
      publishers,
      dates,
      isbns,
      links;

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
        return (<div className='creator'><a href={creator.search_link}>{creator.value}</a></div>);
      });
    }
    if (general.hasOwnProperty('description')) {
      description = general.description;
    }
    if (general.hasOwnProperty('actors')) {
      actors = general.actors.map((actor) => {
        return (<div className='actor'><a href={actor.search_link}>{actor.value}</a></div>);
      });
    }
    if (general.hasOwnProperty('series')) {
      series = <a href={general.series.search_link}>{general.series.value}</a>;
    }
    if (general.hasOwnProperty('subjects')) {
      subjects = general.subjects.map((subject) => {
        return (<div className='subject'><a href={subject.search_link}>{subject.value}</a></div>);
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
    if (general.hasOwnProperty('partOf')) {
      parts = general.partOf.map((partOf) => {
        return (<div className='part'>{partOf}</div>);
      });
    }
    if (general.hasOwnProperty('issn')) {
      issns = general.issn.map((issn) => {
        return (<div className='issn'>{issn}</div>);
      });
    }
    if (general.hasOwnProperty('extent')) {
      extents = general.extent.map((extent) => {
        return (<div className='extent'>{extent}</div>);
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
      if (tw.dates[0] !== null) {
        dates = tw.dates.map((date) => {
          return (<div className='date'>{date}</div>);
        });
      }
      return (
        <div className='specific' data-identifiers={identifiers}>
          <div className='type'>
            {tw.type}
          </div>
          {dates}
        </div>
      );
    });
    const publications = work.result.publications;
    let editions = publications.map((publ) => {
      let className = 'publication-details';
      if (publ.hasOwnProperty('types')) {
        types = publ.types.map((t) => {
          className += ' ' + t.toLowerCase().replace(/ .*/, '');
          return (<div className='type'>{t}</div>);
        });
      }
      if (publ.hasOwnProperty('publishers')) {
        publishers = publ.publishers.map((p) => {
          return (<div className='publisher'>{p}</div>);
        });
      }
      if (publ.hasOwnProperty('dates')) {
        dates = publ.dates.map((d) => {
          return (<div className='date'>{d}</div>);
        });
      }
      if (publ.hasOwnProperty('editions')) {
        editions = publ.editions.map((ed) => {
          return (<div className='edition'>{ed}</div>);
        });
      }
      if (publ.hasOwnProperty('extents')) {
        extents = publ.extents.map((e) => {
          return (<div className='extent'>{e}</div>);
        });
      }
      if (publ.hasOwnProperty('isbns')) {
        isbns = publ.isbns.map((i) => {
          return (<div className='isbn'>{i}</div>);
        });
      }
      if (publ.hasOwnProperty('links')) {
        links = publ.links.map((l) => {
          return (<div className='link'><a href={l} target='_blank'>Se online</a></div>);
        });
      }
      return (<div className={className} data-identifiers={publ.identifier}>
      {types}
      <div className='clear'></div>
      {publishers}
      {editions}
      {dates}
      {extents}
      {isbns}
      {links}
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
          <div className='partof'>{parts}</div>
          <div className='issns'>{issns}</div>
          <div className='extents'>{extents}</div>
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
        <div className='clear'></div>
        <div className='editions'>{editions}</div>
        </div>
      </div>
    );
  }
});

export default Work;
