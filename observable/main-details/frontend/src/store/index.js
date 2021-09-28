import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import serviceListReducer from '../reducers/serviceListReducer';
import serviceDetailsReducer from '../reducers/serviceDetailsReducer';
import {fetchSuccess, fetchDetailsSuccess } from '../epics';


const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceDetails: serviceDetailsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
  fetchDetailsSuccess,
  fetchSuccess
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);

export default store;