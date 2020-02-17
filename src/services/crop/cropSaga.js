import { put, takeLatest, all } from 'redux-saga/effects';
import Api from "../../common/api";
import { crop } from "./cropActions"

function* getCropsProducer() {
  console.log("response")
  const response = yield Api.get('/crops/producer')
  console.log("response==>", response)
  if (response.ok) {
    yield put(crop.getCropsProducerResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_PRODUCER_CROPS')
    yield put(crop.getCropsProducerResponse(err))
  }
}

function* ActionWatcher() {
  yield takeLatest(crop.getCropsProducer, getCropsProducer)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}