'use strict';
/**
 * @file
 * Currently the main entrypoint served on /work.
 * Provides the work view for the enduser.
 */
import React from 'react';
import {isEmpty, values} from 'lodash';

// Actions
import workAction from '../../actions/Work.action.js';

// Components
import {CoverImage, OrderButton} from 'dbc-react-components';
import LikeContainer from '../LikeDislike/LikeContainer.component.js';
import DislikeContainer from '../LikeDislike/DislikeContainer.component.js';
import WorkEdition from './WorkEdition.component.js';

// Stores
import WorkStore from '../../stores/Work.store.js';
import ProfileStore from '../../stores/Profile.store.js';

class Work extends React.Component {
  constructor() {
    super();

    this.state = {
      profile: ProfileStore.getInitialState(),
      work: WorkStore.getInitialState()
    };

    this.unsubscribe = [
      ProfileStore.listen(() => this.setState({
        profile: ProfileStore.getProfile()
      })),

      WorkStore.listen(() => this.setState({
        work: WorkStore.store
      }))
    ];
  }

  componentWillMount() {
    this.state.work = isEmpty(this.props.work) ? this.state.work : this.props.work;
  }

  componentDidMount() {
    workAction({id: this.props.id});
  }

  componentWillUnmount() {
    this.unsubscribe.forEach(
      (unsubscriber) => {
        unsubscriber();
      }
    );
  }

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
  }

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
        <div className='row' >
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
      editions.push(
        <WorkEdition
          date={element.date}
          edition={element.edition}
          extent={element.extent}
          isbns={element.isbns}
          key={'edition_' + index}
          workType={element.type} />
      );

      const elementKey = element.accessType + '_' + element.type;

      if (!specifics_object.hasOwnProperty(elementKey)) {
        specifics_object[elementKey] = {
          accessType: element.accessType,
          creator: element.creator,
          dates: [],
          identifiers: [],
          order: '',
          title: element.title,
          type: element.type,
          workType: element.workType
        };
      }

      specifics_object[elementKey].dates.push(element.date);
      specifics_object[elementKey].identifiers.push(element.identifier);
      specifics_object[elementKey].order = '/order?ids=' + specifics_object[elementKey].identifiers.join(',') +
        '&creator=' + specifics_object[elementKey].creator +
        '&title=' + encodeURIComponent(specifics_object[elementKey].title) +
        '&type=' + specifics_object[elementKey].type;
    });

    let specifics = values(specifics_object);

    return (
      <div className='work-container row' data-pid={id} >
        <div className='work--image small-20 small-centered medium-10 medium-uncentered large-10 large-uncentered columns' >
          <CoverImage noCoverUrl='/covers/no-cover-image-book.png' pids={[id, work.result.pid]} prefSize='detail_500' />
        </div>
        <div className='work small-24 small-centered medium-14 medium-uncentered large-14 large-uncentered columns' >
          <OrderButton manifestations={specifics} profile={profile} relations={work.result.relations} />

          {likeContainers}

          <div className='general' >
            <div className='title' >{work.result.title}</div>

            <div className='creators' >
              <a href={'/search?phrase.creator=' + encodeURIComponent(work.result.creator)} >
                {work.result.creator}
              </a>
            </div>

            <div className='description' >{work.result.abstract}</div>

            <div className='issn' >
              {work.result.isbns.length > 0 ? 'ISBN: ' + work.result.isbns[0] : ''}
            </div>

            <div className='extent clearfix' >{work.result.extent}</div>

            <div className='clearfix' >
              <div className='actors clearfix' >
                <span>{work.result.actors.length > 0 ? 'Medvirkende: ' : ''}</span>
                {work.result.actors.map((actor, index) => {
                  return (
                    <span className='actor' key={'actor_' + index} >
                      <a href={'/search?phrase.creator=' + encodeURIComponent(actor)} >
                        {actor}
                      </a>
                    </span>);
                })}
              </div>
            </div>

            <div className='series clearfix' >
              <a href='#' >{work.result.series}</a>
            </div>

            <div className='subjects clearfix' >
              <span>{work.result.subjects.length > 0 ? 'Emner: ' : ''}</span>
              {work.result.subjects.map((subject, index, array) => {
                const notLast = (array.length - 1) !== index;
                return (
                  <span className='subject' key={'subject_' + index} >
                    <a href={'/search?phrase.subject=' + encodeURIComponent(subject)} > {notLast ? subject + ', ' : subject}</a>
                  </span>
                );
              })}
            </div>

            <div className='dk5s clearfix' >
              <span>{work.result.dk5s.length > 0 ? 'Opstilling: ' : ''}</span>
              {work.result.dk5s.map((dk5, index) => {
                return (
                  <span className='opstilling' key={'dk5_' + index} >
                    <a href={'/search?dkcclterm.dk=' + encodeURIComponent(dk5.value)} >{dk5.text}</a>
                  </span>
                );
              })}
            </div>

            <div className='audience clearfix' >
              <div className='age' >{work.result.audience.age.join(', ')}</div>
              <div className='pegi' >{work.result.audience.pegi}</div>
              <div className='medieraad' >{work.result.audience.medieraad}</div>
            </div>

            <div className='tracks clearfix' >
              {work.result.tracks.length > 0 ? 'Trackliste: ' : ''}
              {work.result.tracks.map((track, index) => {
                return (
                  <div className='track' key={'track_' + index} >{track}</div>);
              })}
            </div>

            <div className='language clearfix' >
              <span>{work.result.languages.length > 0 ? 'Sprog: ' : ''}</span>
              <span>{work.result.languages.join(', ')}</span>
            </div>
          </div>

          <div className='specifics clearfix' >
            {specifics.map((specific, index) => {
              return (
                <span key={'specific_' + index} >{specific.type} ({specific.dates.join('; ')}) </span>
              );
            })}
          </div>

          <div className='editions clearfix' >
            <span className='work-container--work--editions--label' >{editions.length > 0 ? 'Udgaver:' : ''}</span>
            {editions}
          </div>
        </div>
      </div>
    );
  }
}

Work.displayName = 'Work.component';
Work.propTypes = {
  id: React.PropTypes.string.isRequired,
  work: React.PropTypes.object
};

export default Work;
