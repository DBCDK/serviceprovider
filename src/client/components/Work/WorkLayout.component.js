'use strict';

// Libraries
import React, {PropTypes} from 'react';
import {isEmpty, union} from 'lodash';

// Components
import CoverImage from '../CoverImage/CoverImageContainer.component';
import OrderButtonsContainerComponent from '../Order/OrderButtons/OrderButtonsContainer.component.js';
import LikeContainer from '../LikeDislike/LikeContainer.component.js';
import WorkRecommendation from './WorkRecommendation.component';
import ToggleExpand from './WorkToggleExpand.component';
import BackButton from '../TopNavigation/BackButton.js';


// Actions
import RecommendationActions from '../../actions/Recommendations.actions.js';

// Stores
import ProfileStore from '../../stores/Profile.store';
import RecommendationsStore from '../../stores/Recommendations.store.js';

export default class WorkLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: ProfileStore.getState(),
      recommendations: RecommendationsStore.getInitialState(),
      detailsExpanded: false
    };

    this.unsubscribe = [
      ProfileStore.listen(() => {
        this.setState({
          profile: ProfileStore.getState()
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
      </div>
    );
  }

  renderOrderButton(profile) {
    if (this.props.work.relations) {
      if (profile.userIsLoggedIn && profile.profile.agencyid) {
        return (
          <OrderButtonsContainerComponent
            agency={profile.profile.agencyid}
            defaultLibrary={profile.profile.pickup_agency ? profile.profile.pickup_agency : profile.profile.agencyid}
            manifestations={this.props.specifics}
            relations={this.props.work.relations}
          />
        );
      }

      return (
        <OrderButtonsContainerComponent
          agency={''}
          defaultLibrary={''}
          manifestations={this.props.specifics}
          relations={this.props.work.relations}
        />
      );
    }

    return '';
  }

  renderDetails() {
    return (
      <ToggleExpand label='Detaljer om værket' >
        <div className='series clearfix' >
          <span>{this.props.work.series.length > 0 ? 'Serie: ' : ''}</span>
          {this.props.work.series}
        </div>

        <div className='clearfix' >
          <div className='actors clearfix' >
            <span className="actor-text">{this.props.work.actors.length > 0 ? 'Medvirkende: ' : ''}</span>
            {this.props.work.actors.map((actor, index) => {
              return (
                <span className='actor' key={'actor_' + index} >
                  <a href={'/search?phrase.creator=' + encodeURIComponent(actor)} >
                    {actor}
                  </a>
                </span>
              );
            })}
          </div>
        </div>

        <div className='subjects clearfix' >
          <span>{this.props.work.subjects.length > 0 ? 'Emner: ' : ''}</span>
          {this.props.work.subjects.map((subject, index) => {
            return (
              <a className='subject' key={'subject_' + index}
                 href={'/search?phrase.subject=' + encodeURIComponent(subject)} >{subject}</a>
            );
          })}
        </div>

        <div className='dk5s clearfix' >
          <span>{this.props.work.dk5s.length > 0 ? 'Opstilling: ' : ''}</span>
          {this.props.work.dk5s.map((dk5, index) => {
            return (
              <a className='opstilling' key={'dk5_' + index}
                 href={'/search?dkcclterm.dk=' + encodeURIComponent(dk5.value)} >{dk5.text}</a>
            );
          })}
        </div>

        <div className='audience clearfix' >
          <div className='age' >{this.props.work.audience.age.join(', ')}</div>
          <div className='pegi' >{this.props.work.audience.pegi}</div>
          <div className='medieraad' >{this.props.work.audience.medieraad}</div>
        </div>

        <div className='tracks clearfix' >
          {this.props.work.tracks.length > 0 ? 'Trackliste: ' : ''}
          {this.props.work.tracks.map((track, index) => {
            return (
              <div className='track' key={'track_' + index} >{track}</div>);
          })}
        </div>

        <div className='language clearfix' >
          <span>{this.props.work.languages.length > 0 ? 'Sprog: ' : ''}</span>
          <span>{this.props.work.languages.join(', ')}</span>
        </div>
      </ToggleExpand>
    );
  }

  renderEditions() {
    return (
      <ToggleExpand label='Udgaver' >
        <div className='editions clearfix' >
          {this.props.editions}
        </div>
      </ToggleExpand>

    );
  }

  renderRecommendations() {
    if (!isEmpty(this.state.recommendations.recommendations.personal) || !isEmpty(this.state.recommendations.recommendations.generic)) {
      const generic = this.state.recommendations.recommendations.generic || [];
      const personal = this.state.recommendations.recommendations.personal || [];

      const recommendations = union(
        generic.splice(6, generic.length),
        personal.splice(6, personal.length)
      );

      const personalRecommendations = this.state.profile.userIsLoggedIn ? (
        <WorkRecommendation
          recommendations={recommendations}
          type='generic' />
      ) : (
        <WorkRecommendation
          recommendations={this.state.recommendations.recommendations.generic}
          type='generic' />
      );

      return (
        <div className='work--recommendations small-24 medium-24 large-8 columns' >
          <h3 className='work--recommendations--title' >Noget der ligner</h3>
          {personalRecommendations}
        </div>
      );
    }
  }

  goBack() {
    history.go(-1);
  }

  render() {
    const orderButtonComponent = this.renderOrderButton(this.state.profile);

    let workRecommendations = this.renderRecommendations();

    const likeContainers = this.state.profile.userIsLoggedIn ? this.getLikeDislikeContainers(this.props.id) : ' ';

    return (
      <div className='work--container row' data-pid={this.props.id} >
        <div className='small-24 medium-24 large-16 columns left-column' >
          <div className='work--main' >
            <BackButton />
            <div className='work--image' >
              <CoverImage noCoverUrl='/covers/no-cover-image-book.png'
                          pids={[this.props.id, this.props.work.pid]}
                          prefSize='detail_500' />
            </div>
            <div className='work--information' >
              {likeContainers}
              <h1 className='work--title' >{this.props.work.title}</h1>

              <div className='work--creators' >
                <a href={'/search?phrase.creator=' + encodeURIComponent(this.props.work.creator)} >
                  {this.props.work.creator}
                </a>
              </div>
              <div className='work--actions'>
                {orderButtonComponent}
              </div>
              <div className='work--description' >{this.props.work.abstract}</div>
            </div>
          </div>
          <div className='work--details' >
            {this.renderDetails()}
          </div>
          <div className='work--editions' >
            {this.renderEditions()}
          </div>
        </div>

        <div className='right-column recommendations' >
          {workRecommendations}
        </div>
      </div>
    );
  }
}

WorkLayout.displayName = 'WorkLayout';
WorkLayout.propTypes = {
  editions: PropTypes.array,
  id: PropTypes.string,
  specifics: PropTypes.array,
  work: PropTypes.object
};


