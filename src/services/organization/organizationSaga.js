import { put, takeLatest, all } from 'redux-saga/effects';
import Api from "../../common/api";
import { organization } from "./organizationActions"

function* createOrganization({ payload }) {
  const response = yield Api.post('/organization/create', payload.organization)
  if (response.ok) {
    yield put(organization.createOrganizationResponse());
  } else {
    const err = new TypeError('ERROR_CREATE_ORGANIZATION')
    yield put(organization.createOrganizationResponse(err))
  }
}

function* updateUser({ payload }) {
  console.log("pasfdsf",payload)
  const response = yield Api.put('/organization/remove/organization-producer', payload.user)
  if (response.ok) {
    yield put(organization.updateUserResponse());
  } else {
    const err = new TypeError('ERROR_UPDATE_ORGANIZATION')
    yield put(organization.updateUserResponse(err))
  }
}

function* createDiagnostico({ payload }) {
  const response = yield Api.post('/crops/create/diagnostic', payload.organization)
  if (response.ok) {
    yield put(organization.createDiagnosticoResponse());
  } else {
    const err = new TypeError('ERROR_CREATE_DIAGNOSTICO')
    yield put(organization.createDiagnosticoResponse(err))
  }
}

function* getOrganization() {
  const response = yield Api.get('/organization')
  if (response.ok) {
    yield put(organization.getOrganizationResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_CREATE_ORGANIZATION')
    yield put(organization.getOrganizationResponse(err))
  }
}

function* getDiagnostico() {
  const response = yield Api.get('/crops/get/crops-diagnostic')
  if (response.ok) {
    yield put(organization.getDiagnosticoResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_CREATE_DIAGNOSTICO')
    yield put(organization.getDiagnosticoResponse(err))
  }
}

function* get({ payload }) {
  const response = yield Api.get(`/organization/count/persons-organization?id=${payload.id}`)
  if (response.ok) {
    yield put(organization.getResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_GET_PRODUCER')
    yield put(organization.getResponse(err))
  }
}

function* getUser({ payload }) {
  const response = yield Api.get(`/organization/getDeleteUserOrg/${payload.user}`)
  if (response.ok) {
    yield put(organization.getUserResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_GET_PRODUCER')
    yield put(organization.getUserResponse(err))
  }
}

function* update({ payload }) {
  const response = yield Api.put(`/organization/update`, payload.organization)
  console.log(payload.organization)
  if (response.ok) {
    yield put(organization.updateResponse());
  } else {
    const err = new TypeError('ERROR_GET_PRODUCER')
    yield put(organization.getResponse(err))
  }
}

function* ActionWatcher() {
  yield takeLatest(organization.createOrganization, createOrganization)
  yield takeLatest(organization.updateUser, updateUser)
  yield takeLatest(organization.createDiagnostico, createDiagnostico)
  yield takeLatest(organization.getOrganization, getOrganization)
  yield takeLatest(organization.getDiagnostico, getDiagnostico)
  yield takeLatest(organization.get, get)
  yield takeLatest(organization.getUser, getUser)
  yield takeLatest(organization.update, update)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}