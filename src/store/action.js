// Action 
export const API_CALL_REQUEST = 'API_CALL_REQUEST';
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
export const API_CALL_FAILURE = 'API_CALL_FAILURE';

// Load users Dispatch method
export const loadUsers = (pageNo) => dispatch => {
    dispatch({ type: API_CALL_REQUEST, payload: pageNo });
}