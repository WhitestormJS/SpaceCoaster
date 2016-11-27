import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {SpaceCoaster} from './app/game';

import './index.styl';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={SpaceCoaster}/>
  </Router>,
  document.getElementById('root')
);
