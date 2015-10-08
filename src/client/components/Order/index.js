'use strict';
import ReactDOM from 'react-dom';
import {Order} from 'dbc-react-components';
import {CoverImage} from 'dbc-react-components';
import {rewriteCoverImageUrl} from '../../../utils/CoverImage.util.js';

/**
 * Entry point for Order
 *
 * If a querystring from the url exists it is added to the global window object, and should be passed to the client
 */

const image = <CoverImage pids={window.ORDER_PROPS.coverImageIds.split(',')} prefSize={'detail_500'} rewriteImgUrl={rewriteCoverImageUrl} />;

ReactDOM.render(<Order coverImage={image} order={window.ORDER_PROPS || {}} />, document.getElementById('order'));
