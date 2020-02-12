import { put, takeLatest, all } from 'redux-saga/effects';
import Api from "../../common/api";
import { producer } from "./ProducerActions"

function* createProducer({ payload }) {
  const response = yield Api.post('/producers/create', payload.producer)
  if (response.ok) {
    yield put(producer.createProducerResponse());
  } else {
    const err = new TypeError('ERROR_PRODUCER')
    yield put(producer.createProducerResponse(err))
  }
}

function* getGender({ payload }) {
  const response = yield Api.get('/producers/genderCount')
  console.log("response==>", response)
  if (response.ok) {
    yield put(producer.createProducerResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_PRODUCER_GENDER')
    yield put(producer.createProducerResponse(err))
  }
}

function* ActionWatcher() {
  yield takeLatest(producer.createProducer, createProducer)
  yield takeLatest(producer.getGender, getGender)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}