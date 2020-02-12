import { fork, all } from "redux-saga/effects";
import IndicatorSaga from '../services/indicadores/IndicadoresSaga'
import AuthSaga from '../services/Auth/AuthSaga'
import ProducerSaga from '../services/Producer/ProducerSaga'

export default function* rootSaga() {
  yield all([
    fork(IndicatorSaga),
    fork(AuthSaga),
    fork(ProducerSaga),
  ]);
}
