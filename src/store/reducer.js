import * as appAction from './action';

// reducer with initial state
const initialState = {
  fetching: false,
  users: null,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case appAction.API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case appAction.API_CALL_SUCCESS:
      return { ...state, fetching: false, users: action.users };
    case appAction.API_CALL_FAILURE:
      return { ...state, fetching: false, users: null, error: action.error };
    default:
      return state;
  }
}