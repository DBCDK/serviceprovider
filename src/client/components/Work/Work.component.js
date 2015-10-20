'use strict';
/**
 * @file
 * Currently the main entrypoint served on /work.
 * Provides the work view for the enduser.
 */
import React from 'react';
import Reflux from 'reflux';

import {isEmpty, values} from 'lodash';

import workAction from '../../actions/Work.action.js';
import WorkStore from '../../stores/Work.store.js';
import {CoverImage, OrderButton} from 'dbc-react-components';
import {rewriteCoverImageUrl} from '../../../utils/CoverImage.util.js';
import LikeContainer from '../LikeDislike/LikeContainer.component.js';
import DislikeContainer from '../LikeDislike/DislikeContainer.component.js';
import ProfileStore from '../../stores/Profile.store.js';

const Work = React.createClass({
  displayName: 'Work.component',

  propTypes: {
    id: React.PropTypes.string,
    work: React.PropTypes.object
  },

  mixins: [
    Reflux.connect(WorkStore, 'work'),
    Reflux.connect(ProfileStore, 'profile')
  ],

  getInitialState() {
    if (typeof window === 'undefined') {
      this.getWork();
    }
  },

  componentDidMount() {
    this.getWork();
  },

  getWork() {
    if (this.props.work) {
      workAction.updated([this.props.work]);
    }
    workAction({id: this.props.id});
  },

  getLikeDislikeContainers(id) {
    return (
      <div className='work--like-buttons' >
        <div className='work--like-buttons--like-container' >
          <LikeContainer objectId={id} />
        </div>
        <div className='work--like-buttons--dislike-container' >
          <DislikeContainer objectId={id} />
        </div>
      </div>
    );
  },

  render() {
    const profile = this.state.profile;
    const work = this.props.work ? this.props.work : this.state.work;
    const id = this.props.id;

    // No result found!
    if (work.info.hits === '0') {
      return (<div className="work-not-found" >Værket blev ikke fundet</div>);
    }

    // Result is pending, waiting for serviceprovider
    if (isEmpty(work.result) && isEmpty(work.info)) {
      return (
        <div className='row'>
          <span className='loader' />
        </div>
      );
    }

    // Empty result (Should perhaps be an error report)
    if (isEmpty(work.result)) {
      return (<div />);
    }

    // Data was found, begin rendering
    const likeContainers = this.state.profile.userIsLoggedIn ? this.getLikeDislikeContainers(id) : ' ';
    let editions = [];
    let specifics_object = {};

    work.result.editions.forEach((element, index) => {
      let edition = (
        <div className={'work-container--work--editions--publication-details ' + element.type} key={'edition_' + index}>
          <div className='type'>{element.type}</div>
          <div className='date'>{element.edition + (element.edition !== '' ? ', ' : '')} {element.date}</div>
          <div className='extents'>{element.extent}</div>
          <div className='isbns'>
            <span>{element.isbns.length > 0 ? 'ISBN: ' : ''}</span>
            {element.isbns.join(', ')}
          </div>
          <div className='sub-publication-link'>
            {element.link.map((link, idx) => {
              return (<a href={link} key={'sub-publication-link_' + idx} target='_blank'>Find online</a>);
            })}
          </div>
        </div>
      );

      editions.push(edition);

      const elementKey = element.accessType + '_' + element.type;

      if (!specifics_object.hasOwnProperty(elementKey)) {
        specifics_object[elementKey] = {
          accessType: element.accessType,
          creator: element.creator,
          dates: [],
          identifiers: [],
          links: [],
          order: '',
          title: element.title,
          type: element.type,
          workType: element.workType
        };
      }

      element.link.forEach((link) => {
        specifics_object[elementKey].links.push(link);
      });
      specifics_object[elementKey].dates.push(element.date);
      specifics_object[elementKey].identifiers.push(element.identifier);
      specifics_object[elementKey].order = '/order?ids=' + specifics_object[elementKey].identifiers.join(',') +
        '&creator=' + specifics_object[elementKey].creator +
        '&title=' + encodeURIComponent(specifics_object[elementKey].title) +
        '&type=' + specifics_object[elementKey].type;
    });

    let specifics = values(specifics_object);

    return (
      <div className='work-container' data-pid={id}>
        <div className='work work--cover-image small-12 medium-6 large-4'>
          <CoverImage pids={[id, work.result.pid]} prefSize='detail_500' rewritwImgUrl={rewriteCoverImageUrl} />
        </div>
        <div className='work small-12 medium-6 large-4'>
          <OrderButton manifestations={specifics} profile={profile} relations={work.result.relations} />

          {likeContainers}

          <div className='general'>
            <div className='title'>{work.result.title}</div>

            <div className='creators'>
              <a href={'/search?phrase.creator=' + encodeURIComponent(work.result.creator)}>
                {work.result.creator}
              </a>
            </div>

            <div className='description'>{work.result.abstract}</div>

            <div className='issn'>
              {work.result.isbns.length > 0 ? 'ISBN: '+ work.result.isbns[0] : ''}
            </div>

            <div className='extent clearfix'>{work.result.extent}</div>

            <div className='clearfix'>
              <div className='actors clearfix'>
                <span>{work.result.actors.length > 0 ? 'Medvirkende: ' : ''}</span>
                {work.result.actors.map((actor, index) => {
                  return (
                    <span className='actor' key={'actor_' + index}>
                      <a href={'/search?phrase.creator=' + encodeURIComponent(actor)}>
                        {actor}
                      </a>
                    </span>);
                })}
              </div>
            </div>

            <div className='series clearfix'>
              <a href='#'>{work.result.series}</a>
            </div>

            <div className='subjects clearfix'>
              <span>{work.result.subjects.length > 0 ? 'Emner: ' : ''}</span>
              {work.result.subjects.map((subject, index, array) => {
                const notLast = (array.length - 1) !== index;
                return (
                  <span className='subject' key={'subject_' + index}>
                    <a href={'/search?phrase.subject=' + encodeURIComponent(subject)}> {notLast ? subject + ', ' : subject}</a>
                  </span>
                );
              })}
            </div>

            <div className='dk5s clearfix'>
              <span>{work.result.dk5s.length > 0 ? 'Opstilling: ' : ''}</span>
              {work.result.dk5s.map((dk5, index) => {
                return (
                  <span className='opstilling' key={'dk5_' + index}>
                    <a href={'/search?dkcclterm.dk=' + encodeURIComponent(dk5.value)}>{dk5.text}</a>
                  </span>
                );
              })}
            </div>

            <div className='audience clearfix'>
              <div className='age'>{work.result.audience.age.join(', ')}</div>
              <div className='pegi'>{work.result.audience.pegi}</div>
              <div className='medieraad'>{work.result.audience.medieraad}</div>
            </div>

            <div className='tracks clearfix'>
              {work.result.tracks.length > 0 ? 'Trackliste: ' : ''}
              {work.result.tracks.map((track, index) => {
                return (<div className='track' key={'track_' + index}>{track}</div>);
              })}
            </div>

            <div className='language clearfix'>
              <span>{work.result.languages.length > 0 ? 'Sprog: ' : ''}</span>
              <span>{work.result.languages.join(', ')}</span>
            </div>
          </div>

          <div className='specifics clearfix'>
            {specifics.map((specific, index) => {
              return (
                <span key={'specific_' + index}>{specific.type} ({specific.dates.join('; ')}) </span>
              );
            })}
          </div>

          <div className='editions clearfix'>
            <span className='work-container--work--editions--label'>{editions.length > 0 ? 'Udgaver:' : ''}</span>
            {editions}
          </div>
        </div>
      </div>
    );
  }
});

export default Work;
