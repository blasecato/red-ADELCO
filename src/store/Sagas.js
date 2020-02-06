import { fork, all } from "redux-saga/effects";
import IndicatorSaga from '../services/indicadores/IndicadoresSaga'

/** example saga */
//import AuthSaga from '../services/Auth/AuthSaga'

export default function* rootSaga() {
  yield all([
    fork(IndicatorSaga),
  ]);
}
