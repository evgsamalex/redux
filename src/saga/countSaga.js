import { put, takeEvery } from "redux-saga/effects"
import { ASYNC_DECREMENT, ASYNC_INCREMENT, decrementAction, incrementAction } from '../store/countReducer';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementWorker({ payload }) {
  yield delay(1000);
  yield put(incrementAction(payload))
}

function* decrementWorker({ payload }) {
  yield delay(1000);
  yield put(decrementAction(payload));
}

export function* countWatcher() {
  yield takeEvery(ASYNC_INCREMENT, incrementWorker);
  yield takeEvery(ASYNC_DECREMENT, decrementWorker);
}
