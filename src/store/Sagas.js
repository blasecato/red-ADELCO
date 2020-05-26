import { fork, all } from "redux-saga/effects";
import IndicatorSaga from '../services/indicadores/IndicadoresSaga'
import AuthSaga from '../services/Auth/AuthSaga'
import ProducerSaga from '../services/Producer/ProducerSaga'
import CropSaga from '../services/crop/cropSaga'
import MunicipioSaga from '../services/municipio/municipioSaga'
import OrganizationSaga from '../services/organization/organizationSaga'
import cadeSaga from '../services/line-cadena/line-cadenaSaga'
import atfSaga from "../services/atf/AtfSaga";
import kitSaga from "../services/Kit/KitSaga";

export default function* rootSaga() {
  yield all([
    fork(IndicatorSaga),
    fork(AuthSaga),
    fork(ProducerSaga),
    fork(CropSaga),
    fork(MunicipioSaga),
    fork(OrganizationSaga),
    fork(cadeSaga),
    fork(atfSaga),
    fork(kitSaga),
  ]);
}
