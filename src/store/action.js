import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

// Load users Dispatch method
export const loadUsers = () => dispatch => {
    dispatch({ type: "API_CALL_REQUEST" });
}

// function that makes the api request and returns a Promise for response
function fetchUsers(pageNo) {
  return axios({
    method: "get",
    url: "https://randomuser.me/api/?results=100"
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
    console.log('worker saga testing');
  try {
    const response = yield call(fetchUsers);
    const users = response.data;
    // console.log('users:',JSON.stringify(response.data));

    // dispatch a success action to the store with the new users
    yield put({ type: "API_CALL_SUCCESS", users });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}