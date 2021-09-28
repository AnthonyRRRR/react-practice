import { takeLatest, put, spawn, debounce, retry, call, fork, takeEvery, take } from 'redux-saga/effects';
import { fetchDetails, fetchServiceList } from '../api';
import {
  fetchServiceDetailsFailure, fetchServiceDetailsRequest,
  fetchServiceDetailsSuccess,
  fetchServicesFailure,
  fetchServicesSuccess
} from '../actions/actionCreators';
import { FETCH_SERVICE_DETAILS_REQUEST, FETCH_SERVICES_REQUEST } from '../actions/actionTypes';
import { act } from '@testing-library/react';

function* handleServiceListSaga() {
  try {
    const items = yield call(fetchServiceList)
    yield put(fetchServicesSuccess(items));
  } catch (e) {
    yield put(fetchServicesFailure(e.message));
  }
}

function* watchServiceListSaga() {
  yield takeEvery(FETCH_SERVICES_REQUEST, handleServiceListSaga)
}

function* handleDetailsSaga(action) {
  // handleChangeIdSaga(action.payload.id)
  try {
    const item = yield call(fetchDetails, action.payload.id)
    console.log(item)

    yield put(fetchServiceDetailsSuccess(item))
  } catch (e) {
    yield put(fetchServiceDetailsFailure(e))
  }
}

function* watchDetailsSaga() {
  yield takeEvery(FETCH_SERVICE_DETAILS_REQUEST, handleDetailsSaga)
}

export default function* saga() {
  yield spawn(watchServiceListSaga)
  yield spawn(watchDetailsSaga)
  // yield spawn(watchChangeIdSaga)
}