// Action Types
export const SET_BIKE_RESULTS = 'SET_BIKE_RESULTS';
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';

// Actions
export function setBikeResults(payload) {
  return { type: SET_BIKE_RESULTS, payload };
};

export function setAuthToken(payload) {
  return { type: SET_AUTH_TOKEN, payload };
};