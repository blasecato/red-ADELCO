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

function* getOrganization() {
  const response = yield Api.get('/organization')
  if (response.ok) {
    yield put(organization.getOrganizationResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_CREATE_ORGANIZATION')
    yield put(organization.getOrganizationResponse(err))
  }
}

function* get({ payload }) {
  const response = yield Api.get(`/organization/count/persons-organization?idOrganization=${payload.id}`)
  if (response.ok) {
    yield put(organization.getResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_GET_PRODUCER')
    yield put(organization.getResponse(err))
  }
}

function* update({ payload }) {
  const response = yield Api.put(`/organization/update`, payload.organization)
  if (response.ok) {
    yield put(organization.updateResponse());
  } else {
    const err = new TypeError('ERROR_GET_PRODUCER')
    yield put(organization.getResponse(err))
  }
}

function* ActionWatcher() {
  yield takeLatest(organization.createOrganization, createOrganization)
  yield takeLatest(organization.getOrganization, getOrganization)
  yield takeLatest(organization.get, get)
  yield takeLatest(organization.update, update)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}