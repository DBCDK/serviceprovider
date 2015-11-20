'use strict';

// Libraries
import React, {PropTypes} from 'react';

// Components
import {CoverImage, OrderButton} from 'dbc-react-components';
import LikeContainer from '../LikeDislike/MobilSoeg/LikeContainer.component.js';
import DislikeContainer from '../LikeDislike/MobilSoeg/DislikeContainer.component.js';
import WorkRecommendation from './WorkRecommendation.component';

// Actions
import RecommendationActions from '../../actions/Recommendations.actions.js';

// Stores
import MobilSoegProfileStore from '../../stores/MobilSoegProfile.store';
import RecommendationsStore from '../../stores/Recommendations.store.js';

export default class WorkLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: MobilSoegProfileStore.getState(),
      recommendations: RecommendationsStore.getInitialState()
    };

    this.unsubscribe = [
      MobilSoegProfileStore.listen(() => {
        this.setState({
          profile: MobilSoegProfileStore.getState()
        });

        this.getRecommendationState();
      }),

      RecommendationsStore.listen(() => this.setState({
        recommendations: RecommendationsStore.store
      }))
    ];
  }

  componentDidMount() {
    this.getRecommendationState();
  }

  componentWillUnmount() {
    this.unsubscribe.forEach(
      (unsubscriber) => {
        unsubscriber();
      }
    );
  }

  getRecommendationState() {
    const likes = this.state.profile.profile.likes;
    RecommendationActions.getRecommendations({
      work: this.props.id,
      likes: likes.map((like) => {
        return like.item_id;
      }),
      dislikes: []
    });
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
    // Fake profile to look like old one until refactor!
    // TODO: REFACTOR!
    let orderButtonComponent = '';
    if (profile.userIsLoggedIn && profile.profile.agencyid) {
      const orderProfile = {
        userIsLoggedIn: profile.userIsLoggedIn,
        favoriteLibraries: [{
          libraryID: profile.profile.agencyid,
          agencyID: profile.pickup_agency ? profile.pickup_agency : profile.profile.agencyid,
          borrowerID: typeof window !== 'undefined' && window.BORROWER_ID ? window.BORROWER_ID : ''
        }]
      };

      orderButtonComponent = (
        <OrderButton
          favoriteLibraries={orderProfile.favoriteLibraries}
          manifestations={this.props.specifics}
          profile={orderProfile}
          relations={this.props.work.result.relations}
        />
      );
    }

    const personalRecommendations = profile.userIsLoggedIn ? (
      <WorkRecommendation
        recommendations={this.state.recommendations.recommendations.personal}
        type='personal' />
    ) : '';

    const genericRecommendations = (
      <WorkRecommendation
        recommendations={this.state.recommendations.recommendations.generic}
        type='generic' />
    );

    const likeContainers = profile.userIsLoggedIn ? this.getLikeDislikeContainers(this.props.id) : ' ';

    return (
      <div className='work-container row' data-pid={this.props.id} >
        <div className='small-24 medium-24 large-16 columns' >
          <div className='work--image small-20 small-centered medium-10 medium-uncentered large-8 large-uncentered columns' >
            <CoverImage noCoverUrl='/covers/no-cover-image-book.png' pids={[this.props.id, this.props.work.result.pid]} prefSize='detail_500' />
          </div>
          <div className='work small-24 small-centered medium-14 medium-uncentered large-16 large-uncentered columns' >
            {orderButtonComponent}

            {likeContainers}

            <div className='general' >
              <div className='title' >{this.props.work.result.title}</div>

              <div className='creators' >
                <a href={'/search?phrase.creator=' + encodeURIComponent(this.props.work.result.creator)} >
                  {this.props.work.result.creator}
                </a>
              </div>

              <div className='description' >{this.props.work.result.abstract}</div>

              <div className='issn' >
                {this.props.work.result.isbns.length > 0 ? 'ISBN: ' + this.props.work.result.isbns[0] : ''}
              </div>

              <div className='extent clearfix' >{this.props.work.result.extent}</div>

              <div className='clearfix' >
                <div className='actors clearfix' >
                  <span>{this.props.work.result.actors.length > 0 ? 'Medvirkende: ' : ''}</span>
                  {this.props.work.result.actors.map((actor, index) => {
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
                <a href='#' >{this.props.work.result.series}</a>
              </div>

              <div className='subjects clearfix' >
                <span>{this.props.work.result.subjects.length > 0 ? 'Emner: ' : ''}</span>
                {this.props.work.result.subjects.map((subject, index, array) => {
                  const notLast = (array.length - 1) !== index;
                  return (
                    <span className='subject' key={'subject_' + index} >
                      <a href={'/search?phrase.subject=' + encodeURIComponent(subject)} > {notLast ? subject + ', ' : subject}</a>
                    </span>
                  );
                })}
              </div>

              <div className='dk5s clearfix' >
                <span>{this.props.work.result.dk5s.length > 0 ? 'Opstilling: ' : ''}</span>
                {this.props.work.result.dk5s.map((dk5, index) => {
                  return (
                    <span className='opstilling' key={'dk5_' + index} >
                      <a href={'/search?dkcclterm.dk=' + encodeURIComponent(dk5.value)} >{dk5.text}</a>
                    </span>
                  );
                })}
              </div>

              <div className='audience clearfix' >
                <div className='age' >{this.props.work.result.audience.age.join(', ')}</div>
                <div className='pegi' >{this.props.work.result.audience.pegi}</div>
                <div className='medieraad' >{this.props.work.result.audience.medieraad}</div>
              </div>

              <div className='tracks clearfix' >
                {this.props.work.result.tracks.length > 0 ? 'Trackliste: ' : ''}
                {this.props.work.result.tracks.map((track, index) => {
                  return (
                    <div className='track' key={'track_' + index} >{track}</div>);
                })}
              </div>

              <div className='language clearfix' >
                <span>{this.props.work.result.languages.length > 0 ? 'Sprog: ' : ''}</span>
                <span>{this.props.work.result.languages.join(', ')}</span>
              </div>
            </div>

            <div className='specifics clearfix' >
              {this.props.specifics.map((specific, index) => {
                return (
                  <span key={'specific_' + index} >{specific.type} ({specific.dates.join('; ')}) </span>
                );
              })}
            </div>

            <div className='editions clearfix' >
              <span className='work-container--work--editions--label' >{this.props.editions.length > 0 ? 'Udgaver:' : ''}</span>
              {this.props.editions}
            </div>
          </div>
        </div>

        <div className='work--recommendations small-24 medium-24 large-8 columns' >
          <h3 className='work--recommendations--title' >Noget der ligner</h3>
          {personalRecommendations}
          {genericRecommendations}
        </div>
      </div>
    );
  }
}

WorkLayout.displayName = 'WorkLayout.mobilsoeg';
WorkLayout.propTypes = {
  editions: PropTypes.array,
  id: PropTypes.string,
  specifics: PropTypes.array,
  work: PropTypes.object
};
