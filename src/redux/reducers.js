import update from 'immutability-helper';
import { SET_BIKE_RESULTS, SET_AUTH_TOKEN } from './actions';
import { combineReducers } from 'redux';

const initialAuthState = {
  token: null
}

const initialBikeState = {
  results: []
};

const authReducer = (state = initialAuthState, action) => {
  switch(action.type) {
    case SET_AUTH_TOKEN:
      return update(state, {
        token: {$set: action.payload}
      });
      
    default:
      return state;
  };
};

const bikeReducer = (state = initialBikeState, action) => {
  switch(action.type) {
    case SET_BIKE_RESULTS:
      return update(state, {
        results: {$set: action.payload}
      });
      
    default:
      return state;
  };
};

const allReducers = combineReducers({
  bikes: bikeReducer,
  auth: authReducer,
});

export default allReducers;