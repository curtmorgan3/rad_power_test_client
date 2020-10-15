// Action Types
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

// Actions
export function setCurrentUser(payload) {
  return { type: SET_CURRENT_USER, payload };
};