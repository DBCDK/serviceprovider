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
      WorkStore.listen(() => this.setState({
        work: WorkStore.store
      }))
    ];
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

  render() {
    const WorkLayout = this.props.workLayout;
    const work = this.props.work ? this.props.work : this.state.work;
    const id = this.props.id;

    // No result found!
    if (work.info.hits === '0') {
      return <div className="work-not-found" >Værket blev ikke fundet</div>;
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
      return <div />;
    }

    // Data was found, begin rendering
    let editions = [];
    let specifics_object = {};

    if (Array.isArray(work.result.editions)) {
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
    }

    const specifics = values(specifics_object);
    return (
      <WorkLayout
        editions={editions}
        id={id}
        specifics={specifics}
        work={work}
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
