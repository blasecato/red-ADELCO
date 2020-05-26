import { put, takeLatest, all } from 'redux-saga/effects';
import Api from "../../common/api";
import { atf } from "./AtfActions"

function* createAtf({ payload }) {
  const response = yield Api.post('/producers/create-aft', payload.atf)
  if (response.ok) {
    yield put(atf.createAtfResponse());
  } else {
    const err = new TypeError('ERROR_CREATE_ATF')
    yield put(atf.createAtfResponse(err))
  }
}

function* getAtf() {
  const response = yield Api.get('/producers/get-aft/organization')
  if (response.ok) {
    yield put(atf.getAtfResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_CREATE_ATF')
    yield put(atf.getAtfResponse(err))
  }
}

function* get({ payload }) {
  const response = yield Api.get(`/atf/count/persons-atf?idatf=${payload.id}`)
  if (response.ok) {
    yield put(atf.getResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_GET_PRODUCER')
    yield put(atf.getResponse(err))
  }
}

function* update({ payload }) {
  const response = yield Api.put(`/atf/update`, payload.atf)
  if (response.ok) {
    yield put(atf.updateResponse());
  } else {
    const err = new TypeError('ERROR_GET_PRODUCER')
    yield put(atf.getResponse(err))
  }
}

function* ActionWatcher() {
  yield takeLatest(atf.createAtf, createAtf)
  yield takeLatest(atf.getAtf, getAtf)
  yield takeLatest(atf.get, get)
  yield takeLatest(atf.update, update)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}