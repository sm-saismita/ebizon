import { takeLatest, call, put } from "redux-saga/effects";
import * as api from '../services/API';
import * as appAction from './action';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest(appAction.API_CALL_REQUEST, workerSaga);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
    console.log('worker saga testing');
  try {
    const response = yield call(api.fetchUsers);
    const users = response.data;
    // console.log('users:',JSON.stringify(response.data));

    // dispatch a success action to the store with the new users
    yield put({ type: appAction.API_CALL_SUCCESS, users });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: appAction.API_CALL_FAILURE, error });
  }
}