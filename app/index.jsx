'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App  from './components/App.jsx';
import { createStore } from 'redux';
import todoReducer from './reducers/todoReducer.js';
import { Provider } from 'react-redux';

const store = createStore(todoReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('content')
);
