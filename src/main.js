'use strict';

import React    from 'react';
import ReactDOM from 'react-dom';

import Main     from './components/Main';

import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

ReactDOM.render((
  <Router history={ browserHistory }>
    <Route path='*' component={ Main } />
  </Router>
), document.getElementById('main'));
