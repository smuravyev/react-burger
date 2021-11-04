import React from 'react';
import ReactDOM from 'react-dom';

import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducerRoot }  from './services/reducers';
import thunk from 'redux-thunk';

import './index.css';

import App from './components/app/app';
import reportWebVitals from './reportWebVitals';

const composeEnhancers =
      (typeof window === 'object') && 
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const oStore = createStore(reducerRoot,
                          composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    (
        <React.StrictMode>
            <Provider store={oStore}>
                <App />
            </Provider>
        </React.StrictMode>
    ),
    document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();