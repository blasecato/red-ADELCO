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

function* getCropsDate() {
  const response = yield Api.get('/crops/date-crop')
  if (response.ok) {
    yield put(crop.getCropsDateResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_PRODUCER_CROPS')
    yield put(crop.getCropsDateResponse(err))
  }
}

function* getLineProductive() {
  const response = yield Api.get('/cadenas-productivas/line')
  if (response.ok) {
    yield put(crop.getLineProductiveResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_LINE_PRODUCTIVE')
    yield put(crop.getLineProductiveResponse(err))
  }
}

function* createCrop({ payload }) {
  const response = yield Api.post('/crops/create', payload.crop)
  if (response.ok) {
    yield put(crop.createCropResponse());
  } else {
    const err = new TypeError('ERROR_LINE_PRODUCTIVE')
    yield put(crop.createCropResponse(err))
  }
}


function* ActionWatcher() {
  yield takeLatest(crop.getCropsProducer, getCropsProducer)
  yield takeLatest(crop.getCropsDate, getCropsDate)
  yield takeLatest(crop.getLineProductive, getLineProductive)
  yield takeLatest(crop.createCrop, createCrop)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}