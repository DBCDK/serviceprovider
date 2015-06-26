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
    pid: React.PropTypes.string,
    work: React.PropTypes.array
  },

  getInitialState() {
    return {
      pid: this.props.pid,
      work: workStore.getStore()
    };
  },

  getWork() {
    let result = {
      pid: this.state.pid
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
    const {pid, work, coverImages} = this.state; // eslint-disable-line
    if (work.result.length === 0) {
      return (<div />);
    }
    let title;
    if (work.result.hasOwnProperty('general')) {
      title = work.result.general.title;
    }
    return (
      <div className='work' >
        <Covers pids={work.result.specific[0].identifiers} />
        <div className='general' >
          <div className='title'>{title}</div>
        </div>
        <div className='specific' >{work.result.specific}</div>
      </div>
    );
  }
});

export default Work;
