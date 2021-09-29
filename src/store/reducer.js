import * as appAction from './action';

// reducer with initial state
const initialState = {
  fetching: false,
  users: [],
  error: null
};

export function reducer(state = initialState, action) {
  // console.log('state.users:',state.users);
  
  switch (action.type) {
    case appAction.API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case appAction.API_CALL_SUCCESS: {
      let _users = state.users.concat(action.users.results);
      // console.log('_users:',_users);
      return { ...state, fetching: false, users: _users };
    }
    case appAction.API_CALL_FAILURE:
      return { ...state, fetching: false, users: null, error: action.error };
    default:
      return state;
  }
}