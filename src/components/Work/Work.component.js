'use strict';
/**
 * @file
 * Currently the main entrypoint served on /work.
 * Provides the work view for the enduser.
 */
import React from 'react';
import workAction from '../../actions/Work.action.js';
import workStore from '../../stores/Work.store.js';
import {CoverImage, OrderLink} from 'dbc-react-components';
import {rewriteCoverImageUrl} from '../../utils/CoverImage.util.js';

const Work = React.createClass({
  displayName: 'Work.component',
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

  componentDidMount() {
    this.getWork();
    workStore.listen(this.updateWork);
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

  getPublications: function(publications) {
    let types, publishers, dates, edition, extents, isbns, links;
    return publications.map((publ) => {
      let className = 'publication-details';
      if (publ.hasOwnProperty('types')) {
        types = publ.types.map((t, index) => {
          className += ' ' + t.toLowerCase().replace(/ .*/, '');
          return (<div className='type' key={index} >{t}</div>);
        });
      }
      if (publ.hasOwnProperty('dates')) {
        dates = publ.dates.map((d, index) => {
          return (<div className='date' key={index} >{d}</div>);
        });
      }
      if (publ.hasOwnProperty('editions')) {
        edition = publ.editions.map((ed, index) => {
          return (<div className='edition' key={index} >{ed}</div>);
        });
      }
      if (publ.hasOwnProperty('extents')) {
        extents = publ.extents.map((e, index) => {
          return (<div className='extent' key={index} >{e}</div>);
        });
      }
      if (publ.hasOwnProperty('isbns')) {
        isbns = publ.isbns.map((i, index) => {
          return (<div className='isbn' key={index} >{i}</div>);
        });
      }
      if (publ.hasOwnProperty('links')) {
        links = publ.links.map((l, index) => {
          return (
            <div className='link' key={index} >
              <a href={l} target='_blank' >Se online</a>
            </div>);
        });
      }
      return (
        <div className={className} data-identifiers={publ.identifier} key={publ.identifier} >
          {types}
          <div className='clear' ></div>
          {publishers}
          {edition}
          {dates}
          {extents}
          {isbns}
          {links}
        </div>);
    });
  },

  render() {
    const {id, work, info} = this.state; // eslint-disable-line
    let creators,
        description,
        parts,
        issns,
        extents,
        actors,
        series,
        subjects,
        dk5s,
        tracks,
        languages,
        specific,
        specifics,
        dates;

    if (work.info.hits === '0') {
      return (<div className="work-not-found" >Værket blev ikke fundet</div>);
    }

    if (work.result.length === 0) {
      return (<div />);
    }
    const general = work.result.general;
    const title = general.title;
    const audience = general.audience || {};
    if (general.hasOwnProperty('creators')) {
      creators = general.creators.map((creator, index) => {
        return (<div className='creator' key={index} >
          <a href={creator.search_link} >{creator.value}</a></div>);
      });
    }
    if (general.hasOwnProperty('description')) {
      description = general.description;
    }
    if (general.hasOwnProperty('actors')) {
      actors = general.actors.map((actor, index) => {
        return (
          <div className='actor' key={index} >
            <a href={actor.search_link} >{actor.value}</a>
          </div>);
      });
    }
    if (general.hasOwnProperty('series')) {
      series = <a href={general.series.search_link} >{general.series.value}</a>;
    }
    if (general.hasOwnProperty('subjects')) {
      subjects = general.subjects.map((subject, index) => {
        return (<div className='subject' >
          <a href={subject.search_link} key={index} >{subject.value}</a></div>);
      });
    }
    if (general.hasOwnProperty('dk5s')) {
      dk5s = general.dk5s.map((dk5, index) => {
        return (<div className='dk5' key={index} >
          <a href={dk5.search_link} >{dk5.value}</a>

          <div className='dk5text' >{dk5.text}</div>
        </div>);
      });
    }
    if (general.hasOwnProperty('tracks')) {
      tracks = general.tracks.map((track, index) => {
        return (<div className='track' key={index} >{track}</div>);
      });
    }
    if (general.hasOwnProperty('languages')) {
      languages = general.languages.map((language, index) => {
        return (<div className='language' key={index} >{language}</div>);
      });
    }
    if (general.hasOwnProperty('partOf')) {
      parts = general.partOf.map((partOf, index) => {
        return (<div className='part' key={index} >{partOf}</div>);
      });
    }
    if (general.hasOwnProperty('issn')) {
      issns = general.issn.map((issn, index) => {
        return (<div className='issn' key={index} >{issn}</div>);
      });
    }
    if (general.hasOwnProperty('extent')) {
      extents = general.extent.map((extent, index) => {
        return (<div className='extent' key={index} >{extent}</div>);
      });
    }
    specific = work.result.specific;
    const order_button = specific.map((tw, index) => {
      if (tw.accessType === 'physical') {
        let order_ids = [];
        order_ids.push(tw.identifiers);
        return (
          <OrderLink agencyId={'772700'} linkText={'Bestil ' + tw.type} orderUrl={tw.order} pids={order_ids} />);
      }
      if (tw.accessType === 'online') {
        let online_link = 'Se ' + tw.type + ' online';
        return (
          <a className='online-link' href="#" key={index} >{online_link}</a>);
      }
    });
    specifics = specific.map((tw, index) => {
      let identifiers = [];
      identifiers.push(tw.identifiers);
      if (tw.dates[0] !== null) {
        dates = tw.dates.map((date, indx) => {
          return (<div className='date' key={indx} >{date}</div>);
        });
      }
      return (
        <div className='specific' data-identifiers={identifiers} key={index} >
          <div className='type' >
            {tw.type}
          </div>
          {dates}
        </div>
      );
    });
    const publications = work.result.publications;
    const editions = this.getPublications(publications);
    return (
      <div className='work-container' >
        <div className='work small-12 medium-6 large-4' >
          <CoverImage pids={work.result.specific[0].identifiers} prefSize={'detail_500'} rewriteImgUrl={rewriteCoverImageUrl}/>
        </div>
        <div className='work small-12 medium-6 large-4' >
          {order_button}
          <div className='clear' ></div>
          <div className='general' >
            <div className='title' >{title}</div>
            <div className='creators' >{creators}</div>
            <div className='clear' ></div>
            <div className='description' >{description}</div>
            <div className='partof' >{parts}</div>
            <div className='issns' >{issns}</div>
            <div className='extents' >{extents}</div>
            <div className='actors' >{actors}</div>
            <div className='clear' ></div>
            <div className='series' >{series}</div>
            <div className='subjects' >{subjects}</div>
            <div className='clear' ></div>
            <div className='dk5s' >{dk5s}</div>
            <div className='clear' ></div>
            <div className='audience' >
              <div className='age' >{audience.age}</div>
              <div className='pegi' >{audience.pegi}</div>
              <div className='medieraad' >{audience.medieraad}</div>
            </div>
            <div className='clear' ></div>
            <div className='tracks' >{tracks}</div>
            <div className='clear' ></div>
            <div className='languages' >{languages}</div>
            <div className='clear' ></div>
          </div>
          {specifics}
          <div className='clear' ></div>
          <div className='editions' >{editions}</div>
        </div>
      </div>
    );
  }
});

export default Work;
