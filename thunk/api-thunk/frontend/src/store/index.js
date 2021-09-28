import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import serviceListReducer from '../reducers/serviceListReducer';
import serviceAddReducer from '../reducers/serviceAddReducer';
import serviceEditReducer from '../reducers/serviceEditReducer';
import serviceUpdateReducer from '../reducers/serviceUpdateReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
  serviceEdit: serviceEditReducer,
  serviceUpdate: serviceUpdateReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)),);

export default store;
