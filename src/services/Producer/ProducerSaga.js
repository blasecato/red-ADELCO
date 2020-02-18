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

function* updateProducer({ payload }) {
  const response = yield Api.put('/producers/update', payload.producer)
  if (response.ok) {
    yield put(producer.updateProducerResponse());
  } else {
    const err = new TypeError('ERROR_PRODUCER')
    yield put(producer.updateProducerResponse(err))
  }
}

function* getGender({ payload }) {
  const response = yield Api.get('/producers/genderCount')
  if (response.ok) {
    yield put(producer.getGenderResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_PRODUCER_GENDER')
    yield put(producer.getGenderResponse(err))
  }
}

function* getProducerDate({ payload }) {
  const response = yield Api.get('/producers/producer-date')
  if (response.ok) {
    yield put(producer.getProducerDateResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_PRODUCER_DATE')
    yield put(producer.getProducerDateResponse(err))
  }
}

function* getProducerUpdate({ payload }) {
  const response = yield Api.get('/producers/date-update')
  if (response.ok) {
    yield put(producer.getProducerUpdateResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_DATE_UPDATE')
    yield put(producer.getProducerUpdateResponse(err))
  }
}

function* ActionWatcher() {
  yield takeLatest(producer.createProducer, createProducer)
  yield takeLatest(producer.updateProducer, updateProducer)
  yield takeLatest(producer.getGender, getGender)
  yield takeLatest(producer.getProducerDate, getProducerDate)
  yield takeLatest(producer.getProducerUpdate, getProducerUpdate)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}