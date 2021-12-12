import { StrictMode } from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';

import './index.css';

import { App } from './components';

import reportWebVitals from './reportWebVitals';

import oStore from './services/store';

render(
    (
        <StrictMode>
            <Provider store={oStore}>
                <App />
            </Provider>
        </StrictMode>
    ),
    document.getElementById('root'));

reportWebVitals();