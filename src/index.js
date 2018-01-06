import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider} from 'react-redux';
import { createStore } from 'redux';

import App from './components/app';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
