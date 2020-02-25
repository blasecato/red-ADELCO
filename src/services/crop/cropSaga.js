import { put, takeLatest, all } from 'redux-saga/effects';
import Api from "../../common/api";
import { crop } from "./cropActions"

function* getCropsProducer() {
  const response = yield Api.get('/crops/producer')
  if (response.ok) {
    yield put(crop.getCropsProducerResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_PRODUCER_CROPS')
    yield put(crop.getCropsProducerResponse(err))
  }
}

function* getLineProductive() {
  const response = yield Api.get('/cadenas-productivas')
  if (response.ok) {
    yield put(crop.getLineProductiveResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_LINE_PRODUCTIVE')
    yield put(crop.getLineProductiveResponse(err))
  }
}

function* ActionWatcher() {
  yield takeLatest(crop.getCropsProducer, getCropsProducer)
  yield takeLatest(crop.getLineProductive, getLineProductive)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}