import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as  Router } from 'react-router-dom';
import { Provider} from 'react-redux';
import { createStore } from 'redux';

import App from './components/app';

ReactDOM.render(
  <Router>
      <App />
  </Router>,
    document.getElementById('root')
);
