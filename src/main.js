'use strict';

import React    from 'react';
import ReactDOM from 'react-dom';

import Main     from './components/Main';

import createBrowserHistory from 'history/lib/createBrowserHistory';

import { Router, Route } from 'react-router';

ReactDOM.render((
  <Router history={ createBrowserHistory() }>
    <Route path='*' component={ Main } />
  </Router>
), document.getElementById('main'));
