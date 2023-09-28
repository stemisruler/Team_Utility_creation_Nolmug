import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import weatherReducer from '../reducers/weatherReducer';
import userLocationReducer from '../reducers/userLocationReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  userLocation: userLocationReducer,

});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;