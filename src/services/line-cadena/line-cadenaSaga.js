import { put, takeLatest, all } from 'redux-saga/effects';
import Api from "../../common/api";
import { cade } from "./line-cadenaActions"

function* getDateInfra() {
  const response = yield Api.get('/infrastructures/DateInfra')
  if (response.ok) {
    yield put(cade.getDateInfraResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_PRODUCER_CROPS')
    yield put(cade.getDateInfraResponse(err))
  }
}

function* getInfra() {
  const response = yield Api.get('/infrastructures')
  if (response.ok) {
    console.log(response)
    yield put(cade.getInfraResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_PRODUCER_CROPS')
    yield put(cade.getInfraResponse(err))
  }
}

function* getVeredas() {
  const response = yield Api.get('/cadenas-productivas/veredas')
  if (response.ok) {
    yield put(cade.getVeredasResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_LINE_PRODUCTIVE')
    yield put(cade.getVeredasResponse(err))
  }
}

function* getCade() {
  const response = yield Api.get('/cadenas-productivas')
  if (response.ok) {
    yield put(cade.getCadeResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_LINE_PRODUCTIVE')
    yield put(cade.getCadeResponse(err))
  }
}

function* createInfra({ payload }) {
  const response = yield Api.post('/infrastructures/create', payload.infra)
  if (response.ok) {
    yield put(cade.createInfraResponse());
  } else {
    const err = new TypeError('ERROR_LINE_PRODUCTIVE')
    yield put(cade.createInfraResponse(err))
  }
}

function* createVereda({ payload }) {
  const response = yield Api.post('/cadenas-productivas/veredas', payload.vereda)
  if (response.ok) {
    yield put(cade.createVeredaResponse());
  } else {
    const err = new TypeError('ERROR_LINE_PRODUCTIVE')
    yield put(cade.createVeredaResponse(err))
  }
}

function* createCadena({ payload }) {
  const response = yield Api.post('/cadenas-productivas', payload.cadena)
  if (response.ok) {
    yield put(cade.createCadenaResponse());
  } else {
    const err = new TypeError('ERROR_LINE_PRODUCTIVE')
    yield put(cade.createCadenaResponse(err))
  }
}

function* createLine({ payload }) {
  const response = yield Api.post('/cadenas-productivas/line', payload.line)
  if (response.ok) {
    yield put(cade.createLineResponse());
  } else {
    const err = new TypeError('ERROR_LINE_PRODUCTIVE')
    yield put(cade.createLineResponse(err))
  }
}

function* get({ payload }) {
  const response = yield Api.get(`/crops/quantity/productive-line?productivelineId=${payload.id}`)
  if (response.ok) {
    yield put(cade.getResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_GET_PRODUCER')
    yield put(cade.getResponse(err))
  }
}

function* update({ payload }) {
  const response = yield Api.put(`/infrastructures/update`, payload.cade)
  if (response.ok) {
    yield put(cade.updateResponse());
  } else {
    const err = new TypeError('ERROR_GET_PRODUCER')
    yield put(cade.getResponse(err))
  }
}

function* ActionWatcher() {
  yield takeLatest(cade.getDateInfra, getDateInfra)
  yield takeLatest(cade.getInfra, getInfra)
  yield takeLatest(cade.getVeredas, getVeredas)
  yield takeLatest(cade.createInfra, createInfra)
  yield takeLatest(cade.createVereda, createVereda)
  yield takeLatest(cade.createCadena, createCadena)
  yield takeLatest(cade.createLine, createLine)
  yield takeLatest(cade.getCade, getCade)
  yield takeLatest(cade.get, get)
  yield takeLatest(cade.update, update)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}