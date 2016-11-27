import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Hello} from './app/hello';

import './index.styl';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Hello}/>
  </Router>,
  document.getElementById('root')
);
