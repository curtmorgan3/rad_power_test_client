import update from 'immutability-helper';
import { SET_CURRENT_USER } from './actions';
import { combineReducers } from 'redux';

const initialUserState = {
  currentUser: {},
  collection: []
};

const userReducer = (state = initialUserState, action) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return update(state, {
        currentUser: {$set: action.payload}
      });
      
    default:
      return state;
  };
};

const allReducers = combineReducers({
  user: userReducer,
});

export default allReducers;