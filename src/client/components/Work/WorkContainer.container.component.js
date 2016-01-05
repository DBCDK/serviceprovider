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
import WorkEdition from './WorkEdition.component.js';

// Stores
import WorkStore from '../../stores/Work.store.js';

class WorkContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      work: WorkStore.getInitialState()
    };

    this.state.work = isEmpty(this.props.work) ? this.state.work : this.props.work;

    this.unsubscribe = [
      WorkStore.listen(this.workStoreSentData.bind(this))
    ];
  }

  componentWillMount() {
    // Grab data from JSON on window object, if it exists
    if (typeof window !== 'undefined' && window.WORKDATA && window.WORKDATA.length > 0) {
      this.state.work = JSON.parse(window.WORKDATA);
    }
  }

  componentDidMount() {
    if (this.state.work.result.title) {
      document.title = this.state.work.result.title;
    }
    workAction({id: this.props.id});
  }

  componentWillUnmount() {
    this.unsubscribe.forEach(
      (unsubscriber) => {
        unsubscriber();
      }
    );
  }

  workStoreSentData(data) {
    if (Object.keys(this.state.work.result).length === 0) {
      this.setState({
        work: data
      });
    }
  }

  render() {
    const WorkLayout = this.props.workLayout;
    let work = this.state.work;
    const id = this.props.id;

    if (this.props.work && this.props.work.info && this.props.work.info.hits !== '0') {
      work = this.props.work;
    }

    if (work.error && work.error.length > 0) {
      return (
        <div>
          <h2>Der er sket en fejl</h2>
          <p>Vi beklager! Der skete en fejl under hentningen af dette værk. Prøv venligst senere eller kontakt supporten.</p>
        </div>
      );
    }

    // No result found!
    if (work.info && work.info.hits === '0') {
      return <div className="work-not-found" >Værket blev ikke fundet</div>;
    }

    // Result is pending, waiting for serviceprovider
    if (Object.keys(work.info).length === 0 && Object.keys(work.result).length === 0 && Object.keys(work.brief).length === 0) {
      return (
        <div className='row' >
          <span className='loader' />
        </div>
      );
    }

    let workResult = isEmpty(work.result) ? work.brief : work.result;

    // Data was found, begin rendering
    let editions = [];
    let specifics_object = {};

    if (Array.isArray(workResult.editions)) {
      workResult.editions.forEach((element, index) => {
        editions.push(
          <WorkEdition
            accessType={element.accessType}
            date={element.date}
            edition={element.edition}
            extent={element.extent}
            identifier={element.identifier}
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
    }

    const specifics = values(specifics_object);
    return (
      <WorkLayout
        editions={editions}
        id={id}
        specifics={specifics}
        work={workResult}
      />
    );
  }
}

WorkContainer.displayName = 'WorkContainer.container';
WorkContainer.propTypes = {
  id: React.PropTypes.string.isRequired,
  work: React.PropTypes.object,
  workLayout: React.PropTypes.func
};

export default WorkContainer;
