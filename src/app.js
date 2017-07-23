"use strict"

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

import reducers from './reducers/index';

//  1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import Rps from './components/pages/rps';

render(
    <Provider store={store}>
        <Rps />
    </Provider>,
    document.getElementById('app')
);