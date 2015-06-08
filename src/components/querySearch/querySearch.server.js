'use strict';
import React from 'react';
import QueryField from 'dbc-react-querystring';

export default function querySearchServer (props) {
  let prop = props || [];
  const search = React.renderToString(<QueryField query={ props }/>);
  return {
    search,
    props: JSON.stringify(props)
  }
}