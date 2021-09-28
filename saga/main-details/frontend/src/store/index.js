import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from '../sagas';
import serviceListReducer from '../reducers/serviceListReducer';
import serviceDetailsReducer from '../reducers/serviceDetailsReducer';

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceDetails: serviceDetailsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(saga);

export default store;