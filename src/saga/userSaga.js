import { put, takeEvery, call } from "redux-saga/effects"
import { addManyCustomersAction, ASYNC_ADD_MANY_CUSTOMERS } from "../store/customerReducer";

const getUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users/');
}

function* fetchUserWorker() {
  const data = yield call(getUsers);
  const json = yield call(() => new Promise(res => res(data.json())));
  yield put(addManyCustomersAction(json));
}

export function* userWatcher() {
  yield takeEvery(ASYNC_ADD_MANY_CUSTOMERS, fetchUserWorker);
}
