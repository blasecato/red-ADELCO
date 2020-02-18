import { put, takeLatest, all } from 'redux-saga/effects';
import Api from "../../common/api";
import { municipios } from "./municipioActions"

function* getMunicipios() {
  const response = yield Api.get('/organization/getMunicipios')
  console.log("response==>", response)
  if (response.ok) {
    yield put(municipios.getMunicipiosResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_MUNICIPIOS')
    yield put(municipios.getMunicipiosResponse(err))
  }
}

function* ActionWatcher() {
  yield takeLatest(municipios.getMunicipios, getMunicipios)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}