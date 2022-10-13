import { combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { bandsReducer } from '../reducers/bandsReducer';
import { configureStore } from '@reduxjs/toolkit'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    bands: bandsReducer
});

export const store = configureStore(
    { reducer: reducers },
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
