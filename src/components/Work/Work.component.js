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
import coverImageStore from '../../stores/CoverImage.store.js';

const Work = React.createClass({
  propTypes: {
    pid: React.PropTypes.string,
    work: React.PropTypes.array,
    coverImages: React.PropTypes.object
  },

  getInitialState() {
    return {
      pid: this.props.pid,
      work: workStore.getStore(),
      coverImages: {images: new Map()}
    };
  },
  
  getWork() {
    let result = {
      pid: this.state.pid,
    };
    workAction(result);
  },

  updateCoverImages(coverImages) {
    this.setState({coverImages});
  },

  updateWork(work) {
    this.setState({work});
  },

  componentDidMount: function() {
    this.getWork();
    workStore.listen(this.updateWork);
    coverImageStore.listen(this.updateCoverImages);
  },

  render() {
    const {pid, work, coverImages} = this.state;
    return (
      <div className='work' >
        <div className='general'>{work.result.general}</div>
        <div className='specific'>{work.result.specific}</div>
      </div>
    );
  }
});

export default Work;
