import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import rootReducer from './Reducer';


const storeInstance = createStore(
  rootReducer,
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);
