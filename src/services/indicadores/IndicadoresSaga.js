import { put, takeLatest, all } from 'redux-saga/effects';
import Api from "../../common/api";
import { indicators } from "./IndicadoresActions"


function* Indicators() {
  const response = yield Api.get('/indicadores')
  const payload = yield response.json();
  if (response.ok) {
    yield put(indicators.getIndicatorsResponse(payload));
  } else {
    const err = new TypeError('ERROR_INDICATORS')
    yield put(indicators.getIndicatorsResponse(err))
  }
}


function* ActionWatcher() {
  yield takeLatest(indicators.getIndicators, Indicators)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}