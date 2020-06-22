import { put, takeLatest, all } from 'redux-saga/effects';
import Api from "../../common/api";
import { indicators } from "./IndicadoresActions"

function* Indicators() {
  const response = yield Api.get('/indicadores/get-all')
  if (response.ok) {
    yield put(indicators.getIndicatorsResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_INDICATORS')
    yield put(indicators.getIndicatorsResponse(err))
  }
}

function* update({ payload }) {
  const response = yield Api.put(`/indicadores/update`, payload.indicators)
  console.log(payload.indicators)
  if (response.ok) {
    yield put(indicators.updateResponse());
  } else {
    const err = new TypeError('ERROR_GET_PRODUCER')
    yield put(indicators.getResponse(err))
  }
}

function* ActionWatcher() {
  yield takeLatest(indicators.getIndicators, Indicators)
  yield takeLatest(indicators.update, update)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}