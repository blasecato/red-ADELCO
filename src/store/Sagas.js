import { fork, all } from "redux-saga/effects";
import IndicatorSaga from '../services/indicadores/IndicadoresSaga'
import AuthSaga from '../services/Auth/AuthSaga'
import ProducerSaga from '../services/Producer/ProducerSaga'
import CropSaga from '../services/crop/cropSaga'

export default function* rootSaga() {
  yield all([
    fork(IndicatorSaga),
    fork(AuthSaga),
    fork(ProducerSaga),
    fork(CropSaga),
  ]);
}
